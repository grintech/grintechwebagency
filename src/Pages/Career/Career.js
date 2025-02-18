import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import "./career.css";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const Career = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://app.grintechwebagency.com/wp-json/our-careers/v1/careers')
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const cmsDeveloper = jobs.find(job => job.slug === "cms-developer");
    const frontendDeveloper = jobs.find(job => job.slug === "frontend-developer");

    return (
        <>
            <Helmet>
            <meta charSet="utf-8" />
            <title>Join Our Team: Explore Exciting Career Opportunities with Us</title>
            <meta name="description" content="Career opportunities at Grintech Web Agency. Join our team of innovators, creators, and dedicated to delivering  solutions in web and mobile development." />
            <link rel='canonical' href='/careers'  />
            </Helmet>

            <Header />
            <WhatsAppWidget phoneNumber="8264420387" message="Hello, how can I help you?" companyName="Grintech Web Agency" />

            <section className='career-main'>
                <h1>Careers</h1>
                <p className='text-center'>Join Our Team: Explore Exciting Career Opportunities with Us!</p>
            </section>

            <section className='career_page_content'>

            {cmsDeveloper && (
                <section className='job-posting py-5'>
                    <div className='container job-posting'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="stage">
                                    <img src={cmsDeveloper.thumbnail} className='box bounce-2 img-fluid' alt={cmsDeveloper.name}></img>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <h2>{cmsDeveloper.name}</h2>
                                <p><strong>Experience:</strong> {cmsDeveloper.experience}</p>
                                <p><strong>Salary Package:</strong> {cmsDeveloper.salary_package}</p>
                                <p><strong>Education Qualification:</strong> {cmsDeveloper.education_qualification}</p>

                                <h4>Skills Required:</h4>
                                <div dangerouslySetInnerHTML={{ __html: cmsDeveloper.skills_required }}></div>

                                <Link to='/contact' className='jobpostingbtn'>Contact Now</Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {frontendDeveloper && (
                <section className='jobopeningeven py-5'>
                    <div className='container job-posting'>
                        <div className='row'>
                            <div className='col-md-6 order-2 order-md-1'>
                                <h2>{frontendDeveloper.name}</h2>
                                <p><strong>Experience:</strong> {frontendDeveloper.experience}</p>
                                <p><strong>Salary Package:</strong> {frontendDeveloper.salary_package}</p>
                                <p><strong>Education Qualification:</strong> {frontendDeveloper.education_qualification}</p>

                                <h4>Skills Required:</h4>
                                <div dangerouslySetInnerHTML={{ __html: frontendDeveloper.skills_required }}></div>

                                <Link to='/contact' className='jobpostingbtn'>Contact Now</Link>
                            </div>

                            <div className='col-md-6 order-1 order-md-2'>
                                <div className="stage">
                                    <img src={frontendDeveloper.thumbnail} className='box bounce-2 img-fluid' alt={frontendDeveloper.name}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

     </section>

            {/* <div className="modal fade" id="career-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body modal-body-custom">
                            <form action="?" method="POST">
                                <div className='d-flex justify-content-between '>
                                    <h4 className='text-center mb-3'>
                                        <b style={{ fontWeight: "900" }}>
                                            <span style={{ color: "#177a0e" }}>Apply Now</span>
                                        </b>
                                    </h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className='row'>
                                    <div className="mb-3 col-md-12 col-sm-12">
                                        <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                                        <input type="text" className="form-control" id="exampleInputName" />
                                    </div>
                                    <div className="mb-3 col-md-12 col-sm-12">
                                        <label htmlFor="exampleInputContact" className="form-label">Contact</label>
                                        <input type="tel" className="form-control" id="exampleInputContact" />
                                    </div>
                                    <div className="mb-3 col-md-12 col-sm-12">
                                        <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail" />
                                    </div>
                                    <div className='col-md-12 col-sm-12'>
                                        <label htmlFor="exampleInputResume" className="form-label">Resume</label>
                                        <input className="form-control" accept=".pdf,.txt,.doc,.docx" type="file" name="your-resume" />
                                    </div>
                                </div>

                                <div className="mb-3 mt-4">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message Here</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                                <button type="submit" className="btn" style={{backgroundColor:"#177a0e", color:"white"}}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}

            <Footer />
        </>
    );
}

export default Career;


