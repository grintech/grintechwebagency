import { React, useState} from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from 'react-router-dom';

import Form from "./Form";
import Commonsection from './Commonsection';
import ClientReview from '../../Components/Reviews/ClientReview';


import Client2 from '../Main-page/Client2';
import Client3 from '../Main-page/Client3';
import { Icon } from '@iconify/react';
import data from '../OurWorks/data';
import data1 from '../OurWorks/data1';
import { Helmet } from 'react-helmet';

const Market = () => {
  const [showMore, setShowMore] = useState(false);

  const [sites, setSites] = useState(data);
  const [apps, setApps] = useState(data1);

  const toggleMoreText = () => {
    setShowMore(!showMore);
  };

  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Best Content Writing Services in 2024 | Grintech Web Agency</title>
            <meta name="description" content="Grintech provide The Art of Content Writing: Captivating Audiences with Engaging and Informative Copy. The Key to Effective Communication & Audience Engagement " />
            <link rel='canonical' href='/our-services-content-writing' />
         </Helmet>

      <Header />

      <section className="dev-passion mt-4 mb-1">
        <div className="container d-none d-lg-block py-3">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="passion">
                <h1 className='fw-bold'>Content Writing Services: Words That Work Wonders</h1>
                <div className=''>
                <p>Content writing services are in high demand as businesses seek to connect with their audience, enhance their online presence, and achieve their marketing goals through compelling and strategic content. Grintech provides comprehensive content marketing services designed to elevate your brand and drive engagement.</p>

                <h2>Here’s what we offer:</h2>
                <ul className="p-0">
                  <li className='mb-2'><b>1. Content Strategy Development:</b> Creating a tailored content strategy that aligns with your business goals, target audience, and industry trends.</li>
                  <li className='mb-2'><b>2. SEO Content Creation:</b> Crafting keyword-optimized content to improve search engine rankings, attract organic traffic, and enhance online visibility.</li>
                  <li className='mb-2'><b>3. Blog and Article Writing:</b> Develop engaging and informative blog posts and articles that position your brand as an authority and keep your audience informed.</li>
                  <li className='mb-2'><b>4. Social Media Content:</b> Designing compelling social media posts and campaigns to boost brand presence, engage followers, and drive interactions.</li>
                  <li className='mb-2'><b>5. Email Marketing:</b> Writing persuasive email campaigns and newsletters to nurture leads, engage subscribers, and drive conversions.</li>
                  </ul>
                </div>
               
               {showMore && (
                <div className='moretext'>
                <ul className="p-0">
                  <li className='mb-2'><b>6. Website Content:</b> Create impactful content for your website, including homepages, service pages, and product descriptions that reflect your brand voice and encourage user action.</li>
                  <li className='mb-2'><b>7. Content Distribution:</b> Managing the distribution of content across various platforms to maximize reach and engagement.</li>
                  <li className='mb-2'><b>8. Content Performance Analysis:</b> Monitoring and analyzing content performance with detailed reports to measure effectiveness, optimize strategies, and achieve better results.</li>
                  <li className='mb-2'><b>9. Video Content Creation:</b> Develop engaging video scripts and content that capture attention and communicate your message effectively.</li>
                  <li className='mb-2'><b>10. Whitepapers and Ebooks:</b> Producing in-depth, informative whitepapers and ebooks that provide valuable insights and showcase your expertise.</li>
                  </ul>
                  <p>Grintech’s content marketing services are designed to enhance your brand’s visibility, engage your audience, and drive meaningful results through strategic and high-quality content.</p>
                </div>
               )}

                <Link className="moreless-button" onClick={toggleMoreText}>
                  {showMore ? 'Read less... ' : 'Read more...'}
                </Link>

                <div className='d-flex mt-4'>
                  <a href='tel: 8264420387' className='btn-bt'> <i className="fa-solid fa-phone"></i> (+1) 833232-6622</a>
                </div>

              </div>
            </div>
            <div className="col-lg-6  order-1 order-lg-2 py-5">
              <Form />
            </div>
          </div>
        </div>
        <div className="container d-block d-lg-none">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="passion">
               
                <div className=''>
                <h2>Here’s what we offer:</h2>
                <ul className="p-0">
                  <li className='mb-2'><b>1. Content Strategy Development:</b> Creating a tailored content strategy that aligns with your business goals, target audience, and industry trends.</li>
                  <li className='mb-2'><b>2. SEO Content Creation:</b> Crafting keyword-optimized content to improve search engine rankings, attract organic traffic, and enhance online visibility.</li>
                  <li className='mb-2'><b>3. Blog and Article Writing:</b> Develop engaging and informative blog posts and articles that position your brand as an authority and keep your audience informed.</li>
                  <li className='mb-2'><b>4. Social Media Content:</b> Designing compelling social media posts and campaigns to boost brand presence, engage followers, and drive interactions.</li>
                  <li className='mb-2'><b>5. Email Marketing:</b> Writing persuasive email campaigns and newsletters to nurture leads, engage subscribers, and drive conversions.</li>
                  </ul>
                </div>
               
               {showMore && (
                <div className='moretext'>
                <ul className="p-0">
                  <li className='mb-2'><b>6. Website Content:</b> Create impactful content for your website, including homepages, service pages, and product descriptions that reflect your brand voice and encourage user action.</li>
                  <li className='mb-2'><b>7. Content Distribution:</b> Managing the distribution of content across various platforms to maximize reach and engagement.</li>
                  <li className='mb-2'><b>8. Content Performance Analysis:</b> Monitoring and analyzing content performance with detailed reports to measure effectiveness, optimize strategies, and achieve better results.</li>
                  <li className='mb-2'><b>9. Video Content Creation:</b> Develop engaging video scripts and content that capture attention and communicate your message effectively.</li>
                  <li className='mb-2'><b>10. Whitepapers and Ebooks:</b> Producing in-depth, informative whitepapers and ebooks that provide valuable insights and showcase your expertise.</li>
                  </ul>
                  <p>Grintech’s content marketing services are designed to enhance your brand’s visibility, engage your audience, and drive meaningful results through strategic and high-quality content.</p>
                </div>
               )}

                <Link className="moreless-button" onClick={toggleMoreText}>
                  {showMore ? 'Read less... ' : 'Read more...'}
                </Link>

                <div className='d-flex mt-4'>
                  <a href='tel: 8264420387' className='btn-bt'> <i className="fa-solid fa-phone"></i> (+91) 8264420387 </a>
                </div>

              </div>
            </div>
            <div className="col-lg-6  order-1 order-lg-2 py-5">
              <h1 className='fw-bold'>Content Writing Services: Words That Work Wonders</h1>
              <p>Content writing services are in high demand as businesses seek to connect with their audience, enhance their online presence, and achieve their marketing goals through compelling and strategic content. Grintech provides comprehensive content marketing services designed to elevate your brand and drive engagement.</p>
              <Form />
            </div>
          </div>
        </div>
      </section>

      <Commonsection name="Content Writing" classname="blueback" />

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
      <Footer />
    </>

  )
}

export default Market
