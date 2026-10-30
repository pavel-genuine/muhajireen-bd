import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollTextAnimation = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Fade-in for .fade_bottom elements
    const fadeElements = document.querySelectorAll('.fade_bottom');
    if (fadeElements.length) {
      const isMobile = window.innerWidth < 1023;
      const fadeArray = Array.from(fadeElements);

      gsap.set(fadeArray, { y: 30, opacity: 0 });

      fadeArray.forEach((item) => {
        const animation = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: isMobile ? 'top center+=100' : 'top center+=200',
          },
        });

        animation.to(item, {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          duration: 1.5,
          stagger: isMobile ? 0 : 0.2,
        });
      });
    }

    // Scroll-triggered animations
    const defaults = {
      duration: 1.2,
      ease: 'power4.out',
      animation: 'fade_from_bottom',
    };

    const animations = {
      fade_from_bottom: { y: 180, opacity: 0 },
      fade_from_top: { y: -180, opacity: 0 },
      fade_from_left: { x: -180, opacity: 0 },
      fade_from_right: { x: 180, opacity: 0 },
      fade_in: { opacity: 0 },
      rotate_up: { y: 180, rotation: 10, opacity: 0 },
    };

    const scrollAnimations = document.querySelectorAll('.scroll-text-animation');
    scrollAnimations.forEach((box) => {
      const animationType =
        animations[box.dataset.animation] || animations[defaults.animation];

      gsap.from(box, {
        ...animationType,
        duration: parseFloat(box.dataset.animationDuration) || defaults.duration,
        ease: defaults.ease,
        scrollTrigger: {
          trigger: box,
          start: 'top bottom+=10%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    // Image animation
    const animatedElements = document.querySelectorAll('.new_img-animet');
    animatedElements.forEach((element) => {
      const image = element.querySelector('img');
      if (!image) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.set(element, { autoAlpha: 1 });
      tl.from(element, { xPercent: -100, duration: 1.5, ease: 'power2.out' });
      tl.from(image, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: 'power2.out',
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div>
      <span
        className="scroll-text-animation"
        data-animation="fade_from_bottom"
      >
      </span>
      <span className="scroll-text-animation" data-animation="fade_from_top">
      </span>
      <span className="scroll-text-animation" data-animation="fade_from_left">
      </span>
      <span className="scroll-text-animation" data-animation="fade_from_right">
      </span>

      <div className="new_img-animet" style={{ overflow: 'hidden' }}>
        
      </div>
    </div>
  );
};

export default ScrollTextAnimation;
