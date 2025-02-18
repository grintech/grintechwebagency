import React, { useEffect, useState } from 'react';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import homebanner from "../../assets/images/mainbanner.jpg";
import "./gallery.css";
import $ from "jquery";
import 'react-whatsapp-widget/dist/index.css';
import { Helmet } from 'react-helmet';

const Gallery = () => {

  useEffect(() => {
    // Use a class or id selector for better specificity and to avoid potential conflicts
    $(document).on('click', '.img-hover-box', function () {
      const imgsrc = $(this).find('input:hidden').val();
      $('.modal-body').css("background-image", `url(${imgsrc})`);
    });

    // Clean up event listeners on component unmount
    return () => {
      $(document).off('click', '.img-hover-box');
    };
  }, []);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://app.grintechwebagency.com/wp-json/our-gallery/v1/gallery');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
            <meta charSet="utf-8" />
            <title>Our Team | Meet the Experts - Grintech Web Agency</title>
            <meta name="description" content="Discover the talented individuals behind Grintech Web Agency. Meet our team of professionals dedicated to delivering web development & digital solutions." />
            <link rel='canonical' href='/gallery' />
      </Helmet>


      <Header />

      <div className="body-gallery mt-4" style={{ backgroundImage: `url(${homebanner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition:"center" }}>
        <div className="container-fluid">
          <div className="row">
            {posts.map((post, index) => (
              <div className="col-lg-3 col-sm-6 col-6 gx-0" key={post.id}>
                <div className="img-hover-box" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <input type="hidden" value={post.image} />
                  <div className="feature-img" style={{ backgroundImage: `url(${post.image})` }}></div>
                  <div className="box-title">
                    {/* <h3>{post.name}</h3> */}
                    <i className="bi bi-plus-lg"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="modal gallerymodal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content gallery-modal-content">
            <div className="modal-header gallery-modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body gallery-modal-custom"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
