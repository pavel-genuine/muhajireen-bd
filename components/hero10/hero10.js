import React, { useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* images */
import Img1 from '/public/images/shop/hero-shop/img-1.png';
import Img2 from '/public/images/shop/hero-shop/img-2.png';
import Img3 from '/public/images/shop/hero-shop/img-3.png';
import Img4 from '/public/images/shop/hero-shop/img-4.png';
import Thumb1 from '/public/images/shop/hero-shop/1.png';
import Thumb2 from '/public/images/shop/hero-shop/2.png';
import Thumb3 from '/public/images/shop/hero-shop/3.png';
import Thumb4 from '/public/images/shop/hero-shop/4.png';
import Image from 'next/image';

const Hero10 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    return (
        <section className="wpo-hero-static-s8">
            <div className="content fade_bottom">
                <h2>Luxury Ashes Color Chair</h2>
                <p >
                    From futuristic skyscrapers to timeless cultural landmarks, Blaze specializes in crafting spaces that inspire.
                </p>
                <span>Start From</span>
                <span className="amount">195.00 <span className="simbol">$</span></span>
                <div className="hero-btn">
                    <Link onClick={ClickHandler} href="/shop" className="shop-btn">Shop Now</Link>
                    <Link onClick={ClickHandler} href="/about" className="shop-btn s2">Discover More</Link>
                </div>
            </div>
            <div className="hero-right heroRight">
                <div className="hero-single-slider">
                    <Slider
                        className="top-image"
                        asNavFor={nav2}
                        ref={(slider1) => setNav1(slider1)}
                        autoplay={true}
                        slidesToShow={1}
                        arrows={false}
                        fade={true}
                    >
                        <div className="item">
                            <Image src={Img1} alt="Hero 1" />
                        </div>
                        <div className="item">
                            <Image src={Img2} alt="Hero 2" />
                        </div>
                        <div className="item">
                            <Image src={Img3} alt="Hero 3" />
                        </div>
                        <div className="item">
                            <Image src={Img4} alt="Hero 4" />
                        </div>
                    </Slider>
                </div>
                <div className="hero-multiple-slider">
                    <Slider
                        className="bottom-image"
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        arrows={false}
                        vertical={true}
                        verticalSwiping={true}
                    >
                        <div className="item">
                            <Image src={Thumb1} alt="Thumbnail 1" />
                        </div>
                        <div className="item">
                            <Image src={Thumb2} alt="Thumbnail 2" />
                        </div>
                        <div className="item">
                            <Image src={Thumb3} alt="Thumbnail 3" />
                        </div>
                        <div className="item">
                            <Image src={Thumb4} alt="Thumbnail 4" />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Hero10;
