import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Logo from '../../public/images/logo.png'
import Footer from "../../components/footer/Footer";
import WAIcon from "../../components/WAIcon/WAIcon";

export default function AboutPage() {
    const [width, setWidth] = useState(0);


    useEffect(() => {
        setWidth(window.innerWidth);

    });
    return (
        <main className="uv-about-page">
            <Navbar Logo={Logo}
            />
            <section style={{ marginTop: width > 768 ? "" : "30px" }} className="uv-hero">
                <div className="uv-hero-copy">
                    <span className="uv-eyebrow"><i /> WHO WE ARE · MUHAJIREEN CONSULTANT LTD.</span>
                    <h1>Building trust.<br />Creating <em>possibility.</em></h1>
                    <p className="uv-lead">MUHAJIREEN Consultant Ltd. is focused on thoughtful development, meaningful partnerships and long-term value for the communities it serves.</p>
                    <p className="uv-support">Our approach brings people, ideas and opportunities together through a commitment to transparency, responsibility and community-minded planning.</p>
                    <Link href="/contact" className="uv-button">Discuss the project <span>↗</span></Link>
                    <div className="uv-hero-foot"><span>VISION-LED DEVELOPMENT</span><b /> <span>COMMUNITY-FOCUSED APPROACH</span></div>
                </div>
                <div className="uv-hero-visual">
                    <Image src="/images/slider/hero-slide/about.jpg" alt="MUHAJIREEN Consultant Ltd. development vision" fill priority sizes="(max-width: 900px) 100vw, 55vw" />
                    <div className="uv-visual-glass"><small>OUR APPROACH</small><strong>MUHAJIREEN</strong><span>Thoughtful Development · Meaningful Partnerships</span></div>
                    <span className="uv-vertical-label">VISION · INTEGRITY · COMMUNITY</span>
                </div>
            </section>
            <section className="uv-story uv-section">
                <div className="uv-section-tag">01 / THE VISION</div>
                <div className="uv-story-grid">
                    <h2>More than a development.<br /><em>A community vision.</em></h2>
                    <div className="uv-story-copy">
                        <p>At MUHAJIREEN Consultant Ltd., we believe development is about more than buildings. It is about creating opportunities, building trust and considering the people who will shape a place over time.</p>
                        <p>We aim to approach every initiative with care, clear communication and a long-term perspective. Our company values guide how we engage with partners, customers and the wider community.</p>
                    </div>
                </div>
            </section>
            <section className="uv-purpose uv-section">
                <div className="uv-purpose-heading">
                    <div className="uv-section-tag">02 / OUR PURPOSE</div>
                    <h2> <span style={{ color: 'var(--uv-ink)' }}>What guides </span><em>our work.</em></h2>
                    <p>Our mission, vision and values shape how we build relationships, approach development and work toward lasting value.</p>
                </div>
                <div className="uv-purpose-grid">
                    <article className="uv-purpose-card uv-purpose-card-featured">
                        <span className="uv-purpose-number">01</span><span className="uv-purpose-label">OUR VISION</span>
                        <h3 style={{ color: 'var(--uv-ink)' }}>A better future, thoughtfully planned.</h3>
                        <p>To contribute to well-planned, sustainable communities where people can find opportunity, connection and a sense of belonging.</p>
                    </article>
                    <article className="uv-purpose-card">
                        <span className="uv-purpose-number">02</span><span className="uv-purpose-label">OUR MISSION</span>
                        <h3 style={{ color: 'var(--uv-ink)' }}>Turning ideas into meaningful progress.</h3>
                        <p>To pursue responsible development through careful planning, transparent communication, quality-minded decisions and meaningful collaboration.</p>
                    </article>
                </div>
                <div className="uv-values-block">
                    <div className="uv-values-intro"><span className="uv-purpose-label">03 / OUR CORE VALUES</span><h3 style={{ color: 'var(--uv-ink)' }}>Principles that<br /><em>move us forward.</em></h3></div>
                    <div className="uv-values-grid">
                        <article><span>01</span><h4 style={{ color: 'var(--uv-ink)' }}>Integrity & Transparency</h4><p>Communicating clearly and building relationships on trust.</p></article>
                        <article><span>02</span><h4 style={{ color: 'var(--uv-ink)' }}>Quality & Excellence</h4><p>Taking a thoughtful, detail-oriented approach to our work.</p></article>
                        <article><span>03</span><h4 style={{ color: 'var(--uv-ink)' }}>Customer Commitment</h4><p>Listening carefully and respecting the needs of our customers and partners.</p></article>
                        <article><span>04</span><h4 style={{ color: 'var(--uv-ink)' }}>Responsible Development</h4><p>Considering long-term community value in the decisions we make.</p></article>
                    </div>
                </div>
                <div className="uv-commitment"><span className="uv-purpose-label">04 / OUR COMMITMENT</span><p>We are committed to fostering lasting relationships through responsibility, thoughtful planning and open communication—one meaningful step at a time.</p></div>
            </section>
            <section className="uv-story uv-section uv-approach">
                <div className="uv-section-tag">05 / OUR APPROACH</div>
                <div className="uv-story-grid">
                    <h2>Thoughtful by design.<br /><em>Responsible in action.</em></h2>
                    <div className="uv-story-copy">
                        <p>We believe meaningful development begins with listening, careful planning and a clear understanding of people’s needs. We aim to make considered decisions and communicate openly throughout our work.</p>
                        <p>By valuing collaboration, quality and long-term thinking, MUHAJIREEN Consultant Ltd. seeks to build relationships that grow through trust and shared purpose.</p>
                    </div>
                </div>
            </section>
            <section className="uv-cta"><span className="uv-eyebrow"><i /> LEARN MORE</span><h2>Let’s build<br /><em>something meaningful.</em></h2><p>Connect with MUHAJIREEN Consultant Ltd. to learn about our company, values and approach to development.</p><Link href="/contact" className="uv-button">Contact our team <span>↗</span></Link></section>


            <Footer />
            {/* <Scrollbar /> */}
            <WAIcon></WAIcon>

            <style jsx global>{`
        .uv-about-page {
          --uv-ink: #3e372e;
          --uv-muted: #766d62;
          --uv-gold: #b58b52;
          --uv-gold-light: #dec79f;
          --uv-line: rgba(145, 111, 67, .2);
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
          letter-spacing: .17em;
          line-height: 1.6;
        }
        
        .uv-eyebrow i {
          display: block;
          width: 28px;
          height: 1px;
          background: var(--uv-gold);
          flex-shrink: 0;
        }
        
        .uv-hero {
          max-width: 1500px;
          margin: 0 auto;
          min-height: 700px;
          padding: 115px 6.5% 78px;
          display: grid;
          grid-template-columns: .88fr 1.12fr;
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
          letter-spacing: -.06em;
          margin: 22px 0;
          color: #40382e;
        }
        
        .uv-about-page em {
          font-family: Georgia, 'Times New Roman', serif;
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
          border: 1px solid rgba(255, 255, 255, .9);
          box-shadow: 0 12px 28px rgba(130, 99, 55, .13);
        }
        
        .uv-button span,
        .uv-outline-button span {
          display: grid;
          place-items: center;
          width: 31px;
          height: 31px;
          border-radius: 50%;
          background: rgba(255, 255, 255, .62);
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
          letter-spacing: .12em;
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
          border: 7px solid rgba(255, 255, 255, .8);
          border-radius: 4px 65px 4px 4px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(75, 59, 38, .14);
          background: #e7ddce;
        }
        
        .uv-hero-visual:after {
          content: "";
          position: absolute;
          inset: 35% 0 0;
          background: linear-gradient(transparent, rgba(30, 26, 21, .36));
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
          border: 1px solid rgba(255, 255, 255, .6);
          border-radius: 15px;
          background: rgba(255, 250, 241, .77);
          backdrop-filter: blur(5px);
        }
        
        .uv-visual-glass small {
          font-size: 8px;
          letter-spacing: .17em;
          color: #987345;
          font-weight: 750;
        }
        
        .uv-visual-glass strong {
          font: 28px Georgia, serif;
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
          letter-spacing: .2em;
          text-shadow: 0 1px 8px #51483e;
        }
        
        .uv-facts {
          max-width: 1250px;
          margin: -20px auto 0;
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(255, 255, 255, .9);
          border-radius: 18px;
          background: rgba(255, 255, 255, .72);
          backdrop-filter: blur(20px);
          box-shadow: 0 18px 50px rgba(80, 62, 38, .07);
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
          font: 35px Georgia, serif;
          color: #a7814d;
        }
        
        .uv-fact strong em {
          font: 12px Arial, sans-serif;
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
          letter-spacing: .17em;
          color: #987345;
        }
        
        .uv-story-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 9%;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, .9);
          border-radius: 22px;
          background: rgba(255, 255, 255, .48);
          backdrop-filter: blur(18px);
          box-shadow: 0 18px 45px rgba(91, 70, 43, .05);
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
          background: linear-gradient(135deg, rgba(245, 236, 222, .78), rgba(255, 255, 255, .52));
          border-top: 1px solid rgba(255, 255, 255, .9);
          border-bottom: 1px solid rgba(255, 255, 255, .9);
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
          border: 1px solid rgba(255, 255, 255, .9);
          border-radius: 17px;
          background: rgba(255, 255, 255, .56);
          box-shadow: 0 12px 32px rgba(91, 70, 43, .045);
        }
        
        .uv-project-highlights small {
          display: block;
          font-size: 8px;
          letter-spacing: .16em;
          font-weight: 750;
          color: #987345;
        }
        
        .uv-project-highlights strong {
          display: block;
          margin: 12px 0 9px;
          font: 22px Georgia, serif;
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
          background: rgba(255, 255, 255, .64);
          box-shadow: 0 12px 35px rgba(91, 70, 43, .06);
        }
        
        .uv-land-card small {
          font-size: 8px;
          letter-spacing: .17em;
          color: #987345;
          font-weight: 750;
        }
        
        .uv-land-card strong {
          display: block;
          font: 43px Georgia, serif;
          color: #a7814d;
          margin: 7px 0;
        }
        
        .uv-land-card strong em {
          font: 14px Arial, sans-serif;
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
          border: 7px solid rgba(255, 255, 255, .8);
          box-shadow: 0 20px 55px rgba(80, 62, 38, .09);
        }
        
        .uv-masterplan span {
          position: absolute;
          bottom: 18px;
          left: 18px;
          padding: 10px 14px;
          border: 1px solid rgba(255, 255, 255, .7);
          border-radius: 50px;
          background: rgba(255, 250, 241, .82);
          backdrop-filter: blur(12px);
          font-size: 8px;
          letter-spacing: .15em;
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
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }
        
        .uv-facility-card {
          position: relative;
          min-height: 215px;
          padding: 28px;
          border: 1px solid rgba(255, 255, 255, .95);
          border-radius: 18px;
          background: rgba(255, 255, 255, .58);
          backdrop-filter: blur(18px);
          box-shadow: 0 15px 38px rgba(91, 70, 43, .045);
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
          letter-spacing: .16em;
          color: #987345;
        }
        
        .uv-facility-card h3 {
          font: 26px Georgia, serif;
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
          grid-template-columns: .85fr 1.15fr;
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
          border: 1px solid rgba(157, 119, 68, .42);
          color: #705633 !important;
        }
        
        .uv-map {
          position: relative;
          height: 390px;
          overflow: hidden;
          border: 7px solid rgba(255, 255, 255, .82);
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 18px 45px rgba(91, 70, 43, .09);
        }
        
        .uv-map :global(img) {
          object-fit: contain;
        }
        
        .uv-nearby {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
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
          grid-template-columns: 1fr .8fr;
          align-items: end;
          gap: 8%;
          margin-bottom: 34px;
        }
        
        .uv-investment-head h2 {
          font-size: clamp(38px, 4.5vw, 60px);
          font-weight: 450;
          line-height: 1.05;
          letter-spacing: -.055em;
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
          border: 1px solid rgba(255, 255, 255, .92);
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(255, 255, 255, .8), rgba(255, 250, 241, .5));
          backdrop-filter: blur(18px);
          box-shadow: 0 18px 45px rgba(91, 70, 43, .07);
        }
        
        .uv-investment-card:before {
          content: "";
          position: absolute;
          top: 0;
          left: 23px;
          right: 23px;
          height: 2px;
          background: linear-gradient(90deg, rgba(181, 139, 82, .8), transparent);
        }
        
        .uv-investment-card-featured {
          background: linear-gradient(145deg, rgba(255, 255, 255, .92), rgba(231, 215, 188, .5));
          box-shadow: 0 22px 55px rgba(91, 70, 43, .11);
        }
        
        .uv-investment-number {
          position: absolute;
          top: 20px;
          right: 22px;
          color: rgba(165, 129, 79, .6);
          font: 20px Georgia, serif;
        }
        
        .uv-investment-icon {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          margin-bottom: 22px;
          border: 1px solid rgba(181, 139, 82, .3);
          border-radius: 14px;
          color: #a98555;
          background: rgba(255, 255, 255, .62);
          font-size: 23px;
        }
        
        .uv-investment-card > small {
          font-size: 8px;
          letter-spacing: .14em;
          color: #9b7545;
          font-weight: 700;
        }
        
        .uv-investment-card h3 {
          margin: 12px 0 10px;
          font: 23px/1.2 Georgia, serif;
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
          border: 1px solid rgba(181, 139, 82, .19);
          border-radius: 16px;
          background: rgba(255, 255, 255, .46);
        }
        
        .uv-investment-disclaimer > span {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: .13em;
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
          background: radial-gradient(ellipse at 50% 0, rgba(201, 164, 106, .17), transparent 58%), #faf7f1;
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

        .uv-purpose { padding-top: 35px; }
        .uv-purpose-heading { max-width: 700px; margin-bottom: 42px; }
        .uv-purpose-heading h2 { margin: 20px 0 14px; font-size: clamp(36px, 4.5vw, 62px); line-height: 1.08; letter-spacing: -.045em; font-weight: 500; }
        .uv-purpose-heading h2 em, .uv-purpose-card h3 em, .uv-values-intro h3 em { color: var(--uv-gold); font-family: Georgia, serif; font-weight: 400; }
        .uv-purpose-heading p { max-width: 560px; color: var(--uv-muted); line-height: 1.9; font-size: 14px; }
        .uv-purpose-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .uv-purpose-card { min-height: 285px; padding: 32px; border: 1px solid var(--uv-line); border-radius: 20px; background: rgba(255,255,255,.62); box-shadow: 0 18px 50px rgba(90,66,35,.045); }
        .uv-purpose-card-featured { background: linear-gradient(135deg, rgba(222,199,159,.28), rgba(255,255,255,.78)); }
        .uv-purpose-number { display: block; color: var(--uv-gold); font-size: 12px; letter-spacing: .15em; margin-bottom: 28px; }
        .uv-purpose-label { display: block; color: #987345; font-size: 9px; font-weight: 750; letter-spacing: .17em; }
        .uv-purpose-card h3 { font-size: clamp(24px, 2.5vw, 34px); line-height: 1.2; font-weight: 500; margin: 12px 0; letter-spacing: -.025em; }
        .uv-purpose-card p, .uv-values-grid p { color: var(--uv-muted); font-size: 13px; line-height: 1.85; }
        .uv-values-block { margin-top: 85px; display: grid; grid-template-columns: .7fr 1.3fr; gap: 55px; }
        .uv-values-intro h3 { margin: 18px 0; font-size: clamp(30px, 3.4vw, 44px); line-height: 1.15; font-weight: 500; }
        .uv-values-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px 30px; }
        .uv-values-grid article { padding-top: 17px; border-top: 1px solid var(--uv-line); }
        .uv-values-grid article > span { color: var(--uv-gold); font-size: 10px; letter-spacing: .12em; }
        .uv-values-grid h4 { font-size: 16px; font-weight: 600; margin: 10px 0 5px; }
        .uv-commitment { margin-top: 65px; padding: 30px 34px; border: 1px solid var(--uv-line); border-radius: 18px; background: rgba(255,255,255,.5); }
        .uv-commitment p { max-width: 900px; margin: 14px 0 0; font-family: Georgia, serif; font-size: clamp(20px, 2.4vw, 29px); line-height: 1.55; color: var(--uv-ink); }
        @media (max-width: 760px) {
          .uv-purpose { padding-top: 10px; }
          .uv-purpose-grid, .uv-values-block { grid-template-columns: 1fr; }
          .uv-purpose-card { min-height: auto; padding: 26px; }
          .uv-values-block { gap: 24px; margin-top: 55px; }
          .uv-values-grid { gap: 22px 18px; }
          .uv-commitment { margin-top: 45px; padding: 24px; }
        }

      `}</style>
        </main>
    );
}
