import React, { useEffect, useState } from "react";
import sanityClient from '../../sanityClient';

import "./blogpost.css";
import b1 from "../../assets/images/b1.jpg";
import b2 from "../../assets/images/b2.jpg";
import b3 from "../../assets/images/b3.jpg";
import b4 from "../../assets/images/b4.jpg";
import { Link } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';

const Blogpost = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const query = '*[_type == "post"]{..., "mainImageUrl": mainImage.asset->url}';

  //     try {
  //       const result = await sanityClient.fetch(query);
  //       setPosts(result);
  //       console.log("posts----->", result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const removeTags = (tag) => {
    return tag.replace("&#8211;", "-");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://app.grintechwebagency.com/wp-json/our-blogs/v1/blog');
        const data = await response.json();
        setPosts(data);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

      fetchData();
  }, []);

  
  return (
    <>
      <section className="home-blog bg-light latest_blog">
        <div className="container">
          <div className="row">
            <div className="blog-head  mb-4">
              <h3 className="fw-bold">Latest Blog Post</h3>
            </div>
            
             {
              posts.slice(0, 4).map((item) => (
                <div className="col-lg-3 col-md-6 col-12 mb-4" key={item.id}>
                  <Link target='_blank' to={`/blog/${item.slug}`} >
                    <div className="post-frame">
                      <img className="img-fluid tm" src={item.thumbnail} alt="blog1" />
                      <div className="post-content">
                        <h5>{removeTags(item.title)}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogpost;
