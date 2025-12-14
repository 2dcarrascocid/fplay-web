/**
 * Updates the document head with meta tags and structured data.
 * @param {Object} meta - The meta information for the page.
 * @param {string} meta.title - Page title.
 * @param {string} meta.description - Page description.
 * @param {string} [meta.image] - URL for OG image.
 * @param {Object} [meta.jsonLd] - Structured data object.
 */
export function updateHead(meta) {
    // Title
    document.title = meta.title || 'Fair Play Chile';

    // Meta Description
    updateMetaTag('name', 'description', meta.description || 'Fair Play Chile - Gestión Deportiva e Innovación');

    // Open Graph
    updateMetaTag('property', 'og:title', meta.title || 'Fair Play Chile');
    updateMetaTag('property', 'og:description', meta.description || 'Fair Play Chile - Gestión Deportiva e Innovación');
    if (meta.image) {
        updateMetaTag('property', 'og:image', meta.image);
    }
    updateMetaTag('property', 'og:url', window.location.href);

    // Structured Data (JSON-LD)
    if (meta.jsonLd) {
        injectJsonLd(meta.jsonLd);
    }
}

function updateMetaTag(attribute, name, content) {
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
}

function injectJsonLd(data) {
    let script = document.getElementById('json-ld-data');
    if (script) {
        script.remove();
    }
    script = document.createElement('script');
    script.id = 'json-ld-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
}
