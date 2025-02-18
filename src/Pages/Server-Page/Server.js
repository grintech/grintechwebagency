// import React from 'react'
// import Header from '../../Components/Header/Header'
// import './server.css'
// import Footer from '../../Components/Footer/Footer'

// const Server = () => {
//   return (
//   <>
//     <Header />
//     <section className="server-hero ">
//    <div className="container d-flex flex-column justify-content-center align-items-center">
//    <h1 className='text-center'>Affordable Simple <br/> Convenient Hosting Provider</h1>
//     <ul class="section_button d-flex flex-wrap">
//     <li><button class="btn btn-pill">Get Started</button></li>
//     <li><button class="btn btn-blue btn-pill">Learn More</button></li>
//     </ul>
//    </div>
//     {/* <img src="	https://templates.hibootstrap.com/blim/default/assets/images/header-clipart-1.png" alt="" /> */}
//     </section>
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#177a0e" fill-opacity="1" d="M0,224L34.3,197.3C68.6,171,137,117,206,122.7C274.3,128,343,192,411,202.7C480,213,549,171,617,133.3C685.7,96,754,64,823,69.3C891.4,75,960,117,1029,122.7C1097.1,128,1166,96,1234,80C1302.9,64,1371,64,1406,64L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>

//     <section className="server_services">
//       <div className="container">
//         <div className="col-lg-6 mx-auto text-center section-title">
//         <small>Our services</small>
//         <h2>Services we can help</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis</p>
//         </div>

//         <div class="row mt-5">
//         <div class="col-sm-12 col-lg-6">
//         <div class="feature-item fluid-height">
//         <div class="feature-item-inner full-height">
//         <div class="feature-item-thumb">
//         <i class="flaticon-cloud-computing"></i>
//         </div>
//         <div class="feature-item-content">
//         <h3>Dedicated Hosting</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elt,tium, totam rem aperiam, eaque ipsa quae ab illo invent ut labore et dolore magnam luptatem.</p>
//         <p><a href="dedicated-hosting.html" class="gradient-text">Learn More
//            <span><i class="fa-solid fa-chevron-right"></i></span>
//            </a></p>
//         </div>
//         </div>
//         </div>
//         </div>
//         <div class="col-sm-12 col-lg-6">
//         <div class="feature-item fluid-height">
//         <div class="feature-item-inner full-height">
//         <div class="feature-item-thumb">
//         <i class="flaticon-cloud-hosting"></i>
//         </div>
//         <div class="feature-item-content">
//         <h3>Cloud Hosting</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elt,tium, totam rem aperiam, eaque ipsa quae ab illo invent ut labore et dolore magnam luptatem.</p>
//         <p><a href="cloud-hosting.html" class="gradient-text">Learn More <span><i class="fa-solid fa-chevron-right"></i></span></a></p>
//         </div>
//         </div>
//         </div>
//         </div>
//         <div class="col-sm-12 col-lg-6">
//         <div class="feature-item fluid-height">
//         <div class="feature-item-inner full-height">
//         <div class="feature-item-thumb">
//         <i class="flaticon-hosting-1"></i>
//         </div>
//         <div class="feature-item-content">
//         <h3>VPS Hosting</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elt,tium, totam rem aperiam, eaque ipsa quae ab illo invent ut labore et dolore magnam luptatem.</p>
//         <p><a href="vps-hosting.html" class="gradient-text">Learn More <span><i class="fa-solid fa-chevron-right"></i></span></a></p>
//         </div>
//         </div>
//         </div>
//         </div>
//         <div class="col-sm-12 col-lg-6">
//         <div class="feature-item fluid-height">
//         <div class="feature-item-inner full-height">
//         <div class="feature-item-thumb">
//         <i class="flaticon-hosting-services-1"></i>
//         </div>
//         <div class="feature-item-content">
//         <h3>WordPress Hosting</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elt,tium, totam rem aperiam, eaque ipsa quae ab illo invent ut labore et dolore magnam luptatem.</p>
//         <p><a href="wordpress-hosting.html" class="gradient-text">Learn More <span><i class="fa-solid fa-chevron-right"></i></span></a></p>
//         </div>
//         </div>
//         </div>
//         </div>
//         <div class="col-sm-12 col-lg-6">
//         <div class="feature-item fluid-height">
//         <div class="feature-item-inner full-height">
//         <div class="feature-item-thumb">
//         <i class="flaticon-domain"></i>
//         </div>
//         <div class="feature-item-content">
//         <h3>Domain Name</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elt,tium, totam rem aperiam, eaque ipsa quae ab illo invent ut labore et dolore magnam luptatem.</p>
//         <p><a href="domain-name.html" class="gradient-text">Learn More <span><i class="fa-solid fa-chevron-right"></i></span></a></p>
//         </div>
//         </div>
//         </div>
//         </div>
//         <div class="col-sm-12 col-lg-6">
//         <div class="feature-item fluid-height">
//         <div class="feature-item-inner full-height">
//         <div class="feature-item-thumb">
//         <i class="flaticon-database"></i>
//         </div>
//         <div class="feature-item-content">
//         <h3>Shared Hosting</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elt,tium, totam rem aperiam, eaque ipsa quae ab illo invent ut labore et dolore magnam luptatem.</p>
//         <p><a href="shared-hosting.html" class="gradient-text">Learn More <span><i class="fa-solid fa-chevron-right"></i></span></a></p>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>

//       </div>
//     </section>

//     <section className="server_services pt-5">
//       <div className="container">
//         <div className="col-lg-6 mx-auto text-center section-title">
//         <small>Why best</small>
//         <h2>Why choose us</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis</p>
//         </div>

//         <div class="row">
//         <div class="col-sm-12 col-md-6 col-lg-4">
//         <div class="box-card fluid-height">
//         <div class="box-card-inner box-card-inner-2 full-height border-around">
//         <div class="box-number"><span>01</span></div>
//         <div class="box-card-content text-center">
//         <div class="box-card-thumb">
//         <img src="https://templates.hibootstrap.com/blim/default/assets/images/choose-2.png" />
//         </div>
//         <div class="box-card-details">
//         <h3>Dedicated support</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elt ttotam rem aperiam dolore magnam luptatem.</p>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         <div class="col-sm-12 col-md-6 col-lg-4">
//         <div class="box-card fluid-height">
//         <div class="box-card-inner box-card-inner-2 full-height border-around">
//         <div class="box-number"><span>02</span></div>
//         <div class="box-card-content text-center">
//         <div class="box-card-thumb">
//         <img src="https://templates.hibootstrap.com/blim/default/assets/images/choose-2.png" alt="choose-us" />
//         </div>
//         <div class="box-card-details">
//         <h3>Data security</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elt ttotam rem aperiam dolore magnam luptatem.</p>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         <div class="col-sm-12 col-md-6 col-lg-4 offset-md-3 offset-lg-0">
//         <div class="box-card fluid-height">
//         <div class="box-card-inner box-card-inner-2 full-height border-around">
//         <div class="box-number"><span>03</span></div>
//         <div class="box-card-content text-center">
//         <div class="box-card-thumb">
//         <img src="https://templates.hibootstrap.com/blim/default/assets/images/choose-3.png" alt="choose-us" />
//         </div>
//         <div class="box-card-details">
//         <h3>Data migration</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elt ttotam rem aperiam dolore magnam luptatem.</p>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>

       

//       </div>
//     </section>
//     <section className="support_section">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6">
//             <div className="about-content-item">
//               <div class="about-text">
//                 <h3>24/7 Expert Hosting Support for Our Customers</h3>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
//               </div>
//               <div className="mt-3 d-flex align-items-center about-list-content  ">
//                 <i className="fa-solid fa-phone"></i>
//                 <div>
//                 {/* <h3>Call for support</h3> */}
//                  <p className='m-0'><a href="tel:+91 - 9876543210">+1 (833) 232-6622</a></p>
//                 </div>
//               </div>
             
//                <a class="btn btn-action mt-4" href="/contact">Book Free Consultation</a>

//               </div>
//           </div>
//           <div className="col-lg-6">
//             <img className='w-100' src="https://templates.hibootstrap.com/blim/default/assets/images/support-shape.png" alt="" />
//           </div>
//         </div>
//       </div>
//     </section>
//     <section className="banner_section">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6">
//             <img src="https://templates.hibootstrap.com/blim/default/assets/images/platform.png" className='w-100' alt="" />
//           </div>
//           <div className="col-lg-6">
//             <h3 className='about-text'>Dedicated Client-End Support</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis </p>
//             <ul className="p-0">
//               <li className='d-flex align-items-baseline'>
//                 <i className="fa-solid fa-check me-3"></i>
//                 <div>
//                   <h3>Security and faster Server</h3>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
//                 </div>
//               </li>
//               <li className='d-flex align-items-baseline'>
//                 <i className="fa-solid fa-check me-3"></i>
//                 <div>
//                 <h3>24/7 Online Offline Support</h3>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
//                 </div>
//               </li>
//               <li className='d-flex align-items-baseline'>
//                 <i className="fa-solid fa-check me-3"></i>
//                 <div>
//                 <h3>Better Speed With Full Panel</h3>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>

   

//     <section className="server_pricing pt-5 pb-5">
//       <div className="container">
//         <div className="col-lg-6 mx-auto text-center section-title">
//         <small>Pricing plan</small>
//         <h2>Web hosting prices</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
//         </div>

//         <div className="row">
//           <div class="col-sm-12 col-md-12 col-lg-4 p-0 default-pricing-mt p-0">
//           <div class="pricing-item default-pricing h-100">
//           <div class="pricing-item-header blue-gradient">
//           <h3>Regular</h3>
//           <div class="pricing-header-icon">
//           <div class="pricing-icon-inner">
//             <img src="/img/hosting-services.png" className='w-100' alt="" />
//           </div>
//           </div>
//           </div>
//           <div class="pricing-item-amount bg-off-white">
//           <p>Starting at</p>
//           <h4 class="pricing-item-amount-number"><small>$</small>40.99<span>/Month</span></h4>
//           </div>
//           <div class="pricing-item-body">
//           <ul class="pricing-body-list p-0">
//           <li>
//           <i className="fa-solid fa-check"></i>
//           26 GB bandwidth
//           <span class="pricing-info-icon" data-bs-toggle="tooltip" data-placement="bottom" aria-label="26 GB bandwidth" data-bs-original-title="26 GB bandwidth"><i class="fa-solid fa-info-circle"></i></span>
//           </li>
//           <li>
//           <i className="fa-solid fa-check"></i>
//           1 website
//           <span class="pricing-info-icon" data-bs-toggle="tooltip" data-placement="bottom" aria-label="26 GB bandwidth" data-bs-original-title="26 GB bandwidth"><i class="fa-solid fa-info-circle"></i></span>
//           </li>
//           <li>
//           <i className="fa-solid fa-check"></i>
//           Unmetered websites
//           <span class="pricing-info-icon" data-bs-toggle="tooltip" data-placement="bottom" aria-label="26 GB bandwidth" data-bs-original-title="26 GB bandwidth"><i class="fa-solid fa-info-circle"></i></span>
//           </li>
//           <li>
//           <i className="fa-solid fa-check"></i>
//           Professional email 1-year trial
//           <span class="pricing-info-icon" data-bs-toggle="tooltip" data-placement="bottom" aria-label="26 GB bandwidth" data-bs-original-title="26 GB bandwidth"><i class="fa-solid fa-info-circle"></i></span>
//           </li>
         
//           </ul>
//           <a href="cart.html" class="btn btn-gradient btn-pill">Buy Now</a>
//           </div>
//           </div>
//           </div>
//           <div class="col-sm-12 col-md-12 col-lg-4 p-0 default-pricing-mt p-0">
//           <div class="pricing-item default-pricing h-100">
//           <div class="pricing-item-header blue-gradient">
//           <h3>Standard</h3>
//           <div class="pricing-header-icon">
//           <div class="pricing-icon-inner">
//           <i class="flaticon-web-hosting"></i>
//           </div>
//           </div>
//           </div>
//           <div class="pricing-item-amount bg-off-white">
//           <p>Starting at</p>
//           <h4 class="pricing-item-amount-number"><small>$</small>55.99<span>/Month</span></h4>
//           </div>
//           <div class="pricing-item-body">
//           <ul class="pricing-body-list p-0">
//           <li>
//           <i className="fa-solid fa-check"></i>
//           30 GB bandwidth
//           <span class="pricing-info-icon"><i class="fa-solid fa-info-circle"></i></span>
//           </li>
//           <li>
//           <i className="fa-solid fa-check"></i>
//           2 websites
//           <span class="pricing-info-icon" ><i class="fa-solid fa-info-circle"></i></span>
//           </li>
//           <li>
//           <i className="fa-solid fa-check"></i>
//           Unmetered websites
//           <span class="pricing-info-icon"><i class="fa-solid fa-info-circle"></i></span>
//           </li>
//           <li>
//           <i className="fa-solid fa-check"></i>
//           Free domain annual trial
//           <span class="pricing-info-icon"><i class="fa-solid fa-info-circle"></i></span>
//           </li>
         
//           </ul>
//           <a href="cart.html" class="btn btn-gradient btn-pill">Buy Now</a>
//           </div>
//           </div>
//           </div>
//           <div class="col-sm-12 col-md-12 col-lg-4 p-0 default-pricing-mt p-0">
//           <div class="pricing-item default-pricing h-100">
//           <div class="pricing-item-header blue-gradient">
//           <h3>Premium</h3>
//           <div class="pricing-header-icon">
//           <div class="pricing-icon-inner">
//           <i class="flaticon-web-hosting"></i>
//           </div>
//           </div>
//           </div>
//           <div class="pricing-item-amount bg-off-white">
//           <p>Starting at</p>
//           <h4 class="pricing-item-amount-number"><small>$</small>75.99<span>/Month</span></h4>
//           </div>
//           <div class="pricing-item-body">
//           <ul class="pricing-body-list p-0">
//           <li>
//           <i className="fa-solid fa-check"></i>
//           50 GB bandwidth
//           <span class="pricing-info-icon" data-bs-toggle="tooltip" data-placement="bottom" aria-label="26 GB bandwidth" data-bs-original-title="26 GB bandwidth"><i class="fa-solid fa-info-circle"></i></span>
//           </li>
//           <li>
//           <i className="fa-solid fa-check"></i>
//           5 website
//           <span class="pricing-info-icon" data-bs-toggle="tooltip" data-placement="bottom" aria-label="26 GB bandwidth" data-bs-original-title="26 GB bandwidth"><i class="fa-solid fa-info-circle"></i></span>
//           </li>
//           <li>
//           <i className="fa-solid fa-check"></i>
//           Unmetered websites
//           <span class="pricing-info-icon" data-bs-toggle="tooltip" data-placement="bottom" aria-label="26 GB bandwidth" data-bs-original-title="26 GB bandwidth"><i class="fa-solid fa-info-circle"></i></span>
//           </li>
//           <li>
//           <i className="fa-solid fa-check"></i>
//           Professional email 1-year trial
//           <span class="pricing-info-icon" data-bs-toggle="tooltip" data-placement="bottom" aria-label="26 GB bandwidth" data-bs-original-title="26 GB bandwidth"><i class="fa-solid fa-info-circle"></i></span>
//           </li>
         
//           </ul>
//           <a href="cart.html" class="btn btn-gradient btn-pill">Buy Now</a>
//           </div>
//           </div>
//           </div>
//         </div>

      

       

//       </div>
//     </section>

//     <Footer />

    
//   </>
//   )
// }

// export default Server