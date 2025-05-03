<!-- Resource hints -->
<link rel="preconnect" href="https://github.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Critical CSS -->
<style>
/* Inline critical CSS */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
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
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "m7eh41ui8f");
</script>

<!-- Schema.org markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Your Daily Tech Dose",
  "description": "Latest tech news and analysis covering AMD, Apple, and emerging technologies. In-depth coverage of CPUs, GPUs, AI developments, and industry trends.",
  "url": "https://vasudev-gm.github.io",
  "author": {
    "@type": "Person",
    "name": "Vasudev Menon"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Your Daily Tech Dose",
    "logo": {
      "@type": "ImageObject",
      "url": "https://vasudev-gm.github.io/images/logo.svg"
    }
  }
}
</script>