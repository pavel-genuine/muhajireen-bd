import React from "react";
import Link from 'next/link';
import RollingText from "../RollingText/RollingText";
import VideoModal from "../ModalVideo/VideoModal";

import Mid from '/public/images/slider/hero-text-2.jpg'
import Mid2 from '/public/images/slider/slide-3.jpg'
import Image from "next/image";

const Hero2 = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-hero-static">
            <div className="content">
                <h1 className="fade_bottom"> Building <br />
                    Your Dream</h1>
                <h2 className="fade_bottom">Perfect Home
                    <Image src={Mid} alt="" />
                    For You
                </h2>
                <p className="fade_bottom">Blaze is a trailblazing architecture agency renowned for its innovative approach
                    to design, where
                    creativity meets functionality. </p>
                <div className="about-btn">
                    <Link onClick={ClickHandler} href="/about" className="theme-btn">
                        <RollingText text={'Explore Our Work'}/>
                    </Link>
                    <div className="video-wrap">
                        <div className="video-holder">
                            <VideoModal />
                        </div>
                        <span>Watch Videos</span>
                    </div>
                </div>
            </div>
            <div className="rigth-image">
                <Image src={Mid2} alt="" />
            </div>
        </section>
    );
};

export default Hero2;