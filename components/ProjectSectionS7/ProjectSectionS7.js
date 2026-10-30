import Link from 'next/link';
import Projects from '../../api/projects';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from 'next/image';

const ProjectSectionS7 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
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
        <section className={props.hclass}>
            <div className="container-fulid p-0">
                <div className="title">
                    <h2 className="poort-text poort-in-right">Let's See Our Featured Work</h2>
                    <p className="poort-text poort-in-right">Blaze is a trailblazing architecture agency renowned for its
                        innovative approach to design, where creativity meets functionality. From futuristic skyscrapers
                        to timeless cultural landmarks, Blaze specializes in crafting spaces that inspire and endure.
                    </p>
                </div>
                <Slider {...settings}  
                    className="project-slider-s7">
                    {
                        Projects.slice(24, 28).map((project, index) => (
                            <div className="item" key={index}>
                                <div className="imgWrap">
                                    <Image src={project.pimg} className="x1" alt="" />
                                </div>
                                <div className="content">
                                    <h2><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                    <span>{project.subtitle}</span>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    );
};

export default ProjectSectionS7;
