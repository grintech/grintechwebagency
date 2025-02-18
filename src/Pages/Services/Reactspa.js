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

const Reactspa = () => {
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
                <title>ReactJS Development Services - Grintech Web Agency</title>
                <meta name="description" content="Grintech Web Agency's ReactJS development services improve your online applications. Use React's capability to create responsive and scalable solutions." />
                <link rel='canonical' href='/our-services-react' />
            </Helmet>

            <Header />
            <section className="dev-passion mt-4 mb-1">
                <div className="container d-none d-lg-block py-3">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="passion">
                                <h1>See immediate results with Grintech’s React JS Developers.</h1>
                                <div className=''>
                                    <h4 className='mt-3'>What's different about engaging cloud computing services from us?</h4>
                                    <p > Looking to build a sleek, high-performance web app? At Grintech the React JS app service has got you covered. We create fast, responsive, and scalable user interfaces that make your web applications stand out. Whether it’s a single-page app or a complex platform, we ensure everything runs smoothly and looks great.</p>

                                    <h2>React JS App Service by Grintech Web Agency</h2>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. Fast and Responsive:</b> Create sleek, high-performance web apps that users love.</li>
                                        <li className='mb-2'><b>2. Scalable Solutions:</b> Ideal for everything from single-page apps to complex platforms.</li>
                                        <li className='mb-2'><b>3. Seamless Integration:</b> Ensures smooth operation and an excellent user experience.</li>
                                        <li className='mb-2'><b>4. Experienced Team:</b> Over a decade of expertise in delivering top-notch IT solutions.</li>
                                        <li className='mb-2'><b>5. Innovative Services:</b> Specializing in web development and digital marketing to help you achieve your digital goals.</li>
                                    </ul>
                                </div>

                                {showMore && (
                                    <div className='moretext'>
                                        <h2>Key Points of React Web development</h2>
                                    <ul className='p-0'>
                                    <li className='mb-2'><b>1. Component-Based Architecture:</b> Build encapsulated components that manage their state.</li>
                                        <li className='mb-2'><b>2. Virtual DOM:</b> Optimizes rendering performance by minimizing direct DOM manipulations.</li>
                                        <li className='mb-2'><b>3. Declarative:</b> Simplifies creating interactive UIs with a declarative approach.</li>
                                        <li className='mb-2'><b>4. JSX:</b> Write HTML-like code within JavaScript for better readability.</li>
                                        <li className='mb-2'><b>5. State Management:</b> Manage dynamic data within components easily.</li>
                                        <li className='mb-2'><b>6. Props:</b> Pass data from parent to child components for reuse and modularity.</li>
                                        <li className='mb-2'><b>7. Hooks:</b>  Use state and other features without writing a class.</li>
                                        <li className='mb-2'><b>8. Ecosystem:</b> Rich ecosystem with libraries and tools like Redux and React Router.</li>
                                    </ul>
                                    <p>If you want to hire React developers? Then you are in the right place. At Grintech Web Agency, we leverage these strengths to deliver the best web solutions for your needs. Let's create something amazing together.</p>
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
                                <h2>React JS App Service by Grintech Web Agency</h2>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. Fast and Responsive:</b> Create sleek, high-performance web apps that users love.</li>
                                        <li className='mb-2'><b>2. Scalable Solutions:</b> Ideal for everything from single-page apps to complex platforms.</li>
                                        <li className='mb-2'><b>3. Seamless Integration:</b> Ensures smooth operation and an excellent user experience.</li>
                                        <li className='mb-2'><b>4. Experienced Team:</b> Over a decade of expertise in delivering top-notch IT solutions.</li>
                                        <li className='mb-2'><b>5. Innovative Services:</b> Specializing in web development and digital marketing to help you achieve your digital goals.</li>
                                    </ul>
                                </div>

                                {showMore && (
                                   <div className='moretext'>
                                   <h2>Key Points of React Web development</h2>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. Component-Based Architecture:</b> Build encapsulated components that manage their state.</li>
                                        <li className='mb-2'><b>2. Virtual DOM:</b> Optimizes rendering performance by minimizing direct DOM manipulations.</li>
                                        <li className='mb-2'><b>3. Declarative:</b> Simplifies creating interactive UIs with a declarative approach.</li>
                                        <li className='mb-2'><b>4. JSX:</b> Write HTML-like code within JavaScript for better readability.</li>
                                        <li className='mb-2'><b>5. State Management:</b> Manage dynamic data within components easily.</li>
                                        <li className='mb-2'><b>6. Props:</b> Pass data from parent to child components for reuse and modularity.</li>
                                        <li className='mb-2'><b>7. Hooks:</b>  Use state and other features without writing a class.</li>
                                        <li className='mb-2'><b>8. Ecosystem:</b> Rich ecosystem with libraries and tools like Redux and React Router.</li>
                                    </ul>
                                    <p>If you want to hire React developers? Then you are in the right place. At Grintech Web Agency, we leverage these strengths to deliver the best web solutions for your needs. Let's create something amazing together.</p>
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
                        <h1 className='fw-bold'>See immediate results with Grintech’s React JS Developers.</h1>
                        <h4 className='mt-3'>What's different about engaging cloud computing services from us?</h4>
                        <p > Looking to build a sleek, high-performance web app? At Grintech the React JS app service has got you covered. We create fast, responsive, and scalable user interfaces that make your web applications stand out. Whether it’s a single-page app or a complex platform, we ensure everything runs smoothly and looks great.</p>
                            <Form />
                        </div>
                    </div>
                </div>

            </section>

            <section className="why-us  pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pe-2 pe-md-5 greyback">
                            <div className="frame1">
                                <div className="inner-head pb-2">
                                    <h2>Why Hire Grintech Experts for React Single Page application?</h2>
                                </div>
                                <p>Hire dedicated React Designer on a Full-time, Hourly, or Fixed Project Cost basis & save up to 25% on development cost</p>
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

export default Reactspa
