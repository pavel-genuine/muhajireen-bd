import React, { Fragment, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';


import Logo from '/public/images/logo.png'
import Contactpage from '../../components/Contactpage/Contactpage'
import Navbar from "../../components/Navbar/Navbar";

import Footer from "../../components/footer/Footer";
import WAIcon from "../../components/WAIcon/WAIcon";

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
);

const ContactPage = () => {
    const [width, setWidth] = useState(0);


    useEffect(() => {
        setWidth(window.innerWidth);

    });
    return (
        <Fragment>
            <Navbar Logo={Logo}
            />
            <ScrollTextAnimation />
            <div style={{ marginTop: width > 768 ? "" : "30px" }}>

            </div>
            <Contactpage />
            <section className="wpo-contact-map-section">
                <h2 className="hidden">Contact map</h2>
                <div className="wpo-contact-map">
                    <iframe title='map'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.69565749174!2d90.34598227602541!3d23.86493858436831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c32ad6d2134d%3A0x550a35af76ffe8f2!2sUttara%20View!5e0!3m2!1sen!2sbd!4v1793527999403!5m2!1sen!2sbd" allowFullScreen></iframe>
                </div>
            </section>

            <Footer />
            {/* <Scrollbar /> */}
            <WAIcon></WAIcon>

        </Fragment>
    )
};
export default ContactPage;





