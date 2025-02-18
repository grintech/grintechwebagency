import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header.js";
import Footer from "../Footer.js";
import "./registration.css";
import { useState } from "react";

export default function LoginStep8() {

    const [fullname, setFullname] = useState();
    const [dealershipName, setDealershipName] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zipCode, setZipCode] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [alternate_no, setAlternate_no] = useState();
    const [website_url, setWebsite_url] = useState();

    const onChange = (event) =>{
const value1 = event.target.value;
setFullname(value1)
    }


    const onChange2 = (event) =>{
        const value1 = event.target.value;
        setDealershipName(value1)
            }

            const onChange3 = (event) =>{
                const value1 = event.target.value;
                setAddress(value1)
                    }


    return (
        <>
            <Header />
            <section id="registration-form" className="mt-5 mb-5">
                <div className="registration-login">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-8 mx-auto form-section">
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button-new" role="tab" aria-controls="pills-home" aria-selected="true">DEALER'S INFO</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">PAYMENT</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">

                                        <form className="login-form8">
                                            <label htmlFor="formFileLg" className="form-label"></label>
                                            <input className="form-control form-control-lg" id="formFileLg" type="file" />
                                            <div className="name-input-field mt-3">
                                                <label htmlFor="validationCustom01" className="form-label" >FULL NAME<span>*</span></label>
                                                <input type="text" className="form-control" name="full_name" id="validationCustom01" placeholder="DAVID JOHNSON" required onChange={onChange}/>
                                            </div>
                                            <div className="dealership-name mt-3">
                                                <label htmlFor="validationCustom02" className="form-label">DEALERSHIP'S NAME<span>*</span></label>
                                                <input type="text" className="form-control" name="dealership" id="validationCustom02" placeholder="Mercedes-Benz of south Orlando" required onChange={onChange2}/>
                                            </div>
                                            <div className="address-new mt-3">
                                                <label htmlFor="validationCustom03" className="form-label">ADDRESS<span>*</span></label>
                                                <input type="text" className="form-control" id="validationCustom03" name="address" placeholder="4301 Millenia Blvd" required onChange={onChange3}/>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-lg-4">
                                                    <div className="city-names mt-3">
                                                        <label htmlFor="validationCustom02" className="form-label">CITY<span>*</span></label>
                                                        <input type="text" className="form-control" id="validationCustom02" name="city" placeholder="Orlando" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="State-names mt-3">
                                                        <label htmlFor="validationCustom04" className="form-label">STATE</label>
                                                        <select className="form-select" id="validationCustom04" name="state" required>

                                                            <option>Florida</option>
                                                            <option>Alafaya</option>
                                                            <option>Apollo Beach</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="zip-code mt-3">
                                                        <label htmlFor="validationCustom01" className="form-label">ZIP<span>*</span></label>
                                                        <input type="text" className="form-control" id="validationCustom01" name="zip" placeholder="5486785" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="phone-numeber1 mt-3">
                                                        <label htmlFor="validationCustom05" className="form-label">PHONE NUMBER<span>*</span></label>
                                                        <input type="tel" className="form-control" name="phone_number" id="validationCustom05" placeholder="(305)947-9842" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="phone-numeber1 mt-3">
                                                        <label htmlFor="validationCustom06" className="form-label">PHONE NUMBER (option)</label>
                                                        <input type="tel" className="form-control" name="phone_number" id="validationCustom06" placeholder="(305)947-9873" required />
                                                    </div>
                                                </div>
                                                <div className="website-url mt-3">
                                                    <input type="tel" className="form-control" id="validationCustom07" name="website_url" placeholder="Website" required />
                                                </div>
                                                <div className="social-media mt-3">
                                                    <ul className="social-links2">
                                                        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                                        <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                                        <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                                        <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="right-side-button mt-3">
                                                    <Link to="#">CONTINUE</Link>
                                                </div>
                                            </div>
                                        </form>


                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                                        <div className="payment-method">
                                            <h3>PAYMENT</h3>
                                            <div className="payment-section mt-5">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label htmlFor="text" className="form-label debit-card"><i className="bi bi-credit-card-2-front"></i><span>Credit/debit card</span></label>
                                                        <input type="text" className="form-control" id="text" name="card_number" placeholder="card number" />
                                                    </div>
                                                    <div className="col-md-3 mt-4">
                                                        <input type="text" className="form-control" name="date" id="text" placeholder="MM / YY" />
                                                    </div>
                                                    <div className="col-md-3 mt-4  cvc">
                                                        <input type="text" className="form-control cvc2" name="cvc" id="cvc2" placeholder="cvc" />
                                                    </div>
                                                    <div className="payment-imges">
                                                        <ul>
                                                            <li>
                                                                <img src="assets/images/icon/visa.png"></img>
                                                            </li>
                                                            <li>
                                                                <img src="assets/images/icon/master.png"></img>
                                                            </li>
                                                            <li>
                                                                <img src="assets/images/icon/american.png"></img>
                                                            </li>
                                                            <li>
                                                                <img src="assets/images/icon/discover.png"></img>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="billing-section">
                                                        <h4>Billing address</h4>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <input type="text" className="form-control" name="first_name" id="new" placeholder="First name" />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <input type="text" className="form-control" name="last_name" id="new2" placeholder="Last name" />
                                                            </div>
                                                            <div className="col-md-6 mt-2">
                                                                <input type="text" className="form-control" name="address" id="address" placeholder="Address 1" />
                                                            </div>
                                                            <div className="col-md-6 mt-2">
                                                                <input type="text" className="form-control" id="address2" placeholder="Address 2(option)" />
                                                            </div>
                                                            <div className="col-md-5 mt-2">
                                                                <input type="city" className="form-control" id="city" placeholder="city" />
                                                            </div>
                                                            <div className="col-md-3 mt-3">
                                                                <div className="State-names">
                                                                    <select className="form-select" id="validationCustom04" required>
                                                                        <option selected>State</option>
                                                                        <option>Florida</option>
                                                                        <option>Alafaya</option>
                                                                        <option>Apollo Beach</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 mt-2">
                                                                <input type="postalcode" className="form-control" id="postcode" placeholder="Postal code" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="right-side-button mt-5 mb-5">
                                                        <Link to="#">CONTINUE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}