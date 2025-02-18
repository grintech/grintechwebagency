import { React, useState } from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from 'react-router-dom';

import Commonsection from './Commonsection';

import Form from "./Form";
import ClientReview from '../../Components/Reviews/ClientReview';

import Client2 from '../Main-page/Client2';
import Client3 from '../Main-page/Client3';
import { Icon } from '@iconify/react';
import data from '../OurWorks/data';
import data1 from '../OurWorks/data1';
import { Helmet } from 'react-helmet';


const Figma = () => {

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
                <title>Figma / Adobe XD Services- Best Tools for UI/UX Design</title>
                <meta name="description" content="Grintech Web Agency offers Figma and Adobe XD services for top-tier UI/UX design. Leverage the best tools to create stunning, user-friendly interfaces. " />
                <link rel='canonical' href='/our-services-figma' />
            </Helmet>

            <Header />

            <section className="dev-passion mt-4 mb-1">
                <div className="container d-none d-lg-block py-3">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="passion">
                                <h1>Figma / Adobe XD</h1>
                                <p><b>Figma & Adobe XD Pros On-Demand: Bring Your Designs to Life With Grintech Web Agency:</b></p>
                                <div className=''>
                                Grintech Web Agency provides detailed Figma design services that are customized to meet your particular business requirements. We craft user experience design, interactive prototypes, seamless interfaces, and visually stunning designs that captivate and engage users. 
                                    <h3 className='mt-3'>Why Grintech for Figma and Adobe XD services:</h3>
                                    <ul className='p-0'>
                                        <li className='mb-2'><b>1. Interactive Prototypes:</b> Create dynamic and interactive prototypes.</li>
                                        <li className='mb-2'><b>2. Seamless Interfaces:</b> Design smooth and intuitive user interfaces.</li>
                                        <li className='mb-2'><b>3. Collaborative Design:</b> Work in real-time with team collaboration features.</li>
                                        <li className='mb-2'><b>4. User-Centric Designs:</b> Focus on creating user-friendly and engaging experiences.</li>
                                        <li className='mb-2'><b>5. Responsive Layouts:</b> Design layouts that adapt to different devices and screen sizes.</li>
                                        <li className='mb-2'><b>6. Visual Consistency:</b>Ensure consistent visual elements across your project.</li>
                                        <li className='mb-2'><b>7. Design Systems:</b> Develop comprehensive design systems for scalability.</li>
                                        <li className='mb-2'><b>8. Figma web design.</b>Transform your digital projects with our skilled designers. We craft interactive prototypes, seamless interfaces, and visually stunning designs that captivate and engage users.</li>
                                    </ul>
                                </div>

                                {/* {showMore && (
                                    <div className='moretext'>
                                        <p>On the other hand, Adobe XD is a design and prototyping tool that is part of the Adobe Creative Cloud suite. It integrates seamlessly with other Adobe tools, such as Photoshop and Illustrator, allowing designers to import and export assets between applications. Adobe XD offers robust prototyping features with advanced animations and microinteractions. It also supports plugins, enabling designers to extend its functionality and enhance their workflow. Adobe XD also facilitates the creation of design systems, making it easier to maintain reusable design assets and styles.</p>
                                        <p>Ultimately, the choice between Figma and Adobe XD depends on personal preference, team collaboration needs, and specific project requirements. Both tools have their strengths and are widely used by designers, so it's recommended to try out both and determine which one suits your workflow and preferences better.</p>
                                    </div>
                                )}
                                <Link className="moreless-button" onClick={toggleMoreText}>
                                    {showMore ? 'Read less... ' : 'Read more...'}
                                </Link> */}


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
                                
                                    <h3 className='mt-3'>Why Grintech for Figma and Adobe XD services:</h3>
                                    <ul className='p-0'>
                                    <li className='mb-2'><b>1. Interactive Prototypes:</b> Create dynamic and interactive prototypes.</li>
                                        <li className='mb-2'><b>2. Seamless Interfaces:</b> Design smooth and intuitive user interfaces.</li>
                                        <li className='mb-2'><b>3. Collaborative Design:</b> Work in real-time with team collaboration features.</li>
                                        <li className='mb-2'><b>4. User-Centric Designs:</b> Focus on creating user-friendly and engaging experiences.</li>
                                        <li className='mb-2'><b>5. Responsive Layouts:</b> Design layouts that adapt to different devices and screen sizes.</li>
                                        <li className='mb-2'><b>6. Visual Consistency:</b>Ensure consistent visual elements across your project.</li>
                                        <li className='mb-2'><b>7. Design Systems:</b> Develop comprehensive design systems for scalability.</li>
                                        <li className='mb-2'><b>8. Figma web design.</b>Transform your digital projects with our skilled designers. We craft interactive prototypes, seamless interfaces, and visually stunning designs that captivate and engage users.</li>
                                    </ul>
                                </div>

                                {/* {showMore && (
                                    <div className='moretext'>
                                        <p>On the other hand, Adobe XD is a design and prototyping tool that is part of the Adobe Creative Cloud suite. It integrates seamlessly with other Adobe tools, such as Photoshop and Illustrator, allowing designers to import and export assets between applications. Adobe XD offers robust prototyping features with advanced animations and microinteractions. It also supports plugins, enabling designers to extend its functionality and enhance their workflow. Adobe XD also facilitates the creation of design systems, making it easier to maintain reusable design assets and styles.</p>
                                        <p>Ultimately, the choice between Figma and Adobe XD depends on personal preference, team collaboration needs, and specific project requirements. Both tools have their strengths and are widely used by designers, so it's recommended to try out both and determine which one suits your workflow and preferences better.</p>
                                    </div>
                                )}
                                <Link className="moreless-button" onClick={toggleMoreText}>
                                    {showMore ? 'Read less... ' : 'Read more...'}
                                </Link> */}


                                <div className='d-flex mt-4'>
                                    <a href='tel: 8264420387' className='btn-bt'> <i className="fa-solid fa-phone"></i> (+91) 8264420387 </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 py-5">
                            <h1 className='fw-bold'>Figma / Adobe XD</h1>
                            <p><b>Figma & Adobe XD Pros On-Demand: Bring Your Designs to Life With Grintech Web Agency:</b></p>
                           <p> Grintech Web Agency provides detailed Figma design services that are customized to meet your particular business requirements. We craft user experience design, interactive prototypes, seamless interfaces, and visually stunning designs that captivate and engage users.</p>
                            <Form />
                        </div>
                    </div>
                </div>


            </section>


            <Commonsection name="Figma / Adobe XD " technology="Designing" classname="blueback" />

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

export default Figma
