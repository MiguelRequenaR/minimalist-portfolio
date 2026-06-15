import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let lenis;
let rafId;

function initLenis() {
  if (lenis) {
    lenis.destroy();
    cancelAnimationFrame(rafId);
  }

  lenis = new Lenis({
    smoothWheel: true,
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
  });

  lenis.on('scroll', ScrollTrigger.update);

  function raf(time) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);
}

document.addEventListener("astro:page-load", initLenis);
initLenis();
