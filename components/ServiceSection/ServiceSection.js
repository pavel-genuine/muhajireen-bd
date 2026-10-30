"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Services from "../../api/Services";

import Topimage from "/public/images/slider/hero-slide/img-1.1.png";

const ServiceSection = (props) => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.12 }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    const styles = {
        section: {
            position: "relative",
            overflow: "hidden",
            padding: "clamp(65px, 8vw, 115px) 0",
            background:
                "radial-gradient(ellipse at 8% 15%, rgba(201,156,88,.09), transparent 35%), linear-gradient(145deg, #f5eee8 0%, #f1e7df 55%, #faf4ed 100%)",
            color: "#351823",
            isolation: "isolate",
        },

        container: {
            width: "min(1320px, 90%)",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
        },

        hero: {
            position: "relative",
            minHeight: "clamp(340px, 42vw, 530px)",
            display: "flex",
            alignItems: "flex-end",
            overflow: "hidden",
            borderRadius: "8px",
            marginBottom: "clamp(65px, 8vw, 105px)",
            background: "#e8ded1",
            boxShadow: "0 20px 60px rgba(53,24,35,.09)",
            transform: visible ? "translateY(0)" : "translateY(28px)",
            opacity: visible ? 1 : 0,
            transition: "opacity .8s ease, transform .8s ease",
        },

        heroImage: {
            objectFit: "cover",
            objectPosition: "center",
        },

        heroOverlay: {
            position: "absolute",
            inset: 0,
            background:
                "linear-gradient(90deg, rgba(35,23,26,.64) 0%, rgba(35,23,26,.28) 58%, rgba(35,23,26,.03) 100%), linear-gradient(0deg, rgba(35,23,26,.24), transparent 65%)",
        },

        heroContent: {
            position: "relative",
            zIndex: 1,
            width: "min(750px, 90%)",
            padding: "clamp(28px, 5vw, 68px)",
            color: "#fff",
        },

        eyebrow: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "22px",
            color: "#f0d4a2",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "2.8px",
            textTransform: "uppercase",
        },

        line: {
            width: "34px",
            height: "1px",
            background: "#d3ae77",
            flexShrink: 0,
        },

        heading: {
            margin: "0 0 22px",
            fontSize: "clamp(36px, 5.2vw, 70px)",
            lineHeight: 1.07,
            letterSpacing: "-2.5px",
            fontWeight: 400,
            color: "#fff",
            maxWidth: "760px",
        },

        heroDescription: {
            maxWidth: "560px",
            margin: 0,
            color: "rgba(255,255,255,.87)",
            fontSize: "14px",
            lineHeight: 1.9,
        },

        sectionHeading: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "30px",
            flexWrap: "wrap",
            marginBottom: "42px",
        },

        smallLabel: {
            display: "flex",
            alignItems: "center",
            gap: "11px",
            marginBottom: "18px",
            color: "#713746",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
        },

        sectionTitle: {
            margin: 0,
            fontSize: "clamp(34px, 4.5vw, 58px)",
            fontWeight: 400,
            lineHeight: 1.12,
            letterSpacing: "-2px",
            color: "#351823",
        },

        italic: {
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            color: "#702b3b",
        },

        intro: {
            maxWidth: "360px",
            margin: "0 0 4px",
            fontSize: "14px",
            lineHeight: 1.9,
            color: "#766a67",
        },

        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "20px",
        },

        card: {
            position: "relative",
            minWidth: 0,
            padding: "30px 25px",
            minHeight: "280px",
            borderRadius: "7px",
            border: "1px solid rgba(255,255,255,.92)",
            background:
                "linear-gradient(145deg, rgba(255,255,255,.83), rgba(255,255,255,.43))",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: "0 12px 36px rgba(53,24,35,.045)",
            transition:
                "opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1), box-shadow .35s ease, border-color .35s ease",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
        },

        icon: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "58px",
            height: "58px",
            marginBottom: "28px",
            borderRadius: "6px",
            border: "1px solid rgba(112,43,59,.13)",
            background:
                "linear-gradient(135deg, rgba(255,255,255,.95), rgba(239,226,211,.65))",
        },

        cardTitle: {
            margin: "0 0 14px",
            fontSize: "clamp(19px, 1.7vw, 24px)",
            lineHeight: 1.35,
            fontWeight: 500,
            letterSpacing: "-.5px",
            color: "#351823",
        },

        cardDescription: {
            margin: 0,
            fontSize: "13px",
            lineHeight: 1.9,
            color: "#766a67",
        },

        cardLink: {
            color: "inherit",
            textDecoration: "none",
            width: "100%",
            height: "100%",
        },

        ornament: {
            position: "absolute",
            width: "280px",
            height: "280px",
            border: "1px solid rgba(201,156,88,.16)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 0,
        },
    };

    return (

        <section
            style={{
                width: "100%",
                margin: 0,
                background:
                    "linear-gradient(135deg, #f5eee6 0%, #f2e8dd 55%, #f8f2ea 100%)",
                overflow: "hidden",
            }}
        >
            <div
                style={{

                    margin: "0 auto",
                }}
            >
                <div
                    ref={sectionRef}
                    className={props.hclass || ""}
                    style={styles.section}
                >
                    <div
                        aria-hidden="true"
                        style={{
                            ...styles.ornament,
                            top: "-150px",
                            right: "-110px",
                        }}
                    />

                    <div style={styles.container}>
                        {/* Image hero */}
                        <div style={styles.hero}>
                            <Image
                                src={Topimage}
                                alt="Our services"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 90vw"
                                style={styles.heroImage}
                            />

                            <div style={styles.heroOverlay} />

                            <div style={styles.heroContent}>
                                <div style={styles.eyebrow}>
                                    <span style={styles.line} />
                                    MUHAJIREEN CONSULTANT LTD
                                </div>

                                <h2 style={styles.heading}>
                                    Creating Landmark Spaces,
                                    <br />
                                    <span style={{ color: '#f0d4a2', fontStyle: 'italic' }}>
                                        One Blueprint at a Time
                                    </span>
                                </h2>

                                <p style={styles.heroDescription}>
                                    Cras nisl nibh commodo ullamcorper aliquet. Gravida orci
                                    laoreet eros platea curabitur scelerisque quis cras
                                    scelerisque.
                                </p>
                            </div>
                        </div>

                        {/* Service cards */}
                        <div style={styles.sectionHeading}>
                            <div>
                                <div style={styles.smallLabel}>
                                    <span style={styles.line} />
                                    What We Do
                                </div>

                                <h2 style={styles.sectionTitle}>
                                    Thoughtfully Planned
                                    <br />
                                    <span style={styles.italic}>Built to Last.</span>
                                </h2>
                            </div>

                            <p style={styles.intro}>
                                Explore our offerings and discover the expertise behind
                                every thoughtfully planned development.
                            </p>
                        </div>

                        <div style={styles.grid} className="service-grid">
                            {Services.slice(0, 4).map((service, index) => (
                                <Link
                                    key={service.slug || index}
                                    href={`/service-single/${service.slug}`}
                                    style={styles.cardLink}
                                >
                                    <article
                                        style={{
                                            ...styles.card,
                                            transitionDelay: visible
                                                ? `${index * 110}ms`
                                                : "0ms",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform =
                                                "translateY(-7px)";
                                            e.currentTarget.style.boxShadow =
                                                "0 24px 55px rgba(53,24,35,.10)";
                                            e.currentTarget.style.borderColor =
                                                "rgba(201,156,88,.45)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform =
                                                "translateY(0)";
                                            e.currentTarget.style.boxShadow =
                                                "0 12px 36px rgba(53,24,35,.045)";
                                            e.currentTarget.style.borderColor =
                                                "rgba(255,255,255,.92)";
                                        }}
                                    >
                                        <div style={styles.icon}>
                                            <Image
                                                src={service.Icon}
                                                alt=""
                                                width={32}
                                                height={32}
                                                style={{
                                                    objectFit: "contain",
                                                    maxWidth: "100%",
                                                    maxHeight: "100%",
                                                }}
                                            />
                                        </div>

                                        <h3 style={styles.cardTitle}>
                                            {service.title}
                                        </h3>

                                        <p style={styles.cardDescription}>
                                            {service.description}
                                        </p>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <style jsx>{`
.service-image-wrap {
    position: relative;
    isolation: isolate;
    min-height: clamp(430px, 48vw, 610px);
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.75);
    border-radius: 16px;
    background: #cfc4b5;
    box-shadow: 0 24px 65px rgba(75, 53, 42, 0.10);
}

.service-cover-image {
    z-index: 0 !important;
    object-fit: cover;
    object-position: center;
    transition: transform 1.2s ease;
}

.service-image-overlay {
    position: absolute;
    z-index: 1;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
        90deg,
        rgba(35, 27, 26, 0.76) 0%,
        rgba(35, 27, 26, 0.48) 42%,
        rgba(35, 27, 26, 0.08) 100%
    );
}

.service-image-content {
    position: relative;
    z-index: 2;
}

.service-image-index {
    z-index: 3;
}

.service-image-wrap:hover .service-cover-image {
    transform: scale(1.025);
}
`}</style>
                </div>
            </div>
        </section>

    );
};

export default ServiceSection;