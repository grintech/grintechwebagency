import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { Link } from "react-router-dom";
import "./newService.css";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet";
import Client3 from "../Main-page/Client3";
// import data from "../OurWorks/data";
import data1 from "../OurWorks/data1";
import { Icon } from "@iconify/react";
import personsitting from "../../assets/images/removed.png";
import { useSidebar } from "../../context/SidebarContext";
import SidebarContact from "./SidebarContact";

const MobileAppDevelopment = () => {
  // const [sites, setSites] = useState(data);
  const [apps, setApps] = useState(data1);

  const { setIsOpen } = useSidebar();

  return (
    <div className="new_servicepage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mobile Development Services | Build Your App Today</title>
        <meta
          name="description"
          content="Get top-notch mobile app development services with Grin Tech! Build high-performing, user-friendly apps for iOS & Android. Start your project today!"
        />
        <link rel="canonical" href="/services/mobile-app-development" />
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
              <p className="small_head">Mobile App Development</p>
              <h1 className="mb-3">
                Transform Your Ideas into Powerful Mobile Apps!
              </h1>
              <p className="mb-4">
                We design and develop high-performance, user-friendly
                <strong>mobile apps</strong> tailored to your business needs.
                From iOS to Android, our solutions ensure seamless
                functionality, stunning UI/UX, and a top-notch user experience.
                Elevate your brand with cutting-edge mobile technology—let’s
                build something amazing!
              </p>
              <Link to="/contact" className="">
                <button type="button" class="btn btn-contact">
                  Hire Developer today!
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
          <h2>Our Mobile App Development Offerings</h2>
          <p>
            At
            <Link to="/" className="fw-bold text-dark">
              Grintech Web Agency
            </Link>
            , we bring your vision to life with cutting-edge
            <Link to="/services" className="fw-bold text-dark">
              mobile app development
            </Link>
            solutions. Whether you need an
            <strong>iOS, Android, or cross-platform app</strong>, our expert
            developers create seamless, high-performance applications that
            captivate users and drive business success.
          </p>
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
                  <h5 className="card-title">Android App</h5>
                  <p className="card-text">
                    Scalable, user-friendly, and feature-rich mobile solutions
                    tailored to enhance engagement and drive business growth.
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
                    <img className="" alt="ios" src="/img/ios.png"></img>
                  </div>
                  <h5 className="card-title">IOS App</h5>
                  <p className="card-text">
                    Sleek, secure, and high-performance mobile solutions
                    designed to deliver seamless user experiences and drive
                    business success.
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
                    <img className="" alt="hybrid" src="/img/hybrid.png"></img>
                  </div>
                  <h5 className="card-title">Hybrid App</h5>
                  <p className="card-text">
                    Reach both iOS & Android users with fast, responsive, and
                    cost-effective mobile solutions for a seamless user
                    experience.
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
                      alt="flutter"
                      src="/img/flutter.png"
                    ></img>
                  </div>
                  <h5 className="card-title">Flutter</h5>
                  <p className="card-text">
                    Create fast, beautiful, and cross-platform mobile apps with
                    a single codebase for seamless performance on iOS & Android.
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
                      alt="react-native"
                      src="/img/react.png"
                    ></img>
                  </div>
                  <h5 className="card-title">React Native</h5>
                  <p className="card-text">
                    Build fast, scalable, and cross-platform apps with a
                    seamless user experience on both iOS and Android.
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
                    <img className="" alt="kotlin" src="/img/kotlin.png"></img>
                  </div>
                  <h5 className="card-title">Kotlin</h5>
                  <p className="card-text">
                    Fast, secure, and scalable mobile solutions designed for
                    seamless performance and a great user experience.
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
                    <img className="" alt="ionic" src="/img/ionic.png"></img>
                  </div>
                  <h5 className="card-title">Ionic </h5>
                  <p className="card-text">
                    Fast, flexible, and feature-rich mobile solutions for
                    seamless performance on iOS, Android, and the web.
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
                    <img className="" alt="swift" src="/img/swift.png"></img>
                  </div>
                  <h5 className="card-title">Swift</h5>
                  <p className="card-text">
                    Fast, secure, and scalable applications designed for
                    seamless user experiences on Apple devices.
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
          <div>
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
                      What platforms do you develop mobile apps for?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We develop mobile applications for both iOS and Android
                      platforms. Depending on your project requirements, we
                      utilize native development languages like Swift for iOS
                      and Kotlin for Android, as well as cross-platform
                      frameworks such as React Native or Flutter to ensure a
                      seamless experience across devices.
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
                      How long does it take to develop a mobile app?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      The development timeline for a mobile app varies based on
                      its complexity, features, and design requirements. A
                      simple app might take a few months to develop, while more
                      complex applications could extend to a year or more.
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
                      How much does it cost to develop a mobile app?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      The cost of developing a mobile app depends on various
                      factors, including the app's features, design complexity,
                      development time, and the platforms targeted.
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
                      What is your approach to app prototyping and wireframing?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We prioritize user experience by creating detailed
                      prototypes and wireframes that visualize the app's flow
                      and functionality. This iterative process allows for early
                      feedback and refinement before proceeding to full
                      development.
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
                      Do you offer cross-platform development solutions?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes, we offer cross-platform development solutions using
                      frameworks like React Native and Flutter. These
                      technologies enable us to develop a single codebase that
                      runs efficiently on both iOS and Android devices, ensuring
                      consistent performance and user experience across
                      platforms.
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

export default MobileAppDevelopment;
