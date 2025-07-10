import React, { useEffect,useState, useRef } from "react";
import './footer.css';
import footerbg from '../../assets/images/footer-banner.webp';
import flogo from "../../assets/images/mainlogowhite1.png";
import { Icon } from '@iconify/react';
import $ from "jquery";
import { Link } from "react-router-dom";

import data from "../../Components/country1.json";
import ReCAPTCHA from "react-google-recaptcha";


const Footer = () => {

    const form = useRef();
    const recaptchaRef = useRef(null);
    const [captchaValue, setCaptchaValue] = useState(null);
    const handleCaptchaChange = (value) => {
      setCaptchaValue(value);
    };

    const [message, setMessage] = useState("");
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [select, setSelect] = useState("");
    const [messageError, setMessageError] = useState("");
  
    const handleChange = async (event) => {
      event.preventDefault();

      if (!captchaValue) {
        setMessage("Please verify that you are not a robot!");
        return;
      }
  
      const formData = new FormData(form.current);
      formData.append("g-recaptcha-response", captchaValue);

      const json = Object.fromEntries(formData.entries());
  
      try {
        const response = await fetch(
          "https://app.grintechwebagency.com/wp-json/grintechReact/v1/form",
          {
            method: "POST",
            body: formData,
          }
        );
  
        if (response.ok) {
          setMessage("Thanks for your query, Our Team will Contact you soon.");
          // Clear the form fields
          setUserName("");
          setPhone("");
          setEmail("");
          setSelect("");
          setMessageError("");
          form.current.reset(); // Reset the form fields
          recaptchaRef.current.reset(); // Reset recaptcha
        } else {
          setMessage("Oops! Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        setMessage("Oops! Something went wrong. Please try again.");
      }
    };

    useEffect(() => {
      if (message) {
        const timer = setTimeout(() => {
          setMessage("");
        }, 4000); 
  
        return () => clearTimeout(timer); 
      }
    }, [message]);
  
    // const handlePhoneChange = (e) => {
    //   const sanitizedValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    //   setPhone(sanitizedValue);
    // };
    const handlePhoneChange = (e) => {
      const sanitizedValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
      if (sanitizedValue.length <= 11) {
        setPhone(sanitizedValue);
      }
    };
  
    const handleInvalidphone = (event) => {
      event.target.setCustomValidity("Enter valid phone number");
    };
  
    const handleInputphone = (event) => {
      event.target.setCustomValidity("");
    };
  
    const handleInvalidname = (event) => {
      event.target.setCustomValidity("Name must be more than 3 characters.");
    };
  
    const handleInputname = (e) => {
      const value = e.target.value;
      if (value.length >= 3) {
        e.target.setCustomValidity("");
      } else {
        e.target.setCustomValidity("Name must be at least 3 characters long");
      }
      setUserName(value);
    };
  
    const handleInvalidemail = (event) => {
      event.target.setCustomValidity("Enter Valid Email Address");
    };
  
    const handleInputemail = (event) => {
      event.target.setCustomValidity("");
    };
  
    // const handleInvalidmessage = (event) => {
    //   event.target.setCustomValidity('Message cannot be left blank');
    // };
  
    const handleInputmessage = (e) => {
      const value = e.target.value;
      if (value.length >= 20) {
        e.target.setCustomValidity("");
      } else {
        e.target.setCustomValidity("Message should be 20 characters long.");
      }
      setMessageError(value);
    };

    useEffect(()=>{
        $('.counting').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
          
              duration: 3000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
             
              }
          
            });  
            
          
          });

          $(".circle_percent").each(function() {
            var $this = $(this),
                $dataV = $this.data("percent"),
                $dataDeg = $dataV * 3.6,
                $round = $this.find(".round_per");
            $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
            $this.append('<div className="circle_inbox"><span className="percent_text"></span></div>');
            $this.prop('Counter', 0).animate({Counter: $dataV},
            {
                duration: 2000, 
                easing: 'swing', 
                step: function (now) {
                    $this.find(".percent_text").text(Math.ceil(now)+"%");
                }
            });
            if($dataV >= 51){
                $round.css("transform", "rotate(" + 360 + "deg)");
                setTimeout(function(){
                    $this.addClass("percent_more");
                },1000);
                setTimeout(function(){
                    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
                },1000);
            } 
        });
    })

    return (
    <>
      <section className="footer pt-5 pb-4" style={{backgroundImage: `url(${footerbg})` }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6 order-1">
                    <Link className="navbar-brand fw-bold" to="#">
                        <img src={flogo} className=" main_logo img-fluid" alt="footer logo"/>
                    </Link>
                    <div className="footer-links">
                        <ul className="d-flex flex-column p-0 pt-3">
                            <li className="mb-2"><Link to="/">Home</Link></li>
                            <li className="mb-2"><Link to="/about">About us</Link></li>
                            <li className="mb-2"><Link to="/our-works">Our Works</Link></li>
                            <li className="mb-2"><Link to="/gallery">Gallery</Link></li>
                            <li className="mb-2"><Link to="/blogs">Blogs</Link></li>
                            <li className="mb-2"><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 order-3 d-none d-md-block">
                <form ref={form} onSubmit={handleChange} className="px-3 py-3">
                  <div className="d-flex justify-content-between ">
                    <h5 className=" mb-3 w-100">
                      
                      <b style={{ fontWeight: "900", color:"white" }}>
                        Let's us know more about
                        <span className="ms-2" style={{ color: "#177a0e" }}>you!</span>
                      </b>
                    </h5>
                 
                  </div>

                  <div className="row">
                    <div className="mb-3 col-md-12 col-sm-12">
                      <input
                        type="text"
                        placeholder="Full name..."
                        name="fullname"
                        id="fullname"
                        value={userName}
                        onInvalid={handleInvalidname}
                        onInput={handleInputname}
                        className="form-control form_custom_input"
                        required
                      />
                    </div>

                    <div className="phone-input-container col-md-6 mb-3">
                      {/* <select
                        className="optionSelection"
                        id="country-code"
                        name="countryCode"
                      >
                        <option value="+1">+1</option>
                        {data.map((item) => (
                          <option
                            key={`${item.dial_code}-${item.name}`}
                            className="pt-3"
                            value={item.dial_code}
                          >
                            <img src={item.flag} alt="flag" />
                            {item.dial_code}
                          </option>
                        ))}
                      </select> */}
                      <input
                        type="tel"
                        placeholder="Phone..."
                        name="phone"
                        id="phone"
                        className="form-control form_custom_input"
                        pattern="[0-9]{9,12}"
                        value={phone}
                        maxLength="11"
                        onChange={handlePhoneChange}
                        onInvalid={handleInvalidphone}
                        onInput={handleInputphone}
                        required
                      />
                    </div>

                    <div className="mb-3 col-md-6 col-sm-12">
                      <input
                        type="email"
                        placeholder="Email..."
                        className="form-control form_custom_input"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onInvalid={handleInvalidemail}
                        onInput={handleInputemail}
                        required
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      />
                      <div id="emailHelp" className="form-text">
                        {/* We'll never share your email with anyone else. */}
                      </div>
                    </div>

                    <div className="mb-3 col-md-12 col-sm-12">
                      <select
                        className="form-select example2"
                        id="select"
                        name="select"
                        value={select}
                        onChange={(e) => setSelect(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Looking for...
                        </option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Website Redesign">
                          Web Development
                        </option>
                        <option value="Development">Mobile Application</option>
                        <option value="SEO/SMM">SEO/SMM</option>
                      </select>
                    </div>

                  
                  </div>

                  <div className="mb-3 mt-2">
                    <textarea
                      className="form-control form_custom_input"
                      rows="2"
                      placeholder="Question/Requirement"
                      name="message"
                      id="message"
                      value={messageError}
                      // onInvalid={handleInvalidmessage}
                      onInput={handleInputmessage}
                      required
                    ></textarea>
                  </div>

                  <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lcmhv8qAAAAAAct1lIswDMrZtmrKqTMx_yJO0A2" // site key
                  onChange={handleCaptchaChange}
                />

                  <div className="row mt-2">
                    <div className="col-md-12 col-sm-12 col-lg-6">
                      <button
                        type="submit"
                        className="btn form_button"
                        style={{ backgroundColor: "#177a0e", color: "white" }}
                      >
                        Get a quote
                      </button>
                    </div>
                  </div>
                  {message &&  <p style={{ fontSize: "14px", color: "#fff" }}> {message}</p>  }
                  
                </form>
                </div>
                <div className="col-lg-3 col-sm-6 order-2 text-start">
                 <h5 className="m-0 py-3 text-white fw-bold"> <span className="ms-2" style={{ color: "#177a0e" }}>Contact</span> Information</h5>
                <div className=" address-bar pt-0">
                <div className="mb-3 d-flex align-items-center">
                    <span className="ficon"><Icon icon="material-symbols:location-on-outline-rounded" width="30" /></span>
                    <span>905/B1, 9th Floor, Bestech Business Tower Sector-66</span>

                </div>
                <div className="mb-3 d-flex align-items-center">
                    <span className="ficon"><Icon icon="material-symbols:phone-in-talk" width="30" /></span>
                    <span><a href="tel:+919418960274">+91 9418960274</a></span>
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <span className="ficon"><Icon icon="ph:envelope-simple" width="30" /></span>
                    <span><Link to="mailto:info@grintechwebagency.com">info@grintechwebagency.com</Link></span>
                </div>
                <div >
                    <ul className="f-links ">
                        {/* <li><Link to="https://www.facebook.com/grintechwebagency1/" target="_blank"><Icon icon="typcn:social-facebook" width="25" /></Link></li> */}
                        <li><Link to="https://www.facebook.com/grintechwebagency1/" target="_blank"><Icon icon="typcn:social-facebook" width="25" /></Link></li>
                        <li><Link to="https://in.linkedin.com/company/grin-tech-web-agency" target="_blank"><Icon icon="typcn:social-linkedin" width="25" /></Link></li>
                        <li><Link to="https://www.instagram.com/grintechwebagency/" target="_blank"><Icon icon="typcn:social-instagram" width="25" /></Link></li>
                        <li><Link to="https://www.youtube.com/@GrintechWebAgency/featured" target="_blank"><Icon icon="typcn:social-youtube" width="25" /></Link></li>
                        <li><Link to="https://x.com/GrintechA" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link></li>
                        <li><Link to="https://in.pinterest.com/grintechwebagency/" target="_blank"><Icon icon="typcn:social-pinterest" width="25" /></Link></li>
                    </ul>
                </div>
            </div>
                </div>
                
            </div>
         
        </div>
      </section>

      <section className="footer-bottom">
        <div className="container">
            <div className="row">
                <p>© GRINTECH WEB AGENCY 2025. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
      </section>
    </>
    )
}

export default Footer
