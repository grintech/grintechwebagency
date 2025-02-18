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

const DigitalMarketing = () => {
  const [sites, setSites] = useState(data);
  const [apps, setApps] = useState(data1);

  return (
    < div className="new_servicepage" >

      <Helmet>
        <meta charSet="utf-8" />
        <title>Digital Marketing Services - Grow Your Business & Revenue</title>
        <meta name="description" content="Unlock the potential of your business with our expert digital marketing services. From SEO to social media, we help you grow your online presence, increase traffic, and boost revenue." />
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
          <div className="row py-4  ">
          <div className="col-md-6 d-flex flex-column justify-content-center">
          <p className='small_head'>Digital Marketing</p>
              <h1 className="mb-3">
              Maximize Your Reach with Digital Marketing!
              </h1>
              <p className="mb-4">Drive traffic, boost engagement, and grow your business with expert SEO, PPC, and social media strategies. Get results that make an impact!
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
                src="/img/digital-marketing-hero.png"
              ></img>
            </div>
            
          </div>
        </div>
      </section>

       <section className="service-content py-5">
              <div className="container">
                <h2>Our Digital Marketing Offerings</h2>
                <div className="row justify-content-center mt-5">
                  <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="icon_div">
                          <img
                            className=""
                            alt="seo"
                            src="/img/seo.png"
                          ></img>
                        </div>
                        <h5 className="card-title">SEO / SMM / SMO
                        </h5>
                        <p className="card-text">
                        Boost Your Online Presence with SEO, SMM & SMO! Increase visibility, drive traffic, and engage your audience with expert digital marketing strategies.
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
                            alt="pay-per-click"
                            src="/img/pay-per-click.png"
                          ></img>
                        </div>
                        <h5 className="card-title">Pay Per Click 
                        </h5>
                        <p className="card-text">
                        Maximize ROI with Pay-Per-Click (PPC) Ads! Drive targeted traffic, increase conversions, and grow your business with data-driven ad campaigns.
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
                            alt="market-research"
                            src="/img/market-research.png"
                          ></img>
                        </div>
                        <h5 className="card-title">Market Research  
                        </h5>
                        <p className="card-text">
                        Unlock Growth with Market Research! Gain valuable insights, understand trends, and make data-driven decisions to stay ahead of the competition.
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
                            alt="branding"
                            src="/img/branding.png"
                          ></img>
                        </div>
                        <h5 className="card-title">Branding </h5>
                        <p className="card-text">
                        Elevate Your Brand Identity! Build trust, boost recognition, and stand out with strategic branding that connects with your audience and drives success.
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
                            alt="public-relations"
                            src="/img/pr.png"
                          ></img>
                        </div>
                        <h5 className="card-title">PR/ RM</h5>
                        <p className="card-text">
                        Strengthen Your Reputation with PR & RM! Build trust, enhance brand image, and maintain strong relationships with expert Public Relations & Reputation Management.
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
                            alt="content-writing"
                            src="/img/copy-writing.png"
                          ></img>
                        </div>
                        <h5 className="card-title">Content Writing</h5>
                        <p className="card-text">
                        Engage & Inspire with Expert Content Writing! Boost your brand with high-quality, SEO-friendly content that drives traffic, captivates audiences, and enhances engagement.
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

export default DigitalMarketing;
