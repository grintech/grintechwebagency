import React, { useEffect, useState } from 'react'
import Banner from './Banner.js';
import Tab from './Tab.js';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
import processbg from "../../assets/images/process-bg.webp";
import plan from "../../assets/images/p1.png";
import design from "../../assets/images/p2.png";
import develope from "../../assets/images/p3.png";
import launch from "../../assets/images/p4.png";
import grow from "../../assets/images/p5.png";
import support from "../../assets/images/p6.png";
import line1 from "../../assets/images/line1.png";
import line2 from "../../assets/images/line2.png";
import line3 from "../../assets/images/line3.png";
import projectsbg from "../../assets/images/projects-bg.webp";
import statsicon1 from "../../assets/images/pi1.png";
import statsicon2 from "../../assets/images/pi2.png";
import statsicon3 from "../../assets/images/pi3.png";
import statsicon4 from "../../assets/images/pi4.png";
import callaction from "../../assets/images/get-touch-bg.webp";
import homeabout from "../../assets/images/home-about-bg.webp";
import { Icon } from '@iconify/react';

import Homeblog from "../../Components/Homeblog/Blogpost.js";
import { Link } from 'react-router-dom';
import Client2 from './Client2.js';
import data from '../OurWorks/data.js';
import data1 from '../OurWorks/data1.js';
import Infographics from "./Infographics.js"

import AOS from "aos";
import "aos/dist/aos.css";


import PartnerImage1 from "../../assets/images/partnerlogo/logo.png"
import PartnerImage2 from "../../assets/images/partnerlogo/logo2.png"
import PartnerImage3 from "../../assets/images/partnerlogo/logo3.png"
import PartnerImage4 from "../../assets/images/partnerlogo/logo4.avif"
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import Client3 from './Client3.js';
import SmallHeader from '../../Components/Header/SmallHeader.js';
import ClientReview from '../../Components/Reviews/ClientReview.js';
import Testimonial from '../../Components/Reviews/Testimonial.js';
import { Helmet } from 'react-helmet';

const Home = () => {

  const [sites, setSites] = useState(data);
  const [apps, setApps] = useState(data1);
  const [isFirstVideoPlaying, setIsFirstVideoPlaying] = useState(false);


  const handleFirstVideoPlay = () => {
    setIsFirstVideoPlaying(true);
  };

  const handleFirstVideoPause = () => {
    setIsFirstVideoPlaying(false);
  };




  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  })





  return (

    <div className='app'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Top Web App Development Agency | Web & App Development Services</title>
        <meta name="description" content="Grin Tech Web Agency – Top web app development agency offering expert web & app development services. Build powerful, scalable digital solutions with us!" />
        <link rel='canonical' href='https://grintechwebagency.com' />
      </Helmet>

      <Header />
      {/* <SmallHeader /> */}
      <Banner />
      <WhatsAppWidget phoneNumber="8264420387" message="Hello, how can I help you?" companyName="Grintech Web Agency" />
      <section id="home-services" className="mt-5">
        <div className="container">
          <div className="row">
            <div className="services-home pb-3">
              <h2>Our Services</h2>
              <p>That's great to hear! Grintech Web Agency offers a range of services in the field<br />of web development and digital marketing.</p>
            </div>
          </div>
        </div>
      </section>

      <Tab />


      {/* <section id="process" className='process' style={{backgroundImage: `url(${processbg})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="p1">
                <img src ={line1} className="l1" alt="line"></img>
                <div className='text-boxl c1'>
                  <h5>Plan</h5>
                  <p>Grintech Web Agency recognizes the importance of thorough planning to ensure the success of a project. </p>
                </div>
                <div className='num-boxl'>
                  <h6 className='nc1'>01</h6>
                  <img src ={plan} className="img-fluid" alt="plan"></img>
                </div>
              </div>
              <div className="p2">
                <img src ={line2} className="l2" alt="line"></img>
                <div className='text-boxl c2'>
                  <h5>Design</h5>
                  <p>We focus on user-friendly designs for websites and helping clients establish a strong brand identity. </p>
                </div>
                <div className='num-boxl'>
                  <h6 className='nc2'>02</h6>
                  <img src ={design} className="img-fluid" alt="design"></img>
                </div>
              </div>
              <div className="p3">
                <img src ={line3} className="l3" alt="line"></img>
                <div className='text-boxl c3'>
                  <h5>Develope</h5>
                  <p>We employ skilled developers who specialize in web development, utilizing various programming languages.</p>
                </div>
                <div className='num-boxl'>
                  <h6 className='nc3'>03</h6>
                  <img src ={develope} className="img-fluid" alt="develope"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-4 bx-center">
              <div className="work-process">
                <h3 className="text-center">Our<br/>Working<br/><span>Process</span></h3>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="p1">
                <img src ={line3} className="l4" alt="line"></img>
                <div className='text-boxr c3'>
                  <h5>Launch</h5>
                  <p>We support clients in opening their websites, ensuring a smooth transition from development to live.</p>
                </div>
                <div className='num-boxr'>
                  <h6 className='nc3'>04</h6>
                  <img src ={launch} className="img-fluid" alt="launch"></img>
                </div>
              </div>
              <div className="p4">
                <img src ={line2} className="l5" alt="line"></img>
                <div className='text-boxr c2'>
                  <h5>Grow</h5>
                  <p>We help clients expand their online presence and reach by implementing effective digital marketing strategies and optimizing.</p>
                </div>
                <div className='num-boxr'>
                  <h6 className='nc2'>05</h6>
                  <img src ={grow} className="img-fluid" alt="grow"></img>
                </div>
              </div>
              <div className="p3">
                <img src ={line1} className="l6" alt="line"></img>
                <div className='text-boxr c1'>
                  <h5>Support & Maintain</h5>
                  <p>We provide ongoing technical assistance and maintenance services to ensure clients’ websites and digital assets.</p>
                </div>
                <div className='num-boxr'>
                  <h6 className='nc1'>06</h6>
                  <img src ={support} className="img-fluid" alt="support"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}



      <section className='py-5'>
        <div className='container mobile_dev'>
          <h2 className='text-center fw-bold'>Mobile Application Development</h2>
          <div className='row align-items-center pt-4'>
            <div className='col'>
              <ul className='p-0'>
                <li className='d-flex'>
                  <p className='mobile_no '>01</p>
                  <p className='m-0'><b>Swift:</b> Experience in building high-quality web applications using Swift for iOS, Mac. </p>
                </li>
                <li className='d-flex'>
                  <p className='mobile_no '>02</p>
                  <p className='m-0'> <b>Ionic:</b> Ionic offers a library of pre-designed UI components, such as buttons, cards and more. </p>
                </li>
                <li className='d-flex'>
                  <p className='mobile_no '>03</p>
                  <p className='m-0'><b>React Native:</b> A JavaScript framework for building native apps.</p>
                </li>

              </ul>
            </div>
            <div className='col-lg-6'>
              <img src='/img/back7.png' className='w-100 home_mobile_img' alt='mobile-app-development' />
            </div>
            <div className='col'>
              <ul className='p-0'>
                <li className='d-flex'>
                  <p className='mobile_no '>04</p>
                  <p className='m-0'><b>Flutter:</b> A UI toolkit from Google for building natively compiled applications </p>
                </li>
                <li className='d-flex'>
                  <p className='mobile_no '>05</p>
                  <p className='m-0'><b>Xamarin:</b> A Microsoft framework for building cross-platform apps using C#.</p>
                </li>
                <li className='d-flex'>
                  <p className='mobile_no '>06</p>
                  <p className='m-0'><b>Java/Kotlin:</b> For Android development.</p>

                </li>

              </ul>
            </div>

          </div>
        </div>
      </section>




      <section id="counter-stats" className="counter-stats" style={{ backgroundImage: `url(${projectsbg})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className='stats'>
                <div className='stats-icon'><img src={statsicon1} className="img-fluid w-50" alt="finished projects"></img></div>
                <div className="counting" data-count="500">500</div>
                <div className="plus">+</div>
                <h5>Finished Projects</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className='stats'>
                <div className='stats-icon'><img src={statsicon2} className="img-fluid w-50" alt="happy clients"></img></div>
                <div className="counting" data-count="370">370</div>
                <div className="plus">+</div>
                <h5>Happy Clients</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className='stats'>
                <div className='stats-icon'><img src={statsicon3} className="img-fluid w-50" alt="working hours"></img></div>
                <div className="counting" data-count="8000">8000</div>
                <div className="plus">+</div>
                <h5>Working Hours</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className='stats'>
                <div className='stats-icon'><img src={statsicon4} className="img-fluid w-50" alt="custom themes"></img></div>
                <div className="counting" data-count="100">100</div>
                <div className="plus">+</div>
                <h5>Custom Themes</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='call-to-action'>
        <div className='container'>
          <div className='row cact' style={{ backgroundImage: `url(${callaction})` }}>
            <div className='col-lg-4 offset-lg-8'>
              <h3>We are offering 24/7 support</h3>
              <p>We are excellent service in IT solutions, backed by 7+ years of industry experience. With a team of professionals renowned for their expertise. Our highly skilled and dedicated staff ensures that every project is executed with precision and creativity, delivering outstanding results in web development. We take pride in offering 24/7 support, ensuring that our clients' needs are promptly addressed.   </p>
              <Link className="btn btn-action" to="/contact">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

      <section className='home-about pt-4 pb-5'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7 about-frame mb-5 mb-lg-0'>
              {/* <h3>About Us</h3>
              <h6>Who We are</h6>
              <p>Grintech Web Agency is the epitome of excellence in IT solutions, backed by 7+ years of industry experience. With a team of professionals renowned for their expertise, we have earned numerous awards for our exceptional services. Our highly skilled and dedicated staff ensures that every project is executed with precision and creativity, delivering outstanding results in web development, web design, SEO, and digital marketing. We take pride in offering 24/7 support, ensuring that our clients' needs are promptly addressed. Our commitment to transparency is reflected in our fair prices, providing excellent value for our client's investments. Feel free to call us with any questions or queries as we believe in fostering open communication. When it comes to IT solutions, including expertise in React JS, Grintech Web Agency is the go-to choice for businesses worldwide.</p> */}
              <h3>Why Choose Us?</h3>
              <ul>
                <li className='mb-2'><b>Expert Team:</b> Our team comprises experienced developers, designers, and project managers dedicated to delivering top-notch solutions.</li>
                <li className='mb-2'><b>Custom Solutions:</b> We tailor our services to fit the specific requirements of each project, ensuring the final product aligns with your vision and goals.</li>
                <li className='mb-2'><b>Quality Assurance: </b> Rigorous testing processes ensure our apps are reliable, secure, and perform excellently under all conditions.</li>
                <li className='mb-2'><b>Client-Centric Approach:</b> We prioritize communication and collaboration, keeping you involved and informed throughout the development process.</li>
              </ul>
              <Link to="/about" className='ms-3'>Explore <span className="new-get"><Icon icon="bi:arrow-right" /></span></Link>
            </div>
            <div className='col-lg-5'>
              <img src={homeabout} className="img-fluid home-abt" alt="about"></img>
            </div>
          </div>
        </div>
      </section>

      <section className='home_process '>
        <div className='container'>
          <h2 className='mb-5 fw-bold'>Our Process</h2>

          {/* <div className='row mt-5'>
              <div className=' col-lg-3 col-md-3 col-6'>
                 <div className='process_box '>
                 <div className='card text-center'>
                 <div className='process_circle_main'>
                 <div className='process_circle'>01</div>
                 </div>
                  <div className='card-body pt-5 mt-3'>
                    <h5>Discovery and Planning</h5>
                    <p className='m-0'>Understanding your needs and defining project requirements.</p>
                  </div>
                  </div>
                 </div>
              </div>
              

              <div className=' col-lg-3 col-md-3 col-6'>
                 <div className='process_box '>
                 <div className='card text-center'>
                 <div className='process_circle_main'>
                 <div className='process_circle'>02</div>
                 </div>
                  <div className='card-body pt-5 mt-3'>
                    <h5>Design and Prototyping</h5>
                    <p className='m-0'> Creating design mockups and interactive prototypes for feedback and approval.</p>
                  </div>
                  </div>
                 </div>
              </div>
              <div className=' col-lg-3 col-md-3 col-6'>
                 <div className='process_box '>
                 <div className='card text-center'>
                 <div className='process_circle_main'>
                 <div className='process_circle'>03</div>
                 </div>
                  <div className='card-body pt-5 mt-3'>
                    <h5>Development</h5>
                    <p className='m-0'>Building the app using agile methodologies to ensure timely delivery and flexibility.</p>
                  </div>
                  </div>
                 </div>
              </div>
              <div className=' col-lg-3 col-md-3 col-6'>
                 <div className='process_box '>
                 <div className='card text-center'>
                 <div className='process_circle_main'>
                 <div className='process_circle'>04</div>
                 </div>
                  <div className='card-body pt-5 mt-3'>
                    <h5>Testing and QA</h5>
                    <p className='m-0'>Conducting thorough testing to identify and fix any issues.</p>
                  </div>
                  </div>
                 </div>
              </div>
              <div className=' col-lg-3 col-md-3 col-6'>
                 <div className='process_box '>
                 <div className='card text-center'>
                 <div className='process_circle_main'>
                 <div className='process_circle'>05</div>
                 </div>
                  <div className='card-body pt-5 mt-3'>
                    <h5>Deployment: </h5>
                    <p className='m-0'>Launching the app and making it available to users.</p>
                  </div>
                  </div>
                 </div>
              </div>
              <div className=' col-lg-3 col-md-3 col-6'>
                 <div className='process_box '>
                 <div className='card text-center'>
                 <div className='process_circle_main'>
                 <div className='process_circle'>06</div>
                 </div>
                  <div className='card-body pt-5 mt-3'>
                    <h5>Post-Launch Support</h5>
                    <p className='m-0'>Offering continuous support and updates to maintain app performance.</p>
                  </div>
                  </div>
                 </div>
              </div>
              <div className=' col-lg-3 col-md-3 col-6'>
                 <div className='process_box '>
                 <div className='card text-center'>
                 <div className='process_circle_main'>
                 <div className='process_circle'>07</div>
                 </div>
                  <div className='card-body pt-5 mt-3'>
                    <h5>Post-Launch Support</h5>
                    <p className='m-0'>Offering continuous support and updates to maintain app performance.</p>
                  </div>
                  </div>
                 </div>
              </div>
              <div className=' col-lg-3 col-md-3 col-6'>
                 <div className='process_box '>
                 <div className='card text-center'>
                 <div className='process_circle_main'>
                 <div className='process_circle'>08</div>
                 </div>
                  <div className='card-body pt-5 mt-3'>
                    <h5>Post-Launch Support</h5>
                    <p className='m-0'>Offering continuous support and updates to maintain app performance.</p>
                  </div>
                  </div>
                 </div>
              </div>
              
               
            </div> */}

          <div className='d-flex flex-wrap mt-5 align-items-center justify-content-center new_row'>
            <div className='process_box process_box1'>
              <div className='card text-center'>
                <div className='process_circle_main'>
                  <div className='process_circle'>01</div>
                </div>
                <div className='card-body pt-5 mt-3'>
                  <h5>Discovery and Planning</h5>
                  <p className='m-0'>Understanding your needs and defining project requirements.</p>
                </div>
              </div>
            </div>
            <div className='process_box process_box2'>
              <div className='card text-center'>
                <div className='process_circle_main'>
                  <div className='process_circle'>02</div>
                </div>
                <div className='card-body pt-5 mt-3'>
                  <h5>Design and Prototyping</h5>
                  <p className='m-0'> Creating design mockups and interactive prototypes for feedback and approval.</p>
                </div>
              </div>
            </div>
            <div className='process_box process_box3'>
              <div className='card text-center'>
                <div className='process_circle_main'>
                  <div className='process_circle'>03</div>
                </div>
                <div className='card-body pt-5 mt-3'>
                  <h5>Development</h5>
                  <p className='m-0'>Building the app using agile methodologies to ensure timely delivery and flexibility.</p>
                </div>
              </div>
            </div>
            <div className='process_box process_box4'>
              <div className='card text-center'>
                <div className='process_circle_main'>
                  <div className='process_circle'>04</div>
                </div>
                <div className='card-body pt-5 mt-3'>
                  <h5>Testing and QA</h5>
                  <p className='m-0'>Conducting thorough testing to identify and fix any issues.</p>
                </div>
              </div>
            </div>
            <div className='process_box process_box5'>
              <div className='card text-center'>
                <div className='process_circle_main'>
                  <div className='process_circle'>05</div>
                </div>
                <div className='card-body pt-5 mt-3'>
                  <h5>Deployment</h5>
                  <p className='m-0'>Launching the app and making it available to users.</p>
                </div>
              </div>
            </div>
            <div className='process_box process_box6'>
              <div className='card text-center'>
                <div className='process_circle_main'>
                  <div className='process_circle'>06</div>
                </div>
                <div className='card-body pt-5 mt-3'>
                  <h5>Post-Launch Support</h5>
                  <p className='m-0'>Offering continuous support and updates to maintain app performance.</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* <Infographics /> */}


      <section className='portfolio'>
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


      <ClientReview />
      <Testimonial />

      <section className='client'>
        <div className='container '> <h3>Our Global Clients</h3>
          <h6>Business Expansion Scale</h6>
          <div className='row client2'>
            {
              sites.slice(0, -4).map((item, index) => (
                <div id="client2_image" className='col-md-2 col-sm-4  mt-4 mb-4 ' key={index}>
                  <img src={item.logo} className='img-fluid'></img>
                </div>
              )
              )
            }

          </div>
        </div>
      </section>

      <Homeblog />

      <section className='businesspartner'>
        <div className='container'> <h3>Our Business Partner</h3>

          <h6>Alliances</h6>
          <div className='row '>
            <div className='alldisplayflex'>
              {/* <img src={PartnerImage1} className="img-fluid w-50 " alt="Partner Image 1" /> */}

              <Link className='w-50 text-center'> <img src={PartnerImage2} className="img-fluid " alt="Partner1" /> </Link>

              <Link target='_blank' to='https://whitehatseo.in' className='w-50 text-center'> <img src={PartnerImage3} className="img-fluid " alt="Partner2" /></Link>

            </div>
          </div>

        </div>

      </section>

      <Footer />
    </div>
  )
}

export default Home

