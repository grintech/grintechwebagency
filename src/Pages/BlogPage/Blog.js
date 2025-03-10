import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import "./blog.css";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sideicons from "../../Components/Sideicons/Sidebar";
import { Link } from 'react-router-dom';
import Form from "../Services/Form";
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import { Helmet } from 'react-helmet';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://app.grintechwebagency.com/wp-json/our-blogs/v1/blog');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const decodeHTMLEntities = (str) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = str;
        return txt.value;
    };

    const stripHtmlTags = (str) => {
        if (!str) return '';
        const decodedStr = decodeHTMLEntities(str);
        return decodedStr.replace(/<[^>]*>?/gm, '');
    };

    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Grintech Blog: Web Development and Design Insights</title>
                <meta name="description" content="Explore the latest in web development and design with Grintech Blog. Get expert insights, tips, and trends to enhance your digital projects." />
                <link rel='canonical' href='/blogs' />
            </Helmet>


            <Header />
            <Sideicons />
            <WhatsAppWidget phoneNumber="8264420387" message="Hello, how can I help you?" companyName="Grintech Web Agency" />
            <section className="blog">
                <div className="container">
                    <div className="row blog_main">
                        <div className="col-lg-6 blog_main_div1">
                            <h1>Grintech Web Services</h1>
                            <p>In today's digital age, having a website that stands out is crucial for businesses to attract and retain customers. Grintech Web Agency is a leading web design company that offers expert web designing services to help businesses create responsive and engaging websites.</p>
                        </div>
                        <div className="col-lg-6">
                            <Form />
                        </div>
                    </div>
                </div>
            </section>
            <section className='blog_search py-3'>
                <div className='container'>
                    <div className='row'>
                        <h2 className="text-center mt-3 mb-4">All Blogs</h2>
                    </div>
                </div>
            </section>
            <section className='blog_post mb-4'>
                <div className='container'>
                    <div className='row'>
                        {posts.map((post) => (
                            <div key={post.id} className='col-lg-4 col-md-6 col-sm-6 mt-5'>
                                <Link target='_blank' to={`/blog/${post.slug}`} style={{ color: "black" }}>
                                    <div className='blog_post'>
                                        <img className='w-100' src={post.thumbnail} alt={post.title} />
                                        <h6 className='mt-3'>{stripHtmlTags(post.title)}</h6>
                                        <br />
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <span style={{ color: "#008bd0" }}  >Read more  <Icon icon="fluent-mdl2:forward" color="#008bd0" /></span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='relatedblog_post'>
                <div className='container'>
                    <div className='row'>
                        <h2 className="text-center mt-3 mb-4">Latest Blogs</h2>
                    </div>
                    <div className='row'>
                        {posts.slice(0, 4).map((post, index) => (
                            <div key={post.id} className='col-md-6 col-lg-3 col-sm-6 mt-4'>
                                <Link target='_blank' to={`/blog/${post.slug}`} style={{ color: "black" }}>
                                    <div className='blog_post'>
                                        <img className='w-100' src={post.thumbnail} alt={post.title} />
                                        <h6 className='mt-2'>{stripHtmlTags(post.title)}</h6>
                                        <br />
                                        <div className='d-flex justify-content-between align-items-center'>
                                            {/* <Link style={{ color: "#008bd0" }} to={`/blog/${post.slug}`} onClick={() => localStorage.setItem('itemId', index)}>Read more  <Icon icon="fluent-mdl2:forward" color="#008bd0" />
                                            </Link> */}
                                            <span className='m-0' style={{ color: "#008bd0" }}>Read more  <Icon icon="fluent-mdl2:forward" color="#008bd0" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body modal-body-custom">
                            <form action="?" method="POST">
                                <div className='d-flex justify-content-between'>
                                    <h4 className='text-center mb-3'><b style={{ fontWeight: "900" }}>Let's Discuss Your <span style={{ color: "#177a0e" }}>Project</span></b></h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className='row'>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label htmlFor="exampleInputName" className="form-label">Full Name <span className='star'>*</span></label>
                                        <input type="text" className="form-control" id="exampleInputName" />
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                                        <input type="tel" className="form-control" id="exampleInputEmail1" />
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address <span className='star'>*</span></label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Website URL</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected disabled>How we can help you?</option>
                                    <option value="1">Seo/SMM</option>
                                    <option value="2">Web Development</option>
                                    <option value="3">Web Design</option>
                                </select>
                                <div className="mb-3 mt-4">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message Here</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                                {/* <div className="g-recaptcha" data-sitekey="your_site_key"></div> */}
                                <button type="submit" className="btn" style={{ backgroundColor: "#177a0e", color: "white" }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;
