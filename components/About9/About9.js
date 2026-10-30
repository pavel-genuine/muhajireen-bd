import React from 'react';
import aboutimg from '/public/images/about/about-8/1.jpg'
import aboutimg2 from '/public/images/about/about-8/2.jpg'
import CountUp from 'react-countup';
import Image from 'next/image';

const About9 = () => {
    return (
        <section className="wpo-about-section-s13 section-padding">
            <div className="wraper">
                <div className="about-left fade_bottom">
                    <Image src={aboutimg} alt="" />
                </div>
                <div className="about-mid">
                    <h2 className="fade_bottom">About Us</h2>
                    <h3 className="fade_bottom">An Award Winning Construction Company</h3>
                    <p className="fade_bottom">Blaze is a trailblazing architecture agency renowned for its innovative
                        approach to design, where
                        creativity meets functionality. From futuristic skyscrapers to timeless cultural landmarks, We
                        specializes in crafting spaces that inspire and endure. Blaze pushes boundaries, transforming
                        bold concepts into architectural masterpieces.</p>
                    <div className="fanfuct">
                        <div className="row">
                            <div className="col-md-6 col-12 fade_bottom">
                                <div className="item">
                                    <h4><CountUp end={215} enableScrollSpy>00</CountUp> <span className="icon">+</span>
                                    </h4>
                                    <h5>CURRENT CLIENTS</h5>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 fade_bottom">
                                <div className="item">
                                    <h4><CountUp end={550} enableScrollSpy>00</CountUp> <span className="icon">+</span>
                                    </h4>
                                    <h5>PROJECTS COMPLETE</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-right fade_bottom">
                    <div className="about-funfact">
                        <h3><CountUp end={32} enableScrollSpy>00</CountUp> <span className="icon">+</span></h3>
                        <h4>Years Of <br/>
                            Experience</h4>
                    </div>
                    <div className="image">
                        <Image src={aboutimg2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About9;