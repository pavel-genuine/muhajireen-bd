
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu/MobileMenu";

const ClickHandler = () => {
    if (typeof window !== "undefined") {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
};

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setMenuState(false);
        ClickHandler();
    };

    return (
        <header
            id="header"
            className={`uv-header ${isScrolled ? "uv-header-scrolled" : ""}`}
        >
            <div className="uv-header-container">
                <nav className="uv-navbar">

                    {/* MOBILE MENU */}
                    <div className="uv-mobile-toggle">
                        <MobileMenu />
                    </div>

                    {/* LOGO */}
                    <div className="uv-header-logo">
                        <Link
                            href="/home"
                            onClick={ClickHandler}
                            aria-label="Uttara View Home"
                        >
                            {props.Logo && (
                                <Image
                                    src={props.Logo}
                                    alt="Uttara View"
                                    priority
                                    className="uv-logo-image"
                                    style={{
                                        width: "auto",
                                        height: "58px",
                                        objectFit: "contain",
                                    }}
                                />
                            )}
                        </Link>
                    </div>

                    {/* DESKTOP NAVIGATION */}
                    <div className="uv-navigation">
                        <ul className="uv-nav-list">
                            <li>
                                <Link
                                    href="/home"
                                    onClick={ClickHandler}
                                    className="uv-nav-link"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#masterplan"
                                    onClick={ClickHandler}
                                    className="uv-nav-link"
                                >
                                    Project Overview
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    onClick={ClickHandler}
                                    className="uv-nav-link"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    onClick={ClickHandler}
                                    className="uv-nav-link"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT CTA */}
                    <div className="uv-header-right">
                        <Link
                            href="/contact"
                            onClick={ClickHandler}
                            className="uv-header-cta"
                        >
                            <span>Contact Now</span>
                            <span className="uv-cta-icon">↗</span>
                        </Link>
                    </div>

                </nav>
            </div>

            <style jsx global>{`
                /* =====================================
                   UTTARA VIEW - GLASS HEADER
                ===================================== */

                .uv-header {
                    --uv-gold: #c9a66e;
                    --uv-gold-dark: #a9844e;
                    --uv-ink: #423a30;
                    --uv-cream: #fbf8f2;

                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 9999;

                    padding: 18px 0;

                    transition:
                        padding 0.35s ease,
                        background 0.35s ease;
                }

                .uv-header-container {
                    width: min(1440px, calc(100% - 70px));
                    margin: 0 auto;
                }

                /* GLASS NAVBAR */

                .uv-navbar {
                    position: relative;

                    display: grid;
                    grid-template-columns: 1fr auto 1fr;
                    align-items: center;

                    min-height: 50px;
                    padding: 0px 24px;

                    border: .5px solid rgba(255, 255, 255, 0.29);
                    border-radius: 18px;

                    background: rgba(251, 248, 242, 0.07);

                    backdrop-filter: blur(1px) saturate(100%);
                    -webkit-backdrop-filter: blur(1px) saturate(100%);

                    box-shadow:
                        0 10px 35px rgba(92, 74, 48, 0.075),
                        inset 0 1px 0 rgba(255, 255, 255, 0.47);

                    transition:
                        min-height 0.35s ease,
                        padding 0.35s ease,
                        border-radius 0.35s ease,
                        box-shadow 0.35s ease;
                }

                /* LOGO */

                .uv-header-logo {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }

                .uv-header-logo a {
                    display: inline-flex;
                    align-items: center;
                    text-decoration: none;
                }

                .uv-logo-image {
                    display: block;
                    max-width: 190px;
                    transition: all 0.35s ease;
                }

                /* NAVIGATION */

                .uv-navigation {
                    display: flex;
                    justify-content: center;
                }

                .uv-nav-list {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 34px;

                    padding: 0;
                    margin: 0;
                    list-style: none;
                }

                .uv-nav-list li {
                    position: relative;
                    margin: 0;
                    padding: 0;
                }

                .uv-nav-link {
                    position: relative;

                    display: inline-flex;
                    align-items: center;

                    padding: 12px 0;

                    color: white;
                    text-decoration: none;

                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 0.15px;

                    transition: color 0.3s ease;
                }

                .uv-nav-link::after {
                    content: "";

                    position: absolute;
                    left: 0;
                    bottom: 5px;

                    width: 0;
                    height: 2px;

                    border-radius: 5px;
                    background: var(--uv-gold);

                    transition: width 0.3s ease;
                }

                .uv-nav-link:hover {
                    color: var(--uv-gold-dark);
                }

                .uv-nav-link:hover::after {
                    width: 100%;
                }

                /* CTA */

                .uv-header-right {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }

                .uv-header-cta {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 18px;

                    padding: 8px 19px;

                    border: 1px solid rgba(255, 255, 255, 0.7);
                    border-radius: 50px;

                    background: linear-gradient(
                        135deg,
                        #dfc494,
                        #c5a16a
                    );

                    color: #453727;
                    text-decoration: none;

                    font-size: 11px;
                    font-weight: 700;
                    white-space: nowrap;

                    box-shadow:
                        0 6px 18px rgba(174, 137, 79, 0.16),
                        inset 0 1px 0 rgba(255, 255, 255, 0.6);

                    transition: all 0.3s ease;
                }

                .uv-header-cta:hover {
                    transform: translateY(-3px);
                    color: #453727;
                    box-shadow: 0 10px 25px rgba(174, 137, 79, 0.24);
                }

                .uv-cta-icon {
                    font-size: 17px;
                    transition: transform 0.3s ease;
                }

                .uv-header-cta:hover .uv-cta-icon {
                    transform: translate(3px, -3px);
                }

                /* MOBILE MENU */

                .uv-mobile-toggle {
                    display: none;
                }

                /* SCROLLED STATE */

                .uv-header-scrolled {
                    padding: 10px 0;
                }

                .uv-header-scrolled .uv-navbar {
                    min-height: 66px;
                    border-radius: 15px;

                    background: rgba(198, 191, 176, 0.93);

                    box-shadow:
                        0 12px 35px rgba(92, 74, 48, 0.11),
                        inset 0 1px 0 rgba(255, 255, 255, 0.95);
                }

                .uv-header-scrolled .uv-logo-image {
                    height: 50px !important;
                }

                /* TABLET */

                @media (max-width: 1100px) {
                    .uv-header-container {
                        width: calc(100% - 40px);
                    }

                    .uv-navbar {
                        padding: 9px 17px;
                    }

                    .uv-nav-list {
                        gap: 21px;
                    }

                    .uv-nav-link {
                        font-size: 11px;
                    }

                    .uv-logo-image {
                        max-width: 155px;
                    }

                    .uv-header-cta {
                        padding: 13px 15px;
                        gap: 10px;
                    }
                }

                /* MOBILE */

                @media (max-width: 767px) {
                    .uv-header {
                        padding: 10px 0;
                    }

                    .uv-header-container {
                        width: calc(100% - 24px);
                    }

                    .uv-navbar {
                        display: grid;
                        grid-template-columns: 42px 1fr auto;
                        min-height: 65px;
                        padding: 7px 12px;
                        gap: 8px;
                        border-radius: 14px;
                    }

                    .uv-mobile-toggle {
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                    }

                    .uv-navigation {
                        display: none !important;
                    }

                    .uv-header-logo {
                        justify-content: center;
                    }

                    .uv-logo-image {
                        max-width: 145px;
                        max-height: 48px;
                    }

                    .uv-header-right {
                        justify-content: flex-end;
                    }

                    .uv-header-cta {
                        padding: 11px 13px;
                        gap: 7px;
                        font-size: 10px;
                    }

                    .uv-cta-icon {
                        font-size: 14px;
                    }

                    .uv-header-scrolled {
                        padding: 7px 0;
                    }

                    .uv-header-scrolled .uv-navbar {
                        min-height: 58px;
                    }

                    .uv-header-scrolled .uv-logo-image {
                        height: 43px !important;
                    }
                }

                @media (max-width: 380px) {
                    .uv-navbar {
                        grid-template-columns: 35px 1fr auto;
                        padding: 7px 9px;
                        gap: 4px;
                    }

                    .uv-logo-image {
                        max-width: 120px;
                    }

                    .uv-header-cta {
                        padding: 10px 11px;
                        font-size: 9px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .uv-header *,
                    .uv-header *::before,
                    .uv-header *::after {
                        transition: none !important;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;
