
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Projects from "../../api/projects";
import Shape from "/public/images/right-arrow-2.svg";

const ProjectSection = (props) => {
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

    const projectList = Projects.slice(0, 6);

    const styles = {
        section: {
            position: "relative",
            overflow: "hidden",
            padding: "120px 0 110px",
            background:
                "radial-gradient(ellipse at 90% 15%, rgba(201,156,88,.10), transparent 38%), linear-gradient(135deg, #f0f2f3 0%, #e8edef 55%, #f7f8f8 100%)",
            color: "#32151f",
            isolation: "isolate",
        },
        container: {
            width: "min(1320px, 90%)",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
        },
        eyebrow: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "2.8px",
            textTransform: "uppercase",
            color: "#713746",
            marginBottom: "22px",
        },
        line: {
            width: "35px",
            height: "1px",
            background: "#c99c58",
            flexShrink: 0,
        },
        headingRow: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "30px",
            marginBottom: "48px",
            flexWrap: "wrap",
        },
        heading: {
            margin: 0,
            fontSize: "clamp(42px, 5.5vw, 76px)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-3px",
            color: "#351823",
        },
        italic: {
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#702b3b",
        },
        description: {
            maxWidth: "350px",
            fontSize: "14px",
            lineHeight: 1.9,
            color: "#766a67",
            margin: "0 0 5px",
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "26px",
        },
        card: {
            position: "relative",
            minWidth: 0,
            borderRadius: "5px",
            overflow: "hidden",
            background: "#e6ded4",
            border: "1px solid rgba(255,255,255,.8)",
            boxShadow: "0 14px 45px rgba(60,32,32,.07)",
            transform: visible ? "translateY(0)" : "translateY(35px)",
            opacity: visible ? 1 : 0,
            transition:
                "opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1), box-shadow .4s ease",
        },
        imageWrap: {
            position: "relative",
            width: "100%",
            aspectRatio: "1.55 / 1",
            overflow: "hidden",
            background: "#ded5ca",
        },
        image: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform .9s cubic-bezier(.2,.7,.2,1)",
        },
        imageOverlay: {
            position: "absolute",
            inset: 0,
            background:
                "linear-gradient(180deg, rgba(25,18,20,.02) 30%, rgba(25,18,20,.55) 100%)",
            pointerEvents: "none",
        },
        number: {
            position: "absolute",
            top: "20px",
            left: "22px",
            padding: "8px 11px",
            borderRadius: "3px",
            color: "#fff",
            background: "rgba(255,255,255,.13)",
            border: "1px solid rgba(255,255,255,.35)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            fontSize: "10px",
            letterSpacing: "1.5px",
        },
        category: {
            position: "absolute",
            bottom: "20px",
            left: "22px",
            color: "rgba(255,255,255,.9)",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
        },
        cardContent: {
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            padding: "24px 25px",
            background: "rgba(255,255,255,.57)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            borderTop: "1px solid rgba(255,255,255,.85)",
        },
        projectTitle: {
            margin: "0 0 8px",
            fontSize: "clamp(20px, 2vw, 29px)",
            fontWeight: 500,
            letterSpacing: "-.7px",
            lineHeight: 1.25,
            color: "#351823",
        },
        subtitle: {
            display: "block",
            fontSize: "12px",
            lineHeight: 1.7,
            color: "#827572",
            letterSpacing: ".3px",
        },
        arrow: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "46px",
            height: "46px",
            flexShrink: 0,
            border: "1px solid rgba(112,43,59,.2)",
            borderRadius: "50%",
            background: "rgba(255,255,255,.65)",
            transition: "all .35s ease",
        },
        footer: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            marginTop: "44px",
            paddingTop: "26px",
            borderTop: "1px solid rgba(112,43,59,.16)",
            flexWrap: "wrap",
        },
        footerText: {
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#8c7972",
        },
        allButton: {
            display: "inline-flex",
            alignItems: "center",
            gap: "22px",
            padding: "16px 18px 16px 22px",
            color: "#fff",
            background: "#591e2d",
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: 600,
            borderRadius: "3px",
            transition: "background .3s ease, transform .3s ease",
        },
        decoration: {
            position: "absolute",
            width: "340px",
            height: "340px",
            border: "1px solid rgba(201,156,88,.2)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 0,
        },
    };

    return (
        <section
            id="projects"
            ref={sectionRef}
            className={props.hclass || ""}
            style={styles.section}
        >
            <div
                aria-hidden="true"
                style={{
                    ...styles.decoration,
                    top: "-180px",
                    right: "-130px",
                }}
            />

            <div
                aria-hidden="true"
                style={{
                    ...styles.decoration,
                    bottom: "-240px",
                    left: "-200px",
                }}
            />

            <div style={styles.container}>
                <div style={styles.eyebrow}>
                    <span style={styles.line} />
                    MUHAJIREEN CONSULTANT LTD
                </div>

                <div style={styles.headingRow}>
                    <h2 style={styles.heading}>
                        Spaces That
                        <br />
                        <span style={styles.italic}>Shape Tomorrow.</span>
                    </h2>

                    <p style={styles.description}>
                        Discover places designed around better living, meaningful
                        connections and a stronger sense of community. Explore the vision
                        behind our developments.
                    </p>
                </div>

                <div style={styles.grid}>
                    {projectList.map((project, index) => (
                        <Link
                            key={project.slug || index}
                            href={`/project-single/${project.slug}`}
                            aria-label={`Explore ${project.title}`}
                            style={{
                                ...styles.card,
                                color: "inherit",
                                textDecoration: "none",
                                transitionDelay: visible ? `${index * 120}ms` : "0ms",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow =
                                    "0 24px 65px rgba(60,32,32,.15)";
                                const img = e.currentTarget.querySelector(".project-image");
                                if (img) img.style.transform = "scale(1.055)";
                                const arrow = e.currentTarget.querySelector(".project-arrow");
                                if (arrow) {
                                    arrow.style.background = "#591e2d";
                                    arrow.style.borderColor = "#591e2d";
                                    arrow.style.transform = "rotate(45deg)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow =
                                    "0 14px 45px rgba(60,32,32,.07)";
                                const img = e.currentTarget.querySelector(".project-image");
                                if (img) img.style.transform = "scale(1)";
                                const arrow = e.currentTarget.querySelector(".project-arrow");
                                if (arrow) {
                                    arrow.style.background = "rgba(255,255,255,.65)";
                                    arrow.style.borderColor = "rgba(112,43,59,.2)";
                                    arrow.style.transform = "rotate(0deg)";

                                }
                            }}
                        >
                            <div style={styles.imageWrap}>
                                <Image
                                    className="project-image"
                                    src={project.pimg}
                                    alt={project.title || "MUHAJIREEN real estate project"}
                                    fill
                                    sizes="(max-width: 700px) 100vw, 50vw"
                                    style={styles.image}
                                />

                                <div style={styles.imageOverlay} />

                                <span style={styles.number}>
                                    PROJECT / {String(index + 1).padStart(2, "0")}
                                </span>

                                <span style={styles.category}>
                                    {project.subtitle || "MUHAJIREEN DEVELOPMENT"}
                                </span>
                            </div>

                            <div style={styles.cardContent}>
                                <div>
                                    <h3 style={styles.projectTitle}>{project.title}</h3>
                                    <span style={styles.subtitle}>
                                        {project.subtitle || "Thoughtful spaces. Meaningful lives."}
                                    </span>
                                </div>

                                <span className="project-arrow" style={styles.arrow}>
                                    <Image
                                        src={Shape}
                                        alt=""
                                        width={17}
                                        height={17}
                                    />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div style={styles.footer}>
                    <span style={styles.footerText}>
                        Built Around Your Aspirations
                    </span>

                    <Link
                        href="/projects"
                        style={styles.allButton}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#793749";
                            e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#591e2d";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        Explore All Projects
                        <Image src={Shape} alt="" width={17} height={17} />
                    </Link>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 900px) {
          #projects {
            padding: 90px 0 75px !important;
          }
        }

        @media (max-width: 700px) {
          #projects {
            padding: 70px 0 60px !important;
          }

          #projects h2 {
            letter-spacing: -1.5px !important;
          }

          #projects .project-image {
            object-position: center;
          }
        }

        @media (max-width: 520px) {
          #projects {
            padding: 60px 0 50px !important;
          }

          #projects > div:nth-of-type(3) {
            width: 90% !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #projects *,
          #projects *::before,
          #projects *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
        </section>
    );
};

export default ProjectSection;
