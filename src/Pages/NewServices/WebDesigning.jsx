import React, { useState } from "react";
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
import personsitting from "../../assets/images/removed.png";
import SidebarContact from "./SidebarContact";
import { useSidebar } from "../../context/SidebarContext";

const WebDesigning = () => {
  const [sites, setSites] = useState(data);
  const [apps, setApps] = useState(data1);
  const { setIsOpen } = useSidebar();

  return (
    <div className="new_servicepage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Expert Website Design Services | Grin Tech Web Agency</title>
        <meta
          name="description"
          content="Get a stunning, high-converting website with Grin Tech Web Agency! Expert design, SEO-friendly, and fully responsive. Elevate your brand today!"
        />
        <link rel="canonical" href="/services/web-designing" />
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
            <div className="col-md-6 d-flex flex-column justify-content-center ">
              <p className="small_head">Web Designing</p>
              <h1 className="mb-3">
                Boost Your Online Presence with Expert Website Design!
              </h1>
              <p className="mb-4">
                We create visually stunning, user-friendly, and responsive
                <strong>website Design Services</strong> to your business needs.
                Elevate your brand, engage customers, and drive conversions with
                our cutting-edge web design solutions.
              </p>
              <Link to="/contact">
                <button type="button" className="btn btn-contact">
                  Hire Developer today!
                </button>
              </Link>
            </div>
            <div className="col-md-5 offset-md-1 d-flex justify-content-center  align-items-center position-relative">
              <img
                className="w-100 bounce"
                alt="service-hero"
                src="/img/web_design.png"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section className="service-content py-5">
        <div className="container">
          <h2>Our Design Offerings</h2>
          <p>
            At
            <Link to="/" className="fw-bold text-dark">
              Grintech Web Agency
            </Link>
            , we specialize in crafting visually appealing and user-friendly
            websites that leave a lasting impression. Our team of skilled
            designers and developers collaborates closely with clients to
            transform their brand into a compelling digital presence. We offer
            custom web design solutions tailored to meet the unique needs of
            businesses and individuals, ensuring each website is both attractive
            and functional. With over a decade of experience, we are committed
            to delivering
            <Link to="/services" className="fw-bold text-dark">
              top-notch Web Design
            </Link>
            services that help our clients thrive in the digital landscape.
          </p>

          <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon_div">
                    <img alt="web-design" src="/img/web-design.png"></img>
                  </div>
                  <h5 className="card-title">UI/UX Design</h5>
                  <p className="card-text">
                    Seamless, intuitive, and visually stunning designs that
                    drive engagement and conversions
                  </p>
                  <Link onClick={() => setIsOpen(true)}>
                    {/* <img
                      className="right-arrow"
                      src="/img/right-arrow.png"
                      alt=""
                    /> */}
                    More Details <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6 mb-5">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon_div">
                    <img alt="photoshop" src="/img/photoshop.png"></img>
                  </div>
                  <h5 className="card-title">Photoshop / AI</h5>
                  <p className="card-text">
                    Stunning designs, flawless edits, and creative visuals
                    tailored to elevate your brand and captivate audiences.
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
                    <img alt="figma" src="/img/figma.png"></img>
                  </div>
                  <h5 className="card-title">Figma / Adobe XD</h5>
                  <p className="card-text">
                    Create stunning, user-friendly interfaces with powerful
                    tools for seamless collaboration and exceptional UX.
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
                    <img alt="html-css-bootstrap" src="/img/html.png"></img>
                  </div>
                  <h5 className="card-title">HTML5/CSS3/BOOTSTRAP</h5>
                  <p className="card-text">
                    Fast, flexible, and mobile-friendly designs to enhance user
                    experience effortlessly.
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
                    <img alt="vue" src="/img/vue.png"></img>
                  </div>
                  <h5 className="card-title">VUE JS</h5>
                  <p className="card-text">
                    Build fast, interactive, and scalable applications with a
                    lightweight, flexible, and efficient JavaScript framework.
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
                    <img alt="react" src="/img/react.png"></img>
                  </div>
                  <h5 className="card-title">React JS</h5>
                  <p className="card-text">
                    Fast, efficient, and user-friendly interfaces powered by a
                    flexible and modern JavaScript library.
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
          <h6> Web Designing</h6>
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
                      What is the typical timeline for designing a website?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      The duration varies based on the project's complexity and
                      specific requirements. Generally, a standard website can
                      take several weeks to a few months from initial
                      consultation to launch.
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
                      What is responsive web design?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Responsive web design ensures that a website adapts
                      seamlessly to various devices and screen sizes, providing
                      an optimal viewing experience for users on desktops,
                      tablets, and mobile phones.
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
                      Can I update the website content on my own after it's
                      built?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Most web design agencies develop websites using content
                      management systems (CMS) like WordPress, allowing clients
                      to easily update and manage their content without needing
                      extensive technical knowledge.
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
                      Do you offer search engine optimization (SEO) services
                      with web design?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Many web design agencies incorporate basic on-page SEO
                      practices during the design process to enhance search
                      engine visibility. For advanced SEO strategies, they might
                      offer additional services or recommend specialized
                      experts.
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
                      What kind of support and maintenance do you provide
                      post-launch?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Post-launch support varies by agency. Typically, services
                      include regular updates, security monitoring, backups, and
                      technical support to ensure the website remains functional
                      and up-to-date.
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

export default WebDesigning;
