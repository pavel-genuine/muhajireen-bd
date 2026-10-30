import React from "react";
import Link from "next/link";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Hero3 = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className="wpo-hero-slider-s3">
            <Swiper className="swiper-container" modules={[Navigation, A11y, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation={false}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                    type: 'fraction',
                    renderFraction: (currentClass, totalClass) => {
                        return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
                    },
                }}
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{
                        backgroundImage: `url(${'/images/slider/slide-4.jpg'})`
                    }}>
                        <div className="slide-content">
                            <div className="slide-sub-title">
                                <h2>Designing For Today,
                                    Building For Tomorrow</h2>
                            </div>
                            <div className="sub-title">
                                <p>Blaze is a trailblazing architecture agency renowned for its innovative
                                    approach to design, where creativity meets functionality.</p>
                                <Link onClick={ClickHandler} href="/about" className="theme-btn">Explore Our Work</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{
                        backgroundImage: `url(${'/images/slider/slide-5.jpg'})`
                    }}>
                        <div className="slide-content">
                            <div className="slide-sub-title">
                                <h2>Designing For Today,
                                    Building For Tomorrow</h2>
                            </div>
                            <div className="sub-title">
                                <p>Blaze is a trailblazing architecture agency renowned for its innovative
                                    approach to design, where creativity meets functionality.</p>
                                <Link onClick={ClickHandler} href="/about" className="theme-btn">Explore Our Work</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{
                        backgroundImage: `url(${'/images/slider/slide-6.jpg'})`
                    }}>
                        <div className="slide-content">
                            <div className="slide-sub-title">
                                <h2>Designing For Today,
                                    Building For Tomorrow</h2>
                            </div>
                            <div className="sub-title">
                                <p>Blaze is a trailblazing architecture agency renowned for its innovative
                                    approach to design, where creativity meets functionality.</p>
                                <Link onClick={ClickHandler} href="/about" className="theme-btn">Explore Our Work</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
              
                <div className="swiper-pagination"></div>
            </Swiper>
        </section>
    );
};

export default Hero3;
