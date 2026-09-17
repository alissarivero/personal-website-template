(function () {
  var config = window.SITE_CONFIG || {};
  var placeholder = "YOUR-USERNAME";

  function trimSlash(value) {
    return String(value || "").replace(/\/+$/, "");
  }

  function inferredSiteUrl() {
    var path = window.location.pathname.replace(/\/index\.html$/, "");
    var idx = path.indexOf("/templates/");
    var base = idx === -1 ? path.replace(/\/$/, "") : path.slice(0, idx);
    if (base === "/") {
      base = "";
    }
    return window.location.origin + base;
  }

  var configured = trimSlash(config.siteUrl);
  var siteUrl =
    configured && configured.indexOf(placeholder) === -1
      ? configured
      : trimSlash(inferredSiteUrl());

  var template = String(config.template || "").trim();
  var pageUrl = trimSlash(window.location.href.split("#")[0].replace(/index\.html$/, ""));
  if (!pageUrl.endsWith("/")) {
    pageUrl += "/";
  }

  var onTemplatePage = window.location.pathname.indexOf("/templates/") !== -1;
  var ogImage = onTemplatePage
    ? pageUrl + "assets/images/og-image.svg"
    : siteUrl + "/assets/images/og-image.svg";
  var shareUrl = config.useTemplateAsHomepage || !template
    ? siteUrl + "/"
    : siteUrl + "/templates/" + template + "/";

  window.SITE_URLS = {
    siteUrl: siteUrl,
    pageUrl: pageUrl,
    shareUrl: shareUrl,
    templateUrl: template ? siteUrl + "/templates/" + template + "/" : siteUrl + "/"
  };

  function setAttr(selector, attr, value) {
    var el = document.querySelector(selector);
    if (el) {
      el.setAttribute(attr, value);
    }
  }

  setAttr('link[rel="canonical"]', "href", pageUrl);
  setAttr('meta[property="og:url"]', "content", pageUrl);
  setAttr('meta[property="og:image"]', "content", ogImage);

  var ld = document.querySelector('script[type="application/ld+json"]');
  if (ld) {
    try {
      var data = JSON.parse(ld.textContent);
      data.url = pageUrl;
      ld.textContent = JSON.stringify(data);
    } catch (error) {
      // Leave the original JSON-LD in place if it cannot be parsed.
    }
  }

  if (
    config.useTemplateAsHomepage &&
    template &&
    !onTemplatePage &&
    window.location.protocol !== "file:"
  ) {
    window.location.replace("templates/" + template + "/");
    return;
  }

  function applyVisibleUrl() {
    var fields = document.querySelectorAll("[data-site-url]");
    fields.forEach(function (field) {
      if (field.tagName === "INPUT" || field.tagName === "TEXTAREA") {
        field.value = shareUrl;
      } else {
        field.textContent = shareUrl;
      }
    });

    var links = document.querySelectorAll("[data-site-url-link]");
    links.forEach(function (link) {
      link.setAttribute("href", shareUrl);
      if (!link.textContent.trim() || link.getAttribute("data-site-url-link") === "text") {
        link.textContent = shareUrl;
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyVisibleUrl);
  } else {
    applyVisibleUrl();
  }
})();
