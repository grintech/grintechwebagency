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

const Asp = () => {
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
            <title>ASP.NET App Development Services - Grintech Web Agency</title>
            <meta name="description" content="Build powerful and scalable web applications with Grintech Web Agency's ASP.NET app development services. Building Scalable and Secure Web Applications" />
            <link rel='canonical' href='/our-services-asp' />
         </Helmet>

            <Header />

            <section className="dev-passion mt-4 mb-1">
                <div className="container d-none d-lg-block py-3">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="passion">
                                <h1 className='fw-bold'>ASP.NET App Development Company</h1>
                                <div className=''>
                                    <p>Grintech Web Agency is the best and most affordable  ASP.NET app development company, renowned for delivering on-demand, scalable solutions tailored to your business needs. Our expert developers create robust, high-performance applications that drive efficiency and growth. Trust us for innovative and reliable ASP.NET services that elevate your business to the next level.</p>
                                    <h4 className='fw-bold' >ASP.NET App Development Services by Grintech Web Agency</h4>
                                    <h4>What We Provide:</h4>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. Custom Application Development:</b> Build powerful, scalable applications tailored to your business needs using the latest ASP.NET technologies.</li>
                                        <li className='mb-2'><b>2. API Integration:</b> Seamlessly connect your application with third-party services and systems for enhanced functionality.</li>
                                        <li className='mb-2'><b>3. Enterprise Solutions:</b> Design robust, high-performance solutions for complex business processes and enterprise-level applications.</li>
                                        <li className='mb-2'><b>4. Migration & Upgrades:</b> Modernize your existing applications by migrating to ASP.NET or upgrading to the latest version.</li>
                                        <li className='mb-2'><b>5. Ongoing Support & Maintenance: </b>Reliable support, updates, and performance optimizations to keep your app running efficiently.</li>
                                     </ul>
                                </div>


                                {showMore && (
                                    <div className='moretext'>
                                    <h4 className='fw-bold'>Why Choose Grintech Web Agency?</h4>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. Experienced Developers:</b> A skilled team of ASP.NET experts with a proven track record of successful projects.</li>
                                        <li className='mb-2'><b>2. Tailored Solutions:</b> Customized development approach to meet your unique business requirements.</li>
                                        <li className='mb-2'><b>3. Agile Methodology:</b> Rapid development with flexible and adaptive processes to ensure timely delivery.</li>
                                        <li className='mb-2'><b>4. Commitment to Quality:</b> Focus on delivering high-quality, secure, and scalable applications.</li>
                                     </ul>
                                     <p><b>Conclusion:</b> Grintech Web Agency stands out as a trusted partner in ASP.NET app development, delivering cutting-edge solutions that drive business success. Our commitment to quality, innovation, and client satisfaction ensures that your application will not only meet but exceed your expectations. Partner with us to transform your vision into a powerful, fully functional application.</p>
                                    </div>
                                )}


                                <Link className="moreless-button" onClick={toggleMoreText}>
                                    {showMore ? 'Read less... ' : 'Read more...'}
                                </Link>


                                <div className='d-flex mt-4'>
                                    <a href='tel: 833232-6622' className='btn-bt'> <i className="fa-solid fa-phone"></i> (+1) 833232-6622</a>
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
                                     <h4 className='fw-bold' >ASP.NET App Development Services by Grintech Web Agency</h4>
                                    <h4>What We Provide:</h4>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. Custom Application Development:</b> Build powerful, scalable applications tailored to your business needs using the latest ASP.NET technologies.</li>
                                        <li className='mb-2'><b>2. API Integration:</b> Seamlessly connect your application with third-party services and systems for enhanced functionality.</li>
                                        <li className='mb-2'><b>3. Enterprise Solutions:</b> Design robust, high-performance solutions for complex business processes and enterprise-level applications.</li>
                                        <li className='mb-2'><b>4. Migration & Upgrades:</b> Modernize your existing applications by migrating to ASP.NET or upgrading to the latest version.</li>
                                        <li className='mb-2'><b>5. Ongoing Support & Maintenance: </b>Reliable support, updates, and performance optimizations to keep your app running efficiently.</li>
                                     </ul>
                                    </div>


                                {showMore && (
                                    <div className='moretext'>
                                    <h4 className='fw-bold'>Why Choose Grintech Web Agency?</h4>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. Experienced Developers:</b> A skilled team of ASP.NET experts with a proven track record of successful projects.</li>
                                        <li className='mb-2'><b>2. Tailored Solutions:</b> Customized development approach to meet your unique business requirements.</li>
                                        <li className='mb-2'><b>3. Agile Methodology:</b> Rapid development with flexible and adaptive processes to ensure timely delivery.</li>
                                        <li className='mb-2'><b>4. Commitment to Quality:</b> Focus on delivering high-quality, secure, and scalable applications.</li>
                                     </ul>
                                     <p><b>Conclusion:</b> Grintech Web Agency stands out as a trusted partner in ASP.NET app development, delivering cutting-edge solutions that drive business success. Our commitment to quality, innovation, and client satisfaction ensures that your application will not only meet but exceed your expectations. Partner with us to transform your vision into a powerful, fully functional application.</p>
                                    </div>
                                )}


                                <Link className="moreless-button" onClick={toggleMoreText}>
                                    {showMore ? 'Read less... ' : 'Read more...'}
                                </Link>


                                <div className='d-flex mt-4'>
                                    <a href='tel: 833232-6622' className='btn-bt'> <i className="fa-solid fa-phone"></i> (+1) 833232-6622 </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 py-5">
                            <h1 className='fw-bold'>ASP.NET App Development Company</h1>
                            <p>Grintech Web Agency is the best and most affordable  ASP.NET app development company, renowned for delivering on-demand, scalable solutions tailored to your business needs. Our expert developers create robust, high-performance applications that drive efficiency and growth. Trust us for innovative and reliable ASP.NET services that elevate your business to the next level.</p>

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
                                    <h2>Why Hire Grintech Experts for Asp.Net App Development</h2>
                                </div>
                                <p>Hire dedicated Asp.Net Developer on a Full-time, Hourly, or Fixed Project Cost basis & save up to 25% on development cost</p>
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

export default Asp
