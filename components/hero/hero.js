"use client";

import React, { useEffect, useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Pagination,
  Parallax,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const sliderData = [

  {
    id: 3,
    img: "/images/slider/hero-slide/img-2.1-main.png",
    foregroundImg: "/images/slider/hero-slide/img-2.1-fg.png",
    bgLetter: "COMMERCE",
    eyebrow: "WHERE BUSINESS THRIVES",
    title: "Spaces That Inspire",
    subtitle:
      "Discover modern shopping, premium commercial spaces and a destination designed for growth.",
    category: "COMMERCIAL EXCELLENCE",
    class: 'commercial'
  },
  {
    id: 4,
    img: "/images/slider/hero-slide/img-3.1-main.png",
    foregroundImg: "/images/slider/hero-slide/img-3.1-fg.png",
    bgLetter: "LIVING",
    eyebrow: "LIVE ABOVE EXPECTATIONS",
    title: "Elevated Lifestyle",
    subtitle:
      "Contemporary residential architecture meets thoughtfully designed community living.",
    category: "RESIDENTIAL LIVING",
    class: 'residence'
  },
  {
    id: 5,
    img: "/images/slider/hero-slide/img-9.1-main.png",
    foregroundImg: "/images/slider/hero-slide/img-9.1-fg.png",
    bgLetter: "LIVING",
    eyebrow: "LIVE ABOVE EXPECTATIONS",
    title: "Close To Nature",
    subtitle:
      "Contemporary green park meets thoughtfully designed community living.",
    category: "Central Park",
    class: 'park'
  },
  {
    id: 6,
    img: "/images/slider/hero-slide/img-4.1-main.png",
    foregroundImg: "/images/slider/hero-slide/img-4.1-fg.png",
    bgLetter: "HEALTH",
    eyebrow: "A HEALTHIER TOMORROW",
    title: "World Class Healthcare",
    subtitle:
      "A vision for comprehensive healthcare with a multi-specialized hospital.",
    category: "HEALTHCARE",
    class: 'hospital'
  },
  {
    id: 7,
    img: "/images/slider/hero-slide/img-5.1-main.png",
    foregroundImg: "/images/slider/hero-slide/img-5.1-fg.png",
    bgLetter: "WELLNESS",
    eyebrow: "CARE THAT MAKES A DIFFERENCE",
    title: "A Better Way To Care",
    subtitle:
      "A dedicated vision for specialized dental and wellbeing.",
    category: "SPECIALIZED CARE",
    class: 'dental'
  },
  {
    id: 8,
    img: "/images/slider/hero-slide/img-6.1-main.png",
    foregroundImg: "/images/slider/hero-slide/img-6.1-fg.png",
    bgLetter: "WELLNESS",
    eyebrow: "A New Way To Care",
    title: " A Committed  Future",
    subtitle:
      "A dedicated vision for specialized nursing education and wellbeing.",
    category: "SPECIALIZED CARE",
    class: 'nursing'
  },
  {
    id: 9,
    img: "/images/slider/hero-slide/img-7-main.png",
    foregroundImg: "/images/slider/hero-slide/img-7-fg.png",
    bgLetter: "HARMONY",
    eyebrow: "ROOTED IN PEACE",
    title: "A Place To Find Serenity ",
    subtitle:
      "A welcoming spiritual destination envisioned around community and tranquillity.",
    category: "MOSQUE & MADRASHA",
    class: 'mosque'
  },
  {
    id: 10,
    img: "/images/slider/hero-slide/img-8-main.png",
    foregroundImg: "/images/slider/hero-slide/img-8-main.png",
    bgLetter: "FUTURE",
    eyebrow: "WHERE POTENTIAL TAKES FLIGHT",
    title: "Inspiring The Future ",
    subtitle:
      "An international school envisioned to nurture curiosity, creativity and lifelong learning.",
    category: "WORLD-CLASS EDUCATION",
    class: 'school'
  },

  {
    id: 1,
    img: "/images/slider/hero-slide/img-1.1.png",
    foregroundImg: "/images/slider/hero-slide/img-1.1.png",
    bgLetter: "",
    eyebrow: "",
    title: "",
    subtitle: "",
    category: "",

  },
  {
    id: 2,
    img: "/images/slider/hero-slide/img-2.2-main.png",
    foregroundImg:
      "/images/slider/hero-slide/img-2.2-main-.png",
    bgLetter: "CONNECT",
    eyebrow: "CONNECTED TO EVERYTHING",
    title: "Closer To What Matters",
    subtitle:
      "Experience convenient access to the Turag River, Uttara and surrounding destinations.",
    category: "SEAMLESS CONNECTIVITY",
    class: 'connection'
  },
];


const projectHotspots = [
  {
    id: "hospital",
    label: "Hospital",
    short: "HOSPITAL",
    x: 30,
    y: 50,
    image: "/images/slider/hero-slide/img-4.1-main.png",
    description:
      "Multi-specialist  healthcare facilities designed around modern treatment.",
  },

  {
    id: "dental",
    label: "Dental Hospital",
    short: "DENTAL HOSPITAL",
    x: 37,
    y: 39,
    image: "/images/slider/hero-slide/img-5.1-main.png",
    description:
      "Dedicated dental care facilities designed around modern treatment.",
  },
  {
    id: "nursing",
    label: "Nursing Institute",
    short: "NURSING INSTITUTE",

    x: 42,
    y: 34,
    image: "/images/slider/hero-slide/img-6.1-main1.png",
    description:
      "Modern nursing institute with hi-tech facilities.",
  },

  {
    id: "school",
    label: "International School",
    short: "INTERNATIONAL SCHOOL",
    x: 35,
    y: 20,
    image: "/images/slider/hero-slide/img-8-main.png",
    description:
      "A learning environment planned to support the next generation.",
  },
  {
    id: "mosque",
    label: "Mosque & Madrasha",
    short: "MOSQUE & MADRASHA",
    x: 50,
    y: 20,
    image: "/images/slider/hero-slide/img-7-main.png",
    description:
      "A spiritual and educational destination at the heart of the community.",
  },
  {
    id: "residential",
    label: "Residential Buildings",
    short: "RESIDENTIAL BUILDINGS",
    x: 83,
    y: 17,
    image: "/images/slider/hero-slide/img-3.1-main.png",
    description:
      "Contemporary homes with landscaped surroundings and community spaces.",
  },
  {
    id: "park",
    label: "Central Park",
    short: "Central Park",
    x: 63,
    y: 40,
    image: "/images/slider/hero-slide/img-9.1-main.png",
    description:
      "Family park with landscaped surroundings and community spaces.",
  },
  {
    id: "commercial",
    label: "Prestigious Commercial Spaces",
    short: "COMMERCIAL SPACES",
    x: 73,
    y: 59,
    image: "/images/slider/hero-slide/img-2.1-main.png",
    description:
      "Flexible commercial spaces for businesses and everyday services.",
  },
  {
    id: "mall",
    label: "Shopping Mall",
    short: "SHOPPING MALL",
    x: 72,
    y: 77,
    image: "/images/slider/hero-slide/img-2.1-main.png",
    description: "Retail, dining and lifestyle experiences in one destination.",
  },
  {
    id: "avenue",
    label: "Avenue 9",
    short: "AVENUE 9",
    x: 40,
    y: 92,
    image: "/images/slider/hero-slide/img-2.1-main.png",
    description:
      "A key access route connecting the development and its surroundings.",
  },
];

export default function Hero() {
  const [activeSlideId, setActiveSlideId] = useState(1);
  const [activeHotspotId, setActiveHotspotId] = useState("hospital");
  const [hotspotDetailsOpen, setHotspotDetailsOpen] = useState(true);
  const activeHotspot =
    projectHotspots.find((item) => item.id === activeHotspotId) ||
    projectHotspots[0];
  const [width, setWidth] = useState(0);


  useEffect(() => {
    setWidth(window.innerWidth);

  });

  const swiperRef = useRef(null);

  useEffect(() => {
    // Cycle project details only while the master-plan slide is active.
    if (activeSlideId !== 1 || !hotspotDetailsOpen) return undefined;
    const timer = window.setInterval(() => {
      setActiveHotspotId((current) => {
        const index = projectHotspots.findIndex((item) => item.id === current);
        return projectHotspots[(index + 1) % projectHotspots.length].id;
      });
    }, 4500);
    return () => window.clearInterval(timer);
  }, [activeSlideId, hotspotDetailsOpen]);

  return (
    <section >
      <section style={{
        marginTop: width > 768 ? "0px" : "80px",
        backgroundColor: "#101b25",
        position: "relative",


      }} className="uttara-hero" aria-label="Uttara View highlights">
        <Swiper
          className="uttara-swiper"
          modules={[A11y,
            Autoplay,
            Pagination, Parallax, EffectFade]}
          slidesPerView={1}
          spaceBetween={0}
          speed={1200}
          loop
          parallax
          effect="fade"
          fadeEffect={{ crossFade: true }}
          watchSlidesProgress
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            el: ".uttara-pagination",
            clickable: true,
            type: "fraction",
            formatFractionCurrent: (number) => String(number).padStart(2, "0"),
            formatFractionTotal: (number) => String(number).padStart(2, "0"),
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;

            requestAnimationFrame(() => swiper.update());
          }}

        >
          {sliderData.map((slide) => {
            if (width < 768 && slide.id === 1) return null;

            return (
              <SwiperSlide key={slide.id}>
                <div className="uttara-slide">
                  {/* Background image: moves more slowly than the content */}
                  <div
                    className="uttara-slide-image"
                    style={{ backgroundImage: `url("${slide.img}")` }}
                  />

                  {/* Contrast overlay sits above the background, below the title. */}
                  {<div className="uttara-slide-overlay" />}

                  {/* Large title: this layer sits BEHIND the building cutout. */}
                  <h1
                    className={`uttara-hero-title ${slide?.class || ""}`}
                    data-swiper-parallax="-240"
                    data-swiper-parallax-duration="1400"
                  >
                    {slide.title}
                  </h1>

                  {/*
                                  Real object-depth layer. Each foreground PNG must have
                                  a transparent background and align pixel-perfectly with
                                  its matching hero image. Building, roof, trees, etc. stay
                                  opaque so the headline naturally passes behind them.
                                */}
                  {(slide.id != 2 && slide.id != 10) && <img
                    className={`uttara-building-foreground ${slide?.class}`}
                    src={slide.foregroundImg}
                    alt=""
                    aria-hidden="true"
                    draggable="false"
                    onError={(event) => {
                      // A transparent foreground cutout is required for realistic occlusion.
                      // If it is missing, hide the broken image and report the exact path.
                      console.warn(
                        `Missing foreground cutout: ${slide.foregroundImg}`,
                      );
                      event.currentTarget.style.display = "none";
                    }}
                  />}


                  {slide.id === 1 && (
                    <div
                      className="uttara-project-hotspots"
                      aria-label="Project infrastructure hotspots"
                    >
                      {projectHotspots.map((item, index) => (
                        <button
                          key={item.id}
                          type="button"
                          className={`uttara-hotspot ${activeHotspotId === item.id ? "is-active" : ""}`}
                          style={{
                            left: `${item.x}%`,
                            top: `${item.y}%`,
                            "--hotspot-index": index,
                          }}
                          onClick={() => {
                            setActiveHotspotId(item.id);
                            setHotspotDetailsOpen(true);
                          }}
                          aria-label={`Show details for ${item.label}`}
                          aria-pressed={activeHotspotId === item.id}
                        >
                          <span className="uttara-hotspot-pulse" />
                          <span className="uttara-hotspot-label">
                            {item.short}
                          </span>
                        </button>
                      ))}

                      {hotspotDetailsOpen && (
                        <aside
                          className="uttara-hotspot-card"
                          aria-live="polite"
                          style={{
                            left: `${activeHotspot.x}%`,
                            top: `${activeHotspot.y}%`,
                            right: "auto",
                            bottom: "auto",
                            "--hotspot-card-shift-x":
                              activeHotspot.x > 55
                                ? "calc(-100% - 22px)"
                                : "22px",
                            "--hotspot-card-shift-y":
                              activeHotspot.y > 58
                                ? "calc(-100% - 22px)"
                                : "22px",
                          }}
                        >
                          <button
                            className="uttara-hotspot-close"
                            type="button"
                            onClick={() => setHotspotDetailsOpen(false)}
                            aria-label="Close infrastructure details"
                          >
                            ×
                          </button>
                          <div className="uttara-hotspot-card-image">
                            <img
                              src={activeHotspot.image}
                              alt={activeHotspot.label}
                              onError={(event) => {
                                event.currentTarget.style.display = "none";
                              }}
                            />
                          </div>
                          <div className="uttara-hotspot-card-body">
                            <span className="uttara-hotspot-kicker">
                              PROJECT INFRASTRUCTURE
                            </span>
                            <h2 style={{ letterSpacing: '.1em' }} className="">{activeHotspot.label}</h2>
                            <p>{activeHotspot.description}</p>
                            <div className="uttara-hotspot-card-controls">
                              <span>
                                {String(
                                  projectHotspots.findIndex(
                                    (item) => item.id === activeHotspot.id,
                                  ) + 1,
                                ).padStart(2, "0")}{" "}
                                <i>
                                  /{" "}
                                  {String(projectHotspots.length).padStart(
                                    2,
                                    "0",
                                  )}
                                </i>
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  setActiveHotspotId(
                                    (current) =>
                                      projectHotspots[
                                        (projectHotspots.findIndex(
                                          (item) => item.id === current,
                                        ) +
                                          1) %
                                        projectHotspots.length
                                      ].id,
                                  )
                                }
                              >
                                Next location <b>→</b>
                              </button>
                            </div>
                          </div>
                        </aside>
                      )}
                    </div>
                  )}

                  {/* Main content */}
                  <div className="uttara-container">
                    <div className="uttara-content">
                      <div
                        className="uttara-eyebrow"
                        data-swiper-parallax="-180"
                        data-swiper-parallax-duration="900"
                      >
                        <span className="uttara-eyebrow-line" />
                        {slide.eyebrow}
                      </div>

                      <p
                        className="uttara-subtitle"
                        data-swiper-parallax="-180"
                        data-swiper-parallax-duration="1000"
                      >
                        {slide.subtitle}
                      </p>

                      <div
                        className="uttara-actions"
                        data-swiper-parallax="-100"
                        data-swiper-parallax-duration="900"
                      >
                        <AnchorLink href="#about" className="uttara-cta">
                          <span>Discover MUHAJIREEN</span>
                          <span className="uttara-cta-icon">↗</span>
                        </AnchorLink>

                        <span className="uttara-category">{slide.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom information bar */}
                  <div className="uttara-bottom">
                    <div className="uttara-slider-arrows" aria-label="Slider navigation">
                      <button
                        type="button"
                        className="uttara-slider-arrow"
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="Previous slide"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M19 12H5M12 19l-7-7 7-7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      <button
                        type="button"
                        className="uttara-slider-arrow"
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Next slide"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M5 12h14m-7-7 7 7-7 7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="uttara-pagination" />

                    <AnchorLink href="#about" className="uttara-scroll">
                      <span>SCROLL TO EXPLORE</span>
                      <span className="uttara-scroll-line" />
                      <span className="uttara-scroll-arrow">↓</span>
                    </AnchorLink>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

        </Swiper>


      </section>

      <style jsx global>{`
  /* ================================
     UTTARA VIEW HERO SLIDER
     Full rewritten styles (Mobile + Tablet fixed)
  ================================ */

  .connection { top: 15%; }
  .school     { top: 15%; }
  .park     { top: 23%; margin-top: -20px;  }
  .nursing     { top: 13%; margin-top: 60px;margin-left: -60px; }
  .commercial { top: 18%; margin-top: -10px; }
  .residence  { top: 16%; margin-top: 20px; }
  .hospital   { top: 19%; margin-top: -40px; }
  .dental     { top: 13%; margin-top: 20px; }
  .mosque     { top: 24%; margin-top: -10px;margin-left: -10px; }
  

  /* ---------- Hotspots ---------- */
  .uttara-project-hotspots {
    position: absolute;
    z-index: 6;
    inset: 0;
    pointer-events: none;
  }

  .uttara-hotspot {
    position: absolute;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    max-width: 230px;
    padding: 0;
    border: 0;
    background: transparent;
    color: #fff;
    cursor: pointer;
    pointer-events: auto;
    transform: translate(-50%, -50%);
  }

  .uttara-hotspot-pulse {
    position: relative;
    flex: 0 0 15px;
    width: 15px;
    height: 15px;
    border: 3px solid #fff;
    border-radius: 50%;
    background: #f1b96e;
    box-shadow:
      0 0 0 5px rgba(255, 255, 255, 0.22),
      0 2px 14px rgba(0, 0, 0, 0.35);
    transition: transform 0.25s ease, background 0.25s ease;
  }

  .uttara-hotspot-pulse::after {
    position: absolute;
    inset: -8px;
    border: 1px solid rgba(255, 255, 255, 0.75);
    border-radius: 50%;
    content: "";
    animation: uttaraHotspotPulse 2.2s ease-out infinite;
  }

  .uttara-hotspot-label {
    padding: 8px 11px;
    border: 1px solid rgba(255, 255, 255, 0.45);
    border-radius: 7px;
    background: rgba(8, 25, 35, 0.84);
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.18);
    font-size: 10px;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: 0.035em;
    white-space: nowrap;
    backdrop-filter: blur(8px);
    transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
  }

  .uttara-hotspot:hover .uttara-hotspot-label,
  .uttara-hotspot.is-active .uttara-hotspot-label {
    border-color: #f1c27f;
    background: #f1c27f;
    color: #12202a;
  }

  .uttara-hotspot.is-active .uttara-hotspot-pulse {
    transform: scale(1.2);
    background: #fff;
  }

  @keyframes uttaraHotspotPulse {
    0%   { transform: scale(0.55); opacity: 0.9; }
    100% { transform: scale(1.55); opacity: 0; }
  }

  /* ---------- Hotspot Card ---------- */
  .uttara-hotspot-card {
    position: absolute;
    right: auto;
    bottom: auto;
    transform: translate(
      var(--hotspot-card-shift-x, 0),
      var(--hotspot-card-shift-y, 0)
    );
    display: grid;
    grid-template-columns: 150px minmax(210px, 290px);
    width: min(460px, calc(100% - 40px));
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 13px;
    background: rgba(9, 15, 20, 0.92);
    color: #fff;
    box-shadow: 0 18px 55px rgba(0, 0, 0, 0.35);
    pointer-events: auto;
    backdrop-filter: blur(16px);
    animation: uttaraHotspotCardIn 0.35s ease both;
  }

  .uttara-hotspot-card-image {
    height: 100%;
    min-height: 190px;
    overflow: hidden;
    background: linear-gradient(135deg, #233d48, #9c886c);
  }

  .uttara-hotspot-card-image img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 190px;
    object-fit: cover;
    object-position: center;
  }

  .uttara-hotspot-card-body {
    position: relative;
    padding: 22px 20px 17px;
  }

  .uttara-hotspot-close {
    position: absolute;
    z-index: 2;
    top: 7px;
    right: 9px;
    width: 27px;
    height: 27px;
    border: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
  }

  .uttara-hotspot-kicker {
    color: #e7bd7e;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 0.16em;
  }

  .uttara-hotspot-card h2 {
    margin: 10px 15px 8px 0;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.15;
  }

  .uttara-hotspot-card p {
    margin: 0;
    color: rgba(255, 255, 255, 0.76);
    font-size: 12px;
    line-height: 1.6;
  }

  .uttara-hotspot-card-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 18px;
    font-size: 10px;
    font-weight: 800;
  }

  .uttara-hotspot-card-controls i {
    color: rgba(255, 255, 255, 0.45);
    font-style: normal;
  }

  .uttara-hotspot-card-controls button {
    padding: 7px 0;
    border: 0;
    background: transparent;
    color: #f1c27f;
    font: inherit;
    cursor: pointer;
  }

  .uttara-hotspot-card-controls b {
    margin-left: 5px;
    font-size: 16px;
  }

  @keyframes uttaraHotspotCardIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* ---------- Core Hero ---------- */
  .uttara-hero {
    --uttara-gold: #e6c28a;
    --uttara-white: #ffffff;
    --uttara-ink: #07121b;

    position: relative;
    display: block;
    isolation: isolate;
    width: 100%;
    height: 100svh;
    min-height: 650px;
    max-height: 1000px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: #101b25;
    color: var(--uttara-white);
  }

  .uttara-hero *,
  .uttara-hero *::before,
  .uttara-hero *::after {
    box-sizing: border-box;
  }

  .uttara-hero .uttara-swiper {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
  }

  .uttara-hero .swiper-wrapper {
    height: 100%;
  }

  .uttara-hero .swiper-slide {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #101b25;
  }

  .uttara-slide {
    position: relative;
    isolation: isolate;
    width: 100%;
    height: 100%;
    min-height: 0;
    overflow: hidden;
    background: #101b25;
  }

  /* Background image */
  .uttara-slide-image {
    position: absolute;
    inset: -2%;
    z-index: 0;
    width: 104%;
    height: 104%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: scale(1.02);
    will-change: transform;
    transition: transform 7s cubic-bezier(0.2, 0.65, 0.3, 1);
  }

  .uttara-hero .swiper-slide-active .uttara-slide-image {
    transform: scale(1.09);
  }

  .uttara-slide-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background:
      linear-gradient(
        20deg,
        rgba(4, 13, 22, 0.55) 0%,
        rgba(4, 13, 22, 0.38) 33%,
        rgba(4, 13, 22, 0.25) 67%,
        rgba(4, 13, 22, 0.08) 100%
      ),
      linear-gradient(
        0deg,
        rgba(4, 12, 20, 0.58) 0%,
        transparent 34%,
        rgba(4, 12, 20, 0.08) 100%
      );
  }

  /* Large title (behind building cutout) */
  .uttara-hero-title {
    position: absolute;
    z-index: 2;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0 1.5vw;
    overflow: visible;
    color: #fff;
    font-weight: 600 !important;
    font-size: clamp(80px, 15vh, 200px) !important;
    font-family: inherit;
    line-height: 0.95;
    letter-spacing: 0.025em;
    white-space: nowrap;
    text-align: center;
    text-shadow: 0 2px 22px rgba(0, 0, 0, 0.08);
    pointer-events: none;
    will-change: transform, opacity;
    animation: uttaraHeadlineIn 1.1s cubic-bezier(0.2, 0.7, 0.2, 1) both;
  }

  .uttara-building-foreground {
    position: absolute;
    inset: -2%;
    z-index: 3;
    display: block;
    width: 104%;
    height: 104%;
    object-fit: cover;
    object-position: center center;
    pointer-events: none;
    user-select: none;
    transform: scale(1.02);
    transform-origin: center;
    will-change: transform;
    transition: transform 7s cubic-bezier(0.2, 0.65, 0.3, 1);
  }

  .uttara-hero .swiper-slide-active .uttara-building-foreground {
    transform: scale(1.09);
  }

  @keyframes uttaraHeadlineIn {
    from { opacity: 0; transform: translate3d(0, 18px, 0); }
    to   { opacity: 1; transform: translate3d(0, 0, 0); }
  }

  .uttara-container {
    position: relative;
    z-index: 4;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 150px clamp(28px, 9vw, 160px) 110px;
  }

  .uttara-content {
    position: relative;
    width: min(780px, 76%);
    margin: 0;
    padding: 0;
  }

  .uttara-content > * {
    opacity: 0;
    animation: none;
  }

  .uttara-hero .swiper-slide-active .uttara-eyebrow {
    animation: uttaraTextReveal 0.8s ease 0.12s both;
  }
  .uttara-hero .swiper-slide-active .uttara-title {
    animation: uttaraTextReveal 0.9s ease 0.24s both;
  }
  .uttara-hero .swiper-slide-active .uttara-subtitle {
    animation: uttaraTextReveal 0.9s ease 0.38s both;
  }
  .uttara-hero .swiper-slide-active .uttara-actions {
    animation: uttaraTextReveal 0.9s ease 0.5s both;
  }

  @keyframes uttaraTextReveal {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .uttara-eyebrow {
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 0 0 26px;
    color: var(--uttara-gold);
    font-size: 11px;
    font-weight: 800;
    line-height: 1.5;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  .uttara-eyebrow-line {
    display: inline-block;
    flex: 0 0 30px;
    width: 30px;
    height: 1px;
    background: var(--uttara-gold);
  }

  .uttara-title {
    max-width: 800px;
    margin: 0;
    padding: 0;
    color: #fff;
    font-family: inherit;
    font-size: clamp(44px, 5.2vw, 88px);
    font-weight: 750;
    line-height: 1.06;
    letter-spacing: -0.065em;
    text-wrap: balance;
    text-shadow: 0 3px 28px rgba(0, 0, 0, 0.12);
  }

  .uttara-subtitle {
    max-width: 530px;
    margin: 25px 0 0;
    padding: 0;
    color: rgba(255, 255, 255, 0.86);
    font-size: clamp(14px, 1.05vw, 17px);
    font-weight: 400;
    line-height: 1.85;
    letter-spacing: 0.005em;
  }

  .uttara-actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 32px;
  }

  .uttara-cta {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    min-height: 54px;
    padding: 8px 9px 8px 23px;
    border: 1px solid rgba(255, 255, 255, 0.92);
    border-radius: 2px;
    background: #fff;
    color: #14202b !important;
    font-size: 12px;
    font-weight: 750;
    line-height: 1.3;
    text-decoration: none !important;
    transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
  }

  .uttara-cta:hover {
    background: var(--uttara-gold);
    border-color: var(--uttara-gold);
    color: #101820 !important;
    transform: translateY(-2px);
  }

  .uttara-cta-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: #f0f0ed;
    color: #17222c;
    font-size: 20px;
    transition: transform 0.25s ease;
  }

  .uttara-cta:hover .uttara-cta-icon {
    transform: translate(2px, -2px);
  }

  .uttara-category {
    color: rgba(255, 255, 255, 0.88);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.16em;
    line-height: 1.5;
    text-transform: uppercase;
  }

  /* Bottom bar */
  .uttara-bottom {
    position: absolute;
    z-index: 5;
    right: clamp(28px, 9vw, 160px);
    bottom: 34px;
    left: clamp(28px, 9vw, 160px);
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 20px;
    min-height: 28px;
    margin: 0;
    padding: 0;
    color: #fff;
  }

  .uttara-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    min-width: 64px;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.06em;
  }

  .uttara-pagination .swiper-pagination-current {
    color: var(--uttara-gold);
  }

  .uttara-pagination .swiper-pagination-total {
    color: rgba(255, 255, 255, 0.65);
  }

  .uttara-scroll {
    display: inline-flex;
    align-items: center;
    justify-self: end;
    gap: 12px;
    color: rgba(255, 255, 255, 0.92) !important;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-decoration: none !important;
    white-space: nowrap;
  }

  .uttara-scroll-line {
    display: inline-block;
    width: 36px;
    height: 1px;
    background: rgba(255, 255, 255, 0.7);
    transition: width 0.3s ease;
  }

  .uttara-scroll:hover .uttara-scroll-line {
    width: 52px;
  }

  .uttara-scroll-arrow {
    color: var(--uttara-gold);
    font-size: 20px;
    line-height: 1;
  }

  /* ================================
     TABLET
  ================================ */
  @media (max-width: 991px) {
    .uttara-hero {
      height: 90svh;
      min-height: 680px;
      max-height: none;
    }

    .uttara-container {
      padding: 130px 5vw 100px;
    }

    .uttara-hero-title {
      top: 48px;
      font-size: clamp(48px, 8vw, 110px) !important;
      letter-spacing: -0.02em;
    }

    .uttara-content {
      width: min(700px, 92%);
    }

    .uttara-title {
      font-size: clamp(40px, 6.5vw, 68px);
    }

    .uttara-bottom {
      right: 5vw;
      bottom: 28px;
      left: 5vw;
    }

    .uttara-slide-image,
    .uttara-building-foreground {
      background-position: 55% center;
      object-position: 55% center;
    }
  }

  /* ================================
     MOBILE (Fully fixed)
  ================================ */
  @media (max-width: 600px) {

    /* Hotspot labels */
    .uttara-hotspot-label {
      max-width: 105px;
      padding: 5px 7px;
      font-size: 6.5px;
      white-space: normal;
      line-height: 1.25;
    }

    .uttara-hotspot-pulse {
      flex-basis: 11px;
      width: 11px;
      height: 11px;
    }

    .uttara-hotspot {
      gap: 4px;
    }

    /* Hotspot card - pinned safely above arrows */
    .uttara-hotspot-card {
      position: absolute;
      left: 12px !important;
      right: 12px !important;
      top: auto !important;
      bottom: 78px !important;
      width: auto;
      transform: none !important;
      grid-template-columns: 88px minmax(0, 1fr);
      border-radius: 14px;
    }

    .uttara-hotspot-card-image,
    .uttara-hotspot-card-image img {
      min-height: 140px;
    }

    .uttara-hotspot-card-body {
      padding: 12px 11px 11px;
    }

    .uttara-hotspot-card h2 {
      font-size: 15px;
      margin: 5px 12px 5px 0;
    }

    .uttara-hotspot-card p {
      font-size: 11px;
      line-height: 1.4;
    }

    .uttara-hotspot-kicker {
      font-size: 6.5px;
    }

    .uttara-hotspot-card-controls {
      margin-top: 10px;
    }

    /* Hero height */
    .uttara-hero {
      height: 100svh;
      min-height: 640px;
      max-height: none;
    }

    /* Image focus - less cropping */
    .uttara-slide-image {
      background-position: 58% 40%;
    }

    .uttara-building-foreground {
      object-position: 58% 40%;
    }

    .uttara-slide-overlay {
      background:
        linear-gradient(90deg, rgba(4, 13, 22, 0.80), rgba(4, 13, 22, 0.32)),
        linear-gradient(0deg, rgba(4, 12, 20, 0.72), transparent 58%);
    }

    /* Content */
    .uttara-container {
      padding: 100px 18px 130px;
      align-items: flex-end;
    }

    /* ========== BIG TITLE - NO MORE OVERLAP ========== */
    .uttara-hero-title {
      top: 72px !important;
      padding: 0 14px;
      font-size: clamp(22px, 7.2vw, 34px) !important;
      letter-spacing: -0.03em;
      line-height: 0.95;
      white-space: normal;
      text-align: center;
    }

    /* Force all title variants to same safe position */
    .connection,
    .commercial,
    .residence,
    .hospital,
    .dental,
    .mosque,
    .school {
      top: 72px !important;
      margin-top: 0 !important;
    }

    .uttara-content {
      width: 100%;
    }

    .uttara-eyebrow {
      gap: 8px;
      margin-bottom: 12px;
      font-size: 9px;
      letter-spacing: 0.13em;
    }

    .uttara-eyebrow-line {
      flex-basis: 16px;
      width: 16px;
    }

    .uttara-title {
      max-width: 100%;
      font-size: clamp(28px, 8.5vw, 42px);
      line-height: 1.05;
      letter-spacing: -0.035em;
    }

    .uttara-subtitle {
      max-width: 100%;
      margin-top: 10px;
      font-size: 13px;
      line-height: 1.6;
    }

    .uttara-actions {
      align-items: flex-start;
      gap: 10px;
      margin-top: 16px;
    }

    .uttara-cta {
      gap: 10px;
      min-height: 44px;
      padding-left: 14px;
      font-size: 11px;
    }

    .uttara-cta-icon {
      width: 28px;
      height: 28px;
    }

    .uttara-category {
      align-self: center;
      font-size: 8px;
      letter-spacing: 0.09em;
    }

    /* Bottom bar */
    .uttara-bottom {
      right: 14px;
      bottom: 14px;
      left: 14px;
      grid-template-columns: 1fr auto;
      gap: 8px;
    }

    .uttara-pagination {
      grid-column: 2;
      grid-row: 1;
      justify-self: end;
    }

    .uttara-scroll {
      display: none;
    }

    /* Arrows */
    .uttara-slider-arrows {
      left: 12px;
      bottom: 14px;
      gap: 8px;
    }

    .uttara-slider-arrow {
      width: 36px;
      height: 36px;
    }

    .uttara-slider-arrow svg {
      width: 16px;
      height: 16px;
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .uttara-slide-image,
    .uttara-building-foreground,
    .uttara-hero-title,
    .uttara-cta,
    .uttara-cta-icon,
    .uttara-scroll-line {
      transition: none !important;
    }

    .uttara-content > *,
    .uttara-hero .swiper-slide-active .uttara-content > * {
      animation: none !important;
      opacity: 1 !important;
    }
  }

  /* ================================
     GLASSMORPHISM
  ================================ */
  .uttara-hero {
    --glass-bg: rgba(255, 255, 255, 0.10);
    --glass-border: rgba(255, 255, 255, 0.24);
    --glass-highlight: rgba(255, 255, 255, 0.38);
    --uttara-gold: #e6c28a;
  }

  .uttara-hotspot-label {
    position: relative;
    overflow: hidden;
    padding: 10px 14px;
    border: 1px solid var(--glass-border);
    border-radius: 999px;
    background: rgba(13, 29, 39, 0.34);
    color: rgba(255, 255, 255, 0.96);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.16),
      0 8px 24px rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(18px) saturate(150%);
    -webkit-backdrop-filter: blur(18px) saturate(150%);
    transition:
      background 0.35s ease,
      border-color 0.35s ease,
      box-shadow 0.35s ease,
      transform 0.35s ease;
  }

  .uttara-hotspot:hover .uttara-hotspot-label,
  .uttara-hotspot.is-active .uttara-hotspot-label {
    border-color: rgba(230, 194, 138, 0.85);
    background: rgba(230, 194, 138, 0.88);
    color: #14212a;
    box-shadow:
      0 8px 28px rgba(230, 194, 138, 0.20),
      inset 0 1px 0 rgba(255, 255, 255, 0.55);
    transform: translateY(-2px);
  }

  .uttara-hotspot-pulse {
    border-color: rgba(255, 255, 255, 0.92);
    background: var(--uttara-gold);
    box-shadow:
      0 0 0 5px rgba(255, 255, 255, 0.13),
      0 0 25px rgba(230, 194, 138, 0.50);
  }

  .uttara-hotspot-card {
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    background: rgba(12, 25, 34, 0.64);
    box-shadow:
      0 24px 80px rgba(0, 0, 0, 0.28),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(26px) saturate(150%);
    -webkit-backdrop-filter: blur(26px) saturate(150%);
    animation: uttaraGlassIn 0.45s cubic-bezier(0.2, 0.75, 0.25, 1) both;
  }

  .uttara-hotspot-card-body {
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.06),
      rgba(255, 255, 255, 0.015)
    );
  }

  .uttara-hotspot-card h2 {
    letter-spacing: -0.035em;
  }

  .uttara-hotspot-close {
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
    transition: background 0.25s ease, transform 0.25s ease;
  }

  .uttara-hotspot-close:hover {
    background: rgba(255, 255, 255, 0.24);
    transform: rotate(90deg);
  }

  .uttara-cta {
    min-height: 56px;
    border: 1px solid rgba(255, 255, 255, 0.52);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
    color: #fff !important;
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.22),
      0 10px 35px rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(18px) saturate(150%);
    -webkit-backdrop-filter: blur(18px) saturate(150%);
    transition:
      background 0.35s ease,
      border-color 0.35s ease,
      box-shadow 0.35s ease,
      transform 0.35s ease;
  }

  .uttara-cta:hover {
    border-color: var(--uttara-gold);
    background: rgba(230, 194, 138, 0.92);
    color: #14212a !important;
    box-shadow: 0 12px 36px rgba(230, 194, 138, 0.18);
    transform: translateY(-3px);
  }

  .uttara-cta-icon {
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.18);
    color: inherit;
  }

  .uttara-bottom {
    padding: 14px 20px;
  }

  .uttara-pagination .swiper-pagination-current {
    color: var(--uttara-gold);
  }

  @keyframes uttaraGlassIn {
    from { opacity: 0; filter: blur(8px); }
    to   { opacity: 1; filter: blur(0); }
  }

  .uttara-hotspot:focus-visible .uttara-hotspot-label,
  .uttara-cta:focus-visible,
  .uttara-hotspot-close:focus-visible {
    outline: 2px solid var(--uttara-gold);
    outline-offset: 4px;
  }

  @media (max-width: 600px) {
    .uttara-hotspot-card {
      border-radius: 14px;
      background: rgba(12, 25, 34, 0.88);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
    }

    .uttara-hotspot-label {
      padding: 6px 9px;
      border-radius: 999px;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .uttara-bottom {
      padding: 10px 12px;
      border-radius: 16px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .uttara-hotspot-label,
    .uttara-hotspot-close,
    .uttara-cta,
    .uttara-hotspot-card {
      animation: none !important;
      transition: none !important;
    }
  }

  /* ================================
     SLIDER ARROWS
  ================================ */
  .uttara-slider-arrows {
    position: absolute;
    z-index: 10;
    left: 10px;
    bottom: 10px;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .uttara-slider-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.42);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    cursor: pointer;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition:
      background 0.25s ease,
      border-color 0.25s ease,
      color 0.25s ease,
      transform 0.25s ease;
  }

  .uttara-slider-arrow:hover {
    border-color: var(--uttara-gold);
    background: var(--uttara-gold);
    color: #101b25;
    transform: translateY(-2px);
  }

  .uttara-slider-arrow:focus-visible {
    outline: 2px solid var(--uttara-gold);
    outline-offset: 4px;
  }

  @media (max-width: 600px) {

  
    .uttara-slider-arrows {
      left: 12px;
      bottom: 14px;
      gap: 8px;
    }

    .uttara-slider-arrow {
      width: 36px;
      height: 36px;
    }

    .uttara-slider-arrow svg {
      width: 16px;
      height: 16px;
    }
  }

/* FIX: Match hero height to the 1792 × 878 image */

.uttara-hero {
  width: 100%;
  height: auto !important;
  min-height: 0 !important;
  max-height: none !important;
  aspect-ratio: 1792 / 878;
  background: transparent !important;
  overflow: hidden;
}

.uttara-hero .uttara-swiper,
.uttara-hero .swiper-wrapper,
.uttara-hero .swiper-slide,
.uttara-hero .uttara-slide {
  width: 100%;
  height: 100%;
  min-height: 0;
}

.uttara-hero .uttara-slide-image {
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background-size: 100% 100% !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  transform: none !important;
}

.uttara-hero .uttara-building-foreground {
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: fill !important;
  object-position: center !important;
  transform: none !important;
}

/* Remove conflicting responsive height rules */
@media (max-width: 991px) {
  .uttara-hero {
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    aspect-ratio: 1792 / 878;
  }
}

/* Mobile: Keep only the main hero title */
@media (max-width: 600px) {
  /* Hide eyebrow text */
  .uttara-hero .uttara-eyebrow {
    display: none !important;
  }

  /* Hide subtitle */
  .uttara-hero .uttara-subtitle {
    display: none !important;
  }

  /* Hide CTA button and category */
  .uttara-hero .uttara-actions {
    display: none !important;
  }

  /* Keep title visible and clear of navbar */
  

  /* Remove unused content spacing */
  .uttara-hero .uttara-container {
    padding-top: 75px !important;
    padding-bottom: 85px !important;
  }

 
}
  .uttara-hero {
  
  padding-top: 80px;
  box-sizing: border-box;
  background-color: #101b25;
}

html,
body {
  background-color: #423a30 !important;
}

@media (max-width: 768px) {
  .uttara-hero {
    background-color: #423a30 !important;
  }

  /* MOBILE: FOREGROUND IMAGE POSITION */
@media screen and (max-width: 768px) {


  .uttara-hero .uttara-building-foreground .connection {
    top: 10% !important;
    margin-top: 10px !important;
  }
  .uttara-hero-title .connection {
    top: 10% !important;
    margin-top: 10px !important;
  }

  .uttara-hero-title.school {
    top: 10% !important;
    margin-top: 0 !important;
  }

  .uttara-hero .uttara-building-foreground.park {
    top: 19% !important;
    margin-top: -35px !important;
  }
    .uttara-hero-title.park {
    top: 37% !important;
    margin-top: -20px !important;
  }

  .uttara-hero .uttara-building-foreground.nursing {
    top: 11% !important;
    margin-top: 10px !important;
    margin-left: -10px;
  }
  .uttara-hero-title.nursing {
    top: 23% !important;

  }

  .uttara-hero-title.commercial {
    top: 25% !important;
    margin-top: -10px !important;
  }

 .uttara-hero-title.residence {
    top: 10% !important;
    margin-top: 10px !important;
  }

  .uttara-hero-title.hospital {
    top: 42% !important;
    margin-top: -40px !important;
  }

  .uttara-hero-title.dental {
    top: 5% !important;
    margin-top: 20px !important;
  }

  .uttara-hero .uttara-building-foreground.mosque {
    top: 19% !important;
    margin-top: -45px !important;
    margin-left: -5px !important;
  }
  .uttara-hero-title.mosque {
    top: 25% !important;
   
  }
}
}`}</style>

    </section>
  );
}
