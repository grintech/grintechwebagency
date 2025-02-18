import React from "react";
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
import { useState } from "react";


const WebDevelopment = () => {
  const [sites, setSites] = useState(data);
  const [apps, setApps] = useState(data1);

  return (
    < div className="new_servicepage" >

     <Helmet>
        <meta charSet="utf-8" />
        <title>Web development services near me - Grintech Web Agency</title>
        <meta name="description" content="Looking for web development services near you? Grintech Web Agency offers expert solutions to build stunning, responsive websites that boost your online presence and drive business growth." />
        <link rel='canonical' href='/services/web-development'  />
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
          <p className='small_head'>Web Development</p>
              <h1 className="mb-3">
              Custom Web Development for Your Business!
              </h1>
              <p className="mb-4">We build fast, secure, and scalable <strong>websites Development Services</strong> to your needs. Enhance your online presence with dynamic, user-friendly, and high-performance solutions!
              </p>
              <Link to="/contact" className="">
                <button type="button" class="btn btn-contact">
                 Hire Developer  today! 
                </button>
              </Link>
            </div>
            <div className="col-md-5 offset-md-1 d-flex justify-content-center  align-items-center position-relative">
              <img
                className="w-100 bounce"
                alt="service-hero"
                src="/img/web-development.png"
              ></img>
            </div>
            
          </div>
        </div>
      </section>

       <section className="service-content py-5">
              <div className="container">
                <h2>Our Web Development Offerings</h2>
                <div className="row justify-content-center mt-5">
                  <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="icon_div">
                          <img
                            className=""
                            alt="php"
                            src="/img/php.png"
                          ></img>
                        </div>
                        <h5 className="card-title">Core PHP
                        </h5>
                        <p className="card-text">
                        Fast, flexible, and scalable web solutions tailored to your business needs for a seamless and powerful online presence.
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
                            alt="laravel"
                            src="/img/laravel.png"
                          ></img>
                        </div>
                        <h5 className="card-title">Laravel (9, 10) 
                        </h5>
                        <p className="card-text">
                        Build Robust Web Apps with Laravel 9 & 10! Scalable, secure, and high-performance solutions with clean code and powerful features for seamless development.
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
                            alt="cakephp"
                            src="/img/cakephp1.png"
                          ></img>
                        </div>
                        <h5 className="card-title">Cakephp 
                        </h5>
                        <p className="card-text">
                        Power Your Web Development with CakePHP! Fast, secure, and scalable framework for building robust web applications with simplicity and flexibility.
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
                            alt="yii"
                            src="/img/yii.png"
                          ></img>
                        </div>
                        <h5 className="card-title">Ci, Yii Framework</h5>
                        <p className="card-text">
                        Build Powerful Web Apps with CI & Yii! Fast, secure, and scalable PHP frameworks for developing high-performance, flexible, and feature-rich web applications.
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
                            alt="wordpress"
                            src="/img/wordpress.png"
                          ></img>
                        </div>
                        <h5 className="card-title">Wordpress Development</h5>
                        <p className="card-text">
                        Custom WordPress Development! Build stunning, responsive, and SEO-friendly websites with powerful features to enhance your brand and grow your business effortlessly.
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
                            alt="ecommerce"
                            src="/img/ecommerce.png"
                          ></img>
                        </div>
                        <h5 className="card-title">WooCommerce,eCommerce</h5>
                        <p className="card-text">
                        Boost Sales with WooCommerce & eCommerce Solutions! Create secure, user-friendly, and scalable online stores tailored for seamless shopping experiences.
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
                            alt="shopify"
                            src="/img/shopify.png"
                          ></img>
                        </div>
                        <h5 className="card-title">Shopify</h5>
                        <p className="card-text">
                        Grow Your Online Business with Shopify! Build a secure, scalable, and user-friendly eCommerce store with powerful features for seamless shopping experiences.
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
                            alt="asp"
                            src="/img/asp.png"
                          ></img>
                        </div>
                        <h5 className="card-title">ASP .NET</h5>
                        <p className="card-text">
                        Build Secure & Scalable Web Apps with ASP.NET! Develop high-performance, robust, and dynamic solutions tailored for seamless business growth and efficiency.
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

export default WebDevelopment;
