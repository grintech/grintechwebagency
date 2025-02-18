import { React, useState } from 'react'
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
            <title>Best Market Research Services in 2024- Grintech Web Agency</title>
            <meta name="description" content="Grintech Web Agency provides you Best Market Research Services in 2024-  Unveiling the Power of Market Research: Informed Insights for Business Success." />
            <link rel='canonical' href='/our-services-market-research' />
         </Helmet>

      <Header />

      <section className="dev-passion mt-4 mb-1">
        <div className="container d-none d-lg-block py-3">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="passion">
                <h1 className='fw-bold'>Our Market Research Service: Market Insights Made Simple</h1>
                <div className=''>
                  <p >Know Your Market, Grow Your Business with Grintech’s Market Research Service. We dive deep into market trends, customer behaviour, and competitive landscapes to give you the insights you need to make informed decisions. With our comprehensive research, you'll understand your audience better, spot opportunities, and drive growth with confidence.</p>

                  <h2>What Grintech provides with its Market Research service:</h2>
                  <ul className="p-0">
                  <li className='mb-2'><b>1. Industry Analysis:</b> Comprehensive evaluation of industry trends, opportunities, and challenges to help you stay ahead of the competition.</li>
                    <li className='mb-2'><b>2. Customer Insights:</b> In-depth analysis of customer behaviour, preferences, and needs to tailor your offerings and marketing strategies effectively.</li>
                    <li className='mb-2'><b>3. Competitive Analysis:</b> Detailed examination of your competitors' strengths, weaknesses, and market positioning to identify strategic advantages.</li>

                    <li className='mb-2'><b>4. Market Segmentation:</b> Identification and profiling of different market segments to target the most relevant audiences with customized approaches.</li>
                    <li className='mb-2'><b>5. Trend Identification:</b> Spotting emerging trends and shifts in the market to adapt your strategies and capitalize on new opportunities.</li> 
                  </ul>
                 
                </div>
                {showMore && (
                  <div className='more-text'>
                    <ul className="p-0">
                      <li className='mb-2'><b>6. Surveys & Focus Groups:</b> Conducting surveys and focus groups to gather direct feedback from your target audience and gain actionable insights.</li>
                      <li className='mb-2'><b>7. Data Analysis & Reporting:</b> Providing clear and actionable reports with data-driven insights to guide your business decisions and strategy development.</li>
                      <li className='mb-2'><b>8. Strategic Recommendations:</b> Offering expert advice based on research findings to help you refine your business strategies and drive growth.</li>
                    </ul>
                    <p>Grintech Web Agency’s  Market Research service is designed to equip you with the knowledge and insights needed to make informed decisions and succeed in your market.</p>
                  </div>
                )}
                <Link className="moreless-button" onClick={toggleMoreText}>
                  {showMore ? 'Read less... ' : 'Read more...'}
                </Link>

                <div className='d-flex mt-4'>
                  <a href='tel: 8264420387' className='btn-bt'> <i className="fa-solid fa-phone"></i> (+1) 833232-6622 </a>
                </div>

              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 py-5">
              <Form />
            </div>
          </div>
        </div>
        <div className="container d-block d-lg-none">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="passion">

                <div className=''>
                  <h2>What Grintech provides with its Market Research service:</h2>
                  <ul className="p-0">
                  <li className='mb-2'><b>1. Industry Analysis:</b> Comprehensive evaluation of industry trends, opportunities, and challenges to help you stay ahead of the competition.</li>
                    <li className='mb-2'><b>2. Customer Insights:</b> In-depth analysis of customer behaviour, preferences, and needs to tailor your offerings and marketing strategies effectively.</li>
                    <li className='mb-2'><b>3. Competitive Analysis:</b> Detailed examination of your competitors' strengths, weaknesses, and market positioning to identify strategic advantages.</li>

                    <li className='mb-2'><b>4. Market Segmentation:</b> Identification and profiling of different market segments to target the most relevant audiences with customized approaches.</li>
                    <li className='mb-2'><b>5. Trend Identification:</b> Spotting emerging trends and shifts in the market to adapt your strategies and capitalize on new opportunities.</li> 
                  </ul>
                 
                </div>
                {showMore && (
                  <div className='more-text'>
                    <ul className="p-0">
                      <li className='mb-2'><b>6. Surveys & Focus Groups:</b> Conducting surveys and focus groups to gather direct feedback from your target audience and gain actionable insights.</li>
                      <li className='mb-2'><b>7. Data Analysis & Reporting:</b> Providing clear and actionable reports with data-driven insights to guide your business decisions and strategy development.</li>
                      <li className='mb-2'><b>8. Strategic Recommendations:</b> Offering expert advice based on research findings to help you refine your business strategies and drive growth.</li>
                    </ul>
                    <p>Grintech Web Agency’s  Market Research service is designed to equip you with the knowledge and insights needed to make informed decisions and succeed in your market.</p>
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
            <div className="col-lg-6 order-1 order-lg-2 py-5">
            <h1 className='fw-bold'>Our Market Research Service: Market Insights Made Simple</h1>
              <p >Know Your Market, Grow Your Business with Grintech’s Market Research Service. We dive deep into market trends, customer behaviour, and competitive landscapes to give you the insights you need to make informed decisions. With our comprehensive research, you'll understand your audience better, spot opportunities, and drive growth with confidence.</p>
              <Form />
            </div>
          </div>
        </div>

      </section>

      <Commonsection name="Market Research" technology="Marketing" classname="greyback" />

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
