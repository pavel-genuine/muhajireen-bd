import React from 'react';
import Link from 'next/link';
import Heroimg from '/public/images/slider/slide-14.jpg'
import Heroimg2 from '/public/images/slider/slider-14/1.jpg'
import Image from 'next/image';

const hero14 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="wpo-hero-static-s14">
            <div className="wraper">
                <div className="content">
                    <h2 className="fade_bottom">Designing
                        <span className="hero-slider-s12">
                            <span className="item">
                                <Image src={Heroimg2} alt="" />
                            </span>
                        </span> the
                        Future, Today.</h2>
                    <p className="fade_bottom">Hi I Am <span>Robert Jonson</span>. A Creative <span>Interior
                        Designer</span>. Welcome to
                        My world of
                        imagination and boundless creativity. Together, let's embark on a remarkable journey where
                        dreams become realities.</p>
                    <Link onClick={ClickHandler} href="/about" className="theme-btn fade_bottom">Explore Our Work</Link>
                </div>
                <div className="hero-right fade_bottom">
                    <Image src={Heroimg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default hero14;