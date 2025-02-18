import { React, useState } from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from 'react-router-dom';

import Client2 from '../Main-page/Client2';
import Client3 from '../Main-page/Client3';
import { Icon } from '@iconify/react';
import data from '../OurWorks/data';
import data1 from '../OurWorks/data1';


import Commonsection from "./Commonsection";

import Form from "./Form";
import ClientReview from '../../Components/Reviews/ClientReview';
import { Helmet } from 'react-helmet';

const Ecommerce = () => {
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
            <title>E-commerce Website Development Services - Grintech Web Agency</title>
            <meta name="description" content="Best E-commerce website development services With Grintech Web Agency. We create tailored solutions for seamless shopping experiences and increased sales." />
            <link rel='canonical' href='/our-services-ecommerce-website' />
         </Helmet>

            <Header />

            <section className="dev-passion mt-4 mb-1">
                <div className="container d-none d-lg-block py-3">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="passion">
                                <h1 className='fw-bold'>On-Demand: E-commerce & WooCommerce Services</h1>
                                <div className=''>
                                    <p >Grintech Web Agency provides eCommerce and WooCommerce Services. We have deep-rooted digital commerce capability operating in this space over the past 7+ years and our operations team has managed thousands of ecommerce businesses, like wix ecommerce, ecommerce shop, woocommerce support etc.</p>

                                    <h4>Let’s delve into the e-commerce services solutions offered by Grintech Web Agency:</h4>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. UI/UX Web Designing:</b> Grintech specializes in creating visually appealing, user-friendly websites. Their custom designs cater to specific needs, ensuring an exceptional user experience.</li>
                                        <li className='mb-2'><b>2. Web Development:</b> In web development we are offering tailored solutions to build dynamic, responsive, and user-friendly websites. We focus on enhancing user experience, integrating advanced features, and ensuring your online presence stands out. Transform your vision into a high-performing digital reality.</li>
                                     </ul>

                                    <h4>The agency’s expertise spans various technologies:</h4>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. Swift:</b> Building high-quality web applications for iOS and Mac.</li>
                                        <li className='mb-2'><b>2. Ionic:</b> Utilizing pre-designed UI components for seamless app development.</li>
                                        <li className='mb-2'><b>3. React Native:</b> A JavaScript framework called React Native is used to create native apps.</li>
                                        <li className='mb-2'><b>4. Flutter:</b> Google’s UI toolkit for natively compiled applications.</li>
                                        <li className='mb-2'><b>5. Xamarin:</b> Cross-platform app development using C#.</li>
                                        <li className='mb-2'><b>6. Java/Kotlin:</b> For Android development.</li>
                                     </ul>
                                </div>

                                {showMore && (
                                    <div className='moretext'>
                                    <h2>Some key points for WooCommerce services provided by Grintech Web Agency:</h2>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. WooCommerce Integration:</b> Grintech seamlessly integrates WooCommerce into existing websites or sets up new e-commerce platforms. Customized product pages, checkout processes, and payment gateways for a smooth shopping experience.</li>
                                        <li className='mb-2'><b>2. Product Management: </b> Efficiently manage product catalogs, inventory, and variations. Set up categories, tags, and attributes to organize products effectively.</li>
                                        <li className='mb-2'><b>3. Payment Gateways:</b> Configure secure payment gateways (e.g., PayPal, Stripe, or credit card processing). Ensure seamless transactions for customers.</li>
                                        <li className='mb-2'><b>4. Theme Customization:</b> Tailor WooCommerce themes to match the brand’s identity.Optimize layouts, colors, and fonts for a cohesive look.</li>
                                        <li className='mb-2'><b>5. Reporting and Analytics:</b> Monitor sales, customer behaviour, and conversion rates. Use data insights to make informed business decisions.</li>
                                        <p>WooCommerce is more than just a plugin—it’s a powerful tool for running successful online stores. Explore Grintech Web Agency’s services. </p>
                                        
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
                                <h4>Let’s delve into the e-commerce services solutions offered by Grintech Web Agency:</h4>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. UI/UX Web Designing:</b> Grintech specializes in creating visually appealing, user-friendly websites. Their custom designs cater to specific needs, ensuring an exceptional user experience.</li>
                                        <li className='mb-2'><b>2. Web Development:</b> In web development we are offering tailored solutions to build dynamic, responsive, and user-friendly websites. We focus on enhancing user experience, integrating advanced features, and ensuring your online presence stands out. Transform your vision into a high-performing digital reality.</li>
                                     </ul>

                                    <h4>The agency’s expertise spans various technologies:</h4>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. Swift:</b> Building high-quality web applications for iOS and Mac.</li>
                                        <li className='mb-2'><b>2. Ionic:</b> Utilizing pre-designed UI components for seamless app development.</li>
                                        <li className='mb-2'><b>3. React Native:</b> A JavaScript framework called React Native is used to create native apps.</li>
                                        <li className='mb-2'><b>4. Flutter:</b> Google’s UI toolkit for natively compiled applications.</li>
                                        <li className='mb-2'><b>5. Xamarin:</b> Cross-platform app development using C#.</li>
                                        <li className='mb-2'><b>6. Java/Kotlin:</b> For Android development.</li>
                                     </ul>
                                </div>

                                {showMore && (
                                    <div className='moretext'>
                                    <h2>Some key points for WooCommerce services provided by Grintech Web Agency:</h2>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. WooCommerce Integration:</b> Grintech seamlessly integrates WooCommerce into existing websites or sets up new e-commerce platforms. Customized product pages, checkout processes, and payment gateways for a smooth shopping experience.</li>
                                        <li className='mb-2'><b>2. Product Management: </b> Efficiently manage product catalogs, inventory, and variations. Set up categories, tags, and attributes to organize products effectively.</li>
                                        <li className='mb-2'><b>3. Payment Gateways:</b> Configure secure payment gateways (e.g., PayPal, Stripe, or credit card processing). Ensure seamless transactions for customers.</li>
                                        <li className='mb-2'><b>4. Theme Customization:</b> Tailor WooCommerce themes to match the brand’s identity.Optimize layouts, colors, and fonts for a cohesive look.</li>
                                        <li className='mb-2'><b>5. Reporting and Analytics:</b> Monitor sales, customer behaviour, and conversion rates. Use data insights to make informed business decisions.</li>
                                        <p>WooCommerce is more than just a plugin—it’s a powerful tool for running successful online stores. Explore Grintech Web Agency’s services. </p>
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
                            <h1 className='fw-bold'>On-Demand: E-commerce & WooCommerce Services</h1>
                            <p >Grintech Web Agency provides eCommerce and WooCommerce Services. We have deep-rooted digital commerce capability operating in this space over the past 7+ years and our operations team has managed thousands of ecommerce businesses, like wix ecommerce, ecommerce shop, woocommerce support etc.</p>
                            <Form />
                        </div>
                    </div>
                </div>

            </section>

            <Commonsection name="E-commerce / Woo Commerce" technology="Developement" classname="greyback" />


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

export default Ecommerce
