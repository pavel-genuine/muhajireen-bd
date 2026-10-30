import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from "../../api/projects";
import Arrow from '/public/images/right-arrow-4.svg';
import Link from "next/link";
import Image from "next/image";

const HeroProjectS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    return (
        <div className="hero-project-s2">
            <Slider
                className="left-slider"
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                autoplay={true}
                slidesToShow={1}
                arrows={false}
                fade={true}
            >
                {Projects.slice(28, 32).map((item, index) => (
                    <div className="item" key={index}>
                        <Image src={item.pimg} alt="Project" />
                        <div className="text">
                            <h2>
                                <Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${item.slug}`}>{item.title}</Link>
                            </h2>
                            <Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${item.slug}`} className="icon">
                                <Image src={Arrow} alt="Arrow" />
                            </Link>
                        </div>
                        <Link onClick={ClickHandler} href="/about" className="theme-btn">Explore Our Work</Link>
                    </div>
                ))}
            </Slider>
            <Slider
                className="right-slider"
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                arrows={false}
                vertical={true}
                verticalSwiping={true}
            >
                {Projects.slice(28, 32).map((img, index) => (
                    <div className="item-image slick-slide" key={index}>
                        <Image src={img.phero} alt="Project Preview" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroProjectS2;