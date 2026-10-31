"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import masterplanImg from "/public/images/slider/hero-slide/img-1-.png";

export default function ContactSection() {
    const sectionRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        interest: "Book a Site Visit",
        contactTime: "Anytime",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const elements = section.querySelectorAll("[data-reveal]");

        if (!("IntersectionObserver" in window)) {
            elements.forEach((element) =>
                element.classList.add("uv-contact-visible")
            );
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("uv-contact-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);
        setStatus("");

        try {
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Unable to submit request.");
            }

            setStatus(
                "Thank you! Your request has been received. Our team will contact you soon."
            );

            setFormData({
                name: "",
                phone: "",
                email: "",
                interest: "Book a Site Visit",
                contactTime: "Anytime",
                message: "",
            });
        } catch (error) {
            setStatus(
                "We couldn't submit your request. Please try again or contact our team directly."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section
                id="contact"
                ref={sectionRef}
                className="uv-contact-section"
            >
                {/* Background decoration */}
                <div className="uv-contact-orb uv-contact-orb-one" />
                <div className="uv-contact-orb uv-contact-orb-two" />
                <div className="uv-contact-orb uv-contact-orb-three" />

                <div className="uv-contact-container">

                    {/* SECTION HEADING */}
                    <div
                        className="uv-contact-heading"
                        data-reveal
                    >
                        <div className="uv-contact-eyebrow">
                            <span className="uv-contact-eyebrow-line" />
                            <span>LET'S CONNECT</span>
                            <span className="uv-contact-eyebrow-line" />
                        </div>

                        <h2>
                            Every Great Journey
                            <br />
                            <span>Begins With A Conversation.</span>
                        </h2>

                        <p>
                            Whether you're exploring a new home or looking
                            for an investment opportunity, we're here to
                            help you discover MUHAJIREEN.
                        </p>
                    </div>

                    {/* MAIN GRID */}
                    <div className="uv-contact-grid">

                        {/* LEFT SIDE */}
                        <div className="uv-contact-left">

                            {/* PROJECT IMAGE */}
                            <div
                                className="uv-contact-image"
                                data-reveal
                            >
                                <Image
                                    src={masterplanImg}
                                    alt="Uttara View Master Plan"
                                    fill
                                    sizes="(max-width: 767px) 100vw, 48vw"
                                    className="uv-contact-main-image"
                                />

                                <div className="uv-contact-image-overlay" />

                                <div className="uv-contact-image-top">
                                    <span className="uv-live-dot" />
                                    <span>DISCOVER MUHAJIREEN</span>
                                </div>

                                <div className="uv-contact-image-content">
                                    <span>YOUR NEXT CHAPTER STARTS HERE</span>
                                    <h3 style={{ color: 'white' }}>
                                        A Place To
                                        <br />
                                        Belong.
                                    </h3>
                                </div>

                                <div className="uv-contact-image-index">
                                    <span>UTTARA</span>
                                    <span className="uv-contact-index-line" />
                                    <span>DHAKA</span>
                                </div>
                            </div>

                            {/* FLOATING GLASS CARD */}
                            <div
                                className="uv-contact-floating-card"
                                data-reveal
                            >
                                <div className="uv-floating-card-top">
                                    <span>PERSONAL ASSISTANCE</span>
                                    <span className="uv-floating-icon">↗</span>
                                </div>

                                <h3>
                                    Your Vision.
                                    <br />
                                    Our Commitment.
                                </h3>

                                <div className="uv-floating-card-bottom">
                                    <span />
                                    <p>
                                        Let's make your MUHAJIREEN
                                        experience meaningful.
                                    </p>
                                </div>
                            </div>

                            {/* CONTACT INFORMATION */}
                            <div
                                className="uv-contact-info-card"
                                data-reveal
                            >
                                <div className="uv-contact-info-heading">
                                    <span>WE'RE HERE TO HELP</span>
                                    <h3>Get In Touch</h3>
                                </div>

                                <div className="uv-contact-info-list">

                                    <div className="uv-contact-info-item">
                                        <div className="uv-info-icon">
                                            <svg viewBox="0 0 24 24">
                                                <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                                                <circle cx="12" cy="9" r="2.3" />
                                            </svg>
                                        </div>

                                        <div>
                                            <small>OUR LOCATION</small>
                                            <strong> Uttara, Dhaka</strong>
                                        </div>
                                    </div>

                                    <div className="uv-contact-info-item">
                                        <div className="uv-info-icon">
                                            <svg viewBox="0 0 24 24">
                                                <path d="M6.5 3.5h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z" />
                                            </svg>
                                        </div>

                                        <div>
                                            <small>CALL OUR TEAM</small>
                                            <strong>+880 1XXXXXXXXX</strong>
                                        </div>
                                    </div>

                                    <div className="uv-contact-info-item">
                                        <div className="uv-info-icon">
                                            <svg viewBox="0 0 24 24">
                                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                                <path d="m4 7 8 6 8-6" />
                                            </svg>
                                        </div>

                                        <div>
                                            <small>EMAIL ADDRESS</small>
                                            <strong>info@muhajireen.com.bd</strong>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        {/* RIGHT SIDE FORM */}
                        <div
                            className="uv-contact-form-card"
                            data-reveal
                        >
                            <div className="uv-form-top">
                                <div>
                                    <span className="uv-form-eyebrow">
                                        START A CONVERSATION
                                    </span>

                                    <h3>
                                        Let's Make
                                        <br />
                                        It Happen.
                                    </h3>

                                    <p>
                                        Tell us a little about what you're
                                        looking for. Our team will be happy
                                        to assist you.
                                    </p>
                                </div>

                                <div className="uv-form-decoration">
                                    ✳
                                </div>
                            </div>

                            <div className="uv-form-divider">
                                <span />
                            </div>

                            <form onSubmit={handleSubmit}>

                                {/* NAME + PHONE */}
                                <div className="uv-form-row">

                                    <div className="uv-form-group">
                                        <label htmlFor="uv-name">
                                            FULL NAME <span>*</span>
                                        </label>

                                        <input
                                            id="uv-name"
                                            type="text"
                                            name="name"
                                            placeholder="Your full name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            autoComplete="name"
                                            required
                                        />
                                    </div>

                                    <div className="uv-form-group">
                                        <label htmlFor="uv-phone">
                                            PHONE NUMBER <span>*</span>
                                        </label>

                                        <input
                                            id="uv-phone"
                                            type="tel"
                                            name="phone"
                                            placeholder="+880 1XXXXXXXXX"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            autoComplete="tel"
                                            required
                                        />
                                    </div>

                                </div>

                                {/* EMAIL */}
                                <div className="uv-form-group">
                                    <label htmlFor="uv-email">
                                        EMAIL ADDRESS
                                    </label>

                                    <input
                                        id="uv-email"
                                        type="email"
                                        name="email"
                                        placeholder="Your email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                    />
                                </div>

                                {/* INTEREST + TIME */}
                                <div className="uv-form-row">

                                    <div className="uv-form-group">
                                        <label htmlFor="uv-interest">
                                            I'M INTERESTED IN <span>*</span>
                                        </label>

                                        <select
                                            id="uv-interest"
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option>Book a Site Visit</option>
                                            <option>Residential Apartment</option>
                                            <option>Commercial Space</option>
                                            <option>Hospital / Healthcare</option>
                                            <option>Project Information</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div className="uv-form-group">
                                        <label htmlFor="uv-time">
                                            CONTACT TIME
                                        </label>

                                        <select
                                            id="uv-time"
                                            name="contactTime"
                                            value={formData.contactTime}
                                            onChange={handleChange}
                                        >
                                            <option>Anytime</option>
                                            <option>Morning</option>
                                            <option>Afternoon</option>
                                            <option>Evening</option>
                                        </select>
                                    </div>

                                </div>

                                {/* MESSAGE */}
                                <div className="uv-form-group">
                                    <label htmlFor="uv-message">
                                        YOUR MESSAGE
                                    </label>

                                    <textarea
                                        id="uv-message"
                                        name="message"
                                        rows="3"
                                        placeholder="Tell us what you have in mind..."
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* SUBMIT */}
                                <button
                                    type="submit"
                                    className="uv-contact-submit"
                                    disabled={isSubmitting}
                                >
                                    <span>
                                        {isSubmitting
                                            ? "SUBMITTING..."
                                            : "REQUEST A CONSULTATION"}
                                    </span>

                                    <span className="uv-submit-icon">
                                        ↗
                                    </span>
                                </button>

                                {status && (
                                    <p
                                        className="uv-form-status"
                                        role="status"
                                        aria-live="polite"
                                    >
                                        {status}
                                    </p>
                                )}

                                <div className="uv-form-privacy">
                                    <span>✧</span>
                                    Your information stays private and
                                    will only be used to contact you.
                                </div>

                            </form>
                        </div>
                    </div>

                    {/* BOTTOM BRAND LINE */}
                    <div
                        className="uv-contact-bottom"
                        data-reveal
                    >
                        <span>YOUR FUTURE BEGINS WITH A CONVERSATION</span>
                        <div />
                        <span>MUHAJIREEN</span>
                    </div>

                </div>
            </section>

            <style jsx global>{`

                .uv-contact-section {
                    --uv-gold: #c9a46a;
                    --uv-gold-dark: #9c7941;
                    --uv-beige: #a58b68;
                    --uv-ink: #443d34;
                    --uv-muted: #847873;
                    --uv-cream: #f7f1e8;

                    position: relative;
                    isolation: isolate;
                    overflow: hidden;
                    width: 100%;
                    height: 120vh;
                    min-height: 800px;
                    max-height: 1100px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 0;
                    color: var(--uv-ink);

                    background:
                        radial-gradient(
                            ellipse at 85% 12%,
                            rgba(201,164,106,0.17),
                            transparent 34%
                        ),
                        radial-gradient(
                            ellipse at 8% 78%,
                            rgba(165,139,104,0.08),
                            transparent 35%
                        ),
                        linear-gradient(
                            135deg,
                            #fffdf9,
                            #f8f4ee 52%,
                            #ffffff
                        );
                }

                .uv-contact-section,
                .uv-contact-section * {
                    box-sizing: border-box;
                }

                .uv-contact-container {
                    position: relative;
                    z-index: 2;
                    width: min(1320px, calc(100% - 64px));
                    margin: 0 auto;
                    max-height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                /* BACKGROUND ORBS */

                .uv-contact-orb {
                    position: absolute;
                    z-index: -1;
                    pointer-events: none;
                    border: 1px solid rgba(201,164,106,0.2);
                    border-radius: 50%;
                    box-shadow: inset 0 0 55px rgba(255,255,255,0.4);
                }

                .uv-contact-orb-one {
                    top: 5%;
                    right: -180px;
                    width: 400px;
                    height: 400px;
                }

                .uv-contact-orb-two {
                    bottom: 8%;
                    left: -170px;
                    width: 350px;
                    height: 350px;
                }

                .uv-contact-orb-three {
                    top: 48%;
                    right: 42%;
                    width: 110px;
                    height: 110px;
                    border-color: rgba(201,164,106,0.12);
                }

                /* HEADING */

                .uv-contact-heading {
                    max-width: 750px;
                    margin: 0 auto 30px;
                    text-align: center;
                }

                .uv-contact-eyebrow {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 12px;
                    color: var(--uv-gold-dark);
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 0.22em;
                }

                .uv-contact-eyebrow-line {
                    width: 30px;
                    height: 1px;
                    background: var(--uv-gold);
                }

                .uv-contact-heading h2 {
                    margin: 0 0 10px;
                    color: #443d34;
                    font-size: clamp(28px, 3.5vh, 46px);
                    font-weight: 500;
                    line-height: 1.1;
                    letter-spacing: -0.002em;
                }

                .uv-contact-heading h2 span {
                    color: var(--uv-gold-dark);
                    font-family: Georgia, "Times New Roman", serif;
                    font-style: italic;
                    font-weight: 400;
                }

                .uv-contact-heading p {
                    max-width: 580px;
                    margin: 0 auto;
                    color: #766c68;
                    font-size: 11.5px;
                    line-height: 1.6;
                }

                /* MAIN GRID */

                .uv-contact-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
                    align-items: stretch;
                    gap: clamp(25px, 3.5vw, 50px);
                }

                .uv-contact-left {
                    position: relative;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                }

                /* PROJECT IMAGE */

                .uv-contact-image {
                    position: relative;
                    height: 310px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.9);
                    border-radius: 20px;
                    background: #e7d9c8;
                    box-shadow: 0 16px 45px rgba(107,91,72,0.1);
                }

                .uv-contact-main-image {
                    object-fit: cover;
                }

                .uv-contact-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        180deg,
                        rgba(40,35,28,0.12),
                        transparent 35%,
                        rgba(40,35,28,0.68) 100%
                    );
                }

                .uv-contact-image-top {
                    position: absolute;
                    top: 14px;
                    left: 14px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 6px 12px;
                    border: 1px solid rgba(255,255,255,0.55);
                    border-radius: 99px;
                    background: rgba(255,255,255,0.18);
                    color: white;
                    font-size: 8px;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    backdrop-filter: blur(12px);
                }

                .uv-live-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #e6c28a;
                }

                .uv-contact-image-content {
                    position: absolute;
                    left: 20px;
                    bottom: 20px;
                    color: white;
                }

                .uv-contact-image-content > span {
                    color: #e6c28a;
                    font-size: 8px;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                }

                .uv-contact-image-content h3 {
                    margin: 6px 0 0;
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: clamp(26px, 2.8vh, 36px);
                    font-weight: 400;
                    line-height: 1.1;
                }

                .uv-contact-image-index {
                    position: absolute;
                    right: 18px;
                    bottom: 18px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: rgba(255,255,255,0.88);
                    font-size: 8px;
                    letter-spacing: 0.12em;
                }

                .uv-contact-index-line {
                    width: 20px;
                    height: 1px;
                    background: rgba(255,255,255,0.7);
                }

                /* FLOATING GLASS CARD */

                .uv-contact-floating-card {
                    position: absolute;
                    bottom: 30%;
                    right: -8%;
                    z-index: 3;
                    width: min(300px, 80%);
                    padding: 18px;
                    border: 1px solid rgba(255,255,255,0.88);
                    border-radius: 16px;
                    background: linear-gradient(
                        145deg,
                        rgba(255,255,255,0.88),
                        rgba(255,250,241,0.65)
                    );
                    box-shadow: 0 15px 40px rgba(107,91,72,0.1);
                    backdrop-filter: blur(20px);
                }

                .uv-floating-card-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .uv-floating-card-top > span:first-child {
                    color: #8b7162;
                    font-size: 8px;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                }

                .uv-floating-icon {
                    display: grid;
                    width: 28px;
                    height: 28px;
                    place-items: center;
                    border: 1px solid rgba(156,121,65,0.3);
                    border-radius: 50%;
                    color: var(--uv-gold-dark);
                    background: rgba(255,255,255,0.5);
                    font-size: 14px;
                }

                .uv-contact-floating-card h3 {
                    margin: 10px 0;
                    color: #7d5b32;
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 1.15;
                }

                .uv-floating-card-bottom {
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    padding-top: 10px;
                    border-top: 1px solid rgba(165,139,104,0.15);
                }

                .uv-floating-card-bottom > span {
                    width: 5px;
                    height: 5px;
                    flex-shrink: 0;
                    margin-top: 5px;
                    border-radius: 50%;
                    background: var(--uv-gold);
                }

                .uv-floating-card-bottom p {
                    margin: 0;
                    color: #776962;
                    font-size: 9.5px;
                    line-height: 1.5;
                }

                /* CONTACT DETAILS */

                .uv-contact-info-card {
                    margin-top: 16px;
                    padding: 18px 20px;
                    border: 1px solid rgba(255,255,255,0.85);
                    border-radius: 18px;
                    background: linear-gradient(
                        135deg,
                        rgba(255,255,255,0.68),
                        rgba(255,255,255,0.35)
                    );
                    box-shadow: 0 10px 30px rgba(107,91,72,0.05);
                    backdrop-filter: blur(15px);
                }

                .uv-contact-info-heading > span {
                    color: var(--uv-gold-dark);
                    font-size: 8px;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                }

                .uv-contact-info-heading h3 {
                    margin: 4px 0 12px;
                    color: #443d34;
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: 20px;
                    font-weight: 400;
                }

                .uv-contact-info-list {
                    display: grid;
                    gap: 12px;
                }

                .uv-contact-info-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    min-width: 0;
                }

                .uv-info-icon {
                    display: grid;
                    width: 34px;
                    height: 34px;
                    flex-shrink: 0;
                    place-items: center;
                    border: 1px solid rgba(201,164,106,0.25);
                    border-radius: 10px;
                    background: rgba(255,255,255,0.62);
                }

                .uv-info-icon svg {
                    width: 16px;
                    height: 16px;
                    fill: none;
                    stroke: #9c7941;
                    stroke-width: 1.5;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                }

                .uv-contact-info-item > div:last-child {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                    min-width: 0;
                }

                .uv-contact-info-item small {
                    color: #a1845c;
                    font-size: 8px;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                }

                .uv-contact-info-item strong {
                    color: #51473e;
                    font-size: 11px;
                    font-weight: 600;
                    overflow-wrap: anywhere;
                }

                /* FORM GLASS CARD */

                .uv-contact-form-card {
                    position: relative;
                    min-width: 0;
                    padding: clamp(20px, 2.5vw, 30px);
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.92);
                    border-radius: 22px;
                    background: linear-gradient(
                        145deg,
                        rgba(255,255,255,0.82),
                        rgba(255,250,242,0.56)
                    );
                    box-shadow: 0 20px 60px rgba(107,91,72,0.08);
                    backdrop-filter: blur(20px);
                }

                .uv-form-top {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 12px;
                }

                .uv-form-eyebrow {
                    color: var(--uv-gold-dark);
                    font-size: 8px;
                    font-weight: 700;
                    letter-spacing: 0.16em;
                }

                .uv-form-top h3 {
                    margin: 8px 0 6px;
                    color: #443d34;
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: clamp(24px, 2.6vh, 32px);
                    font-weight: 400;
                    line-height: 1.1;
                }

                .uv-form-top p {
                    max-width: 360px;
                    margin: 0;
                    color: #827670;
                    font-size: 11px;
                    line-height: 1.5;
                }

                .uv-form-decoration {
                    display: grid;
                    width: 38px;
                    height: 38px;
                    flex-shrink: 0;
                    place-items: center;
                    border: 1px solid rgba(201,164,106,0.3);
                    border-radius: 12px;
                    background: rgba(255,255,255,0.55);
                    color: var(--uv-gold);
                    font-size: 20px;
                }

                .uv-form-divider {
                    height: 1px;
                    margin: 16px 0;
                    background: rgba(165,139,104,0.16);
                }

                /* INPUTS */

                .uv-form-row {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0,1fr));
                    gap: 12px;
                }

                .uv-form-group {
                    min-width: 0;
                    margin-bottom: 12px;
                }

                .uv-form-group label {
                    display: block;
                    margin-bottom: 5px;
                    color: #665a50;
                    font-size: 8px;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                }

                .uv-form-group label span {
                    color: #b38a50;
                }

                .uv-form-group input,
                .uv-form-group select,
                .uv-form-group textarea {
                    display: block;
                    width: 100%;
                    min-width: 0;
                    padding: 10px 12px;
                    border: 1px solid rgba(165,139,104,0.19);
                    border-radius: 10px;
                    outline: none;
                    color: #51473e;
                    background: rgba(255,255,255,0.55);
                    font-family: inherit;
                    font-size: 11px;
                    transition: all 0.3s ease;
                }

                .uv-form-group input:focus,
                .uv-form-group select:focus,
                .uv-form-group textarea:focus {
                    border-color: rgba(156,121,65,0.65);
                    background: rgba(255,255,255,0.9);
                    box-shadow: 0 0 0 3px rgba(201,164,106,0.1);
                }

                .uv-form-group textarea {
                    min-height: 65px;
                    resize: none;
                }

                /* SUBMIT BUTTON */

                .uv-contact-submit {
                    position: relative;
                    display: flex;
                    width: 100%;
                    min-height: 46px;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    padding: 6px 6px 6px 16px;
                    border: 1px solid rgba(255,255,255,0.7);
                    border-radius: 12px;
                    color: white;
                    background: linear-gradient(120deg, #a58b68, #846a48);
                    box-shadow: 0 8px 22px rgba(132,106,72,0.18);
                    cursor: pointer;
                    font-family: inherit;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    transition: all 0.3s ease;
                }

                .uv-contact-submit:hover:not(:disabled) {
                    transform: translateY(-2px);
                }

                .uv-contact-submit:disabled {
                    opacity: 0.65;
                    cursor: not-allowed;
                }

                .uv-submit-icon {
                    display: grid;
                    width: 32px;
                    height: 32px;
                    flex-shrink: 0;
                    place-items: center;
                    border-radius: 8px;
                    color: #846a48;
                    background: #fff;
                    font-size: 15px;
                }

                .uv-form-status {
                    margin: 10px 0 0;
                    padding: 8px 10px;
                    border-radius: 8px;
                    color: #725c3d;
                    background: rgba(255,255,255,0.58);
                    font-size: 10px;
                }

                .uv-form-privacy {
                    display: flex;
                    align-items: flex-start;
                    gap: 6px;
                    margin-top: 10px;
                    color: #948780;
                    font-size: 8px;
                }

                .uv-form-privacy span {
                    color: var(--uv-gold);
                }

                /* BOTTOM LINE */

                .uv-contact-bottom {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-top: 25px;
                    color: #8c7b73;
                    font-size: 8px;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                }

                .uv-contact-bottom div {
                    height: 1px;
                    flex: 1;
                    background: rgba(165,139,104,0.18);
                }

                .uv-contact-bottom span:last-child {
                    color: var(--uv-gold-dark);
                }

                /* SCROLL REVEAL */

                .uv-contact-section [data-reveal] {
                    opacity: 0;
                    transform: translate3d(0,20px,0);
                    transition: opacity 0.6s ease, transform 0.6s ease;
                }

                .uv-contact-section [data-reveal].uv-contact-visible {
                    opacity: 1;
                    transform: translate3d(0,0,0);
                }

                /* TABLET & MOBILE */

                @media (max-width: 900px) {
                    .uv-contact-section {
                        height: auto;
                        min-height: 120vh;
                        padding: 50px 0;
                    }

                    .uv-contact-floating-card {
                        display: none;
                    }

                    .uv-contact-grid {
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }

                    .uv-contact-image {
                        height: 240px;
                    }

                    .uv-form-row {
                        grid-template-columns: 1fr;
                        gap: 0;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .uv-contact-section *,
                    .uv-contact-section *::before,
                    .uv-contact-section *::after {
                        animation: none !important;
                        transition: none !important;
                    }
                }

            `}</style>
        </>
    );
}