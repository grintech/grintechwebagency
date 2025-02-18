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

const Seoservice = () => {
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
            <title>Best SEO / SMM / SMO Services- Grintech Web Agency</title>
            <meta name="description" content="Best SEO / SMM / SMO Services- With Grintech Unleashing the Potential of Search Engine Optimization, Social Media Marketing, and Social Media Optimization." />
            <link rel='canonical' href='/our-services-seo-smm-smo' />
         </Helmet>

            <Header />

            <section className="dev-passion mt-4 mb-1">
                <div className="container d-none d-lg-block py-3">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="passion">
                                <h1 className='fw-bold'>Drive Traffic with Our SEO, SMM, and SMO Strategies</h1>
                                <p>Drive Traffic with Our SEO, SMM, and SMO Strategies. Grintech provides each service's strategy. Grintech provides one of the best services for SEO, SMM, and SMO</p>
                                <div className=''>
                                   <h2 className='fw-bold'>SEO (Search Engine Optimization)</h2>
                                   <h4>What Grintech Providing with SEO Service:</h4>
                                   <ul className='p-0'>
                                        <li className='mb-2'><b>1. Keyword Research & Analysis:</b> Identifying your business's most relevant and high-performing keywords to improve search engine rankings.</li>
                                        <li className='mb-2'><b>2. On-Page Optimization:</b> Optimizing website content, meta tags, headings, and images to enhance search engine visibility.</li>
                                        <li className='mb-2'><b>3. Technical SEO:</b> Enhancing website speed, mobile-friendliness, crawlability, and security to ensure seamless search engine indexing.</li>
                                        <li className='mb-2'><b>4. Content Strategy:</b> Develop SEO-friendly content that addresses user intent, incorporates target keywords, and provides value to your audience.</li>
                                        <li className='mb-2'><b>5. Link Building:</b> Creating a network of high-quality backlinks to boost website authority and search engine rankings.</li>
                                        <li className='mb-2'><b>6. Local SEO:</b> Optimizing your business for local searches, including Google My Business optimization and local citations.</li>
                                        <li className='mb-2'><b>7. Performance Tracking & Reporting:</b> Regularly monitor website performance, keyword rankings, and traffic with detailed reports and insights.</li>
                                     </ul>
                                </div>

                                {showMore && (
                                    <>
                                    <div className=''>
                                    <h2 className='fw-bold'>SMM (Social Media Marketing) </h2>
                                   <h4>What Grintech Providing with SMM Services:</h4>
                                   <ul className='p-0'>
                                        <li className='mb-2'><b>1. Social Media Strategy Development:</b> Crafting tailored social media strategies to align with your brand goals and target audience.</li>
                                        <li className='mb-2'><b>2. Content Creation & Scheduling:</b> Designing engaging posts, graphics, videos, and other content formats to keep your audience engaged.</li>
                                        <li className='mb-2'><b>3. Platform Management:</b> Managing social media profiles across various platforms like Facebook, Instagram, LinkedIn, Twitter, and more.</li>
                                        <li className='mb-2'><b>4. Community Engagement:</b> Responding to comments, messages, and mentions to build a positive brand presence and foster customer loyalty.</li>
                                        <li className='mb-2'><b>5. Paid Advertising Campaigns:</b> Running targeted social media ads to increase reach, drive traffic, and boost conversions.</li>
                                        <li className='mb-2'><b>6. Analytics & Performance Tracking:</b> Monitoring social media metrics, engagement rates, and ROI to refine strategies and achieve optimal results.</li>
                                     </ul>
                                    </div>

                                    <div className=''>
                                    <h2 className='fw-bold'>SMO (Social Media Optimization)</h2>
                                   <h4>What SMO Provides:</h4>
                                   <ul className='p-0'>
                                        <li className='mb-2'><b>1. Profile Optimization:</b> Enhancing social media profiles with optimized bios, keywords, and relevant business information for better searchability.</li>
                                        <li className='mb-2'><b>2. Content Optimization:</b> Creating shareable content with the right hashtags, keywords, and formats to encourage organic reach and engagement.</li>
                                        <li className='mb-2'><b>3. Social Sharing Tools:</b> Implementing social sharing buttons on your website and content to boost visibility across various platforms.</li>
                                        <li className='mb-2'><b>4. Audience Engagement Strategy:</b> Develop strategies to increase likes, shares, and comments, fostering a vibrant and active community.</li>
                                        <li className='mb-2'><b>5. Influencer Collaboration:</b> Leveraging influencers and partnerships to broaden your reach and enhance brand credibility.</li>
                                        <li className='mb-2'><b>6. Performance Analysis:</b> Regularly reviewing analytics to identify trends, measure the effectiveness of optimization efforts, and make data-driven adjustments.</li>
                                     </ul>
                                     <p>These services, offered by Grintech Web Agency, are designed to enhance online visibility, engage target audiences, and drive business growth through strategic digital marketing.</p>
                                    </div>

                                    </>
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
                                   <h2 className='fw-bold'>SEO (Search Engine Optimization)</h2>
                                   <h4>What Grintech Providing with SEO Service:</h4>
                                   <ul className='p-0'>
                                        <li className='mb-2'><b>1. Keyword Research & Analysis:</b> Identifying your business's most relevant and high-performing keywords to improve search engine rankings.</li>
                                        <li className='mb-2'><b>2. On-Page Optimization:</b> Optimizing website content, meta tags, headings, and images to enhance search engine visibility.</li>
                                        <li className='mb-2'><b>3. Technical SEO:</b> Enhancing website speed, mobile-friendliness, crawlability, and security to ensure seamless search engine indexing.</li>
                                        <li className='mb-2'><b>4. Content Strategy:</b> Develop SEO-friendly content that addresses user intent, incorporates target keywords, and provides value to your audience.</li>
                                        <li className='mb-2'><b>5. Link Building:</b> Creating a network of high-quality backlinks to boost website authority and search engine rankings.</li>
                                        <li className='mb-2'><b>6. Local SEO:</b> Optimizing your business for local searches, including Google My Business optimization and local citations.</li>
                                        <li className='mb-2'><b>7. Performance Tracking & Reporting:</b> Regularly monitor website performance, keyword rankings, and traffic with detailed reports and insights.</li>
                                     </ul>
                                </div>

                                {showMore && (
                                    <>
                                    <div className=''>
                                    <h2 className='fw-bold'>SMM (Social Media Marketing) </h2>
                                   <h4>What Grintech Providing with SMM Services:</h4>
                                   <ul className='p-0'>
                                        <li className='mb-2'><b>1. Social Media Strategy Development:</b> Crafting tailored social media strategies to align with your brand goals and target audience.</li>
                                        <li className='mb-2'><b>2. Content Creation & Scheduling:</b> Designing engaging posts, graphics, videos, and other content formats to keep your audience engaged.</li>
                                        <li className='mb-2'><b>3. Platform Management:</b> Managing social media profiles across various platforms like Facebook, Instagram, LinkedIn, Twitter, and more.</li>
                                        <li className='mb-2'><b>4. Community Engagement:</b> Responding to comments, messages, and mentions to build a positive brand presence and foster customer loyalty.</li>
                                        <li className='mb-2'><b>5. Paid Advertising Campaigns:</b> Running targeted social media ads to increase reach, drive traffic, and boost conversions.</li>
                                        <li className='mb-2'><b>6. Analytics & Performance Tracking:</b> Monitoring social media metrics, engagement rates, and ROI to refine strategies and achieve optimal results.</li>
                                     </ul>
                                    </div>

                                    <div className=''>
                                    <h2 className='fw-bold'>SMO (Social Media Optimization)</h2>
                                   <h4>What SMO Provides:</h4>
                                   <ul className='p-0'>
                                        <li className='mb-2'><b>1. Profile Optimization:</b> Enhancing social media profiles with optimized bios, keywords, and relevant business information for better searchability.</li>
                                        <li className='mb-2'><b>2. Content Optimization:</b> Creating shareable content with the right hashtags, keywords, and formats to encourage organic reach and engagement.</li>
                                        <li className='mb-2'><b>3. Social Sharing Tools:</b> Implementing social sharing buttons on your website and content to boost visibility across various platforms.</li>
                                        <li className='mb-2'><b>4. Audience Engagement Strategy:</b> Develop strategies to increase likes, shares, and comments, fostering a vibrant and active community.</li>
                                        <li className='mb-2'><b>5. Influencer Collaboration:</b> Leveraging influencers and partnerships to broaden your reach and enhance brand credibility.</li>
                                        <li className='mb-2'><b>6. Performance Analysis:</b> Regularly reviewing analytics to identify trends, measure the effectiveness of optimization efforts, and make data-driven adjustments.</li>
                                     </ul>
                                     <p>These services, offered by Grintech Web Agency, are designed to enhance online visibility, engage target audiences, and drive business growth through strategic digital marketing.</p>
                                    </div>

                                    </>

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
                            <h1 className='fw-bold'>Drive Traffic with Our SEO, SMM, and SMO Strategies</h1>
                            <p>Drive Traffic with Our SEO, SMM, and SMO Strategies. Grintech provides each service's strategy. Grintech provides one of the best services for SEO, SMM, and SMO</p>
                            <Form />
                        </div>
                    </div>
                </div>

            </section>

            <Commonsection name="SEO / SMM /SMO " technology="Marketing" classname="greyback" />


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

export default Seoservice
