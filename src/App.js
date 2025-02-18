import React from 'react';
import { Routes, Route, Navigate , BrowserRouter as Router,  } from 'react-router-dom';
// import Header from "../src/Components/Header/Header.js";
import About from "./Pages/About/About.js"
// import Sidebar from "./Components/Sideicons/Sidebar.js";
// import Newsletter from "./Components/Newsletter/Newsletter.js";
// import Footer from "./Components/Footer/Footer.js";
import Home from "./Pages/Main-page/Home.js";
import Services from "./Pages/NewServices/Services.jsx";
import Seoservices from './Pages/Services/Seoservices.js';
import Digitalservices from './Pages/Services/Digitalservices.js';
import Blog from './Pages/BlogPage/Blog.js';
import Singleblog from './Pages/SingleblogPage/Singleblog.js';
import "./App.css";
import Contact from './Pages/Contactus/Contact.js';
import Gallery from './Pages/Gallery/Gallery.js';
import Ourworks from './Pages/OurWorks/Ourworks.js';
import Seowork from './Pages/OurWorks/Seowork.js';
import Htmlcss from './Pages/Services/Htmlcss.js';
import Reactspa from './Pages/Services/Reactspa.js';
import Photoshop from './Pages/Services/Photoshop.js';
import Figma from './Pages/Services/Figma.js';
import Laravel from './Pages/Services/Laravel.js';
import Cakephp from './Pages/Services/Cakephp.js';
import Yii from './Pages/Services/Yii.js';
import Wordpress from './Pages/Services/Wordpress.js';
import Ecommerce from './Pages/Services/Ecommerce.js';
import Javascript from './Pages/Services/Javascript.js';
import Seoservice from "./Pages/Services/Seoservice.js"
import ContentMarketing from './Pages/Services/ContentMarketing.js';
import CodeIgnitor from './Pages/Services/CodeIgnitor.js';
import CorePhp from './Pages/Services/CorePhp.js';
import ScrollToTop from "./ScrollToTop.js"
import Career from './Pages/Career/Career.js';
import Ppc from './Pages/Services/Ppc.js';
import Market from './Pages/Services/Market.js';
import Branding from './Pages/Services/Branding.js';
import Prrm from './Pages/Services/Prrm.js';
import Uiux from './Pages/Services/Uiux.js';
import Android from './Pages/Services/Android.js';
import Hybrid from './Pages/Services/Hybrid.js';
import Flutter from './Pages/Services/Flutter.js';
import Reactnative from './Pages/Services/Reactnative.js';
import Kotlin from './Pages/Services/Kotlin.js';
import Ionic from './Pages/Services/Ionic.js';
import Swift from './Pages/Services/Swift.js';
import Ios from './Pages/Services/Ios.js';
import Shopify from './Pages/Services/Shopify.js';
import Asp from './Pages/Services/Asp.js';
import SmallHeader from './Components/Header/SmallHeader.js';
import PageNotFound from './Components/PageNotFound.js';
import WebDesigning from './Pages/NewServices/WebDesigning.jsx';
import MobileAppDevelopment from './Pages/NewServices/MobileAppDevelopment.jsx';
import WebDevelopment from './Pages/NewServices/WebDevelopment.jsx';
import DigitalMarketing from './Pages/NewServices/DigitalMarketing.jsx';
// import Server from './Pages/Server-Page/Server.js';




class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
         <ScrollToTop />
         <SmallHeader />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            {/* <Route path='/web-services' element={<Services />}></Route> */}
            {/* <Route path='/seo-services' element={<Seoservices />}></Route> */}
            {/* <Route path='/digital-services' element={<Digitalservices />}></Route> */}
            <Route path='/blogs' element={<Blog />}></Route>
            <Route path='/blog/:slug' element={<Singleblog />}></Route>
            {/* <Route path='/single-blog/:slug' element={<Singleblog />}></Route> */}
            {/* <Route path='/single-blog/:id' element={<Singleblog />}></Route> */}

            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/our-works' element={<Ourworks />}></Route>
            <Route path='/seowork' element={<Seowork />}></Route>

            <Route path='/services/web-designing' element={<WebDesigning />}></Route>
            <Route path='/services/mobile-app-development' element={<MobileAppDevelopment />}></Route>
            <Route path='/services/web-development' element={<WebDevelopment />}></Route>
            <Route path='/services/digital-marketing' element={<DigitalMarketing />}></Route>

            <Route path='/our-services-html-css' element={<Htmlcss />}></Route>
            <Route path='/our-services-react' element={<Reactspa />}></Route>
            <Route path='/our-services-photoshop' element={<Photoshop />}></Route>
            <Route path='/our-services-figma' element={<Figma />}></Route>
            <Route path='/our-services-ui-ux' element={<Uiux />}></Route>
            <Route path='/our-services-laravel' element={<Laravel />}></Route>
            <Route path='/our-services-cakephp' element={<Cakephp />}></Route>
            <Route path='/our-services-codeigniter' element={<CodeIgnitor />}></Route>
            <Route path='/our-services-yii-development' element={<Yii />}></Route>
            <Route path='/our-services-wordpress' element={<Wordpress />}></Route>
            <Route path='/our-services-ecommerce-website' element={<Ecommerce />}></Route>
            <Route path='/our-services-javascript' element={<Javascript />}></Route>
            <Route path='/our-services-android' element={<Android />}></Route>
            <Route path='/our-services-hybrid' element={<Hybrid/>}></Route>
            <Route path='/our-services-flutter' element={<Flutter />}></Route>
            <Route path='/our-services-react-native' element={<Reactnative />}></Route>
            <Route path='/our-services-kotlin' element={<Kotlin />}></Route>
            <Route path='/our-services-ionic' element={<Ionic />}></Route>
            <Route path='/our-services-swift' element={<Swift />}></Route>
            <Route path='/our-services-ios-app' element={<Ios />}></Route>
          
            <Route path='/our-services-shopify' element={<Shopify />}></Route>
            <Route path='/our-services-asp' element={<Asp />}></Route>


            <Route path='/our-services-seo-smm-smo' element={<Seoservice />}></Route>
            <Route path='/our-services-ppc' element={<Ppc />}></Route>
            <Route path='/our-services-market-research' element={<Market />}></Route>
            <Route path='/our-services-branding' element={<Branding />}></Route>
            <Route path='/our-services-content-writing' element={<ContentMarketing />}></Route>
            <Route path='/our-services-content-pr-rm' element={<Prrm />}></Route>
            <Route path='/careers' element={<Career />}></Route>
            <Route path='/our-services-core-php' element={<CorePhp />}></Route>
            <Route path='/gallery' element={<Gallery />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>


            {/* <Route path='/server' element={<Server />}></Route> */}
           

            {
            /* Redirections */
            }
            <Route path="/single-blog/introduction-to-javascript-understanding-the-fundamentals-and-key-concepts-of-the-versatile-programming-language" element={<Navigate to="/blog/what-is-javascript-understanding-the-fundamentals" replace />} />
            
            <Route path="/single-blog/important-points-of-html-basics" element={<Navigate to="/blog/important-points-of-html-basics" replace />} />


                    {/* ADDED ON FRIDAY */}

        
            <Route path="/single-blog/follow-us-blogs-website-designing-innovative-minds-turning-ideas-into-reality" element={<Navigate to="/blog/website-designing-innovative-minds-turning-ideas-into-reality" replace />} />

            <Route path="/single-blog/cakephp-development-the-powerful-php-framework-for-rapid-web-development" element={<Navigate to="/blog/cakephp-development-the-powerful-php-framework-for-rapid-web-development" replace />} />

            <Route path="/single-blog/power-of-bootstrap-streamlining-web-development-with-the-feature-rich-front-end-framework" element={<Navigate to="/blog/power-of-bootstrap-streamlining-web-development-with-the-feature-rich-front-end-framework" replace />} />

            <Route path="/single-blog/promote-your-business-online-create-your-own-website" element={<Navigate to="/blog/promote-your-business-online-create-your-own-website" replace />} />
         
            <Route path="/single-blog/mastering-in-clicks-through-rate-strategies-for-improving-website-campaign-performance" element={<Navigate to="/blog/mastering-in-clicks-through-rate-strategies-for-improving-website-campaign-performance" replace />} />

            <Route path="/single-blog/what-is-the-difference-between-word-press-and-and-shopify" element={<Navigate to="/blog/what-is-the-difference-between-word-press-and-and-shopify" replace />} />

            <Route path="/single-blog/exploring-the-power-and-versatility-of-react-js-building-interactive-and-scalable-user-interfaces-with-the-popular-javascript-library" element={<Navigate to="/blog/exploring-the-power-and-versatility-of-react-js-building-interactive-and-scalable-user-interfaces-with-the-popular-javascript-library" replace />} />

            <Route path="/single-blog/why-we-are-using-figma-benefits-of-figma-design" element={<Navigate to="/blog/why-we-are-using-figma-benefits-of-figma-design" replace />} />

            <Route path="/single-blog/9-things-you-should-do-if-you-want-to-increase-your-social-media-views" element={<Navigate to="/blog/9-things-you-should-do-if-you-want-to-increase-your-social-media-views" replace />} />

            <Route path="/single-blog/empowering-your-brand-with-wordpress-expert-wordpress-development-service" element={<Navigate to="/blog/empowering-your-brand-with-wordpress-expert-wordpress-development-service" replace />} />

            <Route path="/single-blog/follow-us-blogs-creating-an-engaging-and-responsive-website-with-front-end-development" element={<Navigate to="/blog/follow-us-blogs-creating-an-engaging-and-responsive-website-with-front-end-development" replace />} />

            <Route path="/single-blog/follow-us-blogs-top-3-most-common-web-design-problems-and-their-solutions" element={<Navigate to="/blog/top-3-most-common-web-design-problems-and-their-solutions" replace />} />

            <Route path="/single-blog/find-the-right-laravel-development-company-grintech-web-agency" element={<Navigate to="/blog/find-the-right-laravel-development-company-grintech-web-agency" replace />} />

            <Route path="/single-blog/what-are-the-new-laravel-9-features-explore-latest-major-release-and-use-of-laravel" element={<Navigate to="/blog/what-are-the-new-laravel-9-features-explore-latest-major-release-and-use-of-laravel" replace />} />

            <Route path="/single-blog/working-functionality-of-css" element={<Navigate to="/blog/working-functionality-of-css" replace />} />

            <Route path="/single-blog/demo-blog" element={<Navigate to="/blogs" replace />} />

            <Route path="/single-blog/string" element={<Navigate to="/" replace />} />

            <Route path="/single-blog/website-designing-innovative-minds-turning-ideas-into-reality" element={<Navigate to="/blog/website-designing-innovative-minds-turning-ideas-into-reality" replace />} />

            <Route path="/single-blog/introduction-to-javascript-understanding-the-fundamentals-and-key-concepts-of-the-versatile-programming-language" element={<Navigate to="/blog/introduction-to-javascript-understanding-the-fundamentals-and-key-concepts-of-the-versatile-programming-language" replace />} />

            <Route path="/string" element={<Navigate to="/" replace />} />
                      
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;


