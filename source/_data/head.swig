<!-- Resource hints -->
<link rel="preconnect" href="https://github.com">

<!-- Critical CSS -->
<style>
/* Inline critical CSS */
body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
}
.main-inner {
  margin: 0 auto;
  padding: 20px;
}
.post-block {
  background: #fff;
  padding: 20px;
  margin-bottom: 24px;
  border-radius: 3px;
  box-shadow: 0 2px 2px rgba(0,0,0,0.1);
}
.fa.fa-youtube {
  font-family: "Font Awesome 7 Brands";
  font-weight: 400;
}
.skip-link {
  background: #fff;
  color: #111;
  left: 1rem;
  padding: .75rem 1rem;
  position: fixed;
  top: -4rem;
  z-index: 10000;
}
.skip-link:focus {
  top: 1rem;
}
:where(a, button, [role="button"], input, select, textarea):focus-visible {
  outline: 3px solid #005fcc;
  outline-offset: 3px;
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
}
</style>

<!-- Performance optimizations -->
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="x-dns-prefetch-control" content="on">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<!-- JavaScript loading optimization -->
{% if theme.motion.enable %}
  {% set motion_enable = true %}
{% endif %}
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var main = document.querySelector('main');
    if (!main) return;

    main.id = 'main-content';

    var skipLink = document.createElement('a');
    skipLink.className = 'skip-link';
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    document.querySelectorAll('[role="button"]').forEach(function(control) {
      if (!control.hasAttribute('tabindex')) control.setAttribute('tabindex', '0');
      if (!control.hasAttribute('aria-label') && control.classList.contains('sidebar-toggle')) {
        control.setAttribute('aria-label', 'Toggle sidebar navigation');
      }
      if (!control.hasAttribute('aria-label') && control.classList.contains('popup-trigger')) {
        control.setAttribute('aria-label', 'Open search');
      }
      if (!control.hasAttribute('aria-label') && control.classList.contains('book-mark-link')) {
        control.setAttribute('aria-label', 'Bookmark this page');
      }
      control.addEventListener('keydown', function(event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        control.click();
      });
    });
  });
</script>
<script>
  // Defer non-critical JavaScript
  function loadDeferredStyles() {
    var addStylesNode = document.getElementById("deferred-styles");
    var replacement = document.createElement("div");
    replacement.innerHTML = addStylesNode.textContent;
    document.body.appendChild(replacement);
    addStylesNode.parentElement.removeChild(addStylesNode);
  }
  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
  else window.addEventListener('load', loadDeferredStyles);
</script>

<!-- MS clarity -->
<!-- MS Clarity loader (local npm package first, CDN fallback) -->
<script src="/js/clarity-config.js" defer></script>
<script src="/js/clarity-init.js" defer></script>

<!-- Schema.org markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Vasudev Tech Blog",
  "alternateName": "Your Daily Tech Dose",
  "description": "Vasudev Tech Blog delivers technology news and analysis covering CPUs, GPUs, AI, Windows, Linux, Android, and emerging technologies.",
  "url": "https://vasudev-gm.github.io",
  "author": {
    "@type": "Person",
    "@id": "https://vasudev-gm.github.io/about/#vasudev-menon",
    "name": "Vasudev Menon",
    "url": "https://vasudev-gm.github.io/about/",
    "sameAs": [
      "https://www.youtube.com/channel/UCpCSkED9eOAQCVFEORQ_qJQ",
      "https://github.com/vasudev-gm/"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "Vasudev Tech Blog",
    "alternateName": "Your Daily Tech Dose",
    "url": "https://vasudev-gm.github.io",
    "sameAs": [
      "https://www.youtube.com/channel/UCpCSkED9eOAQCVFEORQ_qJQ"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://vasudev-gm.github.io/images/logo.svg"
    }
  }
}
</script>
{% if page.path == 'about/index.html' %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "url": "https://vasudev-gm.github.io/about/",
  "name": "About Vasudev Menon | Vasudev Tech Blog",
  "mainEntity": {
    "@type": "Person",
    "@id": "https://vasudev-gm.github.io/about/#vasudev-menon",
    "name": "Vasudev Menon",
    "url": "https://vasudev-gm.github.io/about/",
    "sameAs": [
      "https://www.youtube.com/channel/UCpCSkED9eOAQCVFEORQ_qJQ",
      "https://github.com/vasudev-gm/"
    ]
  }
}
</script>
{% endif %}
