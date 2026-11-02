"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ClickHandler = () => {
    if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
};

const navItems = [
    { href: "/", label: "Home" },
    { href: "/project-overview", label: "Project Overview" },
    { href: "/investment-opportunity", label: "Investment Opportunities" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
];

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const pathname = usePathname();


    const isTransparentPage = pathname === "/";

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isMobile = window.innerWidth <= 767;

            setIsScrolled(currentScrollY > 40);

            // Mobile: header always visible
            if (isMobile) {
                setIsHeaderVisible(true);
                lastScrollY = currentScrollY;
                return;
            }

            // Page top: header always visible
            if (currentScrollY <= 40) {
                setIsHeaderVisible(true);
                lastScrollY = currentScrollY;
                return;
            }

            // Scroll up 15px: show header
            if (currentScrollY < lastScrollY - 15) {
                setIsHeaderVisible(true);
                lastScrollY = currentScrollY;
            }
            // Scroll down 15px: hide header
            else if (currentScrollY > lastScrollY + 15) {
                setIsHeaderVisible(false);
                lastScrollY = currentScrollY;
            }
        };

        // Set initial state
        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    useEffect(() => {
        setMenuState(false);
    }, [pathname]);

    useEffect(() => {
        if (!menuActive) return;
        const handleKeyDown = (event) => {
            if (event.key === "Escape") setMenuState(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [menuActive]);

    const closeMenu = () => setMenuState(false);
    const handleNavClick = () => {
        closeMenu();
        ClickHandler();
    };

    // All routes except Project Overview keep the warm dark glass background at all times.
    // Project Overview retains the original transparent-at-top / tinted-on-scroll behavior.
    const alwaysTinted = !isTransparentPage

    return (
        <header
            id="header"
            className={`uv-header ${isScrolled ? "uv-header-scrolled" : ""} ${alwaysTinted ? "uv-header-always-tinted" : "uv-header-project-overview"
                } ${isHeaderVisible ? "uv-header-visible" : "uv-header-hidden"
                } ${menuActive ? "uv-header-menu-open" : ""}`}
        >
            <div className="uv-header-container">
                <nav className="uv-navbar" aria-label="Main navigation">
                    {/* MOBILE MENU TOGGLE */}
                    <button
                        type="button"
                        className="uv-mobile-toggle"
                        aria-label={menuActive ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={menuActive}
                        aria-controls="uv-mobile-menu"
                        onClick={() => setMenuState((open) => !open)}
                    >
                        <span className={`uv-hamburger ${menuActive ? "is-open" : ""}`} aria-hidden="true">
                            <i />
                            <i />
                            <i />
                        </span>
                    </button>

                    {/* LOGO */}
                    <div className="uv-header-logo">
                        <Link href="/" onClick={handleNavClick} aria-label="MUHAJIREEN Home">
                            {props.Logo && (
                                <Image
                                    src={props.Logo}
                                    alt="MUHAJIREEN"
                                    priority
                                    className="uv-logo-image"
                                    width={190}
                                    height={58}
                                    sizes="(max-width: 380px) 120px, (max-width: 767px) 145px, 190px"
                                    style={{ width: "auto", height: "58px", objectFit: "contain" }}
                                />
                            )}
                        </Link>
                    </div>

                    {/* DESKTOP NAVIGATION */}
                    <div className="uv-navigation">
                        <ul className="uv-nav-list">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} onClick={handleNavClick} className="uv-nav-link">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT CTA */}
                    <div className="uv-header-right">
                        <Link href="/contact" onClick={handleNavClick} className="uv-header-cta">
                            <span>Contact Now</span>
                            <span className="uv-cta-icon" aria-hidden="true">↗</span>
                        </Link>
                    </div>

                    {/* MINIMAL GLASSMORPHISM MOBILE PANEL */}
                    <div
                        id="uv-mobile-menu"
                        className={`uv-mobile-menu ${menuActive ? "is-open" : ""}`}
                        aria-hidden={!menuActive}
                    >
                        <div className="uv-mobile-menu-heading">
                            <span>EXPLORE MUHAJIREEN</span>
                            <span className="uv-mobile-menu-line" />
                        </div>
                        <ul className="uv-mobile-nav-list">
                            {navItems.map((item, index) => (
                                <li key={item.href} style={{ "--menu-index": index }}>
                                    <Link
                                        href={item.href}
                                        onClick={handleNavClick}
                                        tabIndex={menuActive ? 0 : -1}
                                        className={`uv-mobile-nav-link ${pathname === item.href ? "is-current" : ""}`}
                                    >
                                        <span className="uv-mobile-nav-number">0{index + 1}</span>
                                        <span>{item.label}</span>
                                        <span className="uv-mobile-nav-arrow" aria-hidden="true">↗</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/contact"
                            onClick={handleNavClick}
                            tabIndex={menuActive ? 0 : -1}
                            className="uv-mobile-menu-cta"
                        >
                            Speak to Our Team <span aria-hidden="true">↗</span>
                        </Link>
                        <p className="uv-mobile-menu-foot">A VISION BUILT FOR THE FUTURE</p>
                    </div>
                </nav>
            </div>

            {menuActive && (
                <button
                    type="button"
                    className="uv-mobile-backdrop"
                    aria-label="Close navigation menu"
                    onClick={closeMenu}
                />
            )}

            <style jsx global>{`
        .uv-header {
          --uv-gold: #c9a66e;
          --uv-gold-dark: #a9844e;
          --uv-ink: #423a30;
          --uv-cream: #fbf8f2;
          --uv-header-glass: rgba(48, 37, 29, 0.72);
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          padding: 18px 0;
          transition: padding 0.35s ease, background 0.35s ease;
        }

        .uv-header-container {
          position: relative;
          z-index: 2;
          width: min(1440px, calc(100% - 70px));
          margin: 0 auto;
        }

        .uv-navbar {
          position: relative;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          min-height: 50px;
          padding: 0 24px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 18px;
          background: rgba(251, 248, 242, 0.07);
          backdrop-filter: blur(2px) saturate(115%);
          -webkit-backdrop-filter: blur(2px) saturate(115%);
          box-shadow: 0 10px 35px rgba(40, 29, 20, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: min-height 0.35s ease, padding 0.35s ease, border-radius 0.35s ease, background 0.35s ease, box-shadow 0.35s ease;
        }

        /* All routes except Project Overview stay tinted, even at scrollY = 0. */
        .uv-header-always-tinted .uv-navbar,
        .uv-header-always-tinted.uv-header-scrolled .uv-navbar {
          background: var(--uv-header-glass) !important;
          border-color: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px) saturate(125%);
          -webkit-backdrop-filter: blur(5px) saturate(125%);
          box-shadow: 0 12px 35px rgba(32, 23, 16, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.16);
        }

        .uv-header-logo { display: flex; align-items: center; justify-content: flex-start; }
        .uv-header-logo a { display: inline-flex; align-items: center; text-decoration: none; }
        .uv-logo-image { display: block; max-width: 190px; transition: all 0.35s ease; }
        .uv-navigation { display: flex; justify-content: center; }
        .uv-nav-list { display: flex; align-items: center; justify-content: center; gap: 34px; padding: 0; margin: 0; list-style: none; }
        .uv-nav-list li { position: relative; margin: 0; padding: 0; }
        .uv-nav-link { position: relative; display: inline-flex; align-items: center; padding: 12px 0; color: #fffaf2; text-decoration: none; font-size: 12px; font-weight: 600; letter-spacing: 0.15px; transition: color 0.3s ease; }
        .uv-nav-link::after { content: ""; position: absolute; left: 0; bottom: 5px; width: 0; height: 2px; border-radius: 5px; background: var(--uv-gold); transition: width 0.3s ease; }
        .uv-nav-link:hover { color: #e5c994; }
        .uv-nav-link:hover::after { width: 100%; }
        .uv-header-right { display: flex; align-items: center; justify-content: flex-end; }
        .uv-header-cta { display: inline-flex; align-items: center; justify-content: center; gap: 18px; padding: 8px 19px; border: 1px solid rgba(255, 255, 255, 0.62); border-radius: 50px; background: linear-gradient(135deg, #dfc494, #c5a16a); color: #453727; text-decoration: none; font-size: 11px; font-weight: 700; white-space: nowrap; box-shadow: 0 6px 18px rgba(174, 137, 79, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.6); transition: all 0.3s ease; }
        .uv-header-cta:hover { transform: translateY(-2px); color: #453727; box-shadow: 0 10px 25px rgba(174, 137, 79, 0.24); }
        .uv-cta-icon { font-size: 17px; transition: transform 0.3s ease; }
        .uv-header-cta:hover .uv-cta-icon { transform: translate(3px, -3px); }

        /* Project Overview retains transparent-at-top, tinted-after-scroll behavior. */
        .uv-header-project-overview.uv-header-scrolled { padding: 10px 0; }
        .uv-header-project-overview.uv-header-scrolled .uv-navbar { min-height: 66px; border-radius: 15px; background: rgba(48, 37, 29, 0.72); backdrop-filter: blur(14px) saturate(125%); -webkit-backdrop-filter: blur(14px) saturate(125%); box-shadow: 0 12px 35px rgba(32, 23, 16, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.18); }
        .uv-header-scrolled .uv-logo-image { height: 50px !important; }

        /* Mobile menu controls are hidden on desktop. */
        .uv-mobile-toggle, .uv-mobile-menu, .uv-mobile-backdrop { display: none; }

        @media (max-width: 1100px) {
          .uv-header-container { width: calc(100% - 40px); }
          .uv-navbar { padding: 9px 17px; }
          .uv-nav-list { gap: 21px; }
          .uv-nav-link { font-size: 11px; }
          .uv-logo-image { max-width: 155px; }
          .uv-header-cta { padding: 11px 15px; gap: 10px; }
        }

        @media (max-width: 767px) {
          .uv-header { padding: 10px 0; }
          .uv-header-container { width: calc(100% - 24px); }
          .uv-navbar { grid-template-columns: 38px 1fr auto; min-height: 62px; padding: 7px 12px; gap: 8px; border-radius: 15px; }
          .uv-mobile-toggle { display: inline-flex; position: relative; z-index: 5; align-items: center; justify-content: center; width: 36px; height: 38px; padding: 0; border: 1px solid rgba(255,255,255,.19); border-radius: 11px; background: rgba(255,255,255,.08); color: #fffaf2; cursor: pointer; }
          .uv-hamburger { display: flex; width: 17px; flex-direction: column; gap: 5px; }
          .uv-hamburger i { display: block; width: 17px; height: 1.5px; border-radius: 3px; background: #f8eddb; transition: transform .25s ease, opacity .2s ease; }
          .uv-hamburger i:nth-child(2) { width: 12px; }
          .uv-hamburger.is-open i:first-child { transform: translateY(6.5px) rotate(45deg); }
          .uv-hamburger.is-open i:nth-child(2) { opacity: 0; }
          .uv-hamburger.is-open i:last-child { transform: translateY(-6.5px) rotate(-45deg); }
          .uv-navigation { display: none !important; }
          .uv-header-logo { justify-content: center; min-width: 0; }
          .uv-logo-image { max-width: 145px; max-height: 48px; }
          .uv-header-right { justify-content: flex-end; }
          .uv-header-cta { padding: 10px 12px; gap: 6px; font-size: 10px; }
          .uv-cta-icon { font-size: 14px; }
          .uv-header-scrolled { padding: 7px 0; }
          .uv-header-scrolled .uv-navbar { min-height: 58px; }
          .uv-header-scrolled .uv-logo-image { height: 43px !important; }
          .uv-mobile-menu { display: block; position: absolute; top: calc(100% + 10px); left: 0; right: 0; z-index: 4; padding: 20px 16px 15px; border: 1px solid rgba(255,255,255,.22); border-radius: 18px; background: rgba(48,37,29,.91); backdrop-filter: blur(24px) saturate(130%); -webkit-backdrop-filter: blur(24px) saturate(130%); box-shadow: 0 22px 55px rgba(26,18,12,.24), inset 0 1px 0 rgba(255,255,255,.13); opacity: 0; visibility: hidden; pointer-events: none; transform: translateY(-8px) scale(.985); transform-origin: top center; transition: opacity .22s ease, transform .22s ease, visibility .22s ease; }
          .uv-mobile-menu.is-open { opacity: 1; visibility: visible; pointer-events: auto; transform: translateY(0) scale(1); }
          .uv-mobile-menu-heading { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; color: #d8bd8e; font-size: 9px; font-weight: 700; letter-spacing: 1.7px; }
          .uv-mobile-menu-line { height: 1px; flex: 1; background: rgba(216,189,142,.34); }
          .uv-mobile-nav-list { display: grid; gap: 3px; margin: 0; padding: 0; list-style: none; }
          .uv-mobile-nav-list li { margin: 0; padding: 0; }
          .uv-mobile-nav-link { display: grid; grid-template-columns: 27px 1fr 18px; align-items: center; gap: 8px; min-height: 46px; padding: 0 10px; border: 1px solid transparent; border-radius: 10px; color: rgba(255,250,242,.9); text-decoration: none; font-size: 13px; font-weight: 500; transition: background .2s ease, border-color .2s ease, color .2s ease; }
          .uv-mobile-nav-link:hover, .uv-mobile-nav-link.is-current { border-color: rgba(201,166,110,.25); background: rgba(255,255,255,.075); color: #e5c994; }
          .uv-mobile-nav-number { color: #c9a66e; font-family: Georgia, 'Times New Roman', serif; font-size: 12px; }
          .uv-mobile-nav-arrow { justify-self: end; color: rgba(216,189,142,.75); font-size: 15px; }
          .uv-mobile-menu-cta { display: flex; align-items: center; justify-content: space-between; min-height: 43px; margin-top: 13px; padding: 0 14px; border: 1px solid rgba(255,255,255,.55); border-radius: 10px; background: linear-gradient(135deg,#dfc494,#c5a16a); color: #453727; text-decoration: none; font-size: 11px; font-weight: 700; }
          .uv-mobile-menu-foot { margin: 13px 0 0; color: rgba(255,250,242,.45); font-size: 8px; letter-spacing: 1.5px; text-align: center; }
          .uv-mobile-backdrop { display: block; position: fixed; inset: 0; z-index: 1; width: 100%; height: 100%; padding: 0; border: 0; background: rgba(28,21,15,.16); cursor: default; }
          .uv-header-menu-open .uv-header-container { z-index: 3; }
        }

        @media (max-width: 380px) {
          .uv-navbar { grid-template-columns: 34px minmax(0,1fr) auto; padding: 7px 8px; gap: 5px; }
          .uv-logo-image { max-width: 120px; }
          .uv-header-cta { padding: 10px 9px; font-size: 9px; }
          .uv-mobile-menu { padding: 17px 12px 13px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .uv-header *, .uv-header *::before, .uv-header *::after { transition: none !important; }
        }
      .uv-header {
    transform: translateY(0);
    transition:
        transform 0.35s ease,
        padding 0.35s ease,
        background 0.35s ease;
    will-change: transform;
}

.uv-header-visible {
    transform: translateY(0);
    pointer-events: auto;
}

.uv-header-hidden {
    transform: translateY(-110%);
    pointer-events: none;
}`}</style>
        </header>
    );
};

export default Header;
