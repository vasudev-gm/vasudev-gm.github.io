// Local-first Clarity loader with CDN fallback
(function () {
    // In development, attempt to load from .env.development.local if available.
    var PROJECT_ID = (window && window.__CLARITY_PROJECT_ID__) || '';

    // If running in development and .env.development.local is available, try to fetch the project id
    if (
        typeof PROJECT_ID === 'string' &&
        PROJECT_ID.length === 0 &&
        location.hostname === 'localhost'
    ) {
        try {
            // This assumes a dev server endpoint exposes the env variable as JSON
            // e.g., /__env clarifies to { "MSFT_CLARITY": "your-project-id" }
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/__env', false); // synchronous for early init
            xhr.send(null);
            if (xhr.status === 200) {
                var env = JSON.parse(xhr.responseText);
                if (env && env.MSFT_CLARITY) {
                    PROJECT_ID = env.MSFT_CLARITY;
                }
            }
        } catch (e) {
            // Ignore errors; fallback to other methods
        }
    }

    // If PROJECT_ID is still empty, do not load clarity.
    if (!PROJECT_ID) {
        return;
    }

    // Also support a meta tag fallback: <meta name="msft-clarity" content="...">
    if (!PROJECT_ID) {
        var meta = document.querySelector('meta[name="msft-clarity"]');
        if (meta) PROJECT_ID = meta.getAttribute('content') || '';
    }
    function insertScript(src, onload, onerror, attrs) {
        var s = document.createElement('script');
        s.src = src;
        s.async = true;
        if (attrs) Object.keys(attrs).forEach(function (k) { s.setAttribute(k, attrs[k]); });
        s.onload = onload;
        s.onerror = onerror;
        document.getElementsByTagName('head')[0].appendChild(s);
        return s;
    }

    function startClarity() {
        try {
            if (window.clarity && typeof window.clarity === 'function') {
                // Some builds expose a start method; call as advised by package
                window.clarity('start', PROJECT_ID);
            } else if (window.clarity && typeof window.clarity === 'object' && typeof window.clarity.init === 'function') {
                window.clarity.init(PROJECT_ID);
            } else if (typeof clarity === 'function') {
                clarity('start', PROJECT_ID);
            }
        } catch (e) {
            // swallow errors to avoid breaking the site
            console.error('Clarity init error', e);
        }
    }

    // Try local copy (copied from npm during postinstall) first
    var localSrc = '/js/clarity.js';
    var cdnSrc = PROJECT_ID ? 'https://www.clarity.ms/tag/' + PROJECT_ID : null;

    // If no project id is present, do not load clarity.
    if (!PROJECT_ID) {
        // Nothing to do; site will not include Clarity when secret is not provided.
        return;
    }

    // If document readyState is already interactive/complete, load immediately
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        insertScript(localSrc, startClarity, function () { insertScript(cdnSrc, startClarity); });
    } else {
        // Defer until DOM is safe to modify
        window.addEventListener('DOMContentLoaded', function () {
            insertScript(localSrc, startClarity, function () { insertScript(cdnSrc, startClarity); });
        });
    }
})();
