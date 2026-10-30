import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Team1 from '/public/images/team/hero-team/1.jpg'
import Team2 from '/public/images/team/hero-team/2.jpg'
import Team3 from '/public/images/team/hero-team/3.jpg'
import Team4 from '/public/images/team/hero-team/4.jpg'
import quote from '/public/images/testimonial/quote-2.svg'
import client from '/public/images/testimonial/client/2.jpg'
import slider1 from '/public/images/slider/slider-13/1.jpg'
import slider2 from '/public/images/slider/slider-13/2.jpg'
import Image from 'next/image';


const hero13 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0)
    }


    const settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };
    return (
        <section className="wpo-hero-static-s11">
            <div className="wraper">
                <div className="content">
                    <h2 className="fade_bottom">Building The Future</h2>
                    <p className="fade_bottom">Blaze is a trailblazing architecture agency renowned for its innovative
                        approach to design, where creativity meets functionality..</p>
                    <Link onClick={ClickHandler} className="hero-btn fade_bottom" href="/contact"><span>Explore Our Work</span> <i
                        className="ti-arrow-right"></i></Link>
                    <div className="hero-team fade_bottom">
                        <ul>
                            <li><Image src={Team1} alt="hero-team" /></li>
                            <li><Image src={Team2} alt="hero-team" /></li>
                            <li><Image src={Team3} alt="hero-team" /></li>
                            <li><Image src={Team4} alt="hero-team" /></li>
                        </ul>
                        <span>Meet Our Team</span>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="hero-slider-s12">
                        <Slider {...settings}>
                            <div className="item">
                                <Image src={slider1} alt="" />
                            </div>
                            <div className="item">
                                <Image src={slider2} alt="" />
                            </div>
                        </Slider>
                    </div>
                    <div className="circle-content">
                        <div className="rotate-anm">
                            <svg viewBox="0 0 100 100">
                                <defs>
                                    <path id="circle4" d="
                                                 M 50, 50
                                                 m -37, 0
                                                 a 37,37 0 1,1 74,0
                                                 a 37,37 0 1,1 -74,0" />
                                </defs>
                                <text fill="black">
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
                                    fill="black" />
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M43.0868 22.7774C37.3587 26.0845 35.5863 33.8241 38.6875 39.1955L39.3906 40.4133L41.8263 39.0071L41.1232 37.7892C38.7686 33.7109 40.1617 27.7138 44.493 25.2131L45.7104 24.5103L44.3042 22.0746L43.0868 22.7774Z"
                                    fill="black" />
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M44.4927 25.2132C38.7646 28.5203 31.1758 26.1855 28.0745 20.814L27.3714 19.5961L29.8071 18.1899L30.5102 19.4077C32.8648 23.486 38.7551 25.2782 43.0864 22.7775L44.3038 22.0746L45.71 24.5103L44.4927 25.2132Z"
                                    fill="black" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="testimonial fade_bottom">
                    <div className="icon">
                        <Image src={quote} alt="quote" />
                    </div>
                    <h3>“Bliize next level flexitarian yr bicycle rights waistcoat bit austin tofu-daa glossier whatever
                        scenester snack wave literally can shaman grained.”</h3>
                    <div className="client-wrap">
                        <div className="image">
                            <Image src={client} alt="" />
                        </div>
                        <div className="text">
                            <h4>John Abraham</h4>
                            <span>WEb Developer</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="hero-bg-border">
                <span className="border-1"></span>
                <span className="border-2"></span>
                <span className="border-3"></span>
                <span className="border-4"></span>
                <span className="border-5"></span>
                <span className="border-6"></span>
                <span className="border-7"></span>
                <span className="border-8"></span>
            </div>
        </section>
    );
};

export default hero13;