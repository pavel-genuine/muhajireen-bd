import Link from 'next/link';
import Projects from '../../api/projects';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from 'next/image';

const ProjectSectionS10 = () => {
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
        <section className="wpo-project-section-s10 section-padding">
            <div className="container-fulid p-0">
                <div className="title">
                    <h2 className="fade_bottom">Our Feature Projects</h2>
                    <p className="fade_bottom">Leveraging advanced tools and techniques, Blaze ensures
                        precision and efficiency.
                    </p>
                </div>
                <Slider {...settings}
                    className="project-slider-s7">
                    {
                        Projects.slice(41, 46).map((project, index) => (
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

export default ProjectSectionS10;