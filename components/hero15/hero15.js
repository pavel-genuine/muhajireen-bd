import React from 'react';
import Heroimg from '/public/images/slider/slide-15.jpg'
import Link from 'next/link';
import Image from 'next/image';
const hero15 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0)
    }

    return (
        <section className="wpo-hero-static-s15">
            <div className="content">
                <h2 className="fade_bottom">MODERN</h2>
                <h2 className="text-bottom fade_bottom">DESIGN</h2>
                <p className="fade_bottom">Hi I Am <span>Robert Jonson</span>. A Creative <span>Interior
                    Designer</span>. Welcome to
                    My world of
                    imagination and boundless creativity. Together, let's embark on a remarkable journey where
                    dreams become realities.</p>
                <Link onClick={ClickHandler}  href="/about" className="theme-btn fade_bottom">Explore Our Work</Link>
            </div>
            <div className="hero-right">
                <Image src={Heroimg} alt="" />
            </div>
        </section>
    );
};

export default hero15;