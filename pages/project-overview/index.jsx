"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../public/images/logo.png";
import Footer from "../../components/footer/Footer";
import WAIcon from "../../components/WAIcon/WAIcon";

const projectFacts = [
  { value: "5", unit: "Acres", note: "Total project land" },
  { value: "303", unit: "Kathas", note: "Equivalent land area" },
  { value: "80 ft", unit: "Road", note: "Front-side road width" },
];

const integratedDevelopments = [
  { number: "01", label: "HEALTHCARE", title: "Medical College", items: "A planned medical education institution." },
  { number: "02", label: "HEALTHCARE", title: "General Hospital", items: "Healthcare facilities for the wider community." },
  { number: "03", label: "HEALTHCARE", title: "Dental Hospital", items: "Dedicated dental care facilities." },
  { number: "04", label: "EDUCATION", title: "Nursing Institute", items: "A planned institute for nursing education." },
  { number: "05", label: "EDUCATION", title: "International School", items: "An education destination for families." },
  { number: "06", label: "FAITH & COMMUNITY", title: "Mosque & Madrasha", items: "Spaces for worship and religious learning." },
  { number: "07", label: "RETAIL & COMMERCE", title: "Shopping Mall", items: "A planned destination for shopping and services." },
  { number: "08", label: "RETAIL & COMMERCE", title: "Commercial Spaces", items: "Shops, restaurants and everyday services." },
];

const lifestyleFacilities = [
  { number: "01", label: "RECREATION", title: "Swimming Pools", items: "Lifestyle and recreation amenities listed in the project profile." },
  { number: "02", label: "FITNESS", title: "Male & Female Gyms", items: "Fitness facilities for residents." },
  { number: "03", label: "FAMILY & PLAY", title: "Kids’ Play Zone", items: "A dedicated play area for children." },
  { number: "04", label: "OPEN SPACE", title: "Green Zone & Park", items: "Landscaped green areas and outdoor space." },
  { number: "05", label: "WALKABILITY", title: "Long Walkway", items: "A planned pedestrian-friendly walking route." },
  { number: "06", label: "MOBILITY", title: "Bicycle Zone", items: "A designated zone for cycling." },
];

const projectHotspots = [
  { id: "hospital", label: "Hospital", short: "HOSPITAL", x: 30, y: 50, image: "/images/slider/hero-slide/img-4.1-main.png", description: "Planned multi-specialist healthcare facilities for the community." },
  { id: "dental", label: "Dental Hospital", short: "DENTAL", x: 37, y: 39, image: "/images/slider/hero-slide/img-5.1-main.png", description: "A dedicated dental care facility within the development plan." },
  { id: "nursing", label: "Nursing Institute", short: "NURSING", x: 42, y: 34, image: "/images/slider/hero-slide/img-6.jpeg", description: "A planned institute for nursing education and training." },
  { id: "school", label: "International School", short: "SCHOOL", x: 35, y: 20, image: "/images/slider/hero-slide/img-8-main.png", description: "An education destination planned for families." },
  { id: "mosque", label: "Mosque & Madrasha", short: "MOSQUE", x: 50, y: 20, image: "/images/slider/hero-slide/img-7-main.png", description: "Spaces planned for worship and religious learning." },
  { id: "residential", label: "Residential Area", short: "RESIDENCE", x: 83, y: 17, image: "/images/slider/hero-slide/img-3.1-main.png", description: "Residential spaces designed around everyday community living." },
  { id: "park", label: "Central Park", short: "PARK", x: 63, y: 40, image: "/images/slider/hero-slide/img-3.1-main.png", description: "Planned green space and outdoor recreation area." },
  { id: "commercial", label: "Commercial Spaces", short: "COMMERCE", x: 73, y: 59, image: "/images/slider/hero-slide/img-2.1-main.png", description: "Commercial spaces for shopping, dining and daily services." },
  { id: "mall", label: "Shopping Mall", short: "MALL", x: 72, y: 77, image: "/images/slider/hero-slide/img-2.1-main.png", description: "A planned retail destination within the wider project." },
  { id: "avenue", label: "Avenue 9", short: "AVENUE 9", x: 40, y: 92, image: "/images/slider/hero-slide/img-2.1-main.png", description: "A planned avenue forming part of the internal layout." },
];

const nearby = [
  "Uttara (West) Police Station",
  "Metro Rail",
  "Airport",
  "Birulia Bridge",
  "Gabtoli Bus Stand",
  "Daffodil University",
  "City University",
  "Eastern University",
  "BRAC University",
  "World University",
  "Passport Office",
  "Boat Club",
];

export default function ProjectOverviewPage() {
  const [activeHotspotId, setActiveHotspotId] = useState("hospital");
  const activeHotspot = projectHotspots.find((item) => item.id === activeHotspotId) || projectHotspots[0];
  const activeHotspotIndex = projectHotspots.findIndex((item) => item.id === activeHotspot.id);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHotspotId((current) => {
        const index = projectHotspots.findIndex((item) => item.id === current);
        return projectHotspots[(index + 1) % projectHotspots.length].id;
      });
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="uv-about-page">
      <Navbar Logo={Logo} />
      <section className="uv-overview-masterplan" aria-label="MUHAJIREEN masterplan and facilities">
        <div className="uv-mp-intro">
          <span className="uv-overview-kicker"><i /> PROJECT MASTERPLAN</span>
          <h1>Explore the plan.<br /><em>Discover MUHAJIREEN.</em></h1>
          <p>Select a marker to explore planned facilities. Details rotate automatically.</p>
        </div>
        <div className="uv-mp-layout">
          <div className="uv-mp-image-wrap">
            <Image className="uv-mp-masterplan-image" src="/images/slider/hero-slide/img-1.1.png" alt="MUHAJIREEN project masterplan with facility markers" fill priority sizes="(max-width: 800px) 100vw, 75vw" />
            {projectHotspots.map((item) => (
              <button key={item.id} type="button" className={`uv-mp-hotspot ${activeHotspotId === item.id ? "is-active" : ""}`} style={{ left: `${item.x}%`, top: `${item.y}%` }} onClick={() => setActiveHotspotId(item.id)} aria-label={`Show ${item.label} details`} aria-pressed={activeHotspotId === item.id}><span /><b>{item.short}</b></button>
            ))}
            <span className="uv-mp-image-caption">ILLUSTRATIVE MASTERPLAN</span>
          </div>
          <aside className="uv-mp-detail" aria-live="polite">
            <div className="uv-mp-detail-image"><Image key={activeHotspot.image} src={activeHotspot.image} alt={activeHotspot.label} fill sizes="(max-width: 800px) 100vw, 360px" /></div>
            <div className="uv-mp-detail-copy"><span>PROJECT INFRASTRUCTURE · {String(activeHotspotIndex + 1).padStart(2, "0")} / {String(projectHotspots.length).padStart(2, "0")}</span><h2>{activeHotspot.label}</h2><p>{activeHotspot.description}</p><button type="button" onClick={() => setActiveHotspotId(projectHotspots[(activeHotspotIndex + 1) % projectHotspots.length].id)}>Next location <b>→</b></button></div>
          </aside>
        </div>
      </section>

      <section className="uv-facts" id="project-details" aria-label="Project facts">
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
          <span className="uv-eyebrow">
            <i /> PLANNED AROUND DAILY LIFE
          </span>
          <h2>
            Living, leisure
            <br />
            and <em>community.</em>
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

      <section className="uv-project uv-section">
        <div className="uv-project-head">
          <div>
            <div className="uv-section-tag">02 / PROJECT DETAILS</div>
            <h2>MUHAJIREEN</h2>
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
          Project details are based on the supplied profile; confirm current
          specifications with the project team.
        </div>
      </section>

      <section className="uv-facilities uv-section uv-integrated-section">
        <div className="uv-section-tag">03 / INTEGRATED DEVELOPMENT</div>
        <div className="uv-facilities-head"><h2>Everything connected.<br /><em>A complete community.</em></h2><p>Planned healthcare, education, faith, retail and commercial destinations form part of the wider MUHAJIREEN development.</p></div>
        <div className="uv-facility-grid uv-integrated-grid">
          {integratedDevelopments.map((item) => <article className="uv-facility-card" key={item.number + item.title}><span className="uv-facility-number">{item.number}</span><small>{item.label}</small><h3>{item.title}</h3><p>{item.items}</p><div className="uv-card-rule" /></article>)}
        </div>
      </section>

      <section className="uv-facilities uv-section uv-lifestyle-section">
        <div className="uv-section-tag">04 / LIFESTYLE FACILITIES</div>
        <div className="uv-facilities-head"><h2>Room for living.<br /><em>Space to unwind.</em></h2><p>Explore the lifestyle and outdoor amenities listed in the project profile, planned to support recreation, wellbeing and community life.</p></div>
        <div className="uv-facility-grid uv-lifestyle-grid">
          {lifestyleFacilities.map((item) => <article className="uv-facility-card" key={item.number + item.title}><span className="uv-facility-number">{item.number}</span><small>{item.label}</small><h3>{item.title}</h3><p>{item.items}</p><div className="uv-card-rule" /></article>)}
        </div>
      </section>

      <section className="uv-connect">
        <div className="uv-connect-copy">
          <span className="uv-eyebrow">
            <i /> LOCATION & CONNECTIVITY
          </span>
          <h2>
            Beside Uttara.
            <br />
            <em>Connected to more.</em>
          </h2>
          <p>
            The project profile highlights its proximity to Uttara and lists
            road and regional connectivity considerations, including proposed or
            developing infrastructure. These items are plans described in the
            profile and may change over time.
          </p>
          <Link href="/contact" className="uv-outline-button">
            Ask about the location <span>↗</span>
          </Link>
        </div>
        <div className="uv-map">
          <Image
            src="/images/slider/hero-slide/pin-map.png"
            alt="Project location map supplied for MUHAJIREEN"
            fill
            sizes="(max-width: 900px) 100vw, 54vw"
          />
        </div>
      </section>

      <section className="uv-nearby uv-section">
        <div>
          <div className="uv-section-tag">
            04 / LOCATION & NEARBY DESTINATIONS
          </div>
          <h2>
            Within reach
            <br />
            <em>of key destinations.</em>
          </h2>
          <p>
            The profile names the following nearby places and institutions.
            Exact travel times and distances are not stated here.
          </p>
        </div>
        <div className="uv-nearby-list">
          {nearby.map((name, index) => (
            <div key={name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{name}</strong>
              <i>↗</i>
            </div>
          ))}
        </div>
      </section>

      <section className="uv-investment uv-section">
        <div className="uv-investment-head">
          <div>
            <span className="uv-eyebrow">
              <i /> INVESTMENT OVERVIEW
            </span>
            <h2>
              More ways to be part
              <br />
              <em>of the vision.</em>
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
            Discuss investment options <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="uv-cta">
        <span className="uv-eyebrow">
          <i /> LEARN MORE
        </span>
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
          Contact our team <span>↗</span>
        </Link>
      </section>

      <Footer />
      {/* <Scrollbar /> */}
      <WAIcon></WAIcon>

      <style jsx global>{`
        .uv-about-page {
          --uv-ink: #3e372e;
          --uv-muted: #766d62;
          --uv-gold: #b58b52;
          --uv-gold-light: #dec79f;
          --uv-line: rgba(145, 111, 67, 0.2);
          background: #faf7f1;
          color: var(--uv-ink);
          overflow: hidden;
        }

        .uv-about-page * {
          box-sizing: border-box;
        }

        .uv-about-page img {
          object-fit: cover;
        }

        .uv-section {
          max-width: 1440px;
          margin: 0 auto;
          padding: 100px 7%;
        }

        .uv-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #987345;
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 0.17em;
          line-height: 1.6;
        }

        .uv-eyebrow i {
          display: block;
          width: 28px;
          height: 1px;
          background: var(--uv-gold);
          flex-shrink: 0;
        }

        .uv-overview-hero {
          min-height: min(790px, 88svh);
          height: 790px;
          max-height: 900px;
          max-width: none;
          margin: 0;
          padding: 145px 8% 90px;
          display: flex;
          align-items: center;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: #d9c9ae;
        }
        .uv-overview-hero-image { object-fit: cover; object-position: center 52%; z-index: -2; }
        .uv-overview-hero-shade {
          position: absolute; inset: 0; z-index: -1;
          background: linear-gradient(90deg, rgba(35,27,19,.76) 0%, rgba(35,27,19,.48) 44%, rgba(35,27,19,.08) 100%), linear-gradient(0deg, rgba(35,27,19,.28), transparent 42%);
        }
        .uv-overview-hero-content { max-width: 760px; color: #fffaf1; position: relative; z-index: 1; }
        .uv-overview-kicker { display:flex; align-items:center; gap:12px; font-size:10px; letter-spacing:.22em; font-weight:750; color:#f0d6a9; }
        .uv-overview-kicker i { width:34px; height:1px; background:#d9b77e; display:block; }
        .uv-overview-hero h1 { color:#fffaf1; font-size:clamp(54px,7.4vw,104px); line-height:.98; letter-spacing:-.065em; font-weight:400; margin:28px 0; }
        .uv-overview-hero h1 em { color:#e6c28a; }
        .uv-overview-hero-content p { max-width:570px; font-size:15px; line-height:1.9; color:rgba(255,250,241,.88); }
        .uv-overview-hero-actions { display:flex; align-items:center; flex-wrap:wrap; gap:25px; margin-top:28px; }
        .uv-overview-hero .uv-button { margin-top:0; }
        .uv-overview-location { display:flex; align-items:center; gap:10px; color:#f3e5ce; font-size:8px; letter-spacing:.13em; font-weight:700; }
        .uv-overview-location b { width:22px; height:1px; background:#e6c28a; }
        .uv-overview-hero-index { position:absolute; right:6%; bottom:42px; display:flex; flex-direction:column; gap:6px; color:#fff8eb; text-align:right; font-size:8px; letter-spacing:.2em; }
        .uv-overview-hero-index b { color:#e6c28a; font-weight:600; }

        .uv-hero {
          max-width: 1500px;
          margin: 0 auto;
          min-height: 700px;
          padding: 115px 6.5% 78px;
          display: grid;
          grid-template-columns: 0.88fr 1.12fr;
          gap: 6%;
          align-items: center;
          position: relative;
        }

        .uv-hero-copy {
          position: relative;
          z-index: 2;
        }

        .uv-hero h1,
        .uv-story h2,
        .uv-image-story h2,
        .uv-project h2,
        .uv-facilities h2,
        .uv-connect h2,
        .uv-nearby h2,
        .uv-cta h2 {
          font-size: clamp(42px, 5.2vw, 72px);
          font-weight: 450;
          line-height: 1.01;
          letter-spacing: -0.06em;
          margin: 22px 0;
          color: #40382e;
        }

        .uv-about-page em {
          font-family: Georgia, "Times New Roman", serif;
          color: #a7814d;
          font-weight: 400;
        }

        .uv-lead {
          font-size: 16px;
          line-height: 1.8;
          color: #51483e;
          max-width: 500px;
        }

        .uv-support {
          font-size: 12px;
          line-height: 1.9;
          color: var(--uv-muted);
          max-width: 460px;
        }

        .uv-button,
        .uv-outline-button {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 26px;
          min-height: 48px;
          margin-top: 22px;
          padding: 7px 8px 7px 20px;
          border-radius: 99px;
          text-decoration: none !important;
          font-size: 11px;
          font-weight: 700;
        }

        .uv-button {
          color: #3d3021 !important;
          background: linear-gradient(135deg, #e3cea8, #bd965f);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 12px 28px rgba(130, 99, 55, 0.13);
        }

        .uv-button span,
        .uv-outline-button span {
          display: grid;
          place-items: center;
          width: 31px;
          height: 31px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.62);
          font-size: 16px;
        }

        .uv-hero-foot {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 42px;
          color: #987b56;
          font-size: 8px;
          font-weight: 750;
          letter-spacing: 0.12em;
          flex-wrap: wrap;
        }

        .uv-hero-foot b {
          height: 1px;
          width: 24px;
          background: var(--uv-gold);
        }

        .uv-hero-visual {
          height: 510px;
          position: relative;
          border: 7px solid rgba(255, 255, 255, 0.8);
          border-radius: 4px 65px 4px 4px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(75, 59, 38, 0.14);
          background: #e7ddce;
        }

        .uv-hero-visual:after {
          content: "";
          position: absolute;
          inset: 35% 0 0;
          background: linear-gradient(transparent, rgba(30, 26, 21, 0.36));
        }

        .uv-visual-glass {
          position: absolute;
          z-index: 2;
          bottom: 22px;
          left: 22px;
          right: 22px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 18px 20px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 15px;
          background: rgba(255, 250, 241, 0.77);
          backdrop-filter: blur(5px);
        }

        .uv-visual-glass small {
          font-size: 8px;
          letter-spacing: 0.17em;
          color: #987345;
          font-weight: 750;
        }

        .uv-visual-glass strong {
          font:
            28px Georgia,
            serif;
        }

        .uv-visual-glass span {
          font-size: 10px;
          color: #74685a;
        }

        .uv-vertical-label {
          position: absolute;
          z-index: 2;
          top: 22px;
          right: 17px;
          writing-mode: vertical-rl;
          color: white;
          font-size: 8px;
          letter-spacing: 0.2em;
          text-shadow: 0 1px 8px #51483e;
        }

        .uv-facts {
          max-width: 1250px;
          margin: -20px auto 0;
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(20px);
          box-shadow: 0 18px 50px rgba(80, 62, 38, 0.07);
          padding: 23px 28px;
        }

        .uv-fact {
          padding: 0 24px;
          border-right: 1px solid var(--uv-line);
        }

        .uv-fact:first-child {
          padding-left: 8px;
        }

        .uv-fact:last-child {
          border: 0;
        }

        .uv-fact strong {
          display: block;
          font:
            35px Georgia,
            serif;
          color: #a7814d;
        }

        .uv-fact strong em {
          font:
            12px Arial,
            sans-serif;
          color: #8b7962;
          letter-spacing: 0;
        }

        .uv-fact span {
          display: block;
          margin-top: 5px;
          color: var(--uv-muted);
          font-size: 10px;
          line-height: 1.5;
        }

        .uv-section-tag {
          padding-bottom: 17px;
          border-bottom: 1px solid var(--uv-line);
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 0.17em;
          color: #987345;
        }

        .uv-story-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 9%;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.48);
          backdrop-filter: blur(18px);
          box-shadow: 0 18px 45px rgba(91, 70, 43, 0.05);
          margin-top: 24px;
        }

        .uv-story h2 {
          margin: 0;
        }

        .uv-story-copy p {
          font-size: 13px;
          line-height: 1.95;
          color: var(--uv-muted);
          margin: 0 0 14px;
        }

        .uv-image-story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: linear-gradient(
            135deg,
            rgba(245, 236, 222, 0.78),
            rgba(255, 255, 255, 0.52)
          );
          border-top: 1px solid rgba(255, 255, 255, 0.9);
          border-bottom: 1px solid rgba(255, 255, 255, 0.9);
        }

        .uv-image-story-photo {
          position: relative;
          min-height: 520px;
        }

        .uv-image-story-copy {
          align-self: center;
          padding: 70px clamp(35px, 7vw, 105px);
        }

        .uv-image-story h2 {
          font-size: clamp(38px, 4.3vw, 60px);
        }

        .uv-image-story-copy > p {
          font-size: 13px;
          line-height: 1.9;
          color: var(--uv-muted);
          max-width: 480px;
        }

        .uv-mini-points {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          margin-top: 30px;
          padding-top: 17px;
          border-top: 1px solid var(--uv-line);
        }

        .uv-mini-points span {
          font-size: 9px;
          color: #a7814d;
        }

        .uv-mini-points b {
          display: block;
          color: #5d5143;
          margin-top: 5px;
          font-size: 10px;
        }

        .uv-project-highlights {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 32px;
        }

        .uv-project-highlights article {
          padding: 25px 24px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.56);
          box-shadow: 0 12px 32px rgba(91, 70, 43, 0.045);
        }

        .uv-project-highlights small {
          display: block;
          font-size: 8px;
          letter-spacing: 0.16em;
          font-weight: 750;
          color: #987345;
        }

        .uv-project-highlights strong {
          display: block;
          margin: 12px 0 9px;
          font:
            22px Georgia,
            serif;
          color: #473d31;
        }

        .uv-project-highlights p {
          margin: 0;
          color: var(--uv-muted);
          font-size: 10px;
          line-height: 1.8;
        }

        .uv-project-head {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 35px;
          margin-bottom: 32px;
        }

        .uv-project-head h2 {
          margin: 18px 0 8px;
        }

        .uv-project-head p {
          font-size: 12px;
          line-height: 1.8;
          color: var(--uv-muted);
          max-width: 460px;
        }

        .uv-land-card {
          min-width: 225px;
          padding: 20px 23px;
          border: 1px solid white;
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.64);
          box-shadow: 0 12px 35px rgba(91, 70, 43, 0.06);
        }

        .uv-land-card small {
          font-size: 8px;
          letter-spacing: 0.17em;
          color: #987345;
          font-weight: 750;
        }

        .uv-land-card strong {
          display: block;
          font:
            43px Georgia,
            serif;
          color: #a7814d;
          margin: 7px 0;
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
          color: var(--uv-muted);
          font-style: normal;
          line-height: 1.7;
        }

        .uv-land-card i {
          margin-top: 8px;
          font-size: 9px;
        }

        .uv-masterplan {
          height: 470px;
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          border: 7px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 20px 55px rgba(80, 62, 38, 0.09);
        }

        .uv-masterplan span {
          position: absolute;
          bottom: 18px;
          left: 18px;
          padding: 10px 14px;
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 50px;
          background: rgba(255, 250, 241, 0.82);
          backdrop-filter: blur(12px);
          font-size: 8px;
          letter-spacing: 0.15em;
          color: #705633;
        }

        .uv-project-note {
          margin-top: 12px;
          color: #958777;
          font-size: 9px;
        }

        .uv-facilities {
          padding-top: 70px;
          padding-bottom: 100px;
          background: linear-gradient(135deg, #f7f0e5, #fcfaf6);
        }

        .uv-facilities-head {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 35px;
          margin: 30px 0;
        }

        .uv-facilities h2 {
          margin: 0;
        }

        .uv-facilities-head p {
          max-width: 410px;
          margin: 0;
          color: var(--uv-muted);
          font-size: 11px;
          line-height: 1.9;
        }

        .uv-facility-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .uv-facility-card {
          position: relative;
          min-height: 205px;
          padding: 24px 20px;
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.58);
          backdrop-filter: blur(18px);
          box-shadow: 0 15px 38px rgba(91, 70, 43, 0.045);
        }

        .uv-facility-number {
          position: absolute;
          right: 25px;
          top: 24px;
          color: #b49a75;
          font-size: 10px;
        }

        .uv-facility-card small {
          font-size: 8px;
          font-weight: 750;
          letter-spacing: 0.16em;
          color: #987345;
        }

        .uv-facility-card h3 {
          font:
            22px Georgia,
            serif;
          color: #473d31;
          margin: 13px 0;
        }

        .uv-facility-card p {
          font-size: 11px;
          line-height: 1.9;
          color: var(--uv-muted);
          max-width: 440px;
          margin: 0;
        }

        .uv-card-rule {
          height: 1px;
          width: 45px;
          background: var(--uv-gold);
          margin-top: 22px;
        }

        .uv-connect {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 6%;
          align-items: center;
          padding: 85px 7%;
          background: #f0e8dc;
        }

        .uv-connect h2 {
          font-size: clamp(38px, 4.5vw, 60px);
        }

        .uv-connect-copy > p {
          font-size: 12px;
          line-height: 1.9;
          color: var(--uv-muted);
          max-width: 450px;
        }

        .uv-outline-button {
          border: 1px solid rgba(157, 119, 68, 0.42);
          color: #705633 !important;
        }

        .uv-map {
          position: relative;
          height: 390px;
          overflow: hidden;
          border: 7px solid rgba(255, 255, 255, 0.82);
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 18px 45px rgba(91, 70, 43, 0.09);
        }

        .uv-map :global(img) {
          object-fit: contain;
        }

        .uv-nearby {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 8%;
          align-items: start;
        }

        .uv-nearby h2 {
          font-size: clamp(36px, 4.4vw, 58px);
        }

        .uv-nearby > div:first-child > p {
          font-size: 12px;
          line-height: 1.9;
          color: var(--uv-muted);
          max-width: 370px;
        }

        .uv-nearby-list {
          border-top: 1px solid var(--uv-line);
        }

        .uv-nearby-list > div {
          display: grid;
          grid-template-columns: 35px 1fr 20px;
          gap: 12px;
          align-items: center;
          padding: 14px 0;
          border-bottom: 1px solid var(--uv-line);
        }

        .uv-nearby-list span {
          font-size: 9px;
          color: #ae8958;
        }

        .uv-nearby-list strong {
          font-size: 11px;
          font-weight: 550;
          color: #54483b;
        }

        .uv-nearby-list i {
          font-style: normal;
          color: #ad8956;
          font-size: 13px;
        }

        .uv-investment {
          background: linear-gradient(180deg, #faf7f1 0%, #f1e8da 100%);
        }

        .uv-investment-head {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          align-items: end;
          gap: 8%;
          margin-bottom: 34px;
        }

        .uv-investment-head h2 {
          font-size: clamp(38px, 4.5vw, 60px);
          font-weight: 450;
          line-height: 1.05;
          letter-spacing: -0.055em;
          margin: 18px 0 0;
          color: #423a31;
        }

        .uv-investment-head > p {
          max-width: 470px;
          margin: 0 0 5px;
          font-size: 13px;
          line-height: 1.9;
          color: var(--uv-muted);
        }

        .uv-investment-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .uv-investment-card {
          position: relative;
          overflow: hidden;
          min-height: 290px;
          padding: 25px 23px 22px;
          border: 1px solid rgba(255, 255, 255, 0.92);
          border-radius: 20px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.8),
            rgba(255, 250, 241, 0.5)
          );
          backdrop-filter: blur(18px);
          box-shadow: 0 18px 45px rgba(91, 70, 43, 0.07);
        }

        .uv-investment-card:before {
          content: "";
          position: absolute;
          top: 0;
          left: 23px;
          right: 23px;
          height: 2px;
          background: linear-gradient(
            90deg,
            rgba(181, 139, 82, 0.8),
            transparent
          );
        }

        .uv-investment-card-featured {
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.92),
            rgba(231, 215, 188, 0.5)
          );
          box-shadow: 0 22px 55px rgba(91, 70, 43, 0.11);
        }

        .uv-investment-number {
          position: absolute;
          top: 20px;
          right: 22px;
          color: rgba(165, 129, 79, 0.6);
          font:
            20px Georgia,
            serif;
        }

        .uv-investment-icon {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          margin-bottom: 22px;
          border: 1px solid rgba(181, 139, 82, 0.3);
          border-radius: 14px;
          color: #a98555;
          background: rgba(255, 255, 255, 0.62);
          font-size: 23px;
        }

        .uv-investment-card > small {
          font-size: 8px;
          letter-spacing: 0.14em;
          color: #9b7545;
          font-weight: 700;
        }

        .uv-investment-card h3 {
          margin: 12px 0 10px;
          font:
            23px/1.2 Georgia,
            serif;
          color: #4a4034;
        }

        .uv-investment-card p {
          margin: 0;
          color: var(--uv-muted);
          font-size: 11px;
          line-height: 1.8;
        }

        .uv-investment-note {
          display: block;
          margin-top: 16px;
          padding-top: 11px;
          border-top: 1px solid var(--uv-line);
          font-size: 9px;
          color: #8b765b;
        }

        .uv-investment-disclaimer {
          display: grid;
          grid-template-columns: 150px 1fr auto;
          align-items: center;
          gap: 18px;
          margin-top: 22px;
          padding: 20px 22px;
          border: 1px solid rgba(181, 139, 82, 0.19);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.46);
        }

        .uv-investment-disclaimer > span {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.13em;
          color: #9b7545;
        }

        .uv-investment-disclaimer p {
          margin: 0;
          font-size: 10px;
          line-height: 1.8;
          color: #786d61;
        }

        .uv-investment-disclaimer .uv-outline-button {
          white-space: nowrap;
          margin: 0;
          padding: 7px 8px 7px 14px;
          gap: 12px;
          min-height: 40px;
        }

        .uv-cta {
          text-align: center;
          padding: 85px 20px 100px;
          background:
            radial-gradient(
              ellipse at 50% 0,
              rgba(201, 164, 106, 0.17),
              transparent 58%
            ),
            #faf7f1;
        }

        .uv-cta .uv-eyebrow {
          justify-content: center;
        }

        .uv-cta h2 {
          font-size: clamp(38px, 4.5vw, 58px);
        }

        .uv-cta p {
          max-width: 460px;
          margin: 0 auto;
          color: var(--uv-muted);
          font-size: 12px;
          line-height: 1.9;
        }

        @media (max-width: 1050px) {
          .uv-facility-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 950px) {
          .uv-investment-head {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .uv-investment-grid {
            grid-template-columns: 1fr 1fr;
          }
          .uv-investment-card:last-child {
            grid-column: 1 / -1;
          }
          .uv-investment-disclaimer {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }

        @media (max-width: 600px) {
          .uv-investment-head h2 {
            font-size: 40px;
          }
          .uv-investment-grid {
            grid-template-columns: 1fr;
          }
          .uv-investment-card:last-child {
            grid-column: auto;
          }
          .uv-investment-card {
            min-height: 0;
            padding: 23px 19px;
          }
          .uv-investment-disclaimer {
            padding: 17px;
          }
          .uv-investment-disclaimer .uv-outline-button {
            justify-self: start;
            white-space: normal;
          }
        }

        @media (max-width: 950px) {
          .uv-overview-hero { height: 720px; min-height: 680px; padding: 125px 7% 100px; }
          .uv-overview-hero-shade { background: linear-gradient(90deg, rgba(35,27,19,.72), rgba(35,27,19,.25)), linear-gradient(0deg, rgba(35,27,19,.3), transparent 55%); }
          .uv-hero {
            grid-template-columns: 1fr;
            padding-top: 100px;
            gap: 35px;
          }
          .uv-hero-visual {
            height: 440px;
          }
          .uv-facts {
            margin: 0 24px;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .uv-fact {
            border-right: 0;
            padding: 8px 12px !important;
          }
          .uv-fact:nth-child(odd) {
            border-right: 1px solid var(--uv-line);
          }
          .uv-story-grid,
          .uv-nearby {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          .uv-image-story,
          .uv-connect {
            grid-template-columns: 1fr;
          }
          .uv-image-story-photo {
            min-height: 360px;
          }
          .uv-image-story-copy {
            padding: 55px 7%;
          }
          .uv-connect {
            padding: 65px 5%;
          }
          .uv-map {
            height: 340px;
          }
        }

        @media (max-width: 600px) {
          .uv-overview-hero { height: 690px; min-height: 690px; padding: 115px 22px 105px; align-items: center; }
          .uv-overview-hero-image { object-position: 58% center; }
          .uv-overview-hero h1 { font-size: clamp(48px, 13vw, 66px); }
          .uv-overview-hero-content p { font-size: 13px; }
          .uv-overview-hero-actions { align-items: flex-start; flex-direction: column; gap: 18px; }
          .uv-overview-hero-index { right: 22px; bottom: 22px; }
          .uv-section {
            padding: 62px 20px;
          }
          .uv-hero {
            padding: 90px 20px 48px;
            min-height: 0;
          }
          .uv-hero h1 {
            font-size: 46px;
          }
          .uv-lead {
            font-size: 14px;
          }
          .uv-hero-visual {
            height: 320px;
            border-radius: 4px 38px 4px 4px;
            border-width: 5px;
          }
          .uv-visual-glass {
            left: 12px;
            right: 12px;
            bottom: 12px;
            padding: 13px 15px;
          }
          .uv-visual-glass strong {
            font-size: 24px;
          }
          .uv-hero-foot {
            margin-top: 26px;
            font-size: 7px;
          }
          .uv-facts {
            margin: 0 16px;
            padding: 16px 12px;
            gap: 10px;
            border-radius: 14px;
          }
          .uv-fact strong {
            font-size: 28px;
          }
          .uv-fact strong em {
            font-size: 10px;
          }
          .uv-fact span {
            font-size: 9px;
          }
          .uv-story h2,
          .uv-image-story h2,
          .uv-project h2,
          .uv-facilities h2,
          .uv-connect h2,
          .uv-nearby h2,
          .uv-cta h2 {
            font-size: 40px;
          }
          .uv-story-grid {
            gap: 15px;
          }
          .uv-image-story-photo {
            min-height: 270px;
          }
          .uv-image-story-copy {
            padding: 45px 20px;
          }
          .uv-mini-points {
            gap: 12px;
          }
          .uv-project-head,
          .uv-facilities-head {
            display: block;
          }
          .uv-project-highlights {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .uv-project-highlights article {
            padding: 20px;
          }
          .uv-land-card {
            margin-top: 20px;
          }
          .uv-masterplan {
            height: 280px;
            border-width: 4px;
            border-radius: 14px;
          }
          .uv-facility-grid {
            grid-template-columns: 1fr;
          }
          .uv-facility-card {
            min-height: 185px;
            padding: 23px;
          }
          .uv-facility-card h3 {
            font-size: 24px;
          }
          .uv-map {
            height: 270px;
            border-width: 4px;
          }
          .uv-nearby-list > div {
            grid-template-columns: 28px 1fr 15px;
          }
          .uv-nearby-list strong {
            font-size: 10px;
          }
          .uv-cta {
            padding: 65px 20px 75px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .uv-about-page * {
            scroll-behavior: auto !important;
            transition: none !important;
          }
        }
uv-overview-masterplan { padding: 110px 6.5% 75px; background: #101b25; color: #fffaf1; }
        .uv-mp-intro { max-width: 900px; margin: 0 auto 36px; }
        .uv-mp-intro h1 { margin: 20px 0 14px; font-size: clamp(42px, 6vw, 78px); line-height: .98; letter-spacing: -.055em; font-weight: 400; }
        .uv-mp-intro h1 em { color: #e6c28a; font-family: Georgia, serif; font-weight: 400; }
        .uv-mp-intro p { color: rgba(255,250,241,.72); font-size: 13px; line-height: 1.8; }
        .uv-mp-layout { max-width: 1500px; margin: auto; }
        .uv-mp-image-wrap { position: relative; width: 100%; aspect-ratio: 16 / 9; min-height: 0; overflow: hidden; border: 1px solid rgba(230,194,138,.35); border-radius: 18px; background: #182632; }
        .uv-mp-masterplan-image { object-fit: contain; }
        .uv-mp-hotspot { position: absolute; z-index: 2; display: flex; align-items: center; gap: 7px; transform: translate(-50%,-50%); border: 0; padding: 0; background: transparent; color: white; cursor: pointer; }
        .uv-mp-hotspot span { width: 13px; height: 13px; flex: 0 0 13px; border: 2px solid white; border-radius: 50%; background: #d6a85e; box-shadow: 0 0 0 5px rgba(214,168,94,.2); }
        .uv-mp-hotspot b { padding: 6px 8px; border-radius: 4px; background: rgba(7,18,27,.78); border: 1px solid rgba(255,255,255,.28); font-size: 8px; letter-spacing: .08em; white-space: nowrap; }
        .uv-mp-hotspot.is-active span { background: #fff; box-shadow: 0 0 0 8px rgba(230,194,138,.32); }
        .uv-mp-hotspot.is-active b { background: #e6c28a; color: #101b25; border-color: #e6c28a; }
        .uv-mp-image-caption { position: absolute; bottom: 14px; left: 16px; color: rgba(255,255,255,.8); font-size: 8px; letter-spacing: .15em; text-shadow: 0 1px 6px #000; }
        .uv-mp-detail { display: grid; grid-template-columns: 260px minmax(0,1fr); gap: 24px; align-items: center; margin-top: 18px; padding: 18px; border: 1px solid rgba(230,194,138,.25); border-radius: 16px; background: rgba(255,255,255,.045); }
        .uv-mp-detail-image { position: relative; width: 100%; aspect-ratio: 4 / 3; overflow: hidden; border-radius: 10px; background: #202e39; }
        .uv-mp-detail-image img { object-fit: cover; }
        .uv-mp-detail-copy > span { color: #e6c28a; font-size: 8px; letter-spacing: .15em; }
        .uv-mp-detail-copy h2 { margin: 10px 0; font-size: clamp(24px,3vw,38px); font-weight: 400; }
        .uv-mp-detail-copy p { max-width: 650px; margin: 0; color: rgba(255,250,241,.72); font-size: 12px; line-height: 1.8; }
        .uv-mp-detail-copy button { margin-top: 16px; padding: 10px 14px; border: 1px solid rgba(230,194,138,.5); border-radius: 30px; background: transparent; color: #e6c28a; font-size: 10px; cursor: pointer; }
        .uv-mp-detail-copy button b { margin-left: 12px; }
        .uv-integrated-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
        .uv-lifestyle-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
        .uv-lifestyle-section { background: #fffdf9; }
        @media (max-width: 800px) { .uv-overview-masterplan { padding: 88px 18px 50px; } .uv-mp-image-wrap { aspect-ratio: 4 / 3; border-radius: 10px; } .uv-mp-hotspot { gap: 0; } .uv-mp-hotspot b { display: none; } .uv-mp-hotspot.is-active b { display: block; position: absolute; left: 15px; top: -12px; } .uv-mp-detail { grid-template-columns: 1fr; gap: 16px; padding: 13px; } .uv-mp-detail-image { aspect-ratio: 16 / 9; } .uv-integrated-grid { grid-template-columns: 1fr; } .uv-lifestyle-grid { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px; } .uv-lifestyle-grid .uv-facility-card { min-height: 175px; padding: 20px 15px; } .uv-lifestyle-grid .uv-facility-card h3 { font-size: 20px; } }

      `}</style>
    </main>
  );
}
      
