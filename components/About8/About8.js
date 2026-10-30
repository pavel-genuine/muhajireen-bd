import React from 'react';
import aboutimg from '/public/images/about/about-7/ab-1.png'
import CountUp from 'react-countup';
import Image from 'next/image';

const About8 = (props) => {
    return (
        <section className="wpo-about-section-s12 section-padding">
            <div className="wraper">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-left">
                            <Image src={aboutimg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-right">
                            <h2 className="fade_bottom">About Us</h2>
                            <h3 className="fade_bottom">Bliize is An Award Winning Construction Company</h3>
                            <p>Blaze is a trailblazing architecture agency renowned for its innovative approach to
                                design, where creativity meets functionality. From futuristic skyscrapers to timeless
                                cultural landmarks, We specializes in crafting spaces that inspire and endure. Blaze
                                pushes boundaries, transforming bold concepts into architectural masterpieces. </p>
                            <div className="fanfuct">
                                <div className="row">
                                    <div className="col-md-6 col-12 fade_bottom">
                                        <div className="item">
                                            <h4><span><CountUp end={215} enableScrollSpy /></span> <span className="icon">+</span></h4>
                                            <h5>CURRENT CLIENTS</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 fade_bottom">
                                        <div className="item">
                                            <h4><span><CountUp end={550} enableScrollSpy /></span> <span className="icon">+</span></h4>
                                            <h5>PROJECTS COMPLETE</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About8;