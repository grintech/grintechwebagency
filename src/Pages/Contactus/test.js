import { useState, useRef } from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Sidebar from '../../Components/Sideicons/Sidebar'
import "./contact.css";
import { Icon } from '@iconify/react';
import Sliderr from './Sliderr';
import { Link } from 'react-router-dom';
import Socialslide from '../Main-page/Socialslider';
import india from "../../assets/images/Logo/india.png"
import australia from "../../assets/images/Logo/austrailia.png"
import usa from "../../assets/images/Logo/usa.png"
import uk from "../../assets/images/Logo/uk.png"
import ReCAPTCHA from "react-google-recaptcha";
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import data from "../../Components/country.json"

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [select, setSelect] = useState('');
  const [messageError, setMessageError] = useState("");

  const handleChange = async (event) => {
    event.preventDefault();

    const formData = new FormData(form.current);
    const json = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://3.108.0.178/cms/grintechReact/wp-json/grintechReact/v1/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
      });

      if (response.ok) {
        setMessage("Yayy!! Message Sent, Our Team will Contact you soon.");
        // Clear the form fields
        setUserName('');
        setPhone('');
        setEmail('');
        setSelect('');
        setMessageError('');
      } else {
        setMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage("Oops! Something went wrong. Please try again.");
    }
  };

  const handlePhoneChange = (e) => {
    const sanitizedValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setPhone(sanitizedValue);
  };

  const handleInvalidphone = (event) => {
    event.target.setCustomValidity('Enter valid phone number');
  };

  const handleInputphone = (event) => {
    event.target.setCustomValidity('');
  };

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

  const handleInvalidemail = (event) => {
    event.target.setCustomValidity('Enter Valid Email Address');
  };

  const handleInputemail = (event) => {
    event.target.setCustomValidity('');
  };

  const handleInvalidmessage = (event) => {
    event.target.setCustomValidity('Message cannot be left blank');
  };

  const handleInputmessage = (e) => {
    const value = e.target.value;
    if (value.length >= 20) {
      e.target.setCustomValidity('');
    } else {
      e.target.setCustomValidity('Message should be 20 characters long.');
    }
    setMessageError(value);
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <section>
        <div className='container contact__back'>
          <div className='row'>
            <div className='col-lg-8 col-md-12 col-sm-12'>
              <div className='contact___form'>
                <form ref={form} onSubmit={handleChange}>
                  <h1 className='text-center mb-3'> <b style={{ fontWeight: "900" }}>Let's Discuss Your <span style={{ color: "#0078d6" }}>Project</span> </b></h1>
                  <div className='row'>
                    <div className="mb-3 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="First Name"
                        name="fullname"
                        id="fullname"
                        value={userName}
                        onInvalid={handleInvalidname}
                        onInput={handleInputname}
                        required
                      />
                    </div>

                    <div className="mb-3 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Last Name"
                      />
                    </div>
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone <span className='star'>*</span></label>
                    <div className="phone-input-container mb-3">

                      <select
                        id="country-code"
                        className='optionSelection'
                        name="countryCode"
                      >
                        <option value="+1">+1</option>
                        {data.map((item) => (
                          <option
                            key={`${item.dial_code}-${item.name}`}
                            className='pt-3'
                            value={item.dial_code}
                          >
                            {item.dial_code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="form-control form_custom_input"
                        pattern="[0-9]{9,12}"
                        value={phone}
                        onChange={handlePhoneChange}
                        onInvalid={handleInvalidphone}
                        onInput={handleInputphone}
                        aria-describedby="emailHelp"
                        required
                      />
                      <div id="validation-message"></div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Email address"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onInvalid={handleInvalidemail}
                        onInput={handleInputemail}
                        required
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      />
                      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Website URL"
                      />
                    </div>
                  </div>
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                    name="select"
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
                    required
                  >
                    <option selected disabled>Looking For...</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Website Redesign">Web Development</option>
                    <option value="Development">Mobile Application</option>
                    <option value="SEO/SMM">SEO/SMM</option>
                  </select>

                  <div className='col-md-12 col-sm-12 mb-3'>
                 <label htmlFor="exampleInputEmail1" className="form-label">Attachment </label>
                  <input size="40" className="wpcf7-form-control wpcf7-file wpcf7-validates-as-required form-control" accept=".pdf,.txt,.doc,.docx" aria-required="true" aria-invalid="false" type="file" name="your-resume" />
                  </div>

                  <div className="mb-3 mt-4">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Your Message Here"
                      name="message"
                      id="message"
                      value={messageError}
                      onInvalid={handleInvalidmessage}
                      onInput={handleInputmessage}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn contact__button"
                    style={{ backgroundColor: "#177a0e", color: "white" }}
                  >
                    Submit
                  </button>
                  <p style={{ fontSize: "14px", color: "#014072" }}> {message} </p>
                </form>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 col-sm-12'>
              <div className='contact__sidebar'>
                <h2> <b>Hate Filling out Forms?</b></h2>
                <div className='red__line mb-3'></div>
                <h4>
                  Request a Quote
                </h4>
                <p>
                  <Link className='contact__sidebar_Link' to="mailto:info@grintechwebagency.com">info@grintechwebagency.com</Link>
                </p>
                <h4>
                  For Reseller Partner
                </h4>
                <p>
                <Link  to="mailto:info@grintechwebagency.com">
                info@grintechwebagency.com
                  </Link>
                </p>



                <h4>
                  HR Queries
                </h4>
                <p>
                  <Link className='contact__sidebar_Link' to="mailto:hr@grintechwebagency.com">hr@grintechwebagency.com</Link>
                </p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='contact__content'>
              <h2> What do we have for you?</h2>
              <ul>
                <li>Our Business Development Manager will connect with you through the contact details you drop on our website.</li>
                <li>A discussion of the Requirements will be followed by Suggestions on what's Best for your Business.</li>
                <li>Next, we will Commence Executing the Plans and Suggestions prepared previously.
                </li>
              </ul>
              <div className='contact_ceodetail'>
                <span>
                  <i>"The goal of seeing your website on the top of SERPs is what fuels our plans, efforts, and execution."
                  </i>
                  <br /><span>(Founder & CEO)</span>
                </span>
                <br />

                <Link className='contact__sidebar_Link' to="/">https://www.Grintechwebagency.com</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5'>
        <div className='container'>
          <div className='row '>
            <h1 className='text-center'> <b style={{ fontWeight: "900" }}>Let’s Get to <span style={{ color: "#0078d6" }}>'Talkin'</span> </b></h1>
            <div className='blue__line'></div>
          </div>

          <div className='row mt-3 lets_talk'>
            <div className='col-lg-4 col-md-4 col-sm-12 contact__items'>

              <div className='d-flex '>
                <div> <h6>Mail At:</h6>
                <h6 className=''> Services: <Link to="mailto:aarti@grintechwebagency.com">info@grintechwebagency.com</Link></h6>
                <h6> HR: <Link to="mailto:mailto:hr@grintechwebagency.com">: hr@grintechwebagency.com</Link></h6>

                </div>
                </div>
                

            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 contact__items'>

              <p className=''><Icon icon="logos:whatsapp-icon" width="24" height="24" /> <Link to="https://web.whatsapp.com/7888752763">Whatsapp</Link></p>
              <p><Link to="https://www.instagram.com/grintechwebagency/"  target="_blank">
              <img className='insta_img' src='/img/insta.svg' alt='flag' />
              Instagram</Link></p>
              </div>
            <div className='col-lg-4 col-md-4 col-sm-12 contact__items'>
              <p className=''><img src='/img/usa.png' alt='flag' /> <a href="tel:(+1)833232-6622"> (+1) 833232-6622</a></p>
              <p><Icon icon="emojione-v1:flag-for-india" width="24" height="24" /> <a href="tel:+911724643298">(+91) 8264420387</a></p>
            </div>

          
          </div>
        </div>
      </section>

    

      <Footer />

    </div>
  )
}

export default Contact;