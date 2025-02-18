import { React, useState } from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from 'react-router-dom';

import Form from "./Form";
import Commonsection from './Commonsection';
import ClientReview from '../../Components/Reviews/ClientReview';

import Client2 from '../Main-page/Client2';
import Client3 from '../Main-page/Client3';
import { Icon } from '@iconify/react';
import data from '../OurWorks/data';
import data1 from '../OurWorks/data1';
import { Helmet } from 'react-helmet';


const CorePhp = () => {
    const [showMore, setShowMore] = useState(false);

    const [sites, setSites] = useState(data);
    const [apps, setApps] = useState(data1);

    const toggleMoreText = () => {
        setShowMore(!showMore);
    };

    return (

        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Core PHP Service- Core PHP for Enhanced Functionality</title>
                <meta name="description" content="Web solutions with Grintech Web Agency's Core PHP services. Our expert developers craft efficient and scalable PHP applications tailored to your needs. " />
                <link rel='canonical' href='/our-services-core-php' />
            </Helmet>

            <Header />

            <section className="dev-passion mt-4 mb-1">
                <div className="container d-none d-lg-block py-3">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="passion">
                                <h1>Core PHP</h1>
                                <div className=''>
                                    <h4>Do you need reliable Core PHP solutions? There's no need to search further. Grintech has you covered.</h4>
                                    <p >At Grintech Web Agency, the Best website design company, we specialize in building dynamic, efficient, and scalable web apps. Whether it’s a straightforward website or a complex platform, our team ensures everything runs smoothly and looks fantastic. Let’s turn your ideas into reality with our expert PHP services! </p>

                                    <h2>The abilities of Grintech's PHP developers:</h2>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. Expert Coding Skills: </b>Proficient in writing clean, efficient, and maintainable PHP code.</li>
                                        <li className='mb-2'><b>2. Backend Development: </b>Skilled in creating robust backend logic, ensuring secure and reliable web applications.</li>
                                        <li className='mb-2'><b>3. Database Management: </b>Experienced in working with various databases, optimizing queries, and ensuring data integrity.</li>
                                        <li className='mb-2'><b>4. Framework Proficiency: </b>Well-versed in popular PHP frameworks like Laravel, Symfony, and CodeIgniter.</li>
                                        <li className='mb-2'><b>5. Problem Solvers: </b>Excellent at debugging and troubleshooting to ensure smooth functionality.</li>
                                        <li className='mb-2'><b>6. Collaborative Team Players: </b>Work seamlessly with designers, front-end developers, and other stakeholders.</li>
                                        <li className='mb-2'><b>7. Performance Optimization: </b>Focus on optimizing web applications for speed and scalability.</li>
                                        <li className='mb-2'><b>8. Security Best Practices: </b>Implement best practices to protect against vulnerabilities like SQL injection and XSS attacks.</li>
                                        <li className='mb-2'><b>9. Continuous Learning: </b>Stay updated with the latest PHP trends and technologies to deliver cutting-edge solutions.</li>
                                    </ul>
                                    
                                </div>

                                {showMore && (
                                    <div className='moretext'>
                                        <h2>Here are some key points about Core PHP services:</h2>
                                        <ul className='p-0'>
                                            <li className='mb-2'><b>1. Custom Development: </b>Tailored web applications built from scratch to meet specific business needs.</li>
                                            <li className='mb-2'><b>2. Efficient Performance: </b>Optimized code for fast and reliable web applications.
                                            </li>
                                            <li className='mb-2'><b>3. Database Integration: </b>Seamless integration with various databases for robust data management.</li>
                                            <li className='mb-2'><b>4. Security: </b>Implementation of best practices to protect against vulnerabilities like SQL injection and XSS attacks.</li>
                                            <li className='mb-2'><b>5. Scalability: </b>Solutions designed to grow with your business, handling increased traffic and data.</li>
                                            <li className='mb-2'><b>6. Maintenance and Support: </b>Ongoing support to ensure your web applications run smoothly and stay updated.</li>
                                            <li className='mb-2'><b>7. Flexibility: </b>Ability to integrate with various third-party services and APIs.</li>
                                            <li className='mb-2'><b>8. Cost-Effective: </b>Affordable solutions without compromising on quality and performance.</li>
                                        </ul>
                                        <p>These abilities ensure that Grintech’s PHP developers can handle a wide range of web development projects with expertise and efficiency. And Understand the  strengths and capabilities of Core PHP services, ensuring robust and efficient web applications tailored to your needs.</p>
                                    </div>
                                )}


                                <Link className="moreless-button" onClick={toggleMoreText}>
                                    {showMore ? 'Read less... ' : 'Read more...'}
                                </Link>


                                <div className='d-flex mt-4'>
                                    <a href='tel: 8264420387' className='btn-bt'> <i className="fa-solid fa-phone"></i> (+1) 833232-6622 </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 py-5">
                            <Form />
                        </div>
                    </div>
                </div>
                <div className="container d-block d-lg-none">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="passion">

                                <div className=''>

                                <h2>The abilities of Grintech's PHP developers:</h2>
                                <ul className='p-0'>
                                        <li className='mb-2'><b>1. Expert Coding Skills: </b>Proficient in writing clean, efficient, and maintainable PHP code.</li>
                                        <li className='mb-2'><b>2. Backend Development: </b>Skilled in creating robust backend logic, ensuring secure and reliable web applications.</li>
                                        <li className='mb-2'><b>3. Database Management: </b>Experienced in working with various databases, optimizing queries, and ensuring data integrity.</li>
                                        <li className='mb-2'><b>4. Framework Proficiency: </b>Well-versed in popular PHP frameworks like Laravel, Symfony, and CodeIgniter.</li>
                                        <li className='mb-2'><b>5. Problem Solvers: </b>Excellent at debugging and troubleshooting to ensure smooth functionality.</li>
                                        <li className='mb-2'><b>6. Collaborative Team Players: </b>Work seamlessly with designers, front-end developers, and other stakeholders.</li>
                                        <li className='mb-2'><b>7. Performance Optimization: </b>Focus on optimizing web applications for speed and scalability.</li>
                                        <li className='mb-2'><b>8. Security Best Practices: </b>Implement best practices to protect against vulnerabilities like SQL injection and XSS attacks.</li>
                                        <li className='mb-2'><b>9. Continuous Learning: </b>Stay updated with the latest PHP trends and technologies to deliver cutting-edge solutions.</li>
                                    </ul>
                                </div>

                                {showMore && (
                                    <div className='moretext'>
                                         <div className='moretext'>
                                        <h2>Here are some key points about Core PHP services:</h2>
                                        <ul className='p-0'>
                                            <li className='mb-2'><b>1. Custom Development: </b>Tailored web applications built from scratch to meet specific business needs.</li>
                                            <li className='mb-2'><b>2. Efficient Performance: </b>Optimized code for fast and reliable web applications.
                                            </li>
                                            <li className='mb-2'><b>3. Database Integration: </b>Seamless integration with various databases for robust data management.</li>
                                            <li className='mb-2'><b>4. Security: </b>Implementation of best practices to protect against vulnerabilities like SQL injection and XSS attacks.</li>
                                            <li className='mb-2'><b>5. Scalability: </b>Solutions designed to grow with your business, handling increased traffic and data.</li>
                                            <li className='mb-2'><b>6. Maintenance and Support: </b>Ongoing support to ensure your web applications run smoothly and stay updated.</li>
                                            <li className='mb-2'><b>7. Flexibility: </b>Ability to integrate with various third-party services and APIs.</li>
                                            <li className='mb-2'><b>8. Cost-Effective: </b>Affordable solutions without compromising on quality and performance.</li>
                                        </ul>
                                        <p>These abilities ensure that Grintech’s PHP developers can handle a wide range of web development projects with expertise and efficiency. And Understand the  strengths and capabilities of Core PHP services, ensuring robust and efficient web applications tailored to your needs.</p>
                                    </div>
                                    </div>
                                )}


                                <Link className="moreless-button" onClick={toggleMoreText}>
                                    {showMore ? 'Read less... ' : 'Read more...'}
                                </Link>


                                <div className='d-flex mt-4'>
                                    <a href='tel: 8264420387' className='btn-bt'> <i className="fa-solid fa-phone"></i> (+91) 8264420387 </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 py-5">
                            <h1>Core PHP</h1>
                            <h4>Do you need reliable Core PHP solutions? There's no need to search further. Grintech has you covered.</h4>
                            <p >At Grintech Web Agency, the Best website design company, we specialize in building dynamic, efficient, and scalable web apps. Whether it’s a straightforward website or a complex platform, our team ensures everything runs smoothly and looks fantastic. Let’s turn your ideas into reality with our expert PHP services! </p>
                            <Form />
                        </div>
                    </div>
                </div>

            </section>

            <Commonsection name="Core PHP" technology="Developement" classname="blueback" />

            <section className='portfolio'>
                <div className='container'> <h3>Our Portfolio</h3>
                    <h6> Web Development</h6>
                    <Client2 sites={sites} />
                    <Link to="/our-works" style={{ color: "#014072" }}>View all <span className="new-get"><Icon icon="bi:arrow-right" /></span></Link>

                    <div className='mt-5'>
                        <h6> Mobile Development</h6>
                        <Client3 apps={apps} />
                        <Link to="/our-works" style={{ color: "#014072" }}>View all <span className="new-get"><Icon icon="bi:arrow-right" /></span></Link>
                    </div>

                </div>

            </section>


            <ClientReview />

            <Footer />
        </>


    )
}

export default CorePhp
