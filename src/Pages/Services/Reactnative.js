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

const Reactnative = () => {
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
            <title>Top React Native App Development Services | Grintech Web Agency</title>
            <meta name="description" content="We specializes in leveraging the power of React Native—a JavaScript framework created by Facebook—to build robust and efficient cross-platform mobile applications." />
            <link rel='canonical' href='/our-services-react-native' />
         </Helmet>

            <Header />

            <section className="dev-passion mt-4 mb-1">
                <div className="container d-none d-lg-block py-3">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="passion">
                                <h1 className='fw-bold'>React Native App Development Company</h1>
                                <div className=''>
                                    <p>React Native: Your App, Our Expertise. At Grintech, our skilled React Native developers create high-performance, cross-platform apps that stand out. We blend cutting-edge technology with creative design to deliver seamless, user-friendly experiences tailored to your business needs.</p>

                                    <h4>React Native App Development Services For Building Complex Cross-Platform Apps:</h4>
                                    <ul className="p-0">
                                    <li className='mb-2'><b>1. Custom App Development:</b> Using React Native Development, we design and develop mobile applications that are specific to the demands of users and specific business objectives.</li>
                                    <li className='mb-2'><b>2. Multi Platforms Development:</b> Leveraging React Native development to develop apps that work seamlessly on both iOS and Android, using a single codebase to reduce development time and costs.</li>
                                    <li className='mb-2'><b>3. API Integration: </b> Connecting the app with various third-party services, databases, and APIs to extend functionality and enhance user experience.APIs enable different software systems to communicate and share data.</li>
                                    <li className='mb-2'><b>4. Optimize app performance:</b> The major goal of react native app development is enhancing app performance to ensure smooth, fast, and efficient user interactions across different devices.</li>
                                    <li className='mb-2'><b>5. Testing and Quality Assurance:</b> Grintech web agency identifies and fixes issues through free app testing to make sure the program works as intended and adheres to quality standards.</li>
                                    <li className='mb-2'><b>6. App Store Deployment:</b> As a web development company we develop React Native apps, we oversee the submission and approval process for both the Google Play Store and the Apple App Store, making sure that all rules and specifications are met.</li>
                                    </ul>
                                    <p>By providing these services, the grintech web agency ensures that clients receive high-quality, cross-platform mobile apps that are both functional and user-friendly. We help all types of businesses to create high-quality and scalable React native applications that engage users and drive growth.</p>

                                </div>



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
                                <h4>React Native App Development Services For Building Complex Cross-Platform Apps:</h4>
                                    <ul className="p-0">
                                    <li className='mb-2'><b>1. Custom App Development:</b> Using React Native Development, we design and develop mobile applications that are specific to the demands of users and specific business objectives.</li>
                                    <li className='mb-2'><b>2. Multi Platforms Development:</b> Leveraging React Native development to develop apps that work seamlessly on both iOS and Android, using a single codebase to reduce development time and costs.</li>
                                    <li className='mb-2'><b>3. API Integration: </b> Connecting the app with various third-party services, databases, and APIs to extend functionality and enhance user experience.APIs enable different software systems to communicate and share data.</li>
                                    <li className='mb-2'><b>4. Optimize app performance:</b> The major goal of react native app development is enhancing app performance to ensure smooth, fast, and efficient user interactions across different devices.</li>
                                    <li className='mb-2'><b>5. Testing and Quality Assurance:</b> Grintech web agency identifies and fixes issues through free app testing to make sure the program works as intended and adheres to quality standards.</li>
                                    <li className='mb-2'><b>6. App Store Deployment:</b> As a web development company we develop React Native apps, we oversee the submission and approval process for both the Google Play Store and the Apple App Store, making sure that all rules and specifications are met.</li>
                                    </ul>
                                    <p>By providing these services, the grintech web agency ensures that clients receive high-quality, cross-platform mobile apps that are both functional and user-friendly. We help all types of businesses to create high-quality and scalable React native applications that engage users and drive growth.</p>
                                </div>



                                <div className='d-flex mt-4'>
                                    <a href='tel: 833232-6622' className='btn-bt'> <i className="fa-solid fa-phone"></i> (+1) 833232-6622 </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 py-5">
                            <h1 className='fw-bold'>React Native App Development Company</h1>
                            <p>React Native: Your App, Our Expertise. At Grintech, our skilled React Native developers create high-performance, cross-platform apps that stand out. We blend cutting-edge technology with creative design to deliver seamless, user-friendly experiences tailored to your business needs.</p>
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
                                    <h2>Why Hire Grintech Experts for React Native App Development</h2>
                                </div>
                                <p>Hire dedicated React Native Developer on a Full-time, Hourly, or Fixed Project Cost basis & save up to 25% on development cost</p>
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

export default Reactnative
