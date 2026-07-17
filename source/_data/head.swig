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
