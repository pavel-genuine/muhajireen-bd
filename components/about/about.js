"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";

import VideoModal from "../ModalVideo/VideoModal";
import RollingText from "../RollingText/RollingText";

import abImg2 from "/public/images/slider/hero-slide/img-2.1-main.png";
import abImg from "/public/images/slider/hero-slide/img-3.1-main.png";

const About = (props) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const elements = section.querySelectorAll("[data-reveal]");

        if (!("IntersectionObserver" in window)) {
            elements.forEach((element) => {
                element.classList.add("mc-visible");
            });
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("mc-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -20px 0px",
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    const ClickHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <section
                id="about"
                ref={sectionRef}
                className={`mc-about ${props.hclass || ""}`}
            >
                {/* Decorative background */}
                <div className="mc-about-orb mc-orb-one" />
                <div className="mc-about-orb mc-orb-two" />

                <div className="mc-about-container">

                    {/* LEFT CONTENT */}
                    <div className="mc-about-content">

                        <div
                            className="mc-eyebrow"
                            data-reveal
                        >
                            <span style={{ backgroundColor: "var(--mc-beige-dark)" }} className="mc-eyebrow-line" />
                            <span style={{ color: "var(--mc-beige-dark)" }}>THE MUHAJIREEN VISION</span>
                        </div>

                        <h2
                            className="mc-about-title"
                            data-reveal
                        >
                            More Than
                            <br />
                            <span>A Place To Live.</span>
                            <br />
                            A Way To Belong.
                        </h2>

                        <p
                            className="mc-about-description"
                            data-reveal
                        >
                            At MUHAJIREEN Consultant Ltd, we believe a
                            property is more than an address. It is where
                            aspirations take shape, families grow and
                            meaningful futures begin.
                        </p>

                        <p
                            className="mc-about-description mc-description-secondary"
                            data-reveal
                        >
                            Through our real-estate vision, including
                            Ashulia Model Town and Uttara View, we aim
                            to bring together thoughtful planning,
                            contemporary living and a stronger sense
                            of community.
                        </p>

                        {/* CTA */}
                        <div
                            className="mc-about-actions"
                            data-reveal
                        >
                            <Link
                                href="/about"
                                onClick={ClickHandler}
                                className="mc-primary-btn"
                            >
                                <span >
                                    <RollingText text="Discover Our Vision" />
                                </span>

                                <span className="mc-btn-icon">
                                    ↗
                                </span>
                            </Link>


                            <Link href="/about">
                                <div className="video-wrap">
                                    <div className="video-holder">
                                        <VideoModal />
                                    </div>

                                    <div className="video-story-text">
                                        <strong>Our Story</strong>
                                    </div>
                                </div>
                            </Link>

                        </div>

                        {/* PROJECT IDENTITIES */}
                        <div
                            className="mc-about-stats"
                            data-reveal
                        >
                            <div className="mc-stat">
                                <div className="mc-stat-number">
                                    <CountUp
                                        end={7}
                                        duration={2}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                    <span>+</span>
                                </div>

                                <div className="mc-stat-text">
                                    <strong>Project Identities</strong>
                                    <span>One evolving vision</span>
                                </div>
                            </div>

                            <div className="mc-stat-divider" />

                            <div className="mc-stat">
                                <div className="mc-stat-symbol">
                                    <span>✳</span>
                                </div>

                                <div className="mc-stat-text">
                                    <strong>Community First</strong>
                                    <span>Designed around living</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT VISUAL AREA */}
                    <div className="mc-about-visual">

                        {/* Main image */}
                        <div
                            className="mc-image-main"
                            data-reveal
                        >
                            <Image
                                src={abImg}
                                alt="MUHAJIREEN Consultant Ltd real-estate vision"
                                fill
                                priority={false}
                                sizes="(max-width: 768px) 100vw, 55vw"
                                className="mc-main-photo"
                            />

                            <div className="mc-image-overlay" />

                            <div className="mc-image-index">
                                <span>01</span>
                                <span className="mc-index-line" />
                                <span>02</span>
                            </div>
                        </div>

                        {/* Floating glass card */}
                        <div
                            className="mc-floating-card"
                            data-reveal
                        >
                            <div className="mc-floating-card-top">
                                <span className="mc-card-kicker">
                                    OUR APPROACH
                                </span>

                                <span className="mc-card-icon">
                                    ↗
                                </span>
                            </div>

                            <h3>
                                Thoughtful
                                <br />
                                Spaces.
                                <br />
                                Meaningful Lives.
                            </h3>

                            <div className="mc-card-bottom">
                                <span />
                                <p>
                                    A vision for living beyond
                                    the ordinary.
                                </p>
                            </div>
                        </div>

                        {/* Secondary image */}
                        <div
                            className="mc-image-secondary"
                            data-reveal
                        >
                            <Image
                                src={abImg2}
                                alt="Contemporary real-estate development and community living"
                                fill
                                sizes="(max-width: 768px) 55vw, 300px"
                                className="mc-secondary-photo"
                            />
                        </div>

                    </div>
                </div>

                {/* Bottom brand line */}
                <div className="mc-about-bottom">
                    <span>BUILT AROUND YOUR ASPIRATIONS</span>
                    <div className="mc-bottom-line" />
                </div>
            </section>

            <style jsx global>{`
                /* =========================================
                   MUHAJIREEN ABOUT - STRICT 100vh FIT
                ========================================= */

                .mc-about {
                    --mc-burgundy: #a58b68;
                    --mc-burgundy-dark: #533005;
                    --mc-beige-dark: #9c7941;
                    --mc-cream: #f7f1e8;
                    --mc-gold: #c9a46a;
                    --mc-muted: #766c68;

                    position: relative;
                    isolation: isolate;
                    overflow: hidden;
                    width: 100%;
                    height: auto !important; 
          min-height: auto !important;
          max-height: none !important;
          display: block !important;
           padding: clamp(60px, 7vw, 90px) 24px !important; /* Shudhu dorkari padding thakbe */
          
                    color: var(--mc-burgundy-dark);
                    background:
                        radial-gradient(ellipse at 82% 15%, rgba(201, 164, 106, 0.18), transparent 32%),
                        radial-gradient(ellipse at 15% 72%, rgba(165, 139, 104, 0.055), transparent 36%),
                        linear-gradient(135deg, #fffdf9 0%, #f8f4ee 48%, #ffffff 100%);
                }

                .mc-about *,
                .mc-about *::before,
                .mc-about *::after {
                    box-sizing: border-box;
                }

                .mc-about-container {
                    position: relative;
                    z-index: 2;
                    display: grid;
                    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
                    align-items: center;
                    gap: clamp(35px, 5vw, 90px);
                    width: min(1380px, calc(100% - 80px));
                    margin: 0 auto;
                }

                /* Background decoration */
                .mc-about-orb {
                    position: absolute;
                    z-index: -1;
                    pointer-events: none;
                    border: 1px solid rgba(201, 164, 106, 0.19);
                    border-radius: 50%;
                }

                .mc-orb-one {
                    top: 5%;
                    right: -150px;
                    width: 400px;
                    height: 400px;
                }

                .mc-orb-two {
                    bottom: 5%;
                    left: -180px;
                    width: 350px;
                    height: 350px;
                }

                /* Content */
                .mc-about-content {
                    position: relative;
                    z-index: 3;
                    min-width: 0;
                }

                .mc-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 16px;
                    color: var(--mc-burgundy);
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.22em;
                }

                .mc-eyebrow-line {
                    width: 36px;
                    height: 2px;
                    flex-shrink: 0;
                    background: var(--mc-gold);
                    border-radius: 99px;
                }

                .mc-about-title {
                    margin: 0 0 20px;
                    color: #3f392f;
                    font-size: clamp(34px, 3.8vh, 58px);
                    font-weight: 500;
                    line-height: 1.08;
                    letter-spacing: -0.022em;
                }

                .mc-about-title > span {
                    color: #9c7941;
                    font-family: Georgia, "Times New Roman", serif;
                    font-weight: 400;
                    font-style: italic;
                    letter-spacing: -0.055em;
                }

                .mc-about-description {
                    max-width: 520px;
                    margin: 0 0 12px;
                    color: #655b59;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 1.75;
                }

                .mc-description-secondary {
                    color: #847873;
                    font-size: 13px;
                }

                /* Buttons */
                .mc-about-actions {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 20px;
                    margin-top: 22px;
                }

                .mc-primary-btn {
                    position: relative;
                    overflow: hidden;
                    display: inline-flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 22px;
                    min-height: 50px;
                    padding: 6px 8px 6px 20px;
                    border: 1px solid rgba(255, 255, 255, 0.72);
                    border-radius: 14px;
                    color: #fff !important;
                    background: linear-gradient(135deg, rgba(165, 139, 104, 0.96), rgba(107, 91, 72, 0.98));
                    font-size: 11px;
                    font-weight: 600;
                    text-decoration: none !important;
                    box-shadow: 0 10px 25px rgba(107, 91, 72, 0.15);
                    backdrop-filter: blur(16px);
                }

                .mc-primary-btn:hover {
                    color: #fff !important;
                    background: linear-gradient(135deg, #9b8262, #6b5b48);
                    transform: translateY(-2px);
                }

                .mc-btn-icon {
                    display: grid;
                    width: 34px;
                    height: 34px;
                    place-items: center;
                    border-radius: 10px;
                    color: #6b4b27;
                    background: rgba(255, 255, 255, 0.95);
                    font-size: 16px;
                }

                /* Stats */
                .mc-about-stats {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    max-width: 480px;
                    margin-top: 30px;
                    padding: 16px 18px;
                    border: 1px solid rgba(255, 255, 255, 0.86);
                    border-radius: 18px;
                    background: linear-gradient(135deg, rgba(255,255,255,0.72), rgba(255,255,255,0.38));
                    backdrop-filter: blur(18px);
                }

                .mc-stat {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    min-width: 0;
                }

                .mc-stat-number {
                    display: flex;
                    align-items: flex-start;
                    color: #a58b68;
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: 36px;
                    line-height: 1;
                }

                .mc-stat-number > span {
                    margin: 2px 0 0 2px;
                    color: var(--mc-gold);
                    font-size: 16px;
                }

                .mc-stat-symbol {
                    display: grid;
                    width: 38px;
                    height: 38px;
                    flex-shrink: 0;
                    place-items: center;
                    border: 1px solid rgba(201, 164, 106, 0.55);
                    border-radius: 50%;
                    color: var(--mc-gold);
                    font-size: 20px;
                    background: rgba(255,255,255,0.54);
                }

                .mc-stat-text {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .mc-stat-text strong {
                    color: var(--mc-beige-dark);
                    font-size: 11px;
                    font-weight: 700;
                }

                .mc-stat-text > span {
                    color: #92847d;
                    font-size: 9px;
                }

                .mc-stat-divider {
                    width: 1px;
                    height: 36px;
                    background: rgba(165, 139, 104, 0.15);
                }

                /* Image composition */
                .mc-about-visual {
                    position: relative;
                    min-width: 0;
                    height: 480px;
                }

                .mc-image-main {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 82%;
                    height: 380px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.9);
                    border-radius: 22px;
                    background: #e7d9c8;
                    box-shadow: 0 25px 70px rgba(107, 91, 72, 0.15);
                }

                .mc-main-photo,
                .mc-secondary-photo {
                    object-fit: cover;
                    transition: transform 1s ease;
                }

                .mc-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, transparent 50%, rgba(55, 48, 39, 0.35) 100%);
                }

                .mc-image-index {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 6px 10px;
                    border: 1px solid rgba(255, 255, 255, 0.4);
                    border-radius: 99px;
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(10px);
                    color: white;
                    font-size: 9px;
                    font-weight: 600;
                }

                .mc-index-line {
                    width: 20px;
                    height: 1px;
                    background: rgba(255, 255, 255, 0.7);
                }

                /* Glass card */
                .mc-floating-card {
                    position: absolute;
                    z-index: 4;
                    top: 150px;
                    left: 0;
                    width: 230px;
                    padding: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.88);
                    border-radius: 20px;
                    background: linear-gradient(145deg, rgba(255,255,255,0.78), rgba(255,250,241,0.48));
                    box-shadow: 0 20px 60px rgba(107, 91, 72, 0.12);
                    backdrop-filter: blur(24px);
                }

                .mc-floating-card-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .mc-card-kicker {
                    color: #8b6c43;
                    font-size: 8px;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                }

                .mc-card-icon {
                    display: grid;
                    width: 28px;
                    height: 28px;
                    place-items: center;
                    border: 1px solid rgba(156,121,65,0.35);
                    border-radius: 50%;
                    color: #9c7941;
                    font-size: 14px;
                }

                .mc-floating-card h3 {
                    margin: 16px 0;
                    color: #7d5b32;
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: 24px;
                    font-weight: 400;
                    line-height: 1.2;
                }

                .mc-card-bottom {
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    padding-top: 12px;
                    border-top: 1px solid rgba(165, 139, 104, 0.12);
                }

                .mc-card-bottom > span {
                    width: 5px;
                    height: 5px;
                    margin-top: 4px;
                    border-radius: 50%;
                    background: var(--mc-gold);
                }

                .mc-card-bottom p {
                    margin: 0;
                    color: #776962;
                    font-size: 9px;
                    line-height: 1.6;
                }

                /* Secondary image */
                .mc-image-secondary {
                    position: absolute;
                    right: -4%;
                    bottom: 0;
                    width: 48%;
                    height: 170px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.9);
                    border-radius: 18px;
                    box-shadow: 0 15px 40px rgba(107, 91, 72, 0.15);
                }

                /* Bottom strip */
                .mc-about-bottom {
                    position: absolute;
                    bottom: 15px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    width: min(1380px, calc(100% - 80px));
                    color: #8c7b73;
                    font-size: 8px;
                    font-weight: 700;
                    letter-spacing: 0.16em;
                }

                .mc-bottom-line {
                    height: 1px;
                    flex: 1;
                    background: rgba(165, 139, 104, 0.15);
                }

                /* Scroll reveal */
                .mc-about [data-reveal] {
                    opacity: 0;
                    transform: translate3d(0, 20px, 0);
                    transition: opacity 0.6s ease, transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
                }

                .mc-about [data-reveal].mc-visible {
                    opacity: 1;
                    transform: translate3d(0, 0, 0);
                }

                /* Tablet & Mobile Responsiveness */
                @media (max-width: 1024px) {
                    .mc-about {
                        height: auto;
                        min-height: 100vh;
                        padding: 70px 0;
                    }
                    .mc-about-container {
                        grid-template-columns: 1fr;
                        gap: 40px;
                        width: calc(100% - 40px);
                    }
                    .mc-about-visual {
                        height: 420px;
                    }
                    .mc-about-bottom {
                        position: relative;
                        bottom: auto;
                        left: auto;
                        transform: none;
                        width: calc(100% - 40px);
                        margin: 30px auto 0;
                    }
                }

                @media (max-width: 600px) {
                    .mc-about {
                        height: auto;
                        min-height: 100vh;
                        padding: 60px 0 30px;
                    }
                    .mc-about-title {
                        font-size: 32px;
                    }
                    .mc-about-visual {
                        height: 380px;
                    }
                    .mc-image-main {
                        height: 280px;
                        width: 88%;
                    }
                    .mc-floating-card {
                        top: 180px;
                        width: 180px;
                        left:-35px;
                        padding: 15px;
                    }
                    .mc-floating-card h3 {
                        font-size: 20px;
                        margin: 10px 0;
                    }
                    .mc-image-secondary {
                        height: 130px;
                    }
                }
            `}</style>

            <style jsx>{`
                .video-wrap {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    cursor: pointer;
                    vertical-align: middle;
                }

                .video-holder {
                    width: 50px;
                    height: 50px;
                    min-width: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid var(--mc-beige-dark);
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.72);
                    backdrop-filter: blur(14px);
                    box-shadow: 0 6px 20px rgba(65, 63, 30, 0.07);
                    transition: transform 0.35s ease, background 0.35s ease;
                }

                .video-wrap:hover .video-holder {
                    transform: scale(1.06);
                    background: var(--mc-beige-dark);
                }

                .video-story-text strong {
                    display: block;
                    font-size: 12px;
                    font-weight: 600;
                    color: var(--mc-beige-dark);
                }

                @media (max-width: 575px) {
                    .video-holder {
                        width: 44px;
                        height: 44px;
                        min-width: 44px;
                    }
                }
            `}</style>
        </>
    );
};

export default About;