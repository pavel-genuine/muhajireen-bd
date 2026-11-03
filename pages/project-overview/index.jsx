"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../public/images/logo.png";
import Footer from "../../components/footer/Footer";
import WAIcon from "../../components/WAIcon/WAIcon";

const projectFacts = [
  { value: "5", unit: "Acres", note: "Total project land" },
  { value: "10", unit: "Infrastructures", note: "All Modern Facilities" },
  { value: "80 ft", unit: "Road", note: "Front-side road width" },
];

const integratedDevelopments = [
  {
    number: "01",
    category: "COMMERCIAL & RETAIL",
    title: "Spaces Where Life Connects",
    description:
      "A destination for everyday shopping, business opportunities and vibrant commercial activity.",
    features: ["Shopping Mall", "Commercial Spaces"],
    image: "/images/slider/hero-slide/img-2.1-main.png",
    imageAlt: "Commercial spaces within the integrated development",
    href: "commercial-retail",
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
    href: "residential-living",
    size: "",
  },
  {
    number: "04",
    category: "HEALTHCARE",
    title: "World-class healthcare",
    description:
      "A healthcare ecosystem bringing medical services and healthcare education together in one vision.",
    features: [
      "Multi-Specialized General Hospital",
      "Dental Hospital",
      "Nursing Institute",
    ],
    image: "/images/slider/hero-slide/img-4.1-main.png",
    imageAlt: "Hospital infrastructure",
    href: "healthcare",
    size: "",
  },
  {
    number: "05",
    category: "HEALTHCARE",
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
    href: "dental-hospital",
    size: "",
  },
  {
    number: "06",
    category: "MEDICAL EDUCATION",
    title: "New Dimension Of Future",
    description:
      "A healthcare ecosystem bringing medical services and healthcare education together in one vision.",
    features: [
      "Multi-Specialized General Hospital",
      "Dental Hospital",
      "Nursing Institute",
    ],
    image: "/images/slider/hero-slide/img-6.1-main1.png",
    imageAlt: "Hospital infrastructure",
    href: "nursing-institute",
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
    href: "education",
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
    href: "faith-community",
    size: "development-card--wide",
  },
];

export const lifestyleFacilities = [
  {
    id: "residences",
    number: "01",
    title: "Premium Residences",
    category: "FAMILY LIVING",
    items:
      "Exclusive living spaces designed with modern architecture and luxury.",
    description:
      "Dedicated living spaces designed for comfort, relaxation, and a modern lifestyle.",
    image: "/images/slider/hero-slide/newfolder/img-9.jpg",
  },
  {
    id: "mall",
    number: "02",
    title: "Shopping Mall",
    category: "RECREATION",
    items: "Retail destinations and shopping experiences within the community.",
    description:
      "A vibrant destination for retail, shopping, and everyday lifestyle experiences.",
    image: "/images/slider/hero-slide/newfolder/img-11.jpg",
  },
  {
    id: "foodcourt",
    number: "03",
    title: "Food Court",
    category: "RECREATION",
    items: "A variety of dining options and culinary spots for residents.",
    description:
      "A diverse collection of dining spots and culinary experiences for everyone.",
    image: "/images/slider/hero-slide/newfolder/img-10.jpg",
  },
  {
    id: "commercialspaces",
    number: "04",
    title: "Commercial Spaces",
    category: "CORPORATE LIFE",
    items: "Business hubs and commercial zones planned for convenience.",
    description:
      "Modern corporate and business spaces planned to support professional activities.",
    image: "/images/slider/hero-slide/newfolder/img-12.jpg",
  },
  {
    id: "pool",
    number: "05",
    title: "Swimming Pools",
    category: "WELLNESS",
    items: "Lifestyle and swimming amenities listed in the project profile.",
    description:
      "Dedicated swimming facilities for relaxation, recreation and a healthier lifestyle.",
    image: "/images/slider/hero-slide/newfolder/img-8.jpeg",
  },
  {
    id: "gym",
    number: "06",
    title: "Fitness & Gym",
    category: "WELLNESS",
    items: "Fitness facilities and well-equipped gyms for residents.",
    description:
      "Planned fitness facilities with dedicated spaces for men and women.",
    image: "/images/slider/hero-slide/newfolder/img(2).jpeg",
  },
  {
    id: "park",
    number: "07",
    title: "Central Park",
    category: "NATURE",
    items: "Landscaped green areas, gardens, and open outdoor spaces.",
    description:
      "Landscaped green areas planned to bring nature and open space into everyday living.",
    image: "/images/slider/hero-slide/img-9.1-main.png",
  },
  {
    id: "kids",
    number: "08",
    title: "Kids' Play Zone",
    category: "FAMILY LIVING",
    items: "A dedicated play area and safe outdoor zone for children.",
    description:
      "A dedicated play area envisioned for children's outdoor activities and family time.",
    image: "/images/slider/hero-slide/newfolder/img(5).jpeg",
  },
  {
    id: "green",
    number: "09",
    title: "Green Spaces",
    category: "NATURE",
    items: "Landscaped green areas, gardens, and open outdoor spaces.",
    description:
      "Landscaped green areas planned to bring nature and open space into everyday living.",
    image: "/images/slider/hero-slide/newfolder/img(7).jpeg",
  },
  {
    id: "walkway",
    number: "10",
    title: "Walking & Jogging",
    category: "ACTIVE LIVING",
    items: "A planned pedestrian-friendly walking and jogging route.",
    description:
      "A dedicated walkway envisioned for daily walks, light exercise and outdoor relaxation.",
    image: "/images/slider/hero-slide/newfolder/img(3).jpeg",
  },
  {
    id: "bicycle",
    number: "11",
    title: "Bicycle Zone",
    category: "ACTIVE LIVING",
    items: "A designated cycling track and zone for active mobility.",
    description:
      "A planned bicycle-friendly zone encouraging active movement within the community.",
    image: "/images/slider/hero-slide/newfolder/img(1).jpeg",
  },
  {
    id: "medical",
    number: "12",
    title: "Emergency Medical Support",
    category: "CARE",
    items: "Emergency medical services and healthcare support systems.",
    description:
      "Emergency medical services are included in the project's stated lifestyle facilities.",
    image: "/images/slider/hero-slide/img-4.1-main.png",
  },
  {
    id: "school",
    number: "13",
    title: "School",
    category: "EDUCATION",
    items: "An educational institution planned for quality learning.",
    description:
      "A planned spiritual and educational destination serving the community.",
    image: "/images/slider/hero-slide/img-8-main.png",
  },
  {
    id: "community",
    number: "14",
    title: "Mosque & Madrasha",
    category: "FAITH & COMMUNITY",
    items: "Spiritual and religious facilities for community gatherings.",
    description:
      "A planned spiritual and educational destination serving the community.",
    image: "/images/slider/hero-slide/img-7-main.png",
  },
];

const projectHotspots = [
  {
    id: "hospital",
    label: "MULTI-SPECIALIST HOSPITAL",
    short: "HOSPITAL",
    x: 30,
    y: 50,
    image: "/images/slider/hero-slide/img-4.1-main.png",
    description:
      "Planned multi-specialist healthcare facilities for the community.",
  },
  {
    id: "dental",
    label: "Dental Hospital",
    short: "DENTAL",
    x: 37,
    y: 38,
    image: "/images/slider/hero-slide/img-5.1-main.png",
    description:
      "A dedicated dental care facility within the development plan.",
  },
  {
    id: "nursing",
    label: "Nursing Institute",
    short: "NURSING INSTITUTE",
    x: 42,
    y: 32,
    image: "/images/slider/hero-slide/img-6.1-main1.png",
    description: "A planned institute for nursing education and training.",
  },
  {
    id: "school",
    label: "International School",
    short: "SCHOOL",
    x: 35,
    y: 20,
    image: "/images/slider/hero-slide/img-8-main.png",
    description: "An education destination planned for families.",
  },
  {
    id: "mosque",
    label: "Mosque & Madrasha",
    short: "MOSQUE ",
    x: 55,
    y: 20,
    image: "/images/slider/hero-slide/img-7-main.png",
    description: "Spaces planned for worship and religious learning.",
  },
  {
    id: "residential",
    label: "Residential Area",
    short: "RESIDENCES",
    x: 70,
    y: 17,
    image: "/images/slider/hero-slide/img-3.1-main.png",
    description:
      "Residential spaces designed around everyday community living.",
  },
  {
    id: "park",
    label: "Central Park",
    short: "PARK",
    x: 63,
    y: 40,
    image: "/images/slider/hero-slide/img-9.1-main.png",
    description: "Planned green space and outdoor recreation area.",
  },
  {
    id: "commercial",
    label: "Commercial Spaces",
    short: "OFFICES",
    x: 70,
    y: 59,
    image: "/images/slider/hero-slide/img-2.1-main.png",
    description: "Commercial spaces for shopping, dining and daily services.",
  },
  {
    id: "mall",
    label: "Shopping Mall",
    short: "MALL",
    x: 70,
    y: 70,
    image: "/images/slider/hero-slide/img-2.1-main.png",
    description: "A planned retail destination within the wider project.",
  },
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

const categories = [
  "ALL",
  "RECREATION",
  "WELLNESS",
  "FAMILY LIVING",
  "CORPORATE LIFE",
  "NATURE",
  "ACTIVE LIVING",
  "FAITH & COMMUNITY",
  "EDUCATION",
  "CARE",
];

export default function ProjectOverviewPage() {
  const [activeHotspotId, setActiveHotspotId] = useState("hospital");
  const [hotspotDetailsOpen, setHotspotDetailsOpen] = useState(true);

  // Connectivity interactive map states
  const [nearbyFilter, setNearbyFilter] = useState("ALL");
  const [nearbyActiveId, setNearbyActiveId] = useState("metro");
  const [activeFacilityId, setActiveFacilityId] = useState("pool");
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredFacilities = useMemo(
    () =>
      activeCategory === "ALL"
        ? lifestyleFacilities
        : lifestyleFacilities.filter(
            (item) => item.category === activeCategory,
          ),
    [activeCategory],
  );

  const selectCategory = (category) => {
    setActiveCategory(category);

    const nextItems =
      category === "ALL"
        ? lifestyleFacilities
        : lifestyleFacilities.filter((item) => item.category === category);

    setActiveFacilityId(nextItems[0]?.id || "");
  };

  useEffect(() => {
    if (!filteredFacilities.some((item) => item.id === activeFacilityId)) {
      setActiveFacilityId(filteredFacilities[0]?.id || "");
    }
  }, [activeCategory, activeFacilityId, filteredFacilities]);

  const activeHotspot =
    projectHotspots.find((item) => item.id === activeHotspotId) ||
    projectHotspots[0];

  const activeNearby = useMemo(
    () =>
      nearbyDestinations.find((place) => place.id === nearbyActiveId) ||
      nearbyDestinations[0],
    [nearbyActiveId],
  );

  const visibleDestinations = nearbyDestinations.filter(
    (place) => nearbyFilter === "ALL" || place.category === nearbyFilter,
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

  useEffect(() => {
    if (!hotspotDetailsOpen) return undefined;
    const timer = window.setInterval(() => {
      setActiveHotspotId((current) => {
        const index = projectHotspots.findIndex((item) => item.id === current);
        return projectHotspots[(index + 1) % projectHotspots.length].id;
      });
    }, 3000);
    return () => window.clearInterval(timer);
  }, [hotspotDetailsOpen]);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <main className="uv-about-page">
      <Navbar Logo={Logo} />

      {/* Decorative Orbs Matching Contact Theme */}
      <div className="uv-contact-orb uv-contact-orb-one" />
      <div className="uv-contact-orb uv-contact-orb-two" />
      <div className="uv-contact-orb uv-contact-orb-three" />

      {/* MASTERPLAN FULL-WIDTH HERO SLIDE STYLE */}
      <section
        className="uttara-hero"
        aria-label="MUHAJIREEN masterplan and infrastructure hotspots"
      >
        <div className="uttara-slide">
          <div
            className="uttara-slide-image"
            style={{
              backgroundImage: `url("/images/slider/hero-slide/img-1-.png")`,
            }}
          />
          <div className="uttara-slide-overlay" />

          {/* Masterplan Hotspots Overlay */}
          <div
            className="uttara-project-hotspots"
            aria-label="Project infrastructure hotspots"
          >
            {projectHotspots.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`uttara-hotspot ${
                  activeHotspotId === item.id ? "is-active" : ""
                }`}
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
                <span className="uttara-hotspot-label">{item.short}</span>
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
                  zIndex: 1000,
                  "--hotspot-card-shift-x":
                    activeHotspot.x > 55 ? "calc(-100% - 22px)" : "22px",
                  "--hotspot-card-shift-y":
                    activeHotspot.y > 58 ? "calc(-100% - 22px)" : "22px",
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
                  <h2 style={{ letterSpacing: ".1em" }}>
                    {activeHotspot.label}
                  </h2>
                  <p>{activeHotspot.description}</p>
                  <div className="uttara-hotspot-card-controls">
                    <span>
                      {String(
                        projectHotspots.findIndex(
                          (item) => item.id === activeHotspot.id,
                        ) + 1,
                      ).padStart(2, "0")}{" "}
                      <i>/ {String(projectHotspots.length).padStart(2, "0")}</i>
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
                      Next Infrastructure <b>→</b>
                    </button>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      <section
        style={{
          marginInline: "20px",
          marginBottom: "50px",
        }}
        className="uv-overview-masterplan"
        aria-label="MUHAJIREEN masterplan and facilities"
      >
        <p
          style={{
            textAlign: "center",
            marginBottom: "50px",
            marginTop: width < 768 ? "150px" : "20px",
            fontSize: "14px",
          }}
          className="uv-project-note"
        >
          Select a marker to explore planned facilities. Details rotate
          automatically.
        </p>
        <div className="uv-mp-intro">
          <span className="uv-overview-kicker">
            <i /> PROJECT MASTERPLAN
          </span>
          <h1>
            Explore the plan.
            <br />
            <em>
              <span style={{ color: "var(--uv-gold-dark)" }}>
                Discover MUHAJIREEN.
              </span>
            </em>
          </h1>
        </div>
      </section>

      {/* FACTS FLOATING BAR */}
      <section
        style={{ zIndex: 5, position: "relative" }}
        className="uv-facts"
        id="project-details"
        aria-label="Project facts"
      >
        {projectFacts.map((fact) => (
          <div className="uv-fact" key={fact.note}>
            <strong>
              {fact.value} <em>{fact.unit}</em>
            </strong>
            <span>{fact.note}</span>
          </div>
        ))}
        <div className="uv-fact uv-fact-last">
          <strong>30–50 ft</strong>
          <span>Side and back road widths listed in the profile</span>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="uv-image-story">
        <div className="uv-image-story-photo">
          <Image
            src="/images/slider/hero-slide/img-9.1-main.png"
            alt="Conceptual view of landscaped community living"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
        <div className="uv-image-story-copy">
          <div className="uv-eyebrow">
            <span className="uv-eyebrow-line" />
            <span>PLANNED AROUND DAILY LIFE</span>
          </div>
          <h2>
            Living, Leisure
            <br />
            and <em>Community.</em>
          </h2>
          <p>
            The profile outlines lifestyle amenities, green spaces and community
            destinations alongside residential living, with commercial and
            institutional facilities forming part of the wider project plan.
          </p>
          <div className="uv-mini-points">
            <span>
              01 <b>Residential</b>
            </span>
            <span>
              02 <b>Lifestyle</b>
            </span>
            <span>
              03 <b>Community</b>
            </span>
          </div>
        </div>
      </section>

      {/* PROJECT HIGHLIGHTS */}
      <section className="uv-project uv-section">
        <div className="uv-project-head">
          <div>
            <div className="uv-eyebrow">
              <span className="uv-eyebrow-line" />
              <span>02 / PROJECT DETAILS</span>
            </div>
            <h2>
              MUHAJIREEN <span>Master Plan</span>
            </h2>
            <p>
              A residential and commercial destination at Ashulia Model Town,
              beside Uttara Sector 16.
            </p>
          </div>
          <div className="uv-land-card">
            <small>TOTAL LAND</small>
            <strong>
              5 <em>Acres</em>
            </strong>
            <span>Equivalent to 303 Kathas</span>
            <i>
              Road access noted: 80 ft front · 50 ft right · 30 ft left and back
            </i>
          </div>
        </div>
        <div className="uv-project-highlights">
          <article>
            <small>PROJECT TYPE</small>
            <strong>Residential & Commercial</strong>
            <p>
              A mixed-use destination planned around homes, community facilities
              and commercial spaces.
            </p>
          </article>
          <article>
            <small>LOCATION</small>
            <strong>Ashulia Model Town</strong>
            <p>
              Beside Uttara Sector 16, as described in the supplied project
              profile.
            </p>
          </article>
          <article>
            <small>ACCESS & ROADS</small>
            <strong>Planned Road Network</strong>
            <p>
              Road widths noted in the profile: 80 ft front, 50 ft right, and 30
              ft left and back.
            </p>
          </article>
        </div>
        <div className="uv-project-note">
          ✧ Project details are based on the supplied profile; confirm current
          specifications with the project team.
        </div>
      </section>

      {/* INTEGRATED DEVELOPMENTS */}
      <section className="uv-facilities uv-section uv-integrated-section">
        <div className="uv-eyebrow">
          <span className="uv-eyebrow-line" />
          <span>03 / INTEGRATED DEVELOPMENT</span>
        </div>
        <div className="uv-facilities-head">
          <h2>
            Everything Connected.
            <br />
            <em>A Complete Community.</em>
          </h2>
          <p>
            Planned healthcare, education, faith, retail and commercial
            destinations form part of the wider MUHAJIREEN development.
          </p>
        </div>
        <div className="uv-facility-grid uv-integrated-grid">
          {integratedDevelopments.map((item, index) => (
            <article
              className={`id-card ${item.size}`}
              key={item.number + item.title}
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
                <Link
                  href={`/infrastructure-detail/${item.href}`}
                  className="id-card-link"
                >
                  <span className="id-image-mark" aria-hidden="true">
                    ↗
                  </span>
                </Link>
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

                <Link
                  href={`/infrastructure-detail/${item.href}`}
                  className="id-card-link"
                >
                  <span>EXPLORE DEVELOPMENT</span>
                  <span className="id-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LIFESTYLE FACILITIES */}
      <section className="uv-facilities uv-section uv-lifestyle-section">
        <div className="uv-eyebrow">
          <span className="uv-eyebrow-line" />
          <span>04 / LIFESTYLE FACILITIES</span>
        </div>
        <div className="uv-facilities-head">
          <h2>
            Room for Living.
            <br />
            <em>Space to Unwind.</em>
          </h2>
          <p>
            Explore the lifestyle and outdoor amenities listed in the project
            profile, planned to support recreation, wellbeing and community
            life.
          </p>
        </div>

        <div style={{ marginBottom: "30px" }} className="uv-life-filter-row">
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
        <div className="uv-facility-grid uv-lifestyle-grid">
          {filteredFacilities.map((item) => (
            <article
              className="uv-facility-card"
              key={item.number + item.title}
            >
              <div className="uv-facility-card-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 800px) 50vw, 33vw"
                />
              </div>
              <div className="uv-facility-card-copy">
                <span className="uv-facility-number">{item.number}</span>
                <small>{item.category}</small>
                <h3>{item.title}</h3>
                <p>{item.items}</p>
                <div className="uv-card-rule" />

                <Link
                  href={`/lifestyle-facilities/${item.id}`}
                  className="id-card-link"
                >
                  <span>EXPLORE </span>
                  <span className="id-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LOCATION & CONNECTIVITY */}
      <section
        className="uv-connect-masterplan-style"
        style={{ padding: "60px 24px", maxWidth: "1320px", margin: "0 auto" }}
      >
        <div
          className="uv-mp-nearby"
          aria-labelledby="uv-mp-nearby-title"
          style={{ marginTop: 0 }}
        >
          <div className="uv-mp-nearby-heading">
            <div>
              <div className="uv-eyebrow">
                <span className="uv-eyebrow-line" />
                <span>LOCATION & CONNECTIVITY</span>
              </div>
              <h3
                id="uv-mp-nearby-title"
                style={{
                  margin: "10px 0 10px",
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 500,
                }}
              >
                Beside Uttara. <em>Connected to More.</em>
              </h3>
              <p
                style={{
                  maxWidth: "650px",
                  margin: 0,
                  color: "var(--uv-muted, #847873)",
                  fontSize: "11.5px",
                  lineHeight: 1.7,
                }}
              >
                Explore key destinations around the wider Uttara–Ashulia area.
                Select a hotspot to view details or open its location in Google
                Maps.
              </p>
            </div>
            <div
              className="uv-mp-nearby-count"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                border: "1px solid rgba(166, 139, 103, 0.22)",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.58)",
              }}
            >
              <strong
                style={{
                  color: "#a68b67",
                  fontFamily: "Georgia, serif",
                  fontSize: "30px",
                  fontWeight: 400,
                }}
              >
                {String(nearbyDestinations.length).padStart(2, "0")}
              </strong>
              <span
                style={{
                  maxWidth: "65px",
                  color: "var(--uv-muted, #847873)",
                  fontSize: "7.5px",
                  fontWeight: 800,
                  letterSpacing: "0.13em",
                  lineHeight: 1.4,
                }}
              >
                DESTINATIONS
              </span>
            </div>
          </div>

          <div
            className="uv-mp-connectivity-map-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.7fr) minmax(260px, 0.7fr)",
              overflow: "hidden",
              border: "1px solid rgba(166, 139, 103, 0.2)",
              borderRadius: "20px",
              background: "rgba(255, 255, 255, 0.65)",
              boxShadow: "0 16px 48px rgba(91, 73, 48, 0.07)",
            }}
          >
            <div
              className="uv-mp-connectivity-map uv-mp-connectivity-map-real"
              aria-label="Real map showing MUHAJIREEN and nearby destinations"
              style={{
                position: "relative",
                isolation: "isolate",
                minHeight: 0,
                aspectRatio: "1787/837",
                overflow: "hidden",
                background: "#e9e3d7",
              }}
            >
              <img
                className="uv-mp-connectivity-map-image"
                src="/images/slider/hero-slide/localmap.png"
                alt="Map of MUHAJIREEN and nearby destinations around Uttara and Ashulia"
                loading="lazy"
                decoding="async"
                draggable="false"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                }}
              />
              <div
                className="uv-mp-map-image-tint"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(248, 245, 237, 0.08)",
                  pointerEvents: "none",
                }}
              />

              <div
                className="uv-mp-nearby-home uv-mp-nearby-home-real"
                style={{
                  position: "absolute",
                  left: "37.94%",
                  top: "46.24%",
                  zIndex: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 8px",
                  border: "1px solid #d7bd91",
                  background: "rgba(255, 253, 248, 0.96)",
                  boxShadow: "0 4px 15px rgba(59, 51, 36, 0.16)",
                  transform: "translate(-20%, -115%)",
                }}
              >
                <span
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    color: "white",
                    background: "#a8844f",
                    fontSize: "14px",
                  }}
                >
                  ⌂
                </span>
                <div style={{ display: "grid", gap: "2px" }}>
                  <b
                    style={{
                      fontSize: "7.5px",
                      letterSpacing: "0.1em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    MUHAJIREEN
                  </b>
                  <small
                    style={{
                      color: "#9a7545",
                      fontSize: "6.5px",
                      letterSpacing: "0.13em",
                    }}
                  >
                    PROJECT LOCATION
                  </small>
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
                    className={`uttara-hotspot ${nearbyActiveId === place.id ? "is-active" : ""}`}
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      position: "absolute",
                      zIndex: 5,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: 0,
                      border: 0,
                      background: "transparent",
                      cursor: "pointer",
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => setNearbyActiveId(place.id)}
                    aria-label={`Show ${place.name}`}
                    aria-pressed={nearbyActiveId === place.id}
                  >
                    <span className="uttara-hotspot-pulse" />
                    <span className="uttara-hotspot-label">
                      {String(index + 1).padStart(2, "0")}. {place.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <aside
              className="uv-mp-nearby-detail"
              aria-live="polite"
              style={{
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
                padding: "clamp(18px, 2.5vw, 28px)",
                borderLeft: "1px solid rgba(166, 139, 103, 0.17)",
                background:
                  "linear-gradient(160deg, rgba(255, 255, 255, 0.88), rgba(250, 248, 242, 0.96))",
              }}
            >
              <div
                className="uv-mp-nearby-detail-top"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  color: "#a68b67",
                  fontSize: "8.5px",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                }}
              >
                <span>{activeNearby.category}</span>
                <strong style={{ fontSize: "11px", letterSpacing: 0 }}>
                  {String(
                    nearbyDestinations.findIndex(
                      (place) => place.id === activeNearby.id,
                    ) + 1,
                  ).padStart(2, "0")}{" "}
                  <i
                    style={{
                      color: "#9da2a0",
                      fontStyle: "normal",
                      fontWeight: 500,
                    }}
                  >
                    / {String(nearbyDestinations.length).padStart(2, "0")}
                  </i>
                </strong>
              </div>
              <div
                className="uv-mp-nearby-detail-icon"
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: "46px",
                  height: "46px",
                  margin: "24px 0 16px",
                  border: "1px solid #ddc69f",
                  borderRadius: "50%",
                  color: "#96713f",
                  background: "#f4ead8",
                  fontSize: "22px",
                }}
              >
                {activeNearby.icon}
              </div>
              <h4
                style={{
                  margin: "0 0 10px",
                  color: "#443d34",
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(20px, 2.2vw, 26px)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                }}
              >
                {activeNearby.name}
              </h4>
              <p
                style={{
                  margin: 0,
                  color: "#847873",
                  fontSize: "10.5px",
                  lineHeight: 1.7,
                }}
              >
                {activeNearby.description}
              </p>
              <div
                className="uv-mp-nearby-detail-actions"
                style={{
                  display: "grid",
                  gap: "12px",
                  marginTop: "auto",
                  paddingTop: "20px",
                }}
              >
                <button
                  type="button"
                  onClick={moveNearby}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0",
                    border: 0,
                    borderTop: "1px solid rgba(166, 139, 103, 0.2)",
                    background: "transparent",
                    color: "#766d61",
                    fontSize: "9.5px",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Next destination{" "}
                  <span style={{ color: "#a68b67", fontSize: "15px" }}>→</span>
                </button>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeNearby.query)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "block",
                    padding: "11px 12px",
                    border: "1px solid rgba(166, 139, 103, 0.4)",
                    borderRadius: "99px",
                    color: "#6e593d",
                    background: "#f4ead8",
                    textAlign: "center",
                    textDecoration: "none",
                    fontSize: "8.5px",
                    fontWeight: 800,
                  }}
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </aside>
          </div>

          <div
            className="uv-mp-nearby-toolbar"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "20px",
              margin: "20px 0 12px",
            }}
          >
            <div>
              <span
                className="uv-mp-eyebrow"
                style={{
                  color: "#a68b67",
                  fontSize: "8.5px",
                  fontWeight: 800,
                  letterSpacing: "0.17em",
                }}
              >
                FILTER DESTINATIONS
              </span>
              <strong
                style={{
                  color: "#443d34",
                  fontFamily: "Georgia, serif",
                  fontSize: "19px",
                  fontWeight: 400,
                  display: "block",
                  marginTop: "4px",
                }}
              >
                Choose a category
              </strong>
            </div>
            <div
              className="uv-mp-nearby-filters"
              role="group"
              aria-label="Filter nearby destinations"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-end",
                gap: "6px",
              }}
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
                  style={{
                    padding: "8px 12px",
                    border: "1px solid rgba(166, 139, 103, 0.25)",
                    borderRadius: "99px",
                    color: nearbyFilter === filter ? "#6d512d" : "#766d61",
                    background:
                      nearbyFilter === filter
                        ? "#f2e5ce"
                        : "rgba(255, 255, 255, 0.65)",
                    fontSize: "7.5px",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    cursor: "pointer",
                  }}
                >
                  {filter === "CONNECTIVITY" ? "ROADS" : filter}
                </button>
              ))}
            </div>
          </div>
          <p
            style={{
              margin: "12px 0 0",
              color: "#847873",
              fontSize: "9.5px",
              lineHeight: 1.6,
            }}
          >
            Pin positions are placed visually from the map image you supplied
            and are approximate, not surveyed coordinates. The bridge shown is a
            proposed concept only—not a confirmed or completed project. Verify
            destination locations, bridge feasibility and approvals before
            publication.
          </p>
        </div>
      </section>

      {/* INVESTMENT OVERVIEW */}
      <section className="uv-investment uv-section">
        <div className="uv-investment-head">
          <div>
            <div className="uv-eyebrow">
              <span className="uv-eyebrow-line" />
              <span>INVESTMENT OVERVIEW</span>
            </div>
            <h2>
              More Ways to Be Part
              <br />
              <em>of the Vision.</em>
            </h2>
          </div>
          <p>
            The MUHAJIREEN project profile outlines residential land-share
            options alongside commercial and institutional participation.
            Explore the available structures with our team before making a
            decision.
          </p>
        </div>

        <div className="uv-investment-grid">
          <article className="uv-investment-card">
            <span className="uv-investment-number">01</span>
            <div className="uv-investment-icon">⌂</div>
            <small>RESIDENTIAL</small>
            <h3>Residential Land Shares</h3>
            <p>
              The profile presents 2-flat and 6-flat land-share options, with
              each flat described as approximately 1,300 sq. ft.
            </p>
            <span className="uv-investment-note">
              Details subject to official project documents
            </span>
          </article>
          <article className="uv-investment-card uv-investment-card-featured">
            <span className="uv-investment-number">02</span>
            <div className="uv-investment-icon">◇</div>
            <small>COMMERCIAL & INSTITUTIONAL</small>
            <h3>Commercial Participation</h3>
            <p>
              Land-share opportunities are described for the medical college,
              general hospital, nursing institute, shopping mall, commercial
              spaces and school.
            </p>
            <span className="uv-investment-note">
              Availability and terms must be confirmed
            </span>
          </article>
          <article className="uv-investment-card">
            <span className="uv-investment-number">03</span>
            <div className="uv-investment-icon">✳</div>
            <small>MEMBERSHIP & PROFIT MODEL</small>
            <h3>Membership and Profit Model</h3>
            <p>
              The profile also describes lifetime membership linked to
              commercial spaces and a proposed monthly-profit model. Request the
              official terms and supporting documents.
            </p>
            <span className="uv-investment-note">
              Returns are not represented as guaranteed
            </span>
          </article>
        </div>

        <div className="uv-investment-disclaimer">
          <span>IMPORTANT INFORMATION</span>
          <p>
            This section summarizes options described in the project profile; it
            is not a guarantee of profit or investment performance. Verify
            ownership structure, membership benefits, eligibility, availability,
            payment terms and any distributions against current official
            documents and agreements before committing funds.
          </p>
          <Link href="/contact" className="uv-outline-button">
            <span>Discuss Investment Options</span>
            <span className="uv-button-icon">↗</span>
          </Link>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="uv-cta">
        <div className="uv-eyebrow" style={{ justifyContent: "center" }}>
          <span className="uv-eyebrow-line" />
          <span>LEARN MORE</span>
          <span className="uv-eyebrow-line" />
        </div>
        <h2>
          Explore
          <br />
          <em>MUHAJIREEN.</em>
        </h2>
        <p>
          Contact the MUHAJIREEN team to learn more about the project, listed
          facilities, location and site visits.
        </p>
        <Link href="/contact" className="uv-button">
          <span>CONTACT OUR TEAM</span>
          <span className="uv-button-icon">↗</span>
        </Link>
      </section>

      <Footer />
      <WAIcon />

      <style jsx global>{`
        .uv-about-page {
          --uv-gold: #c9a46a;
          --uv-gold-dark: #9c7941;
          --uv-beige: #a58b68;
          --uv-ink: #443d34;
          --uv-muted: #847873;
          --uv-cream: #f7f1e8;
          --uv-line: rgba(201, 164, 106, 0.22);

          position: relative;
          isolation: isolate;
          overflow: hidden;

          background:
            radial-gradient(
              ellipse at 85% 12%,
              rgba(201, 164, 106, 0.17),
              transparent 34%
            ),
            radial-gradient(
              ellipse at 8% 78%,
              rgba(165, 139, 104, 0.08),
              transparent 35%
            ),
            linear-gradient(135deg, #fffdf9, #f8f4ee 52%, #ffffff);
          color: var(--uv-ink);
        }

        .uv-about-page * {
          box-sizing: border-box;
        }

        .uv-about-page img {
          object-fit: cover;
        }

        /* BACKGROUND ORBS */
        .uv-contact-orb {
          position: absolute;
          z-index: -1;
          pointer-events: none;
          border: 1px solid rgba(201, 164, 106, 0.2);
          border-radius: 50%;
          box-shadow: inset 0 0 55px rgba(255, 255, 255, 0.4);
        }
        .uv-life-filter-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 14px;
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

        .uv-contact-orb-one {
          top: 5%;
          right: -180px;
          width: 400px;
          height: 400px;
        }

        .uv-contact-orb-two {
          bottom: 12%;
          left: -170px;
          width: 350px;
          height: 350px;
        }

        .uv-contact-orb-three {
          top: 48%;
          right: 42%;
          width: 110px;
          height: 110px;
          border-color: rgba(201, 164, 106, 0.12);
        }

        .uv-mp-intro {
          max-width: 900px;
          margin: 0 auto 36px;
        }
        .uv-mp-intro h1 {
          margin: 20px 0 14px;
          font-size: clamp(42px, 6vw, 78px);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 400;
        }
        .uv-mp-intro h1 em {
          color: #e6c28a;
          font-family: Georgia, serif;
          font-weight: 400;
        }
        .uv-mp-intro p {
          color: rgba(255, 250, 241, 0.72);
          font-size: 13px;
          line-height: 1.8;
        }

        .uv-overview-kicker {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 10px;
          letter-spacing: 0.22em;
          font-weight: 750;
          color: #9c7941;
        }
        .uv-overview-kicker i {
          width: 34px;
          height: 1px;
          background: #d9b77e;
          display: block;
        }

        .uv-section {
          max-width: 1440px;
          margin: 0 auto;
          padding: clamp(60px, 7vw, 90px) 24px;
        }

        .uv-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          color: var(--uv-gold-dark);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.2em;
        }

        .uv-eyebrow-line {
          width: 30px;
          height: 1px;
          background: var(--uv-gold);
          flex-shrink: 0;
        }

        .uv-about-page h1,
        .uv-about-page h2 {
          color: #443d34;
          font-family: inherit;
        }

        .uv-about-page em {
          font-family: Georgia, "Times New Roman", serif;
          color: var(--uv-gold-dark);
          font-style: italic;
          font-weight: 400;
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

        /* BUTTONS */
        .uv-button,
        .uv-outline-button {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          min-height: 46px;
          margin-top: 20px;
          padding: 6px 6px 6px 18px;
          border-radius: 99px;
          text-decoration: none !important;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          transition: all 0.3s ease;
        }

        .uv-button {
          color: #ffffff !important;
          background: linear-gradient(120deg, #a58b68, #846a48);
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow: 0 8px 22px rgba(132, 106, 72, 0.18);
        }

        .uv-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(132, 106, 72, 0.25);
        }

        .uv-button-icon {
          display: grid;
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 50%;
          color: #846a48;
          background: #ffffff;
          font-size: 14px;
        }

        .uv-outline-button {
          border: 1px solid rgba(165, 139, 104, 0.35);
          background: rgba(255, 255, 255, 0.55);
          color: var(--uv-gold-dark) !important;
          backdrop-filter: blur(12px);
        }

        .uv-outline-button:hover {
          background: rgba(255, 255, 255, 0.88);
          border-color: var(--uv-gold-dark);
        }

        .uv-outline-button .uv-button-icon {
          background: rgba(201, 164, 106, 0.15);
          color: var(--uv-gold-dark);
        }

        /* MATCHING HERO MASTERPLAN STYLES (Background changed to #423a30 only for hero) */
        .uttara-hero {
          position: relative;
          display: block;
          isolation: isolate;
          width: 100%;
          height: auto !important;
          min-height: 0 !important;
          max-height: none !important;
          aspect-ratio: 1792 / 878;
          margin: 0;
          overflow: visible;
          background: #423a30;
          color: #ffffff;
          box-sizing: border-box;
        }

        .uttara-slide {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: visible;
          background: #423a30;
        }

        .uttara-slide-image {
          position: absolute;
          inset: 0 !important;
          width: 100% !important;
          height: 100% !important;
          background-size: 100% 100% !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          z-index: 0;
        }

        .uttara-slide-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(
            5deg,
            rgba(4, 13, 22, 0.17) 0%,
            rgba(4, 13, 22, 0.09) 100%
          );
        }

        .uttara-project-hotspots {
          position: absolute;
          z-index: 60;
          inset: 0;
          pointer-events: none;
        }

        .uttara-hotspot {
          position: absolute;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          max-width: 200px;
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
          flex: 0 0 12px;
          width: 12px;
          height: 12px;
          border: 2px solid #fff;
          border-radius: 50%;
          background: #e6c28a;
          box-shadow:
            0 0 0 4px rgba(255, 255, 255, 0.22),
            0 2px 10px rgba(0, 0, 0, 0.35);
          animation: uttaraHotspotPulse 2.2s ease-out infinite;
        }

        .uttara-hotspot-label {
          position: relative;
          overflow: hidden;
          padding: 8px 12px;
          border: 1px solid rgba(255, 255, 255, 0.24);
          border-radius: 999px;
          background: rgba(13, 29, 39, 0.75);
          color: rgba(255, 255, 255, 0.96);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.16),
            0 4px 16px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(18px) saturate(150%);
          font-size: 9.5px;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: 0.02em;
          white-space: nowrap;
          transition: all 0.35s ease;
        }

        .uttara-hotspot:hover .uttara-hotspot-label,
        .uttara-hotspot.is-active .uttara-hotspot-label {
          border-color: rgba(230, 194, 138, 0.85);
          background: rgba(230, 194, 138, 0.9);
          color: #14212a;
        }

        @keyframes uttaraHotspotPulse {
          0% {
            transform: scale(0.55);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }

        .uttara-hotspot-card {
          position: absolute;
          z-index: 9999;
          display: grid;
          grid-template-columns: 140px minmax(190px, 260px);
          width: min(420px, calc(100% - 24px));
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 16px;
          background: rgba(12, 25, 34, 0.95);
          color: #fff;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
          pointer-events: auto;
          backdrop-filter: blur(26px);
          animation: uttaraGlassIn 0.45s cubic-bezier(0.2, 0.75, 0.25, 1) both;
        }

        .uttara-hotspot-card-image {
          height: 100%;
          min-height: 170px;
          overflow: hidden;
          background: linear-gradient(135deg, #233d48, #9c886c);
        }

        .uttara-hotspot-card-image img {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 170px;
          object-fit: cover;
          object-position: center;
        }

        .uttara-hotspot-card-body {
          position: relative;
          padding: 16px 16px 14px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.06),
            rgba(255, 255, 255, 0.015)
          );
        }

        .uttara-hotspot-close {
          position: absolute;
          z-index: 10;
          top: 6px;
          right: 8px;
          width: 24px;
          height: 24px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          font-size: 16px;
          line-height: 1;
          cursor: pointer;
        }

        .uttara-hotspot-kicker {
          color: #e7bd7e;
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .uttara-hotspot-card h2 {
          margin: 8px 12px 6px 0;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: 0.08em;
        }

        .uttara-hotspot-card p {
          margin: 0;
          color: rgba(255, 255, 255, 0.76);
          font-size: 11px;
          line-height: 1.5;
        }

        .uttara-hotspot-card-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 14px;
          font-size: 9.5px;
          font-weight: 800;
        }

        .uttara-hotspot-card-controls i {
          color: rgba(255, 255, 255, 0.45);
          font-style: normal;
        }

        .uttara-hotspot-card-controls button {
          padding: 5px 0;
          border: 0;
          background: transparent;
          color: #f1c27f;
          font: inherit;
          cursor: pointer;
        }

        .uttara-hotspot-card-controls b {
          margin-left: 4px;
          font-size: 14px;
        }

        @keyframes uttaraGlassIn {
          from {
            opacity: 0;
            filter: blur(8px);
          }
          to {
            opacity: 1;
            filter: blur(0);
          }
        }

        /* FACTS FLOATING BAR */
        .uv-facts {
          max-width: 1320px;
          margin: -25px auto 0;
          position: relative;
          z-index: 5;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(255, 255, 255, 0.92);
          border-radius: 18px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.88),
            rgba(255, 250, 241, 0.65)
          );
          backdrop-filter: blur(20px);
          box-shadow: 0 18px 50px rgba(107, 91, 72, 0.08);
          padding: 22px 28px;
        }
        .uv-fact {
          padding: 0 24px;
          border-right: 1px solid rgba(165, 139, 104, 0.18);
        }
        .uv-fact:first-child {
          padding-left: 8px;
        }
        .uv-fact-last,
        .uv-fact:last-child {
          border: 0;
        }
        .uv-fact strong {
          display: block;
          font:
            34px Georgia,
            "Times New Roman",
            serif;
          color: #7d5b32;
        }
        .uv-fact strong em {
          font:
            11px Arial,
            sans-serif;
          color: #8b7162;
          letter-spacing: 0;
        }
        .uv-fact span {
          display: block;
          margin-top: 4px;
          color: #776962;
          font-size: 10px;
          line-height: 1.5;
        }

        /* IMAGE STORY SECTION */
        .uv-image-story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-top: clamp(60px, 7vw, 90px);
          border-top: 1px solid rgba(201, 164, 106, 0.2);
          border-bottom: 1px solid rgba(201, 164, 106, 0.2);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.6),
            rgba(255, 250, 242, 0.4)
          );
        }
        .uv-image-story-photo {
          position: relative;
          min-height: 480px;
        }
        .uv-image-story-copy {
          align-self: center;
          padding: 60px clamp(30px, 6vw, 90px);
        }
        .uv-image-story h2 {
          font-size: clamp(32px, 3.8vw, 54px);
          font-weight: 400;
          line-height: 1.05;
          margin: 12px 0 16px;
        }
        .uv-image-story-copy > p {
          font-size: 12px;
          line-height: 1.8;
          color: #766c68;
          max-width: 480px;
        }
        .uv-mini-points {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 25px;
          padding-top: 18px;
          border-top: 1px solid rgba(165, 139, 104, 0.18);
        }
        .uv-mini-points span {
          font-size: 9px;
          color: var(--uv-gold-dark);
          font-weight: 700;
        }
        .uv-mini-points b {
          display: block;
          color: #443d34;
          margin-top: 4px;
          font-size: 11px;
          font-weight: 600;
        }

        /* PROJECT HIGHLIGHTS & LAND CARD */
        .uv-project-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 35px;
          margin-bottom: 30px;
        }
        .uv-project-head h2 {
          margin: 10px 0 8px;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 400;
        }
        .uv-project-head p {
          font-size: 12px;
          line-height: 1.7;
          color: #766c68;
          max-width: 460px;
          margin: 0;
        }
        .uv-land-card {
          min-width: 240px;
          padding: 20px 24px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 18px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.85),
            rgba(255, 250, 241, 0.6)
          );
          box-shadow: 0 12px 35px rgba(107, 91, 72, 0.07);
          backdrop-filter: blur(15px);
        }
        .uv-land-card small {
          font-size: 8px;
          letter-spacing: 0.16em;
          color: var(--uv-gold-dark);
          font-weight: 700;
        }
        .uv-land-card strong {
          display: block;
          font:
            42px Georgia,
            "Times New Roman",
            serif;
          color: #7d5b32;
          margin: 4px 0;
        }
        .uv-land-card strong em {
          font:
            14px Arial,
            sans-serif;
        }
        .uv-land-card span,
        .uv-land-card i {
          display: block;
          font-size: 10px;
          color: #776962;
          font-style: normal;
          line-height: 1.6;
        }
        .uv-land-card i {
          margin-top: 6px;
          font-size: 8.5px;
          color: #948780;
        }
        .uv-project-highlights {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 25px;
        }
        .uv-project-highlights article {
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.7),
            rgba(255, 255, 255, 0.4)
          );
          box-shadow: 0 10px 30px rgba(107, 91, 72, 0.05);
          backdrop-filter: blur(15px);
        }
        .uv-project-highlights small {
          display: block;
          font-size: 8px;
          letter-spacing: 0.15em;
          font-weight: 700;
          color: var(--uv-gold-dark);
        }
        .uv-project-highlights strong {
          display: block;
          margin: 10px 0 8px;
          font:
            22px Georgia,
            "Times New Roman",
            serif;
          color: #443d34;
        }
        .uv-project-highlights p {
          margin: 0;
          color: #766c68;
          font-size: 11px;
          line-height: 1.7;
        }
        .uv-project-note {
          margin-top: 14px;
          color: #948780;
          font-size: 8.5px;
        }

        /* INTEGRATED & LIFESTYLE CARDS */
        .uv-facilities-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 35px;
          margin: 12px 0 30px;
        }
        .uv-facilities h2 {
          margin: 0;
          font-size: clamp(32px, 3.8vw, 48px);
          font-weight: 400;
        }
        .uv-facilities-head p {
          max-width: 440px;
          margin: 0;
          color: #766c68;
          font-size: 11.5px;
          line-height: 1.8;
        }
        .uv-facility-grid {
          display: grid;
          gap: 16px;
        }
        .uv-integrated-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .uv-lifestyle-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        .id-card {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.8),
            rgba(255, 250, 242, 0.55)
          );
          box-shadow: 0 15px 40px rgba(107, 91, 72, 0.07);
          backdrop-filter: blur(18px);
          transition: all 0.4s ease;
        }
        .id-card:hover {
          transform: translateY(-4px);
          border-color: rgba(201, 164, 106, 0.5);
          box-shadow: 0 20px 50px rgba(107, 91, 72, 0.12);
        }
        .id-card-image {
          position: relative;
          height: 180px;
          overflow: hidden;
          background: #e7d9c8;
        }
        .id-photo {
          object-fit: cover;
          transition: transform 0.8s ease;
        }
        .id-card:hover .id-photo {
          transform: scale(1.05);
        }
        .id-image-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(40, 35, 28, 0.35) 0%,
            transparent 40%,
            rgba(40, 35, 28, 0.2) 100%
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
          min-height: 24px;
          border: 1px solid rgba(255, 255, 255, 0.55);
          border-radius: 99px;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
        }
        .id-number {
          justify-content: center;
          width: 26px;
          font-size: 8px;
          font-weight: 700;
        }
        .id-category {
          padding: 0 10px;
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }
        .id-image-mark {
          position: absolute;
          right: 12px;
          bottom: 12px;
          display: grid;
          width: 30px;
          height: 30px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.65);
          border-radius: 50%;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.22);
          font-size: 13px;
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }
        .id-card:hover .id-image-mark {
          color: var(--uv-gold-dark);
          background: #ffffff;
          transform: rotate(45deg);
        }
        .id-card-body {
          padding: 18px;
        }
        .id-card-body h3 {
          margin: 0 0 6px;
          color: #443d34;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 20px;
          font-weight: 400;
        }
        .id-card-description {
          margin: 0;
          color: #766c68;
          font-size: 11px;
          line-height: 1.5;
        }
        .id-feature-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 12px;
        }
        .id-feature {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 8px;
          border: 1px solid rgba(165, 139, 104, 0.19);
          border-radius: 99px;
          color: #665a50;
          background: rgba(255, 255, 255, 0.55);
          font-size: 8.5px;
        }
        .id-feature-dot {
          width: 3.5px;
          height: 3.5px;
          border-radius: 50%;
          background: var(--uv-gold);
        }
        .id-card-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 14px;
          padding-top: 10px;
          border-top: 1px solid rgba(165, 139, 104, 0.16);
          color: var(--uv-gold-dark);
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-decoration: none;
        }
        .id-link-arrow {
          display: grid;
          width: 22px;
          height: 22px;
          place-items: center;
          border: 1px solid rgba(156, 121, 65, 0.3);
          border-radius: 50%;
          font-size: 11px;
          transition: all 0.3s ease;
        }
        .id-card-link:hover .id-link-arrow {
          background: var(--uv-gold-dark);
          color: #ffffff;
          transform: rotate(45deg);
        }

        .uv-facility-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 18px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.8),
            rgba(255, 250, 241, 0.55)
          );
          box-shadow: 0 12px 35px rgba(107, 91, 72, 0.06);
          backdrop-filter: blur(16px);
        }
        .uv-facility-card-image {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #e7d9c8;
        }
        .uv-facility-card-image img {
          object-fit: cover;
          transition: transform 0.7s ease;
        }
        .uv-facility-card:hover .uv-facility-card-image img {
          transform: scale(1.05);
        }
        .uv-facility-card-copy {
          padding: 18px;
        }
        .uv-facility-number {
          display: inline-block;
          color: var(--uv-gold-dark);
          font-size: 9px;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .uv-facility-card-copy small {
          display: block;
          margin-bottom: 6px;
          color: #a1845c;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.14em;
        }
        .uv-facility-card-copy h3 {
          margin: 0 0 6px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 19px;
          font-weight: 400;
          color: #443d34;
        }
        .uv-facility-card-copy p {
          margin: 0;
          color: #766c68;
          font-size: 11px;
          line-height: 1.6;
        }
        .uv-card-rule {
          height: 1px;
          width: 35px;
          background: var(--uv-gold);
          margin-top: 14px;
        }

        /* INVESTMENT SECTION */
        .uv-investment-head {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          align-items: flex-end;
          gap: 8%;
          margin-bottom: 34px;
        }
        .uv-investment-head h2 {
          font-size: clamp(34px, 4vw, 54px);
          font-weight: 400;
          line-height: 1.05;
          margin: 10px 0 0;
        }
        .uv-investment-head > p {
          max-width: 470px;
          margin: 0;
          font-size: 12px;
          line-height: 1.8;
          color: #766c68;
        }
        .uv-investment-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }
        .uv-investment-card {
          position: relative;
          overflow: hidden;
          min-height: 280px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.82),
            rgba(255, 250, 242, 0.56)
          );
          backdrop-filter: blur(20px);
          box-shadow: 0 16px 45px rgba(107, 91, 72, 0.07);
        }
        .uv-investment-card:before {
          content: "";
          position: absolute;
          top: 0;
          left: 24px;
          right: 24px;
          height: 2px;
          background: linear-gradient(
            90deg,
            rgba(201, 164, 106, 0.8),
            transparent
          );
        }
        .uv-investment-card-featured {
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.92),
            rgba(247, 241, 232, 0.75)
          );
          box-shadow: 0 20px 55px rgba(107, 91, 72, 0.1);
        }
        .uv-investment-number {
          position: absolute;
          top: 20px;
          right: 22px;
          color: rgba(156, 121, 65, 0.4);
          font:
            20px Georgia,
            "Times New Roman",
            serif;
        }
        .uv-investment-icon {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          margin-bottom: 20px;
          border: 1px solid rgba(201, 164, 106, 0.3);
          border-radius: 12px;
          color: var(--uv-gold-dark);
          background: rgba(255, 255, 255, 0.6);
          font-size: 20px;
        }
        .uv-investment-card > small {
          font-size: 8px;
          letter-spacing: 0.15em;
          color: var(--uv-gold-dark);
          font-weight: 700;
        }
        .uv-investment-card h3 {
          margin: 10px 0 8px;
          font:
            22px/1.2 Georgia,
            "Times New Roman",
            serif;
          color: #443d34;
        }
        .uv-investment-card p {
          margin: 0;
          color: #766c68;
          font-size: 11px;
          line-height: 1.7;
        }
        .uv-investment-note {
          display: block;
          margin-top: 16px;
          padding-top: 10px;
          border-top: 1px solid rgba(165, 139, 104, 0.16);
          font-size: 8.5px;
          color: #8c7b73;
        }
        .uv-investment-disclaimer {
          display: grid;
          grid-template-columns: 140px 1fr auto;
          align-items: center;
          gap: 18px;
          margin-top: 24px;
          padding: 18px 22px;
          border: 1px solid rgba(201, 164, 106, 0.25);
          border-radius: 18px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.7),
            rgba(255, 250, 242, 0.5)
          );
          backdrop-filter: blur(16px);
        }
        .uv-investment-disclaimer > span {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--uv-gold-dark);
        }
        .uv-investment-disclaimer p {
          margin: 0;
          font-size: 10.5px;
          line-height: 1.7;
          color: #766c68;
        }

        /* CTA SECTION */
        .uv-cta {
          text-align: center;
          padding: clamp(70px, 8vw, 100px) 24px;
        }
        .uv-cta h2 {
          font-size: clamp(34px, 4.5vw, 54px);
          font-weight: 400;
          margin: 10px 0 12px;
        }
        .uv-cta p {
          max-width: 460px;
          margin: 0 auto;
          color: #766c68;
          font-size: 12px;
          line-height: 1.8;
        }

        /* RESPONSIVE MOBILE & TABLET FIX FOR HOTSPOT CARD & BADGES */
        @media (max-width: 900px) {
          .uttara-hero {
            aspect-ratio: 5.5 / 4.5;
            padding-top: 60px;
          }

          .uttara-hotspot-label {
            padding: 4px 8px;
            font-size: 7px;
            letter-spacing: 0.01em;
          }

          .uttara-hotspot-pulse {
            width: 9px;
            height: 9px;
            flex-basis: 9px;
            border-width: 1.5px;
          }

          .uttara-hotspot-card {
            position: absolute !important;
            left: 16px !important;
            right: 16px !important;
            top: auto !important;
            bottom: -120px !important;
            width: auto !important;
            max-width: none !important;
            transform: none !important;
            grid-template-columns: 90px minmax(0, 1fr);
            border-radius: 16px;
            background: rgba(12, 25, 34, 0.96);
            z-index: 9999;
          }

          .uttara-hotspot-card-image,
          .uttara-hotspot-card-image img {
            min-height: 120px;
            height: 100%;
          }

          .uttara-hotspot-card-body {
            padding: 12px 12px 10px;
          }

          .uttara-hotspot-card h2 {
            font-size: 14px;
            margin: 4px 10px 4px 0;
          }

          .uttara-hotspot-card p {
            font-size: 10.5px;
            line-height: 1.4;
          }

          .uttara-hotspot-kicker {
            font-size: 6.5px;
          }

          .uttara-hotspot-card-controls {
            margin-top: 8px;
            font-size: 9px;
          }

          .uv-mp-connectivity-map-layout {
            grid-template-columns: 1fr !important;
          }
          .uv-mp-connectivity-map {
            aspect-ratio: 1.25/1 !important;
          }
        }

        @media (max-width: 1050px) {
          .uv-integrated-grid,
          .uv-lifestyle-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .uv-lifestyle-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .uv-image-story,
          .uv-connect,
          .uv-nearby,
          .uv-investment-head {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .uv-facts {
            margin: 0 16px;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .uv-fact {
            border-right: 0;
            padding: 8px 12px !important;
          }
          .uv-fact:nth-child(odd) {
            border-right: 1px solid rgba(165, 139, 104, 0.18);
          }
          .uv-project-highlights,
          .uv-investment-grid {
            grid-template-columns: 1fr;
          }
          .uv-investment-disclaimer {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .uv-image-story-photo {
            min-height: 320px;
          }
          .uv-image-story-copy {
            padding: 40px 24px;
          }
          .uv-project-head,
          .uv-facilities-head {
            display: block;
          }
          .uv-land-card {
            margin-top: 20px;
          }
          .uv-mp-nearby-heading {
            align-items: flex-start !important;
            flex-direction: column;
            gap: 14px;
          }
          .uv-mp-nearby-toolbar {
            align-items: flex-start !important;
            flex-direction: column;
            gap: 12px;
          }
        }

        @media (max-width: 768px) {
          .uv-lifestyle-grid,
          .uv-facts {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .uv-integrated-grid {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
          .uv-fact:nth-child(odd) {
            border-right: 0;
          }
        }
      `}</style>
    </main>
  );
}
