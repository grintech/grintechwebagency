import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';
// import ReCaptchaComponent from './ReCaptchaComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<>
    <App />
  {/* <React.StrictMode>
  </React.StrictMode> */}
  
{/* <GoogleReCaptchaProvider reCaptchaKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI">
    <ReCaptchaComponent />
    
  </GoogleReCaptchaProvider> */}

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
