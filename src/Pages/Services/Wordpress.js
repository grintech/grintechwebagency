import { React, useState } from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from 'react-router-dom';

import timeicon from "../../assets/images/time-icon.png";
import teamicon from "../../assets/images/team-icon.png";
import focusicon from "../../assets/images/focus-icon.png";
import trusticon from "../../assets/images/trust-icon.png";

import Form from "./Form";
import ClientReview from '../../Components/Reviews/ClientReview';


import Client2 from '../Main-page/Client2';
import Client3 from '../Main-page/Client3';
import { Icon } from '@iconify/react';
import data from '../OurWorks/data';
import data1 from '../OurWorks/data1';
import { Helmet } from 'react-helmet';

const Wordpress = () => {
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
            <title>WordPress Development Services - Grintech Web Agency</title>
            <meta name="description" content="Transform your online presence with Grintech Web Agency's WordPress development services. Build powerful, customizable websites that drive engagement and growth" />
            <link rel='canonical' href='/our-services-wordpress' />
         </Helmet>

            <Header />

            <section className="dev-passion mt-4 mb-1">
                <div className="container d-none d-lg-block py-3">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="passion">
                                <h1 className='fw-bold'>WordPress solutions that fit your style and budget.</h1>
                                <div className='mt-3'>
                                    <h4 >WordPress CMS: The Ultimate Solution</h4>
                                    <p>WordPress is more than just a blogging platform; it’s a powerful Content Management System (CMS) that can handle everything from simple blogs to complex websites. With its user-friendly interface and extensive customization options, WordPress CMS makes it easy for anyone to create and manage a website.
                                    </p>
                                    <h4>Enhance Functionality with WordPress Plugin Development</h4>
                                    <p>Plugins are the backbone of WordPress, allowing you to add new features and functionalities to your site without touching a single line of code. Our WordPress plugin development services ensure that you get the exact features you need, whether it’s for e-commerce, SEO, social media integration, or any other purpose. We develop custom plugins that are secure, efficient, and easy to use.</p>

                                    
                                </div>


                                {showMore && (
                                    <div className='moretext'>
                                        <h2>Why Choose Grintech Web Agency for Your WordPress Needs?</h2>
                                     <ul className='p-0'>
                                        <li className='mb-2'><b>1. Expertise:</b> Our team has extensive experience in WordPress development and plugin creation.</li>
                                        <li className='mb-2'><b>2. Customization:</b> We tailor our services to fit your specific needs and goals.</li>
                                        <li className='mb-2'><b>3. Support:</b> We offer ongoing support and maintenance to keep your website running smoothly.</li>
                                        <li className='mb-2'><b>4. Affordability:</b> Quality services at budget-friendly prices.</li>
                                        <p>Unlock the full potential of your website with our comprehensive Word Press services. Let’s make your online presence stand out.</p>
                                     </ul>
                                    </div>
                                )}


                                <Link className="moreless-button" onClick={toggleMoreText}>
                                    {showMore ? 'Read less... ' : 'Read more...'}
                                </Link>


                                <div className='d-flex mt-4'>
                                    <a href='tel: 8264420387' className='btn-bt'> <i className="fa-solid fa-phone"></i> (+1) 833232-6622</a>
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
                                    <h4 >WordPress CMS: The Ultimate Solution</h4>
                                    <p>WordPress is more than just a blogging platform; it’s a powerful Content Management System (CMS) that can handle everything from simple blogs to complex websites. With its user-friendly interface and extensive customization options, WordPress CMS makes it easy for anyone to create and manage a website.
                                    </p>
                                    <h4>Enhance Functionality with WordPress Plugin Development</h4>
                                    <p>Plugins are the backbone of WordPress, allowing you to add new features and functionalities to your site without touching a single line of code. Our WordPress plugin development services ensure that you get the exact features you need, whether it’s for e-commerce, SEO, social media integration, or any other purpose. We develop custom plugins that are secure, efficient, and easy to use.</p>

                                    
                                </div>


                                {showMore && (
                                      <div className='moretext'>
                                      <h2>Why Choose Grintech Web Agency for Your WordPress Needs?</h2>
                                   <ul className='p-0'>
                                      <li className='mb-2'><b>1. Expertise:</b> Our team has extensive experience in WordPress development and plugin creation.</li>
                                      <li className='mb-2'><b>2. Customization:</b> We tailor our services to fit your specific needs and goals.</li>
                                      <li className='mb-2'><b>3. Support:</b> We offer ongoing support and maintenance to keep your website running smoothly.</li>
                                      <li className='mb-2'><b>4. Affordability:</b> Quality services at budget-friendly prices.</li>
                                      <p>Unlock the full potential of your website with our comprehensive Word Press services. Let’s make your online presence stand out.</p>
                                   </ul>
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
                        <h1 className='fw-bold'>WordPress solutions that fit your style and budget.</h1>
                            <Form />
                        </div>
                    </div>
                </div>

            </section>
            <section className="why-us  pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pe-2 pe-md-5 blueback">
                            <div className="frame1">
                                <div className="inner-head pb-2">
                                    <h2>Why Hire Grintech Experts for Wordpress Development</h2>
                                </div>
                                <p>Hire dedicated Wordpress Developer on a Full-time, Hourly, or Fixed Project Cost basis & save up to 25% on development cost</p>
                            </div>

                            <div className="frame1 pt-5">
                                <div className="inner-head pb-2">
                                    <h2>Speed up your advancement with Grintech Experts:</h2>
                                </div>
                                <ul className="ps-3">
                                    <li>Fast hiring within 24 hours</li>
                                    <li>Simple & Transparent Pricing</li>
                                    <li>Fully Signed NDA & Code Security</li>
                                    <li>Regular Reporting & Transparent Communication</li>
                                    <li>Easy Exit Policy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="why-frame">
                                <ul className="list-unstyled">
                                    <li>
                                        <div className="icon-area"><img className="img-fluid" src={timeicon} alt="flexible timing" /></div>
                                        <div className="icon-text">
                                            <h5>Flexible Timing</h5>
                                            <p>Grintech also offers flexible timing to accommodate your specific needs. Whether you require assistance during specific hours of the day or need support with managing projects across different time zones, Grintech can tailor their services to meet your scheduling preferences. </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-area"><img className="img-fluid" src={teamicon} alt="dedicated team" /></div>
                                        <div className="icon-text">
                                            <h5>Dedicated Team</h5>
                                            <p>Grintech dedicated team plays a crucial role in project management, providing the expertise, collaboration, and focus needed to achieve project goals efficiently.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-area"><img className="img-fluid" src={focusicon} alt="client focus" /></div>
                                        <div className="icon-text">
                                            <h5>Client Focus</h5>
                                            <p>Maintaining a client focus is paramount in any business or project. By prioritizing the needs, preferences, and satisfaction of clients, organizations can build strong relationships, foster loyalty, and drive sustainable growth.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-area"><img className="img-fluid" src={trusticon} alt="trusted quality" /></div>
                                        <div className="icon-text">
                                            <h5>Trusted Quality</h5>
                                            <p>Trusted quality is a crucial factor for businesses aiming to establish a solid reputation and gain customer trust. It refers to consistently delivering products, services, and experiences that meet or exceed customer expectations, while also maintaining a high standard of reliability, durability, and performance. </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

export default Wordpress
