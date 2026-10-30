import React from 'react';
import Link from 'next/link';



const TopbarS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0)
    }
    return (
        <div className="topbar topbar-s2">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8 col-12">
                        <ul className="contact-info">
                            <li>
                                <a href="tel:+887869587496">
                                    Call Us:
                                    <span>+ +869 968 236</span>
                                </a>
                            </li>
                            <li>
                                <span>
                                    Email Us:
                                </span>
                                <span>bliize@gmail.com</span>
                            </li>

                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="contact-into">
                            <ul className="social-media">
                                <li><Link onClick={ClickHandler} href="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><i className="ti-linkedin"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><i className="ti-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopbarS2;