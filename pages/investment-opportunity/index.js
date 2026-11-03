"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from '/public/images/logo.png'
import Contactpage from '../../components/Contactpage/Contactpage'
import Navbar from "../../components/Navbar/Navbar";

import Footer from "../../components/footer/Footer";
import WAIcon from "../../components/WAIcon/WAIcon";

const investmentPlans = [
  {
    id: "residential",
    number: "01",
    label: "RESIDENTIAL OWNERSHIP",
    title: "Residential 2 Flat Land Share Ownership",
    description:
      "Explore the residential ownership option described in the MUHAJIREEN investment proposal. The proposal refers to land shares associated with two residential flats; confirm the legal structure, allocation and delivery terms with the MUHAJIREEN team before making a decision.",
    image: "/images/slider/hero-slide/img-3.1-main.png",
    options: [
      { share: "01 Share", title: "2 Flat Land Shares", detail: "Approx. 1,300 sft per flat, as stated in the proposal" },
      { share: "03 Shares", title: "6 Flat Land Shares", detail: "Approx. 1,300 sft per flat, as stated in the proposal" },
    ],
    points: ["Residential-focused ownership option", "Share allocation to be confirmed in writing", "Review title, registration and handover terms"],
  },
  {
    id: "profit",
    number: "02",
    label: "COMMERCIAL OPPORTUNITY",
    title: "Monthly Profit Opportunity from Commercial Entities",
    description:
      "The proposal describes a recurring-profit opportunity connected with shares in commercial and institutional facilities. Actual distributions, if any, depend on the project's documented terms and financial performance; no return is guaranteed by this page.",
    image: "/images/slider/hero-slide/img-2.1-main.png",
    options: [
      { share: "01 Share", title: "One Share Option", detail: "Participation terms and distribution basis require confirmation" },
      { share: "03 Shares", title: "Three Share Option", detail: "Illustrative 3-share selection; terms require confirmation" },
    ],
    facilities: ["Shopping Mall", "Commercial Office Spaces", "Multi-specialized General Hospital", "Dental Hospital", "Nursing Institute", "International School"],
    points: ["Commercial and institutional categories listed in the proposal", "Ask how profit is calculated and distributed", "Review operating costs, risks and exit provisions"],
  },
  {
    id: "membership",
    number: "03",
    label: "LIFETIME MEMBERSHIP",
    title: "Lifetime Membership Access from Listed Entities",
    description:
      "The proposal describes lifetime membership access for selected facilities. Ask for the written membership policy, eligible family members, service scope, exclusions, transferability and any additional service charges before subscribing.",
    image: "/images/slider/hero-slide/img-4.1-main.png",
    options: [
      { share: "01 Share", title: "Membership for 1 Person", detail: "Lifetime access subject to the official membership terms" },
      { share: "03 Shares", title: "Membership for 3 People", detail: "Eligibility and access conditions to be confirmed" },
    ],
    facilities: ["Shopping Mall", "Commercial Office Spaces", "Multi-specialized General Hospital", "Nursing Institute", "Dental Hospital", "International School"],
    points: ["Membership benefit rather than a stated cash return", "Confirm which services are included", "Request official terms and conditions in writing"],
  },
];

const dueDiligence = [
  { n: "01", title: "Understand the share", text: "Ask what a share legally represents, what asset or entity it relates to, and whether it conveys ownership, membership, profit participation or a combination." },
  { n: "02", title: "Review the documents", text: "Request the current proposal, agreements, land and project documents, payment schedule, registration details and any applicable approvals." },
  { n: "03", title: "Clarify returns and costs", text: "For any profit-linked option, review the calculation method, distribution timing, expenses, risks and whether returns are variable or guaranteed by contract." },
  { n: "04", title: "Know your exit rights", text: "Confirm transfer, resale, refund, cancellation, inheritance and dispute-resolution terms before committing funds." },
];

export default function InvestmentOpportunityPage() {
  const [activePlan, setActivePlan] = useState("residential");
  const [activeShare, setActiveShare] = useState(0);
  const selectedPlan = investmentPlans.find((plan) => plan.id === activePlan) || investmentPlans[0];
  const selectedOption = selectedPlan.options[activeShare] || selectedPlan.options[0];

  const selectPlan = (id) => {
    setActivePlan(id);
    setActiveShare(0);
  };

  const [width, setWidth] = useState(0);


  useEffect(() => {
    setWidth(window.innerWidth);

  });

  return (
    <main className="uv-investment-page">
      <Navbar Logo={Logo}
      />
      <section style={{ marginTop: width > 768 ? "" : "30px" }} className="uv-investment-hero">
        <div className="uv-investment-orbit uv-investment-orbit--one" />
        <div className="uv-investment-orbit uv-investment-orbit--two" />
        <div className="uv-investment-shell">
          <div className="uv-investment-hero-copy">
            <span className="uv-investment-eyebrow"><i /> INVEST WITH MUHAJIREEN</span>
            <h1> <span style={{ color: 'var(--uv-ink)' }}>More Than an Investment. </span> <br /><em>A Share in the Vision.</em></h1>
            <p>Explore residential ownership, commercial profit opportunities and lifetime membership options outlined in the MUHAJIREEN investment proposal.</p>
            <div className="uv-investment-hero-actions">
              <a href="#opportunities" className="uv-investment-button uv-investment-button--gold">Explore Opportunities <b>↓</b></a>
              <Link href="/contact" className="uv-investment-button uv-investment-button--glass">Speak to Our Team <b>↗</b></Link>
            </div>
            <div className="uv-investment-trust-line"><span /> CLARITY FIRST · DOCUMENTED TERMS · INFORMED DECISIONS</div>
          </div>
          <div className="uv-investment-hero-card">
            <img src="/images/slider/hero-slide/img-3.1-main.png" alt="MUHAJIREEN residential development concept" />
            <div className="uv-investment-hero-card-shade" />
            <div className="uv-investment-hero-card-label"><small>THE MUHAJIREEN VISION</small><strong>Build a future<br />with purpose.</strong><span>Ownership · Opportunity · Access</span></div>
            <div className="uv-investment-floating-note"><span>03</span><div><b>Opportunity Categories</b><small>Explore the options below</small></div></div>
          </div>
        </div>
      </section>

      <section className="uv-investment-overview uv-investment-shell">
        <div className="uv-investment-section-heading"><span className="uv-investment-kicker">A CLEARER PICTURE</span><h2> <span style={{ color: 'var(--uv-ink)' }}>Explore the opportunity </span><br /><em>that fits your priorities.</em></h2><p>Each category has a different purpose. Review the available options, ask questions and assess the written terms before deciding which—if any—is right for you.</p></div>
        <div className="uv-investment-overview-grid">
          <article className="uv-investment-glass-card"><span className="uv-investment-card-number">01</span><div className="uv-investment-card-icon">⌂</div><h3> <span style={{ color: 'var(--uv-ink)' }}>Residential Ownership</span></h3><p>Explore the proposal's residential flat land-share option and clarify exactly what ownership rights and allocations apply.</p><a href="#opportunities" onClick={() => selectPlan("residential")}>Explore ownership <b>↗</b></a></article>
          <article className="uv-investment-glass-card"><span className="uv-investment-card-number">02</span><div className="uv-investment-card-icon">◈</div><h3> <span style={{ color: 'var(--uv-ink)' }}>Commercial Opportunity</span></h3><p>Review the profit-linked option associated with the listed commercial and institutional facilities, including its risks and distribution terms.</p><a href="#opportunities" onClick={() => selectPlan("profit")}>Explore commercial option <b>↗</b></a></article>
          <article className="uv-investment-glass-card"><span className="uv-investment-card-number">03</span><div className="uv-investment-card-icon">✧</div><h3> <span style={{ color: 'var(--uv-ink)' }}>Lifetime Membership</span></h3><p>Understand the proposed membership benefits, eligible users, service scope and any exclusions or additional charges.</p><a href="#opportunities" onClick={() => selectPlan("membership")}>Explore membership <b>↗</b></a></article>
        </div>
      </section>

      <section className="uv-investment-explorer" id="opportunities">
        <div className="uv-investment-shell">
          <div className="uv-investment-section-heading uv-investment-section-heading--center"><span className="uv-investment-kicker">INVESTOR BENEFITS</span><h2 style={{ color: 'var(--uv-ink)' }}>What does each option <em>include?</em></h2><p>Select a category to view its share options and the facilities or considerations associated with it.</p></div>
          <div className="uv-investment-tabs" role="tablist" aria-label="Investment categories">
            {investmentPlans.map((plan) => <button key={plan.id} type="button" role="tab" aria-selected={activePlan === plan.id} className={`uv-investment-tab ${activePlan === plan.id ? "is-active" : ""}`} onClick={() => selectPlan(plan.id)}><span>{plan.number}</span>{plan.label}<b>↗</b></button>)}
          </div>
          <article className="uv-investment-feature" key={selectedPlan.id}>
            <div className="uv-investment-feature-visual"><img src={selectedPlan.image} alt={`${selectedPlan.label} visual`} /><div className="uv-investment-feature-shade" /><div className="uv-investment-feature-caption"><small>MUHAJIREEN · {selectedPlan.number}</small><strong>{selectedPlan.label}</strong></div></div>
            <div className="uv-investment-feature-content">
              <div className="uv-investment-feature-top"><span className="uv-investment-kicker">CATEGORY {selectedPlan.number}</span><span className="uv-investment-outline-pill">PROPOSAL OVERVIEW</span></div>
              <h3 style={{ color: 'var(--uv-ink)' }}>{selectedPlan.title}</h3><p className="uv-investment-description">{selectedPlan.description}</p>
              <div className="uv-investment-option-heading"><span>AVAILABLE SHARE OPTIONS</span><small>Choose to compare</small></div>
              <div className="uv-investment-options">{selectedPlan.options.map((option, index) => <button type="button" key={option.share} className={`uv-investment-option ${activeShare === index ? "is-selected" : ""}`} onClick={() => setActiveShare(index)} aria-pressed={activeShare === index}><span className="uv-investment-radio">{activeShare === index && <i />}</span><span className="uv-investment-option-copy"><small>{option.share}</small><strong>{option.title}</strong><em>{option.detail}</em></span><b className="uv-investment-option-arrow">↗</b></button>)}</div>
              <div className="uv-investment-selection-summary"><span>SELECTED OPTION</span><strong>{selectedOption.title}</strong><p>{selectedOption.detail}</p></div>
              {selectedPlan.facilities && <div className="uv-investment-facilities"><span className="uv-investment-option-heading-label">{activePlan === "membership" ? "FACILITIES LISTED FOR MEMBERSHIP ACCESS" : "COMMERCIAL & INSTITUTIONAL CATEGORIES"}</span><div>{selectedPlan.facilities.map((facility) => <span key={facility}><i>✓</i>{facility}</span>)}</div></div>}
              <ul className="uv-investment-considerations">{selectedPlan.points.map((point) => <li key={point}><i>✓</i>{point}</li>)}</ul>
              <Link href="/contact" className="uv-investment-inline-cta">Request details for this option <b>↗</b></Link>
            </div>
          </article>
        </div>
      </section>

      <section className="uv-investment-process uv-investment-shell">
        <div className="uv-investment-section-heading"><span className="uv-investment-kicker">INVEST WITH CONFIDENCE</span><h2 style={{ color: 'var(--uv-ink)' }}>Questions worth asking<br /><em>before you commit.</em></h2><p>A thoughtful investment decision starts with transparent information and a clear understanding of the documents—not assumptions.</p></div>
        <div className="uv-investment-diligence-grid">{dueDiligence.map((item) => <article className="uv-investment-diligence-card" key={item.n}><span>{item.n}</span><h3 style={{ color: 'var(--uv-ink)' }}>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="uv-investment-steps-wrap"><div className="uv-investment-shell uv-investment-steps"><div><span className="uv-investment-kicker">YOUR NEXT STEP</span><h2 style={{ color: 'var(--uv-ink)' }}>Get the details.<br /><em>Make an informed choice.</em></h2><p>Talk to the MUHAJIREEN team to request the latest proposal, share details, eligibility criteria and applicable legal documents.</p></div><div className="uv-investment-steps-list"><div><span >01</span><p><b>Tell us your interest</b><small>Residential, commercial or membership</small></p></div><div><span>02</span><p><b>Review the information</b><small>Ask for current terms and documents</small></p></div><div><span>03</span><p><b>Decide after due diligence</b><small>Proceed only when the terms are clear</small></p></div><Link href="/contact" className="uv-investment-button uv-investment-button--gold">Request Investment Details <b>↗</b></Link></div></div></section>

      <section className="uv-investment-disclaimer uv-investment-shell"><span>IMPORTANT INFORMATION</span><p>This page summarizes categories and options described in the supplied MUHAJIREEN section. It does not constitute an offer, financial advice, or a guarantee of profit, appreciation, availability or membership benefits. Share sizes, eligibility, pricing, payment terms, legal rights, approvals, distributions and other conditions must be verified against current official documents and the applicable agreement. Please conduct independent legal and financial due diligence before making a commitment.</p></section>

      <Footer />
      {/* <Scrollbar /> */}
      <WAIcon></WAIcon>
      <style jsx global>{`
  .uv-investment-page {
    --uv-ink: #30251d;
    --uv-muted: #6b5e50;
    --uv-gold: #a77c43;
    --uv-gold-light: #d9bd8d;
    --uv-cream: #f4ede3;
    --uv-glass: rgba(255, 252, 247, 0.64);
    color: var(--uv-ink);
    background: #f4ede3;
    overflow: hidden;
    font-family: inherit;
  }

  .uv-investment-page *,
  .uv-investment-page *:before,
  .uv-investment-page *:after {
    box-sizing: border-box;
  }

  .uv-investment-shell {
    width: min(1120px, calc(100% - 48px));
    margin-inline: auto;
  }

  .uv-investment-hero {
    position: relative;
    isolation: isolate;
    padding: clamp(70px, 9vw, 125px) 0 86px;
    background: 
      radial-gradient(ellipse at 12% 15%, rgba(255, 255, 255, 0.94), transparent 38%),
      radial-gradient(ellipse at 87% 80%, rgba(213, 185, 144, 0.3), transparent 38%),
      linear-gradient(135deg, #f5eee4, #e9ddcc 55%, #f8f2e9);
  }

  .uv-investment-orbit {
    position: absolute;
    z-index: -1;
    border: 1px solid rgba(167, 124, 67, 0.16);
    border-radius: 50%;
    pointer-events: none;
  }

  .uv-investment-orbit--one {
    width: 420px;
    height: 420px;
    right: -170px;
    top: -180px;
  }

  .uv-investment-orbit--two {
    width: 320px;
    height: 320px;
    left: -180px;
    bottom: -160px;
  }

  .uv-investment-hero .uv-investment-shell {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
    gap: clamp(35px, 7vw, 90px);
  }

  .uv-investment-eyebrow,
  .uv-investment-kicker {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--uv-gold);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 1.5;
  }

  .uv-investment-eyebrow i {
    width: 26px;
    height: 1px;
    background: var(--uv-gold);
  }

  .uv-investment-hero h1,
  .uv-investment-section-heading h2,
  .uv-investment-steps h2 {
    font-family: Georgia, 'Times New Roman', serif;
    font-weight: 400;
    letter-spacing: -1.4px;
    line-height: 1.06;
  }

  .uv-investment-hero h1 {
    font-size: clamp(39px, 5.4vw, 68px);
    margin: 20px 0 18px;
  }

  .uv-investment-hero h1 em,
  .uv-investment-section-heading h2 em,
  .uv-investment-steps h2 em {
    font-weight: 400;
    color: var(--uv-gold);
  }

  .uv-investment-hero-copy > p,
  .uv-investment-section-heading > p,
  .uv-investment-steps > div:first-child > p {
    max-width: 540px;
    color: var(--uv-muted);
    font-size: 14px;
    line-height: 1.85;
    margin: 0;
  }

  .uv-investment-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;
  }

  .uv-investment-button {
    min-height: 48px;
    padding: 0 18px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    text-decoration: none;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.3px;
    transition: all 0.25s ease;
  }

  .uv-investment-button b {
    font-size: 16px;
    font-weight: 400;
  }

  .uv-investment-button--gold {
    color: #fffaf2;
    background: var(--uv-gold);
    border: 1px solid var(--uv-gold);
    box-shadow: 0 9px 24px rgba(128, 91, 43, 0.16);
  }

  .uv-investment-button--gold:hover {
    background: #876234;
    color:#fffaf2;
   
  }

  .uv-investment-button--glass {
    color: var(--uv-ink);
    border: 1px solid rgba(167, 124, 67, 0.35);
    background: rgba(255, 255, 255, 0.46);
    backdrop-filter: blur(14px);
  }

  .uv-investment-button--glass:hover {
    background: rgba(255, 255, 255, 0.82);
    color:var(--uv-ink);
  }

  .uv-investment-trust-line {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 30px;
    color: #857663;
    font-size: 8px;
    letter-spacing: 1.25px;
  }

  .uv-investment-trust-line span {
    width: 6px;
    height: 6px;
    background: var(--uv-gold);
    border-radius: 50%;
  }

  .uv-investment-hero-card {
    position: relative;
    min-height: 420px;
    overflow: visible;
    border: 1px solid rgba(255, 255, 255, 0.85);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 25px 70px rgba(84, 62, 36, 0.14);
    padding: 9px;
    backdrop-filter: blur(18px);
  }

  .uv-investment-hero-card > img {
    position: absolute;
    inset: 9px;
    width: calc(100% - 18px);
    height: calc(100% - 18px);
    object-fit: cover;
    border-radius: 4px;
  }

  .uv-investment-hero-card-shade {
    position: absolute;
    inset: 9px;
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(31, 24, 16, 0.02) 25%, rgba(31, 24, 16, 0.75));
  }

  .uv-investment-hero-card-label {
    position: absolute;
    left: 30px;
    bottom: 34px;
    display: grid;
    gap: 9px;
    color: white;
  }

  .uv-investment-hero-card-label small {
    color: #e7c997;
    font-size: 9px;
    letter-spacing: 1.7px;
    font-weight: 700;
  }

  .uv-investment-hero-card-label strong {
    font: 400 clamp(28px, 3.2vw, 40px)/1.1 Georgia, serif;
  }

  .uv-investment-hero-card-label span {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.8);
  }

  .uv-investment-floating-note {
    position: absolute;
    right: -25px;
    top: 35px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 18px;
    border: 1px solid rgba(255, 255, 255, 0.85);
    border-radius: 5px;
    background: rgba(255, 252, 247, 0.82);
    box-shadow: 0 12px 30px rgba(74, 54, 32, 0.1);
    backdrop-filter: blur(20px);
  }

  .uv-investment-floating-note > span {
    font: 30px Georgia, serif;
    color: var(--uv-gold);
  }

  .uv-investment-floating-note div {
    display: grid;
    gap: 4px;
  }

  .uv-investment-floating-note b {
    font-size: 10px;
  }

  .uv-investment-floating-note small {
    font-size: 9px;
    color: var(--uv-muted);
  }

  .uv-investment-overview {
    padding-top: 95px;
    padding-bottom: 100px;
  }

  .uv-investment-section-heading {
    max-width: 650px;
    margin-bottom: 32px;
  }

  .uv-investment-section-heading h2,
  .uv-investment-steps h2 {
    font-size: clamp(31px, 4vw, 48px);
    margin: 13px 0;
  }

  .uv-investment-section-heading > p {
    font-size: 12px;
  }

  .uv-investment-overview-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .uv-investment-glass-card {
    position: relative;
    min-height: 255px;
    padding: 27px 24px;
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 7px;
    background: linear-gradient(140deg, rgba(255, 255, 255, 0.78), rgba(255, 250, 242, 0.45));
    box-shadow: 0 14px 38px rgba(93, 70, 42, 0.055);
    backdrop-filter: blur(18px);
    transition: transform 0.25s, box-shadow 0.25s;
  }

  .uv-investment-glass-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 42px rgba(93, 70, 42, 0.1);
  }

  .uv-investment-card-number {
    position: absolute;
    right: 22px;
    top: 19px;
    font: 20px Georgia, serif;
    color: rgba(167, 124, 67, 0.48);
  }

  .uv-investment-card-icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(167, 124, 67, 0.3);
    border-radius: 50%;
    color: var(--uv-gold);
    font-size: 21px;
  }

  .uv-investment-glass-card h3 {
    font: 400 23px Georgia, serif;
    margin: 21px 0 10px;
  }

  .uv-investment-glass-card p {
    color: var(--uv-muted);
    font-size: 11px;
    line-height: 1.8;
    margin: 0 0 18px;
  }

  .uv-investment-glass-card a {
    display: inline-flex;
    gap: 14px;
    color: var(--uv-gold);
    text-decoration: none;
    font-size: 10px;
    font-weight: 700;
  }

  .uv-investment-explorer {
    padding: 90px 0 100px;
    background: 
      radial-gradient(ellipse at 90% 0%, rgba(255, 255, 255, 0.7), transparent 38%),
      linear-gradient(135deg, #eee4d6, #f8f2e9 58%, #e9ddcc);
  }

  .uv-investment-section-heading--center {
    text-align: center;
    margin: 0 auto 32px;
  }

  .uv-investment-section-heading--center > p {
    margin: auto;
  }

  .uv-investment-tabs {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    margin-bottom: 16px;
  }

  .uv-investment-tab {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 58px;
    padding: 13px 16px;
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 5px;
    background: rgba(255, 252, 247, 0.6);
    color: #514538;
    font: 700 9px inherit;
    letter-spacing: 0.7px;
    text-align: left;
    cursor: pointer;
    backdrop-filter: blur(15px);
    transition: all 0.2s;
  }

  .uv-investment-tab > span {
    font: 18px Georgia, serif;
    color: var(--uv-gold);
  }

  .uv-investment-tab > b {
    margin-left: auto;
    color: var(--uv-gold);
    font-size: 14px;
    font-weight: 400;
  }

  .uv-investment-tab.is-active,
  .uv-investment-tab:hover {
    border-color: rgba(167, 124, 67, 0.55);
    background: rgba(255, 255, 255, 0.9);
    color: var(--uv-ink);
  }

  .uv-investment-feature {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.95);
    border-radius: 8px;
    background: rgba(255, 252, 247, 0.76);
    box-shadow: 0 20px 60px rgba(91, 66, 37, 0.09);
    backdrop-filter: blur(22px);
    animation: uvInvestmentIn 0.35s ease both;
  }

  @keyframes uvInvestmentIn {
    from {
      opacity: 0.5;
      transform: translateY(7px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .uv-investment-feature-visual {
    position: relative;
    min-height: 570px;
    background: #d6cabb;
  }

  .uv-investment-feature-visual > img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .uv-investment-feature-shade {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(30, 22, 15, 0.02), rgba(30, 22, 15, 0.74));
  }

  .uv-investment-feature-caption {
    position: absolute;
    left: 27px;
    right: 24px;
    bottom: 28px;
    display: grid;
    gap: 9px;
    color: white;
  }

  .uv-investment-feature-caption small {
    font-size: 9px;
    letter-spacing: 1.5px;
    color: #e8c995;
  }

  .uv-investment-feature-caption strong {
    font: 400 25px Georgia, serif;
    line-height: 1.2;
  }

  .uv-investment-feature-content {
    padding: clamp(24px, 3.5vw, 42px);
  }

  .uv-investment-feature-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .uv-investment-outline-pill {
    padding: 6px 8px;
    border: 1px solid rgba(167, 124, 67, 0.3);
    color: var(--uv-gold);
    font-size: 8px;
    letter-spacing: 0.7px;
  }

  .uv-investment-feature-content h3 {
    font: 400 clamp(25px, 2.8vw, 34px)/1.15 Georgia, serif;
    margin: 18px 0 10px;
  }

  .uv-investment-description {
    font-size: 11px;
    line-height: 1.85;
    color: var(--uv-muted);
    margin: 0;
  }

  .uv-investment-option-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin: 24px 0 10px;
    color: var(--uv-gold);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .uv-investment-option-heading small {
    color: #928574;
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0;
  }

  .uv-investment-options {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 9px;
  }

  .uv-investment-option {
    position: relative;
    display: flex;
    gap: 10px;
    align-items: flex-start;
    min-width: 0;
    padding: 14px 12px;
    border: 1px solid rgba(167, 124, 67, 0.13);
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.62);
    text-align: left;
    cursor: pointer;
    transition: all 0.2s;
  }

  .uv-investment-option:hover,
  .uv-investment-option.is-selected {
    border-color: rgba(167, 124, 67, 0.58);
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 7px 20px rgba(92, 70, 43, 0.06);
  }

  .uv-investment-radio {
    display: grid;
    place-items: center;
    flex: 0 0 13px;
    width: 13px;
    height: 13px;
    margin-top: 3px;
    border: 1px solid #9c8a6c;
    border-radius: 50%;
  }

  .uv-investment-radio i {
    width: 5px;
    height: 5px;
    background: var(--uv-gold);
    border-radius: 50%;
  }

  .uv-investment-option-copy {
    display: grid;
    gap: 5px;
    padding-right: 7px;
  }

  .uv-investment-option-copy small {
    color: var(--uv-gold);
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.8px;
  }

  .uv-investment-option-copy strong {
    font: 400 14px Georgia, serif;
    line-height: 1.25;
    color: var(--uv-ink);
  }

  .uv-investment-option-copy em {
    font-size: 9px;
    font-style: normal;
    color: var(--uv-muted);
    line-height: 1.5;
  }

  .uv-investment-option-arrow {
    position: absolute;
    right: 9px;
    top: 8px;
    color: var(--uv-gold);
    font-weight: 400;
  }

  .uv-investment-selection-summary {
    margin-top: 13px;
    padding: 12px 14px;
    border-left: 2px solid var(--uv-gold);
    background: rgba(236, 222, 202, 0.4);
  }

  .uv-investment-selection-summary span,
  .uv-investment-option-heading-label {
    display: block;
    color: var(--uv-gold);
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .uv-investment-selection-summary strong {
    display: block;
    margin-top: 5px;
    font: 400 15px Georgia, serif;
  }

  .uv-investment-selection-summary p {
    margin: 4px 0 0;
    color: var(--uv-muted);
    font-size: 9px;
    line-height: 1.5;
  }

  .uv-investment-facilities {
    margin-top: 18px;
  }

  .uv-investment-facilities > div {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 9px 12px;
    margin-top: 10px;
  }

  .uv-investment-facilities > div > span,
  .uv-investment-considerations li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    color: #594c3e;
    font-size: 10px;
    line-height: 1.5;
  }

  .uv-investment-facilities i,
  .uv-investment-considerations i {
    font-style: normal;
    color: var(--uv-gold);
  }

  .uv-investment-considerations {
    display: grid;
    gap: 7px;
    list-style: none;
    margin: 18px 0 0;
    padding: 14px 0 0;
    border-top: 1px solid rgba(126, 98, 62, 0.17);
  }

  .uv-investment-inline-cta {
    display: inline-flex;
    gap: 20px;
    align-items: center;
    margin-top: 20px;
    padding: 12px 15px;
    background: var(--uv-gold);
    color: #fffaf2;
    text-decoration: none;
    font-size: 10px;
    font-weight: 700;
  }

  .uv-investment-inline-cta b {
    font-size: 15px;
    font-weight: 400;
  }
    .uv-investment-inline-cta:hover{
    background: #876234;
    color:#fffaf2;
    }

  .uv-investment-process {
    padding-top: 100px;
    padding-bottom: 105px;
  }

  .uv-investment-diligence-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 13px;
  }

  .uv-investment-diligence-card {
    padding: 23px 19px;
    border: 1px solid rgba(255, 255, 255, 0.92);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.48);
    backdrop-filter: blur(16px);
  }

  .uv-investment-diligence-card > span {
    font: 24px Georgia, serif;
    color: var(--uv-gold);
  }

  .uv-investment-diligence-card h3 {
    font: 400 18px Georgia, serif;
    margin: 16px 0 9px;
  }

  .uv-investment-diligence-card p {
    font-size: 10px;
    line-height: 1.8;
    color: var(--uv-muted);
    margin: 0;
  }

  .uv-investment-steps-wrap {
    padding: 72px 0;
    background: linear-gradient(120deg, #e8dac6, #f5eee4 52%, #e6d5bd);
    border-block: 1px solid rgba(167, 124, 67, 0.14);
  }

  .uv-investment-steps {
    display: grid;
    grid-template-columns: 1fr 0.8fr;
    gap: 70px;
    align-items: center;
  }

  .uv-investment-steps h2 {
    margin: 14px 0;
  }

  .uv-investment-steps > div:first-child > p {
    font-size: 12px;
  }

  .uv-investment-steps-list {
    display: grid;
    gap: 16px;
  }

  .uv-investment-steps-list > div {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-bottom: 13px;
    border-bottom: 1px solid rgba(126, 98, 62, 0.18);
  }

  .uv-investment-steps-list > div > span {
    font: 22px Georgia, serif;
    color: var(--uv-gold);
  }

  .uv-investment-steps-list p {
    display: grid;
    gap: 4px;
    margin: 0;
  }

  .uv-investment-steps-list b {
    font-size: 11px;
  }

  .uv-investment-steps-list small {
    font-size: 10px;
    color: var(--uv-muted);
  }

  .uv-investment-steps-list .uv-investment-button {
    margin-top: 6px;
  }

  .uv-investment-disclaimer {
    padding-top: 30px;
    padding-bottom: 36px;
  }

  .uv-investment-disclaimer > span {
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: var(--uv-gold);
  }

  .uv-investment-disclaimer p {
    font-size: 9px;
    line-height: 1.8;
    color: #786b5b;
    margin: 8px 0 0;
  }

  @media (max-width: 900px) {
    .uv-investment-hero .uv-investment-shell {
      grid-template-columns: 1fr 0.85fr;
      gap: 28px;
    }
    .uv-investment-hero-card {
      min-height: 350px;
    }
    .uv-investment-floating-note {
      right: -8px;
    }
    .uv-investment-feature {
      grid-template-columns: 0.72fr 1.28fr;
    }
    .uv-investment-feature-visual {
      min-height: 620px;
    }
    .uv-investment-feature-content {
      padding: 24px 20px;
    }
    .uv-investment-options {
      grid-template-columns: 1fr;
    }
    .uv-investment-diligence-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .uv-investment-steps {
      gap: 35px;
    }
  }

  @media (max-width: 680px) {
    .uv-investment-shell {
      width: min(100% - 32px, 540px);
    }
    .uv-investment-hero {
      padding: 68px 0 60px;
    }
    .uv-investment-hero .uv-investment-shell {
      grid-template-columns: 1fr;
      gap: 36px;
    }
    .uv-investment-hero h1 {
      font-size: clamp(39px, 11vw, 54px);
    }
    .uv-investment-hero-copy > p {
      font-size: 12px;
    }
    .uv-investment-hero-card {
      min-height: 330px;
      margin-right: 8px;
    }
    .uv-investment-floating-note {
      right: -8px;
      top: 20px;
    }
    .uv-investment-trust-line {
      font-size: 7px;
      letter-spacing: 0.8px;
    }
    .uv-investment-overview,
    .uv-investment-process {
      padding-top: 65px;
      padding-bottom: 68px;
    }
    .uv-investment-section-heading h2,
    .uv-investment-steps h2 {
      font-size: 35px;
    }
    .uv-investment-overview-grid {
      grid-template-columns: 1fr;
    }
    .uv-investment-glass-card {
      min-height: 0;
    }
    .uv-investment-explorer {
      padding: 65px 0;
    }
    .uv-investment-tabs {
      grid-template-columns: 1fr;
    }
    .uv-investment-tab {
      min-height: 52px;
    }
    .uv-investment-feature {
      grid-template-columns: 1fr;
    }
    .uv-investment-feature-visual {
      min-height: 280px;
    }
    .uv-investment-feature-content {
      padding: 23px 18px;
    }
    .uv-investment-feature-content h3 {
      font-size: 27px;
    }
    .uv-investment-options {
      grid-template-columns: 1fr;
    }
    .uv-investment-facilities > div {
      grid-template-columns: 1fr;
    }
    .uv-investment-diligence-grid {
      grid-template-columns: 1fr;
    }
    .uv-investment-diligence-card {
      padding: 20px;
    }
    .uv-investment-steps-wrap {
      padding: 58px 0;
    }
    .uv-investment-steps {
      grid-template-columns: 1fr;
      gap: 28px;
    }
    .uv-investment-button {
      min-height: 46px;
    }
    .uv-investment-disclaimer {
      padding-top: 24px;
      padding-bottom: 28px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .uv-investment-page * {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`}</style>
    </main>
  );
}
