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

const Laravel = () => {
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
                <title>Laravel Development - Full Potential of Laravel Framework</title>
                <meta name="description" content="Grintech Web Agency's Laravel development services. Leverage Laravel's robust framework for secure, scalable, and efficient web applications. Contact us today" />
                <link rel='canonical' href='/our-services-laravel' />
            </Helmet>

                <Header />

                <section className="dev-passion mt-4 mb-1">
                    <div className="container d-none d-lg-block py-3">
                        <div className='row'>
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="passion">
                                    <h1>Laravel</h1>
                                    <div className=''>
                                        <p > Laravel service Grintech plays a central role in bootstrapping Laravel applications. We specialize in Laravel development and have a team of experienced Laravel developers who can help you create high-performing and secure web applications using the Laravel framework.</p>
                                        <h2>Here are some key points about Laravel services:</h2>
                                        <ul className='p-0'>
                                        <li className='mb-2'><b>1. Language Support:</b> Requires PHP version >= 5.5.9.</li>
                                        <li className='mb-2'><b>2. MVC Framework:</b> Laravel has supported MVC since version 2.</li>
                                        <li className='mb-2'><b>3. Object Relational Mapping (ORM):</b>  Eloquent ORM simplifies database interaction.</li>
                                        <li className='mb-2'><b>4. Testing:</b> Built-in unit testing with PHPUnit.</li>
                                        <li className='mb-2'><b>5. Database Migration:</b> Simplifies deployment and updates.</li>
                                        <li className='mb-2'><b>6. Security:</b> Uses SSH for secure CLI commands.</li>
                                        <li className='mb-2'><b>7. Caching:</b> Built-in support for performance optimization.</li>
                                        <li className='mb-2'><b>8. Form Validation:</b> Robust form validation methods.</li>
                                        <li className='mb-2'><b>9. Scaffolding:</b> Specify application database usage.</li>
                                        <li className='mb-2'><b>10. Rapid Application Development:</b> Facilitates quick development cycles.</li>
                                     </ul>
                                    </div>

                                    {showMore && (
                                      <div className='moretext'>
                                         <h2>Core Concepts of Laravel:</h2>
                                         <ul className='p-0'>
                                          <li className='mb-2'><b>1. Routing:</b> Define routes that map URLs to controller actions.</li>
                                          <li className='mb-2'><b>2. Controllers:</b> Handle requests, process data, and determine responses.</li>
                                          <li className='mb-2'><b>3. Models:</b> Represent data and business logic, interact with the database.</li>
                                          <li className='mb-2'><b>4. Views:</b> Craft user interfaces using Blade templating.</li>
                                        </ul>
                                          <p>Grintech Web Agency is a best php laravel development company. We offers expert Laravel development services with a skilled team of developers. We prioritize transparency, flexible services options, and code security.<Link to='/'> Feel free to explore our services.</Link> If you have any specific requirements or questions, don’t hesitate to ask.
                                          </p>
                                      </div>
                                    )}

                                    <Link className="moreless-button" onClick={toggleMoreText}>
                                        {showMore ? 'Read less... ' : 'Read more...'}
                                    </Link>


                                    <div className='d-flex mt-4'>
                                        <a href='tel: 8264420387' className='btn-bt'> <i className="fa-solid fa-phone"></i>(+1) 833232-6622 </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 py-5">
                                <Form />
                            </div>
                        </div>
                    </div>
                    <div className="container d-block d-lg-none">
                        <div className='row'>
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="passion">

                                    <div className=''>
                                    <h2>Here are some key points about Laravel services:</h2>
                                        <ul className='p-0'>
                                        <li className='mb-2'><b>1. Language Support:</b> Requires PHP version >= 5.5.9.</li>
                                        <li className='mb-2'><b>2. MVC Framework:</b> Laravel has supported MVC since version 2.</li>
                                        <li className='mb-2'><b>3. Object Relational Mapping (ORM):</b>  Eloquent ORM simplifies database interaction.</li>
                                        <li className='mb-2'><b>4. Testing:</b> Built-in unit testing with PHPUnit.</li>
                                        <li className='mb-2'><b>5. Database Migration:</b> Simplifies deployment and updates.</li>
                                        <li className='mb-2'><b>6. Security:</b> Uses SSH for secure CLI commands.</li>
                                        <li className='mb-2'><b>7. Caching:</b> Built-in support for performance optimization.</li>
                                        <li className='mb-2'><b>8. Form Validation:</b> Robust form validation methods.</li>
                                        <li className='mb-2'><b>9. Scaffolding:</b> Specify application database usage.</li>
                                        <li className='mb-2'><b>10. Rapid Application Development:</b> Facilitates quick development cycles.</li>
                                      </ul>
                                    </div>

                                    {showMore && (
                                      <div className='moretext'>
                                      <h2>Core Concepts of Laravel:</h2>
                                      <ul className='p-0'>
                                       <li className='mb-2'><b>1. Routing:</b> Define routes that map URLs to controller actions.</li>
                                       <li className='mb-2'><b>2. Controllers:</b> Handle requests, process data, and determine responses.</li>
                                       <li className='mb-2'><b>3. Models:</b> Represent data and business logic, interact with the database.</li>
                                       <li className='mb-2'><b>4. Views:</b> Craft user interfaces using Blade templating.</li>
                                     </ul>
                                       <p>Grintech Web Agency is a best php laravel development company. We offers expert Laravel development services with a skilled team of developers. We prioritize transparency, flexible services options, and code security.<Link to='/'>Feel free to explore our services.</Link> If you have any specific requirements or questions, don’t hesitate to ask.
                                       </p>
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
                                <h1>Laravel</h1>
                                <p > Laravel service Grintech plays a central role in bootstrapping Laravel applications. We specialize in Laravel development and have a team of experienced Laravel developers who can help you create high-performing and secure web applications using the Laravel framework.</p>
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
                                        <h2>Why Hire Grintech Experts for Laravel</h2>
                                    </div>
                                    <p>Hire dedicated Laravel Developer on a Full-time, Hourly, or Fixed Project Cost basis & save up to 25% on development cost</p>
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
                                                <div className='d-flex'>
                                                    <a href='tel: 8264420387' className='btn-bt'> <i className="fa-solid fa-phone"></i> (+91) 8264420387 </a>
                                                </div>

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

export default Laravel
