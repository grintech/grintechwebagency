import React, { useState, useRef, useEffect } from 'react';
import data from "../../Components/country1.json";
import ReCAPTCHA from 'react-google-recaptcha';

const Form = () => {
  const form = useRef();
  const recaptchaRef = useRef(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [select, setSelect] = useState('');
  const [messageError, setMessageError] = useState("");

  const handleChange = async (event) => {
    event.preventDefault();

    if (!captchaValue) {
      setMessage("Please verify that you are not a robot!");
      return;
    }

    const formData = new FormData(form.current);
    formData.append("g-recaptcha-response", captchaValue);

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

      } else {
        setMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage("Oops! Something went wrong. Please try again.");
    }
  };

    useEffect(() => {
        if (message) {
          const timer = setTimeout(() => {
            setMessage("");
          }, 4000); // Hide message after 4 seconds
    
          return () => clearTimeout(timer); // Cleanup timeout on component unmount
        }
      }, [message]);



  const handlePhoneChange = (e) => {
    const sanitizedValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (sanitizedValue.length <= 11) {
      setPhone(sanitizedValue);
    }
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

  // const handleInvalidmessage = (event) => {
  //   event.target.setCustomValidity('Message cannot be left blank');
  // };

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
    <div className='hover_form'>
      <form ref={form} onSubmit={handleChange} encType="multipart/form-data">
        <div className='row'>
          <div className="mb-3 col-md-12 col-sm-12">
            <input 
              type="text" 
              placeholder='Full name...' 
              name="fullname" 
              id="fullname" 
              value={userName} 
              onInvalid={handleInvalidname} 
              onInput={handleInputname} 
              className="form-control form_custom_input" 
              required 
            />
          </div>

          <div className="phone-input-container mb-3">
            <select 
              className='optionSelection' 
              id="country-code" 
              name="countryCode"
            >
              <option value="+1">+1</option>
              {data.map((item) => (
                <option 
                  key={`${item.dial_code}-${item.name}`} 
                  className='pt-3' 
                  value={item.dial_code}
                >
                  {/* <img src={item.flag} alt='flag' /> */}
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
              onChange={handlePhoneChange} 
              onInvalid={handleInvalidphone} 
              onInput={handleInputphone} 
              required 
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
              <option value="" disabled>Looking for...</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Website Redesign">Web Development</option>
              <option value="Development">Mobile Application</option>
              <option value="SEO/SMM">SEO/SMM</option>
            </select>
          </div>

          <div className='col-md-12 col-sm-12 mb-3'>
            <label htmlFor="your-resume" className="form-label text-dark">Upload your file (optional)</label>
            <input 
              size="40" 
              className="wpcf7-form-control wpcf7-file form-control" 
              accept=".pdf,.txt,.doc,.docx" 
              aria-invalid="false" 
              type="file" 
              name="your-resume" 
              id="your-resume" 
            />
          </div>
        </div>

        <div className="mb-3 mt-4">
          <textarea 
            className="form-control form_custom_input" 
            rows="2" 
            placeholder='Question/Requirement' 
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

        <div className='row mt-2'>
          <div className='col-md-12 col-sm-12 col-lg-6'>
            <button 
              type="submit" 
              className="btn form_button" 
              style={{ backgroundColor: "#177a0e", color: "white" }}
            >
              Get a quote
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
        { message && <p className='mt-3' style={{ fontSize: "14px", color: "#014072" }}> {message} </p> }
        
      </form>
    </div>
  );
};

export default Form;
