import React from 'react';
import CountUp from 'react-countup';
import Img1 from '/public/images/funfact-1.jpg'
import Img2 from '/public/images/funfact-2.jpg'
import Image from 'next/image';

const FunfactSectionS6 = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container-fluid">
                <div className="funfact-wrap">
                    <div className="left-content">
                        <Image src={Img1} alt="" />
                    </div>
                    <div className="right-content">
                        <div className="funfact-content">
                            <div className="item">
                                <h2><span><CountUp end={215} enableScrollSpy /></span> <span className="icon">+</span></h2>
                                <h3>CURRENT CLIENTS</h3>
                            </div>
                            <div className="item">
                                <h2><span ><CountUp end={25} enableScrollSpy /></span> <span className="icon">+</span></h2>
                                <h3>PROJECTS COMPLETE</h3>
                            </div>
                            <div className="item">
                                <h2><span><CountUp end={23} enableScrollSpy /></span> <span className="icon">+</span></h2>
                                <h3>YEARS OF EXPERIENCE</h3>
                            </div>
                            <div className="item">
                                <h2><span><CountUp end={15} enableScrollSpy /></span> <span className="icon">+</span></h2>
                                <h3>OFFICES WORLDWIDE</h3>
                            </div>
                        </div>
                        <Image src={Img2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunfactSectionS6;