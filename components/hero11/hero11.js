import React from 'react';
import Link from 'next/link';
import heroSlider from '/public/images/slider/slide-11.jpg'
import Image from 'next/image';

const hero11 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0)
    }
    return (
        <section className="wpo-hero-static-s9" style={{ BackgroundImage: `url(${'/images/slider/slide-bg-11.jpg'})` }}>
            <div className="content">
                <h2 className="fade_bottom"><span>Where Vision Meets</span> <br />
                    Urban Excellence</h2>
                <p className="fade_bottom">Blaze is a trailblazing architecture agency renowned for its innovative approach
                    to design, where creativity meets functionality.</p>
                <div className="hero-btn fade_bottom">
                    <Link onClick={ClickHandler} href="/projects" className="shop-btn">Explore Our Work</Link>
                </div>
            </div>
            <div className="hero-right">
                <Image src={heroSlider} alt="" />
            </div>
        </section>
    );
};

export default hero11;