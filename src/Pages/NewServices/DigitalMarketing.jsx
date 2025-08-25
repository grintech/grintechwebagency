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
import { Icon } from "@iconify/react";
import personsitting from "../../assets/images/removed.png";
import { useSidebar } from "../../context/SidebarContext";
import SidebarContact from "./SidebarContact";

const DigitalMarketing = () => {
  const [sites, setSites] = useState(data);
  const [apps, setApps] = useState(data1);

  const { setIsOpen } = useSidebar();

  return (
    <div className="new_servicepage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Best Digital Marketing Services | Marketing Agency Near Me
        </title>
        <meta
          name="description"
          content="Get expert digital marketing services to grow your business. From SEO to social media, we help you reach your audience and maximize results."
        />
        <link rel="canonical" href="/services/web-development" />
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
              <p className="small_head">Digital Marketing</p>
              <h1 className="mb-3">
                Maximize Your Reach with Digital Marketing!
              </h1>
              <p className="mb-4">
                Drive traffic, boost engagement, and grow your business with
                expert SEO, PPC, and social media strategies. Get results that
                make an impact!
              </p>
              <Link to="/contact" className="">
                <button type="button" class="btn btn-contact">
                  Hire Developer today!
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
          <p>
            In today's fast-paced digital landscape, establishing a robust
            online presence is essential for business success. At
            <Link to="/" className="fw-bold text-dark">
              Grintech Web Agency
            </Link>
            , we offer comprehensive digital marketing services designed to
            elevate your brand and connect you with your target audience
            effectively. Our expertise spans
            <strong>Search Engine Optimization (SEO)</strong>, enhancing your
            website's visibility to attract organic traffic, and
            <strong>Social Media Marketing</strong>, leveraging platforms like
            Facebook, Instagram, Twitter, and LinkedIn to engage and build your
            brand. We also specialize in
            <strong>Pay-Per-Click (PPC) Advertising</strong>, running targeted
            campaigns on platforms such as Google Ads and social media to
            maximize your reach and return on investment. Partner with
            <strong>Grintech Web Agency</strong> to navigate the complexities of
            the digital world and achieve measurable growth. Our tailored
            strategies are designed to meet your unique business objectives,
            ensuring you stand out in a competitive market.
          </p>
          <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon_div">
                    <img className="" alt="seo" src="/img/seo.png"></img>
                  </div>
                  <h5 className="card-title">SEO / SMM / SMO</h5>
                  <p className="card-text">
                    Boost Your Online Presence with SEO, SMM & SMO! Increase
                    visibility, drive traffic, and engage your audience with
                    expert digital marketing strategies.
                  </p>
                  <Link onClick={() => setIsOpen(true)}>
                    More Details <i className="fa-solid fa-arrow-right"></i>
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
                      alt="pay-per-click"
                      src="/img/pay-per-click.png"
                    ></img>
                  </div>
                  <h5 className="card-title">Pay Per Click</h5>
                  <p className="card-text">
                    Maximize ROI with Pay-Per-Click (PPC) Ads! Drive targeted
                    traffic, increase conversions, and grow your business with
                    data-driven ad campaigns.
                  </p>
                  <Link onClick={() => setIsOpen(true)}>
                    More Details <i className="fa-solid fa-arrow-right"></i>
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
                      alt="market-research"
                      src="/img/market-research.png"
                    ></img>
                  </div>
                  <h5 className="card-title">Market Research</h5>
                  <p className="card-text">
                    Unlock Growth with Market Research! Gain valuable insights,
                    understand trends, and make data-driven decisions to stay
                    ahead of the competition.
                  </p>
                  <Link onClick={() => setIsOpen(true)}>
                    More Details <i className="fa-solid fa-arrow-right"></i>
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
                      alt="branding"
                      src="/img/branding.png"
                    ></img>
                  </div>
                  <h5 className="card-title">Branding </h5>
                  <p className="card-text">
                    Elevate Your Brand Identity! Build trust, boost recognition,
                    and stand out with strategic branding that connects with
                    your audience and drives success.
                  </p>
                  <Link onClick={() => setIsOpen(true)}>
                    More Details <i className="fa-solid fa-arrow-right"></i>
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
                      alt="public-relations"
                      src="/img/pr.png"
                    ></img>
                  </div>
                  <h5 className="card-title">PR/ RM</h5>
                  <p className="card-text">
                    Strengthen Your Reputation with PR & RM! Build trust,
                    enhance brand image, and maintain strong relationships with
                    expert Public Relations & Reputation Management.
                  </p>
                  <Link onClick={() => setIsOpen(true)}>
                    More Details <i className="fa-solid fa-arrow-right"></i>
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
                      alt="content-writing"
                      src="/img/copy-writing.png"
                    ></img>
                  </div>
                  <h5 className="card-title">Content Writing</h5>
                  <p className="card-text">
                    Engage & Inspire with Expert Content Writing! Boost your
                    brand with high-quality, SEO-friendly content that drives
                    traffic, captivates audiences, and enhances engagement.
                  </p>
                  <Link onClick={() => setIsOpen(true)}>
                    More Details <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio pb-5">
        <div className="container">
          <h3>Our Portfolio</h3>
          <h6> Web Development</h6>
          <Client2 sites={sites} />
          <Link to="/our-works" style={{ color: "#014072" }}>
            View all
            <span className="new-get">
              <Icon icon="bi:arrow-right" />
            </span>
          </Link>
          <div className="mt-5">
            <h6> Mobile Development</h6>
            <Client3 apps={apps} />
            <Link to="/our-works" style={{ color: "#014072" }}>
              View all
              <span className="new-get">
                <Icon icon="bi:arrow-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="service_faqs pb-5">
        <div className="container">
          <h3>Frequently Asked Questions</h3>
          <p></p>
          <div className="row">
            <div className="col-lg-12">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is digital marketing?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Digital marketing involves promoting products or services
                      through online channels such as search engines, social
                      media, email, and websites. It aims to connect businesses
                      with their target audiences in the digital space.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What services do digital marketing agencies offer?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Most digital marketing agencies provide services including
                      web design, search engine optimization (SEO), email
                      marketing, pay-per-click (PPC) advertising, and social
                      media marketing. However, offerings can vary between
                      agencies, so it's important to confirm specific services
                      before engaging.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How do I choose the right digital marketing agency for my
                      business?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      When selecting a digital marketing agency, consider their
                      online reputation, demonstrated success with similar
                      businesses, and alignment with your budget. Ensure they
                      are responsive and trustworthy to establish a productive
                      partnership.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How much do digital marketing services cost?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      The cost of digital marketing services varies based on the
                      type of service and project scope. For example, monthly
                      costs can range from $500 to $5,000 for SEO, $300 to
                      $5,000 for email marketing, and $250 to $10,000 for PPC
                      management. Prices differ depending on the agency and
                      specific business needs.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      How long does it take to see results from digital
                      marketing efforts?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      The timeline for seeing results varies depending on the
                      strategies employed. SEO efforts may take several months
                      to show significant improvements, while PPC advertising
                      can yield immediate results. The exact time frame depends
                      on your specific goals and the competitiveness of your
                      industry.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="works_consultation">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Book a Free Consultation</h2>
              <br />
              <p>
                Our team thrives on new projects and challenges. If you have a
                project in mind then we’d love to hear from you.
              </p>
              <br />
              <Link to="/contact" className="btn btn-action">
                Book Free Consultation
              </Link>
            </div>
            <div className="col-md-6">
              <img src={personsitting} className="img-fluid"></img>
            </div>
          </div>
        </div>
      </section>

      <SidebarContact />
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
