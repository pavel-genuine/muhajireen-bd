import React from 'react';

import Heroimg1 from '/public/images/slider/hero-text-3.jpg'
import Heroimg2 from '/public/images/slider/hero-text-4.png'
import Heroimg3 from '/public/images/slider/slide-12.png'
import Heroimg4 from '/public/images/slider/slide-bg-12.jpg'
import Image from 'next/image';

const hero12 = () => {
    return (
        <section className="wpo-hero-static-s10">
            <div className="content">
                <h2 className="fade_bottom">Building <span>
                    <Image src={Heroimg1} alt="" />
                    </span>
                    Dreams 
                    <span>
                        <Image src={Heroimg2} alt="" />
                        </span>
                    With Precision</h2>
                <p className="fade_bottom">Blaze is a trailblazing architecture agency renowned for its innovative approach
                    to design, where creativity meets functionality.</p>

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
                            <text fill="black">
                                <textPath xlinkHref="#circle4">
                                    Lets Build Your Dream House
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <div className="arrows">
                        <svg  width="45" height="45" viewBox="0 0 45 45" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M38.9057 23.9072L6.09375 23.9072L6.09375 21.0947L38.9057 21.0947L38.9057 23.9072Z"
                                fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M37.4994 21.0947C30.8852 21.0947 25.4805 26.9112 25.4805 33.1135L25.4805 34.5198L28.293 34.5198L28.293 33.1135C28.293 28.4043 32.498 23.9072 37.4994 23.9072L38.9051 23.9072L38.9051 21.0947L37.4994 21.0947Z"
                                fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M37.4994 23.9072C30.8852 23.9072 25.4805 18.0908 25.4805 11.8883L25.4805 10.482L28.293 10.482L28.293 11.8883C28.293 16.5975 32.498 21.0947 37.4994 21.0947L38.9051 21.0947L38.9051 23.9072L37.4994 23.9072Z"
                                fill="black" />
                        </svg>
                    </div>
                </div>

            </div>
            <div className="hero-right">
                <Image src={Heroimg3} alt="" />
            </div>
            <div className="hero-bg">
                <Image src={Heroimg4} alt="" />
            </div>
        </section>
    );
};

export default hero12;