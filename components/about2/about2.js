import React from "react";
import CountUp from 'react-countup';

import Aboutim1 from '/public/images/about/about-2/1.jpg';
import Aboutim2 from '/public/images/about/about-2/2.jpg';
import Image from "next/image";

const About2 = (props) => {





    return (

        <section className={"" + props.hclass}>
            <div className="about-wrap">
                <div className="image-1 fade_bottom">
                    <Image src={Aboutim1} alt="" />
                </div>
                <div className="content">
                    <h2 className="fade_bottom">About Bliize</h2>
                    <div className="content-left">
                        <p className="fade_bottom">Blaze is a trailblazing architecture agency renowned for its innovative
                            approach to design, where creativity meets functionality. Blaze believes architecture is
                            personal. Each design tells the unique story of its clients.
                        </p>
                        <div className="about-funfact fade_bottom">
                            <h3><span><CountUp end={23} enableScrollSpy /></span><span className="icon">+</span></h3>
                            <h4>Years Of <br/>
                                Experience</h4>
                        </div>
                    </div>
                    <p className="right fade_bottom"> From futuristic skyscrapers to timeless cultural landmarks, We
                        specializes in crafting spaces that inspire and endure. Blaze pushes boundaries, transforming
                        bold concepts into architectural masterpieces. Every project reflects a commitment to
                        eco-conscious practices and sustainable solutions. Blaze believes architecture is personal.With
                        an impressive portfolio of projects spanning various continents, Blaze has left its mark on
                        skylines worldwide.</p>
                </div>
                <div className="image-2 fade_bottom">
                    <Image src={Aboutim2} alt="" />
                </div>
            </div>
        </section>

    )
}

export default About2;