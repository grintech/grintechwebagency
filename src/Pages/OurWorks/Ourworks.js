import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import "./ourworks.css";
import data from './data';
import { Link } from 'react-router-dom';
import Client from './Client';
import { Icon } from '@iconify/react';
import personsitting from "../../assets/images/removed.png"
import Form from '../Services/Form';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from 'react';
import { Helmet } from 'react-helmet';

const Ourworks = () => {
    const [sites, setSites] = useState(data);
    const [isActive, setIsActive] = useState(false);
    const form = useRef();
    const [message, setMessage] = useState("")
    const [userName, setUserName] = useState('');
    const [messageError, setMessageError] = useState("");
    const [disabled, setDisabled] = useState(false);
    function onChangecaptcha() {
        setDisabled(true);
    }

    const filteredData = (currElem) => {
        const updatedItems = data.filter((currItem) => {
            return (currElem == "all") ? currItem : (currItem.category === currElem || currItem.category2 === currElem);
        }
        )
        setSites(updatedItems)
    }


    // -----------------------------------------------------Phone Validations------------------------------------------------------------------------------------

    const handlePhoneChange = (e) => {
        const sanitizedValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        e.target.value = sanitizedValue;
    };

    const handleInvalidphone = (event) => {
        event.target.setCustomValidity('Enter valid phone number');
    };

    const handleInputphone = (event) => {
        event.target.setCustomValidity('');
    };

    // -------------------------------------------------------Name Validations---------------------------------------------------------------------------------------------

    const handleInvalidname = (event) => {
        event.target.setCustomValidity('Name must be more than 3 characters.');
    };

    const handleInputname = (e) => {
        const value = e.target.value;
        if (value.length >= 3) {
            e.target.setCustomValidity('');
        } else {
            e.target.setCustomValidity('Name must be at least 3 characters long');
        }
        setUserName(value);
    };

    // -------------------------------------------------------Email Validations---------------------------------------------------------------------------------------------

    const handleInvalidemail = (event) => {
        event.target.setCustomValidity('Enter Valid Email Address');
    };

    const handleInputemail = (event) => {
        event.target.setCustomValidity('');
    };

    //-----------------------------------------------------------------------------------------Message Validations-------------------------------------------------------------------------

    const handleInvalidmessage = (event) => {
        event.target.setCustomValidity('Message cannot be left blank');
    };

    const handleInputmessage = (e) => {
        const value = e.target.value;
        if (value.length >= 50) {
            e.target.setCustomValidity('');
        } else {
            e.target.setCustomValidity('Message should be 20 characters long.');
        }
        setMessageError(value);
    };


    return (

        <div>
            <Helmet>
            <meta charSet="utf-8" />
        <title>Our Work- We Let Our Portfolio Do The Talk!</title>
        <meta name="description" content="Our recent projects tell more about our successful implementation of projects and further enhance our credibility among our clients and valued customers." />
        <link rel='canonical' href='/our-works'  />
            </Helmet>


            <Header />
            <WhatsAppWidget phoneNumber="8264420387" message="Hello, how can I help you?" companyName="Grintech Web Agency" />
            <section className="ourwork">
                <div className="container">
                    <div className="row ourwork_main">
                        <div className="col-lg-6 ourwork_main_div1">
                       
                            <h1 >We Let Our Portfolio Do The Talk!</h1>
                            <p >Our recent projects tell more about our successful implementation of projects and further enhance our credibility among our clients and valued customers.</p>
                        </div>
                        <div className="col-lg-6">
                            <Form />
                        </div>
                    </div>
                </div>
            </section>




            <section className="work__tabbing">
                <div className='container'>
                    <div className='row'><h2 className='text-center fw-bold'>Explore Our Portfolio</h2></div>
                    <div className=' work__tabbing_inner'>


                        <button className='btn ' onClick={() => filteredData('all')}>All</button>
                        <button className='btn ' onClick={() => filteredData('e-commerce')}>E-COMMERCE</button>
                        <button className='btn ' onClick={() => filteredData('php')}>PHP</button>
                        <button className='btn ' onClick={() => filteredData('ui/ux')}>UI/UX</button>
                        <button className='btn ' onClick={() => filteredData('shopify')}>SHOPIFY</button>
                        <button className='btn ' onClick={() => filteredData('react')}>REACT</button>
                        <button className='btn ' onClick={() => filteredData('cms')}>CMS</button>
                        <button className='btn ' onClick={() => filteredData('app')}>MOBILE APP</button>
                        <button className='btn '> <Link style={{color:"#014072"}} to="/seowork">SEO</Link></button>
                    </div>
                </div>
            </section>

            <Client sites={sites} />

            <section className='works_consultation'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <h2>Book a Free Consultation</h2>
                            <br />    
                            <p>Our team thrives on new projects and challenges. If you have a project in mind then we’d love to hear from you.</p>
                            <br />  
                            <Link to='/contact' className="btn btn-action" >Book Free Consultation</Link>
                            {/* <button type="button" className="btn btn-action" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Free Consultation</button> */}
                        </div>
                        <div className='col-md-6'>
                            <img src={personsitting} className='img-fluid'></img>
                        </div>
                    </div>
                </div>
         
            </section>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            {/* <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div> */}
                            <div className="modal-body modal-body-custom">
                                <form action="?" method="POST">
                                    <div className='d-flex justify-content-between '>
                                        <h4 className='text-center mb-3'> <b style={{ fontWeight: "900" }}>Let's Discuss Your <span style={{ color: "#177a0e" }}>Project</span> </b></h4> <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <div className='row'>
                                        <div className="mb-3 col-md-6 col-sm-12">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Full Name <span className='star'>*</span></label>
                                            <input type="text" name="name2" id="name2" value={userName} onInvalid={handleInvalidname} onInput={handleInputname} className="form-control form_custom_input" aria-describedby="emailHelp" required />
                                        </div>

                                        <div className="mb-3 col-md-6 col-sm-12">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                                            <input type="tel" placeholder='Phone...' name="phone" id="phone" className="form-control form_custom_input" pattern="[0-9]{9,12}" onChange={handlePhoneChange} onInvalid={handleInvalidphone} onInput={handleInputphone} aria-describedby="emailHelp" required />
                                        </div>
                                        <div className="mb-3 col-md-6 col-sm-12">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address <span className='star'>*</span></label>
                                            <input type="email" className="form-control" aria-describedby="emailHelp" name="email" id="email" onInvalid={handleInvalidemail} onInput={handleInputemail} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>

                                        <div className="mb-3 col-md-6 col-sm-12">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Website URL </label>
                                            <input type="text" className="form-control" id="exampleInputPassword1" />
                                        </div>
                                    </div>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected disabled>How we can help you? </option>
                                        <option value="1">Seo/SMM</option>
                                        <option value="2">Web Development</option>
                                        <option value="3">Web Design</option>
                                    </select>

                                    <div className="mb-3 mt-4">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message Here</label>
                                        <textarea className="form-control" rows="2" name="message" id="message" value={messageError} onInvalid={handleInvalidmessage} onInput={handleInputmessage} required></textarea>
                                    </div>
                                    {/* <ReCAPTCHA
                                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                        onChange={onChangecaptcha}
                                    /> */}

                                    <button type="submit" className="btn " disabled={!disabled} style={{ backgroundColor: "#177a0e", color: "white" }}>Submit</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            <section className=''>
                <div className='container'>
                    <div className='row'>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Ourworks
