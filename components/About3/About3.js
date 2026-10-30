import React from 'react'
import Link from 'next/link';

import Ab01 from '/public/images/about/about-3/1.jpg'
import Ab02 from '/public/images/about/about-3/2.jpg'
import VideoModal from '../ModalVideo/VideoModal'
import Image from 'next/image';

const About3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }



    return (
        <section className={"" + props.hclass}>
            <div className="about-wrap">
                <div className="image fade_bottom">
                    <Image src={Ab01} alt="" />
                </div>
                <div className="content">
                    <h2 className='fade_bottom'>About Bliize</h2>
                    <p className='fade_bottom'>Blaze is a trailblazing architecture agency renowned for its innovative approach to design, where
                        creativity meets functionality. From futuristic skyscrapers to timeless cultural landmarks, We
                        specializes in crafting spaces that inspire and endure. Blaze pushes boundaries, transforming
                        bold concepts into architectural masterpieces. Every project reflects a commitment to
                        eco-conscious practices and sustainable solutions. Blaze believes architecture is personal.</p>
                    <div className="about-btn">
                        <Link onClick={ClickHandler} href="/about" className="theme-btn"> <span className="rolling-text">Discover More</span> </Link>
                        <div className="video-wrap">
                            <div className="video-holder">
                                <VideoModal/>
                            </div>
                            <span>Watch Videos</span>
                        </div>
                    </div>
                </div>
                <div className="image fade_bottom">
                    <Image src={Ab02} alt="" />
                </div>
            </div>
        </section>
    )
}

export default About3;