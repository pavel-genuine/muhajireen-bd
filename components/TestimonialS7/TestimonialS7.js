import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShapeImg from '/public/images/testimonial/img-6.png'
import quote from '/public/images/testimonial/quote-2.svg'
import client1 from '/public/images/testimonial/client/1.jpg'
import client2 from '/public/images/testimonial/client/2.jpg'
import Image from 'next/image';

const testimonials = [
    {
        id: '01',
        img: client1,
        Des: "Purus eget conctur massa amet. Hac diam suspendisse faucibus posuere dignim magna conum tristique.",
        Title: 'Leslie Alexander',
        Sub: "Marketing Coordinator",
    },
    {
        id: '02',
        img: client2,
        Des: "Purus eget conctur massa amet. Hac diam suspendisse faucibus posuere dignim magna conum tristique.",
        Title: 'John Abraham',
        Sub: "WEb Developer",
    },



]

const TestimonialS7 = (props) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: true,
                    arrows: false,
                }
            },
        ]
    }

    return (
        <section className="wpo-testimonial-section-s13 section-padding ">
            <div className="testimonial-wrap" style={{ backgroundImage: `url(${'/images/testimonial/testimonial-bg-3.jpg'})`}}>
                <Slider {...settings} className="testimonial-slider-s4">
                    {testimonials.slice(0, 2).map((testimonial, item) => (
                        <div className="item" key={item}>
                            <div className="content">
                                <div className="icon">
                                    <Image src={quote} alt="quote" />
                                </div>
                                <h3>“{testimonial.Des}”</h3>
                                <h4>{testimonial.Title}</h4>
                                <span>{testimonial.Sub}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="image-right">
                <Image src={ShapeImg} alt="" />
            </div>
        </section>

    );
};

export default TestimonialS7;


