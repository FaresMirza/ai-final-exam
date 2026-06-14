(function () {
  const STORAGE_KEY = "ai3011-language";

  function formatMessage(template, values) {
    return template.replace(/\{(\w+)\}/g, function (_, key) {
      return values[key] ?? "";
    });
  }

  function buildToggle(host, onChange) {
    if (!host) {
      return null;
    }

    const toggle = document.createElement("div");
    toggle.className = "lang-toggle";
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

  window.StudyGuideApp = {
    init: function (config) {
      const original = {
        html: readOriginalContent(),
        title: document.title
      };

      const host = document.querySelector(config.toggleHostSelector);
      const toggle = buildToggle(host, setLanguage);
      const saved = localStorage.getItem(STORAGE_KEY);
      const initialLang = saved === "ar" ? "ar" : "en";

      function setLanguage(lang) {
        const nextLang = lang === "ar" ? "ar" : "en";
        localStorage.setItem(STORAGE_KEY, nextLang);
        document.documentElement.lang = nextLang;
        document.documentElement.dir = nextLang === "ar" ? "rtl" : "ltr";
        document.title = nextLang === "ar" ? config.title.ar : original.title;
        applyTranslations(original, config.translations, nextLang);
        renderQuizzes(config, nextLang);

        if (toggle) {
          const label = toggle.querySelector(".lang-toggle__label");
          label.textContent = nextLang === "ar" ? "اللغة" : "Language";

          toggle.querySelectorAll("[data-lang]").forEach(function (button) {
            const active = button.dataset.lang === nextLang;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", active ? "true" : "false");
          });
        }
      }

      setLanguage(initialLang);
    }
  };
})();
