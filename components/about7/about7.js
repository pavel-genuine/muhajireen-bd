import React from 'react';
import CountUp from 'react-countup';

import Ab1 from '/public/images/about/about-6/1.jpg'
import Ab2 from '/public/images/about/about-6/2.jpg'
import Image from 'next/image';

const about7 = (props) => {
    return (
        <section className={"" + props.hclass }>
            <div className="about-wrap">
                <div className="image">
                    <div className="image-1">
                        <Image src={Ab1} alt="" />
                    </div>
                    <div className="image-2">
                        <Image src={Ab2} alt="" />
                    </div>
                </div>
                <div className="content">
                    <h2 className="fade_bottom">Welcome To Bliize</h2>
                    <p className="fade_bottom">We specializes in crafting spaces that inspire and endure. Blaze pushes the
                        boundaries, transforming bold concept into architectural masterpieces, ensures precision and
                        efficiency.</p>
                    <div className="about-funfact fade_bottom">
                        <h3><span><CountUp end={23} enableScrollSpy /></span> <span className="icon">+</span></h3>
                        <h4>Years Of <br/>
                            Experience</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default about7;