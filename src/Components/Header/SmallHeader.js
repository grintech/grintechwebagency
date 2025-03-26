import React from 'react';
import logo from "../../assets/images/mainlogo.png";
import { Link } from 'react-router-dom';

const SmallHeader = () => {
    // Function to close the offcanvas
    const handleLinkClick = () => {
        const offcanvasElement = document.getElementById('offcanvasNavbar');
        if (offcanvasElement && window.bootstrap) {
            const offcanvasInstance = window.bootstrap.Offcanvas.getInstance(offcanvasElement) || new window.bootstrap.Offcanvas(offcanvasElement);
            offcanvasInstance.hide();
        }
    };

    return (
        <>
            <div id='small_header' className='small_header'>
                <nav className="navbar bg-white fixed-top">
                    <div className="container">
                        <Link className="navbar-brand fw-bold" to='/'>
                            <img src={logo} className="img-fluid main_logo" alt='logo' />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                    <Link className="navbar-brand fw-bold" to='/' onClick={handleLinkClick}>
                                        <img src={logo} className="img-fluid main_logo" alt='logo' />
                                    </Link>
                                </h5>
                                <button type="button" className="btn-close fa fa-xmark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link" onClick={handleLinkClick}>About</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/services" className="nav-link" onClick={handleLinkClick}>Services</Link>
                                    </li>
                                   
                                   
                                     <li className="nav-item">
                                    <Link onClick={handleLinkClick} to="/our-works" className="nav-link" >Portfolio</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link onClick={handleLinkClick} to="/blogs" className="nav-link" >Blogs</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link onClick={handleLinkClick} to="/careers" className="nav-link" >Career</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link onClick={handleLinkClick} to="/gallery" className="nav-link" >Gallery</Link>
                                    </li>
                                    <li className="nav-item mt-2">
                                    <Link onClick={handleLinkClick} to="/contact"> <button type="button" className="btn btn-contact">Contact Us</button></Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default SmallHeader;
