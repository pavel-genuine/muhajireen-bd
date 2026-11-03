"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

const facilities = [
  {
    id: "residences",
    number: "01",
    title: "Premium Residences",
    category: "RECREATION",
    description:
      "Dedicated swimming facilities for relaxation, recreation and a healthier lifestyle.",
    image: "/images/slider/hero-slide/newfolder/img-9.jpg",
  },
  {
    id: "mall",
    number: "02",
    title: "Shopping Mall",
    category: "RECREATION",
    description:
      "Dedicated swimming facilities for relaxation, recreation and a healthier lifestyle.",
    image: "/images/slider/hero-slide/newfolder/img-11.jpg",
  },
  {
    id: "foodcourt",
    number: "03",
    title: "Food Court",
    category: "RECREATION",
    description:
      "Dedicated swimming facilities for relaxation, recreation and a healthier lifestyle.",
    image: "/images/slider/hero-slide/newfolder/img-10.jpg",
  },
  {
    id: "commercialspaces",
    number: "04",
    title: "Commercial Spaces",
    category: "RECREATION",
    description:
      "Dedicated swimming facilities for relaxation, recreation and a healthier lifestyle.",
    image: "/images/slider/hero-slide/newfolder/img-12.jpg",
  },
  {
    id: "pool",
    number: "05",
    title: "Swimming Pools",
    category: "RECREATION",
    description:
      "Dedicated swimming facilities for relaxation, recreation and a healthier lifestyle.",
    image: "/images/slider/hero-slide/newfolder/img-8.jpeg",
  },
  {
    id: "gym",
    number: "06",
    title: "Fitness & Gym",
    category: "WELLNESS",
    description:
      "Planned fitness facilities with dedicated spaces for men and women.",
    image: "/images/slider/hero-slide/newfolder/img(2).jpeg",
  },
  {
    id: "kids",
    number: "07",
    title: "Kids' Play Zone",
    category: "FAMILY LIVING",
    description:
      "A dedicated play area envisioned for children's outdoor activities and family time.",
    image: "/images/slider/hero-slide/newfolder/img(5).jpeg",
  },
  {
    id: "green",
    number: "08",
    title: "Green Spaces",
    category: "NATURE",
    description:
      "Landscaped green areas planned to bring nature and open space into everyday living.",
    image: "/images/slider/hero-slide/newfolder/img(7).jpeg",
  },
  {
    id: "walkway",
    number: "09",
    title: "Walking & Jogging",
    category: "ACTIVE LIVING",
    description:
      "A dedicated walkway envisioned for daily walks, light exercise and outdoor relaxation.",
    image: "/images/slider/hero-slide/newfolder/img(3).jpeg",
  },
  {
    id: "bicycle",
    number: "10",
    title: "Bicycle Zone",
    category: "ACTIVE LIVING",
    description:
      "A planned bicycle-friendly zone encouraging active movement within the community.",
    image: "/images/slider/hero-slide/newfolder/img(1).jpeg",
  },
  {
    id: "medical",
    number: "11",
    title: "Emergency Medical Support",
    category: "CARE",
    description:
      "Emergency medical services are included in the project's stated lifestyle facilities.",
    image: "/images/slider/hero-slide/img-4.1-main.png",
  },
  {
    id: "school",
    number: "12",
    title: "School",
    category: "Education",
    description:
      "A planned spiritual and educational destination serving the community.",
    image: "/images/slider/hero-slide/img-8-main.png",
  },
  {
    id: "community",
    number: "13",
    title: "Mosque & Madrasha",
    category: "FAITH & COMMUNITY",
    description:
      "A planned spiritual and educational destination serving the community.",
    image: "/images/slider/hero-slide/img-7-main.png",
  },
];

const categories = [
  "ALL",
  "RECREATION",
  "WELLNESS",
  "FAMILY LIVING",
  "NATURE",
  "ACTIVE LIVING",
  "FAITH & COMMUNITY",
  "CARE",
];

export default function LifestyleFacilities() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeFacilityId, setActiveFacilityId] = useState("pool");
  const thumbnailTrackRef = useRef(null);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const filteredFacilities = useMemo(
    () =>
      activeCategory === "ALL"
        ? facilities
        : facilities.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const activeFacility =
    filteredFacilities.find((item) => item.id === activeFacilityId) ||
    filteredFacilities[0];

  useEffect(() => {
    if (!filteredFacilities.some((item) => item.id === activeFacilityId)) {
      setActiveFacilityId(filteredFacilities[0]?.id || "");
    }
  }, [activeCategory, activeFacilityId, filteredFacilities]);

  useEffect(() => {
    const track = thumbnailTrackRef.current;
    if (!track || !activeFacility) return;

    const activeThumbnail = track.querySelector(
      `[data-facility-id="${activeFacility.id}"]`,
    );

    if (!activeThumbnail) return;

    const cardLeft = activeThumbnail.offsetLeft - track.offsetLeft;
    const cardRight = cardLeft + activeThumbnail.offsetWidth;

    if (cardLeft < track.scrollLeft) {
      track.scrollTo({
        left: cardLeft,
        behavior: "smooth",
      });
    } else if (cardRight > track.scrollLeft + track.clientWidth) {
      track.scrollTo({
        left: cardRight - track.clientWidth,
        behavior: "smooth",
      });
    }
  }, [activeFacilityId, activeFacility]);

  const selectCategory = (category) => {
    setActiveCategory(category);

    const nextItems =
      category === "ALL"
        ? facilities
        : facilities.filter((item) => item.category === category);

    setActiveFacilityId(nextItems[0]?.id || "");
  };

  const selectAdjacent = (direction) => {
    if (!activeFacility || filteredFacilities.length < 2) return;

    const currentIndex = filteredFacilities.findIndex(
      (item) => item.id === activeFacility.id,
    );

    const nextIndex =
      (currentIndex + direction + filteredFacilities.length) %
      filteredFacilities.length;

    setActiveFacilityId(filteredFacilities[nextIndex].id);
  };

  const scrollThumbnails = (direction) => {
    if (!thumbnailTrackRef.current) return;

    thumbnailTrackRef.current.scrollBy({
      left: direction * 280,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isCarouselPaused || filteredFacilities.length <= 4) return;

    const interval = setInterval(() => {
      const currentIndex = filteredFacilities.findIndex(
        (item) => item.id === activeFacilityId,
      );

      const nextIndex =
        currentIndex + 1 >= filteredFacilities.length ? 0 : currentIndex + 1;

      setActiveFacilityId(filteredFacilities[nextIndex].id);
    }, 2500);

    return () => clearInterval(interval);
  }, [activeFacilityId, filteredFacilities, isCarouselPaused]);

  if (!activeFacility) return null;

  const activeIndex = filteredFacilities.findIndex(
    (item) => item.id === activeFacility.id,
  );

  const nextFacility =
    filteredFacilities[(activeIndex + 1) % filteredFacilities.length];

  return (
    <section
      className="uv-lifestyle"
      id="lifestyle-facilities"
      aria-labelledby="uv-lifestyle-title"
    >
      <div className="uv-life-shell">
        {/* SECTION HEADING */}
        <header className="uv-life-heading">
          <div className="uv-life-heading-copy">
            <div className="uv-life-eyebrow">
              <span className="uv-life-eyebrow-line" />
              <span>THE LIFESTYLE</span>
            </div>

            <h2 id="uv-lifestyle-title">
              Everyday living,
              <br />
              <em>beautifully elevated.</em>
            </h2>
          </div>

          <div style={{ marginBlock: "20px" }} className="uv-life-heading-side">
            <p>
              Recreation, wellness, nature and community essentials come
              together in a thoughtfully planned environment at MUHAJIREEN.
            </p>

            <div className="uv-life-total">
              <strong>{String(facilities.length).padStart(2, "0")}</strong>
              <span>
                LIFESTYLE
                <br />
                FACILITIES
              </span>
            </div>
          </div>
        </header>

        {/* CATEGORY FILTER */}
        <div className="uv-life-filter-row">
          <div className="uv-life-filter-label">
            <span className="uv-life-eyebrow-line" />
            <span>EXPLORE FACILITIES</span>
          </div>

          <div
            className="uv-life-filters"
            role="group"
            aria-label="Filter lifestyle facilities"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "is-active" : ""}
                aria-pressed={activeCategory === category}
                onClick={() => selectCategory(category)}
              >
                {category === "ALL" ? "All" : category}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED FACILITY */}
        <div className="uv-life-feature">
          <div className="uv-life-feature-image">
            <img
              key={activeFacility.image}
              src={activeFacility.image}
              alt={activeFacility.title}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.opacity = "0";
              }}
            />

            <div className="uv-life-feature-image-shade" />

            <span className="uv-life-image-index">
              {activeFacility.number}
              <i />
              {String(facilities.length).padStart(2, "0")}
            </span>

            <span className="uv-life-image-caption">
              MUHAJIREEN · THE LIFESTYLE
            </span>
          </div>

          <aside className="uv-life-feature-panel" aria-live="polite">
            <div className="uv-life-feature-top">
              <span>{activeFacility.category}</span>
              <span>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(filteredFacilities.length).padStart(2, "0")}
              </span>
            </div>

            <div className="uv-life-feature-icon" aria-hidden="true">
              <span>✳</span>
            </div>

            <div className="uv-life-feature-copy">
              <span className="uv-life-feature-kicker">
                A PART OF EVERYDAY LIFE
              </span>

              <h3>{activeFacility.title}</h3>
              <p>{activeFacility.description}</p>

              {/* DETAIL PAGE LINK */}
              <a
                href={`/lifestyle-facilities/${activeFacility.id}`}
                className="uv-life-detail-btn"
                aria-label={`Explore details about ${activeFacility.title}`}
              >
                Explore Details
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="uv-life-feature-bottom">
              <div className="uv-life-next">
                <span>EXPLORE NEXT</span>

                <button
                  type="button"
                  onClick={() => selectAdjacent(1)}
                  aria-label={`View next facility: ${nextFacility?.title}`}
                >
                  <span>{nextFacility?.title || "Next facility"}</span>
                  <b>→</b>
                </button>
              </div>

              <div className="uv-life-feature-arrows">
                <button
                  type="button"
                  onClick={() => selectAdjacent(-1)}
                  aria-label="Previous facility"
                  disabled={filteredFacilities.length < 2}
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={() => selectAdjacent(1)}
                  aria-label="Next facility"
                  disabled={filteredFacilities.length < 2}
                >
                  →
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* THUMBNAIL CAROUSEL HEADING */}
        <div className="uv-life-carousel-heading">
          <div>
            <div className="uv-life-eyebrow">
              <span className="uv-life-eyebrow-line" />
              <span>THE DETAILS</span>
            </div>

            <h3>
              Discover the <em>possibilities.</em>
            </h3>
          </div>

          <div className="uv-life-carousel-controls">
            <span className="uv-life-result-count">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(filteredFacilities.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={() => scrollThumbnails(-1)}
              aria-label="Scroll thumbnails left"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scrollThumbnails(1)}
              aria-label="Scroll thumbnails right"
            >
              →
            </button>
          </div>
        </div>

        {/* HORIZONTAL THUMBNAIL CAROUSEL */}
        <div
          className="uv-life-thumbnail-track"
          ref={thumbnailTrackRef}
          role="group"
          aria-label="Choose a lifestyle facility"
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
          onFocus={() => setIsCarouselPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsCarouselPaused(false);
            }
          }}
        >
          {filteredFacilities.map((facility) => (
            <button
              key={facility.id}
              type="button"
              data-facility-id={facility.id}
              className={`uv-life-thumbnail ${
                activeFacility.id === facility.id ? "is-selected" : ""
              }`}
              onClick={() => setActiveFacilityId(facility.id)}
              aria-pressed={activeFacility.id === facility.id}
              aria-label={`Show ${facility.title}`}
            >
              <div className="uv-life-thumbnail-image">
                <img
                  src={facility.image}
                  alt=""
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.opacity = "0";
                  }}
                />

                <span className="uv-life-thumbnail-number">
                  {facility.number}
                </span>

                <span className="uv-life-thumbnail-arrow">↗</span>
              </div>

              <div className="uv-life-thumbnail-info">
                <span>{facility.category}</span>
                <h4>{facility.title}</h4>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .uv-lifestyle {
          --life-gold: #c9a46a;
          --life-gold-dark: #9c7941;
          --life-ink: #443d34;
          --life-muted: #766c68;

          position: relative;
          isolation: isolate;
          overflow: hidden;
          width: 100%;
          height: auto !important;
          min-height: auto !important;
          max-height: none !important;
          display: block !important;
          padding: clamp(60px, 7vw, 90px) 24px !important;
          color: var(--life-ink);
          background:
            radial-gradient(
              ellipse at 88% 12%,
              rgba(201, 164, 106, 0.1),
              transparent 34%
            ),
            radial-gradient(
              ellipse at 8% 85%,
              rgba(87, 29, 43, 0.035),
              transparent 32%
            ),
            #f7f3ec;
        }

        .uv-lifestyle::before,
        .uv-lifestyle::after {
          content: "";
          position: absolute;
          z-index: -1;
          width: 380px;
          height: 380px;
          border: 1px solid rgba(201, 164, 106, 0.16);
          border-radius: 50%;
          pointer-events: none;
        }

        .uv-lifestyle::before {
          top: -180px;
          right: -150px;
        }

        .uv-lifestyle::after {
          bottom: -200px;
          left: -180px;
        }

        .uv-lifestyle,
        .uv-lifestyle * {
          box-sizing: border-box;
        }

        .uv-life-shell {
          position: relative;
          z-index: 1;
          width: min(1280px, calc(100% - 48px));
          margin: 0 auto;
          max-height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* HEADING */
        .uv-life-heading {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(250px, 0.62fr);
          align-items: end;
          gap: 30px;
          margin-bottom: 20px;
        }

        .uv-life-eyebrow,
        .uv-life-filter-label {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--life-gold-dark);
          font-size: 8.5px;
          font-weight: 800;
          letter-spacing: 0.22em;
          line-height: 1.5;
        }

        .uv-life-eyebrow-line {
          display: inline-block;
          width: 30px;
          height: 1px;
          flex: 0 0 30px;
          background: var(--life-gold);
        }

        .uv-life-heading h2 {
          margin: 10px 0 0;
          color: #443d34;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(32px, 4vh, 52px);
          font-weight: 400;
          letter-spacing: -0.065em;
          line-height: 1.04;
        }

        .uv-life-heading h2 em,
        .uv-life-carousel-heading h3 em {
          color: #a88961;
          font-weight: 400;
          font-style: italic;
        }

        .uv-life-heading-side {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 18px;
        }

        .uv-life-heading-side p {
          max-width: 370px;
          margin: 0;
          color: #766c68;
          font-size: 11.5px;
          line-height: 1.6;
        }

        .uv-life-total {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 0 0 auto;
          min-height: 54px;
          padding: 8px 14px;
          border: 1px solid #e6ded1;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.56);
        }

        .uv-life-total strong {
          color: #a88961;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          font-weight: 400;
          line-height: 1;
        }

        .uv-life-total span {
          color: #8b7b68;
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 0.15em;
          line-height: 1.4;
        }

        /* CATEGORY FILTER */
        .uv-life-filter-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 14px;
        }

        .uv-life-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 6px;
        }

        .uv-life-filters button {
          min-height: 28px;
          padding: 6px 11px;
          border: 1px solid #e5ddd1;
          border-radius: 99px;
          color: #786f66;
          background: rgba(255, 255, 255, 0.58);
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .uv-life-filters button:hover,
        .uv-life-filters button.is-active {
          border-color: #c9a46a;
          color: #70552f;
          background: #f1e6d4;
        }

        /* FEATURED AREA */
        .uv-life-feature {
          display: grid;
          grid-template-columns: minmax(0, 1.7fr) minmax(280px, 0.8fr);
          min-height: 310px;
          overflow: hidden;
          border: 1px solid #e8e0d5;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.72);
          box-shadow: 0 16px 45px rgba(63, 48, 34, 0.06);
        }

        .uv-life-feature-image {
          position: relative;
          min-height: 310px;
          overflow: hidden;
          background: #d8d0c2;
        }

        .uv-life-feature-image img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: uvLifeImageIn 0.65s ease both;
        }

        .uv-life-feature-image-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(20, 25, 25, 0.1),
            transparent 38%,
            rgba(20, 25, 25, 0.3)
          );
          pointer-events: none;
        }

        .uv-life-image-index {
          position: absolute;
          top: 14px;
          left: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          border: 1px solid rgba(255, 255, 255, 0.55);
          border-radius: 99px;
          color: #fff;
          background: rgba(35, 35, 30, 0.22);
          backdrop-filter: blur(12px);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .uv-life-image-index i {
          width: 16px;
          height: 1px;
          background: rgba(255, 255, 255, 0.8);
        }

        .uv-life-image-caption {
          position: absolute;
          bottom: 14px;
          left: 16px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .uv-life-feature-panel {
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 20px 24px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.94),
            rgba(250, 247, 241, 0.92)
          );
        }

        .uv-life-feature-top {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          color: #a17d4b;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .uv-life-feature-top span:last-child {
          color: #9b9185;
          font-size: 9px;
          letter-spacing: 0.08em;
        }

        .uv-life-feature-icon {
          display: none;
        }

        .uv-life-feature-copy {
          margin: auto 0;
          padding: 12px 0;
        }

        .uv-life-feature-kicker {
          color: #a17d4b;
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .uv-life-feature-copy h3 {
          margin: 6px 0 6px;
          color: #443d34;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(22px, 2.4vh, 30px);
          font-weight: 400;
          letter-spacing: -0.045em;
          line-height: 1.12;
        }

        .uv-life-feature-copy p {
          margin: 0;
          color: #766c68;
          font-size: 11px;
          line-height: 1.55;
        }

        /* EXPLORE DETAILS BUTTON */
        .uv-life-detail-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: fit-content;
          margin-top: 14px;
          padding: 10px 16px;
          border: 1px solid #c9a46a;
          border-radius: 4px;
          color: #70552f;
          background: transparent;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-decoration: none;
          transition:
            color 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .uv-life-detail-btn:hover {
          color: #fff;
          background: #a88961;
          border-color: #a88961;
        }

        .uv-life-detail-btn span {
          font-size: 14px;
          transition: transform 0.25s ease;
        }

        .uv-life-detail-btn:hover span {
          transform: translate(2px, -2px);
        }

        .uv-life-feature-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
          padding-top: 12px;
          border-top: 1px solid #e9e1d6;
        }

        .uv-life-next {
          min-width: 0;
        }

        .uv-life-next > span {
          display: block;
          margin-bottom: 4px;
          color: #a17d4b;
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .uv-life-next button {
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 190px;
          padding: 0;
          border: 0;
          color: #51483f;
          background: transparent;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 13.5px;
          text-align: left;
          cursor: pointer;
        }

        .uv-life-next button span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .uv-life-next button b {
          color: #a17d4b;
          font-family: Arial, sans-serif;
          font-size: 16px;
          font-weight: 400;
        }

        .uv-life-feature-arrows {
          display: flex;
          gap: 6px;
          flex: 0 0 auto;
        }

        .uv-life-feature-arrows button,
        .uv-life-carousel-controls button {
          display: grid;
          place-items: center;
          width: 30px;
          height: 30px;
          border: 1px solid #e2d8c9;
          border-radius: 50%;
          color: #80633d;
          background: #fff;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .uv-life-feature-arrows button:hover,
        .uv-life-carousel-controls button:hover {
          border-color: #c9a46a;
          color: #fff;
          background: #a88961;
        }

        .uv-life-feature-arrows button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        /* THUMBNAIL CAROUSEL HEADING */
        .uv-life-carousel-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          margin: 22px 0 12px;
        }

        .uv-life-carousel-heading h3 {
          margin: 6px 0 0;
          color: #443d34;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(22px, 2.4vh, 30px);
          font-weight: 400;
        }

        .uv-life-carousel-controls {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .uv-life-result-count {
          margin-right: 8px;
          color: #928779;
          font-size: 8.5px;
          font-weight: 800;
          letter-spacing: 0.13em;
        }

        /* HORIZONTAL THUMBNAILS */
        .uv-life-thumbnail-track {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 4px 2px 8px;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
        }

        .uv-life-thumbnail-track::-webkit-scrollbar {
          display: none;
        }

        .uv-life-thumbnail {
          flex: 0 0 calc((100% - 36px) / 4);
          min-width: 0;
          padding: 0;
          overflow: hidden;
          border: 1px solid #e8e0d5;
          border-radius: 14px;
          color: inherit;
          background: rgba(255, 255, 255, 0.72);
          text-align: left;
          cursor: pointer;
          scroll-snap-align: start;
          transition: all 0.3s ease;
        }

        .uv-life-thumbnail.is-selected {
          border: 2px solid #c9a46a;
          box-shadow: 0 8px 20px rgba(63, 48, 34, 0.08);
        }

        .uv-life-thumbnail-image {
          position: relative;
          height: 95px;
          overflow: hidden;
          background: #d8d0c2;
        }

        .uv-life-thumbnail-image img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .uv-life-thumbnail:hover .uv-life-thumbnail-image img {
          transform: scale(1.04);
        }

        .uv-life-thumbnail-number {
          position: absolute;
          top: 8px;
          left: 8px;
          display: grid;
          place-items: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          color: #fff;
          background: rgba(30, 30, 25, 0.4);
          font-size: 7.5px;
          font-weight: 800;
        }

        .uv-life-thumbnail-arrow {
          position: absolute;
          top: 8px;
          right: 8px;
          display: grid;
          place-items: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          color: #fff;
          background: rgba(30, 30, 25, 0.4);
          font-size: 11px;
        }

        .uv-life-thumbnail-info {
          min-height: 54px;
          padding: 8px 10px;
        }

        .uv-life-thumbnail-info > span {
          color: #a17d4b;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 0.13em;
        }

        .uv-life-thumbnail-info h4 {
          margin: 3px 0 0;
          color: #51483f;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 13.5px;
          font-weight: 400;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .uv-life-disclaimer,
        .uv-life-carousel-hint {
          display: none;
        }

        @keyframes uvLifeImageIn {
          from {
            opacity: 0.65;
            transform: scale(1.025);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 900px) {
          .uv-life-shell {
            width: 100%;
          }

          .uv-life-heading {
            display: block;
          }

          .uv-life-heading-side {
            margin-top: 18px;
          }

          .uv-life-filter-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .uv-life-filters {
            justify-content: flex-start;
          }

          .uv-life-feature {
            grid-template-columns: 1fr;
            height: auto;
          }

          .uv-life-feature-image {
            min-height: 220px;
          }

          .uv-life-feature-panel {
            min-height: 280px;
          }

          .uv-life-thumbnail {
            flex: 0 0 calc((100% - 12px) / 2);
          }
        }

        @media (max-width: 520px) {
          .uv-lifestyle {
            padding: 42px 18px !important;
          }

          .uv-life-heading h2 {
            font-size: clamp(30px, 8vw, 42px);
          }

          .uv-life-heading-side {
            align-items: flex-start;
            flex-direction: column;
          }

          .uv-life-feature-panel {
            padding: 18px;
          }

          .uv-life-carousel-heading {
            align-items: flex-start;
          }

          .uv-life-carousel-controls {
            gap: 4px;
          }

          .uv-life-result-count {
            margin-right: 2px;
          }

          .uv-life-thumbnail {
            flex: 0 0 78%;
          }
        }
      `}</style>
    </section>
  );
}
