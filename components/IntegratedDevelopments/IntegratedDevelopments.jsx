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
    href: "/project-overview",
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
    href: "/project-overview",
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
    href: "/project-overview",
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
    href: "/project-overview",
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
    href: "/project-overview",
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
    image: "/images/slider/hero-slide/img-6.1-main1.png",
    imageAlt: "Hospital infrastructure",
    href: "/project-overview",
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
    href: "/project-overview",
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
    href: "/project-overview",
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

        <div
          style={{ marginTop: "40px" }}
          className="id-carousel-wrap"
          data-development-reveal
        >
          <Swiper
            className="id-development-swiper"
            modules={[A11y, Autoplay, Navigation, Pagination]}
            slidesPerView={1.08}
            spaceBetween={14}
            speed={850}
            loop={true}
            watchOverflow={true}
            grabCursor={true}
            autoplay={{
              delay: 3000,
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
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 18,
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
                  style={{ "--id-delay": `${index * 80}ms` }}
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
          <Link href="/project-overview" className="id-masterplan-link">
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
          width: 100%;
          height: auto !important; /* Fixed height bad diye auto kora holo */
          min-height: auto !important;
          max-height: none !important;
          display: block !important;
          padding: clamp(60px, 7vw, 90px) 24px !important; /* Shudhu dorkari padding thakbe */
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
          width: min(1280px, calc(100% - 64px));
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
          top: 5%;
          right: -150px;
          width: 380px;
          height: 380px;
        }

        .id-orb--two {
          bottom: 5%;
          left: -150px;
          width: 350px;
          height: 350px;
        }

        .id-header {
          margin-bottom: 16px;
        }

        .id-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: var(--id-sand);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.2em;
        }

        .id-eyebrow-line {
          width: 30px;
          height: 1px;
          background: var(--id-gold);
        }

        .id-heading-row {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(240px, 0.65fr);
          align-items: end;
          gap: 40px;
        }

        .id-heading {
          margin: 0;
          color: #51483d;
          font-size: clamp(28px, 3.8vw, 50px);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -0.022em;
        }

        .id-heading span {
          color: var(--id-sand);
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-style: italic;
          letter-spacing: -0.05em;
        }

        .id-intro {
          max-width: 420px;
          margin: 0;
          color: var(--id-muted);
          font-size: 12.5px;
          line-height: 1.6;
        }

        .id-card {
          grid-column: auto;
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.92);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.52);
          box-shadow:
            0 12px 40px rgba(91, 73, 48, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition:
            transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1),
            box-shadow 0.4s ease,
            border-color 0.4s ease;
          transition-delay: 0ms;
        }

        .id-card:hover {
          transform: translateY(-4px);
          border-color: rgba(201, 164, 106, 0.5);
          box-shadow:
            0 18px 45px rgba(91, 73, 48, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.98);
        }

        .id-card-image {
          position: relative;
          min-height: 150px;
          height: clamp(150px, 15vw, 200px);
          overflow: hidden;
          background: #e5d9c7;
        }

        .id-photo {
          object-fit: cover;
          object-position: center;
          transition: transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .id-card:hover .id-photo {
          transform: scale(1.04);
        }

        .id-image-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(38, 31, 23, 0.35) 0%,
            transparent 40%,
            rgba(38, 31, 23, 0.15) 100%
          );
        }

        .id-card-top {
          position: absolute;
          top: 12px;
          right: 12px;
          left: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .id-number,
        .id-category {
          display: inline-flex;
          align-items: center;
          min-height: 26px;
          border: 1px solid rgba(255, 255, 255, 0.48);
          border-radius: 999px;
          color: #fff;
          background: rgba(255, 252, 246, 0.18);
          backdrop-filter: blur(14px);
        }

        .id-number {
          justify-content: center;
          width: 28px;
          flex-shrink: 0;
          font-size: 8.5px;
          font-weight: 700;
        }

        .id-category {
          padding: 0 10px;
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .id-image-mark {
          position: absolute;
          right: 12px;
          bottom: 12px;
          display: grid;
          width: 32px;
          height: 32px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.65);
          border-radius: 50%;
          color: #fff;
          background: rgba(255, 252, 246, 0.2);
          font-size: 14px;
          backdrop-filter: blur(14px);
          transition: all 0.3s ease;
        }

        .id-card:hover .id-image-mark {
          color: #51483d;
          background: rgba(255, 252, 246, 0.88);
          transform: rotate(45deg);
        }

        .id-card-body {
          padding: clamp(14px, 1.8vw, 18px);
        }

        .id-card-body h3 {
          margin: 0 0 6px;
          color: #51483d;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(18px, 1.8vw, 22px);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -0.03em;
        }

        .id-card-description {
          max-width: 520px;
          margin: 0;
          color: var(--id-muted);
          font-size: 11.5px;
          line-height: 1.5;
        }

        .id-feature-list {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 10px;
        }

        .id-feature {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 8px;
          border: 1px solid rgba(166, 139, 103, 0.17);
          border-radius: 999px;
          color: #766750;
          background: rgba(255, 255, 255, 0.58);
          font-size: 9px;
        }

        .id-feature-dot {
          width: 3.5px;
          height: 3.5px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--id-gold);
        }

        .id-card-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 12px;
          padding-top: 10px;
          border-top: 1px solid rgba(166, 139, 103, 0.18);
          color: #8a704b;
          font-size: 9.5px;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .id-card-link:hover {
          color: #4f473d;
        }

        .id-link-arrow {
          display: grid;
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid rgba(166, 139, 103, 0.28);
          border-radius: 50%;
          font-size: 12px;
          transition: all 0.3s ease;
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
          gap: 16px;
          margin-top: 18px;
          padding: 14px 20px;
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.48);
          box-shadow: 0 10px 30px rgba(91, 73, 48, 0.04);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .id-bottom-kicker {
          display: block;
          margin-bottom: 2px;
          color: #a68b67;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .id-bottom-copy p {
          margin: 0;
          color: #5c5348;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(13px, 1.4vw, 17px);
          line-height: 1.25;
        }

        .id-masterplan-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 38px;
          flex-shrink: 0;
          padding: 0 14px;
          border: 1px solid rgba(166, 139, 103, 0.5);
          border-radius: 999px;
          color: #6e593d;
          background: rgba(255, 255, 255, 0.58);
          font-size: 9.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .id-masterplan-link:hover {
          color: #fff;
          background: #a68b67;
          transform: translateY(-2px);
        }

        .id-section [data-development-reveal] {
          opacity: 0;
          transform: translate3d(0, 16px, 0);
          transition:
            opacity 0.6s ease,
            transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
          transition-delay: var(--id-delay, 0ms);
        }

        .id-section [data-development-reveal].id-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        /* Carousel setup */
        .id-carousel-wrap {
          position: relative;
          width: 100%;
          padding-bottom: 34px;
        }

        .id-development-swiper {
          width: 100%;
          overflow: visible;
          padding: 2px 2px 10px;
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
          justify-content: space-between;
        }

        .id-development-swiper .id-card-link {
          margin-top: auto;
          padding-top: 10px;
        }

        /* Navigation arrows */
        .id-development-swiper .swiper-button-prev,
        .id-development-swiper .swiper-button-next {
          top: auto;
          bottom: -28px;
          width: 30px;
          height: 30px;
          margin: 0;
          border: 1px solid rgba(166, 139, 103, 0.4);
          border-radius: 50%;
          color: #806747;
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .id-development-swiper .swiper-button-prev {
          left: auto;
          right: 40px;
        }

        .id-development-swiper .swiper-button-next {
          right: 2px;
        }

        .id-development-swiper .swiper-button-prev::after,
        .id-development-swiper .swiper-button-next::after {
          font-size: 11px;
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
          bottom: -20px;
          left: 2px;
          width: auto;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .id-development-swiper .swiper-pagination-bullet {
          width: 5px;
          height: 5px;
          margin: 0 !important;
          opacity: 1;
          background: #d5c5ad;
          transition: all 0.3s ease;
        }

        .id-development-swiper .swiper-pagination-bullet-active {
          width: 16px;
          border-radius: 12px;
          background: #a68b67;
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .id-container {
            width: calc(100% - 40px);
          }
          .id-heading-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .id-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
            padding: 12px 16px;
          }
        }

        @media (max-width: 620px) {
          .id-section {
            height: 100dvh;
            min-height: 560px;
            padding: 30px 0;
          }
          .id-container {
            width: calc(100% - 24px);
          }
          .id-header {
            margin-bottom: 14px;
          }
          .id-heading {
            font-size: clamp(26px, 7vw, 36px);
          }
          .id-intro {
            font-size: 11.5px;
          }
          .id-card-image {
            height: 140px;
            min-height: 140px;
          }
          .id-card-body {
            padding: 12px 14px;
          }
          .id-card-body h3 {
            font-size: 18px;
          }
          .id-bottom {
            padding: 12px;
            margin-top: 12px;
          }
          .id-masterplan-link {
            width: 100%;
            min-height: 36px;
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
      `}</style>
    </section>
  );
}
