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


const Ppc = () => {
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
            <title>PPC, or Pay-Per-Click Services-  Grintech Web Agency</title>
            <meta name="description" content="The Power of PPC Advertising: Driving Targeted Traffic and Boosting Conversions. This highly targeted approach ensures that ads are seen by potential customers " />
            <link rel='canonical' href='/our-services-ppc' />
         </Helmet>

      <Header />

      <section className="dev-passion mt-4 mb-1">
        <div className="container d-none d-lg-block py-3">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="passion">
                <h1 className='fw-bold'>Pay Per Click Service That Packs a Punch</h1>
                <div className=''>
                  <p>Click Your Way to Success with Grintech’s PPC Service. Our expert team crafts targeted ad campaigns that drive instant traffic, boost conversions, and maximize your ROI. From strategic keyword selection to continuous optimization, we ensure every click counts towards your business goals. Get ready to see measurable results and grow your brand with precision-driven PPC advertising.</p>

                  <h2>PPC (Pay Per Click) Advertising</h2>
                  <h4>What Grintech provides in PPC (Pay Per Click):</h4>
                  <ul className='p-0'>
                    <li className='mb-2'><b>1. Campaign Strategy Development:</b> Creating a tailored PPC strategy that aligns with your business goals, target audience, and budget to maximize ROI.</li>
                    <li className='mb-2'><b>2. Keyword Research & Selection:</b> Identifying high-performing and cost-effective keywords that target your ideal audience, ensuring ads appear for relevant searches.</li>
                    <li className='mb-2'><b>3. Ad Creation & Optimization:</b> Designing compelling ads with attention-grabbing headlines, descriptions, and calls to action to drive clicks and conversions.</li>
                    <li className='mb-2'><b>4. Bid Management:</b> Adjusting bid strategies to ensure your ads are placed in optimal positions while maintaining cost efficiency.</li>
                    <li className='mb-2'><b>5. Landing Page Optimization:</b> Crafting and optimizing landing pages to match ad intent, enhancing user experience, and increasing conversion rates.</li>
                  </ul>
                 
                </div>

                {showMore && (
                  <div className='moretext'>
                    <ul className="p-0">
                      <li className='mb-2'><b>6. A/B Testing:</b> Continuously testing different ad elements, such as headlines, images, and calls to action, to identify the most effective combinations.</li>
                      <li className='mb-2'><b>7. Audience Targeting:</b> Utilizing advanced targeting options, including demographics, interests, location, and device types, to reach the most relevant audience.</li>
                      <li className='mb-2'><b>8. Remarketing Campaigns:</b> Implementing remarketing strategies to re-engage users who have previously visited your website, increasing the likelihood of conversions.</li>
                      <li className='mb-2'><b>9. Performance Tracking & Reporting:</b> Monitoring key metrics like click-through rates (CTR), conversion rates, cost per click (CPC), and return on ad spend (ROAS), providing detailed performance reports.</li>
                      <li className='mb-2'><b>10. Continuous Optimization:</b> Regularly refining campaigns based on performance data to improve results, reduce costs, and enhance overall ad effectiveness.</li>
                    </ul>
                    <p>These PPC services by Grintech Web Agency are designed to deliver targeted traffic, maximize conversions, and provide measurable results through strategic and data-driven paid advertising efforts.</p>
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
                  <h2>PPC (Pay Per Click) Advertising</h2>
                  <h4>What Grintech provides in PPC (Pay Per Click):</h4>
                  <ul className='p-0'>
                    <li className='mb-2'><b>1. Campaign Strategy Development:</b> Creating a tailored PPC strategy that aligns with your business goals, target audience, and budget to maximize ROI.</li>
                    <li className='mb-2'><b>2. Keyword Research & Selection:</b> Identifying high-performing and cost-effective keywords that target your ideal audience, ensuring ads appear for relevant searches.</li>
                    <li className='mb-2'><b>3. Ad Creation & Optimization:</b> Designing compelling ads with attention-grabbing headlines, descriptions, and calls to action to drive clicks and conversions.</li>
                    <li className='mb-2'><b>4. Bid Management:</b> Adjusting bid strategies to ensure your ads are placed in optimal positions while maintaining cost efficiency.</li>
                    <li className='mb-2'><b>5. Landing Page Optimization:</b> Crafting and optimizing landing pages to match ad intent, enhancing user experience, and increasing conversion rates.</li>
                  </ul>
                </div>

                {showMore && (
                  <div className='moretext'>
                  <ul className="p-0">
                      <li className='mb-2'><b>6. A/B Testing:</b> Continuously testing different ad elements, such as headlines, images, and calls to action, to identify the most effective combinations.</li>
                      <li className='mb-2'><b>7. Audience Targeting:</b> Utilizing advanced targeting options, including demographics, interests, location, and device types, to reach the most relevant audience.</li>
                      <li className='mb-2'><b>8. Remarketing Campaigns:</b> Implementing remarketing strategies to re-engage users who have previously visited your website, increasing the likelihood of conversions.</li>
                      <li className='mb-2'><b>9. Performance Tracking & Reporting:</b> Monitoring key metrics like click-through rates (CTR), conversion rates, cost per click (CPC), and return on ad spend (ROAS), providing detailed performance reports.</li>
                      <li className='mb-2'><b>10. Continuous Optimization:</b> Regularly refining campaigns based on performance data to improve results, reduce costs, and enhance overall ad effectiveness.</li>
                    </ul>
                    <p>These PPC services by Grintech Web Agency are designed to deliver targeted traffic, maximize conversions, and provide measurable results through strategic and data-driven paid advertising efforts.</p>
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
              <h1 className='fw-bold'>Pay Per Click Service That Packs a Punch</h1>
              <p>Click Your Way to Success with Grintech’s PPC Service. Our expert team crafts targeted ad campaigns that drive instant traffic, boost conversions, and maximize your ROI. From strategic keyword selection to continuous optimization, we ensure every click counts towards your business goals. Get ready to see measurable results and grow your brand with precision-driven PPC advertising.</p>

              <Form />
            </div>
          </div>
        </div>

      </section>

      <Commonsection name="Pay Per Click " technology="Marketing" classname="blueback" />


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

export default Ppc
