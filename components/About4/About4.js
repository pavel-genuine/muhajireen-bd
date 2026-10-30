import React from 'react';
import Link from 'next/link';
import VideoModalS2 from '../ModalVideoS2/ModalVideoS2';
import CountUp from 'react-countup';

const About4 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section id="about" className={"" + props.hclass}>
            <div className="about-wrap">
                <div className="content">
                    <div className="title fade_bottom">
                        <h2>
                            <span className="bg-text">a</span>
                            <span>About
                            </span> <br />
                            Bliize
                        </h2>
                    </div>
                    <p className="fade_bottom">Blaze is a trailblazing architecture agency renowned for its innovative
                        approach to design, where creativity meets functionality. From futuristic skyscrapers to
                        timeless cultural landmarks, We specializes in crafting spaces that inspire and endure. Blaze
                        pushes boundaries, transforming bold concepts into architectural masterpieces. Every project
                        reflects a commitment to eco-conscious practices and sustainable solutions. Blaze believes
                        architecture is personal.</p>
                    <div className="about-btn ">
                        <Link onClick={ClickHandler} href="/about" className="theme-btn"> <span className="rolling-text">Discover More</span> </Link>
                        <div className="video-wrap">
                            <div className="video-holder">
                                <VideoModalS2 />
                            </div>
                            <span>Watch Videos</span>
                        </div>
                    </div>

                </div>
                <div className="funfact fade_bottom">
                    <div className="item">
                        <h2><span><CountUp end={215} enableScrollSpy /></span> <span className="icon">+</span></h2>
                        <h3>CURRENT CLIENTS</h3>
                    </div>
                    <div className="item">
                        <h2><span><CountUp end={500} enableScrollSpy /></span> <span className="icon">+</span></h2>
                        <h3>PROJECTS COMPLETE</h3>
                    </div>
                    <div className="item">
                        <h2><span><CountUp end={23} enableScrollSpy /></span> <span className="icon">+</span></h2>
                        <h3>YEARS OF EXPERIENCE</h3>
                    </div>
                    <div className="item">
                        <h2><span><CountUp end={25} enableScrollSpy /></span> <span className="icon">+</span></h2>
                        <h3>OFFICES WORLDWIDE</h3>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About4;