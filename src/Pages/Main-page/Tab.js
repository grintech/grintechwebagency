import React from 'react'
import arrow1 from "../../assets/images/arrow-right-green1.png";
import arrow2 from "../../assets/images/arrow-down-green1.png";
import ae from "../../assets/images/Icon/GraphicDesignIcon/ae 1.png";
import ai from "../../assets/images/Icon/GraphicDesignIcon/AdobeAi.png";
import figma from "../../assets/images/Icon/GraphicDesignIcon/Figma.png";
import photoshop from "../../assets/images/Icon/GraphicDesignIcon/Photoshop.png";
import xd from "../../assets/images/Icon/GraphicDesignIcon/Adobe_XD.png";
import tabbg from "../../assets/images/tab-bg.webp";
import {Icon} from '@iconify/react';

import html from "../../assets/images/Icon/Webdesign/html-5 1.png";
import css from "../../assets/images/Icon/Webdesign/css 1.png";
import js from "../../assets/images/Icon/Webdesign/js 1.png";
import react from "../../assets/images/Icon/Webdesign/react 1.png";
import bootstrap from "../../assets/images/Icon/Webdesign/boostrap 1.png";
import responsive from "../../assets/images/Icon/Webdesign/responsive 1.png";

import wp from "../../assets/images/Icon/CMS/wordpress 1.png";
import joomla from "../../assets/images/Icon/CMS/joomla 1.png";
import magento from "../../assets/images/Icon/CMS/Magento 1.png";
import drupal from "../../assets/images/Icon/CMS/drupal 1.png";
import woo from "../../assets/images/Icon/CMS/woo-comrc 1.png";

import laravel from "../../assets/images/Icon/PHP/PHP/laravel 1.png";
import codeignator from "../../assets/images/Icon/PHP/PHP/codingnator 1.png";
import yii from "../../assets/images/Icon/PHP/PHP/yii 1.png";
import symphony from "../../assets/images/Icon/PHP/PHP/symphony 1.png";
import corephp from "../../assets/images/Icon/PHP/PHP/service section with out icon.png";
import cakephp from "../../assets/images/Icon/PHP/PHP/cake-php 1.png";

import seo from "../../assets/images/Icon/SEO/SEO 1.png"
import ppc from "../../assets/images/Icon/SEO/ppc 1.png"
import seoaudit from "../../assets/images/Icon/SEO/seo-edit 1.png"
import reputation from "../../assets/images/Icon/SEO/Reputation-Management 1.png"
import smo from "../../assets/images/Icon/SEO/SMO 1.png"
import influencer from "../../assets/images/Icon/SEO/Influencer-Marketing 1.png"

import shopify from "../../assets/images/Icon/Others/shopify 1.png"
import dm from "../../assets/images/Icon/Others/Database-Management 1.png"
import sql from "../../assets/images/Icon/Others/SQL 1.png"
import sanity from "../../assets/images/Icon/Others/Sanity 1.png"
import aws from "../../assets/images/Icon/Others/aws 1.png"
import gcloud from "../../assets/images/Icon/Others/cloud 1.png"
import mysql from "../../assets/images/Icon/Others/myswl 1.png"
import { Link } from 'react-router-dom';

import "./tab.css";


import ios from "../../assets/images/appDev/ios2.png"
import kotlin from "../../assets/images/appDev/kotlin.png"
import flutter from "../../assets/images/appDev/flutter.png"
import hybrid from "../../assets/images/appDev/hybrid.png"
import ionic from "../../assets/images/appDev/ionic.png"
import swift from "../../assets/images/appDev/swift.png"
import android from "../../assets/images/appDev/android.png"
import rnative from "../../assets/images/appDev/rnative.png"



const Tab = () => {
  return (
    <div>
      <section id="home-our-services" className="mt-5" >
        <div className="our-services">
          <div className="container">
            <div className="row">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

             
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-graphic-tab" data-bs-toggle="pill" data-bs-target="#pills-graphic" type="button" role="tab" aria-controls="pills-garphic" aria-selected="true">
                    {/* <h6>Graphic  Designing</h6> */}
                    <h6>UI /UX </h6>
                    <img src={arrow1} className="arrow-first" />
                    <img src={arrow2} className="arrow-first2" />
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                    <h6>Web Designing</h6>
                    <img src={arrow1} className="arrow-first" />
                    <img src={arrow2} className="arrow-first2" />
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-Shopify-tab" data-bs-toggle="pill" data-bs-target="#pills-Shopify" type="button" role="tab" aria-controls="pills-Shopify" aria-selected="true">
                    {/* <h6>CMS</h6> */}
                    <h6>Web Development</h6>
                    <img src={arrow1} className="arrow-first" />
                    <img src={arrow2} className="arrow-first2" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-Magento-tab" data-bs-toggle="pill" data-bs-target="#pills-Magento" type="button" role="tab" aria-controls="pills-Magento" aria-selected="true">
                    {/* <h6>PHP/Framework</h6> */}
                    <h6>Mobile Application</h6>
                    <img src={arrow1} className="arrow-first" />
                    <img src={arrow2} className="arrow-first2" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-PHP-tab" data-bs-toggle="pill" data-bs-target="#pills-PHP" type="button" role="tab" aria-controls="pills-PHP" aria-selected="true">
                    <h6>Digital Marketing</h6>
                    <img src={arrow1} className="arrow-first" />
                    <img src={arrow2} className="arrow-first2" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-Joomla-tab" data-bs-toggle="pill" data-bs-target="#pills-Joomla" type="button" role="tab" aria-controls="pills-Joomla" aria-selected="true">
                    <h6>Server</h6>
                    <img src={arrow1} className="arrow-first" />
                    <img src={arrow2} className="arrow-first2" />
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div className="row align-items-center">
                    <div className="col-md-5 col-sm-12">
                      <div className="tab-content-box">
                        <h2>Web Designing</h2>
                        {/* <p>The agency specializes in designing and developing attractive and user-friendly websites. They can create custom website designs tailored to your specific needs and preferences.</p> */}
                        <p>Grintech Web Agency offers top-tier web design services, crafting visually stunning, user-friendly, and responsive websites tailored to your business needs. Our expert team combines creativity with cutting-edge technology to deliver engaging digital experiences that drive results. Whether you need a brand-new website or a redesign, we ensure seamless functionality and modern aesthetics to elevate your online presence. </p>
                       


                        <div className="new-tab-button ">
                          {/* <Link to="/our-services-html-css">Explore  */}
                          <Link to="/our-works">Explore 
                          <span className="new-get"><Icon icon="bi:arrow-right" /></span>
                          </Link>
                          </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-12">
                      <div className="tab-content-img">
                        <ul className="img-section">
                          <li><img src={html} className="img-fluid" /><p>Html</p></li>
                          <li><img src={css} className="img-fluid" /><p>Css</p></li>
                          <li><img src={js} className="img-fluid" /><p>Javascript</p></li>
                          <li><img src={bootstrap} className="img-fluid" /><p>Bootstrap</p></li>
                          <li><img src={responsive} className="img-fluid" /><p>Responsive <br /> Design</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-graphic" role="tabpanel" aria-labelledby="pills-graphic-tab">
                  {/* <div className="row">
                    <div className="col-md-5 col-sm-12">
                      <div className="tab-content-box">
                        <h2>Graphic Designing</h2>
                        <p>Grintech Web Agency can help you with creating visually appealing designs for various purposes, such as logos, banners, brochures, and other marketing materials.</p>
                        <div className="new-tab-button "><Link to="/our-services-photoshop">Explore <span className="new-get"><Icon icon="bi:arrow-right" /></span></Link></div>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-12">
                      <div className="tab-content-img">
                        <ul className="img-section">
                        <li><img src={ai} className="img-fluid" /><p>Adobe Ai</p></li>
                          <li><img src={figma} className="img-fluid" /><p>Figma</p></li>
                          <li><img src={ae} className="img-fluid" /><p>After Effect</p></li>
                          <li><img src={photoshop} className="img-fluid" /><p>Adobe  <br /> Photoshop</p></li>
                          <li><img src={xd} className="img-fluid" /><p>Adobe XD</p></li>
                        </ul>
                      </div>
                    </div>
                  </div> */}

                   <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12">
                      <div className="tab-content-box">
                        <h2>UI /UX</h2>
                        {/* <ul>
                          <li><b>User Research and Analysis:</b> Understanding user needs and behaviors to inform design decisions.</li>
                          <li><b>Wireframing and Prototyping:</b> Creating interactive prototypes to visualize app flow and functionality</li>
                          <li><b>Visual Design:</b> Crafting aesthetically pleasing and user-friendly interfaces.</li>
                        </ul> */}
                        <p>Elevate your brand with our expert UI/UX design services! We craft intuitive, visually stunning, and user-friendly experiences that captivate audiences and drive engagement. From wireframes to prototypes, we design seamless digital interactions that enhance usability and boost conversions. Let’s create something amazing together!</p>
                      
                        <div className="new-tab-button ">
                          {/* <Link to="/our-services-photoshop">Explore  */}
                          <Link to="/our-works">Explore 
                          <span className="new-get"><Icon icon="bi:arrow-right" /></span>
                          </Link>
                          </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="tab-content-img">
                        <ul className="img-section">
                        <li><img src={ai} className="img-fluid" /><p>Adobe Ai</p></li>
                          <li><img src={figma} className="img-fluid" /><p>Figma</p></li>
                          <li><img src={ae} className="img-fluid" /><p>After Effect</p></li>
                          <li><img src={photoshop} className="img-fluid" /><p>Adobe  <br /> Photoshop</p></li>
                          <li><img src={xd} className="img-fluid" /><p>Adobe XD</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                    

                </div>
                <div className="tab-pane fade" id="pills-Shopify" role="tabpanel" aria-labelledby="pills-Shopify-tab">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12">
                      <div className="tab-content-box">
                        {/* <h2>CMS</h2> */}
                        {/* <p>CMS stands for Content Management System. Grintech Web Agency can assist you in implementing a CMS for your website, enabling you to easily manage and update your site's content without requiring technical expertise.</p> */}
                        <h2>Web Development</h2>
                        {/* <ul>
                          <li><b>Front-End Development:</b>Designing visually appealing and responsive interfaces using HTML, CSS, JavaScript, and modern libraries like React, Angular, and Vue.js.</li>
                          <li><b>Back-End Development:</b>Creating secure and scalable server-side applications using Node.js, Python, Ruby on Rails, and PHP.</li>
                          <li><b>Full-Stack Development:</b>Providing end-to-end solutions by combining front-end and back-end expertise to deliver comprehensive web applications.</li>
                        </ul> */}
                        <p>
                        Our Agency specializes in cutting-edge web development, offering expert front-end, back-end, and full-stack solutions. We craft visually stunning, responsive interfaces using modern frameworks like React, Angular, and Vue.js, while ensuring secure and scalable back-end systems with Node.js, Python, Ruby on Rails, and PHP. From sleek designs to powerful functionality, we deliver seamless digital experiences.
                        </p>
                        <div className="new-tab-button ">
                          <Link to="/our-works">Explore 
                          <span className="new-get"><Icon icon="bi:arrow-right" /></span>
                          </Link>
                          </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="tab-content-img">
                        <ul className="img-section">
                          <li><img src={wp} className="img-fluid" /><p>Wordpress</p></li>
                          <li><img src={laravel} className="img-fluid" /><p>Laravel <br /> Advance</p></li>
                          <li><img src={cakephp} className="img-fluid" /><p>Cake PHP</p></li>
                          <li><img src={react} className="img-fluid" /><p>React JS</p></li>
                          <li><img src={joomla} className="img-fluid" /><p>Joomla</p></li>
                          <li><img src={magento} className="img-fluid" /><p>Magento</p></li>
                          {/* <li><img src={drupal} className="img-fluid" /><p>Drupal</p></li> */}
                          {/* <li><img src={woo} className="img-fluid" /><p>Woo-Commerce</p></li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-Magento" role="tabpanel" aria-labelledby="pills-Magento-tab">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12">
                      <div className="tab-content-box">
                        {/* <h2>PHP</h2> */}
                        {/* <p>PHP is a popular programming language used for web development. Grintech Web Agency has expertise in PHP development and can create dynamic and interactive websites using this language.</p> */}
                        <h2>Mobile Application Development</h2>
                         {/* <ul>
                          <li><b>iOS Development:</b>Building robust and intuitive apps for iPhone and iPad users, leveraging Swift and Objective-C.</li>
                          <li><b>Android Development:</b>Crafting engaging and high-performance apps for Android devices using Java and Kotlin.</li>
                          <li><b>Cross-Platform Development</b>Delivering seamless experiences across multiple platforms with frameworks like React Native, Flutter, and Xamarin.</li>
                        </ul> */}
                        <p>
                        GrinTech Web Agency specializes in mobile application development, creating high-performance and user-friendly apps for iOS and Android. Our expertise spans <strong>Swift</strong> and <strong>Objective-C</strong> for iPhone and iPad, <strong>Java</strong> and <strong>Kotlin</strong> for Android, and <strong>cross-platform solutions</strong> using React Native, Flutter, and Xamarin. We build seamless, scalable, and engaging mobile experiences tailored to your business needs. 
                        </p>
                        <div className="new-tab-button ">
                          {/* <Link to="/our-services-cakephp">Explore  */}
                          <Link to="/our-works">Explore 
                          <span className="new-get"><Icon icon="bi:arrow-right" />
                          </span>
                          </Link></div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="tab-content-img">
                        <ul className="img-section">
                          {/* <li><img src={corephp} className="img-fluid" /><p>Core PHP</p></li> */}
                         
                          <li><img src={ios} className="img-fluid" /><p>Ios</p></li>
                          <li><img src={android} className="img-fluid" /><p>Android</p></li>
                          <li><img src={ionic} className="img-fluid" /><p>Ionic</p></li>
                          <li><img src={flutter} className="img-fluid" /><p>Flutter</p></li>
                          <li><img src={kotlin} className="img-fluid" /><p>Kotlin</p></li>
                          <li><img src={hybrid} className="img-fluid" /><p>Hybrid</p></li>
                          <li><img src={swift} className="img-fluid" /><p>Swift</p></li>
                          <li><img src={rnative} className="img-fluid" /><p>React Native</p></li>
                          {/* <li><img src={codeignator} className="img-fluid" /><p>Codeignator</p></li>
                          <li><img src={yii} className="img-fluid" /><p>Yii</p></li>
                          <li><img src={symphony} className="img-fluid" /><p>Symphony</p></li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-PHP" role="tabpanel" aria-labelledby="pills-PHP-tab">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12">
                      <div className="tab-content-box">
                        <h2>Digital Marketing</h2>
                      
                        {/* <ul>
                          <li><b>Search Engine Optimization (SEO): </b>Enhancing your website's visibility on search engines to attract more organic traffic.</li>
                          <li><b>Social Media Marketing:</b>Leveraging platforms like Facebook, Instagram, Twitter, and LinkedIn to engage with your audience and build your brand.</li>
                          <li><b>Pay-Per-Click (PPC) Advertising:</b>Running targeted ad campaigns on platforms like Google Ads and social media to drive immediate traffic and conversions.</li>
                          <li><b>Content Marketing:</b>Creating valuable and relevant content to attract, engage, and retain your target audience.</li>
                          <li><b>Email Marketing:</b>Building and managing email campaigns to nurture leads and drive customer loyalty.</li>
                          <li><b>Analytics and Reporting: </b>Monitoring and analyzing marketing performance to optimize strategies and ensure maximum ROI</li>
                        </ul> */}
                        <p>We specialize in <strong>SEO, Social Media Marketing, PPC, Content Marketing, Email Marketing, and Analytics</strong> to help businesses grow. Our data-driven strategies ensure <strong>higher visibility, better engagement, and increased conversions</strong> for maximum ROI.<br /> Let’s take your brand to the next level!</p>
                        <div className="new-tab-button ">
                          {/* <Link to="/our-services-seo-smm-smo">Explore */}
                          <Link to="/our-works">Explore
                           <span className="new-get"><Icon icon="bi:arrow-right" />
                           </span>
                           </Link></div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="tab-content-img">
                        <ul className="img-section">
                        <li><img src={seo} className="img-fluid" /><p>SEO</p></li>
                          <li><img src={ppc} className="img-fluid" /><p>PPC</p></li>
                          {/* <li><img src={seoaudit} className="img-fluid" /><p>SEO-Audit</p></li> */}
                          <li><img src={reputation} className="img-fluid" /><p>Reputation <br />Management</p></li>
                          <li><img src={smo} className="img-fluid" /><p>  SMO</p></li>
                          <li><img src={influencer} className="img-fluid" /><p>Branding</p></li>
                          {/* <li><img src={influencer} className="img-fluid" /><p>Influencer <br /> Marketing</p></li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-Joomla" role="tabpanel" aria-labelledby="pills-Joomla-tab">
                  <div className="row align-items-center">
                    <div className="col-md-5 col-sm-12">
                      <div className="tab-content-box">
                        <h2>Server</h2>
                        {/* <p>The server category likely includes additional services provided by Grintech Web Agency. These could vary depending on specific client requirements and may include services like website maintenance, e-commerce development, database management and more.</p> */}
                        <p>
                        Grintech Web Agency offers a range of server-related services tailored to meet diverse client needs. These may include website hosting, maintenance, e-commerce infrastructure, database management, security enhancements, and performance optimization. With a focus on reliability and scalability, Grintech ensures seamless online operations for businesses of all sizes.
                        </p>
                       
                        <div className="new-tab-button ">
                          {/* <Link to="/our-services-content-writing">Explore  */}
                          <Link to="/our-works">Explore 
                          <span className="new-get"><Icon icon="bi:arrow-right" /></span>
                          </Link></div>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-12">
                      <div className="tab-content-img">
                        <ul className="img-section">
                          {/* <li><img src={shopify} className="img-fluid" /><p>Shopify</p></li>
                          <li><img src={sanity} className="img-fluid" /><p>Sanity</p></li> */}
                          <li><img src={dm} className="img-fluid" /><p>Database <br /> Management</p></li>
                          <li><img src={mysql} className="img-fluid" /><p>MySQL</p></li>
                          <li><img src={sql} className="img-fluid" /><p>SQL</p></li>
                          <li><img src={gcloud} className="img-fluid" /><p>Google <br /> cloud</p></li>
                          <li><img src={aws} className="img-fluid" /><p>AWS</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tab
