import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function initReveals() {
  ScrollTrigger.getAll().forEach((st) => st.kill());

  const reveals = document.querySelectorAll('[data-reveal]');

  reveals.forEach((el) => {
    const delay = parseFloat(el.dataset.revealDelay) || 0;

    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      delay,
      ease: 'power2.out',
    });
  });

  ScrollTrigger.refresh();
}

document.addEventListener("astro:page-load", initReveals);
