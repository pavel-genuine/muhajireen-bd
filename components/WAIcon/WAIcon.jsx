"use client";

import React, { useRef } from "react";

export default function WAIcon({
  phoneNumber = "8801715102130",
  message = "Hello! I am interested in Muhajireen Land Share.",
  buttonText = "Speak With Us",
}) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btnRef.current.style.setProperty("--mouse-x", `${x}px`);
    btnRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <>
      <style jsx>{`
        .wa-float-container {
          position: fixed;
          right: 28px;
          bottom: 28px;
          z-index: 9999;
        }

        /* Main Glass Button */
        .wa-float-btn {
          --mouse-x: 50%;
          --mouse-y: 50%;

          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 13px;
          padding: 9px 20px 9px 9px;

          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.94),
            rgba(241, 219, 176, 0.82) 55%,
            rgba(237, 226, 208, 0.78)
          );

          backdrop-filter: blur(24px) saturate(145%);
          -webkit-backdrop-filter: blur(24px) saturate(145%);

          border: 1px solid rgba(180, 155, 120, 0.28);
          border-radius: 999px;

          color: #403426;
          font-family:
            system-ui,
            -apple-system,
            sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.2px;
          text-decoration: none;
          white-space: nowrap;

          overflow: hidden;
          isolation: isolate;

          box-shadow:
            0 12px 35px rgba(91, 72, 46, 0.12),
            0 3px 10px rgba(91, 72, 46, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.95),
            inset 0 -1px 0 rgba(180, 155, 120, 0.12);

          transition:
            transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.45s ease,
            border-color 0.45s ease,
            filter 0.45s ease;
        }

        /* WhatsApp Green + Black Animated Border */
        .wa-float-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1.5px;
          border-radius: inherit;

          background: linear-gradient(
            110deg,
            transparent 5%,
            #25d366 18%,
            #ffffff 28%,
            #111111 42%,
            #25d366 55%,
            #ffffff 68%,
            #111111 82%,
            transparent 95%
          );

          background-size: 250% 100%;
          background-position: 150% 0;

          animation: borderShimmer 8s linear infinite;

          pointer-events: none;
          z-index: 3;
          opacity: 0.95;

          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;

          transition:
            opacity 0.35s ease,
            filter 0.35s ease;
        }

        /* Continuous Shimmer */
        @keyframes borderShimmer {
          0% {
            background-position: 150% 0;
          }

          100% {
            background-position: -150% 0;
          }
        }

        /* Faster & Brighter on Hover */
        .wa-float-btn:hover::after {
          animation-duration: 8s;
          opacity: 1;
          filter: brightness(1.2);
        }

        /* Mouse Following Spotlight */
        .wa-float-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;

          background: radial-gradient(
            130px circle at var(--mouse-x) var(--mouse-y),
            rgba(255, 255, 255, 0.95),
            rgba(222, 204, 176, 0.2) 48%,
            transparent 75%
          );

          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
          z-index: 0;
        }

        .wa-float-btn:hover::before {
          opacity: 1;
        }

        /* Glossy Champagne Sphere */
        .wa-sphere-icon {
          position: relative;
          z-index: 1;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;
          width: 43px;
          height: 43px;
          border-radius: 50%;

          background: radial-gradient(
            circle at 32% 25%,
            #ffffff 0%,
            #fffdf8 16%,
            #eadcc5 46%,
            #c9b18d 74%,
            #a68c67 100%
          );

          border: 1px solid rgba(255, 255, 255, 0.8);

          box-shadow:
            0 5px 14px rgba(101, 78, 48, 0.19),
            inset 0 2px 5px rgba(255, 255, 255, 0.95),
            inset 0 -3px 6px rgba(105, 78, 43, 0.2);

          transition:
            transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.4s ease;
        }

        /* Soft Ambient Halo */
        .wa-sphere-icon::before {
          content: "";
          position: absolute;
          inset: -5px;
          border-radius: 50%;

          background: rgba(198, 171, 132, 0.24);
          filter: blur(9px);

          z-index: -1;
          opacity: 0.7;
          animation: warmPulse 8s ease-in-out infinite;
        }

        @keyframes warmPulse {
          0%,
          100% {
            transform: scale(0.92);
            opacity: 0.35;
          }

          50% {
            transform: scale(1.13);
            opacity: 0.75;
          }
        }

        .wa-sphere-icon svg {
          width: 21px;
          height: 21px;
          fill: #65513a;

          filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 0.8));

          transition:
            transform 0.35s ease,
            fill 0.35s ease;
        }

        /* Button Label */
        .wa-label {
          position: relative;
          z-index: 1;

          transition:
            color 0.3s ease,
            letter-spacing 0.3s ease;
        }

        /* Arrow */
        .wa-arrow {
          position: relative;
          z-index: 1;

          display: flex;
          align-items: center;
          justify-content: center;

          width: 25px;
          height: 25px;
          border-radius: 50%;

          background: rgba(180, 155, 120, 0.13);
          border: 1px solid rgba(180, 155, 120, 0.15);

          transition:
            transform 0.4s ease,
            background 0.4s ease,
            border-color 0.4s ease;
        }

        .wa-arrow svg {
          width: 12px;
          height: 12px;

          stroke: #755e41;
          stroke-width: 2;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;

          transition: transform 0.35s ease;
        }

        /* Premium Hover Interaction */
        .wa-float-btn:hover {
          transform: translateY(-5px) scale(1.015);

          border-color: rgba(180, 155, 120, 0.55);

          box-shadow:
            0 19px 45px rgba(91, 72, 46, 0.17),
            0 5px 15px rgba(91, 72, 46, 0.07),
            0 0 22px rgba(213, 190, 151, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 1),
            inset 0 -1px 0 rgba(180, 155, 120, 0.14);
        }

        .wa-float-btn:hover .wa-sphere-icon {
          transform: scale(1.09) rotate(-9deg);

          box-shadow:
            0 8px 20px rgba(101, 78, 48, 0.23),
            0 0 18px rgba(213, 190, 151, 0.35),
            inset 0 2px 5px rgba(255, 255, 255, 1),
            inset 0 -3px 6px rgba(105, 78, 43, 0.2);
        }

        .wa-float-btn:hover .wa-sphere-icon svg {
          transform: scale(1.1);
          fill: #4f3b26;
        }

        .wa-float-btn:hover .wa-label {
          color: #302519;
          letter-spacing: 0.35px;
        }

        .wa-float-btn:hover .wa-arrow {
          background: rgba(180, 155, 120, 0.25);
          border-color: rgba(180, 155, 120, 0.3);
          transform: translateX(3px);
        }

        .wa-float-btn:hover .wa-arrow svg {
          transform: translateX(1px);
        }

        .wa-float-btn:active {
          transform: translateY(-1px) scale(0.98);
        }

        /* Keyboard Focus */
        .wa-float-btn:focus-visible {
          outline: 2px solid #b99a6b;
          outline-offset: 5px;
        }

        /* Mobile */
        @media (max-width: 600px) {
          .wa-float-container {
            right: 16px;
            bottom: 18px;
          }

          .wa-float-btn {
            gap: 10px;
            padding: 7px 15px 7px 7px;
            font-size: 12px;
          }

          .wa-sphere-icon {
            width: 38px;
            height: 38px;
          }

          .wa-sphere-icon svg {
            width: 19px;
            height: 19px;
          }

          .wa-arrow {
            width: 22px;
            height: 22px;
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .wa-float-btn,
          .wa-sphere-icon,
          .wa-arrow,
          .wa-label {
            transition: none;
          }

          .wa-float-btn::after,
          .wa-sphere-icon::before {
            animation: none;
          }
        }
      `}</style>

      <div className="wa-float-container">
        <a
          ref={btnRef}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleMouseMove}
          className="wa-float-btn"
          aria-label={buttonText}
        >
          <div className="wa-sphere-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>

          <span className="wa-label">{buttonText}</span>

          <div className="wa-arrow">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </a>
      </div>
    </>
  );
}
