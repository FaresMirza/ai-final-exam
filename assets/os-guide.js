(function () {
  const config = window.OS_PAGE_CONFIG;

  if (!config) {
    return;
  }

  const links = document.querySelector(".site-nav .links");
  if (links && !document.querySelector(".lang-toggle-host")) {
    const host = document.createElement("div");
    host.className = "lang-toggle-host";
    links.after(host);
  }

  const elementMap = [
    [".site-nav .label", "site-nav-label"],
    [".site-nav .links", "site-nav-links"],
    ["header .tag", "hero-tag"],
    ["header h1", "hero-title"],
    ["header p", "hero-copy"]
  ];

  elementMap.forEach(function (pair) {
    const element = document.querySelector(pair[0]);
    if (element) {
      element.dataset.i18nHtml = pair[1];
    }
  });

  document.querySelectorAll("section.topic").forEach(function (section, index) {
    section.dataset.i18nHtml = "topic-" + (index + 1);
  });

  document.querySelectorAll("article.card").forEach(function (card, index) {
    card.dataset.i18nHtml = "card-" + (index + 1);
  });

  StudyGuideApp.init({
    toggleHostSelector: ".lang-toggle-host",
    title: {
      ar: config.titleAr
    },
    translations: {
      html: config.translations
    }
  });
})();
