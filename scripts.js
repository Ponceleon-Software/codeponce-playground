/* ── Hamburger Menu ── */
(function () {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true' ? false : true;
      this.setAttribute('aria-expanded', expanded);
      menu.classList.toggle('nav-open');
    });
  }
})();

/* ── Dark Mode ── */
(function () {
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (toggle) toggle.textContent = '☀️';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (toggle) toggle.textContent = '🌙';
    }
  }

  if (stored) {
    applyTheme(stored);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      applyTheme(next);
    });
  }
})();

/* ── Dark Mode CSS Variables ── */
(function () {
  const style = document.createElement('style');
  style.textContent = `
    [data-theme="dark"] {
      --color-text: #f3f4f6;
      --color-text-light: #9ca3af;
      --color-bg: #111827;
      --color-bg-alt: #1f2937;
      --color-bg-dark: #0f172a;
      --color-border: #374151;
      --shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      --shadow-lg: 0 4px 12px rgba(0, 0, 0, 0.4);
    }
  `;
  document.head.appendChild(style);
})();

/* ── Form Validation ── */
(function () {
  const form = document.querySelector('#contact form');
  if (!form) return;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  function showError(input, message) {
    const error = input.parentElement.querySelector('.error-message');
    if (error) error.remove();
    const div = document.createElement('div');
    div.className = 'error-message';
    div.textContent = message;
    div.style.cssText = 'color: #ef4444; font-size: 0.8rem; margin-top: 0.25rem;';
    input.classList.add('input-error');
    input.parentElement.appendChild(div);
  }

  function clearError(input) {
    const error = input.parentElement.querySelector('.error-message');
    if (error) error.remove();
    input.classList.remove('input-error');
  }

  function validateName() {
    if (name.value.trim().length < 2) {
      showError(name, 'El nombre debe tener al menos 2 caracteres');
      return false;
    }
    clearError(name);
    return true;
  }

  function validateEmail() {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email.value.trim())) {
      showError(email, 'Ingresá un correo electrónico válido');
      return false;
    }
    clearError(email);
    return true;
  }

  function validateMessage() {
    if (message.value.trim().length < 10) {
      showError(message, 'El mensaje debe tener al menos 10 caracteres');
      return false;
    }
    clearError(message);
    return true;
  }

  name.addEventListener('blur', validateName);
  email.addEventListener('blur', validateEmail);
  message.addEventListener('blur', validateMessage);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const validName = validateName();
    const validEmail = validateEmail();
    const validMessage = validateMessage();

    if (validName && validEmail && validMessage) {
      const btn = this.querySelector('button[type="submit"]');
      btn.textContent = '✓ Mensaje enviado';
      btn.style.background = '#22c55e';
      setTimeout(function () {
        btn.textContent = 'Enviar mensaje';
        btn.style.background = '';
        form.reset();
      }, 3000);
    }
  });
})();

/* ── Smooth Scroll ── */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();

/* ── Back to Top ── */
(function () {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  btn.style.display = 'none';

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ── FAQ Accordion ── */
(function () {
  document.querySelectorAll('#faq details').forEach(function (detail) {
    detail.addEventListener('toggle', function () {
      if (this.open) {
        document.querySelectorAll('#faq details').forEach(function (other) {
          if (other !== detail) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });
})();

/* ── GitHub API Stats ── */
(function () {
  const container = document.getElementById('github-stats');
  if (!container) return;

  fetch('https://api.github.com/repos/Ponceleon-Software/codeponce-playground')
    .then(function (res) {
      if (!res.ok) throw new Error('Error al obtener datos');
      return res.json();
    })
    .then(function (data) {
      container.innerHTML = '';
      const stats = [
        { label: '⭐ Estrellas', value: data.stargazers_count },
        { label: '🍴 Forks', value: data.forks_count },
        { label: '📦 Issues abiertos', value: data.open_issues_count },
        { label: '👀 Watchers', value: data.subscribers_count },
      ];
      stats.forEach(function (stat) {
        const div = document.createElement('div');
        div.className = 'stat-card';
        div.innerHTML = '<strong>' + stat.value + '</strong><span>' + stat.label + '</span>';
        container.appendChild(div);
      });
    })
    .catch(function (err) {
      container.innerHTML = '<p>No se pudieron cargar las estadísticas. Intentá más tarde.</p>';
      console.error(err);
    });
})();

/* ── Visit Counter (localStorage) ── */
(function () {
  const counter = document.getElementById('visit-count');
  if (!counter) return;

  let visits = parseInt(localStorage.getItem('visitCount') || '0', 10);
  visits += 1;
  localStorage.setItem('visitCount', String(visits));
  counter.textContent = visits;
})();
