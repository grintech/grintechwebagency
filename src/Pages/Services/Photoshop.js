import {React, useState} from 'react'

import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Commonsection from './Commonsection';
import { Link } from 'react-router-dom';

import Form from "./Form";
import ClientReview from '../../Components/Reviews/ClientReview';

import Client2 from '../Main-page/Client2';
import Client3 from '../Main-page/Client3';
import { Icon } from '@iconify/react';
import data from '../OurWorks/data';
import data1 from '../OurWorks/data1';
import { Helmet } from 'react-helmet';

const Photoshop = () => {

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
        <title>Adobe Photoshop/ Adobe Illustrator Services</title>
        <meta name="description" content="Grintech offers Adobe Illustrator and Photoshop. Using Photoshop and Adobe Illustrator to Boost Visual Creativity: Unlocking Graphic Design's Potential " />
        <link rel='canonical' href='/our-services-photoshop'  />
 </Helmet>


 <Header/>

 <section className="dev-passion mt-4 mb-1">
     <div className="container d-none d-lg-block py-3">
         <div className="row">
             <div className="col-lg-6 order-2 order-lg-1 ">
                 <div className="passion">     
                 <div className=''>               
                 <h1>Adobe Photoshop/ Adobe Illustrator</h1>
                     <p><b>Save cost and time with Grintech Web Agency. </b></p>
                     <p>Our team of Adobe Photoshop specialists has over a decade of experience. Grintech Web Agency provides you with the greatest expert Photoshop services since we can fix any issue in your image/ Design, no matter how minor. If you want to employ a Photoshop specialist?  Locate Photoshop experts near me. We are the top firm offering Photoshop editing services. </p>

                     <h3>Adobe Photoshop Services/ And Adobe Illustrator Services Grintech Providing.</h3>
                     1. Photo Editing and Retouching: <br />
                      2. Graphic Design: <br />
                      3. Compositing: <br />
                      4. Digital Painting and Illustration: <br />
                      5. Typography: <br />
                      6. Mockups and Prototyping: <br />

                        
                    </div>
                    
                   {showMore && (
                      <div className='moretext mt-3'>
                        <h3>Grintech Provides Adobe Illustrator Services:</h3>
                        1. Vector Illustration: <br />
                        2. Logo Design: <br />
                        3. Print Design: <br />
                        4. Infographics: <br />
                        5. Typography and Lettering: <br />
                        6. Pattern and Textile Design: <br />
                        7. Icon Design: <br />

                        </div>
                   )}
                        
                    <Link className="moreless-button py-2" onClick={toggleMoreText}>
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
                   
                 <h3>Adobe Photoshop Services/ And Adobe Illustrator Services Grintech Providing.</h3>
                     1. Photo Editing and Retouching: <br />
                      2. Graphic Design: <br />
                      3. Compositing: <br />
                      4. Digital Painting and Illustration: <br />
                      5. Typography: <br />
                      6. Mockups and Prototyping: <br />
                        
                    </div>
                    
                   {showMore && (
                      <div className='moretext mt-3'>
                        <h3>Grintech Provides Adobe Illustrator Services:</h3>
                        1. Vector Illustration: <br />
                        2. Logo Design: <br />
                        3. Print Design: <br />
                        4. Infographics: <br />
                        5. Typography and Lettering: <br />
                        6. Pattern and Textile Design: <br />
                        7. Icon Design: <br />

                        </div>
                   )}
                        
                    <Link className="moreless-button py-2" onClick={toggleMoreText}>
                    {showMore ? 'Read less... ' : 'Read more...'}
                 </Link> 

                   <div className='d-flex mt-4'>
                   <a href='tel: 8264420387' className='btn-bt'> <i className="fa-solid fa-phone"></i> (+91) 8264420387 </a>
                  </div>

                 </div>
             </div>
             <div className="col-lg-6 order-1 order-lg-2 py-5">
             <h1 className='fw-bold'>Adobe Photoshop/ Adobe Illustrator</h1>
              <p>Save cost and time with Grintech Web Agency. </p>
                     <p>Our team of Adobe Photoshop specialists has over a decade of experience. Grintech Web Agency provides you with the greatest expert Photoshop services since we can fix any issue in your image/ Design, no matter how minor. If you want to employ a Photoshop specialist?  Locate Photoshop experts near me. We are the top firm offering Photoshop editing services. </p>

             <Form />
             </div>
         </div>
     </div>
             
 </section>

 <Commonsection name="Adobe Photoshop/ Adobe Illustrator" technology="Designing" classname="greyback" />


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

export default Photoshop
