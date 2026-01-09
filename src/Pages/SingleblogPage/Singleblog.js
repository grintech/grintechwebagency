import React, { useState, useEffect, useRef } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sidebar from '../../Components/Sideicons/Sidebar';
import './singleblog.css';
import { useParams } from 'react-router';
// import data from "../../Components/country.json";
import { Helmet } from 'react-helmet';
import ReCAPTCHA from 'react-google-recaptcha';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const Singleblog = () => {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState(null);
  const { slug } = useParams();

  const form = useRef();
  const recaptchaRef = useRef(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [select, setSelect] = useState('');
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://app.grintechwebagency.com/wp-json/our-blogs/v1/blog/${slug}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [slug]);

  if (!posts) {
    // return <div className='text-center pt-4'>Loading...</div>;
    return (
      <div className='loader_div'>
        <span className="loader"></span>
      </div>
    )
  }

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
      const response = await fetch('https://app.grintechwebagency.com/wp-json/grintechReact/v1/form', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setMessage("Thanks for your query, Our Team will Contact you soon.");
        // Clear the form fields
        setUserName('');
        setPhone('');
        setEmail('');
        setSelect('');
        setMessageError('');
        
        form.current.reset(); // Reset the form
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
      console.error('Error:', error);
      setMessage("Oops! Something went wrong. Please try again.");
      setTimeout(() => {
        setMessage('');
      }, 4000);
    }
  };

  

  const removeTags = (tag) => {
    return tag.replace("&#8211;", "-");
  };

  const replaceNbsp = (content) => {
    return content.replace(/&nbsp;/g, '\u00A0');
  };

  return (
    <div>
      
      <Helmet>
        <meta charSet="utf-8" />
        {posts.meta_title && <title>{posts.meta_title}</title>}
        {posts.meta_description && <meta name="description" content={posts.meta_description} />}
        <link rel='canonical' href={`/${slug}`} />
      </Helmet>

      <Header />
      <Sidebar />
      <section className='singleblogback'>
        <h1 className='text-white'>Blogs</h1>
      </section>

      <section className='Single_blog_content'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 col-md-12 col-sm-12 mb-5'>
              <div className='container singleblog'>
                <div className='row'>
                  <div className='col-md-12'>
                    <h2 className=''><b>{removeTags(posts.title)}</b></h2>
                    <div dangerouslySetInnerHTML={{ __html: replaceNbsp(posts.content) }} />
                  </div>
                </div>
              </div>
            </div>

            <div id='stickyForm' className='stickyformcontainer col-lg-5 col-md-12 col-sm-12'>
              <form ref={form} onSubmit={handleChange} id="stickyForm">
                <div className='singleblog_form' >
                  <h3 className='fw-bold mb-3' style={{color:"#014072"}}>Let's discuss your project</h3>
                  <div className='row'>
                    <div className="mb-3 col-md-12 col-sm-12">
                      <input
                        type="text"
                        placeholder='Full name...'
                        name="fullname"
                        id="fullname"
                        value={userName}
                        onInvalid={(event) => event.target.setCustomValidity('Name must be more than 3 characters.')}
                        onInput={(event) => {
                          const value = event.target.value;
                          if (value.length >= 3) {
                            event.target.setCustomValidity('');
                          } else {
                            event.target.setCustomValidity('Name must be at least 3 characters long');
                          }
                          setUserName(value);
                        }}
                        className="form-control form_custom_input"
                        required
                      />
                    </div>

                    {/* <div className="phone-input-container mb-3">
                      <select className='optionSelection' id="country-code" name="countryCode">
                        <option value="+1">+1</option>
                        {data.map((item) => (
                          <option key={`${item.dial_code}-${item.name}`} className='pt-3' value={item.dial_code}>
                            {item.dial_code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        placeholder='Phone...'
                        name="phone"
                        id="phone"
                        className="form-control form_custom_input"
                        pattern="[0-9]{9,12}"
                        value={phone}
                         maxLength="11"
                        onChange={(event) => setPhone(event.target.value.replace(/\D/g, ''))}
                        onInvalid={(event) => event.target.setCustomValidity('Enter valid phone number')}
                        onInput={(event) => event.target.setCustomValidity('')}
                        required
                      />
                    </div> */}

                    <div className="mb-3">
                      <PhoneInput
                        country={'us'}
                        value={phone}
                        enableSearch
                        onChange={(value, country) => {
                          const dialCode = country.dialCode; // 91
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
                        placeholder='Email...'
                        className="form-control form_custom_input"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        onInvalid={(event) => event.target.setCustomValidity('Enter Valid Email Address')}
                        onInput={(event) => event.target.setCustomValidity('')}
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
                        onChange={(event) => setSelect(event.target.value)}
                        required
                      >
                        <option value="" disabled>Looking for...</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Website Redesign">Web Development</option>
                        <option value="Development">Mobile Application</option>
                        <option value="SEO/SMM">SEO/SMM</option>
                      </select>
                    </div>

                    <div className='col-md-12 col-sm-12 mb-3'>
                      <label htmlFor="exampleInputEmail1" className="form-label text-dark"> Upload your file (optional)</label>
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

                    <div className='col-md-12 col-sm-12 mb-3'>
                      <label htmlFor="exampleInputEmail1" className="form-label"> </label>
                      <textarea
                        className="form-control form_custom_input"
                        rows="2"
                        placeholder='Question/Requirement'
                        name="message"
                        id="message"
                        value={messageError}
                        // onInvalid={(event) => event.target.setCustomValidity('Message cannot be left blank')}
                        onInput={(event) => {
                          const value = event.target.value;
                          if (value.length >= 20) {
                            event.target.setCustomValidity('');
                          } else {
                            event.target.setCustomValidity('Message should be 20 characters long.');
                          }
                          setMessageError(value);
                        }}
                        required
                      ></textarea>
                    </div>

                  </div>

                   {/* Google reCAPTCHA */}
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Lcmhv8qAAAAAAct1lIswDMrZtmrKqTMx_yJO0A2" 
                    onChange={handleCaptchaChange}
                  />


                  <div className="mb-3 mt-3">
                    <div className='row'>
                      <div className='col-md-12 col-sm-12 col-lg-6'>
                        <button
                          type="submit"
                          className="btn form_button"
                          style={{ backgroundColor: "#177a0e", color: "white" }}
                        >
                          Get A Quote
                        </button>
                      </div>

                      <div className='col-md-12 col-sm-12 col-lg-6'>
                        <a
                          href='https://www.upwork.com/freelancers/~01bb68f80af91ff72f'
                          target='_blank'
                          className="btn form_button"
                          style={{ backgroundColor: "#177a0e", color: "white" }}
                          rel="noreferrer"
                        >
                          Hire us on upwork
                        </a>
                      </div>
                    </div>

                    {message && <p className='mt-3' style={{ fontSize: "17px", fontWeight:600, color: "#014072" }}>{message}</p> }
                   
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Singleblog;


