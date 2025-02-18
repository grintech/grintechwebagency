import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { Link } from 'react-router-dom';
import "./newService.css";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet";
import Client2 from "../Main-page/Client2";
import Client3 from "../Main-page/Client3";
import data from "../OurWorks/data";
import data1 from "../OurWorks/data1";
import { Icon } from '@iconify/react';

const MobileAppDevelopment = () => {
  const [sites, setSites] = useState(data);
  const [apps, setApps] = useState(data1);

  return (
    < div className="new_servicepage" >

     <Helmet>
      <meta charSet="utf-8" />
        <title>Expert Mobile App Development - Service First, Pay Later</title>
        <meta name="description" content="Get expert mobile app development services with the option to pay later. We deliver high-quality, custom apps tailored to your business needs, ensuring success and growth." />
        <link rel='canonical' href='/services/mobile-app-development'  />
      </Helmet>

      <Header />
      <WhatsAppWidget
        phoneNumber="8264420387"
        message="Hello, how can I help you?"
        companyName="Grintech Web Agency"
      />

      <section className="new-service-hero">
        <div className="container">
          <div className="row py-4">
          <div className="col-md-6 d-flex flex-column justify-content-center">
          <p className='small_head'>Mobile App Development</p>
              <h1 className="mb-3">
              Transform Your Ideas into Powerful Mobile Apps!
              </h1>
              <p className="mb-4">We design and develop high-performance, user-friendly <strong>mobile apps</strong> tailored to your business needs. From iOS to Android, our solutions ensure seamless functionality, stunning UI/UX, and a top-notch user experience. Elevate your brand with cutting-edge mobile technology—let’s build something amazing!</p>
              <Link to="/contact" className="">
                <button type="button" class="btn btn-contact">
                 Hire Developer  today! 
                </button>
              </Link>
            </div>
            <div className="col-md-5 offset-md-1 d-flex justify-content-center align-items-center position-relative">
              <img
                className="w-100 bounce"
                alt="service-hero"
                src="/img/mobile-app-dev.png"
              ></img>
            </div>
            
          </div>
        </div>
      </section>

       <section className="service-content py-5">
              <div className="container">
                <h2>Our App Development Offerings</h2>
                <div className="row justify-content-center mt-5">
                  <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="icon_div">
                          <img
                            className=""
                            alt="android"
                            src="/img/android.png"
                          ></img>
                        </div>
                        <h5 className="card-title">Android App
                        </h5>
                        <p className="card-text">
                        Scalable, user-friendly, and feature-rich mobile solutions tailored to enhance engagement and drive business growth.
                        </p>
                         <Link to='/contact' className=""><img className="right-arrow" src="/img/right-arrow.png" alt="" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="icon_div">
                          <img
                            className=""
                            alt="ios"
                            src="/img/ios.png"
                          ></img>
                        </div>
                        <h5 className="card-title">IOS App
                        </h5>
                        <p className="card-text">
                        Sleek, secure, and high-performance mobile solutions designed to deliver seamless user experiences and drive business success.
                        </p>
                         <Link to='/contact' className=""><img className="right-arrow" src="/img/right-arrow.png" alt="" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="icon_div">
                          <img
                            className=""
                            alt="hybrid"
                            src="/img/hybrid.png"
                          ></img>
                        </div>
                        <h5 className="card-title">Hybrid App
                        </h5>
                        <p className="card-text">
                        Reach both iOS & Android users with fast, responsive, and cost-effective mobile solutions for a seamless user experience.
                        </p>
                         <Link to='/contact' className=""><img className="right-arrow" src="/img/right-arrow.png" alt="" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="icon_div">
                          <img
                            className=""
                            alt="flutter"
                            src="/img/flutter.png"
                          ></img>
                        </div>
                        <h5 className="card-title">Flutter</h5>
                        <p className="card-text">
                        Create fast, beautiful, and cross-platform mobile apps with a single codebase for seamless performance on iOS & Android.
                        </p>
                         <Link to='/contact' className=""><img className="right-arrow" src="/img/right-arrow.png" alt="" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="icon_div">
                          <img
                            className=""
                            alt="react-native"
                            src="/img/react.png"
                          ></img>
                        </div>
                        <h5 className="card-title">React Native</h5>
                        <p className="card-text">
                        Build fast, scalable, and cross-platform apps with a seamless user experience on both iOS and Android.
                        </p>
                         <Link to='/contact' className=""><img className="right-arrow" src="/img/right-arrow.png" alt="" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="icon_div">
                          <img
                            className=""
                            alt="kotlin"
                            src="/img/kotlin.png"
                          ></img>
                        </div>
                        <h5 className="card-title">Kotlin</h5>
                        <p className="card-text">
                        Fast, secure, and scalable mobile solutions designed for seamless performance and a great user experience.
                        </p>
                         <Link to='/contact' className=""><img className="right-arrow" src="/img/right-arrow.png" alt="" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="icon_div">
                          <img
                            className=""
                            alt="ionic"
                            src="/img/ionic.png"
                          ></img>
                        </div>
                        <h5 className="card-title">Ionic </h5>
                        <p className="card-text">
                        Fast, flexible, and feature-rich mobile solutions for seamless performance on iOS, Android, and the web.
                        </p>
                         <Link to='/contact' className=""><img className="right-arrow" src="/img/right-arrow.png" alt="" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="icon_div">
                          <img
                            className=""
                            alt="swift"
                            src="/img/swift.png"
                          ></img>
                        </div>
                        <h5 className="card-title">Swift</h5>
                        <p className="card-text">
                        Fast, secure, and scalable applications designed for seamless user experiences on Apple devices.
                        </p>
                         <Link to='/contact' className=""><img className="right-arrow" src="/img/right-arrow.png" alt="" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </section>

        <section className='portfolio pb-5'>
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


        <Footer />
        
    </div>
  );
};

export default MobileAppDevelopment;
