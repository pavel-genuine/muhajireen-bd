"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const developmentGroups = [
  {
    number: "01",
    category: "COMMERCIAL & RETAIL",
    title: "Spaces Where Life Connects",
    description:
      "A destination for everyday shopping, business opportunities and vibrant commercial activity.",
    features: ["Shopping Mall", "Commercial Spaces"],
    image: "/images/slider/hero-slide/img-2.1-main.png",
    imageAlt: "Commercial spaces within the integrated development",
    href: "/projects#commercial",
    size: "development-card--wide",
  },
  {
    number: "02",
    category: "RESIDENTIAL LIVING",
    title: "A Place to Truly Belong",
    description:
      "Thoughtfully planned residential spaces designed around comfort, community and everyday living.",
    features: ["Residential Buildings"],
    image: "/images/slider/hero-slide/img-3.1-main.png",
    imageAlt: "Residential buildings in the development",
    href: "/projects#residential",
    size: "",
  },
  {
    number: "03",
    category: "Central Park",
    title: "A Place to Truly Belong",
    description:
      "Thoughtfully planned residential spaces designed around comfort, community and everyday living.",
    features: ["Park", "playground", "walking trails"],
    image: "/images/slider/hero-slide/img-9.1-main.png",
    imageAlt: "Residential buildings in the development",
    href: "/projects#residential",
    size: "",
  },
  {
    number: "04",
    category: "HEALTHCARE & MEDICAL EDUCATION",
    title: "Care for Every Chapter",
    description:
      "A healthcare ecosystem bringing medical services and healthcare education together in one vision.",
    features: [
      "Multi-Specialized General Hospital",
      "Dental Hospital",
      "Nursing Institute",
    ],
    image: "/images/slider/hero-slide/img-4.1-main.png",
    imageAlt: "Hospital infrastructure",
    href: "/projects#healthcare",
    size: "",
  },
  {
    number: "05",
    category: "HEALTHCARE & MEDICAL EDUCATION",
    title: "Care for Every Chapter",
    description:
      "A healthcare ecosystem bringing medical services and healthcare education together in one vision.",
    features: [
      "Multi-Specialized General Hospital",
      "Dental Hospital",
      "Nursing Institute",
    ],
    image: "/images/slider/hero-slide/img-5.1-main.png",
    imageAlt: "Hospital infrastructure",
    href: "/projects#healthcare",
    size: "",
  },

  {
    number: "06",
    category: "HEALTHCARE & MEDICAL EDUCATION",
    title: "Care for Every Chapter",
    description:
      "A healthcare ecosystem bringing medical services and healthcare education together in one vision.",
    features: [
      "Multi-Specialized General Hospital",
      "Dental Hospital",
      "Nursing Institute",
    ],
    image: "/images/slider/hero-slide/img-6.1-main.png",
    imageAlt: "Hospital infrastructure",
    href: "/projects#healthcare",
    size: "",
  },
  {
    number: "07",
    category: "EDUCATION",
    title: "Built for Brighter Futures",
    description:
      "A dedicated learning environment to support students, families and the next generation.",
    features: ["School"],
    image: "/images/slider/hero-slide/img-8-main.png",
    imageAlt: "School campus",
    href: "/projects#education",
    size: "",
  },
  {
    number: "08",
    category: "FAITH & COMMUNITY",
    title: "A Community with Shared Values",
    description:
      "Spaces for worship, learning and meaningful connections within the wider community.",
    features: ["Mosque", "Madrasha"],
    image: "/images/slider/hero-slide/img-7-main.png",
    imageAlt: "Mosque and madrasha infrastructure",
    href: "/projects#faith-community",
    size: "development-card--wide",
  },
];

export default function IntegratedDevelopments() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll("[data-development-reveal]");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("id-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("id-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="id-section"
      id="developments"
      aria-labelledby="id-heading"
    >
      <div className="id-orb id-orb--one" aria-hidden="true" />
      <div className="id-orb id-orb--two" aria-hidden="true" />

      <div className="id-container">
        <header className="id-header" data-development-reveal>
          <div className="id-eyebrow">
            <span className="id-eyebrow-line" />
            <span>ONE VISION · MANY POSSIBILITIES</span>
          </div>

          <div className="id-heading-row">
            <h2 id="id-heading" className="id-heading">
              Thoughtfully Planned.
              <br />
              <span>Made for Living.</span>
            </h2>
            <p className="id-intro">
              More than individual buildings, we envision an integrated
              community where living, business, healthcare, education and shared
              values come together.
            </p>
          </div>
        </header>

        <div className="id-carousel-wrap" data-development-reveal>
          <Swiper
            className="id-development-swiper"
            modules={[A11y, Autoplay, Navigation, Pagination]}
            slidesPerView={1.08}
            spaceBetween={16}
            speed={850}
            loop={true}
            watchOverflow={true}
            grabCursor={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            breakpoints={{
              621: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
            }}
            a11y={{
              prevSlideMessage: "Previous development",
              nextSlideMessage: "Next development",
            }}
          >
            {developmentGroups.map((item, index) => (
              <SwiperSlide key={item.number}>
                <article
                  className={`id-card ${item.size}`}
                  data-development-reveal
                  style={{ "--id-delay": `${index * 90}ms` }}
                >
                  <div className="id-card-image">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 620px) 90vw, (max-width: 1023px) 48vw, 32vw"
                      className="id-photo"
                    />

                    <div className="id-image-shade" />

                    <div className="id-card-top">
                      <span className="id-number">{item.number}</span>
                      <span className="id-category">{item.category}</span>
                    </div>

                    <span className="id-image-mark" aria-hidden="true">
                      ↗
                    </span>
                  </div>

                  <div className="id-card-body">
                    <h3>{item.title}</h3>
                    <p className="id-card-description">{item.description}</p>

                    <div className="id-feature-list">
                      {item.features.map((feature) => (
                        <span className="id-feature" key={feature}>
                          <span className="id-feature-dot" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link href={item.href} className="id-card-link">
                      <span>Explore Development</span>
                      <span className="id-link-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </Link>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="id-bottom" data-development-reveal>
          <div className="id-bottom-copy">
            <span className="id-bottom-kicker">THE BIGGER PICTURE</span>
            <p>Discover how every part fits into one connected vision.</p>
          </div>
          <Link href="/projects" className="id-masterplan-link">
            Explore the Masterplan <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .id-section,
        .id-section * {
          box-sizing: border-box;
        }

        .id-section {
          --id-ivory: #f8f5ef;
          --id-beige: #d9c6a8;
          --id-sand: #a68b67;
          --id-gold: #c9a46a;
          --id-ink: #4f473d;
          --id-muted: #81776b;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: clamp(78px, 9vw, 132px) 0;
          color: var(--id-ink);
          background:
            radial-gradient(
              ellipse at 88% 8%,
              rgba(217, 198, 168, 0.28),
              transparent 32%
            ),
            radial-gradient(
              ellipse at 4% 75%,
              rgba(201, 164, 106, 0.12),
              transparent 30%
            ),
            linear-gradient(145deg, #fffefa 0%, var(--id-ivory) 100%);
        }

        .id-container {
          position: relative;
          z-index: 1;
          width: min(1320px, calc(100% - 96px));
          margin: 0 auto;
        }

        .id-orb {
          position: absolute;
          z-index: -1;
          pointer-events: none;
          border: 1px solid rgba(166, 139, 103, 0.18);
          border-radius: 50%;
        }

        .id-orb--one {
          top: 10%;
          right: -180px;
          width: 430px;
          height: 430px;
        }

        .id-orb--two {
          bottom: 9%;
          left: -190px;
          width: 390px;
          height: 390px;
        }

        .id-header {
          margin-bottom: 48px;
        }

        .id-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          color: var(--id-sand);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
        }

        .id-eyebrow-line {
          width: 34px;
          height: 1px;
          background: var(--id-gold);
        }

        .id-heading-row {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(260px, 0.65fr);
          align-items: end;
          gap: 50px;
        }

        .id-heading {
          margin: 0;
          color: #51483d;
          font-size: clamp(38px, 5.3vw, 72px);
          font-weight: 500;
          line-height: 1.03;
          letter-spacing: -0.065em;
        }

        .id-heading span {
          color: var(--id-sand);
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-style: italic;
          letter-spacing: -0.055em;
        }

        .id-intro {
          max-width: 440px;
          margin: 0 0 5px;
          color: var(--id-muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .id-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .id-card {
          grid-column: auto;
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.92);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.52);
          box-shadow:
            0 16px 48px rgba(91, 73, 48, 0.07),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transition:
            transform 0.45s cubic-bezier(0.2, 0.7, 0.2, 1),
            box-shadow 0.45s ease,
            border-color 0.45s ease;
          transition-delay: 0ms;
        }

        .id-card--wide {
          grid-column: auto;
        }

        .id-card:hover {
          transform: translateY(-7px);
          border-color: rgba(201, 164, 106, 0.5);
          box-shadow:
            0 26px 65px rgba(91, 73, 48, 0.13),
            inset 0 1px 0 rgba(255, 255, 255, 0.98);
        }

        .id-card-image {
          position: relative;
          min-height: 235px;
          height: clamp(235px, 25vw, 340px);
          overflow: hidden;
          background: #e5d9c7;
        }

        .id-photo {
          object-fit: cover;
          transition: transform 1s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .id-card:hover .id-photo {
          transform: scale(1.055);
        }

        .id-image-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(38, 31, 23, 0.36) 0%,
            transparent 36%,
            transparent 58%,
            rgba(38, 31, 23, 0.18) 100%
          );
        }

        .id-card-top {
          position: absolute;
          top: 18px;
          right: 18px;
          left: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .id-number,
        .id-category {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          border: 1px solid rgba(255, 255, 255, 0.48);
          border-radius: 999px;
          color: #fff;
          background: rgba(255, 252, 246, 0.18);
          box-shadow: 0 5px 18px rgba(40, 30, 18, 0.08);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .id-number {
          justify-content: center;
          width: 36px;
          flex-shrink: 0;
          font-size: 10px;
          font-weight: 700;
        }

        .id-category {
          padding: 0 13px;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-align: right;
        }

        .id-image-mark {
          position: absolute;
          right: 18px;
          bottom: 18px;
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.65);
          border-radius: 50%;
          color: #fff;
          background: rgba(255, 252, 246, 0.2);
          font-size: 20px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition:
            color 0.3s ease,
            background 0.3s ease,
            transform 0.3s ease;
        }

        .id-card:hover .id-image-mark {
          color: #51483d;
          background: rgba(255, 252, 246, 0.88);
          transform: rotate(45deg);
        }

        .id-card-body {
          padding: clamp(21px, 2.5vw, 31px);
        }

        .id-card-body h3 {
          margin: 0 0 12px;
          color: #51483d;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(23px, 2.4vw, 32px);
          font-weight: 400;
          line-height: 1.16;
          letter-spacing: -0.035em;
        }

        .id-card-description {
          max-width: 520px;
          margin: 0;
          color: var(--id-muted);
          font-size: 13px;
          line-height: 1.85;
        }

        .id-feature-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 20px;
        }

        .id-feature {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 11px;
          border: 1px solid rgba(166, 139, 103, 0.17);
          border-radius: 999px;
          color: #766750;
          background: rgba(255, 255, 255, 0.58);
          font-size: 10px;
          line-height: 1.35;
        }

        .id-feature-dot {
          width: 5px;
          height: 5px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--id-gold);
        }

        .id-card-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-top: 25px;
          padding-top: 17px;
          border-top: 1px solid rgba(166, 139, 103, 0.2);
          color: #8a704b;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .id-card-link:hover {
          color: #4f473d;
        }

        .id-link-arrow {
          display: grid;
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid rgba(166, 139, 103, 0.28);
          border-radius: 50%;
          font-size: 16px;
          transition:
            color 0.3s ease,
            background 0.3s ease,
            transform 0.3s ease;
        }

        .id-card-link:hover .id-link-arrow {
          color: #fff;
          background: #a68b67;
          transform: rotate(45deg);
        }

        .id-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-top: 32px;
          padding: 24px 28px;
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.48);
          box-shadow: 0 12px 35px rgba(91, 73, 48, 0.05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .id-bottom-kicker {
          display: block;
          margin-bottom: 7px;
          color: #a68b67;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.17em;
        }

        .id-bottom-copy p {
          margin: 0;
          color: #5c5348;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(17px, 2vw, 23px);
          line-height: 1.35;
        }

        .id-masterplan-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 22px;
          min-height: 48px;
          flex-shrink: 0;
          padding: 0 18px;
          border: 1px solid rgba(166, 139, 103, 0.5);
          border-radius: 999px;
          color: #6e593d;
          background: rgba(255, 255, 255, 0.58);
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
          transition:
            color 0.3s ease,
            background 0.3s ease,
            transform 0.3s ease;
        }

        .id-masterplan-link:hover {
          color: #fff;
          background: #a68b67;
          transform: translateY(-2px);
        }

        .id-masterplan-link span {
          font-size: 17px;
        }

        .id-section [data-development-reveal] {
          opacity: 0;
          transform: translate3d(0, 24px, 0);
          transition:
            opacity 0.75s ease,
            transform 0.85s cubic-bezier(0.2, 0.7, 0.2, 1);
          transition-delay: var(--id-delay, 0ms);
        }

        .id-section [data-development-reveal].id-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        @media (max-width: 900px) {
          .id-container {
            width: calc(100% - 56px);
          }

          .id-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .id-heading-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .id-intro {
            max-width: 620px;
          }

          .id-grid {
            gap: 16px;
          }

          .id-card-image {
            height: 260px;
          }

          .id-card-body {
            padding: 22px;
          }

          .id-card-body h3 {
            font-size: 27px;
          }

          .id-bottom {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 620px) {
          .id-section {
            padding: 76px 0;
          }

          .id-container {
            width: calc(100% - 36px);
          }

          .id-header {
            margin-bottom: 30px;
          }

          .id-eyebrow {
            margin-bottom: 19px;
            font-size: 8px;
            letter-spacing: 0.15em;
          }

          .id-heading {
            font-size: clamp(39px, 10vw, 56px);
          }

          .id-intro {
            font-size: 13px;
            line-height: 1.8;
          }

          .id-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 17px;
          }

          .id-card,
          .id-card--wide {
            grid-column: auto;
            border-radius: 18px;
          }

          .id-card-image {
            height: clamp(220px, 63vw, 310px);
            min-height: 220px;
          }

          .id-card-top {
            top: 13px;
            right: 13px;
            left: 13px;
          }

          .id-category {
            max-width: calc(100% - 50px);
            padding: 0 10px;
            font-size: 7px;
            letter-spacing: 0.1em;
          }

          .id-card-body {
            padding: 22px 19px;
          }

          .id-card-body h3 {
            font-size: 28px;
          }

          .id-card-description {
            font-size: 12px;
          }

          .id-feature {
            font-size: 9px;
          }

          .id-bottom {
            padding: 21px 19px;
          }

          .id-masterplan-link {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .id-section *,
          .id-section *::before,
          .id-section *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }

          .id-section [data-development-reveal] {
            opacity: 1;
            transform: none;
          }
        }
        /* =========================================
   INTEGRATED DEVELOPMENT CAROUSEL
========================================= */

        .id-carousel-wrap {
          position: relative;
          width: 100%;
          padding-bottom: 52px;
        }

        .id-development-swiper {
          width: 100%;
          overflow: visible;
          padding: 5px 2px 20px;
        }

        .id-development-swiper .swiper-slide {
          height: auto;
          display: flex;
        }

        .id-development-swiper .id-card {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .id-development-swiper .id-card-body {
          display: flex;
          flex: 1;
          flex-direction: column;
        }

        .id-development-swiper .id-card-link {
          margin-top: auto;
          padding-top: 25px;
        }

        /* Navigation arrows */

        .id-development-swiper .swiper-button-prev,
        .id-development-swiper .swiper-button-next {
          top: auto;
          bottom: -43px;
          width: 38px;
          height: 38px;
          margin: 0;
          border: 1px solid rgba(166, 139, 103, 0.4);
          border-radius: 50%;
          color: #806747;
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }

        .id-development-swiper .swiper-button-prev {
          left: auto;
          right: 52px;
        }

        .id-development-swiper .swiper-button-next {
          right: 2px;
        }

        .id-development-swiper .swiper-button-prev::after,
        .id-development-swiper .swiper-button-next::after {
          font-size: 13px;
          font-weight: 700;
        }

        .id-development-swiper .swiper-button-prev:hover,
        .id-development-swiper .swiper-button-next:hover {
          color: #fff;
          border-color: #a68b67;
          background: #a68b67;
        }

        /* Pagination */

        .id-development-swiper .swiper-pagination {
          position: absolute;
          right: auto;
          bottom: -32px;
          left: 2px;
          width: auto;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .id-development-swiper .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          margin: 0 !important;
          opacity: 1;
          background: #d5c5ad;
          transition: all 0.35s ease;
        }

        .id-development-swiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 20px;
          background: #a68b67;
        }

        /* Tablet */

        @media (max-width: 900px) {
          .id-development-swiper .id-card-image {
            height: 260px;
          }
        }

        /* Mobile */

        @media (max-width: 620px) {
          .id-carousel-wrap {
            padding-bottom: 48px;
          }

          .id-development-swiper {
            padding-right: 2px;
          }

          .id-development-swiper .id-card-image {
            height: clamp(220px, 63vw, 310px);
          }

          .id-development-swiper .swiper-button-prev,
          .id-development-swiper .swiper-button-next {
            width: 34px;
            height: 34px;
            bottom: -40px;
          }

          .id-development-swiper .swiper-button-prev {
            right: 46px;
          }

          .id-development-swiper .swiper-pagination {
            bottom: -27px;
          }
        }
      `}</style>
    </section>
  );
}
