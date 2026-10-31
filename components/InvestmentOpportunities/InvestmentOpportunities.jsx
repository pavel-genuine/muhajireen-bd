"use client";

import React, { useState } from "react";

const investmentPlans = [
  {
    id: "residential",
    number: "01",
    label: "RESIDENTIAL OWNERSHIP",
    title: "Residential 2 Flat Land Share Ownership",
    description:
      "Choose a share option linked to residential flat land shares, as presented in the MUHAJIREEN investment proposal.",
    image: "/images/slider/hero-slide/img-3.1-main.png",
    options: [
      {
        share: "01 Share",
        title: "2 Flat Land Shares",
        detail: "Approx. 1,300 sft per flat",
      },
      {
        share: "03 Shares",
        title: "6 Flat Land Shares",
        detail: "Approx. 1,300 sft per flat",
      },
    ],
  },

  {
    id: "profit",
    number: "02",
    label: "RECURRING COMMERCIAL OPPORTUNITY",
    title: "Monthly Profit from all Commercial Entities",
    description:
      "The proposal lists monthly profit opportunities associated with land shares in the following commercial and institutional facilities.",
    image: "/images/slider/hero-slide/img-2.1-main.png",
    options: [
      {
        share: "01 Share",
        title: "Monthly Profit Opportunity",
        detail: "From the listed commercial and institutional land shares",
      },
      {
        share: "03 Shares",
        title: "3X Monthly Profit Opportunity",
        detail: "From the listed commercial and institutional land shares",
      },
    ],
    facilities: [
      "Shopping Mall ",
      "Commercial Space ",
      "Multi-SpecializedGeneral Hospital ",
      "Dental Hospital ",
      "Nursing Institute ",
      "International School ",
    ],
  },
  {
    id: "membership",
    number: "03",
    label: "LIFETIME ACCESS",
    title: "Lifetime Membership from Commercial Entities",
    description:
      "The proposal describes lifetime membership access for the listed healthcare and education-related facilities.",
    image: "/images/slider/hero-slide/img-4.1-main.png",
    options: [
      {
        share: "01 Share",
        title: "1 Person",
        detail: "Lifetime Membership access",
      },
      {
        share: "03 Shares",
        title: "3 People",
        detail: "Lifetime Membership access",
      },
    ],
    facilities: [
      "Shooping Mall",
      "Commercial Office Spaces",
      "Multi-Specilized General Hospital",
      "Nursing Institute",
      "Dental Hospital",
      "International School",
    ],
  },
];

export default function InvestmentOpportunities() {
  const [activePlan, setActivePlan] = useState("residential");
  const [activeShare, setActiveShare] = useState(0);

  const selectedPlan =
    investmentPlans.find((plan) => plan.id === activePlan) ||
    investmentPlans[0];

  const selectPlan = (id) => {
    setActivePlan(id);
    setActiveShare(0);
  };

  return (
    <section className="uv-investment" id="investment">
      <div className="uv-investment__glow uv-investment__glow--one" />
      <div className="uv-investment__glow uv-investment__glow--two" />

      <div className="uv-investment__container">
        <header className="uv-investment__header">
          <div className="uv-investment__eyebrow">
            <span />
            INVEST WITH MUHAJIREEN
          </div>

          <h2>
            More Than an Investment.
            <br />
            <em>A Share in the Vision.</em>
          </h2>

          <p>
            Explore the ownership, membership and commercial opportunities
            outlined in the MUHAJIREEN investment proposal.
          </p>
        </header>

        <div style={{ marginBottom: "30px" }} className="uv-investment__intro">
          <div>
            <span className="uv-investment__kicker">INVESTOR BENEFITS</span>
            <h3 style={{ marginBottom: "5px" }}>
              What do you get as an investor?
            </h3>
          </div>
          <p>
            Select an investment category to explore <br /> the share options
            and benefits.
          </p>
        </div>

        <div
          className="uv-investment__tabs"
          role="tablist"
          aria-label="Investment categories"
        >
          {investmentPlans.map((plan) => (
            <button
              key={plan.id}
              type="button"
              role="tab"
              aria-selected={activePlan === plan.id}
              className={`uv-investment__tab ${
                activePlan === plan.id ? "is-active" : ""
              }`}
              onClick={() => selectPlan(plan.id)}
            >
              <span>{plan.number}</span>
              {plan.label}
              <b aria-hidden="true">↗</b>
            </button>
          ))}
        </div>

        <article className="uv-investment__feature" key={selectedPlan.id}>
          <div className="uv-investment__visual">
            <img src={selectedPlan.image} alt="" />
            <div className="uv-investment__visual-shade" />
            <div className="uv-investment__visual-caption">
              <span>MUHAJIREEN</span>
              <strong>{selectedPlan.label}</strong>
            </div>
            <div className="uv-investment__visual-number">
              {selectedPlan.number}
            </div>
          </div>

          <div className="uv-investment__details">
            <div className="uv-investment__detail-top">
              <span className="uv-investment__kicker">
                INVESTMENT CATEGORY {selectedPlan.number}
              </span>
              <span className="uv-investment__status">INVESTOR BENEFIT</span>
            </div>

            <h3>{selectedPlan.title}</h3>

            <p className="uv-investment__description">
              {selectedPlan.description}
            </p>

            <div className="uv-investment__share-heading">
              <span>SHARE OPTIONS</span>
              <span>Select an option</span>
            </div>

            <div className="uv-investment__share-options">
              {selectedPlan.options.map((option, index) => (
                <button
                  type="button"
                  key={option.share}
                  className={`uv-investment__share-option ${
                    activeShare === index ? "is-selected" : ""
                  }`}
                  onClick={() => setActiveShare(index)}
                  aria-pressed={activeShare === index}
                >
                  <span className="uv-investment__radio">
                    {activeShare === index ? <i /> : null}
                  </span>

                  <span className="uv-investment__share-copy">
                    <small>{option.share}</small>
                    <strong>{option.title}</strong>
                    <em>{option.detail}</em>
                  </span>

                  <span className="uv-investment__share-arrow">↗</span>
                </button>
              ))}
            </div>

            {selectedPlan.facilities && (
              <div className="uv-investment__included">
                <span className="uv-investment__included-label">
                  {activePlan === "membership"
                    ? "FACILITIES LISTED FOR MEMBERSHIP ACCESS"
                    : "LAND SHARE CATEGORIES LISTED"}
                </span>

                <div className="uv-investment__facility-list">
                  {selectedPlan.facilities.map((facility) => (
                    <div className="uv-investment__facility" key={facility}>
                      <span className="uv-investment__check">✓</span>
                      {facility}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activePlan === "residential" && (
              <div className="uv-investment__note">
                <span className="uv-investment__note-mark">i</span>
                <p>
                  The proposal states approximately 1,300 sft per flat. The
                  selected share option is shown above.
                </p>
              </div>
            )}
          </div>
        </article>

        <div className="uv-investment__bottom">
          <div className="uv-investment__bottom-copy">
            <span className="uv-investment__kicker">
              EXPLORE THE OPPORTUNITY
            </span>
            <h3>Let’s discuss your investment interests.</h3>
            <p>
              Contact the MUHAJIREEN team for detailed share information,
              membership terms and the applicable investment documents.
            </p>
          </div>

          <a className="uv-investment__cta" href="#contact">
            <span>Request Investment Details</span>
            <b>↗</b>
          </a>
        </div>
      </div>

      <style jsx global>{`
        .uv-investment {
          --uv-gold: #a77c43;
          --uv-gold-light: #d9bd8d;
          --uv-muted: #62564a;

          position: relative;
          isolation: isolate;
          overflow: hidden;
          width: 100%;
          height: auto !important; /* Fixed height bad diye auto kora holo */
          min-height: auto !important;
          max-height: none !important;
          display: block !important;
          padding: clamp(60px, 7vw, 90px) 24px !important; /* Shudhu dorkari padding thakbe */
          flex-direction: column;
          justify-content: center;

          color: #30251d !important;

          background:
            radial-gradient(
              ellipse at 12% 8%,
              rgba(255, 255, 255, 0.82),
              transparent 35%
            ),
            radial-gradient(
              ellipse at 88% 78%,
              rgba(220, 195, 158, 0.24),
              transparent 38%
            ),
            linear-gradient(135deg, #f2eadf 0%, #e9dece 52%, #f6f0e7 100%) !important;
        }

        .uv-investment *,
        .uv-investment *::before,
        .uv-investment *::after {
          box-sizing: border-box;
        }

        .uv-investment__container {
          position: relative;
          z-index: 1;
          width: min(1100px, calc(100% - 48px));
          margin: 0 auto;
          max-height: none !important;
          display: block !important;
          flex-direction: column;
          justify-content: center;
        }

        .uv-investment__glow {
          position: absolute;
          z-index: 0;
          width: 350px;
          height: 350px;
          border: 1px solid rgba(166, 132, 82, 0.13);
          border-radius: 50%;
          pointer-events: none;
        }

        .uv-investment__glow--one {
          top: -150px;
          right: -100px;
        }

        .uv-investment__glow--two {
          bottom: -150px;
          left: -150px;
          width: 400px;
          height: 400px;
        }

        .uv-investment__header {
          max-width: 720px;
          margin: 0 auto 16px;
          text-align: center;
        }

        .uv-investment__eyebrow,
        .uv-investment__kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--uv-gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1.4;
        }

        .uv-investment__eyebrow span {
          width: 26px;
          height: 1px;
          background: var(--uv-gold);
        }

        .uv-investment__header h2 {
          margin: 10px 0 8px;
          color: #30251d !important;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(28px, 3.8vh, 48px);
          font-weight: 400;
          letter-spacing: -1.2px;
          line-height: 1.05;
        }

        .uv-investment__header h2 em {
          color: #a77c43 !important;
          font-weight: 400;
        }

        .uv-investment__header > p {
          max-width: 540px;
          margin: 0 auto;
          color: #62564a !important;
          font-size: 11.5px;
          line-height: 1.6;
        }

        .uv-investment__intro {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 12px;
        }

        .uv-investment__intro h3 {
          margin: 6px 0 0;
          color: #30251d !important;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(20px, 2.2vh, 28px);
          font-weight: 400;
          line-height: 1.15;
        }

        .uv-investment__intro > p {
          max-width: 360px;
          margin: 0;
          color: #62564a !important;
          font-size: 11px;
          line-height: 1.5;
        }

        .uv-investment__tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 12px;
        }

        .uv-investment__tab {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 48px;
          padding: 10px 14px;
          border: 1px solid rgba(255, 255, 255, 0.8) !important;
          border-radius: 8px !important;
          color: #514538 !important;
          background: rgba(255, 252, 247, 0.62) !important;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          text-align: left;
          font: inherit;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.8px;
          cursor: pointer;
          transition: 220ms ease;
        }

        .uv-investment__tab > span {
          color: var(--uv-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 15px;
          font-weight: 400;
        }

        .uv-investment__tab b {
          margin-left: auto;
          color: var(--uv-gold);
          font-size: 14px;
          font-weight: 400;
        }

        .uv-investment__tab:hover,
        .uv-investment__tab.is-active {
          border-color: rgba(167, 124, 67, 0.45) !important;
          color: #30251d !important;
          background: rgba(255, 255, 255, 0.88) !important;
        }

        .uv-investment__feature {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          height: 310px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.88) !important;
          border-radius: 12px !important;
          background: rgba(255, 252, 247, 0.72) !important;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 16px 45px rgba(92, 70, 43, 0.08);
          animation: uvInvestmentReveal 420ms ease both;
        }

        @keyframes uvInvestmentReveal {
          from {
            opacity: 0.55;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .uv-investment__visual {
          position: relative;
          height: 100%;
          overflow: hidden;
          background: #d8d0c2;
        }

        .uv-investment__visual img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 1 !important;
        }

        .uv-investment__visual-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(35, 26, 17, 0.02) 30%,
            rgba(35, 26, 17, 0.68) 100%
          ) !important;
        }

        .uv-investment__visual-caption {
          position: absolute;
          right: 20px;
          bottom: 20px;
          left: 20px;
          display: grid;
          gap: 6px;
        }

        .uv-investment__visual-caption span {
          color: var(--uv-gold-light);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .uv-investment__visual-caption strong {
          max-width: 300px;
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(20px, 2.4vh, 28px);
          font-weight: 400;
          line-height: 1.15;
        }

        .uv-investment__visual-number {
          position: absolute;
          top: 14px;
          left: 16px;
          color: rgba(255, 255, 255, 0.8);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 12px;
          letter-spacing: 1.5px;
        }

        .uv-investment__details {
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .uv-investment__detail-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .uv-investment__status {
          padding: 5px 8px;
          border: 1px solid rgba(216, 183, 126, 0.35);
          color: var(--uv-gold-light);
          font-size: 7.5px;
          font-weight: 700;
          letter-spacing: 0.8px;
        }

        .uv-investment__details h3 {
          margin: 10px 0 6px;
          color: #30251d !important;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(20px, 2.3vh, 26px);
          font-weight: 400;
          line-height: 1.15;
        }

        .uv-investment__description {
          margin: 0;
          color: #62564a !important;
          font-size: 10.5px;
          line-height: 1.5;
        }

        .uv-investment__share-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin: 14px 0 8px;
          color: var(--uv-gold);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.2px;
        }

        .uv-investment__share-heading span + span {
          color: #8a8175;
          font-size: 8px;
          font-weight: 400;
        }

        .uv-investment__share-options {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
        }

        .uv-investment__share-option {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 10px 12px;
          border: 1px solid rgba(255, 255, 255, 0.95) !important;
          border-radius: 8px !important;
          color: #30251d !important;
          background: rgba(255, 255, 255, 0.68) !important;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          text-align: left;
          cursor: pointer;
          transition: 200ms ease;
        }

        .uv-investment__share-option:hover,
        .uv-investment__share-option.is-selected {
          border-color: rgba(167, 124, 67, 0.55) !important;
          background: rgba(255, 255, 255, 0.94) !important;
          box-shadow: 0 6px 18px rgba(92, 70, 43, 0.08);
        }

        .uv-investment__radio {
          display: grid;
          flex: 0 0 13px;
          width: 13px;
          height: 13px;
          margin-top: 2px;
          place-items: center;
          border: 1px solid #9c8a6c;
          border-radius: 50%;
        }

        .uv-investment__radio i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--uv-gold);
        }

        .uv-investment__share-copy {
          display: grid;
          gap: 3px;
        }

        .uv-investment__share-copy small {
          color: var(--uv-gold);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.8px;
        }

        .uv-investment__share-copy strong {
          color: #30251d !important;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 13.5px;
          font-weight: 400;
          line-height: 1.2;
        }

        .uv-investment__share-copy em {
          color: #62564a !important;
          font-size: 9px;
          font-style: normal;
          line-height: 1.3;
        }

        .uv-investment__share-arrow {
          position: absolute;
          top: 10px;
          right: 10px;
          color: var(--uv-gold);
          font-size: 11px;
        }

        .uv-investment__included {
          margin-top: 12px;
        }

        .uv-investment__included-label {
          display: block;
          margin-bottom: 6px;
          color: var(--uv-gold);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .uv-investment__facility-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 6px 10px;
        }

        .uv-investment__facility {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          color: #514538 !important;
          font-size: 9px;
          line-height: 1.3;
        }

        .uv-investment__check {
          color: var(--uv-gold);
          font-size: 10px;
        }

        .uv-investment__note {
          display: flex;
          gap: 8px;
          margin-top: 10px;
          padding: 8px 10px;
          border-left: 2px solid #b48a50 !important;
          background: rgba(255, 255, 255, 0.62) !important;
          border-radius: 0 7px 7px 0;
        }

        .uv-investment__note-mark {
          display: grid;
          flex: 0 0 14px;
          width: 14px;
          height: 14px;
          place-items: center;
          border: 1px solid rgba(216, 183, 126, 0.65);
          border-radius: 50%;
          color: var(--uv-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 9px;
        }

        .uv-investment__note p {
          margin: 0;
          color: #62564a !important;
          font-size: 9px;
          line-height: 1.4;
        }

        .uv-investment__bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 24px;
          padding: 16px 0;
          border-top: 1px solid rgba(126, 98, 62, 0.22) !important;
          border-bottom: 1px solid rgba(126, 98, 62, 0.22) !important;
        }

        .uv-investment__bottom h3 {
          margin: 4px 0 4px;
          color: #30251d !important;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(18px, 2vh, 24px);
          font-weight: 400;
        }

        .uv-investment__bottom p {
          max-width: 540px;
          margin: 0;
          color: #62564a !important;
          font-size: 10px;
          line-height: 1.5;
        }

        .uv-investment__cta {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          min-height: 42px;
          padding: 0 16px;
          border: 1px solid #a77c43 !important;
          color: #fffaf2 !important;
          background: #a77c43 !important;
          border-radius: 4px;
          box-shadow: 0 8px 22px rgba(128, 91, 43, 0.16);
          text-decoration: none;
          font-size: 9px;
          font-weight: 700;
          transition: 220ms ease;
        }

        .uv-investment__cta:hover {
          color: #78572f !important;
          background: rgba(255, 255, 255, 0.82) !important;
        }

        .uv-investment__cta b {
          font-size: 14px;
          font-weight: 400;
        }

        .uv-investment__disclaimer {
          max-width: 780px;
          margin: 10px auto 0;
          color: #716456 !important;
          font-size: 8px;
          line-height: 1.5;
          text-align: center;
        }

        @media (max-width: 900px) {
          .uv-investment__intro {
            display: block;
          }
          .uv-investment {
            height: auto;
            min-height: 150vh;
            padding: 50px 0;
          }

          .uv-investment__feature {
            grid-template-columns: 1fr;
            height: auto;
          }

          .uv-investment__visual {
            height: 220px;
          }

          .uv-investment__facility-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 680px) {
          .uv-investment__tabs {
            grid-template-columns: 1fr;
          }

          .uv-investment__share-options {
            grid-template-columns: 1fr;
          }

          .uv-investment__facility-list {
            grid-template-columns: 1fr;
          }

          .uv-investment__bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
          }

          .uv-investment__cta {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .uv-investment *,
          .uv-investment *::before,
          .uv-investment *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
