import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import char from '/public/images/slider/chair.png'
import Sofa from '/public/images/slider/Sofa.png'

import sliderImg1 from '/public/images/slider/slider-4/slide-1.jpg'
import sliderImg2 from '/public/images/slider/slider-4/slide-2.jpg'
import sliderImg3 from '/public/images/slider/slider-4/slide-3.jpg'
import sliderImg4 from '/public/images/slider/slider-4/slide-3.jpg'
import Image from "next/image";

const hero5 = () => {
    const slides = [sliderImg1, sliderImg4, sliderImg2, sliderImg3];

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <section className="wpo-hero-static-s2">
            <div className="top-content ">
                <h2 className="scroll-text-animation" data-animation="fade_from_bottom">Personalized <Image className="img-1" src={char} alt="" /> Interiors,
                    <Image className="img-2" src={Sofa} alt="" /> Endless Possibilities</h2>
            </div>
            <div className="hero-slider-s4">
                <Slider {...settings}  >
                    {slides.map((slide, index) => (
                        <div className="imgWrap" key={index}>
                            <Image src={slide} alt={`Slide ${index + 1}`} className="x1" />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default hero5;
