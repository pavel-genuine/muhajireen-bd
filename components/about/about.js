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
                rootMargin: "0px 0px -40px 0px",
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


                            <div className="video-wrap">
                                <div className="video-holder">
                                    <VideoModal />
                                </div>

                                <div className="video-story-text">

                                    <strong>Our Story</strong>
                                </div>
                            </div>

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

                            <div className="mc-image-caption">
                                <span className="mc-caption-dot" />
                                {/* <span>THE ART OF BETTER LIVING</span> */}
                            </div>

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

                        {/* Decorative label */}

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
                   MUHAJIREEN ABOUT
                   Premium Beige / Cream / Gold
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
                    padding: 125px 0 30px;
                    color: var(--mc-burgundy-dark);
                    background:
                        radial-gradient(
                            ellipse at 82% 15%,
                            rgba(201, 164, 106, 0.12),
                            transparent 35%
                        ),
                        radial-gradient(
                            ellipse at 10% 80%,
                            rgba(165, 139, 104, 0.035),
                            transparent 35%
                        ),
                        #ffffff;
                }

                .mc-about,
                .mc-about * {
                    box-sizing: border-box;
                }

                .mc-about-container {
                    position: relative;
                    z-index: 2;
                    display: grid;
                    grid-template-columns:
                        minmax(0, 0.92fr)
                        minmax(0, 1.08fr);
                    align-items: center;
                    gap: clamp(45px, 7vw, 110px);
                    width: min(1380px, calc(100% - 100px));
                    margin: 0 auto;
                }

                /* Background decoration */

                .mc-about-orb {
                    position: absolute;
                    z-index: -1;
                    pointer-events: none;
                    border: 1px solid rgba(201, 164, 106, 0.23);
                    border-radius: 50%;
                }

                .mc-orb-one {
                    top: 7%;
                    right: -170px;
                    width: 450px;
                    height: 450px;
                    animation: mc-orb-float 12s ease-in-out infinite;
                }

                .mc-orb-two {
                    bottom: 5%;
                    left: -210px;
                    width: 400px;
                    height: 400px;
                    animation: mc-orb-float 15s ease-in-out infinite reverse;
                }

                @keyframes mc-orb-float {
                    0%, 100% {
                        transform: translate3d(0, 0, 0);
                    }
                    50% {
                        transform: translate3d(0, -22px, 0);
                    }
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
                    gap: 13px;
                    margin-bottom: 27px;
                    color: var(--mc-burgundy);
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.24em;
                    line-height: 1.6;
                }

                .mc-eyebrow-line {
                    width: 37px;
                    height: 1px;
                    flex-shrink: 0;
                    background: var(--mc-gold);
                }

                .mc-about-title {
                    margin: 0 0 30px;
                    color: #443d34;
                    font-size: clamp(40px, 4.3vw, 67px);
                    font-weight: 500;
                    line-height: 1.08;
                    letter-spacing: -0.065em;
                    overflow-wrap: normal;
                }

                .mc-about-title > span {
                    color:var(--mc-beige-dark);
                    font-family: Georgia, "Times New Roman", serif;
                    font-weight: 400;
                    font-style: italic;
                    letter-spacing: -0.055em;
                }

                .mc-about-description {
                    max-width: 540px;
                    margin: 0 0 17px;
                    color: #625753;
                    font-size: 15px;
                    font-weight: 400;
                    line-height: 1.95;
                }

                .mc-description-secondary {
                    color: #847873;
                    font-size: 14px;
                }

                /* Buttons */

                .mc-about-actions {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 25px;
                    margin-top: 32px;
                }

                .mc-primary-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 26px;
                    min-height: 56px;
                    padding: 8px 9px 8px 23px;
                    border: 1px solid var(--mc-beige-dark);
                    border-radius: 4px;
                    color: #fff !important;
                    background:var(--mc-beige-dark);
                    font-size: 12px;
                    font-weight: 600;
                    text-decoration: none !important;
                    transition:
                        background 0.35s ease,
                        color 0.35s ease,
                        transform 0.35s ease,
                        box-shadow 0.35s ease;
                }

                .mc-primary-btn:hover {
                    color: var(--mc-beige-dark) !important;
                    background: rgba(255, 228, 106, 0.66);
                    box-shadow: 0 12px 35px rgba(124, 80, 27, 0.1);
                    transform: translateY(-3px);
                }

                .mc-btn-icon {
                    display: grid;
                    width: 36px;
                    height: 36px;
                    place-items: center;
                    border-radius: 3px;
                    color: var(--mc-beige-dark);
                    background: var(--mc-cream);
                    font-size: 19px;
                    transition:
                        transform 0.35s ease,
                        background 0.35s ease;
                }

                .mc-primary-btn:hover .mc-btn-icon {
                    transform: rotate(45deg);
                    background: #ffffff;
                }

                .mc-video-action {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                }

                .mc-video-button {
                    display: grid;
                    width: 48px;
                    height: 48px;
                    place-items: center;
                    overflow: hidden;
                    border: 1px solid rgba(165, 139, 104, 0.3);
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.4);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    transition:
                        background 0.3s ease,
                        transform 0.3s ease;
                }

                .mc-video-action:hover .mc-video-button {
                    background: rgba(201, 164, 106, 0.25);
                    transform: scale(1.06);
                }

                .mc-video-label {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    color: #887c75;
                    font-size: 10px;
                    line-height: 1.3;
                }

                .mc-video-label strong {
                    color: var(--mc-burgundy-dark);
                    font-size: 12px;
                    font-weight: 600;
                }

                /* Stats */

                .mc-about-stats {
                    display: flex;
                    align-items: center;
                    gap: 24px;
                    max-width: 510px;
                    margin-top: 54px;
                    padding-top: 27px;
                    border-top: 1px solid rgba(165, 139, 104, 0.14);
                }

                .mc-stat {
                    display: flex;
                    align-items: center;
                    gap: 13px;
                    min-width: 0;
                }

                .mc-stat-number {
                    display: flex;
                    align-items: flex-start;
                    color: var(--mc-burgundy);
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: 43px;
                    font-weight: 400;
                    line-height: 1;
                }

                .mc-stat-number > span {
                    margin: 2px 0 0 2px;
                    color: var(--mc-gold);
                    font-family: Arial, sans-serif;
                    font-size: 19px;
                }

                .mc-stat-symbol {
                    display: grid;
                    width: 45px;
                    height: 45px;
                    flex-shrink: 0;
                    place-items: center;
                    border: 1px solid rgba(201, 164, 106, 0.6);
                    border-radius: 50%;
                    color: var(--mc-gold);
                    font-size: 24px;
                }

                .mc-stat-text {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .mc-stat-text strong {
                    color: var(--mc-beige-dark);
                    font-size: 11px;
                    font-weight: 700;
                    white-space: nowrap;
                }

                .mc-stat-text > span {
                    color: #92847d;
                    font-size: 10px;
                    line-height: 1.5;
                }

                .mc-stat-divider {
                    width: 1px;
                    height: 43px;
                    flex-shrink: 0;
                    background: rgba(165, 139, 104, 0.15);
                }

                /* Image composition */

                .mc-about-visual {
                    position: relative;
                    min-width: 0;
                    min-height: 610px;
                    margin: 0;
                }

                .mc-image-main {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 83%;
                    height: 490px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.8);
                    border-radius: 3px;
                    background: #e7d9c8;
                    box-shadow: 0 25px 80px rgba(107, 91, 72, 0.12);
                }

                .mc-main-photo,
                .mc-secondary-photo {
                    object-fit: cover;
                    transition: transform 1s cubic-bezier(0.2, 0.7, 0.2, 1);
                }

                .mc-image-main:hover .mc-main-photo,
                .mc-image-secondary:hover .mc-secondary-photo {
                    transform: scale(1.055);
                }

                .mc-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        0deg,
                        rgba(55, 48, 39, 0.55) 0%,
                        rgba(55, 48, 39, 0.08) 35%,
                        transparent 65%
                    );
                }

                .mc-image-caption {
                    position: absolute;
                    right: 23px;
                    bottom: 24px;
                    left: 23px;
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    color: white;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                }

                .mc-caption-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--mc-gold);
                }

                .mc-image-index {
                    position: absolute;
                    top: 23px;
                    right: 23px;
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    color: white;
                    font-size: 10px;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                }

                .mc-index-line {
                    width: 28px;
                    height: 1px;
                    background: rgba(255, 255, 255, 0.7);
                }

                /* Glass card */

                .mc-floating-card {
                    position: absolute;
                    z-index: 4;
                    top: 210px;
                    left: 0;
                    width: 245px;
                    min-height: 285px;
                    padding: 23px;
                    border: 1px solid rgba(255, 255, 255, 0.72);
                    border-radius: 5px;
                    background: linear-gradient(
                        135deg,
                        rgba(255, 252, 246, 0.82),
                        rgba(247, 241, 232, 0.56)
                    );
                    box-shadow:
                        0 20px 70px rgba(107, 91, 72, 0.12),
                        inset 0 1px 0 rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(24px);
                    -webkit-backdrop-filter: blur(24px);
                    animation: mc-glass-float 7s ease-in-out infinite;
                }

                @keyframes mc-glass-float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .mc-floating-card-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .mc-card-kicker {
                    color: #8b7162;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 0.16em;
                }

                .mc-card-icon {
                    display: grid;
                    width: 33px;
                    height: 33px;
                    place-items: center;
                    border: 1px solid #f0d4a2;
                    border-radius: 50%;
                    color: #f0d4a2;
                    font-size: 17px;
                }

                .mc-floating-card h3 {
                    margin: 28px 0;
                    color: var(--mc-beige-dark);
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: 29px;
                    font-weight: 400;
                    line-height: 1.2;
                    letter-spacing: -0.04em;
                }

                .mc-card-bottom {
                    display: flex;
                    align-items: flex-start;
                    gap: 9px;
                    padding-top: 16px;
                    border-top: 1px solid rgba(165, 139, 104, 0.15);
                }

                .mc-card-bottom > span {
                    width: 6px;
                    height: 6px;
                    flex-shrink: 0;
                    margin-top: 5px;
                    border-radius: 50%;
                    background: var(--mc-gold);
                }

                .mc-card-bottom p {
                    margin: 0;
                    color: #776962;
                    font-size: 10px;
                    line-height: 1.7;
                }

                /* Secondary image */

                .mc-image-secondary {
                    position: absolute;
                    right: 3%;
                    bottom: 0;
                    width: 52%;
                    height: 215px;
                    overflow: hidden;
                    border: 5px solid var(--mc-cream);
                    border-radius: 3px;
                    background: #e7d9c8;
                    box-shadow: 0 15px 50px rgba(107, 91, 72, 0.12);
                }

                /* Brand mark */

                .mc-visual-label {
                    position: absolute;
                    right: 2%;
                    bottom: -32px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: var(--mc-burgundy);
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                }

                .mc-visual-label-mark {
                    display: grid;
                    width: 35px;
                    height: 35px;
                    place-items: center;
                    border: 1px solid rgba(165, 139, 104, 0.3);
                    border-radius: 50%;
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: 19px;
                    font-weight: 400;
                }

                .mc-visual-label small {
                    display: block;
                    margin-top: 4px;
                    color: #95877e;
                    font-size: 7px;
                    letter-spacing: 0.18em;
                }

                /* Bottom strip */

                .mc-about-bottom {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    width: min(1380px, calc(100% - 100px));
                    margin: 100px auto 0;
                    color: #8a7b74;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 0.16em;
                }

                .mc-bottom-line {
                    height: 1px;
                    flex: 1;
                    background: rgba(165, 139, 104, 0.15);
                }

                .mc-bottom-location {
                    color: var(--mc-burgundy);
                    white-space: nowrap;
                }

                /* Scroll reveal */

                .mc-about [data-reveal] {
                    opacity: 0;
                    transform: translate3d(0, 30px, 0);
                    transition:
                        opacity 0.8s ease,
                        transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
                }

                .mc-about [data-reveal].mc-visible {
                    opacity: 1;
                    transform: translate3d(0, 0, 0);
                }

                .mc-about-content > [data-reveal]:nth-child(2) {
                    transition-delay: 0.08s;
                }

                .mc-about-content > [data-reveal]:nth-child(3) {
                    transition-delay: 0.16s;
                }

                .mc-about-content > [data-reveal]:nth-child(4) {
                    transition-delay: 0.22s;
                }

                .mc-about-content > [data-reveal]:nth-child(5) {
                    transition-delay: 0.28s;
                }

                .mc-about-content > [data-reveal]:nth-child(6) {
                    transition-delay: 0.34s;
                }

                .mc-about-visual > [data-reveal] {
                    transition-delay: 0.16s;
                }

                .mc-about-visual > .mc-floating-card[data-reveal] {
                    transition-delay: 0.32s;
                }

                .mc-about-visual > .mc-image-secondary[data-reveal] {
                    transition-delay: 0.45s;
                }

                /* Tablet */

                @media (max-width: 1100px) {
                    .mc-about {
                        padding-top: 95px;
                    }

                    .mc-about-container {
                        width: calc(100% - 64px);
                        grid-template-columns:
                            minmax(0, 1fr)
                            minmax(0, 0.95fr);
                        gap: 38px;
                    }

                    .mc-about-title {
                        font-size: clamp(38px, 5vw, 58px);
                    }

                    .mc-about-visual {
                        min-height: 530px;
                    }

                    .mc-image-main {
                        height: 420px;
                    }

                    .mc-floating-card {
                        top: 185px;
                        width: 215px;
                        min-height: 265px;
                        padding: 19px;
                    }

                    .mc-floating-card h3 {
                        font-size: 26px;
                    }

                    .mc-image-secondary {
                        height: 175px;
                    }

                    .mc-about-stats {
                        gap: 15px;
                    }

                    .mc-stat {
                        gap: 9px;
                    }

                    .mc-stat-number {
                        font-size: 36px;
                    }

                    .mc-stat-text strong {
                        white-space: normal;
                    }

                    .mc-about-bottom {
                        width: calc(100% - 64px);
                    }
                }

                /* Mobile */

                @media (max-width: 767px) {
                    .mc-about {
                        padding: 78px 0 25px;
                    }

                    .mc-about-container {
                        display: flex;
                        flex-direction: column;
                        align-items: stretch;
                        gap: 55px;
                        width: calc(100% - 40px);
                    }

                    .mc-eyebrow {
                        margin-bottom: 20px;
                        font-size: 9px;
                    }

                    .mc-about-title {
                        margin-bottom: 23px;
                        font-size: clamp(39px, 10vw, 59px);
                        line-height: 1.06;
                    }

                    .mc-about-description {
                        font-size: 14px;
                        line-height: 1.85;
                    }

                    .mc-description-secondary {
                        font-size: 13px;
                    }

                    .mc-about-actions {
                        gap: 19px;
                        margin-top: 27px;
                    }

                    .mc-primary-btn {
                        min-height: 51px;
                        gap: 15px;
                        padding-left: 16px;
                    }

                    .mc-video-button {
                        width: 42px;
                        height: 42px;
                    }

                    .mc-about-stats {
                        flex-wrap: wrap;
                        gap: 15px;
                        margin-top: 38px;
                        padding-top: 22px;
                    }

                    .mc-stat {
                        flex: 1 1 0;
                    }

                    .mc-stat-divider {
                        display: none;
                    }

                    .mc-stat-number {
                        font-size: 37px;
                    }

                    .mc-stat-symbol {
                        width: 39px;
                        height: 39px;
                    }

                    .mc-stat-text strong {
                        font-size: 10px;
                    }

                    .mc-stat-text > span {
                        font-size: 9px;
                    }

                    .mc-about-visual {
                        width: 100%;
                        min-height: 475px;
                    }

                    .mc-image-main {
                        right: 0;
                        width: 88%;
                        height: 365px;
                    }

                    .mc-floating-card {
                        top: 145px;
                        left: 0;
                        width: 190px;
                        min-height: 240px;
                        padding: 17px;
                    }

                    .mc-floating-card h3 {
                        margin: 24px 0;
                        font-size: 25px;
                    }

                    .mc-image-secondary {
                        right: 0;
                        bottom: 0;
                        width: 54%;
                        height: 150px;
                        border-width: 4px;
                    }

                    .mc-visual-label {
                        right: 0;
                        bottom: -38px;
                    }

                    .mc-about-bottom {
                        width: calc(100% - 40px);
                        gap: 10px;
                        margin-top: 75px;
                        font-size: 7px;
                        letter-spacing: 0.1em;
                    }

                    .mc-bottom-line {
                        min-width: 15px;
                    }
                }

                @media (max-width: 380px) {
                    .mc-about-container {
                        width: calc(100% - 30px);
                    }

                    .mc-about-title {
                        font-size: 37px;
                    }

                    .mc-about-visual {
                        min-height: 430px;
                    }

                    .mc-image-main {
                        height: 325px;
                    }

                    .mc-floating-card {
                        top: 130px;
                        width: 175px;
                        min-height: 225px;
                        padding: 14px;
                    }

                    .mc-floating-card h3 {
                        font-size: 23px;
                    }

                    .mc-image-secondary {
                        height: 135px;
                    }

                    .mc-about-bottom {
                        width: calc(100% - 30px);
                    }
                }

                /* =========================================
                   SMART GLASSMORPHISM REFINEMENT
                   Keeps the existing content and behavior intact
                ========================================= */
                .mc-about {
                    --mc-glass-border: rgba(255, 255, 255, 0.82);
                    --mc-glass-fill: rgba(255, 255, 255, 0.48);
                    --mc-glass-shadow: 0 24px 70px rgba(107, 91, 72, 0.09);
                    background:
                        radial-gradient(ellipse at 78% 22%, rgba(201, 164, 106, 0.18), transparent 32%),
                        radial-gradient(ellipse at 15% 72%, rgba(165, 139, 104, 0.055), transparent 36%),
                        linear-gradient(135deg, #fffdf9 0%, #f8f4ee 48%, #ffffff 100%);
                }

                .mc-about-orb {
                    border-color: rgba(201, 164, 106, 0.19);
                    box-shadow: inset 0 0 55px rgba(255, 255, 255, 0.35);
                }

                .mc-eyebrow {
                    gap: 12px;
                    letter-spacing: 0.22em;
                }

                .mc-eyebrow-line {
                    width: 42px;
                    height: 2px;
                    border-radius: 99px;
                    box-shadow: 0 0 12px rgba(201, 164, 106, 0.35);
                }

                .mc-about-title {
                    color: #3f392f;
                    letter-spacing: -0.072em;
                    text-wrap: balance;
                }

                .mc-about-title > span {
                    color: #9c7941;
                    text-shadow: 0 5px 22px rgba(156, 121, 65, 0.10);
                }

                .mc-about-description {
                    color: #655b59;
                    max-width: 520px;
                }

                .mc-primary-btn {
                    position: relative;
                    overflow: hidden;
                    gap: 22px;
                    min-height: 58px;
                    padding: 8px 9px 8px 24px;
                    border: 1px solid rgba(255, 255, 255, 0.72);
                    border-radius: 16px;
                    background: linear-gradient(135deg, rgba(165, 139, 104, 0.96), rgba(107, 91, 72, 0.98));
                    box-shadow: 0 12px 30px rgba(107, 91, 72, 0.18), inset 0 1px 0 rgba(255,255,255,0.16);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                }

                .mc-primary-btn::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    background: linear-gradient(115deg, transparent 15%, rgba(255,255,255,0.12) 48%, transparent 72%);
                    transform: translateX(-120%);
                    transition: transform 0.7s ease;
                }

                .mc-primary-btn:hover::before { transform: translateX(120%); }
                .mc-primary-btn:hover {
                    color: #fff !important;
                    background: linear-gradient(135deg, #9b8262, #6b5b48);
                    box-shadow: 0 18px 40px rgba(107, 91, 72, 0.23);
                    transform: translateY(-3px);
                }

                .mc-btn-icon {
                    position: relative;
                    z-index: 1;
                    width: 39px;
                    height: 39px;
                    border: 1px solid rgba(255,255,255,0.68);
                    border-radius: 12px;
                    color: #6b4b27;
                    background: linear-gradient(145deg, rgba(255,255,255,0.98), rgba(247,241,232,0.82));
                    box-shadow: inset 0 1px 0 #fff, 0 4px 12px rgba(0,0,0,0.08);
                }

                .mc-about-stats {
                    gap: 22px;
                    padding: 22px 20px;
                    border: 1px solid rgba(255, 255, 255, 0.86);
                    border-radius: 22px;
                    background: linear-gradient(135deg, rgba(255,255,255,0.72), rgba(255,255,255,0.38));
                    box-shadow: 0 12px 38px rgba(107, 91, 72, 0.055), inset 0 1px 0 rgba(255,255,255,0.9);
                    backdrop-filter: blur(18px);
                    -webkit-backdrop-filter: blur(18px);
                }

                .mc-stat-number { color: #a58b68; }
                .mc-stat-symbol {
                    border-color: rgba(201, 164, 106, 0.55);
                    background: rgba(255,255,255,0.54);
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.95), 0 5px 16px rgba(165,139,104,0.05);
                }

                .mc-image-main {
                    width: 85%;
                    height: 500px;
                    border: 1px solid rgba(255,255,255,0.9);
                    border-radius: 28px;
                    box-shadow: 0 30px 85px rgba(107,91,72,0.17), inset 0 1px 0 rgba(255,255,255,0.7);
                    transform: translateZ(0);
                }

                .mc-main-photo,
                .mc-secondary-photo { filter: saturate(0.92) contrast(1.02); }

                .mc-image-overlay {
                    background: linear-gradient(180deg, rgba(55,48,39,0.04) 0%, transparent 42%, rgba(55,48,39,0.48) 100%);
                }

                .mc-image-index {
                    top: 20px;
                    right: 20px;
                    padding: 10px 13px;
                    border: 1px solid rgba(255,255,255,0.42);
                    border-radius: 99px;
                    background: rgba(255,255,255,0.17);
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                }

                .mc-floating-card {
                    top: 205px;
                    left: -8px;
                    width: 258px;
                    min-height: 300px;
                    padding: 25px;
                    border: 1px solid rgba(255,255,255,0.88);
                    border-radius: 24px;
                    background: linear-gradient(145deg, rgba(255,255,255,0.78), rgba(255,250,241,0.48));
                    box-shadow: 0 28px 75px rgba(107,91,72,0.15), inset 0 1px 0 rgba(255,255,255,0.98), inset 0 -1px 0 rgba(255,255,255,0.3);
                    backdrop-filter: blur(28px) saturate(145%);
                    -webkit-backdrop-filter: blur(28px) saturate(145%);
                }

                .mc-card-kicker { color: #8b6c43; }
                .mc-card-icon {
                    border-color: rgba(156,121,65,0.35);
                    color: #9c7941;
                    background: rgba(255,255,255,0.45);
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.9);
                }

                .mc-floating-card h3 {
                    color: #7d5b32;
                    font-size: 31px;
                    line-height: 1.16;
                }

                .mc-card-bottom { border-top-color: rgba(165,139,104,0.12); }

                .mc-image-secondary {
                    right: 1%;
                    bottom: 2px;
                    width: 51%;
                    height: 220px;
                    border: 1px solid rgba(255,255,255,0.9);
                    border-radius: 22px;
                    box-shadow: 0 22px 60px rgba(107,91,72,0.18), 0 0 0 7px rgba(255,255,255,0.32);
                }

                .video-holder {
                    border: 1px solid rgba(255,255,255,0.9);
                    border-radius: 50%;
                    background: linear-gradient(145deg, rgba(255,255,255,0.82), rgba(247,241,232,0.5));
                    backdrop-filter: blur(18px);
                    -webkit-backdrop-filter: blur(18px);
                    box-shadow: 0 12px 32px rgba(107,91,72,0.10), inset 0 1px 0 rgba(255,255,255,0.95);
                }

                .video-wrap:hover .video-holder {
                    color: #fff;
                    background: rgba(165,139,104,0.92);
                    box-shadow: 0 16px 36px rgba(165,139,104,0.22);
                }

                .mc-about-bottom {
                    color: #8c7b73;
                    margin-top: 80px;
                }

                @media (max-width: 1100px) {
                    .mc-floating-card { left: -4px; width: 225px; }
                    .mc-image-main { height: 425px; }
                    .mc-about-stats { padding: 18px 15px; }
                }

                @media (max-width: 767px) {
                    .mc-about-stats {
                        padding: 18px 14px;
                        border-radius: 18px;
                        gap: 14px;
                    }
                    .mc-image-main {
                        width: 89%;
                        border-radius: 23px;
                    }
                    .mc-floating-card {
                        left: -2px;
                        border-radius: 20px;
                        background: linear-gradient(145deg, rgba(255,255,255,0.86), rgba(255,250,241,0.66));
                    }
                    .mc-image-secondary { border-radius: 18px; }
                    .mc-about-bottom { margin-top: 68px; }
                }

                @media (prefers-reduced-motion: reduce) {
                    .mc-about *,
                    .mc-about *::before,
                    .mc-about *::after {
                        scroll-behavior: auto !important;
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }

                    .mc-about [data-reveal] {
                        opacity: 1;
                        transform: none;
                    }
                }
            `}</style>

            <style jsx>{`
            
            .video-wrap {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    margin-left: 22px;
    cursor: pointer;
    vertical-align: middle;
}

.video-holder {
    width: 56px;
    height: 56px;
    min-width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--mc-beige-dark);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(14px);
    box-shadow: 0 8px 25px rgba(65, 63, 30, 0.07);
    transition: transform 0.35s ease,
                background 0.35s ease,
                box-shadow 0.35s ease;
}

.video-wrap:hover .video-holder {
    transform: scale(1.07);
    background: var(--mc-beige-dark);
    box-shadow: 0 10px 30px rgba(91, 80, 29, 0.18);
}

.video-story-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0px;
    line-height: 0;
}

.video-story-text span {
    display: block;
    margin: 0;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 1.2px;
    color: #938d7d;
}

.video-story-text strong {
    display: block;
    margin: 0;
    font-size: 13px;
    line-height: 1.4;
    font-weight: 600;
    color:var(--mc-beige-dark);
}

@media (max-width: 575px) {
    .video-wrap {
        margin-left: 0;
        gap: 10px;
    }

    .video-holder {
        width: 48px;
        height: 48px;
        min-width: 48px;
    }
}
`}</style>
        </>
    );
};


export default About;   