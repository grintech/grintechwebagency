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


const Flutter = () => {
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
            <title>Flutter App Development services | Grintech Web Agency</title>
            <meta name="description" content="Expert Flutter app development by Grintech Web Agency. Empowers businesses to efficiently create high-performance applications for Android, iOS, and web platforms." />
            <link rel='canonical' href='/our-services-flutter' />
         </Helmet>


            <Header />

            <section className="dev-passion mt-4 mb-1">
                <div className="container d-none d-lg-block py-3">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="passion">
                                <h1 className='fw-bold'>Flutter App Development Company:</h1>
                                <div className=''>
                                    <p>Grintech Web Agency Crafting Cool Apps with Flutter App Development services, creating high-performance apps that work seamlessly across  Android & iOS platforms. Our Flutter experts ensure a smooth user experience, fast development, and beautiful, responsive designs tailored to your business needs.</p>
                                    <h2>Grintech Build Beautiful Apps with Flutter:</h2>
                                    <h4>Key points of what Grintech provides in Flutter App Development:</h4>

                                    <ul className="p-0">
                                    <li className='mb-2'><b>1. Cross-Platform Development:</b> Building high-performance apps using Flutter that run seamlessly on both Android and iOS from a single codebase.</li>
                                    <li className='mb-2'><b>2. Custom UI/UX Design:</b> Creating visually appealing and intuitive user interfaces tailored to your brand and user preferences.</li>
                                    <li className='mb-2'><b>3. Fast Development:</b> Leveraging Flutter’s hot reload feature for rapid development and iterative testing, speeding up the overall project timeline.</li>
                                    <li className='mb-2'><b>4. High Performance:</b> Ensuring smooth and responsive app performance with Flutter’s native compilation and efficient rendering.</li>
                                    <li className='mb-2'><b>5. Feature-Rich Applications:</b> Integrating advanced features such as animations, custom widgets, and real-time data processing to enhance functionality.</li>
                                    </ul>
                                </div>


                                {showMore && (
                                    <div className='moretext'>
                                    <ul className="p-0">
                                    <li className='mb-2'><b>6. API Integration:</b> Connect your Flutter app with third-party services and APIs for extended capabilities and seamless data exchange.</li>
                                    <li className='mb-2'><b>7. Testing & Quality Assurance:</b> Conducting thorough testing across different devices to identify and resolve issues, ensuring a bug-free user experience.</li>
                                    <li className='mb-2'><b>8. Maintenance & Support:</b> Providing ongoing maintenance and updates to keep your app running smoothly and compatible with new operating system versions.</li>
                                    <li className='mb-2'><b>9. Scalable Solutions:</b> Designing apps with scalability in mind, allowing for future growth and feature expansion as your business evolves.</li>
                                    <li className='mb-2'><b>10. Consultation & Strategy:</b> Offering expert guidance and strategy to align app development with your business goals and market needs.</li>
                                    </ul>
                                    <p>Grintech’s Flutter App Development services focus on delivering high-quality, efficient, and visually appealing apps that meet your specific requirements and provide an excellent user experience.</p>
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
                                    <h2>Grintech Build Beautiful Apps with Flutter:</h2>
                                    <h4>Key points of what Grintech provides in Flutter App Development:</h4>
                                    <ul className="p-0">
                                    <li className='mb-2'><b>1. Cross-Platform Development:</b> Building high-performance apps using Flutter that run seamlessly on both Android and iOS from a single codebase.</li>
                                    <li className='mb-2'><b>2. Custom UI/UX Design:</b> Creating visually appealing and intuitive user interfaces tailored to your brand and user preferences.</li>
                                    <li className='mb-2'><b>3. Fast Development:</b> Leveraging Flutter’s hot reload feature for rapid development and iterative testing, speeding up the overall project timeline.</li>
                                    <li className='mb-2'><b>4. High Performance:</b> Ensuring smooth and responsive app performance with Flutter’s native compilation and efficient rendering.</li>
                                    <li className='mb-2'><b>5. Feature-Rich Applications:</b> Integrating advanced features such as animations, custom widgets, and real-time data processing to enhance functionality.</li>
                                    </ul>
                                </div>


                                {showMore && (
                                    <div className='moretext'>
                                    <ul className="p-0">
                                    <li className='mb-2'><b>6. API Integration:</b> Connect your Flutter app with third-party services and APIs for extended capabilities and seamless data exchange.</li>
                                    <li className='mb-2'><b>7. Testing & Quality Assurance:</b> Conducting thorough testing across different devices to identify and resolve issues, ensuring a bug-free user experience.</li>
                                    <li className='mb-2'><b>8. Maintenance & Support:</b> Providing ongoing maintenance and updates to keep your app running smoothly and compatible with new operating system versions.</li>
                                    <li className='mb-2'><b>9. Scalable Solutions:</b> Designing apps with scalability in mind, allowing for future growth and feature expansion as your business evolves.</li>
                                    <li className='mb-2'><b>10. Consultation & Strategy:</b> Offering expert guidance and strategy to align app development with your business goals and market needs.</li>
                                    </ul>
                                    <p>Grintech’s Flutter App Development services focus on delivering high-quality, efficient, and visually appealing apps that meet your specific requirements and provide an excellent user experience.</p>
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
                            <h1 className='fw-bold'>Flutter App Development Company:</h1>
                            <p>Grintech Web Agency Crafting Cool Apps with Flutter App Development services, creating high-performance apps that work seamlessly across  Android & iOS platforms. Our Flutter experts ensure a smooth user experience, fast development, and beautiful, responsive designs tailored to your business needs.</p>
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
                                    <h2>Why Hire Grintech Experts for Flutter App Development</h2>
                                </div>
                                <p>Hire dedicated Flutter Developer on a Full-time, Hourly, or Fixed Project Cost basis & save up to 25% on development cost</p>
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

export default Flutter
