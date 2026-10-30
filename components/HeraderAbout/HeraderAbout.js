import React, { useState } from 'react';

import Abouti from '/public/images/btn-about.png';
import logo from '/public/images/logo-2.svg';


const HeraderAbout = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
        closeProfile();
    }

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };
    const closeProfile = () => {
        setIsProfileOpen(false);
    };

    return (

        <div className="mini-cart">
            <button className="cart-toggle-btn" onClick={toggleProfile}>
                <img src={Abouti} alt="" />
            </button>
            <div className={`mini-cart-content ${isProfileOpen ? 'mini-cart-content-toggle' : ""}`}>
                <button className="mini-cart-close"><i className="ti-close" onClick={closeProfile}></i></button>
                <div className="mini-cart-items">
                    <a href="index.html"><img src={logo} alt="" /></a>
                    <h2>Get in Touch</h2>
                    <p> If you
                        are going to use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <div className="mini-cart-item">
                        <div className="icon">
                            <i className="flaticon-phone-call"></i>
                        </div>
                        <div className="contact">
                            <span>Phone</span>
                            <h6><a href="tel:+991-7636844563">+991 - 763 684 4563</a></h6>
                        </div>
                    </div>
                    <div className="mini-cart-item">
                        <div className="icon">
                            <i className="flaticon-email"></i>
                        </div>
                        <div className="contact">
                            <span>Email Now</span>
                            <h6>pixor@gmail.com</h6>
                        </div>
                    </div>
                    <div className="mini-cart-item">
                        <div className="icon">
                            <i className="flaticon-placeholder"></i>
                        </div>
                        <div className="contact">
                            <span>Canada Office</span>
                            <h6>Canada City, Office-02, Road-11, House-3B/B, Section-H</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HeraderAbout;

