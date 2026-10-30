import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import Link from 'next/link';
import Projects from '../../api/projects';
import Image from 'next/image';

const Hero7 = () => {
 

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1399,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 991,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 757,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ],
    };

    return (
        <section className="wpo-hero-static-s5">
            <div className="wrapper">
                <h2>Inspired Interiors for Inspired Living</h2>
                <p>Blaze is a trailblazing architecture agency renowned for its innovative approach to design, where creativity meets functionality.</p>
                <Link onClick={ClickHandler} href="/about" className="theme-btn">Explore Our Work</Link>
            </div>
            <div className="hero-project">
                <Slider {...settings}>
                    {Projects.slice(19, 23).map((project, index) => (
                        <div className="item" key={project.id || index}>
                            <Image src={project.pimg} alt={project.title} />
                            <div className="text">
                                <span>{project.num}</span>
                                <h2><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Hero7;
