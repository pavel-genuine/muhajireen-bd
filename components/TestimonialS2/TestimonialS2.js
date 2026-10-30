import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Quote from '/public/images/testimonial/quote-2.svg'
import Image from "next/image";


const testimonials = [
    {
        id: '01',
        Des: "Ac sollicitudin euismod ut luctus felis lacus sed pellentesque. Purus eget consectur massa amet.Hac diam suspendisse faucibus posuere dignissim magna condimentum tristique.",
        Title: 'Leslie Alexander',
        Sub: "Marketing Coordinator",
    },
    {
        id: '02',
        Des: "Ac sollicitudin euismod ut luctus felis lacus sed pellentesque. Purus eget consectur massa amet.Hac diam suspendisse faucibus posuere dignissim magna condimentum tristique.",
        Title: 'Sarah Krause',
        Sub: "Marketing Coordinator",
    },
    {
        id: '03',
        Des: "Ac sollicitudin euismod ut luctus felis lacus sed pellentesque. Purus eget consectur massa amet.Hac diam suspendisse faucibus posuere dignissim magna condimentum tristique.",
        Title: 'Lavonne Smith',
        Sub: "Marketing Coordinator",
    },


]

const Testimonial = (props) => {

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
        <section className={"" + props.hclass}>
            <Slider {...settings} className="testimonial-slider">
                {testimonials.slice(0, 2).map((testimonial, item) => (
                    <div className="item" key={item}>
                        <div className="content fade_bottom">
                            <div className="icon">
                                <Image src={Quote} alt="quote" />
                            </div>
                            <h3>{testimonial.Des}</h3>
                            <h4>{testimonial.Title}</h4>
                            <span>{testimonial.Sub}</span>
                        </div>
                    </div>
                ))}

            </Slider>
        </section>
    );
}

export default Testimonial;







