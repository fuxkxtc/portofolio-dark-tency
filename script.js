/* ============================================
   0xKAF — Portfolio Script
   Author  : Kasirun Sitorus
   GitHub  : github.com/AdanaTatuyaHatsumi
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── FOOTER YEAR ──────────────────────────────
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();


  // ── CUSTOM CURSOR ────────────────────────────
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');

  if (cursor && ring) {
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx - 5 + 'px';
      cursor.style.top  = my - 5 + 'px';
    });

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx - 18 + 'px';
      ring.style.top  = ry - 18 + 'px';
      requestAnimationFrame(animRing);
    };
    animRing();

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        ring.style.transform   = 'scale(1.5)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        ring.style.transform   = 'scale(1)';
      });
    });
  }


  // ── SCROLL REVEAL ────────────────────────────
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal, .timeline-item')
    .forEach(el => revealObserver.observe(el));


  // ── LANGUAGE BAR ANIMATION ───────────────────
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.lang-bar').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.lang-grid')
    .forEach(el => barObserver.observe(el));


  // ── PARALLAX HERO GLOW ───────────────────────
  const glow = document.querySelector('.hero-glow');
  if (glow) {
    document.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
  }

});
