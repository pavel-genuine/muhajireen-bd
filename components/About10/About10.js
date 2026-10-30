import React from 'react';
import VideoModal from '../ModalVideo/VideoModal';
import Abimg from '/public/images/about/about-9/1.jpg';
import Link from 'next/link';
import Image from 'next/image';

const About10 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0)
    }

    return (
        <section className="wpo-about-section-s15 section-padding">
            <div className="wraper">
                <div className="about-left">
                    <Image src={Abimg} alt="" />
                </div>
                <div className="about-right">
                    <div className="content">
                        <h3>About Me</h3>
                        <h2 className="fade_bottom">I Am Designing Spaces You'll Love Coming Home To</h2>
                        <p className="fade_bottom">Blaze is a trailblazing architecture agency renowned for its innovative
                            approach to design, where creativity meets functionality. From futuristic skyscrapers to
                            timeless cultural landmarks, We specializes in crafting spaces that inspire and endure.
                            Blaze pushes boundaries, transforming bold concepts into architectural masterpieces. .
                        </p>
                        <div className="about-btn fade_bottom">
                            <Link onClick={ClickHandler} href="/about" className="theme-btn"> <span className="rolling-text">Discover More</span> </Link>
                            <div className="video-wrap">
                                <div className="video-holder">
                                    <VideoModal/>
                                </div>
                                <span>Watch Videos</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About10;