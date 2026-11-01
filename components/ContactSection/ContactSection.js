"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function ContactSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const elements = section.querySelectorAll("[data-reveal]");
        if (!("IntersectionObserver" in window)) {
            elements.forEach((element) => element.classList.add("uv-cta-visible"));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("uv-cta-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -30px 0px" });

        elements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="uv-home-contact">
            <div className="uv-home-contact-orb uv-home-contact-orb-one" aria-hidden="true" />
            <div className="uv-home-contact-orb uv-home-contact-orb-two" aria-hidden="true" />

            <div className="uv-home-contact-inner">
                <div className="uv-home-contact-copy" data-reveal>
                    <div className="uv-home-contact-eyebrow"><span /> LET&apos;S CONNECT <span /></div>
                    <h2>Your Next Chapter<br /><em>Starts With A Conversation.</em></h2>
                    <p>Discover MUHAJIREEN and get the information you need to take your next step with confidence.</p>
                    <div className="uv-home-contact-actions">
                        <a href="tel:+8801XXXXXXXXX" className="uv-home-contact-secondary">☎ <span>Call Our Team</span></a>
                        <a href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="uv-home-contact-secondary">✆ <span>WhatsApp</span></a>
                        <Link href="/contact-us" className="uv-home-contact-primary">Get in Touch <span>↗</span></Link>
                    </div>
                    <div className="uv-home-contact-foot"><span className="uv-home-contact-foot-mark">✧</span><span>PERSONAL GUIDANCE. THOUGHTFUL LIVING.</span></div>
                </div>

                <div className="uv-home-contact-glass" data-reveal>
                    <div className="uv-home-contact-glass-top"><span className="uv-home-contact-icon">✧</span><span>MUHAJIREEN CONSULTANT LTD.</span></div>
                    <div className="uv-home-contact-card-title">Your Vision.<br /><em>Our Commitment.</em></div>
                    <p className="uv-home-contact-card-copy">Thoughtful guidance for your next step with MUHAJIREEN.</p>
                    <div className="uv-home-contact-card-bottom"><span>WE&apos;RE HERE TO HELP</span><span className="uv-home-contact-arrow">✦</span></div>
                    <div className="uv-home-contact-card-glow" aria-hidden="true" />
                </div>
            </div>

            <style jsx global>{`
                .uv-home-contact{--uvhc-gold:#c9a46a;--uvhc-gold-dark:#9c7941;--uvhc-ink:#443d34;--uvhc-muted:#847873;position:relative;isolation:isolate;overflow:hidden;padding:clamp(54px,7vw,92px) 24px;color:var(--uvhc-ink);background:radial-gradient(ellipse at 82% 20%,rgba(201,164,106,.18),transparent 36%),radial-gradient(ellipse at 12% 90%,rgba(165,139,104,.09),transparent 34%),linear-gradient(135deg,#fffdf9 0%,#f7f1e8 52%,#fff 100%)}
                .uv-home-contact *{box-sizing:border-box}.uv-home-contact-inner{position:relative;z-index:1;width:min(1160px,100%);margin:0 auto;display:grid;grid-template-columns:minmax(0,1.15fr) minmax(280px,.75fr);align-items:center;gap:clamp(32px,7vw,100px)}
                .uv-home-contact-orb{position:absolute;z-index:-1;border:1px solid rgba(201,164,106,.2);border-radius:50%;pointer-events:none}.uv-home-contact-orb-one{width:360px;height:360px;right:-160px;top:-190px;box-shadow:inset 0 0 55px rgba(255,255,255,.45)}.uv-home-contact-orb-two{width:260px;height:260px;left:-145px;bottom:-150px}
                .uv-home-contact-copy{max-width:680px}.uv-home-contact-eyebrow{display:flex;align-items:center;gap:10px;margin-bottom:18px;color:var(--uvhc-gold-dark);font-size:9px;font-weight:700;letter-spacing:.22em}.uv-home-contact-eyebrow span{width:27px;height:1px;background:var(--uvhc-gold)}
                .uv-home-contact-copy h2{margin:0;color:var(--uvhc-ink);font-size:clamp(30px,4.2vw,54px);font-weight:500;line-height:1.08;letter-spacing:-.035em}.uv-home-contact-copy h2 em,.uv-home-contact-card-title em{color:var(--uvhc-gold-dark);font-family:Georgia,'Times New Roman',serif;font-weight:400}
                .uv-home-contact-copy>p{max-width:510px;margin:20px 0 25px;color:#766c68;font-size:14px;line-height:1.8}
                .uv-home-contact-actions{display:flex;align-items:center;gap:18px;flex-wrap:wrap}.uv-home-contact-primary{display:inline-flex;align-items:center;justify-content:space-between;gap:28px;min-height:48px;padding:7px 8px 7px 19px;border:1px solid rgba(255,255,255,.8);border-radius:12px;background:linear-gradient(120deg,#b69a6d,#94764d);box-shadow:0 10px 25px rgba(132,106,72,.2);color:#fff!important;text-decoration:none;font-size:11px;font-weight:700;letter-spacing:.06em;transition:transform .3s,box-shadow .3s}.uv-home-contact-primary:hover{transform:translateY(-3px);box-shadow:0 15px 30px rgba(132,106,72,.25)}.uv-home-contact-primary span{display:grid;place-items:center;width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,.94);color:#846a48;font-size:17px}
                .uv-home-contact-secondary{display:inline-flex;align-items:center;gap:7px;color:#78664d!important;text-decoration:none;font-size:11px;font-weight:600;border-bottom:1px solid rgba(156,121,65,.35);padding:7px 0;transition:color .25s}.uv-home-contact-secondary span{letter-spacing:.01em}.uv-home-contact-secondary:hover{color:#9c7941!important}
                .uv-home-contact-foot{display:flex;align-items:center;gap:9px;margin-top:31px;color:#95877b;font-size:8px;font-weight:700;letter-spacing:.16em}.uv-home-contact-foot-mark{color:var(--uvhc-gold);font-size:17px}
                .uv-home-contact-glass{position:relative;isolation:isolate;display:flex;min-height:255px;flex-direction:column;justify-content:space-between;overflow:hidden;padding:25px;border:1px solid rgba(255,255,255,.9);border-radius:24px;background:linear-gradient(145deg,rgba(255,255,255,.76),rgba(255,250,241,.42));box-shadow:0 24px 65px rgba(107,91,72,.12),inset 0 1px 0 rgba(255,255,255,.95);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);color:var(--uvhc-ink)!important;text-decoration:none;transition:transform .35s,box-shadow .35s}.uv-home-contact-glass:hover{transform:translateY(-5px);box-shadow:0 30px 75px rgba(107,91,72,.17),inset 0 1px 0 rgba(255,255,255,.98)}
                .uv-home-contact-glass:before{position:absolute;inset:7px;z-index:-1;border:1px solid rgba(201,164,106,.22);border-radius:18px;content:"";pointer-events:none}.uv-home-contact-card-glow{position:absolute;z-index:-2;width:190px;height:190px;right:-60px;top:-75px;border-radius:50%;background:radial-gradient(circle,rgba(201,164,106,.24),transparent 70%);filter:blur(5px)}.uv-home-contact-glass-top{display:flex;align-items:center;justify-content:space-between;gap:12px;color:#8a765c;font-size:8px;font-weight:700;letter-spacing:.13em}.uv-home-contact-icon{display:grid;place-items:center;width:39px;height:39px;border:1px solid rgba(201,164,106,.38);border-radius:13px;background:rgba(255,255,255,.55);color:#9c7941;font-size:20px;box-shadow:0 5px 15px rgba(107,91,72,.06)}
                .uv-home-contact-card-title{margin:25px 0 12px;color:#51473e;font-family:Georgia,'Times New Roman',serif;font-size:clamp(28px,3vw,39px);line-height:1.08}.uv-home-contact-card-copy{max-width:270px;margin:0 0 20px;color:#827565;font-size:12px;line-height:1.7}.uv-home-contact-card-bottom{display:flex;align-items:center;justify-content:space-between;padding-top:15px;border-top:1px solid rgba(165,139,104,.22);color:#8b7659;font-size:8px;font-weight:700;letter-spacing:.16em}.uv-home-contact-arrow{display:grid;place-items:center;width:31px;height:31px;border:1px solid rgba(201,164,106,.38);border-radius:50%;color:#9c7941;font-size:17px;transition:transform .3s}.uv-home-contact-glass:hover .uv-home-contact-arrow{transform:translateX(3px)}
                .uv-home-contact [data-reveal]{opacity:0;transform:translate3d(0,18px,0);transition:opacity .65s ease,transform .65s ease}.uv-home-contact [data-reveal].uv-cta-visible{opacity:1;transform:translate3d(0,0,0)}.uv-home-contact-glass[data-reveal]{transition:opacity .65s ease,transform .35s ease,box-shadow .35s ease}.uv-home-contact-glass[data-reveal].uv-cta-visible{transform:translateY(0)}
                @media(max-width:760px){.uv-home-contact{padding:55px 20px}.uv-home-contact-inner{grid-template-columns:1fr;gap:28px}.uv-home-contact-copy h2{font-size:clamp(30px,8vw,43px)}.uv-home-contact-copy>p{font-size:13px;margin:16px 0 21px}.uv-home-contact-glass{min-height:210px;padding:22px}.uv-home-contact-card-title{margin:20px 0;font-size:32px}.uv-home-contact-foot{margin-top:24px}}
                @media(prefers-reduced-motion:reduce){.uv-home-contact *,.uv-home-contact *:before,.uv-home-contact *:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
            `}</style>
        </section>
    );
}
