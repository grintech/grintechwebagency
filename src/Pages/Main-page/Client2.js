import React, { useState } from 'react'
import "../OurWorks/ourworks.css";

import data from '../OurWorks/data';
import { Link } from 'react-router-dom';

const Client2 = (props) => {



  return (
   <section className='clients'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='row'>
                                {
                                    props.sites.slice(0, 3).map((item) => {
                                        const { id, name, category } = item;

                                        const divStyle = {
                                            backgroundImage: `url(${item.img})`,
                                            
                                          };

                                        return (
                                            <div className='col-lg-4' key={item.id}>

                                                <div className="example mt-3" style={divStyle}>
                                                    <Link target='_blank' to={item.Link}>
                                                   

                                                        <div className="content">
                                                        <span className="decoration left-top"></span>
                                                        <span className="decoration left-bottom"></span>
                                                            <div className='text'>
                                                          
                                                             <img src={item.logo} className='img-fluid'></img>
                                                                <p>{item.desc}</p>
                                                                {/* <p> <Link className="content_link" to={item.Link}>Read more...</Link></p> */}
                                                                <p>Read more...</p>
                                                             
                                                            </div>
                                                            <span className="decoration right-top"></span>
                                                            <span className="decoration right-bottom"></span>

                
                                                        </div>
                                                       
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </section>

  )
}

export default Client2


