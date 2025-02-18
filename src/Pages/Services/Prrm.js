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

const Prrm = () => {
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
            <title>PR/RM Services: Public Relations and Reputation Management</title>
            <meta name="description" content="Grintech provide Content PR/RM services. PR and RM are integral to shaping the perceptions and reputation of a business, enabling them to build credibility " />
            <link rel='canonical' href='/our-services-content-pr-rm' />
         </Helmet>

            <Header />

            <section className="dev-passion mt-4 mb-1">
                <div className="container d-none d-lg-block py-3">
                    <div className="row">
                        <div className="col-lg-6  order-2 order-lg-1">
                            <div className="passion">
                                <h1 className='fw-bold'>Public Relations (PR) and Reputation Management (RM)</h1>
                                <div className=''>
                                    <p>Boost Your Brand’s Image with Grintech’s PR & RM services. We craft positive narratives, manage crises, and build trust to enhance your brand’s reputation.</p>
                                    <h2 className='fw-bold'>Here’s what makes Grintech Web Agency’s PR & Reputation Management services special:</h2>
                                    <ul className="p-0">
                                    <li className='mb-2'><b>1. Strategic PR Planning:</b> Developing tailored PR strategies that align with your brand’s goals, ensuring your message reaches the right audience at the right time.</li>
                                    <li className='mb-2'><b>2. Crisis Management:</b> Proactively managing crises with effective communication strategies to protect your brand’s reputation and navigate challenging situations with confidence.</li>
                                    <li className='mb-2'><b>3. Media Relations:</b> Building strong relationships with key media outlets to secure positive coverage and increase your brand’s visibility.</li>
                                    <li className='mb-2'><b>4. Online Reputation Monitoring:</b> Constantly monitoring your brand’s online presence to detect and address negative feedback, reviews, or mentions quickly.</li>
                                    <li className='mb-2'><b>5. Reputation Repair & Enhancement:</b> Implementing strategies to repair damaged reputations and enhance your brand’s image through positive storytelling and strategic campaigns.</li>
                                    </ul>
                                </div>

                                {showMore && (
                                    <div className='more-text'>
                                    <ul className="p-0">
                                    <li className='mb-2'><b>6. Press Release Writing & Distribution:</b> Crafting compelling press releases and distributing them to targeted media channels to keep your brand in the spotlight.</li>
                                    <li className='mb-2'><b>7. Social Media Management:</b> Managing your social media presence to ensure consistent, positive messaging that reflects your brand’s values and builds trust.</li>
                                    <li className='mb-2'><b>8. Influencer & Thought Leadership Campaigns:</b> Collaborating with influencers and positioning your brand leaders as industry experts to build credibility and expand your reach.</li>
                                    <li className='mb-2'><b>9. Content Creation & Management:</b> Creating engaging content, including blog posts, articles, and social media updates, that portrays your brand positively and keeps your audience informed.</li>
                                    <li className='mb-2'><b>10. Performance Analysis & Reporting:</b> Measuring the impact of PR and reputation management efforts with detailed reports that provide insights into brand perception and campaign success.</li>
                                    </ul>
                                    <p>Grintech’s PR & Reputation Management services are designed to safeguard your brand, boost credibility, and ensure your brand’s story is told in the best light. Maintaining a positive brand image is more crucial than ever. Grintech’s PR & Reputation Management services offer the expertise and strategies needed to build, protect, and enhance your brand’s reputation. From media relations to crisis management, we ensure your brand remains trusted and respected. Let’s work together to keep your brand’s image at its best.</p>
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
                        <div className="col-lg-6  order-2 order-lg-1">
                            <div className="passion">

                                <div className=''>
                                <h2 className='fw-bold'>Here’s what makes Grintech Web Agency’s PR & Reputation Management services special:</h2>
                                    <ul className="p-0">
                                    <li className='mb-2'><b>1. Strategic PR Planning:</b> Developing tailored PR strategies that align with your brand’s goals, ensuring your message reaches the right audience at the right time.</li>
                                    <li className='mb-2'><b>2. Crisis Management:</b> Proactively managing crises with effective communication strategies to protect your brand’s reputation and navigate challenging situations with confidence.</li>
                                    <li className='mb-2'><b>3. Media Relations:</b> Building strong relationships with key media outlets to secure positive coverage and increase your brand’s visibility.</li>
                                    <li className='mb-2'><b>4. Online Reputation Monitoring:</b> Constantly monitoring your brand’s online presence to detect and address negative feedback, reviews, or mentions quickly.</li>
                                    <li className='mb-2'><b>5. Reputation Repair & Enhancement:</b> Implementing strategies to repair damaged reputations and enhance your brand’s image through positive storytelling and strategic campaigns.</li>
                                    </ul>
                                </div>

                                {showMore && (
                                    <div className='more-text'>
                                    <ul className="p-0">
                                    <li className='mb-2'><b>6. Press Release Writing & Distribution:</b> Crafting compelling press releases and distributing them to targeted media channels to keep your brand in the spotlight.</li>
                                    <li className='mb-2'><b>7. Social Media Management:</b> Managing your social media presence to ensure consistent, positive messaging that reflects your brand’s values and builds trust.</li>
                                    <li className='mb-2'><b>8. Influencer & Thought Leadership Campaigns:</b> Collaborating with influencers and positioning your brand leaders as industry experts to build credibility and expand your reach.</li>
                                    <li className='mb-2'><b>9. Content Creation & Management:</b> Creating engaging content, including blog posts, articles, and social media updates, that portrays your brand positively and keeps your audience informed.</li>
                                    <li className='mb-2'><b>10. Performance Analysis & Reporting:</b> Measuring the impact of PR and reputation management efforts with detailed reports that provide insights into brand perception and campaign success.</li>
                                    </ul>
                                    <p>Grintech’s PR & Reputation Management services are designed to safeguard your brand, boost credibility, and ensure your brand’s story is told in the best light. Maintaining a positive brand image is more crucial than ever. Grintech’s PR & Reputation Management services offer the expertise and strategies needed to build, protect, and enhance your brand’s reputation. From media relations to crisis management, we ensure your brand remains trusted and respected. Let’s work together to keep your brand’s image at its best.</p>
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
                            <h1 className='fw-bold'>Public Relations (PR) and Reputation Management (RM)</h1>
                            <p>Boost Your Brand’s Image with Grintech’s PR & RM services. We craft positive narratives, manage crises, and build trust to enhance your brand’s reputation.</p>
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

export default Prrm
