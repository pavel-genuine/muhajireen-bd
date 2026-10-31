
import React, { useEffect } from "react";
import Link from "next/link";

const projectImages = {
    hero: "/images/about/about-hero.jpg",
    vision: "/images/about/vision.jpg",
    project: "/images/about/ashulia-model-town.jpg",
    lifestyle: "/images/about/lifestyle.jpg",
    commercial: "/images/about/commercial.jpg",
    location: "/images/about/location.jpg",
};

const advantages = [
    {
        number: "01",
        title: "Beside Uttara",
        text: "Enjoy convenient access to the established lifestyle, facilities and everyday conveniences of Uttara.",
    },
    {
        number: "02",
        title: "Direct Connectivity",
        text: "A proposed modern bridge over the river is intended to strengthen connectivity between Ashulia and Uttara.",
    },
    {
        number: "03",
        title: "A Growing Destination",
        text: "Located in one of the rapidly developing areas surrounding Dhaka, with evolving urban infrastructure.",
    },
    {
        number: "04",
        title: "Peaceful Living",
        text: "A quieter residential environment with the potential to enjoy a more relaxed lifestyle close to the city.",
    },
    {
        number: "05",
        title: "Regional Connectivity",
        text: "Potential connectivity with wider regional road networks, including the Padma Bridge routes.",
    },
    {
        number: "06",
        title: "Future Opportunities",
        text: "Emerging infrastructure and proposed transport developments may create new opportunities for the area.",
    },
];

const lifestyleFacilities = [
    {
        no: "01",
        title: "Swimming Pools",
        subtitle: "Separate facilities for men and women",
        icon: "◉",
    },
    {
        no: "02",
        title: "Modern Gym",
        subtitle: "Dedicated fitness facilities for men and women",
        icon: "↗",
    },
    {
        no: "03",
        title: "Kids Playing Zone",
        subtitle: "A dedicated space for childhood and recreation",
        icon: "✳",
    },
    {
        no: "04",
        title: "Green Zone",
        subtitle: "Landscaped spaces surrounded by greenery",
        icon: "❋",
    },
    {
        no: "05",
        title: "Riverside Walkway",
        subtitle: "A pedestrian-friendly community experience",
        icon: "↝",
    },
    {
        no: "06",
        title: "Bicycle Zone",
        subtitle: "Encouraging active and healthier lifestyles",
        icon: "◎",
    },
    {
        no: "07",
        title: "Mosque & Madrasha",
        subtitle: "Dedicated spaces for worship and education",
        icon: "◇",
    },
    {
        no: "08",
        title: "Emergency Medical Services",
        subtitle: "Healthcare support for the community",
        icon: "＋",
    },
];

const commercialFacilities = [
    {
        no: "01",
        title: "Medical College",
        description: "A modern medical education facility with long-term institutional potential.",
        tag: "Education",
    },
    {
        no: "02",
        title: "General Hospital",
        description: "Advanced healthcare services and medical support for residents.",
        tag: "Healthcare",
    },
    {
        no: "03",
        title: "Nursing Institute",
        description: "Professional nursing education serving the growing healthcare sector.",
        tag: "Education",
    },
    {
        no: "04",
        title: "Shopping Mall",
        description: "A modern retail destination for shopping, restaurants and daily services.",
        tag: "Retail",
    },
    {
        no: "05",
        title: "Commercial Spaces",
        description: "Dedicated spaces for offices, businesses and commercial activities.",
        tag: "Business",
    },
    {
        no: "06",
        title: "International School",
        description: "A contemporary educational environment for the next generation.",
        tag: "Education",
    },
];

const nearbyLocations = [
    "Uttara",
    "Metro Rail",
    "Hazrat Shahjalal International Airport",
    "Birulia Bridge",
    "Gabtoli Bus Stand",
    "Mirpur DOHS",
    "Daffodil University",
    "City University",
    "BRAC University",
    "Eastern University",
    "World University",
    "Passport Office",
    "Uttara West Police Station",
    "VIP Block Park & Playground",
];

const AboutPage = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".about-reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        elements.forEach((element) => observer.observe(element));

        const handleParallax = () => {
            const layers = document.querySelectorAll("[data-parallax]");

            layers.forEach((layer) => {
                const rect = layer.getBoundingClientRect();
                const speed = Number(layer.dataset.parallax || 0.08);
                const offset = (rect.top - window.innerHeight / 2) * speed;

                layer.style.setProperty("--parallax-y", `${-offset}px`);
            });
        };

        window.addEventListener("scroll", handleParallax, { passive: true });
        handleParallax();

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleParallax);
        };
    }, []);

    return (
        <>
            <main className="muh-about">

                {/* HERO */}
                <section className="about-hero">
                    <div
                        className="hero-background"
                        style={{ backgroundImage: `url(${projectImages.hero})` }}
                    />
                    <div className="hero-overlay" />

                    <div className="hero-content container">
                        <div className="eyebrow light">
                            <span />
                            THE MUHAJIREEN STORY
                        </div>

                        <h1>
                            More Than
                            <br />
                            <em>A Place To Live.</em>
                            <br />
                            A Way To Belong.
                        </h1>

                        <p>
                            Creating meaningful spaces, connecting communities
                            and building possibilities for generations to come.
                        </p>

                        <div className="hero-actions">
                            <Link href="/projects" className="primary-btn">
                                Explore Our Projects <span>↗</span>
                            </Link>
                            <a href="#our-story" className="text-link light-link">
                                Discover Our Story <span>↓</span>
                            </a>
                        </div>
                    </div>

                    <div className="hero-bottom">
                        <span>MUHAJIREEN CONSULTANT LTD.</span>
                        <span>BUILDING TOMORROW, TODAY</span>
                    </div>

                    <div className="hero-scroll">
                        <span>SCROLL TO EXPLORE</span>
                        <i />
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="about-intro section-space" id="our-story">
                    <div className="container">
                        <div className="intro-grid">

                            <div className="intro-left about-reveal">
                                <div className="eyebrow">
                                    <span />
                                    WHO WE ARE
                                </div>

                                <h2 className="editorial-heading">
                                    We Believe
                                    <br />
                                    <em>Every Place</em>
                                    <br />
                                    Has A Purpose.
                                </h2>

                                <div className="intro-image" data-parallax="0.06">
                                    <img src={projectImages.vision} alt="Muhajireen vision" />
                                    <div className="image-caption">
                                        <span>01 / OUR VISION</span>
                                        <span>Beyond Ordinary Living ↗</span>
                                    </div>
                                </div>
                            </div>

                            <div className="intro-right about-reveal">
                                <span className="side-index">01 — ABOUT MUHAJIREEN</span>

                                <h3>
                                    More than a real estate company.
                                    <em> A vision for better living.</em>
                                </h3>

                                <p>
                                    At MUHAJIREEN Consultant Ltd, we believe a property
                                    is more than an address. It is where aspirations take
                                    shape, families grow and meaningful futures begin.
                                </p>

                                <p>
                                    Through thoughtful real estate development, including
                                    Ashulia Model Town and Uttara View, we aim to bring
                                    together contemporary living, considered planning
                                    and a stronger sense of community.
                                </p>

                                <p>
                                    Our vision is to create destinations where residential
                                    comfort, modern facilities and opportunities for
                                    growth exist together.
                                </p>

                                <Link href="/projects" className="underlined-link">
                                    Discover Our Developments <span>↗</span>
                                </Link>

                                <div className="intro-stats">
                                    <div>
                                        <strong>02<span>+</span></strong>
                                        <small>Project Identities</small>
                                    </div>
                                    <div>
                                        <strong>01</strong>
                                        <small>Shared Vision</small>
                                    </div>
                                    <div>
                                        <strong>∞</strong>
                                        <small>Future Possibilities</small>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* PHILOSOPHY */}
                <section className="philosophy-section">
                    <div className="philosophy-bg" />
                    <div className="container philosophy-content about-reveal">
                        <div className="eyebrow light">
                            <span />
                            WHAT WE BELIEVE
                        </div>

                        <h2>
                            Thoughtful Spaces.
                            <br />
                            <em>Meaningful Lives.</em>
                        </h2>

                        <p>
                            We see real estate as more than land and buildings.
                            It is about creating a setting for belonging,
                            opportunity and a better everyday experience.
                        </p>

                        <div className="philosophy-line">
                            <span>PEOPLE</span>
                            <i />
                            <span>PLACE</span>
                            <i />
                            <span>POSSIBILITY</span>
                        </div>
                    </div>
                </section>

                {/* ASHULIA PROJECT */}
                <section className="project-overview section-space">
                    <div className="container">

                        <div className="section-heading about-reveal">
                            <div>
                                <div className="eyebrow">
                                    <span />
                                    OUR FLAGSHIP DEVELOPMENT
                                </div>
                                <h2 className="editorial-heading">
                                    A New Perspective
                                    <br />
                                    <em>On Modern Living.</em>
                                </h2>
                            </div>

                            <p>
                                Introducing Ashulia Model Town — a planned
                                residential and commercial destination beside
                                Uttara Sector 16.
                            </p>
                        </div>

                        <div className="project-visual about-reveal">
                            <img src={projectImages.project} alt="Ashulia Model Town" />

                            <div className="project-glass-card">
                                <span>MUHAJIREEN PRESENTS</span>
                                <h3>Ashulia<br />Model Town</h3>
                                <p>A luxurious residential model town.</p>
                                <Link href="/projects" className="round-link">↗</Link>
                            </div>

                            <div className="project-location-label">
                                <span>LOCATION</span>
                                <strong>Beside Uttara Sector 16</strong>
                            </div>
                        </div>

                        <div className="project-facts">
                            <div className="fact">
                                <span>01 / TOTAL DEVELOPMENT AREA</span>
                                <strong>05 <small>Acres</small></strong>
                                <p>Approximately 303 Kathas</p>
                            </div>

                            <div className="fact">
                                <span>02 / FRONT ROAD</span>
                                <strong>80 <small>Feet</small></strong>
                                <p>Wide road frontage</p>
                            </div>

                            <div className="fact">
                                <span>03 / SIDE CONNECTIVITY</span>
                                <strong>4 <small>Sides</small></strong>
                                <p>30 ft, 50 ft and 30 ft side roads</p>
                            </div>

                            <div className="fact fact-note">
                                <span>04 / DEVELOPMENT VISION</span>
                                <strong>One Destination.</strong>
                                <p>Residential, commercial and community facilities.</p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* LOCATION */}
                <section className="location-section section-space">
                    <div className="container">
                        <div className="location-grid">

                            <div className="location-image about-reveal">
                                <img src={projectImages.location} alt="Ashulia location" />
                                <div className="location-image-caption">
                                    <span>ASHULIA · DHAKA</span>
                                    <span>CONNECTED TO WHAT MATTERS</span>
                                </div>
                            </div>

                            <div className="location-content about-reveal">
                                <div className="eyebrow">
                                    <span />
                                    THE LOCATION ADVANTAGE
                                </div>

                                <h2 className="editorial-heading">
                                    Close To
                                    <br />
                                    <em>What Matters.</em>
                                </h2>

                                <p className="section-description">
                                    Positioned beside Uttara Sector 16, Ashulia Model Town
                                    offers the vision of a peaceful residential environment
                                    with access to the wider Dhaka urban landscape.
                                </p>

                                <div className="advantage-list">
                                    {advantages.map((item) => (
                                        <div className="advantage-item" key={item.number}>
                                            <span className="advantage-number">{item.number}</span>
                                            <div>
                                                <h4>{item.title}</h4>
                                                <p>{item.text}</p>
                                            </div>
                                            <span className="advantage-arrow">↗</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* LIFESTYLE */}
                <section className="lifestyle-section section-space">
                    <div className="container">

                        <div className="section-heading about-reveal">
                            <div>
                                <div className="eyebrow light">
                                    <span />
                                    DESIGNED AROUND LIVING
                                </div>

                                <h2 className="editorial-heading light-heading">
                                    Everyday Living,
                                    <br />
                                    <em>Elevated.</em>
                                </h2>
                            </div>

                            <p>
                                A community vision that brings recreation, wellness,
                                greenery and essential facilities closer to home.
                            </p>
                        </div>

                        <div className="lifestyle-layout">
                            <div className="lifestyle-main-image about-reveal">
                                <img src={projectImages.lifestyle} alt="Community lifestyle" />
                                <div className="lifestyle-image-overlay">
                                    <span>THE COMMUNITY EXPERIENCE</span>
                                    <h3>Live Well.<br />Feel Connected.</h3>
                                </div>
                            </div>

                            <div className="facility-grid">
                                {lifestyleFacilities.map((item) => (
                                    <div className="facility-card about-reveal" key={item.no}>
                                        <div className="facility-top">
                                            <span>{item.no}</span>
                                            <span className="facility-icon">{item.icon}</span>
                                        </div>
                                        <h4>{item.title}</h4>
                                        <p>{item.subtitle}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* COMMERCIAL */}
                <section className="commercial-section section-space">
                    <div className="container">

                        <div className="commercial-heading about-reveal">
                            <div className="eyebrow">
                                <span />
                                BEYOND RESIDENTIAL
                            </div>

                            <h2 className="editorial-heading">
                                A Destination
                                <br />
                                <em>For Every Need.</em>
                            </h2>

                            <p>
                                A broader development vision combining residential
                                living with commercial, educational and healthcare
                                infrastructure.
                            </p>
                        </div>

                        <div className="commercial-visual about-reveal">
                            <img src={projectImages.commercial} alt="Commercial development" />
                            <div className="commercial-glass">
                                <span>COMMERCIAL & INSTITUTIONAL VISION</span>
                                <h3>Spaces That<br />Create Possibilities.</h3>
                                <p>Education · Healthcare · Retail · Business</p>
                            </div>
                        </div>

                        <div className="commercial-grid">
                            {commercialFacilities.map((item) => (
                                <div className="commercial-card about-reveal" key={item.no}>
                                    <span>{item.no} / {item.tag}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <span className="commercial-arrow">↗</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* INVESTMENT */}
                <section className="investment-section section-space">
                    <div className="container">

                        <div className="investment-heading about-reveal">
                            <div className="eyebrow light">
                                <span />
                                INVESTMENT OPPORTUNITIES
                            </div>

                            <h2 className="editorial-heading light-heading">
                                More Than Ownership.
                                <br />
                                <em>A Share In Possibility.</em>
                            </h2>

                            <p>
                                The project profile outlines a participation model
                                connecting residential land-share ownership with
                                commercial and institutional development.
                            </p>
                        </div>

                        <div className="investment-grid">

                            <div className="investment-card about-reveal">
                                <span className="investment-number">01</span>
                                <div className="investment-icon">⌂</div>
                                <h3>Residential Land Share</h3>
                                <p>
                                    Residential land-share ownership linked to the
                                    project's proposed two-flat and six-flat share options.
                                </p>
                                <span className="investment-label">OWNERSHIP OPPORTUNITY</span>
                            </div>

                            <div className="investment-card featured about-reveal">
                                <span className="investment-number">02</span>
                                <div className="investment-icon">◇</div>
                                <h3>Commercial Membership</h3>
                                <p>
                                    Lifetime membership opportunities associated with
                                    the commercial facilities outlined in the project profile.
                                </p>
                                <span className="investment-label">LIFETIME MEMBERSHIP</span>
                            </div>

                            <div className="investment-card about-reveal">
                                <span className="investment-number">03</span>
                                <div className="investment-icon">↗</div>
                                <h3>Commercial Participation</h3>
                                <p>
                                    Participation opportunities associated with the
                                    proposed commercial and institutional developments.
                                </p>
                                <span className="investment-label">PROJECT PARTICIPATION</span>
                            </div>

                        </div>

                        <p className="investment-disclaimer">
                            Investment structures, membership entitlements, ownership
                            terms and any potential distributions are subject to
                            the applicable agreements, project approvals and legal
                            documentation. Returns are not guaranteed.
                        </p>

                    </div>
                </section>

                {/* NEARBY LOCATIONS */}
                <section className="nearby-section section-space">
                    <div className="container">

                        <div className="nearby-heading about-reveal">
                            <div className="eyebrow">
                                <span />
                                THE SURROUNDING LANDSCAPE
                            </div>

                            <h2 className="editorial-heading">
                                Everything Within
                                <br />
                                <em>Your Horizon.</em>
                            </h2>

                            <p>
                                Explore the educational institutions, transport
                                connections and everyday destinations in the
                                surrounding region.
                            </p>
                        </div>

                        <div className="nearby-layout">
                            <div className="nearby-feature">
                                <span>THE NEIGHBOURHOOD</span>
                                <h3>Connected<br />To More.</h3>
                                <p>A location with access to a growing network of destinations.</p>
                            </div>

                            <div className="nearby-list">
                                {nearbyLocations.map((location, index) => (
                                    <div className="nearby-item" key={location}>
                                        <span>{String(index + 1).padStart(2, "0")}</span>
                                        <strong>{location}</strong>
                                        <span>↗</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* LEADERSHIP */}
                <section className="leadership-section section-space">
                    <div className="container leadership-content about-reveal">
                        <div className="eyebrow">
                            <span />
                            THE PEOPLE BEHIND THE VISION
                        </div>

                        <h2 className="editorial-heading">
                            Guided By Vision.
                            <br />
                            <em>Driven By Purpose.</em>
                        </h2>

                        <p>
                            Our leadership is committed to advancing the MUHAJIREEN
                            vision through thoughtful planning, responsible
                            development and a long-term commitment to community.
                        </p>

                        <Link href="/contact" className="underlined-link">
                            Connect With Our Team <span>↗</span>
                        </Link>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="about-cta">
                    <div className="cta-background" />
                    <div className="container cta-content about-reveal">

                        <div className="eyebrow light">
                            <span />
                            YOUR FUTURE STARTS HERE
                        </div>

                        <h2>
                            Find Your Place.
                            <br />
                            <em>Shape Your Future.</em>
                        </h2>

                        <p>
                            Discover a new perspective on residential living
                            and future possibilities with MUHAJIREEN.
                        </p>

                        <div className="cta-actions">
                            <Link href="/projects" className="primary-btn">
                                Explore Our Projects <span>↗</span>
                            </Link>

                            <a href="tel:+8801715102130" className="cta-phone">
                                <span>CALL US FOR MORE INFORMATION</span>
                                +880 1715-102130
                            </a>
                        </div>

                    </div>

                    <div className="cta-footer">
                        <span>MUHAJIREEN CONSULTANT LTD.</span>
                        <span>BUILDING TOMORROW, TODAY.</span>
                    </div>
                </section>

            </main>

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

        .muh-about {
          --burgundy: #581e30;
          --burgundy-dark: #35121f;
          --ivory: #f6f0e7;
          --ivory-dark: #eee4d8;
          --gold: #cda66b;
          --muted: #84776f;
          font-family: 'DM Sans', sans-serif;
          color: #321d26;
          overflow: hidden;
          background: var(--ivory);
        }

        .muh-about * {
          box-sizing: border-box;
        }

        .muh-about img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .muh-about a {
          text-decoration: none;
        }

        .muh-about .container {
          width: min(1320px, calc(100% - 100px));
          margin: 0 auto;
        }

        .section-space {
          padding: 130px 0;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.5px;
          color: var(--burgundy);
          text-transform: uppercase;
        }

        .eyebrow > span {
          width: 35px;
          height: 1px;
          background: var(--gold);
          flex-shrink: 0;
        }

        .eyebrow.light {
          color: #f4dfbc;
        }

        .editorial-heading {
          margin: 25px 0;
          font-family: 'Playfair Display', serif;
          font-size: clamp(45px, 5.5vw, 78px);
          font-weight: 400;
          line-height: 1.07;
          letter-spacing: -3px;
        }

        .editorial-heading em {
          color: var(--burgundy);
          font-weight: 400;
        }

        .light-heading {
          color: white;
        }

        .light-heading em {
          color: #d7b27b;
        }

        .about-reveal {
          opacity: 0;
          transform: translateY(45px);
          transition: opacity .9s ease, transform .9s cubic-bezier(.2,.7,.2,1);
        }

        .about-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* HERO */

        .about-hero {
          height: min(850px, 92vh);
          min-height: 650px;
          position: relative;
          display: flex;
          align-items: center;
          color: white;
          background: var(--burgundy-dark);
          isolation: isolate;
        }

        .hero-background,
        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .hero-background {
          background-size: cover;
          background-position: center 48%;
          transform: scale(1.02);
          animation: heroZoom 15s ease-out forwards;
        }

        .hero-overlay {
          background: linear-gradient(
            90deg,
            rgba(28, 16, 22, .76) 0%,
            rgba(28, 16, 22, .48) 45%,
            rgba(28, 16, 22, .12) 100%
          );
        }

        .hero-content {
          padding-top: 50px;
        }

        .hero-content h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(55px, 7.2vw, 100px);
          line-height: .99;
          font-weight: 400;
          letter-spacing: -4px;
          max-width: 900px;
          margin: 30px 0;
        }

        .hero-content h1 em {
          color: #dfbd8b;
        }

        .hero-content > p {
          max-width: 490px;
          color: rgba(255,255,255,.83);
          line-height: 1.9;
          font-size: 15px;
        }

        .hero-actions,
        .cta-actions {
          display: flex;
          align-items: center;
          gap: 30px;
          margin-top: 38px;
          flex-wrap: wrap;
        }

        .primary-btn {
          min-height: 56px;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          padding: 8px 10px 8px 22px;
          background: #fff;
          color: #321d26 !important;
          font-size: 12px;
          font-weight: 700;
          transition: .35s;
        }

        .primary-btn span {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          background: var(--ivory);
          font-size: 20px;
          transition: .35s;
        }

        .primary-btn:hover {
          background: var(--gold);
        }

        .primary-btn:hover span {
          transform: rotate(45deg);
        }

        .text-link {
          display: inline-flex;
          gap: 15px;
          align-items: center;
          font-size: 12px;
          font-weight: 600;
        }

        .light-link {
          color: white;
        }

        .light-link span {
          font-size: 20px;
          color: var(--gold);
        }

        .hero-bottom {
          position: absolute;
          bottom: 35px;
          left: 50%;
          transform: translateX(-50%);
          width: min(1320px, calc(100% - 100px));
          display: flex;
          justify-content: space-between;
          font-size: 9px;
          letter-spacing: 2px;
          font-weight: 700;
          color: rgba(255,255,255,.8);
        }

        .hero-scroll {
          position: absolute;
          right: 5%;
          bottom: 110px;
          display: flex;
          align-items: center;
          gap: 16px;
          writing-mode: vertical-rl;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .hero-scroll i {
          height: 65px;
          width: 1px;
          background: var(--gold);
        }

        /* INTRO */

        .about-intro {
          background:
            radial-gradient(circle at 90% 10%, rgba(205,166,107,.11), transparent 28%),
            var(--ivory);
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr .85fr;
          gap: 12%;
          align-items: center;
        }

        .intro-image {
          margin-top: 45px;
          height: 370px;
          position: relative;
          overflow: hidden;
        }

        .intro-image img {
          transform: translateY(var(--parallax-y, 0));
          height: 115%;
          transition: transform .2s linear;
        }

        .image-caption {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          color: white;
          background: linear-gradient(transparent, rgba(0,0,0,.65));
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .side-index {
          font-size: 9px;
          letter-spacing: 2px;
          color: #aa8b6d;
        }

        .intro-right h3 {
          font-family: 'Playfair Display', serif;
          font-size: 37px;
          line-height: 1.25;
          font-weight: 400;
          margin: 35px 0 25px;
        }

        .intro-right h3 em {
          color: var(--burgundy);
        }

        .intro-right > p,
        .section-description {
          color: var(--muted);
          font-size: 14px;
          line-height: 2;
          margin-bottom: 18px;
        }

        .underlined-link {
          display: inline-flex;
          gap: 35px;
          align-items: center;
          padding-bottom: 12px;
          margin-top: 15px;
          color: var(--burgundy);
          border-bottom: 1px solid #c9b6a9;
          font-size: 12px;
          font-weight: 700;
        }

        .underlined-link span {
          font-size: 19px;
        }

        .intro-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid #dfd0c5;
          margin-top: 55px;
          padding-top: 28px;
          gap: 15px;
        }

        .intro-stats > div {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .intro-stats strong {
          font-family: 'Playfair Display', serif;
          font-size: 38px;
          color: var(--burgundy);
          font-weight: 400;
        }

        .intro-stats strong span {
          color: var(--gold);
        }

        .intro-stats small {
          font-size: 10px;
          color: var(--muted);
        }

        /* PHILOSOPHY */

        .philosophy-section {
          min-height: 560px;
          display: flex;
          align-items: center;
          position: relative;
          background: var(--burgundy-dark);
          color: white;
          overflow: hidden;
        }

        .philosophy-bg {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(42,13,25,.92), rgba(42,13,25,.67)),
            url('/images/about/philosophy.jpg') center/cover;
          opacity: .9;
        }

        .philosophy-content {
          position: relative;
          z-index: 1;
          padding-top: 90px;
          padding-bottom: 90px;
        }

        .philosophy-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(50px, 7vw, 90px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -3px;
          margin: 30px 0;
        }

        .philosophy-content h2 em {
          color: #d6b27e;
        }

        .philosophy-content > p {
          max-width: 530px;
          font-size: 14px;
          line-height: 2;
          color: rgba(255,255,255,.7);
        }

        .philosophy-line {
          display: flex;
          gap: 22px;
          align-items: center;
          margin-top: 65px;
          font-size: 9px;
          letter-spacing: 2px;
          color: #d6b27e;
        }

        .philosophy-line i {
          height: 1px;
          width: 50px;
          background: rgba(255,255,255,.3);
        }

        /* PROJECT OVERVIEW */

        .project-overview {
          background: #f1e9df;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 50px;
          margin-bottom: 55px;
        }

        .section-heading > p {
          max-width: 370px;
          font-size: 14px;
          color: var(--muted);
          line-height: 2;
        }

        .project-visual {
          height: 600px;
          position: relative;
          overflow: hidden;
          background: #c4b6a9;
        }

        .project-visual > img {
          transition: transform 1.2s cubic-bezier(.2,.7,.2,1);
        }

        .project-visual:hover > img {
          transform: scale(1.045);
        }

        .project-glass {
          position: absolute;
          bottom: 45px;
          left: 45px;
          width: 320px;
          padding: 35px;
          background: rgba(255,250,244,.78);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,.7);
          box-shadow: 0 20px 60px rgba(0,0,0,.12);
        }

        .project-glass > span,
        .commercial-glass > span {
          font-size: 9px;
          letter-spacing: 2px;
          color: #9c795f;
          font-weight: 700;
        }

        .project-glass h3 {
          font-family: 'Playfair Display', serif;
          font-size: 39px;
          font-weight: 400;
          line-height: 1.1;
          color: var(--burgundy);
          margin: 28px 0 15px;
        }

        .project-glass p {
          color: var(--muted);
          font-size: 12px;
        }

        .round-link {
          position: absolute;
          right: 25px;
          top: 25px;
          width: 38px;
          height: 38px;
          border: 1px solid #c6b4a8;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: var(--burgundy);
        }

        .project-location-label {
          position: absolute;
          bottom: 40px;
          right: 45px;
          display: flex;
          flex-direction: column;
          gap: 7px;
          color: white;
          text-align: right;
          text-shadow: 0 2px 10px rgba(0,0,0,.4);
        }

        .project-location-label span {
          font-size: 9px;
          letter-spacing: 2px;
        }

        .project-location-label strong {
          font-size: 15px;
        }

        .project-facts {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 60px;
          border-top: 1px solid #d6c8bb;
          border-bottom: 1px solid #d6c8bb;
        }

        .fact {
          padding: 35px 25px;
          border-right: 1px solid #d6c8bb;
        }

        .fact:first-child {
          padding-left: 0;
        }

        .fact:last-child {
          border: none;
        }

        .fact > span {
          display: block;
          font-size: 8px;
          letter-spacing: 1.3px;
          color: #9c887b;
          font-weight: 700;
        }

        .fact strong {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 55px;
          font-weight: 400;
          color: var(--burgundy);
          margin: 15px 0 5px;
        }

        .fact strong small {
          font-size: 15px;
        }

        .fact p {
          color: var(--muted);
          font-size: 11px;
          line-height: 1.8;
        }

        .fact-note strong {
          font-size: 27px;
          margin-top: 25px;
        }

        /* LOCATION */

        .location-section {
          background: var(--ivory);
        }

        .location-grid {
          display: grid;
          grid-template-columns: .9fr 1fr;
          gap: 10%;
          align-items: start;
        }

        .location-image {
          height: 740px;
          position: relative;
          overflow: hidden;
          background: #c6b7a7;
        }

        .location-image img {
          transition: transform 1.2s ease;
        }

        .location-image:hover img {
          transform: scale(1.04);
        }

        .location-image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          padding: 22px;
          color: white;
          background: linear-gradient(transparent, rgba(0,0,0,.7));
          font-size: 9px;
          letter-spacing: 1px;
        }

        .location-content .editorial-heading {
          font-size: clamp(50px, 5vw, 70px);
        }

        .advantage-list {
          margin-top: 35px;
          border-top: 1px solid #ded0c4;
        }

        .advantage-item {
          display: grid;
          grid-template-columns: 38px 1fr 25px;
          gap: 14px;
          align-items: start;
          padding: 21px 0;
          border-bottom: 1px solid #ded0c4;
          transition: padding .3s;
        }

        .advantage-item:hover {
          padding-left: 8px;
        }

        .advantage-number {
          font-size: 10px;
          color: #b48b58;
          padding-top: 4px;
        }

        .advantage-item h4 {
          font-family: 'Playfair Display', serif;
          font-size: 19px;
          font-weight: 500;
          margin: 0 0 7px;
          color: var(--burgundy);
        }

        .advantage-item p {
          font-size: 11px;
          line-height: 1.8;
          color: var(--muted);
          margin: 0;
        }

        .advantage-arrow {
          color: #b48b58;
        }

        /* LIFESTYLE */

        .lifestyle-section {
          background: #351b27;
          color: white;
        }

        .lifestyle-section .section-heading > p {
          color: rgba(255,255,255,.6);
        }

        .lifestyle-layout {
          display: grid;
          grid-template-columns: .85fr 1fr;
          gap: 22px;
        }

        .lifestyle-main-image {
          height: 620px;
          position: relative;
          overflow: hidden;
        }

        .lifestyle-main-image img {
          transition: transform 1s ease;
        }

        .lifestyle-main-image:hover img {
          transform: scale(1.04);
        }

        .lifestyle-image-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 40px;
          background: linear-gradient(transparent, rgba(0,0,0,.7));
        }

        .lifestyle-image-overlay span {
          font-size: 9px;
          letter-spacing: 2px;
          color: #e2c08e;
        }

        .lifestyle-image-overlay h3 {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 400;
          line-height: 1.1;
          margin: 20px 0 0;
        }

        .facility-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .facility-card {
          padding: 24px;
          min-height: 145px;
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(255,255,255,.045);
          transition: .4s;
        }

        .facility-card:hover {
          background: rgba(255,255,255,.12);
          border-color: rgba(205,166,107,.6);
          transform: translateY(-4px);
        }

        .facility-top {
          display: flex;
          justify-content: space-between;
          color: #c9a779;
          font-size: 10px;
        }

        .facility-icon {
          font-size: 23px;
        }

        .facility-card h4 {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: 22px;
          margin: 20px 0 7px;
        }

        .facility-card p {
          font-size: 10px;
          line-height: 1.7;
          color: rgba(255,255,255,.55);
        }

        /* COMMERCIAL */

        .commercial-section {
          background: #f1e9df;
        }

        .commercial-heading {
          max-width: 780px;
          margin-bottom: 55px;
        }

        .commercial-heading > p {
          max-width: 450px;
          font-size: 14px;
          line-height: 2;
          color: var(--muted);
        }

        .commercial-visual {
          height: 480px;
          position: relative;
          overflow: hidden;
          background: #b5a79b;
        }

        .commercial-visual img {
          transition: transform 1s ease;
        }

        .commercial-visual:hover img {
          transform: scale(1.04);
        }

        .commercial-glass {
          position: absolute;
          right: 40px;
          bottom: 40px;
          width: min(420px, calc(100% - 40px));
          padding: 35px;
          background: rgba(250,246,240,.83);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,.8);
        }

        .commercial-glass h3 {
          font-family: 'Playfair Display', serif;
          font-size: 40px;
          line-height: 1.12;
          font-weight: 400;
          color: var(--burgundy);
          margin: 24px 0;
        }

        .commercial-glass p {
          font-size: 11px;
          color: var(--muted);
        }

        .commercial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #d9cabe;
          border: 1px solid #d9cabe;
          margin-top: 55px;
        }

        .commercial-card {
          position: relative;
          background: #f1e9df;
          min-height: 210px;
          padding: 30px;
          transition: .35s;
        }

        .commercial-card:hover {
          background: #fffaf4;
        }

        .commercial-card > span:first-child {
          font-size: 9px;
          letter-spacing: 1.5px;
          color: #b08b61;
        }

        .commercial-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 25px;
          font-weight: 400;
          color: var(--burgundy);
          margin: 30px 0 12px;
        }

        .commercial-card p {
          max-width: 290px;
          font-size: 11px;
          line-height: 1.8;
          color: var(--muted);
        }

        .commercial-arrow {
          position: absolute;
          right: 25px;
          bottom: 25px;
          color: var(--gold);
          font-size: 20px;
        }

        /* INVESTMENT */

        .investment-section {
          background:
            radial-gradient(circle at 85% 10%, rgba(205,166,107,.13), transparent 30%),
            #351b27;
          color: white;
        }

        .investment-heading {
          max-width: 800px;
          margin-bottom: 65px;
        }

        .investment-heading > p {
          max-width: 570px;
          font-size: 14px;
          line-height: 2;
          color: rgba(255,255,255,.6);
        }

        .investment-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .investment-card {
          min-height: 360px;
          padding: 35px;
          position: relative;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.045);
          backdrop-filter: blur(15px);
          transition: .4s;
        }

        .investment-card:hover {
          transform: translateY(-8px);
          background: rgba(255,255,255,.1);
        }

        .investment-card.featured {
          border-color: rgba(205,166,107,.65);
          background: rgba(205,166,107,.09);
        }

        .investment-number {
          font-size: 10px;
          color: #d2ae78;
          letter-spacing: 2px;
        }

        .investment-icon {
          margin: 40px 0 25px;
          color: #d2ae78;
          font-size: 35px;
        }

        .investment-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 400;
        }

        .investment-card p {
          font-size: 12px;
          line-height: 1.9;
          color: rgba(255,255,255,.6);
        }

        .investment-label {
          display: block;
          margin-top: 35px;
          font-size: 9px;
          letter-spacing: 1.5px;
          color: #d2ae78;
        }

        .investment-disclaimer {
          font-size: 10px;
          line-height: 1.8;
          color: rgba(255,255,255,.45);
          margin-top: 35px;
        }

        /* NEARBY */

        .nearby-section {
          background: var(--ivory);
        }

        .nearby-heading {
          max-width: 750px;
          margin-bottom: 55px;
        }

        .nearby-heading > p {
          color: var(--muted);
          font-size: 13px;
          line-height: 2;
          max-width: 450px;
        }

        .nearby-layout {
          display: grid;
          grid-template-columns: .7fr 1fr;
          gap: 55px;
        }

        .nearby-feature {
          min-height: 480px;
          padding: 45px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: white;
          background:
            linear-gradient(0deg, rgba(40,16,25,.9), rgba(40,16,25,.05)),
            url('/images/about/neighborhood.jpg') center/cover;
        }

        .nearby-feature > span {
          font-size: 9px;
          letter-spacing: 2px;
          color: #e4c18e;
        }

        .nearby-feature h3 {
          font-family: 'Playfair Display', serif;
          font-size: 52px;
          font-weight: 400;
          line-height: 1.1;
          margin: 20px 0;
        }

        .nearby-feature p {
          font-size: 12px;
          color: rgba(255,255,255,.7);
        }

        .nearby-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-content: start;
          column-gap: 25px;
        }

        .nearby-item {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 65px;
          border-bottom: 1px solid #dfd1c6;
        }

        .nearby-item > span:first-child {
          font-size: 9px;
          color: #b38e5f;
        }

        .nearby-item strong {
          font-size: 11px;
          font-weight: 600;
          flex: 1;
        }

        .nearby-item > span:last-child {
          color: #b38e5f;
        }

        /* LEADERSHIP */

        .leadership-section {
          background: #eee4d9;
        }

        .leadership-content {
          max-width: 850px;
          margin: auto;
          text-align: center;
        }

        .leadership-content .eyebrow {
          justify-content: center;
        }

        .leadership-content > p {
          max-width: 580px;
          margin: 25px auto;
          color: var(--muted);
          font-size: 14px;
          line-height: 2;
        }

        /* CTA */

        .about-cta {
          min-height: 570px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          color: white;
          background: var(--burgundy-dark);
        }

        .cta-background {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(37,12,23,.94), rgba(37,12,23,.68)),
            url('/images/about/about-cta.jpg') center/cover;
        }

        .cta-content {
          position: relative;
          padding-top: 100px;
          padding-bottom: 120px;
        }

        .cta-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(55px, 7vw, 90px);
          line-height: 1.05;
          font-weight: 400;
          letter-spacing: -3px;
          margin: 30px 0;
        }

        .cta-content h2 em {
          color: #d7b27e;
        }

        .cta-content > p {
          max-width: 450px;
          color: rgba(255,255,255,.65);
          font-size: 13px;
          line-height: 2;
        }

        .cta-phone {
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: white;
          font-size: 16px;
          font-weight: 700;
        }

        .cta-phone span {
          font-size: 8px;
          letter-spacing: 1.5px;
          color: #d7b27e;
        }

        .cta-footer {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          width: min(1320px, calc(100% - 100px));
          display: flex;
          justify-content: space-between;
          color: rgba(255,255,255,.6);
          font-size: 9px;
          letter-spacing: 2px;
        }

        @keyframes heroZoom {
          from { transform: scale(1.08); }
          to { transform: scale(1); }
        }

        /* RESPONSIVE */

        @media (max-width: 991px) {
          .muh-about .container {
            width: calc(100% - 50px);
          }

          .section-space {
            padding: 90px 0;
          }

          .intro-grid,
          .location-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .section-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 5px;
          }

          .location-image {
            height: 600px;
          }

          .project-facts {
            grid-template-columns: repeat(2, 1fr);
          }

          .fact:nth-child(2) {
            border-right: none;
          }

          .fact:nth-child(3),
          .fact:nth-child(4) {
            border-top: 1px solid #d6c8bb;
          }

          .lifestyle-layout {
            grid-template-columns: 1fr;
          }

          .lifestyle-main-image {
            height: 450px;
          }

          .nearby-layout {
            grid-template-columns: .8fr 1fr;
            gap: 25px;
          }
        }

        @media (max-width: 767px) {
          .muh-about .container {
            width: calc(100% - 36px);
          }

          .section-space {
            padding: 75px 0;
          }

          .about-hero {
            min-height: 680px;
            height: 90svh;
          }

          .hero-content {
            padding-top: 0;
          }

          .hero-content h1 {
            font-size: clamp(49px, 12vw, 75px);
            letter-spacing: -2px;
          }

          .hero-content > p {
            font-size: 13px;
          }

          .hero-scroll {
            display: none;
          }

          .hero-bottom,
          .cta-footer {
            width: calc(100% - 36px);
            font-size: 7px;
          }

          .hero-bottom {
            bottom: 20px;
          }

          .intro-grid,
          .location-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .editorial-heading {
            font-size: clamp(43px, 11vw, 65px);
            letter-spacing: -2px;
          }

          .intro-image {
            height: 300px;
          }

          .intro-right h3 {
            font-size: 30px;
          }

          .intro-stats {
            gap: 8px;
          }

          .intro-stats strong {
            font-size: 31px;
          }

          .intro-stats small {
            font-size: 9px;
          }

          .philosophy-section {
            min-height: 480px;
          }

          .philosophy-content h2 {
            font-size: 49px;
            letter-spacing: -2px;
          }

          .philosophy-line {
            gap: 10px;
            font-size: 7px;
          }

          .philosophy-line i {
            width: 20px;
          }

          .project-visual {
            height: 480px;
          }

          .project-glass {
            left: 15px;
            bottom: 15px;
            width: min(280px, calc(100% - 30px));
            padding: 25px;
          }

          .project-location-label {
            top: 20px;
            right: 15px;
            bottom: auto;
          }

          .project-facts {
            margin-top: 35px;
          }

          .fact {
            padding: 23px 12px;
          }

          .fact:first-child {
            padding-left: 0;
          }

          .fact strong {
            font-size: 43px;
          }

          .fact-note strong {
            font-size: 21px;
          }

          .location-image {
            height: 420px;
          }

          .advantage-item {
            grid-template-columns: 30px 1fr 20px;
          }

          .facility-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }

          .facility-card {
            min-height: 155px;
            padding: 17px;
          }

          .facility-card h4 {
            font-size: 19px;
          }

          .lifestyle-main-image {
            height: 380px;
          }

          .lifestyle-image-overlay {
            padding: 25px;
          }

          .lifestyle-image-overlay h3 {
            font-size: 40px;
          }

          .commercial-visual {
            height: 420px;
          }

          .commercial-glass {
            bottom: 15px;
            right: 15px;
            padding: 25px;
          }

          .commercial-glass h3 {
            font-size: 32px;
          }

          .commercial-grid {
            grid-template-columns: repeat(2, 1fr);
            margin-top: 30px;
          }

          .commercial-card {
            min-height: 195px;
            padding: 20px;
          }

          .commercial-card h3 {
            font-size: 21px;
            margin-top: 25px;
          }

          .investment-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .investment-card {
            min-height: 300px;
          }

          .nearby-layout {
            grid-template-columns: 1fr;
          }

          .nearby-feature {
            min-height: 340px;
          }

          .nearby-list {
            column-gap: 15px;
          }

          .nearby-item {
            min-height: 60px;
            gap: 7px;
          }

          .nearby-item strong {
            font-size: 10px;
          }

          .cta-content h2 {
            font-size: 54px;
            letter-spacing: -2px;
          }

          .cta-actions {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 380px) {
          .nearby-list {
            grid-template-columns: 1fr;
          }

          .intro-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .commercial-grid {
            grid-template-columns: 1fr;
          }

          .hero-content h1 {
            font-size: 47px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .muh-about *,
          .muh-about *::before,
          .muh-about *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }

          .about-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
        </>
    );
};

export default AboutPage;
