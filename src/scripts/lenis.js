import Lenis from 'lenis';

const lenis = new Lenis({
  smoothWheel: true,
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
