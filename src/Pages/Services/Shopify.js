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

const Shopify = () => {
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
            <title>Shopify Development Services 2024- Grintech Web Agency</title>
            <meta name="description" content="Achieve Business Objectives with Our Shopify Development Services. Shopify Solutions Aligned with Your Business's Unique Needs. Providing Shopify solutions" />
            <link rel='canonical' href='/our-services-shopify' />
         </Helmet>

            <Header />

            <section className="dev-passion mt-4 mb-1">
                <div className="container d-none d-lg-block py-3">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="passion">
                                <h1 className='fw-bold'>Shopify Development Company</h1>
                                <div className=''>
                                    <h4 className="fw-bold">Grintech Web Agency: We go beyond standard services:</h4>
                                    <p> Grintech Web Agency is a leading Shopify development company, known for delivering on-demand, customized eCommerce solutions. Our expert team designs builds, and optimizes Shopify stores tailored to your brand’s needs, ensuring a seamless shopping experience that drives sales and growth. Choose us for professional, reliable, and innovative Shopify services that set your business apart.</p>
                                   
                                   <h2 className='fw-bold'>What We Provide:</h2>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. Custom Shopify Store Design:</b> Tailored designs to match your brand identity and engage your customers.</li>
                                        <li className='mb-2'><b>2. Store Setup & Configuration:</b> Complete setup, from product listings to payment gateways and shipping configurations.</li>
                                        <li className='mb-2'><b>3. App Integration:</b> Enhance functionality with third-party apps for marketing, inventory management, and more.</li>
                                        <li className='mb-2'><b>4. SEO Optimization:</b> Improve your store’s visibility with on-page SEO, optimized product descriptions, and meta tags.</li>
                                        <li className='mb-2'><b>5. Ongoing Support & Maintenance:</b>Regular updates, troubleshooting, and performance enhancements to keep your store running smoothly.</li>
                                        
                                     </ul>

                                </div>


                                {showMore && (
                                    <div className='moretext'>
                                       <h2>Why Choose Grintech Web Agency?</h2>
                                       <ul className='p-0'>
                                        <li className='mb-2'><b>1. Expertise:</b> A team of certified Shopify developers with years of experience.</li>
                                        <li className='mb-2'><b>2. Custom Solutions:</b> We create tailored strategies that fit your business needs.</li>
                                        <li className='mb-2'><b>3. Client-Centric Approach:</b> Dedicated support and communication at every project stage.</li>
                                        <li className='mb-2'><b>4. Proven Results:</b> A track record of successful Shopify stores that drive sales and growth.</li>
                                       <p><b>Conclusion:</b> Choosing Grintech Web Agency for your Shopify development needs means partnering with a team committed to your success. We go beyond standard services, providing personalized solutions that help your business stand out and thrive in the competitive eCommerce landscape. Let’s build your online store together and take your business to the next level.</p>
                                     </ul>
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
                                    <h2 className='fw-bold'>What We Provide:</h2>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. Custom Shopify Store Design:</b> Tailored designs to match your brand identity and engage your customers.</li>
                                        <li className='mb-2'><b>2. Store Setup & Configuration:</b> Complete setup, from product listings to payment gateways and shipping configurations.</li>
                                        <li className='mb-2'><b>3. App Integration:</b> Enhance functionality with third-party apps for marketing, inventory management, and more.</li>
                                        <li className='mb-2'><b>4. SEO Optimization:</b> Improve your store’s visibility with on-page SEO, optimized product descriptions, and meta tags.</li>
                                        <li className='mb-2'><b>5. Ongoing Support & Maintenance:</b>Regular updates, troubleshooting, and performance enhancements to keep your store running smoothly.</li>
                                        
                                     </ul>
                                    </div>


                                {showMore && (
                                    <div className='moretext'>
                                    <h2>Why Choose Grintech Web Agency?</h2>
                                       <ul className='p-0'>
                                        <li className='mb-2'><b>1. Expertise:</b> A team of certified Shopify developers with years of experience.</li>
                                        <li className='mb-2'><b>2. Custom Solutions:</b> We create tailored strategies that fit your business needs.</li>
                                        <li className='mb-2'><b>3. Client-Centric Approach:</b> Dedicated support and communication at every project stage.</li>
                                        <li className='mb-2'><b>4. Proven Results:</b> A track record of successful Shopify stores that drive sales and growth.</li>
                                       <p><b>Conclusion:</b> Choosing Grintech Web Agency for your Shopify development needs means partnering with a team committed to your success. We go beyond standard services, providing personalized solutions that help your business stand out and thrive in the competitive eCommerce landscape. Let’s build your online store together and take your business to the next level.</p>
                                     </ul>
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
                            <h1 className='fw-bold'>Shopify Development Company</h1>
                            <h4 className="fw-bold">Grintech Web Agency: We go beyond standard services:</h4>
                            <p> Grintech Web Agency is a leading Shopify development company, known for delivering on-demand, customized eCommerce solutions. Our expert team designs builds, and optimizes Shopify stores tailored to your brand’s needs, ensuring a seamless shopping experience that drives sales and growth. Choose us for professional, reliable, and innovative Shopify services that set your business apart.</p>
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
                                    <h2>Why Hire Grintech Experts for Shopify App Development</h2>
                                </div>
                                <p>Hire dedicated Shopify Developer on a Full-time, Hourly, or Fixed Project Cost basis & save up to 25% on development cost</p>
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

export default Shopify
