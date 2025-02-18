import {React, useState} from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from 'react-router-dom';

import Commonsection from './Commonsection';
import Form from "./Form";
import ClientReview from '../../Components/Reviews/ClientReview';

import Client2 from '../Main-page/Client2';
import Client3 from '../Main-page/Client3';
import { Icon } from '@iconify/react';
import data from '../OurWorks/data';
import data1 from '../OurWorks/data1';
import { Helmet } from 'react-helmet';

const Uiux = () => {

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
        <title>Expert UI/UX Design Services - Grintech Web Agency</title>
        <meta name="description" content="With the help of our skilled UI/UX design services, transform your online presence. Our group designs aesthetically pleasing and intuitive user interfaces. " />
        <link rel='canonical' href='/our-services-ui-ux'  />
      
  </Helmet>

 <Header/>

 <section className="dev-passion mt-4 mb-1">
     <div className="container d-none d-lg-block py-3">
         <div className="row">
             <div className="col-lg-6 order-2 order-lg-1">
                 <div className="passion">
                    <h1>On-Demand UI/UX Design Teams:</h1>
                    <p>UI UX design service at Grintech Web Agency is dedicated to creating visually stunning user interface designs and highly intuitive interfaces that provide an exceptional user experience. We blend creativity with functionality to design apps and websites that are not only beautiful but also user-friendly and efficient.
                    </p>
                     <div className=''>
                   
                     <h2>Affordable UI/UX Design Services Grintech offers:</h2>
                     <ul className='p-0'>
                      <li>
                        <b>1. User-Centered Design</b>
                        <p> We focus on understanding the user's needs, behaviors, and preferences to create designs that are easy to navigate and engaging.</p>
                      </li>
                      <li>
                        <b>2. Responsive and Adaptive Design</b>
                        <p> Our designs are optimized for all devices and screen sizes, ensuring a seamless experience across desktops, tablets, and smartphones.
                        </p>
                      </li>
                      <li>
                        <b>3. Innovative and Modern Aesthetics</b>
                        <p> We stay updated with the latest design trends and technologies to deliver modern and innovative solutions that stand out.
                        </p>
                      </li>
                     
                      {showMore && (
                       <>
                        <li>
                        <b>4. Interaction Design</b>
                        <p> Our designs are optimized for all devices and screen sizes, ensuring a seamless experience across desktops, tablets, and smartphones.
                        </p>
                      </li>
                         <li>
                         <b>5. Usability Testing</b>
                         <p>Rigorous usability testing to identify and rectify any potential issues, ensuring the final product is intuitive and user-friendly.
                         </p>
                       </li>
                         <li>
                         <b>6. Brand Consistency</b>
                         <p>We ensure the design reflects your brand's identity and values, creating a cohesive and recognizable presence. <br />
                         With our UI/UX design service, you can expect a product that looks great and delivers a superior user experience, driving higher engagement and satisfaction.

                         </p>
                       </li>
                       </>
                      )}
                     </ul>
                   
                     </div>

                     
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
                     <h2>Affordable UI/UX Design Services Grintech offers:</h2>
                     <ul className='p-0'>
                      <li>
                        <b>1. User-Centered Design</b>
                        <p> We focus on understanding the user's needs, behaviors, and preferences to create designs that are easy to navigate and engaging.</p>
                      </li>
                      <li>
                        <b>2. Responsive and Adaptive Design</b>
                        <p> Our designs are optimized for all devices and screen sizes, ensuring a seamless experience across desktops, tablets, and smartphones.
                        </p>
                      </li>
                      <li>
                        <b>3. Innovative and Modern Aesthetics</b>
                        <p> We stay updated with the latest design trends and technologies to deliver modern and innovative solutions that stand out.
                        </p>
                      </li>
                     
                      {showMore && (
                       <>
                        <li>
                        <b>4. Interaction Design</b>
                        <p> Our designs are optimized for all devices and screen sizes, ensuring a seamless experience across desktops, tablets, and smartphones.
                        </p>
                      </li>
                         <li>
                         <b>5. Usability Testing</b>
                         <p>Rigorous usability testing to identify and rectify any potential issues, ensuring the final product is intuitive and user-friendly.
                         </p>
                       </li>
                         <li>
                         <b>6. Brand Consistency</b>
                         <p>We ensure the design reflects your brand's identity and values, creating a cohesive and recognizable presence. <br />
                         With our UI/UX design service, you can expect a product that looks great and delivers a superior user experience, driving higher engagement and satisfaction.

                         </p>
                       </li>
                       </>
                      )}
                     </ul>
                     </div>

                  

                    <Link className="moreless-button" onClick={toggleMoreText}>
                       {showMore ? 'Read less... ' : 'Read more...'}
                    </Link>           
                    
                     <div className='d-flex mt-4'>
                   <a href='tel: 8264420387' className='btn-bt'> <i className="fa-solid fa-phone"></i> (+91) 8264420387 </a>
                  </div>

                </div>
             </div>
             
             <div className="col-lg-6 order-1 order-lg-2 py-5">
                <h1 className='fw-bold'>On-Demand UI/UX Design Teams:</h1>
                    <p>UI UX design service at Grintech Web Agency is dedicated to creating visually stunning user interface designs and highly intuitive interfaces that provide an exceptional user experience. We blend creativity with functionality to design apps and websites that are not only beautiful but also user-friendly and efficient.
                    </p>
                <Form />
             </div>
         </div>
     </div>                

 </section>

 <Commonsection name="UI / UX" technology="Designing" classname="blueback"/>

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

 <Footer/>  
 </>


  )
}

export default Uiux
