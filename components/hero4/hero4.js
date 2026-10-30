import React from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Squrol from '/public/images/bottom-arrow.svg'
import slide7 from '/public/images/slider/slide-7.jpg'
import slide8 from '/public/images/slider/slide-7.png'
import Image from 'next/image';

const hero4 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="wpo-hero-static-s3">
            <div className="wrapper">
                <h2 className="poort-text poort-in-right">Spaces That Inspire</h2>
                <div className="content fade_bottom">
                    <p>Blaze is a trailblazing architecture agency renowned for its innovative approach to design.</p>
                    <Link onClick={ClickHandler} href="/about" className="theme-btn"> <span className="rolling-text">Explore Our Work</span></Link>
                </div>
            </div>
            <div className="circle-content fade_bottom">
                <div className="rotate-anm">
                    <svg viewBox="0 0 100 100">
                        <defs>
                            <path id="circle4" d="
                                            M 50, 50
                                            m -37, 0
                                            a 37,37 0 1,1 74,0
                                            a 37,37 0 1,1 -74,0" />
                        </defs>
                        <text fill="white">
                            <textPath xlinkHref="#circle4">
                                Lets Build Your Dream House
                            </textPath>
                        </text>
                    </svg>
                </div>
                <div className="arrows">
                    <svg width="62" height="63" viewBox="0 0 62 63" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M45.709 24.5105L17.293 40.9165L15.8867 38.4808L44.3027 22.0748L45.709 24.5105Z"
                            fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M43.0858 22.7774C37.3577 26.0845 35.5854 33.8241 38.6865 39.1955L39.3896 40.4133L41.8253 39.0071L41.1222 37.7892C38.7676 33.7109 40.1608 27.7138 44.4921 25.2131L45.7094 24.5103L44.3032 22.0746L43.0858 22.7774Z"
                            fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M44.4927 25.2132C38.7646 28.5203 31.1758 26.1855 28.0745 20.814L27.3714 19.5961L29.8071 18.1899L30.5102 19.4077C32.8648 23.486 38.7551 25.2782 43.0864 22.7775L44.3038 22.0746L45.71 24.5103L44.4927 25.2132Z"
                            fill="white" />
                    </svg>
                </div>
            </div>
            <AnchorLink href="#about" className="scroll-btn fade_bottom">
                <span>Scroll For More</span>
                <div className="scroll-befor">
                    <Image src={Squrol} alt="" />
                </div>
            </AnchorLink>
            <div className="bg-image">
                <Image src={slide7} alt="" />
            </div>
            <div className="overlay-image">
                <Image src={slide8} alt="" />
            </div>
        </section>
    );
};

export default hero4;