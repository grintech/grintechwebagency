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


const Cakephp = () => {
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
        <title>CakePHP Development Services- Secure Web Application Dev</title>
        <meta name="description" content="Discover robust web solutions with Grintech Web Agency's CakePHP development services. Our expert developers leverage CakePHP's framework for secure, scalable." />
        <link rel='canonical' href='/our-services-cakephp' />
      </Helmet>

      <Header />
      <section className="dev-passion mt-4 mb-1">
        <div className="container d-none d-lg-block py-3">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="passion">
                <h1>CakePHP</h1>
                <div className=''>
                  <p>Our skilled team of CakePHP developers has created numerous websites for diverse businesses using clear and uncomplicated coding. You can reach us as well for prompt, high-quality solutions. Create a highly customized, lightning-fast web application with Technource to add innovative and goal-oriented features to your company's website or app. CakePHP is a PHP framework designed for quick development. If you want to create and manage large web applications with extendable architecture, this is a great option.</p>

                  <h2> CakePHP Benefits:</h2>
                  <ul className='p-0'>
                    <li className='mb-2'><b>1. Rapid Development:</b> CakePHP follows the “convention over configuration” principle, enabling rapid application development.</li>
                    <li className='mb-2'><b>2. Scaffolding:</b> Automatic code generation for CRUD operations saves time.</li>
                    <li className='mb-2'><b>3. ORM and Associations:</b> CakePHP’s ORM simplifies database queries and relationships.</li>
                    <li className='mb-2'><b>4. Security:</b> Built-in security features protect against common vulnerabilities.</li>
                    <li className='mb-2'><b>5. Testing Support:</b> CakePHP provides robust testing tools for unit and integration testing.</li>
                  </ul>
                </div>

                


                {showMore && (
                    <div className='moretext'>
                    <h2>Key Features of CakePHP</h2>
                   <ul className='p-0'>
                       <li className='mb-2'><b>1. Object-Relational Mapping (ORM):</b> CakePHP’s powerful ORM system allows developers to interact with databases using PHP objects instead of writing SQL queries1.</li>
                       <li className='mb-2'><b>2. Convention Over Configuration:</b> This approach reduces the need for configuration, allowing developers to focus on building features rather than setting up the environment1.</li>
                       <li className='mb-2'><b>3. Flexible Templating:</b> CakePHP offers a fast and flexible templating system, making it easy to create dynamic and responsive web pages2.</li>
                       <li className='mb-2'><b>4. Comprehensive Testing Suite:</b> The framework includes a robust suite of testing tools, supporting unit, integration, and system testing1.</li>
                       <li className='mb-2'><b>5. Localization:</b> CakePHP supports localization, making it easier to develop applications for different languages and regions2.</li>
                       <p>For a web agency like Grintech, leveraging CakePHP can streamline your development process, enhance code maintainability, and ensure high performance for your client’s projects. By adopting CakePHP, Grintech can deliver efficient, secure, and scalable web applications, meeting the diverse needs of businesses across various industries.
                       </p>
                       
                   </ul>
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
                <h2> CakePHP Benefits:</h2>
                  <ul className='p-0'>
                    <li className='mb-2'><b>1. Rapid Development:</b> CakePHP follows the “convention over configuration” principle, enabling rapid application development.</li>
                    <li className='mb-2'><b>2. Scaffolding:</b> Automatic code generation for CRUD operations saves time.</li>
                    <li className='mb-2'><b>3. ORM and Associations:</b> CakePHP’s ORM simplifies database queries and relationships.</li>
                    <li className='mb-2'><b>4. Security:</b> Built-in security features protect against common vulnerabilities.</li>
                    <li className='mb-2'><b>5. Testing Support:</b> CakePHP provides robust testing tools for unit and integration testing.</li>
                  </ul>
                </div>


                {showMore && (
                  <div className='moretext'>
                     <h2>Key Features of CakePHP</h2>
                    <ul className='p-0'>
                        <li className='mb-2'><b>1. Object-Relational Mapping (ORM):</b> CakePHP’s powerful ORM system allows developers to interact with databases using PHP objects instead of writing SQL queries1.</li>
                        <li className='mb-2'><b>2. Convention Over Configuration:</b> This approach reduces the need for configuration, allowing developers to focus on building features rather than setting up the environment1.</li>
                        <li className='mb-2'><b>3. Flexible Templating:</b> CakePHP offers a fast and flexible templating system, making it easy to create dynamic and responsive web pages2.</li>
                        <li className='mb-2'><b>4. Comprehensive Testing Suite:</b> The framework includes a robust suite of testing tools, supporting unit, integration, and system testing1.</li>
                        <li className='mb-2'><b>5. Localization:</b> CakePHP supports localization, making it easier to develop applications for different languages and regions2.</li>
                        <p>For a web agency like Grintech, leveraging CakePHP can streamline your development process, enhance code maintainability, and ensure high performance for your client’s projects. By adopting CakePHP, Grintech can deliver efficient, secure, and scalable web applications, meeting the diverse needs of businesses across various industries.
                        </p>
                        
                    </ul>
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
              <h1>CakePHP</h1>
              <p >Our skilled team of CakePHP developers has created numerous websites for diverse businesses using clear and uncomplicated coding. You can reach us as well for prompt, high-quality solutions. Create a highly customized, lightning-fast web application with Technource to add innovative and goal-oriented features to your company's website or app. CakePHP is a PHP framework designed for quick development. If you want to create and manage large web applications with extendable architecture, this is a great option.</p>
              <Form />
            </div>
          </div>
        </div>

      </section>

      <Commonsection name="Cake PHP" technology="Developement" classname="blueback" />

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

export default Cakephp
