"use client";

import React, { useState } from "react";

const investmentPlans = [
  {
    id: "residential",
    number: "01",
    label: "RESIDENTIAL OWNERSHIP",
    title: "Residential 2 Flat Land Share Ownership",
    description:
      "Choose a share option linked to residential flat land shares, as presented in the Uttara View investment proposal.",
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
      "Shopping Mall Land Share",
      "Commercial Space Land Share",
      "Multi-SpecializedGeneral Hospital Land Share",
      "Dental Hospital Land Share",
      "Nursing Institute Land Share",

      "School Land Share",
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
            INVEST WITH UTTARA VIEW
          </div>

          <h2>
            More Than an Investment.
            <br />
            <em>A Share in the Vision.</em>
          </h2>

          <p>
            Explore the ownership, membership and commercial opportunities
            outlined in the Uttara View investment proposal.
          </p>
        </header>

        <div className="uv-investment__intro">
          <div>
            <span className="uv-investment__kicker">INVESTOR BENEFITS</span>
            <h3>What do you get as an investor?</h3>
          </div>
          <p>
            Select an investment category to explore the share options and
            benefits described in the proposal.
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
              <span>UTTARA VIEW</span>
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
              Contact the Uttara View team for detailed share information,
              membership terms and the applicable investment documents.
            </p>
          </div>

          <a className="uv-investment__cta" href="#contact">
            <span>Request Investment Details</span>
            <b>↗</b>
          </a>
        </div>

        <p className="uv-investment__disclaimer">
          Information on this page reflects the investment proposal provided for
          Uttara View. Share entitlements, membership scope, profit calculation,
          payment terms and applicable legal rights should be confirmed in the
          official agreement and supporting documents.
        </p>
      </div>

      <style jsx global>{`
        .uv-investment {
          --uv-gold: #8f693b;
          --uv-gold-light: #e4cfaa;
          --uv-muted: #655747;

          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 112px 24px 76px;
          color: #493a2c;
          background:
            radial-gradient(
              ellipse at 12% 12%,
              rgba(255, 239, 211, 0.22),
              transparent 34%
            ),
            linear-gradient(135deg, #cbb99f 0%, #bba588 56%, #d0bea5 100%);
        }

        .uv-investment *,
        .uv-investment *::before,
        .uv-investment *::after {
          box-sizing: border-box;
        }

        .uv-investment__container {
          position: relative;
          z-index: 1;
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .uv-investment__glow {
          position: absolute;
          z-index: 0;
          width: 420px;
          height: 420px;
          border: 1px solid rgba(166, 132, 82, 0.13);
          border-radius: 50%;
          pointer-events: none;
        }

        .uv-investment__glow::before,
        .uv-investment__glow::after {
          position: absolute;
          content: "";
          border: 1px solid rgba(166, 132, 82, 0.1);
          border-radius: 50%;
          inset: 28px;
        }

        .uv-investment__glow::after {
          inset: 58px;
        }

        .uv-investment__glow--one {
          top: -250px;
          right: -120px;
        }

        .uv-investment__glow--two {
          bottom: -300px;
          left: -220px;
          width: 540px;
          height: 540px;
        }

        .uv-investment__header {
          max-width: 780px;
          margin: 0 auto 76px;
          text-align: center;
        }

        .uv-investment__eyebrow,
        .uv-investment__kicker {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: var(--uv-gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.2px;
          line-height: 1.5;
        }

        .uv-investment__eyebrow span {
          width: 32px;
          height: 1px;
          background: var(--uv-gold);
        }

        .uv-investment__header h2 {
          margin: 22px 0 18px;
          color: #493a2c;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(38px, 5.2vw, 66px);
          font-weight: 400;
          letter-spacing: -1.8px;
          line-height: 1.08;
        }

        .uv-investment__header h2 em {
          color: #89643a;
          font-weight: 400;
        }

        .uv-investment__header > p {
          max-width: 590px;
          margin: 0 auto;
          color: #756f66;
          font-size: 14px;
          line-height: 1.9;
        }

        .uv-investment__intro {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 28px;
          margin-bottom: 25px;
        }

        .uv-investment__intro h3 {
          margin: 10px 0 0;
          color: #493a2c;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(25px, 3vw, 36px);
          font-weight: 400;
          line-height: 1.2;
        }

        .uv-investment__intro > p {
          max-width: 390px;
          margin: 0 0 3px;
          color: var(--uv-muted);
          font-size: 12px;
          line-height: 1.8;
        }

        .uv-investment__tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 18px;
        }

        .uv-investment__tab {
          display: flex;
          align-items: center;
          gap: 13px;
          min-height: 66px;
          padding: 15px 18px;
          border: 1px solid rgba(40, 49, 55, 0.12);
          border-radius: 3px;
          color: #655f57;
          background: rgba(243, 233, 217, 0.78);
          text-align: left;
          font: inherit;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          cursor: pointer;
          transition: 220ms ease;
        }

        .uv-investment__tab > span {
          color: var(--uv-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 19px;
          font-weight: 400;
        }

        .uv-investment__tab b {
          margin-left: auto;
          color: var(--uv-gold);
          font-size: 17px;
          font-weight: 400;
        }

        .uv-investment__tab:hover,
        .uv-investment__tab.is-active {
          border-color: rgba(216, 183, 126, 0.65);
          color: #493a2c;
          background: rgba(216, 183, 126, 0.2);
        }

        .uv-investment__feature {
          display: grid;
          grid-template-columns: 0.88fr 1.12fr;
          min-height: 570px;
          border: 1px solid rgba(166, 132, 82, 0.22);
          background: rgba(247, 240, 228, 0.94);
          box-shadow: 0 22px 60px rgba(58, 46, 29, 0.07);
          animation: uvInvestmentReveal 420ms ease both;
        }

        @keyframes uvInvestmentReveal {
          from {
            opacity: 0.55;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .uv-investment__visual {
          position: relative;
          min-height: 570px;
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
          opacity: 0.82;
          transition: transform 700ms ease;
        }

        .uv-investment__feature:hover .uv-investment__visual img {
          transform: scale(1.035);
        }

        .uv-investment__visual-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(35, 26, 17, 0.02) 25%,
            rgba(35, 26, 17, 0.88) 100%
          );
        }

        .uv-investment__visual-caption {
          position: absolute;
          right: 30px;
          bottom: 32px;
          left: 30px;
          display: grid;
          gap: 9px;
        }

        .uv-investment__visual-caption span {
          color: var(--uv-gold-light);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .uv-investment__visual-caption strong {
          max-width: 330px;
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(25px, 3vw, 37px);
          font-weight: 400;
          line-height: 1.15;
        }

        .uv-investment__visual-number {
          position: absolute;
          top: 22px;
          left: 25px;
          color: rgba(255, 255, 255, 0.8);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 14px;
          letter-spacing: 2px;
        }

        .uv-investment__details {
          padding: clamp(28px, 4vw, 50px);
        }

        .uv-investment__detail-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .uv-investment__status {
          padding: 7px 9px;
          border: 1px solid rgba(216, 183, 126, 0.35);
          color: var(--uv-gold-light);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .uv-investment__details h3 {
          margin: 24px 0 12px;
          color: #493a2c;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(27px, 3vw, 38px);
          font-weight: 400;
          line-height: 1.17;
        }

        .uv-investment__description {
          margin: 0;
          color: #756f66;
          font-size: 12px;
          line-height: 1.9;
        }

        .uv-investment__share-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin: 29px 0 12px;
          color: var(--uv-gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .uv-investment__share-heading span + span {
          color: #8a8175;
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.3px;
        }

        .uv-investment__share-options {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .uv-investment__share-option {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 11px;
          min-height: 112px;
          padding: 16px 12px;
          border: 1px solid rgba(40, 49, 55, 0.13);
          border-radius: 2px;
          color: #493a2c;
          background: #f3e9d9;
          text-align: left;
          cursor: pointer;
          transition: 200ms ease;
        }

        .uv-investment__share-option:hover,
        .uv-investment__share-option.is-selected {
          border-color: rgba(216, 183, 126, 0.75);
          background: rgba(216, 183, 126, 0.075);
        }

        .uv-investment__radio {
          display: grid;
          flex: 0 0 15px;
          width: 15px;
          height: 15px;
          margin-top: 2px;
          place-items: center;
          border: 1px solid #9c8a6c;
          border-radius: 50%;
        }

        .uv-investment__radio i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--uv-gold);
        }

        .uv-investment__share-copy {
          display: grid;
          gap: 7px;
        }

        .uv-investment__share-copy small {
          color: var(--uv-gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .uv-investment__share-copy strong {
          color: #493a2c;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.25;
        }

        .uv-investment__share-copy em {
          color: #7e776e;
          font-size: 10px;
          font-style: normal;
          line-height: 1.5;
        }

        .uv-investment__share-arrow {
          position: absolute;
          top: 13px;
          right: 12px;
          color: var(--uv-gold);
          font-size: 13px;
        }

        .uv-investment__included {
          margin-top: 25px;
        }

        .uv-investment__included-label {
          display: block;
          margin-bottom: 12px;
          color: var(--uv-gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.3px;
        }

        .uv-investment__facility-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 14px;
        }

        .uv-investment__facility {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: #514d46;
          font-size: 10px;
          line-height: 1.5;
        }

        .uv-investment__check {
          color: var(--uv-gold);
          font-size: 12px;
        }

        .uv-investment__note {
          display: flex;
          gap: 10px;
          margin-top: 23px;
          padding: 12px 13px;
          border-left: 2px solid var(--uv-gold);
          background: rgba(216, 183, 126, 0.16);
        }

        .uv-investment__note-mark {
          display: grid;
          flex: 0 0 17px;
          width: 17px;
          height: 17px;
          place-items: center;
          border: 1px solid rgba(216, 183, 126, 0.65);
          border-radius: 50%;
          color: var(--uv-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 11px;
        }

        .uv-investment__note p {
          margin: 0;
          color: #655f57;
          font-size: 10px;
          line-height: 1.7;
        }

        .uv-investment__bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          margin-top: 65px;
          padding: 34px 0;
          border-top: 1px solid rgba(40, 49, 55, 0.16);
          border-bottom: 1px solid rgba(40, 49, 55, 0.16);
        }

        .uv-investment__bottom h3 {
          margin: 9px 0 7px;
          color: #493a2c;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(23px, 2.7vw, 32px);
          font-weight: 400;
        }

        .uv-investment__bottom p {
          max-width: 590px;
          margin: 0;
          color: #756f66;
          font-size: 11px;
          line-height: 1.8;
        }

        .uv-investment__cta {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          min-height: 52px;
          padding: 0 19px;
          border: 1px solid var(--uv-gold);
          color: #493a2c;
          background: var(--uv-gold);
          text-decoration: none;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          transition: 220ms ease;
        }

        .uv-investment__cta:hover {
          color: #493a2c;
          background: transparent;
        }

        .uv-investment__cta b {
          font-size: 16px;
          font-weight: 400;
        }

        .uv-investment__disclaimer {
          max-width: 850px;
          margin: 24px auto 0;
          color: #857d72;
          font-size: 9px;
          line-height: 1.8;
          text-align: center;
        }

        @media (max-width: 900px) {
          .uv-investment {
            padding-top: 85px;
          }

          .uv-investment__feature {
            grid-template-columns: 0.78fr 1.22fr;
          }

          .uv-investment__visual {
            min-height: 610px;
          }

          .uv-investment__details {
            padding: 28px 23px;
          }

          .uv-investment__detail-top {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 680px) {
          .uv-investment {
            padding: 72px 17px 52px;
          }

          .uv-investment__header {
            margin-bottom: 54px;
          }

          .uv-investment__header h2 {
            letter-spacing: -1px;
          }

          .uv-investment__intro {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
          }

          .uv-investment__tabs {
            grid-template-columns: 1fr;
            gap: 7px;
          }

          .uv-investment__tab {
            min-height: 54px;
            padding: 11px 14px;
          }

          .uv-investment__feature {
            grid-template-columns: 1fr;
          }

          .uv-investment__visual {
            min-height: 300px;
          }

          .uv-investment__details {
            padding: 27px 19px 30px;
          }

          .uv-investment__detail-top {
            flex-direction: row;
            align-items: center;
          }

          .uv-investment__share-options {
            grid-template-columns: 1fr;
          }

          .uv-investment__share-option {
            min-height: 92px;
          }

          .uv-investment__facility-list {
            grid-template-columns: 1fr;
          }

          .uv-investment__bottom {
            align-items: flex-start;
            flex-direction: column;
            margin-top: 45px;
            padding: 27px 0;
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
        /* PREMIUM CHAMPAGNE GLASS THEME */

        .uv-investment {
          --uv-gold: #a77c43;
          --uv-gold-light: #d9bd8d;
          --uv-muted: #62564a;

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

        /* TYPOGRAPHY */

        .uv-investment__header h2,
        .uv-investment__intro h3,
        .uv-investment__details h3,
        .uv-investment__bottom h3,
        .uv-investment__share-copy strong {
          color: #30251d !important;
        }

        .uv-investment__header h2 em {
          color: #a77c43 !important;
        }

        .uv-investment__header > p,
        .uv-investment__intro > p,
        .uv-investment__description,
        .uv-investment__bottom p {
          color: #62564a !important;
        }

        /* GLASS TABS */

        .uv-investment__tab {
          border: 1px solid rgba(255, 255, 255, 0.8) !important;
          border-radius: 8px !important;
          color: #514538 !important;

          background: rgba(255, 252, 247, 0.62) !important;

          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);

          box-shadow:
            0 8px 24px rgba(92, 70, 43, 0.045),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .uv-investment__tab:hover,
        .uv-investment__tab.is-active {
          border-color: rgba(167, 124, 67, 0.45) !important;
          background: rgba(255, 255, 255, 0.88) !important;
        }

        /* MAIN GLASS PANEL */

        .uv-investment__feature {
          overflow: hidden;

          border: 1px solid rgba(255, 255, 255, 0.88) !important;
          border-radius: 12px !important;

          background: rgba(255, 252, 247, 0.72) !important;

          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);

          box-shadow:
            0 24px 70px rgba(92, 70, 43, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
        }

        /* IMAGE */

        .uv-investment__visual img {
          opacity: 1 !important;
        }

        .uv-investment__visual-shade {
          background: linear-gradient(
            180deg,
            rgba(35, 26, 17, 0.02) 30%,
            rgba(35, 26, 17, 0.68) 100%
          ) !important;
        }

        /* SHARE CARDS */

        .uv-investment__share-option {
          border: 1px solid rgba(255, 255, 255, 0.95) !important;
          border-radius: 8px !important;

          color: #30251d !important;
          background: rgba(255, 255, 255, 0.68) !important;

          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          box-shadow:
            0 5px 18px rgba(92, 70, 43, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);

          transition: all 0.3s ease;
        }

        .uv-investment__share-option:hover,
        .uv-investment__share-option.is-selected {
          border-color: rgba(167, 124, 67, 0.55) !important;
          background: rgba(255, 255, 255, 0.94) !important;

          box-shadow:
            0 9px 24px rgba(92, 70, 43, 0.09),
            inset 0 1px 0 #fff;
        }

        .uv-investment__share-copy em {
          color: #62564a !important;
        }

        /* FACILITIES */

        .uv-investment__facility {
          color: #514538 !important;
        }

        .uv-investment__note {
          border-left-color: #b48a50 !important;
          background: rgba(255, 255, 255, 0.62) !important;
          border-radius: 0 7px 7px 0;
        }

        .uv-investment__note p {
          color: #62564a !important;
        }

        /* CTA */

        .uv-investment__cta {
          border-color: #a77c43 !important;
          color: #fffaf2 !important;
          background: #a77c43 !important;
          border-radius: 4px;

          box-shadow: 0 8px 22px rgba(128, 91, 43, 0.16);
        }

        .uv-investment__cta:hover {
          color: #78572f !important;
          background: rgba(255, 255, 255, 0.82) !important;
        }

        /* BOTTOM BORDER */

        .uv-investment__bottom {
          border-color: rgba(126, 98, 62, 0.22) !important;
        }

        .uv-investment__disclaimer {
          color: #716456 !important;
        }
      `}</style>
    </section>
  );
}
