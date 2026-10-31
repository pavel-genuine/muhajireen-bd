"use client";

import React, { useMemo, useState } from "react";

const facilities = [
  {
    id: "hospital",
    label: "Multi-Specialized General Hospital",
    short: "HOSPITAL",
    x: 30,
    y: 50,
    image: "/images/slider/hero-slide/img-4.1-main.png",
    category: "HEALTHCARE",
    description:
      "A planned multi-specialized healthcare facility focused on modern treatment and patient care.",
  },
  {
    id: "dental",
    label: "Dental Hospital",
    short: "DENTAL HOSPITAL",
    x: 37,
    y: 39,
    image: "/images/slider/hero-slide/img-5.1-main.png",
    category: "SPECIALIZED CARE",
    description:
      "A dedicated dental-care facility envisioned to support specialized oral healthcare.",
  },
  {
    id: "nursing",
    label: "Nursing Institute",
    short: "NURSING INSTITUTE",
    x: 42,
    y: 34,
    image: "/images/slider/hero-slide/img-6.jpeg",
    category: "EDUCATION & HEALTHCARE",
    description:
      "A planned nursing institute with modern learning facilities for future healthcare professionals.",
  },
  {
    id: "school",
    label: "International School",
    short: "INTERNATIONAL SCHOOL",
    x: 35,
    y: 20,
    image: "/images/slider/hero-slide/img-8-main.png",
    category: "EDUCATION",
    description:
      "An international school envisioned to nurture curiosity, creativity and lifelong learning.",
  },
  {
    id: "mosque",
    label: "Mosque & Madrasha",
    short: "MOSQUE & MADRASHA",
    x: 50,
    y: 20,
    image: "/images/slider/hero-slide/img-7-main.png",
    category: "FAITH & COMMUNITY",
    description:
      "A spiritual and educational destination planned for the community.",
  },
  {
    id: "residential",
    label: "Residential Buildings",
    short: "RESIDENTIAL",
    x: 83,
    y: 17,
    image: "/images/slider/hero-slide/img-3.1-main.png",
    category: "RESIDENTIAL LIVING",
    description:
      "Contemporary residential buildings planned with community spaces and landscaped surroundings.",
  },
  {
    id: "park",
    label: "Central Park",
    short: "CENTRAL PARK",
    x: 63,
    y: 40,
    image: "/images/slider/hero-slide/img-3.1-main.png",
    category: "LIFESTYLE",
    description:
      "A green community space envisioned for outdoor recreation and family time.",
  },
  {
    id: "commercial",
    label: "Prestigious Commercial Spaces",
    short: "COMMERCIAL",
    x: 73,
    y: 59,
    image: "/images/slider/hero-slide/img-2.1-main.png",
    category: "BUSINESS",
    description:
      "Commercial spaces planned to support businesses, services and everyday needs.",
  },
  {
    id: "mall",
    label: "Shopping Mall",
    short: "SHOPPING MALL",
    x: 72,
    y: 77,
    image: "/images/slider/hero-slide/img-2.1-main.png",
    category: "SHOPPING & LIFESTYLE",
    description:
      "A planned destination for retail, dining and lifestyle experiences.",
  },
  {
    id: "avenue",
    label: "Avenue 9",
    short: "AVENUE 9",
    x: 40,
    y: 92,
    image: "/images/slider/hero-slide/img-2.1-main.png",
    category: "ROAD NETWORK",
    description:
      "A key internal access route shown in the project concept. Confirm final road naming against the approved plan.",
  },
];

const roads = [
  ["Front Road", "80 ft"],
  ["Back Road", "30 ft"],
  ["Right-side Road", "50 ft"],
  ["Left-side Road", "30 ft"],
];

const nearbyDestinations = [
  {
    id: "metro",
    name: "Uttara Center Metro Station",
    category: "TRANSPORT",
    icon: "↗",
    description: "Metro Rail access for connections toward central Dhaka.",
    query: "Uttara Center Metro Station Dhaka",
  },
  {
    id: "airport",
    name: "Hazrat Shahjalal International Airport",
    category: "TRANSPORT",
    icon: "✈",
    description:
      "Dhaka’s international airport and a key regional travel gateway.",
    query: "Hazrat Shahjalal International Airport Dhaka",
  },
  {
    id: "boat-club",
    name: "Dhaka Boat Club",
    category: "LIFESTYLE",
    icon: "≈",
    description:
      "A recognised riverside club destination in the wider Uttara–Ashulia area.",
    query: "Dhaka Boat Club Birulia",
  },
  {
    id: "diu",
    name: "Daffodil International University",
    category: "EDUCATION",
    icon: "⌂",
    description: "University campus at Daffodil Smart City, Birulia.",
    query: "Daffodil International University Daffodil Smart City",
  },
  {
    id: "world-university",
    name: "World University of Bangladesh",
    category: "EDUCATION",
    icon: "⌘",
    description:
      "World University of Bangladesh, shown south-east of MUHAJIREEN in the supplied map.",
    query: "World University of Bangladesh",
  },
  {
    id: "eastern",
    name: "Eastern University",
    category: "EDUCATION",
    icon: "✳",
    description: "Permanent campus in Ashulia Model Town.",
    query: "Eastern University Ashulia Model Town",
  },
  {
    id: "birulia-bridge",
    name: "Birulia Bridge",
    category: "CONNECTIVITY",
    icon: "⌁",
    description:
      "A local river-crossing and road connection in the Birulia area.",
    query: "Birulia Bridge Savar",
  },
  {
    id: "uttara-university",
    name: "Uttara University",
    category: "EDUCATION",
    icon: "⌂",
    description:
      "A university shown north-east of MUHAJIREEN in the supplied map screenshot.",
    query: "Uttara University Dhaka",
  },
  {
    id: "milestone",
    name: "Milestone College",
    category: "EDUCATION",
    icon: "⌘",
    description:
      "Milestone College Permanent Campus, visible north-east of the project on the supplied map.",
    query: "Milestone College Permanent Campus Uttara",
  },
];

export default function MasterplanConnectivity() {
  const [activeId, setActiveId] = useState("hospital");
  const [nearbyFilter, setNearbyFilter] = useState("ALL");
  const [nearbyActiveId, setNearbyActiveId] = useState("metro");
  const [activeTab, setActiveTab] = useState("masterplan");
  const activeNearby = useMemo(
    () =>
      nearbyDestinations.find((place) => place.id === nearbyActiveId) ||
      nearbyDestinations[0],
    [nearbyActiveId],
  );
  const active = useMemo(
    () => facilities.find((item) => item.id === activeId) || facilities[0],
    [activeId],
  );
  const activeIndex = facilities.findIndex((item) => item.id === activeId);
  const visibleDestinations = nearbyDestinations.filter(
    (place) => nearbyFilter === "ALL" || place.category === nearbyFilter,
  );

  const move = (step) =>
    setActiveId(
      facilities[(activeIndex + step + facilities.length) % facilities.length]
        .id,
    );
  const moveNearby = () => {
    const index = visibleDestinations.findIndex(
      (place) => place.id === nearbyActiveId,
    );
    const next =
      visibleDestinations[
        (Math.max(index, 0) + 1) % visibleDestinations.length
      ];
    if (next) setNearbyActiveId(next.id);
  };
  const selectNearbyFilter = (filter) => {
    setNearbyFilter(filter);
    const first = nearbyDestinations.find(
      (place) => filter === "ALL" || place.category === filter,
    );
    if (first) setNearbyActiveId(first.id);
  };

  return (
    <section
      className="uv-masterplan"
      id="masterplan-connectivity"
      aria-labelledby="uv-mp-title"
    >
      <div className="uv-mp-shell">
        <header className="uv-mp-heading">
          <span className="uv-mp-eyebrow">THE VISION IN PLAN</span>
          <h2 id="uv-mp-title">
            Masterplan <em>&amp;</em> Connectivity
          </h2>
          <p>
            Explore the planned community, discover key facilities on the
            masterplan, and learn about the project’s road access.
          </p>
        </header>

        <div
          className="uv-mp-tabs"
          role="tablist"
          aria-label="Project information"
        >
          <button
            type="button"
            role="tab"
            id="uv-tab-masterplan"
            aria-selected={activeTab === "masterplan"}
            aria-controls="uv-panel-masterplan"
            className={activeTab === "masterplan" ? "is-active" : ""}
            onClick={() => setActiveTab("masterplan")}
          >
            Masterplan
          </button>

          <button
            type="button"
            role="tab"
            id="uv-tab-connectivity"
            aria-selected={activeTab === "connectivity"}
            aria-controls="uv-panel-connectivity"
            className={activeTab === "connectivity" ? "is-active" : ""}
            onClick={() => setActiveTab("connectivity")}
          >
            Connectivity
          </button>
        </div>
        {activeTab === "masterplan" && (
          <div
            id="uv-panel-masterplan"
            role="tabpanel"
            aria-labelledby="uv-tab-masterplan"
          >
            <div className="uv-mp-stats">
              <div>
                <strong>
                  5 <small>Acres</small>
                </strong>
                <span>PROJECT LAND</span>
              </div>
              <div>
                <strong>
                  303 <small>Kathas</small>
                </strong>
                <span>TOTAL LAND AREA</span>
              </div>
              <div>
                <strong>10</strong>
                <span>FEATURED LOCATIONS</span>
              </div>
            </div>

            <div className="uv-mp-explorer">
              <div className="uv-mp-map-panel">
                <div className="uv-mp-map-heading">
                  <div>
                    <span>INTERACTIVE SITE PLAN</span>
                    <strong>Explore the development</strong>
                  </div>
                </div>
                <div className="uv-mp-map">
                  <img
                    className="uv-mp-map-image"
                    src="/images/slider/hero-slide/img-1-1.png"
                    alt="MUHAJIREEN project masterplan"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                    onError={(event) => {
                      event.currentTarget.style.visibility = "hidden";
                    }}
                  />
                  <div className="uv-mp-map-shade" />
                  {facilities.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`uv-mp-pin ${activeId === item.id ? "is-active" : ""}`}
                      style={{ left: `${item.x}%`, top: `${item.y}%` }}
                      onClick={() => setActiveId(item.id)}
                      aria-label={`Show ${item.label} details`}
                      aria-pressed={activeId === item.id}
                    >
                      <span className="uv-mp-pin-dot" />
                      <span className="uv-mp-pin-label">{item.short}</span>
                    </button>
                  ))}
                  <span className="uv-mp-map-caption">
                    Select a marker to explore a facility
                  </span>
                </div>
                <p className="uv-mp-note">
                  Illustrative project plan. Confirm final facility locations
                  and road details against approved project documents.
                </p>
              </div>

              <aside className="uv-mp-detail" aria-live="polite">
                <div className="uv-mp-detail-image">
                  <img
                    key={active.image}
                    src={active.image}
                    alt={active.label}
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      event.currentTarget.style.visibility = "hidden";
                    }}
                  />
                  <span>
                    {String(activeIndex + 1).padStart(2, "0")}{" "}
                    <i>/ {String(facilities.length).padStart(2, "0")}</i>
                  </span>
                </div>
                <div className="uv-mp-detail-body">
                  <small>{active.category}</small>
                  <h3>{active.label}</h3>
                  <p>{active.description}</p>
                  <div className="uv-mp-detail-actions">
                    <button type="button" onClick={() => move(-1)}>
                      ← Previous
                    </button>
                    <button type="button" onClick={() => move(1)}>
                      Next facility →
                    </button>
                  </div>
                </div>
              </aside>
            </div>

            <div className="uv-mp-connectivity">
              <div className="uv-mp-connectivity-copy">
                <span className="uv-mp-eyebrow">ACCESS &amp; MOVEMENT</span>
                <h3>
                  Planned for <em>easy access.</em>
                </h3>
                <p>
                  The project information lists the following adjoining road
                  widths. Confirm these dimensions against the latest approved
                  plan before publication.
                </p>
              </div>
              <div className="uv-mp-roads">
                {roads.map(([label, width]) => (
                  <div className="uv-mp-road" key={label}>
                    <span>↗</span>
                    <b>{label}</b>
                    <strong>{width}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "connectivity" && (
          <div
            id="uv-panel-connectivity"
            role="tabpanel"
            aria-labelledby="uv-tab-connectivity"
          >
            {" "}
            <section
              className="uv-mp-nearby"
              aria-labelledby="uv-mp-nearby-title"
            >
              <div className="uv-mp-nearby-heading">
                <div>
                  <span className="uv-mp-eyebrow">THE NEIGHBOURHOOD</span>
                  <h3 id="uv-mp-nearby-title">
                    Connected to <em>what matters.</em>
                  </h3>
                  <p>
                    Explore key destinations around the wider Uttara–Ashulia
                    area. Select a hotspot to view details or open its location
                    in Google Maps.
                  </p>
                </div>
                <div className="uv-mp-nearby-count">
                  <strong>
                    {String(nearbyDestinations.length).padStart(2, "0")}
                  </strong>
                  <span>DESTINATIONS</span>
                </div>
              </div>
              <div className="uv-mp-connectivity-map-layout">
                <div
                  className="uv-mp-connectivity-map uv-mp-connectivity-map-real"
                  aria-label="Real map showing MUHAJIREEN and nearby destinations"
                >
                  <img
                    className="uv-mp-connectivity-map-image"
                    src="/images/slider/hero-slide/localmap.png"
                    alt="Map of MUHAJIREEN and nearby destinations around Uttara and Ashulia"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                  <div className="uv-mp-map-image-tint" aria-hidden="true" />
                  <div className="uv-mp-nearby-home uv-mp-nearby-home-real">
                    <span>⌂</span>
                    <div>
                      <b>MUHAJIREEN</b>
                      <small>PROJECT LOCATION</small>
                    </div>
                  </div>
                  {visibleDestinations.map((place, index) => {
                    const positions = {
                      metro: { x: 52, y: 59.7 },
                      airport: { x: 86, y: 83.6 },
                      "boat-club": { x: 34.4, y: 62.5 },
                      diu: { x: 13.3, y: 22.7 },
                      eastern: { x: 8.5, y: 43 },
                      "birulia-bridge": { x: 31.3, y: 70.1 },
                      "uttara-university": { x: 49, y: 9 },
                      "world-university": { x: 50.5, y: 73 },
                      milestone: { x: 55, y: 20 },
                    };
                    const pos = positions[place.id];
                    const visible =
                      nearbyFilter === "ALL" || place.category === nearbyFilter;
                    if (!visible || !pos) return null;
                    return (
                      <button
                        key={place.id}
                        type="button"
                        className={`uv-mp-nearby-pin ${nearbyActiveId === place.id ? "is-active" : ""}`}
                        style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                        onClick={() => setNearbyActiveId(place.id)}
                        aria-label={`Show ${place.name}`}
                        aria-pressed={nearbyActiveId === place.id}
                      >
                        <span className="uv-mp-nearby-pin-dot">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="uv-mp-nearby-pin-label">
                          {place.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <aside className="uv-mp-nearby-detail" aria-live="polite">
                  <div className="uv-mp-nearby-detail-top">
                    <span>{activeNearby.category}</span>
                    <strong>
                      {String(
                        nearbyDestinations.findIndex(
                          (place) => place.id === activeNearby.id,
                        ) + 1,
                      ).padStart(2, "0")}{" "}
                      <i>
                        / {String(nearbyDestinations.length).padStart(2, "0")}
                      </i>
                    </strong>
                  </div>
                  <div className="uv-mp-nearby-detail-icon">
                    {activeNearby.icon}
                  </div>
                  <h4>{activeNearby.name}</h4>
                  <p>{activeNearby.description}</p>
                  <div className="uv-mp-nearby-detail-actions">
                    <button type="button" onClick={moveNearby}>
                      Next destination <span>→</span>
                    </button>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeNearby.query)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                </aside>
              </div>
              <div className="uv-mp-nearby-toolbar">
                <div>
                  <span className="uv-mp-eyebrow">FILTER DESTINATIONS</span>
                  <strong>Choose a category</strong>
                </div>
                <div
                  className="uv-mp-nearby-filters"
                  role="group"
                  aria-label="Filter nearby destinations"
                >
                  {[
                    "ALL",
                    "TRANSPORT",
                    "EDUCATION",
                    "LIFESTYLE",
                    "CONNECTIVITY",
                  ].map((filter) => (
                    <button
                      type="button"
                      key={filter}
                      className={nearbyFilter === filter ? "is-active" : ""}
                      onClick={() => selectNearbyFilter(filter)}
                      aria-pressed={nearbyFilter === filter}
                    >
                      {filter === "CONNECTIVITY" ? "ROADS" : filter}
                    </button>
                  ))}
                </div>
              </div>
              <p className="uv-mp-nearby-note">
                Pin positions are placed visually from the map image you
                supplied and are approximate, not surveyed coordinates. The
                bridge shown is a proposed concept only—not a confirmed or
                completed project. Verify destination locations, bridge
                feasibility and approvals before publication.
              </p>
            </section>
            <div className="uv-mp-location-note">
              <span aria-hidden="true">⌖</span>
              <div>
                <strong>Location context</strong>
                <p>
                  MUHAJIREEN is described in the project materials as being
                  beside Uttara Sector 16, Ashulia Model Town. Any proposed
                  bridge or future transport link should be clearly labelled
                  “Proposed,” not shown as completed.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .uv-masterplan,
        .uv-masterplan * {
          box-sizing: border-box;
        }
        .uv-masterplan {
          --mp-ivory: #f8f5ef;
          --mp-beige: #d9c6a8;
          --mp-sand: #a68b67;
          --mp-gold: #c9a46a;
          --mp-ink: #51483d;
          --mp-muted: #81776b;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          width: 100%;
          height: auto !important;
          min-height: auto !important;
          max-height: none !important;
          padding: clamp(50px, 6vw, 90px) 24px;
          color: var(--mp-ink);
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
            linear-gradient(145deg, #fffefa 0%, var(--mp-ivory) 100%);
        }
        .uv-mp-shell {
          position: relative;
          z-index: 1;
          width: min(1320px, 100%);
          margin: auto;
        }
        .uv-masterplan:before,
        .uv-masterplan:after {
          position: absolute;
          z-index: -1;
          content: "";
          border: 1px solid rgba(166, 139, 103, 0.18);
          border-radius: 50%;
          pointer-events: none;
        }
        .uv-masterplan:before {
          top: 8%;
          right: -190px;
          width: 430px;
          height: 430px;
        }
        .uv-masterplan:after {
          bottom: 8%;
          left: -190px;
          width: 390px;
          height: 390px;
        }
        .uv-mp-heading {
          max-width: 790px;
          margin: 0 auto 24px;
          text-align: center;
        }
        .uv-mp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--mp-sand);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }
        .uv-mp-eyebrow:before {
          width: 34px;
          height: 1px;
          background: var(--mp-gold);
          content: "";
        }
        .uv-mp-heading h2 {
          margin: 16px 0 12px;
          color: #51483d;
          font-size: clamp(35px, 4.8vw, 62px);
          font-weight: 500;
          line-height: 1.02;
          letter-spacing: -0.022em;
        }
        .uv-mp-heading h2 em,
        .uv-mp-connectivity h3 em,
        .uv-mp-nearby-heading h3 em {
          color: var(--mp-sand);
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-style: italic;
          letter-spacing: -0.055em;
        }
        .uv-mp-heading p {
          max-width: 620px;
          margin: auto;
          color: var(--mp-muted);
          font-size: 13px;
          line-height: 1.7;
        }
        .uv-mp-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          max-width: 780px;
          margin: 0 auto 35px;
          border: 1px solid rgba(166, 139, 103, 0.2);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.55);
          box-shadow: 0 12px 35px rgba(91, 73, 48, 0.045);
          backdrop-filter: blur(14px);
        }
        .uv-mp-stats > div {
          padding: 16px 12px;
          text-align: center;
        }
        .uv-mp-stats > div + div {
          border-left: 1px solid rgba(166, 139, 103, 0.18);
        }
        .uv-mp-stats strong {
          display: block;
          color: #51483d;
          font-size: clamp(24px, 2.6vw, 34px);
          font-weight: 500;
          letter-spacing: -0.055em;
        }
        .uv-mp-stats small {
          color: var(--mp-sand);
          font-family: Georgia, serif;
          font-size: 13px;
          font-style: italic;
          font-weight: 400;
        }
        .uv-mp-stats span {
          display: block;
          margin-top: 4px;
          color: var(--mp-muted);
          font-size: 8.5px;
          font-weight: 800;
          letter-spacing: 0.14em;
        }
        .uv-mp-explorer {
          display: grid;
          grid-template-columns: minmax(0, 1.65fr) minmax(290px, 0.8fr);
          gap: 20px;
          align-items: stretch;
        }
        .uv-mp-map-panel,
        .uv-mp-detail {
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(166, 139, 103, 0.2);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.65);
          box-shadow: 0 16px 48px rgba(91, 73, 48, 0.07);
        }
        .uv-mp-map-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          border-bottom: 1px solid rgba(166, 139, 103, 0.16);
        }
        .uv-mp-map-heading > div {
          display: grid;
          gap: 5px;
        }
        .uv-mp-map-heading span,
        .uv-mp-connectivity-copy > .uv-mp-eyebrow {
          color: var(--mp-sand);
          font-size: 8.5px;
          font-weight: 800;
          letter-spacing: 0.17em;
        }
        .uv-mp-map-heading strong {
          color: #51483d;
          font-family: Georgia, serif;
          font-size: 18px;
          font-weight: 400;
        }
        .uv-mp-map-heading button {
          padding: 8px 12px;
          border: 1px solid rgba(166, 139, 103, 0.32);
          border-radius: 99px;
          color: #6e593d;
          background: rgba(255, 255, 255, 0.7);
          font-size: 9.5px;
          font-weight: 800;
          cursor: pointer;
        }
        .uv-mp-map-heading button:hover {
          background: #f4ead8;
        }
        .uv-mp-map {
          position: relative;
          isolation: isolate;
          min-height: 380px;
          aspect-ratio: 1.45/1;
          overflow: hidden;
          background: #e7e0d3;
        }
        .uv-mp-map-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .uv-mp-map-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(38, 31, 23, 0.1),
            transparent 55%,
            rgba(38, 31, 23, 0.26)
          );
          pointer-events: none;
        }
        .uv-mp-pin {
          position: absolute;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          max-width: 190px;
          padding: 0;
          border: 0;
          background: transparent;
          color: white;
          cursor: pointer;
          transform: translate(-50%, -50%);
        }
        .uv-mp-pin-dot {
          position: relative;
          display: grid;
          flex: 0 0 26px;
          place-items: center;
          width: 26px;
          height: 26px;
          border: 2px solid white;
          border-radius: 50%;
          color: #604a2e;
          background: #e6c28a;
          box-shadow:
            0 0 0 4px rgba(255, 255, 255, 0.38),
            0 3px 14px rgba(0, 0, 0, 0.25);
          font-size: 7.5px;
          font-weight: 900;
        }
        .uv-mp-pin-dot:after {
          position: absolute;
          inset: -6px;
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 50%;
          content: "";
          animation: uvMpPulse 2.2s ease-out infinite;
        }
        .uv-mp-pin-label {
          max-width: 155px;
          padding: 6px 9px;
          border: 1px solid rgba(255, 255, 255, 0.58);
          border-radius: 99px;
          color: white;
          background: rgba(30, 37, 34, 0.72);
          backdrop-filter: blur(10px);
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 0.05em;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .uv-mp-pin.is-active .uv-mp-pin-label,
        .uv-mp-pin:hover .uv-mp-pin-label {
          border-color: #e6c28a;
          color: #51483d;
          background: #f8f0e3;
        }
        .uv-mp-pin.is-active .uv-mp-pin-dot {
          color: white;
          background: #96784f;
          transform: scale(1.12);
        }
        .uv-mp-map-caption {
          position: absolute;
          left: 14px;
          bottom: 12px;
          padding: 7px 11px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 99px;
          color: white;
          background: rgba(30, 37, 34, 0.62);
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
        }
        .uv-mp-note {
          margin: 0;
          padding: 10px 16px;
          color: var(--mp-muted);
          font-size: 9.5px;
          line-height: 1.5;
        }
        .uv-mp-detail {
          display: flex;
          flex-direction: column;
        }
        .uv-mp-detail-image {
          position: relative;
          min-height: 200px;
          overflow: hidden;
          background: linear-gradient(135deg, #e4d8c5, #b6a487);
        }
        .uv-mp-detail-image img {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 200px;
          object-fit: cover;
        }
        .uv-mp-detail-image > span {
          position: absolute;
          right: 14px;
          bottom: 12px;
          padding: 6px 10px;
          border: 1px solid rgba(255, 255, 255, 0.55);
          border-radius: 99px;
          color: white;
          background: rgba(30, 37, 34, 0.55);
          font-size: 9px;
          font-weight: 800;
        }
        .uv-mp-detail-image i {
          color: rgba(255, 255, 255, 0.65);
          font-style: normal;
        }
        .uv-mp-detail-body {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: clamp(18px, 2.2vw, 26px);
        }
        .uv-mp-detail-body small {
          color: var(--mp-sand);
          font-size: 8.5px;
          font-weight: 800;
          letter-spacing: 0.17em;
        }
        .uv-mp-detail-body h3 {
          margin: 10px 0 8px;
          color: #51483d;
          font-family: Georgia, serif;
          font-size: clamp(22px, 2.1vw, 29px);
          font-weight: 400;
          line-height: 1.14;
          letter-spacing: -0.035em;
        }
        .uv-mp-detail-body p {
          margin: 0;
          color: var(--mp-muted);
          font-size: 11px;
          line-height: 1.7;
        }
        .uv-mp-detail-actions {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-top: auto;
          padding-top: 18px;
        }
        .uv-mp-detail-actions button {
          padding: 6px 0;
          border: 0;
          background: transparent;
          color: #766750;
          font-size: 9.5px;
          font-weight: 800;
          cursor: pointer;
        }
        .uv-mp-detail-actions button:last-child {
          color: #8a704b;
        }
        .uv-mp-connectivity {
          display: grid;
          grid-template-columns: minmax(240px, 0.85fr) minmax(0, 1.15fr);
          gap: 35px;
          align-items: center;
          margin-top: clamp(35px, 4vw, 55px);
          padding: clamp(20px, 3.2vw, 38px);
          border: 1px solid rgba(166, 139, 103, 0.17);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.43);
        }
        .uv-mp-connectivity h3 {
          margin: 10px 0 10px;
          color: #51483d;
          font-size: clamp(26px, 3.5vw, 42px);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -0.05em;
        }
        .uv-mp-connectivity-copy p {
          max-width: 430px;
          margin: 0;
          color: var(--mp-muted);
          font-size: 11.5px;
          line-height: 1.7;
        }
        .uv-mp-roads {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }
        .uv-mp-road {
          display: grid;
          grid-template-columns: 26px 1fr auto;
          align-items: center;
          gap: 9px;
          padding: 14px 12px;
          border: 1px solid rgba(166, 139, 103, 0.18);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.72);
        }
        .uv-mp-road span {
          display: grid;
          place-items: center;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          color: #89683e;
          background: #eee3d1;
        }
        .uv-mp-road b {
          color: #766d61;
          font-size: 9.5px;
        }
        .uv-mp-road strong {
          color: #51483d;
          font-family: Georgia, serif;
          font-size: 19px;
          font-weight: 400;
          white-space: nowrap;
        }
        .uv-mp-nearby {
          margin-top: clamp(35px, 4vw, 55px);
        }
        .uv-mp-nearby-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 25px;
          margin-bottom: 20px;
        }
        .uv-mp-nearby-heading > div:first-child {
          max-width: 730px;
        }
        .uv-mp-nearby-heading h3 {
          margin: 10px 0 10px;
          color: #51483d;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 500;
          line-height: 1.04;
          letter-spacing: -0.055em;
        }
        .uv-mp-nearby-heading p {
          max-width: 650px;
          margin: 0;
          color: var(--mp-muted);
          font-size: 11.5px;
          line-height: 1.7;
        }
        .uv-mp-nearby-count {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border: 1px solid rgba(166, 139, 103, 0.22);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.58);
        }
        .uv-mp-nearby-count strong {
          color: var(--mp-sand);
          font-family: Georgia, serif;
          font-size: 30px;
          font-weight: 400;
        }
        .uv-mp-nearby-count span {
          max-width: 65px;
          color: var(--mp-muted);
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 0.13em;
          line-height: 1.4;
        }
        .uv-mp-connectivity-map-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.7fr) minmax(260px, 0.7fr);
          overflow: hidden;
          border: 1px solid rgba(166, 139, 103, 0.2);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.65);
          box-shadow: 0 16px 48px rgba(91, 73, 48, 0.07);
        }
        .uv-mp-connectivity-map {
          position: relative;
          isolation: isolate;
          min-height: 0;
          aspect-ratio: 1787/837;
          overflow: hidden;
          background: #e9e3d7;
        }
        .uv-mp-connectivity-map-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
        .uv-mp-map-image-tint {
          position: absolute;
          inset: 0;
          background: rgba(248, 245, 237, 0.08);
          pointer-events: none;
        }
        .uv-mp-nearby-home {
          position: absolute;
          left: 37.94%;
          top: 46.24%;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 8px;
          border: 1px solid #d7bd91;
          background: rgba(255, 253, 248, 0.96);
          box-shadow: 0 4px 15px rgba(59, 51, 36, 0.16);
          transform: translate(-20%, -115%);
        }
        .uv-mp-nearby-home > span {
          display: grid;
          place-items: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          color: white;
          background: #a8844f;
          font-size: 14px;
        }
        .uv-mp-nearby-home div {
          display: grid;
          gap: 2px;
        }
        .uv-mp-nearby-home b {
          font-size: 7.5px;
          letter-spacing: 0.1em;
          white-space: nowrap;
        }
        .uv-mp-nearby-home small {
          color: #9a7545;
          font-size: 6.5px;
          letter-spacing: 0.13em;
        }
        .uv-mp-nearby-pin {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 6px;
          max-width: 180px;
          padding: 0;
          border: 0;
          background: transparent;
          text-align: left;
          cursor: pointer;
          transform: translate(-50%, -50%);
        }
        .uv-mp-nearby-pin-dot {
          display: grid;
          flex: 0 0 26px;
          place-items: center;
          width: 26px;
          height: 26px;
          border: 2px solid white;
          border-radius: 50%;
          color: #76562e;
          background: #e6c28a;
          box-shadow:
            0 2px 8px rgba(66, 53, 28, 0.19),
            0 0 0 4px rgba(255, 255, 255, 0.58);
          font-size: 8.5px;
          font-weight: 800;
        }
        .uv-mp-nearby-pin-label {
          max-width: 145px;
          padding: 5px 7px;
          border: 1px solid rgba(198, 161, 107, 0.72);
          border-radius: 7px;
          color: #4e585a;
          background: rgba(255, 253, 248, 0.96);
          box-shadow: 0 8px 24px rgba(24, 31, 34, 0.12);
          font-size: 7.5px;
          font-weight: 700;
          line-height: 1.3;
          opacity: 1;
          visibility: visible;
          transform: none;
          transition:
            border-color 0.22s ease,
            background 0.22s ease;
          pointer-events: none;
        }
        .uv-mp-nearby-pin.is-active .uv-mp-nearby-pin-label,
        .uv-mp-nearby-pin:hover .uv-mp-nearby-pin-label {
          border-color: #9c7847;
          background: #f4ead8;
        }
        .uv-mp-nearby-pin.is-active .uv-mp-nearby-pin-dot,
        .uv-mp-nearby-pin:hover .uv-mp-nearby-pin-dot {
          color: white;
          background: #9c7847;
          transform: scale(1.12);
        }
        .uv-mp-map-legend {
          position: absolute;
          left: 14px;
          bottom: 13px;
          z-index: 6;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border: 1px solid rgba(166, 139, 103, 0.2);
          border-radius: 99px;
          color: #687477;
          background: rgba(255, 253, 248, 0.91);
          font-size: 8px;
          font-weight: 800;
        }
        .uv-mp-map-legend span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #9c7847;
        }
        .uv-mp-nearby-detail {
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: clamp(18px, 2.5vw, 28px);
          border-left: 1px solid rgba(166, 139, 103, 0.17);
          background: linear-gradient(
            160deg,
            rgba(255, 255, 255, 0.88),
            rgba(250, 248, 242, 0.96)
          );
        }
        .uv-mp-nearby-detail-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          color: var(--mp-sand);
          font-size: 8.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
        }
        .uv-mp-nearby-detail-top strong {
          font-size: 11px;
          letter-spacing: 0;
        }
        .uv-mp-nearby-detail-top i {
          color: #9da2a0;
          font-style: normal;
          font-weight: 500;
        }
        .uv-mp-nearby-detail-icon {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          margin: 24px 0 16px;
          border: 1px solid #ddc69f;
          border-radius: 50%;
          color: #96713f;
          background: #f4ead8;
          font-size: 22px;
        }
        .uv-mp-nearby-detail h4 {
          margin: 0 0 10px;
          color: #51483d;
          font-family: Georgia, serif;
          font-size: clamp(20px, 2.2vw, 26px);
          font-weight: 400;
          line-height: 1.15;
        }
        .uv-mp-nearby-detail p {
          margin: 0;
          color: var(--mp-muted);
          font-size: 10.5px;
          line-height: 1.7;
        }
        .uv-mp-nearby-detail-actions {
          display: grid;
          gap: 12px;
          margin-top: auto;
          padding-top: 20px;
        }
        .uv-mp-nearby-detail-actions button {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border: 0;
          border-top: 1px solid rgba(166, 139, 103, 0.2);
          background: transparent;
          color: #766d61;
          font-size: 9.5px;
          font-weight: 800;
          cursor: pointer;
        }
        .uv-mp-nearby-detail-actions button span {
          color: var(--mp-sand);
          font-size: 15px;
        }
        .uv-mp-nearby-detail-actions a {
          display: block;
          padding: 11px 12px;
          border: 1px solid rgba(166, 139, 103, 0.4);
          border-radius: 99px;
          color: #6e593d;
          background: #f4ead8;
          text-align: center;
          text-decoration: none;
          font-size: 8.5px;
          font-weight: 800;
          transition:
            background 0.2s ease,
            color 0.2s ease;
        }
        .uv-mp-nearby-detail-actions a:hover {
          color: white;
          background: #a68b67;
        }
        .uv-mp-nearby-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          margin: 20px 0 12px;
        }
        .uv-mp-nearby-toolbar > div:first-child {
          display: grid;
          gap: 6px;
        }
        .uv-mp-nearby-toolbar strong {
          color: #51483d;
          font-family: Georgia, serif;
          font-size: 19px;
          font-weight: 400;
        }
        .uv-mp-nearby-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 6px;
        }
        .uv-mp-nearby-filters button {
          padding: 8px 12px;
          border: 1px solid rgba(166, 139, 103, 0.25);
          border-radius: 99px;
          color: #766d61;
          background: rgba(255, 255, 255, 0.65);
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 0.08em;
          cursor: pointer;
        }
        .uv-mp-nearby-filters button:hover,
        .uv-mp-nearby-filters button.is-active {
          border-color: #c6a16b;
          color: #6d512d;
          background: #f2e5ce;
        }
        .uv-mp-nearby-note {
          margin: 12px 0 0;
          color: var(--mp-muted);
          font-size: 9.5px;
          line-height: 1.6;
        }
        .uv-mp-location-note {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          margin-top: 20px;
          padding: 16px 18px;
          border: 1px solid rgba(166, 139, 103, 0.2);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.48);
        }
        .uv-mp-location-note > span {
          display: grid;
          flex: 0 0 32px;
          place-items: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          color: #87653b;
          background: #eee3d1;
          font-size: 20px;
        }
        .uv-mp-location-note strong {
          color: #51483d;
          font-size: 10.5px;
        }
        .uv-mp-location-note p {
          margin: 4px 0 0;
          color: var(--mp-muted);
          font-size: 9.5px;
          line-height: 1.6;
        }
        .uv-masterplan button:focus-visible,
        .uv-masterplan a:focus-visible {
          outline: 3px solid #a68b67;
          outline-offset: 3px;
        }
        @keyframes uvMpPulse {
          0% {
            transform: scale(0.55);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }
        @media (max-width: 760px) {
          .uv-mp-explorer {
            grid-template-columns: 1fr;
          }
          .uv-mp-detail {
            display: grid;
            grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1fr);
          }
          .uv-mp-detail-image,
          .uv-mp-detail-image img {
            height: 100%;
            min-height: 250px;
          }
          .uv-mp-connectivity {
            gap: 20px;
          }
          .uv-mp-connectivity-map-layout {
            grid-template-columns: minmax(0, 1.4fr) minmax(230px, 0.8fr);
          }
          .uv-mp-nearby-pin-label {
            max-width: 100px;
          }
        }
        @media (max-width: 650px) {
          .uv-masterplan {
            padding: 40px 16px;
          }
          .uv-mp-heading h2 {
            font-size: clamp(32px, 8.5vw, 48px);
          }
          .uv-mp-heading p {
            font-size: 11px;
          }
          .uv-mp-stats {
            margin-bottom: 30px;
          }
          .uv-mp-stats > div {
            padding: 12px 6px;
          }
          .uv-mp-stats strong {
            font-size: 22px;
          }
          .uv-mp-stats small {
            display: block;
            font-size: 10px;
          }
          .uv-mp-stats span {
            font-size: 6.5px;
            letter-spacing: 0.06em;
          }
          .uv-mp-map-heading {
            padding: 12px;
          }
          .uv-mp-map-heading strong {
            font-size: 15px;
          }
          .uv-mp-map {
            min-height: 300px;
            aspect-ratio: auto;
          }
          .uv-mp-pin {
            gap: 4px;
          }
          .uv-mp-pin-dot {
            flex-basis: 22px;
            width: 22px;
            height: 22px;
            font-size: 6.5px;
          }
          .uv-mp-pin-label {
            max-width: 95px;
            padding: 5px 6px;
            font-size: 6.5px;
            white-space: normal;
          }
          .uv-mp-map-caption {
            left: 8px;
            bottom: 8px;
            font-size: 6.5px;
          }
          .uv-mp-detail {
            display: flex;
          }
          .uv-mp-detail-image,
          .uv-mp-detail-image img {
            height: auto;
            min-height: 170px;
            max-height: 210px;
          }
          .uv-mp-detail-body {
            padding: 18px 16px;
          }
          .uv-mp-connectivity {
            grid-template-columns: 1fr;
            margin-top: 35px;
            padding: 18px 16px;
          }
          .uv-mp-roads {
            grid-template-columns: 1fr;
          }
          .uv-mp-road {
            padding: 12px 10px;
          }
          .uv-mp-nearby {
            margin-top: 35px;
          }
          .uv-mp-nearby-heading {
            align-items: flex-start;
            gap: 10px;
          }
          .uv-mp-nearby-heading h3 {
            font-size: 28px;
          }
          .uv-mp-nearby-heading p {
            font-size: 10.5px;
          }
          .uv-mp-nearby-count {
            gap: 6px;
            padding: 8px;
          }
          .uv-mp-nearby-count strong {
            font-size: 24px;
          }
          .uv-mp-nearby-count span {
            font-size: 6.5px;
          }
          .uv-mp-connectivity-map-layout {
            grid-template-columns: 1fr;
          }
          .uv-mp-connectivity-map {
            aspect-ratio: 1.25/1;
          }
          .uv-mp-nearby-detail {
            min-height: 260px;
            padding: 18px;
            border-top: 1px solid rgba(166, 139, 103, 0.17);
            border-left: 0;
          }
          .uv-mp-nearby-detail-icon {
            margin: 18px 0 12px;
          }
          .uv-mp-nearby-toolbar {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
          }
          .uv-mp-nearby-filters {
            justify-content: flex-start;
          }
          .uv-mp-nearby-filters button {
            padding: 7px 9px;
            font-size: 6.5px;
          }
          .uv-mp-nearby-pin {
            gap: 3px;
          }
          .uv-mp-nearby-pin-dot {
            flex-basis: 22px;
            width: 22px;
            height: 22px;
            font-size: 7.5px;
          }
          .uv-mp-nearby-pin-label {
            max-width: 72px;
            padding: 4px;
            font-size: 6.5px;
          }
          .uv-mp-nearby-home {
            left: 38%;
            top: 46%;
            padding: 5px;
            gap: 4px;
          }
          .uv-mp-nearby-home > span {
            width: 19px;
            height: 19px;
            font-size: 12px;
          }
          .uv-mp-nearby-home b {
            font-size: 6.5px;
          }
          .uv-mp-nearby-home small {
            font-size: 5.5px;
          }
          .uv-mp-location-note {
            padding: 12px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .uv-mp-pin-dot:after {
            animation: none;
          }
          .uv-masterplan * {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
        .uv-mp-tabs {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          width: fit-content;
          margin: 0 auto 26px;
          padding: 4px;
          border: 1px solid rgba(166, 139, 103, 0.22);
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.58);
          box-shadow: 0 8px 24px rgba(91, 73, 48, 0.04);
        }

        .uv-mp-tabs button {
          position: relative;
          padding: 9px 20px;
          border: 0;
          border-radius: 50px;
          color: #81776b;
          background: transparent;
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: 0.09em;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .uv-mp-tabs button:hover {
          color: #6e593d;
          background: #f4ead8;
        }

        .uv-mp-tabs button.is-active {
          color: #fff;
          background: #a68b67;
          box-shadow: 0 3px 12px rgba(91, 73, 48, 0.14);
        }

        @media (max-width: 650px) {
          .uv-mp-tabs {
            margin-bottom: 20px;
          }

          .uv-mp-tabs button {
            padding: 8px 16px;
            font-size: 8.5px;
          }
        }
      `}</style>
    </section>
  );
}
