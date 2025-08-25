import React from "react";
import Header from "../../Components/Header/Header";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { Link } from "react-router-dom";
import "./newService.css";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet";
import Client2 from "../Main-page/Client2";
import data from "../OurWorks/data";
import data1 from "../OurWorks/data1";
import { Icon } from "@iconify/react";
import { useState } from "react";
import personsitting from "../../assets/images/removed.png";
import { useSidebar } from "../../context/SidebarContext";
import SidebarContact from "./SidebarContact";

const WebDevelopment = () => {
  const [sites, setSites] = useState(data);
  const [apps, setApps] = useState(data1);
  const { setIsOpen } = useSidebar();

  return (
    <div className="new_servicepage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Custom Web Development Services | Grin Tech Web Agency</title>
        <meta
          name="description"
          content="Boost your business with Grin Tech's custom web development! Stunning, high-performance websites tailored to your needs. Get started today!"
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
          <div className="row py-4">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <p className="small_head">Web Development</p>
              <h1 className="mb-3">
                Custom Web Development for Your Business!
              </h1>
              <p className="mb-4">
                We build fast, secure, and scalable
                <strong>websites Development Services</strong> to your needs.
                Enhance your online presence with dynamic, user-friendly, and
                high-performance solutions!
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
                src="/img/web-development.png"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section className="service-content py-5">
        <div className="container">
          <h2>Our Web Development Offerings</h2>
          <p>
            At
            <Link to="/" className="fw-bold text-dark">
              Grintech Web Agency
            </Link>
            , we bring your digital vision to life with high-performance,
            scalable, and visually stunning websites tailored to your unique
            business needs. Whether you're looking for a custom-built website, a
            dynamic e-commerce platform, or a seamless content management
            system, our expert developers deliver solutions that engage users,
            boost conversions, and drive business growth.
            <strong>Services we offered</strong>
          </p>
          <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon_div">
                    <img className="" alt="php" src="/img/php.png"></img>
                  </div>
                  <h5 className="card-title">Core PHP</h5>
                  <p className="card-text">
                    Fast, flexible, and scalable web solutions tailored to your
                    business needs for a seamless and powerful online presence.
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
                      alt="laravel"
                      src="/img/laravel.png"
                    ></img>
                  </div>
                  <h5 className="card-title">Laravel (9, 10)</h5>
                  <p className="card-text">
                    Build Robust Web Apps with Laravel 9 & 10! Scalable, secure,
                    and high-performance solutions with clean code and powerful
                    features for seamless development.
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
                      alt="cakephp"
                      src="/img/cakephp1.png"
                    ></img>
                  </div>
                  <h5 className="card-title">Cakephp</h5>
                  <p className="card-text">
                    Power Your Web Development with CakePHP! Fast, secure, and
                    scalable framework for building robust web applications with
                    simplicity and flexibility.
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
                    <img className="" alt="yii" src="/img/yii.png"></img>
                  </div>
                  <h5 className="card-title">Ci, Yii Framework</h5>
                  <p className="card-text">
                    Build Powerful Web Apps with CI & Yii! Fast, secure, and
                    scalable PHP frameworks for developing high-performance,
                    flexible, and feature-rich web applications.
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
                      alt="wordpress"
                      src="/img/wordpress.png"
                    ></img>
                  </div>
                  <h5 className="card-title">Wordpress Development</h5>
                  <p className="card-text">
                    Custom WordPress Development! Build stunning, responsive,
                    and SEO-friendly websites with powerful features to enhance
                    your brand and grow your business effortlessly.
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
                      alt="ecommerce"
                      src="/img/ecommerce.png"
                    ></img>
                  </div>
                  <h5 className="card-title">WooCommerce,eCommerce</h5>
                  <p className="card-text">
                    Boost Sales with WooCommerce & eCommerce Solutions! Create
                    secure, user-friendly, and scalable online stores tailored
                    for seamless shopping experiences.
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
                      alt="shopify"
                      src="/img/shopify.png"
                    ></img>
                  </div>
                  <h5 className="card-title">Shopify</h5>
                  <p className="card-text">
                    Grow Your Online Business with Shopify! Build a secure,
                    scalable, and user-friendly eCommerce store with powerful
                    features for seamless shopping experiences.
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
                    <img className="" alt="asp" src="/img/asp.png"></img>
                  </div>
                  <h5 className="card-title">ASP .NET</h5>
                  <p className="card-text">
                    Build Secure & Scalable Web Apps with ASP.NET! Develop
                    high-performance, robust, and dynamic solutions tailored for
                    seamless business growth and efficiency.
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
                      How long does it take to build a website?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      The timeline for building a website varies depending on
                      its complexity and specific requirements. On average, a
                      standard website may take 4-6 weeks, while more complex
                      projects like e-commerce platforms could take 8-12 weeks.
                      It's essential to discuss your specific needs with the
                      development team to get an accurate timeline.
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
                      Will my website be mobile-friendly?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes, ensuring that your website is mobile-friendly is
                      crucial. A responsive design allows your site to adapt
                      seamlessly to various devices, including smartphones and
                      tablets, providing an optimal user experience across all
                      platforms.
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
                      Can I update the website myself once it's built?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Absolutely. Websites are often built with Content
                      Management Systems (CMS) like WordPress, allowing you to
                      manage and update your site's content without needing
                      technical expertise. Additionally, maintenance services
                      can be provided for ongoing updates and enhancements.
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
                      How much does a new website cost?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      The cost of a new website depends on various factors,
                      including design complexity, functionality requirements,
                      and the platform used. It's best to discuss your specific
                      needs with the web development team to receive a tailored
                      quote.
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
                      Do you provide ongoing maintenance and support?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes, ongoing maintenance and support are essential to
                      ensure your website remains secure, up-to-date, and
                      performs optimally. Services may include regular updates,
                      security monitoring, and content management assistance.
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

export default WebDevelopment;
