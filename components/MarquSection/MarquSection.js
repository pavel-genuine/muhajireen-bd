import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const MarquSection = () => {
    useEffect(() => {
        new Swiper('.swiper--top', {
            modules: [Autoplay],
            spaceBetween: 0,
            centeredSlides: true,
            speed: 9000,
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },
            loop: true,
            slidesPerView: 'auto',
            allowTouchMove: false,
        });
    }, []);

    const slides = [
        "Awesome Interior Design Agency",
        "Awesome Interior Design Agency",
        "Awesome Interior Design Agency",
        "Awesome Interior Design Agency"
    ];

    return (
        <section className="wpo-marqu-section swiper--top">
            <h2 className="d-none">itit</h2>
            <div className="swiper-wrapper">
                {[...slides, ...slides].map((text, index) => (
                    <div key={index} className="swiper-slide">{text}</div>
                ))}
                {[...slides, ...slides].map((text, index) => (
                    <div key={index} className="swiper-slide">{text}</div>
                ))}
            </div>
        </section>
    );
};

export default MarquSection;
