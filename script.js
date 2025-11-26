// 初始化打字机效果
(function () {
  const typingTexts = [
    '软件工程师',
    '机器学习爱好者',
    '全栈开发者',
    '科研探索者',
    '阿森纳铁杆球迷',
    '漫威电影爱好者',
    '技术创新追求者'
  ];
  const el = document.querySelector('.typing-text');
  if (!el) return;
  let textIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const text = typingTexts[textIdx];
    if (deleting) {
      charIdx--;
      el.textContent = text.substring(0, charIdx);
    } else {
      charIdx++;
      el.textContent = text.substring(0, charIdx);
    }

    let delay = deleting ? 50 : 100;

    if (!deleting && charIdx === text.length) {
      delay = 2000;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      textIdx = (textIdx + 1) % typingTexts.length;
      delay = 500;
    }
    setTimeout(tick, delay);
  }

  setTimeout(tick, 500);
})();

// 初始化粒子背景（如果可用）
(function () {
  if (window.particlesJS) {
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#667eea' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#667eea', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
      },
      retina_detect: true
    });
  }
})();

// 平滑滚动
(function () {
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = 70;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
})();

// 滚动动画
(function () {
  const animatedElements = document.querySelectorAll('.section-title, .card');

  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  animatedElements.forEach(el => {
    observer.observe(el);
  });
})();
