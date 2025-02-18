import { React, useState } from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Commonsection from './Commonsection';
import Form from "./Form";
import { Link } from 'react-router-dom';
import ClientReview from '../../Components/Reviews/ClientReview';


import Client2 from '../Main-page/Client2';
import Client3 from '../Main-page/Client3';
import { Icon } from '@iconify/react';
import data from '../OurWorks/data';
import data1 from '../OurWorks/data1';
import { Helmet } from 'react-helmet';

const Htmlcss = () => {
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
                <title>Dynamic Web Experiences with HTML, CSS, and Bootstrap Services</title>
                <meta name="description" content="Grintech Web Agency specializes in HTML, CSS, and Bootstrap services. Build responsive, visually appealing websites with our expert development team. " />
                <link rel='canonical' href='/our-services-html-css' />
            </Helmet>

            <Header />
            <section className="dev-passion mt-4 mb-1">
                <div className="container d-none d-lg-block py-3">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="passion">
                                <h1 className=''>HTML/CSS/BOOTSTRAP</h1>
                                <p><b>On-Demand HTML/CSS/Bootstrap Developers:</b></p>
                                <div className=''>
                                    <p >
                                    With years of experience and expertise Grintech Web Agency provides HTML/CSS/Bootstrap Services: Convert your web presence with sleek, responsive designs and custom development. Our expertise in HTML CSS and Bootstrap ensures fast, mobile-friendly, and creates a web page with visually stunning website designing. </p>
                                    <h3 className='mt-3'>HTML/CSS/Bootstrap services Key Points Grintech Provides:</h3>
                                   <ul className='p-0'>
                                    <li className='mb-2'><b>1. Responsive Web Design:</b>Create websites that look great on all devices, from desktops to smartphones.</li>
                                    <li className='mb-2'><b>2. Custom HTML coding/CSS Development:</b>Tailor-made coding solutions to meet your specific design and functionality needs.</li>
                                    <li className='mb-2'><b>3. Bootstrap Integration: </b>Utilize the Bootstrap framework for fast, efficient, and consistent web development.</li>
                                    <li className='mb-2'><b>4. Cross-Browser Compatibility:</b> Ensure your website works seamlessly across all major web browsers.</li>
                                   
                                   </ul>
                                 
                                </div>

                                {showMore && (
                                    <div className='moretext'>
                                       <li className='mb-2'><b>5. Mobile-First Approach:</b>Design with mobile users in mind to provide the best experience on smaller screens.</li>
                                    <li className='mb-2'><b>6. SEO-Friendly Code:</b>Write clean, optimized code to improve your website’s search engine ranking.</li>

                                    <li className='mb-2'><b>7. Performance Optimization:</b> Enhance website speed and performance for a better user experience.</li>
                                    <p>
                                   The Best HTML CSS Bootstrap Services are offered online by Grintech. Your HTML CSS Bootstrap project can be completed more quickly and remotely supplied online by outsourcing it.
                                   </p>
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
                        <div className="col-lg-6 order-1 order-lg-2 py-5 ">
                            <Form />
                        </div>
                    </div>
                </div>
                <div className="container d-block d-lg-none">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="passion">

                            <div className=''>
                                   
                                    <h3 className='mt-3'>HTML/CSS/Bootstrap services Key Points Grintech Provides:</h3>
                                   <ul className='p-0'>
                                    <li className='mb-2'><b>1. Responsive Web Design:</b>Create websites that look great on all devices, from desktops to smartphones.</li>
                                    <li className='mb-2'><b>2. Custom HTML coding/CSS Development:</b>Tailor-made coding solutions to meet your specific design and functionality needs.</li>
                                    <li className='mb-2'><b>3. Bootstrap Integration: </b>Utilize the Bootstrap framework for fast, efficient, and consistent web development.</li>
                                    <li className='mb-2'><b>4. Cross-Browser Compatibility:</b> Ensure your website works seamlessly across all major web browsers.</li>
                                   
                                   </ul>
                                 
                                </div>

                                {showMore && (
                                    <div className='moretext'>
                                         <li className='mb-2'><b>5. Mobile-First Approach:</b>Design with mobile users in mind to provide the best experience on smaller screens.</li>
                                    <li className='mb-2'><b>6. SEO-Friendly Code:</b>Write clean, optimized code to improve your website’s search engine ranking.</li>

                                    <li className='mb-2'><b>7. Performance Optimization:</b> Enhance website speed and performance for a better user experience.</li>

                                    <p>The Best HTML CSS Bootstrap Services are offered online by Grintech. Your HTML CSS Bootstrap project can be completed more quickly and remotely supplied online by outsourcing it.</p>
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
                            <h1 className='fw-bold'>HTML/CSS/BOOTSTRAP</h1>
                            <p><b>On-Demand HTML/CSS/Bootstrap Developers:</b></p>
                            <p> With years of experience and expertise Grintech Web Agency provides HTML/CSS/Bootstrap Services: Convert your web presence with sleek, responsive designs and custom development. Our expertise in HTML CSS and Bootstrap ensures fast, mobile-friendly, and creates a web page with visually stunning website designing. </p>
                            <Form />
                        </div>
                    </div>
                </div>

            </section>

            <Commonsection name="HTML/CSS/BOOTSTRAP " technology="Designing" classname="greyback" />

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

export default Htmlcss
