import React from 'react';
import pbg from '/public/images/project/project-11/project-bg.png'
import Projects from '../../api/projects';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


const ProjectSectionS11 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0)
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }
    return (
        <section className="wpo-project-section-s12">
            <div className="wraper">
                <div className="title">
                    <span>Portfolio</span>
                    <h2 className="fade_bottom">Discover Our Recent Projects</h2>
                    <p className="fade_bottom">Cum cras ultrices netus nulla nunc. Interdum duis pulvinar est
                        potenti magna mus enim tincidunt. Erat metus vitae egestas nunc viverra.
                    </p>
                </div>
                <Slider {...settings} className="project-slider-s11 ">
                    {Projects.slice(46, 50).map((project, index) => (
                        <div className="item" key={index}>
                            <div className="imgWrap">
                                <Image src={project.pimg} alt="" className="x1" />
                            </div>
                            <div className="content">
                                <h2><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                <span>{project.subtitle}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="bg-image">
                <Image src={pbg} alt="" />
            </div>
        </section>
    );
};

export default ProjectSectionS11;