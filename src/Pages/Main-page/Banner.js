import React, { useState, useRef, useEffect } from "react";
import "./home.css";
import homebanner from "../../assets/images/new-banner.webp";
// import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

import data from "../../Components/country1.json";
import ReCAPTCHA from "react-google-recaptcha";

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';



const Banner = () => {
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
        recaptchaRef.current.reset();

        // Disappear message after 4 seconds
        setTimeout(() => {
          setMessage('');
      }, 4000);

      } else {
        setMessage("Oops! Something went wrong. Please try again.");
        setTimeout(() => {
          setMessage('');
        }, 4000);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Oops! Something went wrong. Please try again.");
      setTimeout(() => {
        setMessage('');
      }, 4000);
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
  //   const sanitizedValue = e.target.value.replace(/\D/g, ""); 
  //   if (sanitizedValue.length <= 14) {
  //     setPhone(sanitizedValue);
  //   }
  // };

  // const handleInvalidphone = (event) => {
  //   event.target.setCustomValidity("Enter valid phone number");
  // };

  // const handleInputphone = (event) => {
  //   event.target.setCustomValidity("");
  // };

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

  const handleInputmessage = (e) => {
    const value = e.target.value;
    if (value.length >= 20) {
      e.target.setCustomValidity("");
    } else {
      e.target.setCustomValidity("Message should be 20 characters long.");
    }
    setMessageError(value);
  };

  // --------------------------SCROLL TO MOUSE--------

  // const sectionRef = useRef(null);
  // const scrollToSection = () => {
  //   // Scroll to the section using its ref
  //   sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  // };

  const scrollToSection = () => {
    const section = document.getElementById("home-our-services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <section
        id="home-banner"
        style={{ backgroundImage: `url(${homebanner})` }}
      >
      
        <div className="row align-items-center">
          <div className=" col-lg-7 col-11 mx-auto">
            <div className="banner-content container-fluid">
              <h1>
                We're not just building
                <span style={{ color: "#23C014" }}> Websites & Apps</span> We're
                building <span style={{ color: "#23C014" }}>Brands</span>
              </h1>

              <p>
                Welcome to our mobile and web app development agency! Grintech
                Web Agency specializes in creating high-quality, user-centric
                digital solutions tailored to meet the unique needs of
                businesses and individuals alike.
              </p>
              <div className="button">
               
                <Link
                  className="start-link"
                  to="https://www.upwork.com/freelancers/~01bb68f80af91ff72f"
                  target="_blank"
                >
                  <button type="button" className="btn start-btn">
                    Hire Us On Upwork
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" col-lg-4 mx-auto mt-4 mt-lg-0">
            <div className="card banner_form_card position-relative me-lg-3 mx-3 mx-lg-0" style={{zIndex:"1"}}>
              <div className="card-body">
                <form ref={form} onSubmit={handleChange} className="px-3 py-3">
                  <div className="d-flex justify-content-between ">
                    <h4 className="text-center mb-3 w-100">
                      
                      <b style={{ fontWeight: "900", color:"black" }}>
                        Let's discuss your
                        <span className="ms-2" style={{ color: "#177a0e" }}>project</span>
                      </b>
                    </h4>
                 
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

                    {/* <div className="phone-input-container mb-3">
                      <select
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
                          
                            {item.dial_code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        placeholder="Phone..."
                        name="phone"
                        id="phone"
                        className="form-control form_custom_input"
                        pattern="[0-9]{9,12}"
                        value={phone}
                        maxLength="14"
                        onChange={handlePhoneChange}
                        onInvalid={handleInvalidphone}
                        onInput={handleInputphone}
                        required
                      />
                    </div> */}

                    <div className="mb-3">
                      <PhoneInput
                        country={'us'}
                        value={phone}
                        enableSearch
                        onChange={(value, country) => {
                          const dialCode = country.dialCode;
                          const numberOnly = value.replace(dialCode, '');
                          const formattedPhone = `+${dialCode}-${numberOnly}`;
                          setPhone(formattedPhone);
                        }}
                        inputProps={{
                          name: 'phone',
                          required: true,
                          placeholder: 'Phone...',
                        }}
                        inputClass="form-control form_custom_input"
                        containerClass="w-100"
                      />
                    </div>



                    <div className="mb-3 col-md-12 col-sm-12">
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

                    <div className=" col-md-12 col-sm-12">
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

                    <div className="col-md-12 col-sm-12 mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        {/* Upload your file (optional) */}
                      </label>
                      <input
                        size="40"
                        className="wpcf7-form-control wpcf7-file wpcf7-validates-as-required form-control"
                        accept=".pdf,.txt,.doc,.docx"
                        aria-required="true"
                        aria-invalid="false"
                        type="file"
                        name="your-resume"
                      />
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

                   {/* Google reCAPTCHA */}
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Lcmhv8qAAAAAAct1lIswDMrZtmrKqTMx_yJO0A2" // Replace with your site key
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
                  {message &&  <p className="mt-2" style={{ fontSize: "14px", color: "rgb(23 122 14)" }}> {message} </p> }
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mouse-effect">
        <p>Explore</p>

        <div type="button" onClick={scrollToSection} className="mouse">
          <div className="roll"></div>
          <div className="rollshadow"></div>
        </div>
      </div>

      {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body modal-body-custom">
              <form action="?" method="POST">
                <div className='d-flex justify-content-between '>
                  <h4 className='text-center mb-3'> <b style={{ fontWeight: "900" }}>Let's Discuss Your <span style={{ color: "#177a0e" }}>Project</span> </b></h4> <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className='row'>
                  <div className="mb-3 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputEmail1" className="form-label">Full Name <span className='star'>*</span></label>
                    <input type="text" name="name2" id="name2" value={userName} onInvalid={handleInvalidname} onInput={handleInputname} className="form-control form_custom_input"  aria-describedby="emailHelp"  required/>
                  </div>

                  <div className="mb-3 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                    <input type="tel" placeholder='Phone...' name="phone" id="phone" className="form-control form_custom_input" pattern="[0-9]{9,12}" onChange={handlePhoneChange} onInvalid={handleInvalidphone} onInput={handleInputphone} aria-describedby="emailHelp" required/>
                  </div>
                  <div className="mb-3 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address <span className='star'>*</span></label>
                    <input type="email" className="form-control"  aria-describedby="emailHelp" name="email" id="email" onInvalid={handleInvalidemail} onInput={handleInputemail} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"/>
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
                  <option value="3">Mobile Application</option>
                  <option value="4">Web Design</option>
                </select>

                <div className="mb-3 mt-4">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message Here</label>
                  <textarea className="form-control"  rows="2" name="message" id="message" value={messageError} onInvalid={handleInvalidmessage} onInput={handleInputmessage} required></textarea>
                </div>

                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChangecaptcha}
                />
               
                <button type="submit" className="btn " disabled={!disabled} style={{ backgroundColor: "#177a0e", color: "white" }}>Submit</button>
              </form>
            </div>

          </div>
        </div>
      </div> */}

      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body modal-body-custom">
              <form ref={form} onSubmit={handleChange}>
                <div className="d-flex justify-content-between ">
                  <h4 className="text-center mb-3">
                    
                    <b style={{ fontWeight: "900" }}>
                      Let's discuss your
                      <span style={{ color: "#177a0e" }}>project</span>
                    </b>
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                {/* {recaptchaError && <p style={{ fontSize: "14px", color: "#ff0000" }}>{recaptchaError}</p>} */}
                {/* {/ Your submit button and success/error message /} */}
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

                  {/* <div className="phone-input-container mb-3">
                    <select
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
                        
                          {item.dial_code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      placeholder="Phone..."
                      name="phone"
                      id="phone"
                      className="form-control form_custom_input"
                      pattern="[0-9]{9,12}"
                      value={phone}
                      maxLength="14"
                      onChange={handlePhoneChange}
                      onInvalid={handleInvalidphone}
                      onInput={handleInputphone}
                      required
                    />
                  </div> */}

                  <div className="mb-3">
                  <PhoneInput
                    country={'us'}
                    value={phone}
                    enableSearch
                    onChange={(value, country) => {
                      const dialCode = country.dialCode;
                      const numberOnly = value.replace(dialCode, '');
                      const formattedPhone = `+${dialCode}-${numberOnly}`;
                      setPhone(formattedPhone);
                    }}
                    inputProps={{
                      name: 'phone',
                      required: true,
                      placeholder: 'Phone...',
                    }}
                    inputClass="form-control form_custom_input"
                    containerClass="w-100"
                  />
                </div>


                  <div className="mb-3 col-md-12 col-sm-12">
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
                      We'll never share your email with anyone else.
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
                      <option value="Website Redesign">Web Development</option>
                      <option value="Development">Mobile Application</option>
                      <option value="SEO/SMM">SEO/SMM</option>
                    </select>
                  </div>

                  <div className="col-md-12 col-sm-12 mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Upload your file (optional)
                    </label>
                    <input
                      size="40"
                      className="wpcf7-form-control wpcf7-file wpcf7-validates-as-required form-control"
                      accept=".pdf,.txt,.doc,.docx"
                      aria-required="true"
                      aria-invalid="false"
                      type="file"
                      name="your-resume"
                    />
                  </div>
                </div>

                <div className="mb-3 mt-4">
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

                <div className="row">
                  <div className="col-md-12 col-sm-12 col-lg-6">
                    <button
                      type="submit"
                      className="btn form_button"
                      style={{ backgroundColor: "#177a0e", color: "white" }}
                    >
                      Get a quote
                    </button>
                  </div>

                  {/* <div className='col-md-12 col-sm-12 col-lg-6'>
                    <a
                      href='https://www.upwork.com/freelancers/~01bb68f80af91ff72f'
                      target='_blank'
                      className="btn form_button"
                      style={{ backgroundColor: "#177a0e", color: "white" }}
                      rel="noreferrer"
                    >
                      Hire us on upwork
                    </a>
                  </div> */}
                </div>
                <p style={{ fontSize: "14px", color: "#014072" }}>
                  
                  {message}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
