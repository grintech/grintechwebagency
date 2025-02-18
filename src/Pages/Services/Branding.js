import { React, useState } from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from 'react-router-dom';

import Form from "./Form";
import Commonsection from './Commonsection';
import ClientReview from '../../Components/Reviews/ClientReview';


import Client2 from '../Main-page/Client2';
import Client3 from '../Main-page/Client3';
import { Icon } from '@iconify/react';
import data from '../OurWorks/data';
import data1 from '../OurWorks/data1';
import { Helmet } from 'react-helmet';

const Branding = () => {

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
            <title>Top Branding Services for Your Business | Grintech Web Agency</title>
            <meta name="description" content="Branding Services to Elevate Your Brand | With Grintech Web Agency unleashing the Power of Branding to Differentiate, Connect, and Inspire Customer Loyalty" />
            <link rel='canonical' href='/our-services-branding' />
         </Helmet>

            <Header />
            <section className="dev-passion mt-4 mb-1">
                <div className="container d-none d-lg-block py-3">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="passion">
                                <h1 className='fw-bold'>Branding Services: Shape Your Brand’s Future with Us</h1>
                                <div className=''>
                                    <p>Let’s Make Your Brand Unforgettable with Grintech’s expert branding services. From logo design to brand strategy, we craft identities that captivate and connect. We are the best branding agency on Demand. Elevate your brand today.</p>
                                    <h2>What Grintech Web Agency provides in Branding service:</h2>
                                    <ul className="p-0">
                                    <li className='mb-2'><b>1. Brand Discovery & Strategy:</b> In-depth consultation to understand your business, target audience, and market positioning. We develop a strategic plan to establish a unique and compelling brand identity.</li>
                                    <li className='mb-2'><b>2. Logo & Identity Design:</b> Creating custom logos and visual identities that capture the essence of your brand, ensuring a memorable and cohesive look across all platforms.</li>
                                    <li className='mb-2'><b>3. Brand Messaging & Voice:</b> Defining your brand’s tone, language, and key messaging to communicate effectively and consistently with your audience.</li>
                                    <li className='mb-2'><b>4. Visual Brand Guidelines:</b> Develop comprehensive guidelines that outline the proper use of your brand elements, including logo, colors, typography, and imagery, to maintain brand consistency.</li>
                                    <li className='mb-2'><b>5. Website & Digital Branding:</b> Designing and optimizing your website and digital assets to reflect your brand identity, creating a seamless online presence that enhances user experience.</li>
                                    </ul>
                                </div>

                                {showMore && (
                                    <div className='moretext'>
                                    <ul className="p-0">
                                    <li className='mb-2'><b>6. Marketing Collateral Design:</b>  Designing branded materials such as business cards, brochures, social media graphics, and more, to ensure a professional and cohesive brand experience.</li>
                                    <li className='mb-2'><b>7. Brand Positioning & Differentiation:</b> Identifying what sets your brand apart from competitors and defining a clear positioning strategy to attract your target market.</li>
                                    <li className='mb-2'><b>8. Rebranding Services:</b> Refreshing your brand’s look and feel to stay relevant in a changing market, updating logos, messaging, and overall brand identity.</li>
                                    <li className='mb-2'><b>9. Storytelling & Content Creation:</b> Crafting compelling brand stories and content that resonate with your audience, helping to build a strong emotional connection.</li>
                                    <li className='mb-2'><b>10. Brand Audits & Consultations:</b> Evaluating your current brand performance and providing actionable insights and recommendations to enhance your brand strategy.</li>
                                    </ul>
                                    <p>Grintech’s Branding service helps businesses build a strong, authentic brand that stands out, connects with audiences, and drives lasting success. In today’s competitive market, a memorable brand is key to success. Our branding services help you build a strong, authentic identity that not only stands out but also resonates with your audience. Together, let's create a genuinely memorable brand.</p>
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
                                <h2>What Grintech Web Agency provides in Branding service:</h2>
                                    <ul className="p-0">
                                    <li className='mb-2'><b>1. Brand Discovery & Strategy:</b> In-depth consultation to understand your business, target audience, and market positioning. We develop a strategic plan to establish a unique and compelling brand identity.</li>
                                    <li className='mb-2'><b>2. Logo & Identity Design:</b> Creating custom logos and visual identities that capture the essence of your brand, ensuring a memorable and cohesive look across all platforms.</li>
                                    <li className='mb-2'><b>3. Brand Messaging & Voice:</b> Defining your brand’s tone, language, and key messaging to communicate effectively and consistently with your audience.</li>
                                    <li className='mb-2'><b>4. Visual Brand Guidelines:</b> Develop comprehensive guidelines that outline the proper use of your brand elements, including logo, colors, typography, and imagery, to maintain brand consistency.</li>
                                    <li className='mb-2'><b>5. Website & Digital Branding:</b> Designing and optimizing your website and digital assets to reflect your brand identity, creating a seamless online presence that enhances user experience.</li>
                                    </ul>
                                </div>

                                {showMore && (
                                    <div className='moretext'>
                                        <ul className="p-0">
                                        <li className='mb-2'><b>6. Marketing Collateral Design:</b>  Designing branded materials such as business cards, brochures, social media graphics, and more, to ensure a professional and cohesive brand experience.</li>
                                        <li className='mb-2'><b>7. Brand Positioning & Differentiation:</b> Identifying what sets your brand apart from competitors and defining a clear positioning strategy to attract your target market.</li>
                                        <li className='mb-2'><b>8. Rebranding Services:</b> Refreshing your brand’s look and feel to stay relevant in a changing market, updating logos, messaging, and overall brand identity.</li>
                                        <li className='mb-2'><b>9. Storytelling & Content Creation:</b> Crafting compelling brand stories and content that resonate with your audience, helping to build a strong emotional connection.</li>
                                        <li className='mb-2'><b>10. Brand Audits & Consultations:</b> Evaluating your current brand performance and providing actionable insights and recommendations to enhance your brand strategy.</li>
                                        </ul>
                                        <p>Grintech’s Branding service helps businesses build a strong, authentic brand that stands out, connects with audiences, and drives lasting success. In today’s competitive market, a memorable brand is key to success. Our branding services help you build a strong, authentic identity that not only stands out but also resonates with your audience. Together, let's create a genuinely memorable brand.</p>
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
                        <h1 className='fw-bold'>Branding Services: Shape Your Brand’s Future with Us</h1>
                        <p>Let’s Make Your Brand Unforgettable with Grintech’s expert branding services. From logo design to brand strategy, we craft identities that captivate and connect. We are the best branding agency on Demand. Elevate your brand today.</p>
                            <Form />
                        </div>
                    </div>
                </div>
            </section>

            <Commonsection name="Branding " technology="Marketing" classname="blueback" />

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

export default Branding
