import React, { useState } from 'react'
import "./ourworks.css";
import data from './data';
import { Link } from 'react-router-dom';

const Client = (props) => {



    return (
        <section className='clients'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            {
                                props.sites.map((item) => {
                                    const { id, name, category } = item;

                                    const divStyle = {
                                        backgroundImage: `url(${item.img})`,

                                    };

                                    return (
                                        <div className='col-lg-3 col-md-4 col-sm-12 mb-3' key={id}>

                                            <div className="example" style={divStyle}>
                                                <Link to={item.Link} target="_blank">


                                                    <div className="content">
                                                        <span className="decoration left-top"></span>
                                                        <span className="decoration left-bottom"></span>
                                                        <div className='text'>

                                                            <img src={item.logo} className=''></img>
                                                            <p className='m-0'>{item.desc}</p>
                                                            <p className='m-0'>Read more...</p>

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

export default Client
