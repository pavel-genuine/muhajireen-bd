import React from 'react';
import ab1 from '/public/images/about/about-4/1.jpg'
import ab2 from '/public/images/about/about-4/2.jpg'
import Link from 'next/link';
import VideoModal from '../ModalVideo/VideoModal';
import CountUp from 'react-countup';
import Image from 'next/image';

const about5 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass}>
            <div className="about-wrap">
                <div className="image fade_bottom">
                    <Image src={ab1} alt="" />
                </div>
                <div className="content">
                    <h2 className='fade_bottom'>About Bliize</h2>
                    <p className='fade_bottom'>Blaze is a trailblazing architecture agency renowned for its innovative approach to design, where
                        creativity meets functionality. From futuristic skyscrapers to timeless cultural landmarks, We
                        specializes in crafting spaces that inspire and endure. Blaze pushes boundaries, transforming
                        bold concepts into architectural masterpieces. Every project reflects a commitment to
                        eco-conscious practices and sustainable solutions. Blaze believes architecture is personal.</p>
                    <div className="about-btn">
                        <Link onClick={ClickHandler} href="/about" className="theme-btn"> <span className="rolling-text">Discover More</span> </Link>
                        <div className="video-wrap">
                            <div className="video-holder">
                                <VideoModal/>
                            </div>
                            <span>Watch Videos</span>
                        </div>
                    </div>
                </div>
                <div className="image s2 fade_bottom">
                    <div className="experience">
                            <h2><span><CountUp end={23} enableScrollSpy /></span> <span className="icon">+</span></h2>
                        <h3>Years Of <br/>
                            Experience</h3>
                    </div>
                    <Image src={ab2} alt="" />
                </div>
            </div>

            <div className="feature">
                <div className="item">
                    <h2><span><CountUp end={213} enableScrollSpy /></span> <span className="icon">+</span></h2>
                    <h3>CURRENT CLIENTS</h3>
                </div>
                <div className="item">
                    <h2><span><CountUp end={550} enableScrollSpy /></span> <span className="icon">+</span></h2>
                    <h3>PROJECTS COMPLETE</h3>
                </div>
                <div className="item">
                    <h2><span><CountUp end={25} enableScrollSpy /></span> <span className="icon">+</span></h2>
                    <h3>OFFICES WORLDWIDE</h3>
                </div>
            </div>
        </section>
    );
};

export default about5;