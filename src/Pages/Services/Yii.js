import { React, useState } from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Commonsection from './Commonsection';
import { Link } from 'react-router-dom';
import Form from "./Form";
import ClientReview from '../../Components/Reviews/ClientReview';


import Client2 from '../Main-page/Client2';
import Client3 from '../Main-page/Client3';
import { Icon } from '@iconify/react';
import data from '../OurWorks/data';
import data1 from '../OurWorks/data1';
import { Helmet } from 'react-helmet';

const Yii = () => {
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
        <title>Yii Development Services 2024- Grintech Web Agency</title>
        <meta name="description" content="Grintech Web Agency's Yii development services. Our expert Yii developers create scalable and efficient web applications tailored to your business needs." />
        <link rel='canonical' href='/our-services-yii-development' />
      </Helmet>

            <Header />
            <section className="dev-passion mt-4 mb-1">
                <div className="container d-none d-lg-block py-3">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="passion">
                                <div className=''>
                                    <h1> Features and Benefits of Yii vs. CodeIgniter for Secure Web Development</h1>
                                    <p > Grintech Web Agency offers services for both Yii and CodeIgniter frameworks at a budget-friendly rate. Here’s a quick comparison of the two frameworks to help you decide which one might be best for your project:
                                    </p>
                                    <h2>Yii Framework</h2>
                                    <ul className='p-0'>
                                    <li className='mb-2'><b>1. Performance:</b> Known for its high performance, thanks to built-in caching and optimized database queries.</li>
                                    <li className='mb-2'><b>2. Security:</b> Provides robust security features to prevent common vulnerabilities like XSS, CSRF, and SQL injection.</li>
                                    <li className='mb-2'><b>3. Extensibility:</b> Highly extensible with a powerful extension library.</li>
                                    <li className='mb-2'><b>4. Documentation:</b> Comprehensive and well-organized, making it beginner-friendly.</li>
                                    </ul>
                                  
                                </div>

                                {showMore && (
                                    <div className='moretext'>
                                        <h2>CodeIgniter Framework</h2>
                                            <ul className='p-0'>
                                            <li className='mb-2'><b>1. Simplicity:</b> Lightweight and easy to set up, ideal for small to medium-sized projects.</li>
                                            <li className='mb-2'><b>2. Speed:</b> Excels in speed and performance due to its lean architecture.</li>
                                            <li className='mb-2'><b>3. Community Support:</b> Large and active community with ample resources and tutorials.</li>
                                            <li className='mb-2'><b>4. Flexibility:</b> Known for its flexibility, allowing developers to build applications according to specific requirements.</li>
                                            <p>Both frameworks have their strengths, so the choice depends on your project’s specific needs. If you need high performance and security for a complex application, Yii might be the better choice. For simpler, faster development, CodeIgniter could be more suitable.
                                            </p>
                                            </ul>
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
                                <h2>Yii Framework</h2>
                                    <ul className='p-0'>
                                    <li className='mb-2'><b>1. Performance:</b> Known for its high performance, thanks to built-in caching and optimized database queries.</li>
                                    <li className='mb-2'><b>2. Security:</b> Provides robust security features to prevent common vulnerabilities like XSS, CSRF, and SQL injection.</li>
                                    <li className='mb-2'><b>3. Extensibility:</b> Highly extensible with a powerful extension library.</li>
                                    <li className='mb-2'><b>4. Documentation:</b> Comprehensive and well-organized, making it beginner-friendly.</li>
                                    </ul>
                                </div>

                                {showMore && (
                                     <div className='moretext'>
                                     <h2>CodeIgniter Framework</h2>
                                         <ul className='p-0'>
                                         <li className='mb-2'><b>1. Simplicity:</b> Lightweight and easy to set up, ideal for small to medium-sized projects.</li>
                                         <li className='mb-2'><b>2. Speed:</b> Excels in speed and performance due to its lean architecture.</li>
                                         <li className='mb-2'><b>3. Community Support:</b> Large and active community with ample resources and tutorials.</li>
                                         <li className='mb-2'><b>4. Flexibility:</b> Known for its flexibility, allowing developers to build applications according to specific requirements.</li>
                                         <p>Both frameworks have their strengths, so the choice depends on your project’s specific needs. If you need high performance and security for a complex application, Yii might be the better choice. For simpler, faster development, CodeIgniter could be more suitable.
                                         </p>
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
                              <h1> Features and Benefits of Yii vs. CodeIgniter for Secure Web Development</h1>
                                    <p > Grintech Web Agency offers services for both Yii and CodeIgniter frameworks at a budget-friendly rate. Here’s a quick comparison of the two frameworks to help you decide which one might be best for your project:
                                    </p>
                            <Form />
                        </div>
                    </div>

                </div>
            </section>
            <Commonsection name="Yii / Ci" technology="Development" classname="greyback" />


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

export default Yii
