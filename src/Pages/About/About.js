import React, { useEffect, useState } from 'react';
import sanityClient from '../../sanityClient';
import "./about.css";

import laptop from "../../assets/images/laptop-hold.png";
import mission from "../../assets/images/mission.png";
import vision from "../../assets/images/vision.png";
import goal from "../../assets/images/goal.png";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Sideicons from "../../Components/Sideicons/Sidebar";
import Image from "../../assets/images/owner.jpg"
import data from '../OurWorks/data.js';
import Form from "../Services/Form"
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import { Helmet } from 'react-helmet';
import TeamSection from './TeamSection.js';
import { Link } from 'react-router-dom';

export default function About() {

    const [sites, setSites] = useState(data);
    const [posts, setPosts] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false); // State to manage the view

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch('https://3.108.0.178/cms/grintechReact/wp-json/our-member/v1/team-members');
                const response = await fetch('https://app.grintechwebagency.com/wp-json/our-member/v1/team-members');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setPosts(data); // Assuming data structure is similar to your current posts state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // console.log(posts);

    return (
        <>
            <Helmet>
            <meta charSet="utf-8" />
            <title>Best Web App Development Agency Near You | Get Started</title>
            <meta name="description" content="Boost your business with top-notch web app development from Grin Tech Web Agency. Custom, scalable, and high-performance solutions—get started today!" />
            <link rel='canonical' href='/about'  />
            </Helmet>


            <Header />
            <WhatsAppWidget phoneNumber="8264420387" message="Hello, how can I help you?" companyName="Grintech Web Agency" />
            <Sideicons />
            <section className="pt-5 mt-3 about_banner">
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    {/* <div className="row about_main py-4">
                        <div className="col-lg-6 col-md-12 col-sm-12 about_main_div1">
                            <h1>Your Trusted Development and Digital Marketing Partner</h1>
                            <p>With a solid foundation of 7+ years of experience, Grintech Web Agency has established itself as a leading provider of web development and digital marketing solutions. As a global agency, we are proud to have a presence in 5+ countries, serving clients from various industries and backgrounds.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <Form /> 
                        </div>
                    </div> */}
                    {/* <h1>About us</h1> */}
                </div>
                    {/* <video className='w-100' autoPlay loop muted src="/videos/Aboutus.mp4"></video> */}
                    <img  src="/img/About.png" className='w-100 d-md-block d-none' alt="" />
                    <img  src="/img/Aboutmobile.png" className='w-100 d-block d-md-none' alt="" />
                    {/* <img  src="/team/all_team1.jpg" className='w-100 ' alt="" /> */}
            </section>

            <section className="laptop-hold mt-0">
             <div className="container">
                <div className="row px-3">
                    {/* <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="laptop-bg">
                            <img className="img-fluid" src={laptop} alt="laptop hold" />
                        </div>
                    </div> */}
                    <div className="col-12 col-sm-12">
                        <div className="row ">
                            <h2 className='mt-4 '>Why Choose Us</h2>
                            <p>At Grintech Web Agency, client satisfaction is at the core of everything we do. We are proud to maintain a remarkable 97% repeat customer rate, a testament to our dedication to delivering exceptional results and building long-term partnerships.</p>
                        </div>

                        <div className="row pt-3 gx-4">
                            <div className="col-lg-4  col-md-4 main-frame">
                                <div className="icon">
                                    <img className="img-fluid" src={mission} alt="mission" />
                                </div>
                                <div className="caption">
                                    <h5 className="pt-4 pb-2 mb-0">Mission</h5>
                                    <p>We are dedicated to helping businesses establish a strong online presence, engage with their target audience, and achieve their goals in the digital landscape.</p>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-4 main-frame">
                                <div className="icon">
                                    <img className="img-fluid" src={vision} alt="vision" />
                                </div>
                                <div className="caption">
                                    <h5 className="pt-4 pb-2 mb-0">Vision</h5>
                                    <p>Our vision is to be a globally recognized, client-centric, and innovative web agency that delivers exceptional results, leads the industry, and positively impacts society.</p>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-4 main-frame">
                                <div className="icon">
                                    <img className="img-fluid" src={goal} alt="goal" />
                                </div>
                                <div className="caption">
                                    <h5 className="pt-4 pb-2 mb-0">Goal</h5>
                                    <p>We aim to establish itself as a trusted and leading provider of web development and digital marketing solutions while making a positive impact on our clients' success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            </section>

            {/* <section className="team-members py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h2>Meet Our Team Members</h2>
                        </div>

                        {posts.slice(0, isExpanded ? posts.length : 4).map((post, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 member-frame" key={index}>
                                <img className=" tm about-team" src={post.image} alt={post.name} />
                                <div className="img-caption">
                                    <div className="text-frame">
                                        <h5 className="mb-0 text-start">{post.name}</h5>
                                        <p className="mb-0"><small>{post.role}</small></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='row d-flex justify-content-center'>
                        <button className='about_viewbtn' onClick={() => setIsExpanded(!isExpanded)}>
                            {isExpanded ? <small>Close</small> : <small>View All</small>}
                        </button>
                    </div>
                </div>
            </section> */}

            <TeamSection />

            {/* <section className='owner-info py-5'>
                <div className='container'>
                    <div className='row mt-3'>
                        <div className='col-lg-8 col-md-12 mb-4 mb-lg-0' style={{ position: "relative" }}>
                            <div className='about-owner'>
                                <div>
                                    <h4>Welcome to the Grintech Family!!!</h4>
                                    <div cite="https://www.huxley.net/bnw/four.html">
                                   <sup> <i className="fa-solid fa-quote-left"></i></sup>  I’m <b>Rajesh Kumar Bhardwaj,</b> the proud founder of Grintech Web Agency. Our mission is to provide exceptional web solutions and digital solutions tailored to empower businesses of all sizes. With over 4 years of expertise in web technology, we have built a reputation for delivering reliable, scalable, and secure hosting services that help our clients thrive in the digital landscape.
                                    <br /><br />
                                    At Grintech, we believe that every business deserves a strong online presence. That’s why we’re committed to offering innovative solutions and unmatched support to ensure your success. Whether you’re launching your first website or managing a growing enterprise, we are here to make your journey seamless and productive. <br /> <br />
                                    Thank you for trusting Grintech Web Agency as your digital partner. Together, let’s unlock the full potential of the web! <br /> <br />
                                    <b> Warm regards,</b> <br /> 
                                    <b>Rajesh Kumar Bhardwaj</b> <br />
                                    <b>Founder, Grintech Web Agency </b> 
                                    <sup><i className="fa-solid fa-quote-right"></i></sup>
                                </div>
                                </div>
                            </div>
                            <div className='arrow'></div>
                        </div>

                        <div className='col-lg-4 col-md-12 member-frame mb-2'>
                            <div className='position-relative ps-lg-3 mt-4 mt-lg-0 h-100'>
                                <img src={Image} className='owner-img h-100' alt="Rajesh Bhardwaj"></img>
                               
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}

            <div className="owner_section py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 pe-md-5 mb-4 mb-md-0">
                            <img src={Image} className='owner-img rounded-pill' alt="Rajesh Bhardwaj"></img>
                        </div>
                        <div className="col-md-6">
                            <h3 className='mb-3'><b> Meet Rajesh Kumar Bhardwaj</b></h3>
                            <h5 className='mb-3'><b>Founder, Grintech Web Agency</b></h5>
                            <div className=''>
                                <div>
                                    <h4></h4>
                                    <div cite="https://www.huxley.net/bnw/four.html">
                                  <p> <sup> <i className="fa-solid fa-quote-left"></i></sup> <span className='text_green'><b>Welcome to the Grintech Family.</b></span> I’m <b>Rajesh Kumar Bhardwaj,</b> the proud founder of Grintech Web Agency. Our mission is to provide exceptional web solutions and digital solutions tailored to empower businesses of all sizes. With over 4 years of expertise in web technology, we have built a reputation for delivering reliable, scalable, and secure hosting services that help our clients thrive in the digital landscape.</p>
                                  
                                   <p> At Grintech, we believe that every business deserves a strong online presence. That’s why we’re committed to offering innovative solutions and unmatched support to ensure your success. Whether you’re launching your first website or managing a growing enterprise, we are here to make your journey seamless and productive. 
                                    </p>
                                    <p>Thank you for trusting Grintech Web Agency as your digital partner. Together, let’s unlock the full potential of the web!  <sup><i className="fa-solid fa-quote-right"></i></sup></p>
                                    {/* <b> Warm regards,</b> <br /> 
                                    <b>Rajesh Kumar Bhardwaj</b> <br />
                                    <b>Founder, Grintech Web Agency </b>  */}
 
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='client'>
                <div className='container'>
                    <h3>Our Global Clients</h3>
                    <h6> Business Expansion Scale</h6>
                    <div className='row client2'>
                        {/* {sites.slice(0, -4).map((item, index) => ( */}
                        {sites.map((item, index) => (
                            <div id="client2_image" className='col-6 col-md-3 col-lg-2 mt-4 mb-4' key={index}>
                                <Link target="_blank" to={item.Link} ><img src={item.logo} className='img-fluid' alt={item.name}></img></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body modal-body-custom">
                            <form>
                                <div className='d-flex justify-content-between'>
                                    <h4 className='text-center mb-3'><b style={{ fontWeight: "900" }}>Let's Discuss Your <span style={{ color: "#177a0e" }}>Project</span></b></h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className='row'>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label htmlFor="exampleInputName" className="form-label">Full Name <span className='star'>*</span></label>
                                        <input type="text" className="form-control" id="exampleInputName" />
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                                        <input type="tel" className="form-control" id="exampleInputPhone" />
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address <span className='star'>*</span></label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label htmlFor="exampleInputWebsite" className="form-label">Website URL</label>
                                        <input type="text" className="form-control" id="exampleInputWebsite" />
                                    </div>
                                </div>
                                <select className="form-select" aria-label="Default select example">
                                    <option defaultValue disabled>How we can help you?</option>
                                    <option value="1">Seo/SMM</option>
                                    <option value="2">Web Development</option>
                                    <option value="3">Web Design</option>
                                </select>

                                <div className="mb-3 mt-4">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message Here</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                                <button type="submit" className="btn" style={{ backgroundColor: "#177a0e", color: "white" }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
