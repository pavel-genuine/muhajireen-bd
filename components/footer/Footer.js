
"use client";

import React from "react";
import Link from "next/link";
import Logo from '/public/images/logo.png'
const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Vision", href: "/#about" },
    { label: "Connectivity", href: "/#connectivity" },
    { label: "Contact", href: "/contact" },
];

const projectLinks = [
    { label: "Master Plan", href: "/#masterplan" },
    { label: "Residential Living", href: "/#residential" },
    { label: "Commercial Spaces", href: "/#commercial" },
    { label: "Healthcare", href: "/#healthcare" },
    { label: "Education", href: "/#education" },
];

const contactInfo = {
    address: "Uttara View, Uttara, Dhaka, Bangladesh",
    phone: "+880 1XXXXXXXXX",
    email: "info@yourdomain.com",
};

const socialLinks = [
    { label: "Facebook", icon: "f", href: "https://facebook.com" },
    { label: "Instagram", icon: "◎", href: "https://instagram.com" },
    { label: "LinkedIn", icon: "in", href: "https://linkedin.com" },
    { label: "YouTube", icon: "▶", href: "https://youtube.com" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="uv-footer">
            <div className="uv-footer-orb uv-orb-one" />
            <div className="uv-footer-orb uv-orb-two" />

            <div className="uv-footer-container">

                {/* TOP CTA */}
                <div className="uv-footer-cta">
                    <div className="uv-cta-decoration">UV</div>

                    <div className="uv-cta-content">
                        <span className="uv-eyebrow">
                            YOUR NEXT CHAPTER STARTS HERE
                        </span>

                        <h2>
                            Find Your Place.
                            <br />
                            <span>Build Your Future.</span>
                        </h2>

                        <p>
                            Discover a thoughtfully planned community where
                            modern living meets meaningful connections.
                        </p>
                    </div>

                    <Link style={{ color: '#a9844e' }} href="/contact" className="uv-cta-button">
                        <span>Book a Site Visit</span>
                        <span className="uv-cta-arrow">↗</span>
                    </Link>
                </div>

                {/* DIVIDER */}
                <div className="uv-footer-divider" />

                {/* FOOTER CONTENT */}
                <div className="uv-footer-grid">

                    {/* BRAND */}
                    <div className="uv-footer-brand">
                        <Link href="/" className="uv-footer-logo">

                            <img style={{ width: '70%', margin: '20px' }} src={'/images/logo.png'} alt="Uttara View Logo" />

                            <span className="uv-logo-text">

                                <small>LIVE BEYOND ORDINARY</small>
                            </span>
                        </Link>

                        <p className="uv-brand-description">
                            A thoughtfully planned integrated community
                            designed to bring together modern living,
                            connectivity and a better way of life.
                        </p>

                        <div className="uv-social-links">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="uv-social-link"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* EXPLORE */}
                    <div className="uv-footer-column">
                        <h3>Explore</h3>

                        <ul >
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link style={{ color: '#a9844e' }} href={link.href}>
                                        <span className="uv-link-arrow">↗</span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* DISCOVER */}
                    <div className="uv-footer-column">
                        <h3>Discover</h3>

                        <ul>
                            {projectLinks.map((link) => (
                                <li key={link.label}>
                                    <Link style={{ color: '#a9844e' }} href={link.href}>
                                        <span className="uv-link-arrow">↗</span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className="uv-footer-column uv-contact-column">
                        <h3>Get In Touch</h3>

                        <div className="uv-contact-item">
                            <span className="uv-contact-icon">⌖</span>
                            <p style={{ color: 'var(--uv-text)' }}>{contactInfo.address}</p>
                        </div>

                        <a
                            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                            className="uv-contact-item"
                        >
                            <span className="uv-contact-icon">↗</span>
                            <p style={{ color: 'var(--uv-text)' }}>{contactInfo.phone}</p>
                        </a>

                        <a
                            href={`mailto:${contactInfo.email}`}
                            className="uv-contact-item"
                        >
                            <span className="uv-contact-icon">✉</span>
                            <p style={{ color: 'var(--uv-text)' }}>{contactInfo.email}</p>
                        </a>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="uv-footer-bottom">
                    <p>
                        © {currentYear} Uttara View. All Rights Reserved.
                    </p>

                    <div className="uv-footer-bottom-links">
                        <Link style={{ color: '#a9844e' }} href="/privacy-policy">Privacy Policy</Link>
                        <span />
                        <Link style={{ color: '#a9844e' }} href="/terms">Terms & Conditions</Link>
                    </div>

                    <p className="uv-footer-credit">
                        Crafted with <span>♥</span>
                    </p>
                </div>
            </div>

            <style jsx>{`
        .uv-footer {
          --uv-bg: #f6f1e8;
          --uv-cream: #fbf8f2;
          --uv-beige: #e9dfd0;
          --uv-gold: #c9a66e;
          --uv-gold-dark: #a9844e;
          --uv-ink: #423a30;
          --uv-text: #71675a;
          --uv-muted: #918678;

          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 85px 0 0;
          color: var(--uv-ink);

          background:
            radial-gradient(
              circle at 8% 10%,
              rgba(215, 187, 143, 0.20),
              transparent 32%
            ),
            radial-gradient(
              circle at 90% 75%,
              rgba(232, 218, 195, 0.55),
              transparent 35%
            ),
            linear-gradient(
              135deg,
              #f8f4ed 0%,
              #eee6da 50%,
              #f8f4ed 100%
            );
        }

        .uv-footer-container {
          position: relative;
          z-index: 2;
          width: min(1320px, calc(100% - 80px));
          margin: 0 auto;
        }

        /* DECORATIVE ORBS */

        .uv-footer-orb {
          position: absolute;
          z-index: -1;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(75px);
        }

        .uv-orb-one {
          width: 350px;
          height: 350px;
          top: -180px;
          left: -120px;
          background: rgba(213, 183, 132, 0.23);
        }

        .uv-orb-two {
          width: 400px;
          height: 400px;
          right: -180px;
          bottom: 0;
          background: rgba(221, 205, 177, 0.35);
        }

        /* CTA GLASS CARD */

        .uv-footer-cta {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 48px 52px;
          overflow: hidden;

          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 25px;

          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.78),
            rgba(255, 255, 255, 0.40)
          );

          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);

          box-shadow:
            0 20px 55px rgba(113, 91, 60, 0.07),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
        }

        .uv-cta-decoration {
          position: absolute;
          right: 230px;
          top: -65px;
          font-family: Georgia, serif;
          font-size: 230px;
          font-weight: 700;
          color: rgba(201, 166, 110, 0.065);
          pointer-events: none;
          line-height: 1;
        }

        .uv-cta-content {
          position: relative;
          z-index: 1;
        }

        .uv-eyebrow {
          color: var(--uv-gold-dark);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .uv-cta-content h2 {
          margin: 17px 0 13px;
          color: var(--uv-ink);
          font-size: clamp(34px, 4vw, 53px);
          font-weight: 500;
          line-height: 1.13;
          letter-spacing: -1.8px;
        }

        .uv-cta-content h2 span {
          color: var(--uv-gold-dark);
          font-family: Georgia, serif;
          font-style: italic;
          font-weight: 400;
        }

        .uv-cta-content p {
          max-width: 490px;
          margin: 0;
          color: var(--uv-text);
          font-size: 13px;
          line-height: 1.9;
        }

        .uv-cta-button {
          position: relative;
          z-index: 2;
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          gap: 24px;
          padding: 17px 23px;

          border: 1px solid rgba(255, 255, 255, 0.65);
          border-radius: 50px;

          background: linear-gradient(
            135deg,
            #dfc494,
            #c5a16a
          );

          color: #453727;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;

          box-shadow:
            0 8px 25px rgba(174, 137, 79, 0.17),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);

          transition: all 0.35s ease;
        }

        .uv-cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 13px 30px rgba(174, 137, 79, 0.25);
        }

        .uv-cta-arrow {
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .uv-cta-button:hover .uv-cta-arrow {
          transform: translate(3px, -3px);
        }

        /* DIVIDER */

        .uv-footer-divider {
          height: 1px;
          margin: 65px 0 55px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(169, 132, 78, 0.35),
            transparent
          );
        }

        /* FOOTER GRID */

        .uv-footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 0.9fr 1fr 1.25fr;
          gap: 55px;
          padding-bottom: 60px;
        }

        /* BRAND */

        .uv-footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 13px;
          color: var(--uv-ink);
          text-decoration: none;
        }

        .uv-logo-mark {
          display: grid;
          width: 48px;
          height: 48px;
          place-items: center;

          border: 1px solid rgba(201, 166, 110, 0.55);
          border-radius: 14px;

          background: rgba(255, 255, 255, 0.65);
          color: var(--uv-gold-dark);

          font-family: Georgia, serif;
          font-size: 19px;
          font-weight: 700;

          box-shadow: 0 5px 18px rgba(113, 91, 60, 0.07);
        }

        .uv-logo-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .uv-logo-text strong {
          font-size: 15px;
          letter-spacing: 2px;
        }

        .uv-logo-text small {
          color: var(--uv-gold-dark);
          font-size: 8px;
          letter-spacing: 2px;
        }

        .uv-brand-description {
          max-width: 310px;
          margin: 24px 0;
          color: var(--uv-text);
          font-size: 12px;
          line-height: 2;
        }

        /* SOCIAL */

        .uv-social-links {
          display: flex;
          gap: 10px;
        }

        .uv-social-link {
          display: grid;
          width: 37px;
          height: 37px;
          place-items: center;

          border: 1px solid rgba(169, 132, 78, 0.22);
          border-radius: 50%;

          background: rgba(255, 255, 255, 0.55);
          color: var(--uv-ink);

          text-decoration: none;
          font-size: 12px;
          font-weight: 600;

          box-shadow: 0 4px 12px rgba(113, 91, 60, 0.04);
          transition: all 0.3s ease;
        }

        .uv-social-link:hover {
          transform: translateY(-4px);
          background: var(--uv-gold);
          border-color: var(--uv-gold);
          color: #fff;
        }

        /* COLUMNS */

        .uv-footer-column h3 {
          margin: 5px 0 27px;
          color: var(--uv-ink);
          font-size: 14px;
          font-weight: 700;
        }

        .uv-footer-column h3::after {
          content: "";
          display: block;
          width: 30px;
          height: 2px;
          margin-top: 13px;
          border-radius: 2px;
          background: var(--uv-gold);
        }

        .uv-footer-column ul {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .uv-footer-column ul a {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          color: var(--uv-text);
          text-decoration: none;
          font-size: 12px;

          transition: all 0.3s ease;
        }

        .uv-footer-column ul a:hover {
          color: var(--uv-gold-dark);
          transform: translateX(5px);
        }

        .uv-link-arrow {
          color: var(--uv-gold-dark);
          font-size: 12px;
          opacity: 0.65;
        }

        /* CONTACT */

        .uv-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 17px;

          color: var(--uv-text);
          text-decoration: none;
          font-size: 12px;
          line-height: 1.8;

          transition: color 0.3s ease;
        }

        .uv-contact-item:hover {
          color: var(--uv-gold-dark);
        }

        .uv-contact-item p {
          margin: 0;
          overflow-wrap: anywhere;
        }

        .uv-contact-icon {
          display: grid;
          flex-shrink: 0;
          width: 31px;
          height: 31px;
          place-items: center;

          border: 1px solid rgba(201, 166, 110, 0.25);
          border-radius: 10px;

          background: rgba(255, 255, 255, 0.62);
          color: var(--uv-gold-dark);
          font-size: 15px;
        }

        /* BOTTOM BAR */

        .uv-footer-bottom {
          display: flex;
          min-height: 76px;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 18px;

          border-top: 1px solid rgba(169, 132, 78, 0.20);
        }

        .uv-footer-bottom p,
        .uv-footer-bottom-links a {
          margin: 0;
          color: var(--uv-muted);
          font-size: 10px;
          text-decoration: none;
        }

        .uv-footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .uv-footer-bottom-links span {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--uv-gold);
        }

        .uv-footer-bottom-links a:hover {
          color: var(--uv-gold-dark);
        }

        .uv-footer-credit span {
          color: #c78c79;
        }

        /* TABLET */

        @media (max-width: 991px) {
          .uv-footer-grid {
            grid-template-columns: 1.2fr 1fr;
            gap: 45px 55px;
          }

          .uv-footer-cta {
            padding: 38px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .uv-footer {
            padding-top: 60px;
          }

          .uv-footer-container {
            width: calc(100% - 36px);
          }

          .uv-footer-cta {
            flex-direction: column;
            align-items: flex-start;
            gap: 25px;
            padding: 30px 23px;
            border-radius: 20px;
          }

          .uv-cta-content h2 {
            font-size: 36px;
            letter-spacing: -1px;
          }

          .uv-cta-content p {
            font-size: 12px;
          }

          .uv-cta-decoration {
            right: -10px;
            top: -25px;
            font-size: 150px;
          }

          .uv-cta-button {
            padding: 15px 20px;
          }

          .uv-footer-divider {
            margin: 45px 0 40px;
          }

          .uv-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 38px 20px;
            padding-bottom: 40px;
          }

          .uv-footer-brand {
            grid-column: 1 / -1;
          }

          .uv-brand-description {
            max-width: 350px;
          }

          .uv-footer-column h3 {
            font-size: 13px;
            margin-bottom: 22px;
          }

          .uv-footer-column ul {
            gap: 14px;
          }

          .uv-footer-column ul a,
          .uv-contact-item {
            font-size: 11px;
          }

          .uv-contact-column {
            grid-column: 1 / -1;
          }

          .uv-footer-bottom {
            flex-direction: column;
            justify-content: center;
            padding: 22px 0;
            text-align: center;
            gap: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .uv-footer *,
          .uv-footer *::before,
          .uv-footer *::after {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
        </footer>
    );
}
