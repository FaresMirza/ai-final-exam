(function () {
  const config = window.ETHICS_PAGE_CONFIG;

  if (!config) {
    return;
  }

  const links = document.querySelector(".site-nav .links");
  if (links) {
    const host = document.createElement("div");
    host.className = "lang-toggle-host";
    links.after(host);
  }

  const elementMap = [
    [".site-nav .label", "site-nav-label"],
    [".site-nav .links", "site-nav-links"],
    ["header .tag", "hero-tag"],
    ["header h1", "hero-title"],
    ["header p", "hero-copy"],
    ["nav", "page-nav"],
    [".chapter-head", "chapter-head"],
    ["footer", "footer"]
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

  StudyGuideApp.init({
    toggleHostSelector: ".lang-toggle-host",
    title: {
      ar: config.titleAr
    },
    translations: {
      html: config.translations
    },
    quizzes: config.quizzes,
    quizUi: {
      en: {
        badge: "QUIZ",
        questionLabel: "Q",
        whyLabel: "Why:",
        scoreLabel: "You scored {correct} / {total}",
        perfect: "Perfect - you're ready!",
        retry: "Re-read the ones you missed and try again.",
        meta: config.quizMeta.en
      },
      ar: {
        badge: "اختبار",
        questionLabel: "س",
        whyLabel: "السبب:",
        scoreLabel: "حصلت على {correct} / {total}",
        perfect: "ممتاز، أنت جاهز!",
        retry: "راجع الأسئلة التي أخطأت فيها ثم جرّب مرة أخرى.",
        meta: config.quizMeta.ar
      }
    }
  });
})();
