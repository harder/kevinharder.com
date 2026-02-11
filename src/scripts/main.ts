type ThemeChoice = 'system' | 'dark' | 'light';

type Star = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  velocity: number;
};

const THEME_STORAGE_KEY = 'theme-preference';

function getStoredTheme(): ThemeChoice {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'system' || stored === 'dark' || stored === 'light') {
    return stored;
  }

  return 'dark';
}

function getResolvedTheme(choice: ThemeChoice): 'dark' | 'light' {
  if (choice === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  return choice;
}

function applyTheme(choice: ThemeChoice, persist = true): void {
  const resolved = getResolvedTheme(choice);
  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themeChoice = choice;

  if (persist) {
    window.localStorage.setItem(THEME_STORAGE_KEY, choice);
  }

  const themeButtons = document.querySelectorAll<HTMLButtonElement>(
    '[data-theme-choice]'
  );
  themeButtons.forEach((button) => {
    button.setAttribute(
      'aria-pressed',
      String(button.dataset.themeChoice === choice)
    );
  });
}

function listenToMediaChanges(
  media: MediaQueryList,
  callback: () => void
): void {
  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', callback);
    return;
  }

  if (typeof media.addListener === 'function') {
    media.addListener(callback);
  }
}

function initThemeToggle(): void {
  const themeButtons = document.querySelectorAll<HTMLButtonElement>(
    '[data-theme-choice]'
  );
  if (!themeButtons.length) {
    return;
  }

  const storedChoice = getStoredTheme();
  applyTheme(storedChoice, false);

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const choice = button.dataset.themeChoice;
      if (choice === 'dark' || choice === 'light' || choice === 'system') {
        applyTheme(choice);
      }
    });
  });

  const media = window.matchMedia('(prefers-color-scheme: dark)');
  listenToMediaChanges(media, () => {
    if (getStoredTheme() === 'system') {
      applyTheme('system', false);
    }
  });
}

function initScrollSpy(): void {
  const links = document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]');
  if (!links.length) {
    return;
  }

  const sections = Array.from(links)
    .map((link) => {
      const id = link.getAttribute('href')?.replace('#', '');
      if (!id) {
        return null;
      }
      const element = document.getElementById(id);
      return element ? { id, element } : null;
    })
    .filter((entry): entry is { id: string; element: HTMLElement } =>
      Boolean(entry)
    );

  const setActive = (activeId: string) => {
    links.forEach((link) => {
      const id = link.getAttribute('href')?.replace('#', '');
      const selected = id === activeId;
      link.classList.toggle('is-active', selected);
      link.setAttribute('aria-current', selected ? 'true' : 'false');
    });
  };

  const currentHash = window.location.hash.replace('#', '');
  if (currentHash) {
    setActive(currentHash);
  } else if (sections.length) {
    setActive(sections[0].id);
  }

  if (typeof window.IntersectionObserver !== 'function') {
    return;
  }

  const visibility = new Map<string, number>();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (!id) {
          return;
        }

        visibility.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
      });

      const best = Array.from(visibility.entries()).sort(
        (left, right) => right[1] - left[1]
      )[0];
      if (best && best[1] > 0) {
        setActive(best[0]);
      }
    },
    {
      threshold: [0.2, 0.4, 0.6],
      rootMargin: '-30% 0px -45% 0px'
    }
  );

  sections.forEach(({ id, element }) => {
    visibility.set(id, 0);
    observer.observe(element);
  });
}

function showToast(message: string): void {
  const toast = document.getElementById('site-toast');
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add('is-visible');

  window.setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 1800);
}

async function copyToClipboard(value: string): Promise<boolean> {
  if (
    navigator.clipboard &&
    typeof navigator.clipboard.writeText === 'function'
  ) {
    await navigator.clipboard.writeText(value);
    return true;
  }

  const textArea = document.createElement('textarea');
  textArea.value = value;
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'absolute';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.select();

  const success = document.execCommand('copy');
  document.body.removeChild(textArea);
  return success;
}

function initCopyButtons(): void {
  const buttons =
    document.querySelectorAll<HTMLButtonElement>('[data-copy-value]');
  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const value = button.dataset.copyValue;
      if (!value) {
        return;
      }

      try {
        const copied = await copyToClipboard(value);
        showToast(copied ? 'Copied to clipboard' : 'Copy failed');
      } catch {
        showToast('Copy failed');
      }
    });
  });
}

function initRevealAnimations(): void {
  const revealTargets = document.querySelectorAll<HTMLElement>('.reveal');
  if (!revealTargets.length) {
    return;
  }

  const motionReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (motionReduced || typeof window.IntersectionObserver !== 'function') {
    revealTargets.forEach((target) => target.classList.add('is-visible'));
    return;
  }

  document.documentElement.classList.add('reveal-ready');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );

  revealTargets.forEach((target) => {
    const rect = target.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      target.classList.add('is-visible');
    }
    observer.observe(target);
  });
}

function initStarfield(): void {
  const canvas = document.getElementById(
    'starfield-canvas'
  ) as HTMLCanvasElement | null;
  if (!canvas) {
    return;
  }

  const context = canvas.getContext('2d');
  if (!context) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  let stars: Star[] = [];
  let width = 0;
  let height = 0;
  let animationFrame = 0;

  const seedStars = () => {
    const density = Math.max(45, Math.floor((width * height) / 12000));
    stars = Array.from({ length: density }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.2,
      alpha: Math.random() * 0.7 + 0.1,
      velocity: Math.random() * 0.08 + 0.03
    }));
  };

  const render = () => {
    context.clearRect(0, 0, width, height);
    for (const star of stars) {
      context.beginPath();
      context.fillStyle = `rgba(187, 222, 255, ${star.alpha})`;
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      context.fill();

      if (!prefersReducedMotion) {
        star.y += star.velocity;
        if (star.y > height + 4) {
          star.y = -4;
          star.x = Math.random() * width;
        }
      }
    }

    if (!prefersReducedMotion) {
      animationFrame = window.requestAnimationFrame(render);
    }
  };

  const resize = () => {
    const ratio = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    seedStars();
    render();
  };

  window.addEventListener('resize', resize);
  resize();

  if (prefersReducedMotion) {
    return;
  }

  window.addEventListener('pagehide', () => {
    window.cancelAnimationFrame(animationFrame);
  });
}

function runSafely(init: () => void): void {
  try {
    init();
  } catch (error) {
    console.error('Site enhancement failed:', error);
  }
}

export function initSiteEnhancements(): void {
  if (document.body.dataset.enhanced === 'true') {
    return;
  }

  document.body.dataset.enhanced = 'true';

  runSafely(initThemeToggle);
  runSafely(initScrollSpy);
  runSafely(initCopyButtons);
  runSafely(initRevealAnimations);
  runSafely(initStarfield);
}
