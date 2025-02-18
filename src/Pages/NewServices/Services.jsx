import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { Link } from "react-router-dom";
import "./newService.css";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet";
import Client2 from "../Main-page/Client2";
import Client3 from "../Main-page/Client3";
import data from "../OurWorks/data";
import data1 from "../OurWorks/data1";
import { Icon } from '@iconify/react';

const Services = () => {
  const [sites, setSites] = useState(data);
  const [apps, setApps] = useState(data1);


  return (
    <div className="new_servicepage">

      <Helmet>
      <meta charSet="utf-8" />
        <title>Grintech Web Agency | Trusted Digital Solutions for Growth </title>
        <meta name="description" content="Grintech Web Agency offers top-notch digital solutions to elevate your business. From web development to SEO, we help you grow online. Contact us today!" />
        <link rel='canonical' href='/services'  />
      </Helmet>

      <Header />
      <WhatsAppWidget
        phoneNumber="8264420387"
        message="Hello, how can I help you?"
        companyName="Grintech Web Agency"
      />

      <section className="new-service-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 order-2 order-md-1 d-flex justify-content-start position-relative">
              <img
                className="w-100"
                alt="service-hero"
                src="/img/service-hero.png"
              ></img>
            </div>
            <div className="col-md-6 order-1 order-md-2 offset-md-1">
              <p className="small_head">Grintech Web agency Best Services</p>
              <h1 className="mb-5">
                Elevate Your Business with Our Trusted Digital Solutions
              </h1>
              <Link to="/contact" className="">
                <button type="button" class="btn btn-contact">
                  Start Growing Your Business Now!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="service-content py-5">
        <div className="container">
          <h2>Creating Products That People Love</h2>
          <div className="row mt-5">
            <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon_div">
                    <img
                      className=""
                      alt="web-design"
                      src="/img/web-design.png"
                    ></img>
                  </div>
                  <h5 className="card-title">Website Designing</h5>
                  <p className="card-text">
                    {" "}
                    Stunning, responsive, and user-friendly website designs to
                    enhance your brand and drive engagement.
                  </p>
                  <Link to="/services/web-designing" className="read_more">
                    {" "}
                    Read more <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon_div">
                    <img
                      className=""
                      alt="mobile-app"
                      src="/img/mobile-app.png"
                    ></img>
                  </div>
                  <h5 className="card-title">Mobile App Development</h5>
                  <p className="card-text">
                    Innovative, user-friendly, and high-performance mobile app
                    designs to enhance user experience and drive engagement.
                  </p>
                  <Link
                    to="/services/mobile-app-development"
                    className="read_more"
                  >
                    {" "}
                    Read more <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon_div">
                    <img
                      className=""
                      alt="web-development"
                      src="/img/web-service.png"
                    ></img>
                  </div>
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">
                    {" "}
                    Custom, secure, and scalable web development solutions to
                    enhance performance, user experience, and business growth.
                  </p>
                  <Link to="/services/web-development" className="read_more">
                    {" "}
                    Read more <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon_div">
                    <img
                      className=""
                      alt="digital-marketing"
                      src="/img/digital-marketing.png"
                    ></img>
                  </div>
                  <h5 className="card-title">Digital Marketing</h5>
                  <p className="card-text">
                    Boost your brand with SEO, PPC, and social media strategies
                    to drive traffic and increase conversions.
                  </p>
                  <Link to="/services/digital-marketing" className="read_more">
                    {" "}
                    Read more <i className="fa-solid fa-arrow-right"></i>
                  </Link>
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

export default Services;
