(function () {
  const LANGUAGE_STORAGE_KEY = "ai3011-language";
  const THEME_STORAGE_KEY = "ai3011-theme";

  function formatMessage(template, values) {
    return template.replace(/\{(\w+)\}/g, function (_, key) {
      return values[key] ?? "";
    });
  }

  function buildLanguageToggle(host, onChange, className) {
    if (!host) {
      return null;
    }

    const toggle = document.createElement("div");
    toggle.className = className || "lang-toggle";
    toggle.innerHTML =
      '<span class="lang-toggle__label"></span>' +
      '<div class="lang-toggle__buttons" role="group" aria-label="Language switcher">' +
      '<button type="button" class="lang-toggle__button" data-lang="en">English</button>' +
      '<button type="button" class="lang-toggle__button" data-lang="ar">العربية</button>' +
      "</div>";

    toggle.querySelectorAll("[data-lang]").forEach(function (button) {
      button.addEventListener("click", function () {
        onChange(button.dataset.lang);
      });
    });

    host.appendChild(toggle);
    return toggle;
  }

  function buildFloatingDock(onLanguageChange, onThemeChange) {
    const dock = document.createElement("aside");
    dock.className = "floating-dock";
    dock.innerHTML =
      '<div class="floating-dock__section">' +
      '<p class="floating-dock__title" data-role="lang-title"></p>' +
      '<div class="floating-dock__lang-host"></div>' +
      "</div>" +
      '<div class="floating-dock__section">' +
      '<p class="floating-dock__title" data-role="theme-title"></p>' +
      '<div class="theme-toggle" role="group" aria-label="Theme switcher">' +
      '<button type="button" class="theme-toggle__button" data-theme="light"></button>' +
      '<button type="button" class="theme-toggle__button" data-theme="dark"></button>' +
      "</div>" +
      "</div>";

    dock.querySelectorAll("[data-theme]").forEach(function (button) {
      button.addEventListener("click", function () {
        onThemeChange(button.dataset.theme);
      });
    });

    document.body.appendChild(dock);

    const languageHost = dock.querySelector(".floating-dock__lang-host");
    const languageToggle = buildLanguageToggle(
      languageHost,
      onLanguageChange,
      "lang-toggle lang-toggle--floating"
    );

    return {
      dock: dock,
      languageToggle: languageToggle
    };
  }

  function readOriginalContent() {
    const html = {};
    document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
      html[element.dataset.i18nHtml] = element.innerHTML;
    });
    return html;
  }

  function applyTranslations(original, translations, lang) {
    document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
      const key = element.dataset.i18nHtml;
      const translated = translations?.html?.[key];
      element.innerHTML = lang === "ar" && translated ? translated : original.html[key];
    });
  }

  function renderQuizzes(config, lang) {
    if (!config.quizzes || !config.quizUi) {
      return;
    }

    const quizData = config.quizzes[lang] || {};
    const quizUi = config.quizUi[lang] || {};

    document.querySelectorAll("[data-quiz]").forEach(function (wrap) {
      const items = quizData[wrap.id];
      const meta = quizUi.meta?.[wrap.id];

      if (!items || !meta) {
        return;
      }

      wrap.innerHTML = "";
      wrap.dataset.lang = lang;

      const head = document.createElement("div");
      head.className = "qhead";
      head.innerHTML =
        '<span class="badge">' + quizUi.badge + "</span>" +
        "<h3>" + meta.title + "</h3>";
      wrap.appendChild(head);

      const sub = document.createElement("p");
      sub.className = "sub";
      sub.innerHTML = meta.sub;
      wrap.appendChild(sub);

      let answered = 0;
      let correct = 0;

      items.forEach(function (item, index) {
        const qDiv = document.createElement("div");
        qDiv.className = "q";

        const qText = document.createElement("div");
        qText.className = "qtext";
        qText.innerHTML =
          '<span class="qn">' + quizUi.questionLabel + (index + 1) + ".</span>" + item.q;
        qDiv.appendChild(qText);

        const exp = document.createElement("div");
        exp.className = "explain";
        exp.innerHTML = "<b>" + quizUi.whyLabel + "</b> " + item.explain;

        item.options.forEach(function (option, optionIndex) {
          const button = document.createElement("button");
          button.className = "opt";
          button.innerHTML = option;
          button.addEventListener("click", function () {
            if (qDiv.dataset.done) {
              return;
            }

            qDiv.dataset.done = "1";
            answered += 1;

            const allButtons = qDiv.querySelectorAll(".opt");
            allButtons.forEach(function (optButton) {
              optButton.disabled = true;
            });

            if (optionIndex === item.answer) {
              button.classList.add("correct");
              button.innerHTML += '<span class="mark">✓</span>';
              correct += 1;
            } else {
              button.classList.add("wrong");
              button.innerHTML += '<span class="mark">✗</span>';
              allButtons[item.answer].classList.add("correct");
              allButtons[item.answer].innerHTML += '<span class="mark">✓</span>';
            }

            exp.classList.add("show");

            if (answered === items.length) {
              scoreBox.classList.add("show");
              scoreBox.innerHTML =
                formatMessage(quizUi.scoreLabel, {
                  correct: correct,
                  total: items.length
                }) +
                "<small>" +
                (correct === items.length ? quizUi.perfect : quizUi.retry) +
                "</small>";
              scoreBox.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          });
          qDiv.appendChild(button);
        });

        qDiv.appendChild(exp);
        wrap.appendChild(qDiv);
      });

      const scoreBox = document.createElement("div");
      scoreBox.className = "score";
      wrap.appendChild(scoreBox);
    });
  }

  function updateLanguageToggle(toggle, lang) {
    if (!toggle) {
      return;
    }

    const label = toggle.querySelector(".lang-toggle__label");
    label.textContent = lang === "ar" ? "اللغة" : "Language";

    toggle.querySelectorAll("[data-lang]").forEach(function (button) {
      const active = button.dataset.lang === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function updateFloatingDock(dockRef, lang, theme) {
    if (!dockRef?.dock) {
      return;
    }

    const dock = dockRef.dock;
    const isArabic = lang === "ar";

    dock.querySelector('[data-role="lang-title"]').textContent = isArabic ? "اللغة" : "Language";
    dock.querySelector('[data-role="theme-title"]').textContent = isArabic ? "المظهر" : "Theme";

    dock.querySelectorAll(".theme-toggle__button").forEach(function (button) {
      const isActive = button.dataset.theme === theme;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
      button.textContent =
        button.dataset.theme === "dark"
          ? (isArabic ? "ليلي" : "Dark")
          : (isArabic ? "نهاري" : "Light");
    });

    updateLanguageToggle(dockRef.languageToggle, lang);
  }

  function applyTheme(theme) {
    const nextTheme = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
  }

  window.StudyGuideApp = {
    init: function (config) {
      const original = {
        html: readOriginalContent(),
        title: document.title
      };

      const host = document.querySelector(config.toggleHostSelector);
      const toggle = buildLanguageToggle(host, setLanguage);
      const floatingDock = buildFloatingDock(setLanguage, setTheme);
      const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      const initialTheme = savedTheme === "dark" ? "dark" : "light";

      function setTheme(theme) {
        const nextTheme = theme === "dark" ? "dark" : "light";
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        applyTheme(nextTheme);
        updateFloatingDock(floatingDock, document.documentElement.lang || "en", nextTheme);
      }

      function setLanguage(lang) {
        const nextLang = lang === "ar" ? "ar" : "en";
        localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLang);
        document.documentElement.lang = nextLang;
        document.documentElement.dir = nextLang === "ar" ? "rtl" : "ltr";
        document.title = nextLang === "ar" ? config.title.ar : original.title;
        applyTranslations(original, config.translations, nextLang);
        renderQuizzes(config, nextLang);
        updateLanguageToggle(toggle, nextLang);
        updateFloatingDock(
          floatingDock,
          nextLang,
          document.documentElement.dataset.theme || "light"
        );
      }

      const initialLang = savedLanguage === "ar" ? "ar" : "en";
      setTheme(initialTheme);
      setLanguage(initialLang);
    }
  };
})();
