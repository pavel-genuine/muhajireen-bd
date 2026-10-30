
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
                            help you discover Uttara View.
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
                                    <span>DISCOVER UTTARA VIEW</span>
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
                                        Let's make your Uttara View
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
                                            <strong>Uttara View, Uttara, Dhaka</strong>
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
                                            <strong>info@uttaraview.com</strong>
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
                                        rows="4"
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
                        <span>UTTARA VIEW</span>
                    </div>

                </div>
            </section>

            <style jsx global>{`

                /* =========================================
                   UTTARA VIEW CONTACT
                   MUHAJIREEN GLASSMORPHISM IDENTITY
                ========================================= */

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
                    padding: 120px 0 35px;
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
                    width: min(1380px, calc(100% - 100px));
                    margin: 0 auto;
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
                    width: 460px;
                    height: 460px;
                    animation: uv-contact-orb-float 13s ease-in-out infinite;
                }

                .uv-contact-orb-two {
                    bottom: 8%;
                    left: -170px;
                    width: 390px;
                    height: 390px;
                    animation: uv-contact-orb-float 16s ease-in-out infinite reverse;
                }

                .uv-contact-orb-three {
                    top: 48%;
                    right: 42%;
                    width: 130px;
                    height: 130px;
                    border-color: rgba(201,164,106,0.12);
                }

                @keyframes uv-contact-orb-float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-22px); }
                }

                /* HEADING */

                .uv-contact-heading {
                    max-width: 800px;
                    margin: 0 auto 75px;
                    text-align: center;
                }

                .uv-contact-eyebrow {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 13px;
                    margin-bottom: 25px;
                    color: var(--uv-gold-dark);
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.24em;
                }

                .uv-contact-eyebrow-line {
                    width: 36px;
                    height: 1px;
                    background: var(--uv-gold);
                    box-shadow: 0 0 12px rgba(201,164,106,0.4);
                }

                .uv-contact-heading h2 {
                    margin: 0 0 22px;
                    color: #443d34;
                    font-size: clamp(36px, 4.5vw, 61px);
                    font-weight: 500;
                    line-height: 1.12;
                    letter-spacing: -0.065em;
                }

                .uv-contact-heading h2 span {
                    color: var(--uv-gold-dark);
                    font-family: Georgia, "Times New Roman", serif;
                    font-style: italic;
                    font-weight: 400;
                    letter-spacing: -0.055em;
                }

                .uv-contact-heading p {
                    max-width: 650px;
                    margin: 0 auto;
                    color: #766c68;
                    font-size: 14px;
                    line-height: 1.9;
                }

                /* MAIN GRID */

                .uv-contact-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
                    align-items: start;
                    gap: clamp(35px, 5vw, 75px);
                }

                .uv-contact-left {
                    position: relative;
                    min-width: 0;
                    padding-bottom: 25px;
                }

                /* PROJECT IMAGE */

                .uv-contact-image {
                    position: relative;
                    height: 470px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.9);
                    border-radius: 28px;
                    background: #e7d9c8;
                    box-shadow:
                        0 30px 85px rgba(107,91,72,0.16),
                        inset 0 1px 0 rgba(255,255,255,0.8);
                }

                .uv-contact-main-image {
                    object-fit: cover;
                    transition: transform 1.2s cubic-bezier(0.2,0.7,0.2,1);
                }

                .uv-contact-image:hover .uv-contact-main-image {
                    transform: scale(1.045);
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
                    top: 22px;
                    left: 22px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 11px 16px;
                    border: 1px solid rgba(255,255,255,0.55);
                    border-radius: 99px;
                    background: rgba(255,255,255,0.18);
                    color: white;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    backdrop-filter: blur(15px);
                    -webkit-backdrop-filter: blur(15px);
                }

                .uv-live-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #e6c28a;
                    box-shadow: 0 0 12px #e6c28a;
                }

                .uv-contact-image-content {
                    position: absolute;
                    left: 35px;
                    bottom: 40px;
                    color: white;
                }

                .uv-contact-image-content > span {
                    color: #e6c28a;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 0.19em;
                }

                .uv-contact-image-content h3 {
                    margin: 13px 0 0;
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: clamp(38px, 4vw, 54px);
                    font-weight: 400;
                    line-height: 1.08;
                    letter-spacing: -0.045em;
                }

                .uv-contact-image-index {
                    position: absolute;
                    right: 25px;
                    bottom: 30px;
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    color: rgba(255,255,255,0.88);
                    font-size: 9px;
                    letter-spacing: 0.14em;
                }

                .uv-contact-index-line {
                    width: 25px;
                    height: 1px;
                    background: rgba(255,255,255,0.7);
                }

                /* FLOATING GLASS CARD */

                

                .uv-contact-floating-card {
                    position: absolute;
                    bottom:25%;
                    right:-10%;
                    z-index: 3;
                 
                    width: min(340px, 85%);
                    margin: -85px 0 0 -20px;
                    padding: 25px;
                    border: 1px solid rgba(255,255,255,0.88);
                    border-radius: 23px;
                    background: linear-gradient(
                        145deg,
                        rgba(255,255,255,0.84),
                        rgba(255,250,241,0.57)
                    );
                    box-shadow:
                        0 25px 65px rgba(107,91,72,0.14),
                        inset 0 1px 0 rgba(255,255,255,0.98);
                    backdrop-filter: blur(28px) saturate(145%);
                    -webkit-backdrop-filter: blur(28px) saturate(145%);
                    animation: uv-contact-card-float 7s ease-in-out infinite;
                }

                @keyframes uv-contact-card-float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-9px); }
                }

                .uv-floating-card-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .uv-floating-card-top > span:first-child {
                    color: #8b7162;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 0.16em;
                }

                .uv-floating-icon {
                    display: grid;
                    width: 36px;
                    height: 36px;
                    place-items: center;
                    border: 1px solid rgba(156,121,65,0.3);
                    border-radius: 50%;
                    color: var(--uv-gold-dark);
                    background: rgba(255,255,255,0.5);
                    font-size: 18px;
                }

                .uv-contact-floating-card h3 {
                    margin: 23px 0;
                    color: #7d5b32;
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: 30px;
                    font-weight: 400;
                    line-height: 1.2;
                    letter-spacing: -0.04em;
                }

                .uv-floating-card-bottom {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    padding-top: 16px;
                    border-top: 1px solid rgba(165,139,104,0.15);
                }

                .uv-floating-card-bottom > span {
                    width: 6px;
                    height: 6px;
                    flex-shrink: 0;
                    margin-top: 6px;
                    border-radius: 50%;
                    background: var(--uv-gold);
                }

                .uv-floating-card-bottom p {
                    margin: 0;
                    color: #776962;
                    font-size: 11px;
                    line-height: 1.7;
                }

                /* CONTACT DETAILS */

                .uv-contact-info-card {
                    margin-top: 30px;
                    padding: 27px;
                    border: 1px solid rgba(255,255,255,0.85);
                    border-radius: 22px;
                    background: linear-gradient(
                        135deg,
                        rgba(255,255,255,0.68),
                        rgba(255,255,255,0.35)
                    );
                    box-shadow:
                        0 16px 45px rgba(107,91,72,0.07),
                        inset 0 1px 0 rgba(255,255,255,0.9);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                }

                .uv-contact-info-heading > span {
                    color: var(--uv-gold-dark);
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                }

                .uv-contact-info-heading h3 {
                    margin: 8px 0 22px;
                    color: #443d34;
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: 27px;
                    font-weight: 400;
                }

                .uv-contact-info-list {
                    display: grid;
                    gap: 19px;
                }

                .uv-contact-info-item {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    min-width: 0;
                }

                .uv-info-icon {
                    display: grid;
                    width: 43px;
                    height: 43px;
                    flex-shrink: 0;
                    place-items: center;
                    border: 1px solid rgba(201,164,106,0.25);
                    border-radius: 13px;
                    background: rgba(255,255,255,0.62);
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.9);
                }

                .uv-info-icon svg {
                    width: 19px;
                    height: 19px;
                    fill: none;
                    stroke: #9c7941;
                    stroke-width: 1.5;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                }

                .uv-contact-info-item > div:last-child {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    min-width: 0;
                }

                .uv-contact-info-item small {
                    color: #a1845c;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                }

                .uv-contact-info-item strong {
                    color: #51473e;
                    font-size: 12px;
                    font-weight: 600;
                    overflow-wrap: anywhere;
                }

                /* FORM GLASS CARD */

                .uv-contact-form-card {
                    position: relative;
                    min-width: 0;
                    padding: clamp(25px, 3.3vw, 43px);
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.92);
                    border-radius: 30px;
                    background: linear-gradient(
                        145deg,
                        rgba(255,255,255,0.82),
                        rgba(255,250,242,0.56)
                    );
                    box-shadow:
                        0 30px 90px rgba(107,91,72,0.12),
                        inset 0 1px 0 rgba(255,255,255,0.98),
                        inset 0 -1px 0 rgba(255,255,255,0.4);
                    backdrop-filter: blur(30px) saturate(150%);
                    -webkit-backdrop-filter: blur(30px) saturate(150%);
                }

                .uv-contact-form-card::before {
                    content: "";
                    position: absolute;
                    top: -100px;
                    right: -100px;
                    width: 260px;
                    height: 260px;
                    pointer-events: none;
                    border-radius: 50%;
                    background: radial-gradient(
                        circle,
                        rgba(201,164,106,0.13),
                        transparent 70%
                    );
                }

                .uv-form-top {
                    position: relative;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 15px;
                }

                .uv-form-eyebrow {
                    color: var(--uv-gold-dark);
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 0.19em;
                }

                .uv-form-top h3 {
                    margin: 14px 0 12px;
                    color: #443d34;
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: clamp(35px, 3.4vw, 47px);
                    font-weight: 400;
                    line-height: 1.12;
                    letter-spacing: -0.05em;
                }

                .uv-form-top p {
                    max-width: 400px;
                    margin: 0;
                    color: #827670;
                    font-size: 12px;
                    line-height: 1.8;
                }

                .uv-form-decoration {
                    display: grid;
                    width: 52px;
                    height: 52px;
                    flex-shrink: 0;
                    place-items: center;
                    border: 1px solid rgba(201,164,106,0.3);
                    border-radius: 18px;
                    background: rgba(255,255,255,0.55);
                    color: var(--uv-gold);
                    font-size: 29px;
                    box-shadow: inset 0 1px 0 white;
                }

                .uv-form-divider {
                    height: 1px;
                    margin: 28px 0;
                    background: rgba(165,139,104,0.16);
                }

                .uv-form-divider span {
                    display: block;
                    width: 55px;
                    height: 2px;
                    background: var(--uv-gold);
                }

                /* INPUTS */

                .uv-form-row {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0,1fr));
                    gap: 17px;
                }

                .uv-form-group {
                    min-width: 0;
                    margin-bottom: 20px;
                }

                .uv-form-group label {
                    display: block;
                    margin-bottom: 9px;
                    color: #665a50;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 0.12em;
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
                    padding: 14px 15px;
                    border: 1px solid rgba(165,139,104,0.19);
                    border-radius: 13px;
                    outline: none;
                    color: #51473e;
                    background: rgba(255,255,255,0.55);
                    box-shadow:
                        inset 0 1px 3px rgba(107,91,72,0.025),
                        0 4px 15px rgba(107,91,72,0.025);
                    font-family: inherit;
                    font-size: 12px;
                    transition:
                        border-color 0.3s ease,
                        background 0.3s ease,
                        box-shadow 0.3s ease,
                        transform 0.3s ease;
                }

                .uv-form-group input::placeholder,
                .uv-form-group textarea::placeholder {
                    color: #aaa09a;
                }

                .uv-form-group input:focus,
                .uv-form-group select:focus,
                .uv-form-group textarea:focus {
                    border-color: rgba(156,121,65,0.65);
                    background: rgba(255,255,255,0.9);
                    box-shadow:
                        0 0 0 4px rgba(201,164,106,0.10),
                        0 8px 22px rgba(107,91,72,0.06);
                    transform: translateY(-1px);
                }

                .uv-form-group select {
                    cursor: pointer;
                }

                .uv-form-group textarea {
                    min-height: 105px;
                    resize: vertical;
                    line-height: 1.7;
                }

                /* SUBMIT BUTTON */

                .uv-contact-submit {
                    position: relative;
                    display: flex;
                    width: 100%;
                    min-height: 59px;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    padding: 9px 10px 9px 23px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.7);
                    border-radius: 15px;
                    color: white;
                    background: linear-gradient(
                        120deg,
                        #a58b68,
                        #846a48
                    );
                    box-shadow:
                        0 12px 30px rgba(132,106,72,0.20),
                        inset 0 1px 0 rgba(255,255,255,0.2);
                    cursor: pointer;
                    font-family: inherit;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    transition:
                        transform 0.3s ease,
                        box-shadow 0.3s ease,
                        background 0.3s ease;
                }

                .uv-contact-submit::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    background: linear-gradient(
                        110deg,
                        transparent 15%,
                        rgba(255,255,255,0.18) 48%,
                        transparent 75%
                    );
                    transform: translateX(-120%);
                    transition: transform 0.7s ease;
                }

                .uv-contact-submit:hover::before {
                    transform: translateX(120%);
                }

                .uv-contact-submit:hover:not(:disabled) {
                    transform: translateY(-3px);
                    box-shadow: 0 17px 38px rgba(132,106,72,0.26);
                }

                .uv-contact-submit:disabled {
                    opacity: 0.65;
                    cursor: not-allowed;
                }

                .uv-submit-icon {
                    position: relative;
                    z-index: 1;
                    display: grid;
                    width: 39px;
                    height: 39px;
                    flex-shrink: 0;
                    place-items: center;
                    border: 1px solid rgba(255,255,255,0.65);
                    border-radius: 11px;
                    color: #846a48;
                    background: linear-gradient(
                        145deg,
                        rgba(255,255,255,0.98),
                        rgba(247,241,232,0.82)
                    );
                    font-size: 19px;
                    transition: transform 0.3s ease;
                }

                .uv-contact-submit:hover .uv-submit-icon {
                    transform: rotate(45deg);
                }

                .uv-form-status {
                    margin: 15px 0 0;
                    padding: 12px 14px;
                    border: 1px solid rgba(201,164,106,0.2);
                    border-radius: 12px;
                    color: #725c3d;
                    background: rgba(255,255,255,0.58);
                    font-size: 11px;
                    line-height: 1.7;
                }

                .uv-form-privacy {
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    margin-top: 19px;
                    color: #948780;
                    font-size: 9px;
                    line-height: 1.7;
                }

                .uv-form-privacy span {
                    color: var(--uv-gold);
                }

                /* BOTTOM LINE */

                .uv-contact-bottom {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin-top: 85px;
                    color: #8c7b73;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                }

                .uv-contact-bottom div {
                    height: 1px;
                    flex: 1;
                    background: rgba(165,139,104,0.18);
                }

                .uv-contact-bottom span:last-child {
                    color: var(--uv-gold-dark);
                    white-space: nowrap;
                }

                /* SCROLL REVEAL */

                .uv-contact-section [data-reveal] {
                    opacity: 0;
                    transform: translate3d(0,30px,0);
                    transition:
                        opacity 0.8s ease,
                        transform 0.9s cubic-bezier(0.2,0.7,0.2,1);
                }

                .uv-contact-section [data-reveal].uv-contact-visible {
                    opacity: 1;
                    transform: translate3d(0,0,0);
                }

                .uv-contact-left > [data-reveal]:nth-child(1) {
                    transition-delay: 0.08s;
                }

                .uv-contact-left > [data-reveal]:nth-child(2) {
                    transition-delay: 0.22s;
                }

                .uv-contact-left > [data-reveal]:nth-child(3) {
                    transition-delay: 0.34s;
                }

                .uv-contact-form-card[data-reveal] {
                    transition-delay: 0.2s;
                }

                /* TABLET */

                @media (max-width: 1100px) {
                    .uv-contact-container {
                        width: calc(100% - 64px);
                    }
                         .uv-contact-floating-card {
                    display:none;
                 }

                    .uv-contact-grid {
                        gap: 35px;
                    }

                    .uv-contact-image {
                        height: 410px;
                    }

                    .uv-contact-floating-card {
                        margin-left: -10px;
                    }

                    .uv-contact-form-card {
                        padding: 28px;
                    }

                    .uv-contact-bottom {
                        margin-top: 65px;
                    }
                }

                /* MOBILE */

               

                @media (max-width: 767px) {
                    .uv-contact-section {
                        padding: 80px 0 28px;
                    }

                   .uv-contact-floating-card {
                    display:none;
                 }

                    .uv-contact-container {
                        width: calc(100% - 40px);
                    }

                    .uv-contact-heading {
                        margin-bottom: 45px;
                    }

                    .uv-contact-heading h2 {
                        font-size: clamp(34px, 9vw, 49px);
                    }

                    .uv-contact-heading p {
                        font-size: 13px;
                    }

                    .uv-contact-grid {
                        grid-template-columns: minmax(0,1fr);
                        gap: 45px;
                    }

                    .uv-contact-image {
                        height: 330px;
                        border-radius: 22px;
                    }

                    .uv-contact-image-content {
                        left: 23px;
                        bottom: 28px;
                    }

                    .uv-contact-image-content h3 {
                        font-size: 42px;
                    }

                    .uv-contact-floating-card {
                        width: min(300px, 88%);
                        margin-top: -65px;
                        margin-left: -5px;
                        padding: 21px;
                        border-radius: 20px;
                    }

                    .uv-contact-floating-card h3 {
                        font-size: 27px;
                    }

                    .uv-contact-info-card {
                        padding: 22px;
                        border-radius: 19px;
                    }

                    .uv-contact-form-card {
                        padding: 27px 20px;
                        border-radius: 23px;
                    }

                    .uv-form-top h3 {
                        font-size: 38px;
                    }

                    .uv-form-decoration {
                        width: 43px;
                        height: 43px;
                        border-radius: 14px;
                    }

                    .uv-form-row {
                        grid-template-columns: minmax(0,1fr);
                        gap: 0;
                    }

                    .uv-contact-bottom {
                        gap: 10px;
                        margin-top: 60px;
                        font-size: 7px;
                        letter-spacing: 0.08em;
                    }
                }

                @media (max-width: 380px) {
                    .uv-contact-container {
                        width: calc(100% - 30px);
                    }

                    .uv-contact-image {
                        height: 290px;
                    }

                    .uv-contact-image-index {
                        right: 15px;
                        bottom: 18px;
                        font-size: 8px;
                    }

                    .uv-contact-form-card {
                        padding: 23px 16px;
                    }

                    .uv-form-decoration {
                        display: none;
                    }

                    .uv-contact-bottom {
                        font-size: 6px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .uv-contact-section *,
                    .uv-contact-section *::before,
                    .uv-contact-section *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }

                    .uv-contact-section [data-reveal] {
                        opacity: 1;
                        transform: none;
                    }
                }

            `}</style>
        </>
    );
}
