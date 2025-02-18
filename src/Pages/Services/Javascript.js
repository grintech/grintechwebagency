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


const Javascript = () => {

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
                <title>Expert JavaScript Services. Unleashing the Power of Vue.js</title>
                <meta name="description" content="Grintech Web Agency offers expert JavaScript services to create dynamic, interactive web experiences. Enhance your website with our skilled developers." />
                <link rel='canonical' href='/our-services-javascript' />
            </Helmet>

            <Header />

            <section className="dev-passion mt-4 mb-1">
                <div className="container d-none d-lg-block py-3">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="passion">
                                <h1>VueJS Development Company</h1>
                                <div className=''>
                                    <p> <b>An Expert Vue.js Development Services by Grintech Web Agency</b></p>
                                    <p>Work with a team that understands Vue js inside and outside. At Grintech Web Agency, our developers specialize in leveraging the power of Vue.js, a progressive JavaScript framework, to create dynamic and responsive user interfaces. Vue.js, also known as Vue JavaScript, is renowned for its simplicity and flexibility, making it an ideal choice for modern web applications.</p>

                                    <h3>Key Points about Vue.js:</h3>
                                    <ul className='p-0'>
                                        <li className='mb-2'>
                                            <b>1. Versatile JavaScript Framework:</b> Vue.js builds on standard HTML, CSS, and JavaScript, providing a declarative and component-based programming model.
                                        </li>
                                        <li className='mb-2'>
                                            <b>2. High Performance:</b>Vue.js ensures high performance with its reactive, compiler-optimized rendering system.
                                        </li>

                                        <li className='mb-2'>
                                            <b>3. Incrementally Adoptable:</b> It can be used for enhancing static HTML or building full-featured single-page applications (SPAs).
                                        </li>
                                    </ul>
                                </div>

                                {showMore && (
                                    <div className='moretext'>
                                      <h3>Expertise of Grintech Web Agency:</h3>
                                      <li className='mb-2'>
                                            <b>1. Comprehensive UI Framework:</b> Create visually appealing and user-friendly interfaces using Vue.js.
                                        </li>
                                      <li className='mb-2'>
                                            <b>2. Custom Solutions: </b> Tailored Vue.js solutions to meet specific client needs, from simple enhancements to complex applications.
                                        </li>
                                      <li className='mb-2'>
                                            <b>3. Seamless Integration:</b> Integration of Vue.js with other technologies and frameworks for a cohesive development process.
                                        </li>
                                      <li className='mb-2'>
                                            <b>4. Experienced Developers:</b> Extensive experience in using Vue.js and other JavaScript frameworks to deliver high-quality web applications.
                                        </li>
                                      <li className='mb-2'>
                                            <b>5. Client-Centric Approach:</b>Prioritising client requirements and working closely to exceed expectations.
                                        </li>
                                      <li className='mb-2'>
                                            <b>6. Cutting-Edge Technology: </b> Staying updated with the latest trends and advancements in Vue.js and other UI frameworks.
                                        </li>
                                        <p>Choose Grintech Web Agency for your next project and experience the benefits of working with experts in Vue.js development. </p>
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
                                <p>Work with a team that understands Vue js inside and outside. At Grintech Web Agency, our developers specialize in leveraging the power of Vue.js, a progressive JavaScript framework, to create dynamic and responsive user interfaces. Vue.js, also known as Vue JavaScript, is renowned for its simplicity and flexibility, making it an ideal choice for modern web applications.</p>

                                <h3>Key Points about Vue.js:</h3>
                                <ul className='p-0'>
                                    <li className='mb-2'>
                                        <b>1. Versatile JavaScript Framework:</b> Vue.js builds on standard HTML, CSS, and JavaScript, providing a declarative and component-based programming model.
                                    </li>
                                    <li className='mb-2'>
                                        <b>2. High Performance:</b>Vue.js ensures high performance with its reactive, compiler-optimized rendering system.
                                    </li>

                                    <li className='mb-2'>
                                        <b>3. Incrementally Adoptable:</b> It can be used for enhancing static HTML or building full-featured single-page applications (SPAs).
                                    </li>
                                </ul>
                                </div>

                                {showMore && (
                                     <div className='moretext'>
                                     <h3>Expertise of Grintech Web Agency:</h3>
                                     <li className='mb-2'>
                                           <b>1. Comprehensive UI Framework:</b> Create visually appealing and user-friendly interfaces using Vue.js.
                                       </li>
                                     <li className='mb-2'>
                                           <b>2. Custom Solutions: </b> Tailored Vue.js solutions to meet specific client needs, from simple enhancements to complex applications.
                                       </li>
                                     <li className='mb-2'>
                                           <b>3. Seamless Integration:</b> Integration of Vue.js with other technologies and frameworks for a cohesive development process.
                                       </li>
                                     <li className='mb-2'>
                                           <b>4. Experienced Developers:</b> Extensive experience in using Vue.js and other JavaScript frameworks to deliver high-quality web applications.
                                       </li>
                                     <li className='mb-2'>
                                           <b>5. Client-Centric Approach:</b>Prioritising client requirements and working closely to exceed expectations.
                                       </li>
                                      <li className='mb-2'>
                                           <b>6. Cutting-Edge Technology:</b> Staying updated with the latest trends and advancements in Vue.js and other UI frameworks.
                                       </li>
                                       <p>Choose Grintech Web Agency for your next project and experience the benefits of working with experts in Vue.js development.</p>
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
                            <h1 className='fw-bold'>VueJS Development Company</h1>
                            <p> <b>An Expert Vue.js Development Services by Grintech Web Agency</b></p>
                            <Form />
                        </div>
                    </div>
                </div>
            </section>


            <Commonsection name=" VUE JS" technology="Development" classname="blueback" />

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

export default Javascript
