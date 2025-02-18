import React from 'react'
import { Link } from "react-router-dom";
import './header.css';
import logo from "../../assets/images/mainlogo.png";
import { Icon } from '@iconify/react';

const Header = () => {
    return (

        <section id="header">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand fw-bold" href="#">
                         <img src={logo} className="img-fluid main_logo" alt='logo' />
                    </Link>

                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">




                            <li className="nav-item">
                                <Link to="/about" className="nav-link" >About</Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/our-works">Portfolio</Link>
                            </li>



                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs"> Blogs</Link>
                            </li>



                            <li className="nav-item">
                                <Link className="nav-link" to="/careers">Career</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery">Gallery</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/server">Server </Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/meeting">Schedule Meeting</Link>
                            </li> */}

                        </ul>
                        <form className="d-flex">
                            <Link to="/contact"> <button type="button" className="btn btn-contact">Contact Us</button></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Header
