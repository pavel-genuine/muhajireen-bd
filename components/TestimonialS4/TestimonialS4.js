import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from '/public/images/testimonial/client/1.jpg'
import client2 from '/public/images/testimonial/client/2.jpg'

import Quote from '/public/images/testimonial/quote-2.svg'
import Image from "next/image";

const testimonials = [
    {
        id: '01',
        img: client1,
        Des: "Bliize next level flexitarian yr bicycle rights waistcoat bit austin tofu-daa glossier whatever scenester snack wave literally can shaman grained.",
        Title: 'Leslie Alexander',
        Sub: "Marketing Coordinator",
    },
    {
        id: '02',
        img: client2,
        Des: "Bliize next level flexitarian yr bicycle rights waistcoat bit austin tofu-daa glossier whatever scenester snack wave literally can shaman grained.",
        Title: 'John Abraham',
        Sub: "WEb Developer",
    },
    {
        id: '03',
        img: client1,
        Des: "Bliize next level flexitarian yr bicycle rights waistcoat bit austin tofu-daa glossier whatever scenester snack wave literally can shaman grained.",
        Title: 'Leslie Alexander',
        Sub: "Marketing Coordinator",
    },
   
    {
        id: '04',
        img: client2,
        Des: "Bliize next level flexitarian yr bicycle rights waistcoat bit austin tofu-daa glossier whatever scenester snack wave literally can shaman grained.",
        Title: 'John Abraham',
        Sub: "WEb Developer",
    },

]


const TestimonialS4 = (props) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
        dots: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                }
            },
        ]
    }
    return (
        <section className={"" + props.hclass}>
            <Slider {...settings} className="testimonial-slider-s3">
                {testimonials.slice(0, 4).map((testimonial, item) => (
                    <div className="item" key={item}>
                        <div className="content">
                            <div className="icon">
                                <Image src={Quote} alt="quote" />
                            </div>
                            <h3>“{testimonial.Des}”</h3>
                            <div className="client-wrap">
                                <div className="image">
                                    <Image src={testimonial.img} alt="" />
                                </div>
                                <div className="text">
                                    <h4>{testimonial.Title}</h4>
                                    <span>{testimonial.Sub}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default TestimonialS4;


