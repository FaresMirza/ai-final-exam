(function () {
  const links = document.querySelector(".site-nav .links");
  const host = document.createElement("div");
  host.className = "lang-toggle-host";
  links.after(host);

  const elementMap = [
    [".site-nav .label", "site-nav-label"],
    [".site-nav .links", "site-nav-links"],
    ["header .tag", "hero-tag"],
    ["header h1", "hero-title"],
    ["header p", "hero-copy"],
    ["nav", "page-nav"],
    ["#ch5", "chapter-head-1"],
    ["#ch6", "chapter-head-2"],
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
      ar: "SE4705 — مواضيع مختارة في هندسة البرمجيات — الفصلان 5 و6"
    },
    translations: {
      html: {
        "site-nav-label": "أدلة المذاكرة",
        "site-nav-links": "\n<a href=\"index.html\">الصفحة الرئيسية</a>\n<a href=\"new-course-ch1-2.html\">الفصلان 1-2</a>\n<a href=\"new-course-ch3-4.html\">الفصلان 3-4</a>\n<a class=\"current\" href=\"new-course-ch5-6.html\">الفصلان 5-6</a>\n<a href=\"new-course-ch7-8.html\">الفصلان 7-8</a>\n",
        "hero-tag": "SE4705 · مواضيع مختارة",
        "hero-title": "دليل المذاكرة السريع",
        "hero-copy": "الفصلان الخامس والسادس — المفاهيم أولًا، جاهز للاختبار",
        "page-nav": "\n<a href=\"#ch5\">الفصل 5: الاستدامة</a>\n<a href=\"#quiz5\">اختبار 5</a>\n<a href=\"#ch6\">الفصل 6: التطوير بالذكاء الاصطناعي</a>\n<a href=\"#quiz6\">اختبار 6</a>\n",
        "chapter-head-1": "\n<span class=\"num\">الفصل الخامس</span>\n<h2>الاستدامة في هندسة البرمجيات</h2>\n",
        "chapter-head-2": "\n<span class=\"num\">الفصل السادس</span>\n<h2>تطوير البرمجيات المدعوم بالذكاء الاصطناعي</h2>\n",

        "topic-1": "\n<h3><span class=\"dot\"></span>تعريف الاستدامة</h3>\n<p><b>عام (تقرير برنتلاند، 1987):</b> \"التنمية التي تلبي احتياجات الحاضر دون المساس بقدرة الأجيال القادمة على تلبية احتياجاتها.\"</p>\n<ul>\n<li><b>في هندسة البرمجيات</b> — \"القدرة على الاستمرار\" (بيكر وآخرون، 2016).</li>\n<li><b>مصدر اهتمام جودي</b> إلى جانب الاستخدام والأمان والأمن.</li>\n<li>تغطي الآثار البعيدة المدى <b>البيئية والاجتماعية والاقتصادية والفردية والتقنية</b>.</li>\n<li>يجب أن تكون <b>اهتمامًا من الدرجة الأولى</b> عبر المتطلبات والتصميم والتنفيذ والاختبار والنشر.</li>\n</ul>\n",

        "topic-2": "\n<h3><span class=\"dot\"></span>لماذا تهم الاستدامة</h3>\n<ul>\n<li>التقنيات الرقمية مسؤولة عن <b>2–4% من استهلاك الطاقة العالمي</b> والانبعاثات الدفيئة.</li>\n<li>البرمجيات المستدامة تقلل طلب طاقة العتاد وترفع الكفاءة العامة.</li>\n<li>اللوائح والمعايير تتطور لـ <b>فرض ممارسات استدامة قابلة للقياس</b>.</li>\n<li>البرمجيات الطويلة العمر والقابلة للصيانة تقلل الهدر — والتوقعات المجتمعية تتطلب ذلك.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>الاستدامة تعزز <b>الابتكار والقدرة التنافسية والمرونة</b> — ليست مجرد طلب بيئي.</p>\n</div>\n",

        "topic-3": "\n<h3><span class=\"dot\"></span>بيان كارلسكرونا — الرؤية والمهمة والقيم</h3>\n<p>التزام دولي من الباحثين لتضمين الاستدامة في تصميم تقنية المعلومات.</p>\n<ul>\n<li><b>الرؤية</b> — إحداث ثورة في طريقة تصميم منتجات وخدمات IT لـ <b>استدامة وتجديد</b> الأنظمة الإنسانية والطبيعية.</li>\n<li><b>المهمة</b> — تطوير الأبحاث والتدريب الذي يمكّن مهنيي IT من تضمين الاستدامة في التصميم.</li>\n<li><b>القيم</b> — الوعي عبر التعاون، تنوع المنظورات، أثر إيجابي على العالم.</li>\n</ul>\n",

        "topic-4": "\n<h3><span class=\"dot\"></span>مبادئ كارلسكرونا التسعة</h3>\n<ul>\n<li><b>P1 منظومية</b> — ليست خاصية معزولة أبدًا؛ التفكير المنظومي نقطة البداية.</li>\n<li><b>P2 متعددة الأبعاد</b> — اقتصادية واجتماعية وبيئية وتقنية وفردية.</li>\n<li><b>P3 بين التخصصات</b> — تعاون عبر التخصصات.</li>\n<li><b>P4 تتجاوز هدف النظام</b> — حتى عندما لا تكون الاستدامة هدف النظام الأساسي.</li>\n<li><b>P5 تنطبق على النظام والسياق الأوسع</b> — التصميم يشمل النظام نفسه وأثره على البيئة.</li>\n<li><b>P6 إجراء على عدة مستويات</b> — تدخلات مختلفة، آثار مختلفة.</li>\n<li><b>P7 مقاييس زمنية متعددة</b> — قيّم عبر أُطر زمنية؛ المؤشرات طويلة الأمد مهمة.</li>\n<li><b>P8 المدى البعيد ≠ تضحية</b> — الابتكار يخدم الحاضر والمستقبل معًا.</li>\n<li><b>P9 الرؤية</b> — يجب أن يكون موقع النظام الاجتماعي وسياقه ظاهرين.</li>\n</ul>\n",

        "topic-5": "\n<h3><span class=\"dot\"></span>أبعاد الاستدامة الخمسة</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>البيئية</h4>\n<ul><li>حماية الموارد الطبيعية من الاحتياجات والنفايات البشرية</li></ul>\n</div>\n<div class=\"col\">\n<h4>الاقتصادية</h4>\n<ul><li>قيمة اقتصادية إيجابية ونمو رأس المال</li></ul>\n</div>\n</div>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>الاجتماعية</h4>\n<ul><li>علاقات منصفة ومتنوعة ومتصلة وديمقراطية</li></ul>\n</div>\n<div class=\"col\">\n<h4>التقنية</h4>\n<ul><li>تقنية تتعامل مع التغيير والتطور بكفاءة</li></ul>\n</div>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">الفردية (البعد الخامس)</span>\n<p>تُحمى احتياجات الفرد وتُدعم بكرامة — التطورات يجب أن <b>تحسّن الحياة الإنسانية، لا تهددها</b>.</p>\n</div>\n",

        "topic-6": "\n<h3><span class=\"dot\"></span>البعد البيئي</h3>\n<ul>\n<li><b>قلّل الطاقة والانبعاثات والنفايات</b> عبر دورة الحياة.</li>\n<li>حسّن البرمجية لتقليل طاقة مراكز البيانات وحمل العتاد.</li>\n<li>استخدم خوارزميات منخفضة الموارد وبيئات تشغيل كفؤة.</li>\n<li>قِس <b>البصمة الكربونية</b> للبرمجية؛ مدّ عمر العتاد؛ تصدَّ للنفايات الإلكترونية عبر مبادئ الاقتصاد الدائري.</li>\n</ul>\n",

        "topic-7": "\n<h3><span class=\"dot\"></span>البعد الاقتصادي</h3>\n<ul>\n<li>قدّم قيمة <b>دون أعباء مالية غير مستدامة</b>.</li>\n<li>قواعد الكود القابلة للصيانة تمنع تراكم الديون التقنية المكلفة.</li>\n<li>أعد استخدام مكونات مفتوحة المصدر لخفض كلفة التطوير.</li>\n<li>قيّم <b>تكاليف دورة الحياة الكاملة</b> — الصيانة والدعم والتخلص — لا التطوير فقط.</li>\n</ul>\n",

        "topic-8": "\n<h3><span class=\"dot\"></span>البعد الاجتماعي</h3>\n<ul>\n<li><b>وصول منصف</b> لمجتمعات المستخدمين العالمية المتنوعة.</li>\n<li>تصميم شامل — اعتبارات ثقافية ولغوية وإمكانية الوصول.</li>\n<li>الثقة عبر الخصوصية/الأمن؛ ممارسات عمل عادلة في سلاسل التوريد.</li>\n<li>تجنب تعزيز اللامساواة عبر النشر المسؤول.</li>\n</ul>\n",

        "topic-9": "\n<h3><span class=\"dot\"></span>البعد الفردي</h3>\n<ul>\n<li>يعالج <b>السلامة الجسدية والنفسية</b> للمطورين والصيانة والمستخدمين.</li>\n<li>أحمال عمل إنسانية، واجهات مريحة، حمل معرفي منخفض.</li>\n<li>يحترم الخصوصية والاستقلالية والإحساس بالفاعلية.</li>\n<li>رضا المطور → نتائج عالية الجودة مستدامة.</li>\n</ul>\n",

        "topic-10": "\n<h3><span class=\"dot\"></span>البعد التقني</h3>\n<ul>\n<li>معماريات لـ <b>عمر طويل وقابلية الصيانة والتوسع</b>.</li>\n<li>التجزيء + قابلية التشغيل البيني؛ بروتوكولات معيارية.</li>\n<li>قلل الاعتماديات على تقنيات قصيرة العمر (لتجنب الهجرات القسرية).</li>\n<li>الأمن والخصوصية <b>بالتصميم</b>؛ CI/CD لإبقاء الأنظمة موثوقة.</li>\n</ul>\n",

        "topic-11": "\n<h3><span class=\"dot\"></span>الأنواع الثلاثة لتأثيرات الاستدامة</h3>\n<ul>\n<li><b>مباشرة</b> — آثار فورية (مثلاً، ضغط الصور يقلل طاقة التخزين والنقل).</li>\n<li><b>غير مباشرة</b> — آثار تمكينية طويلة الأمد (مثلاً، المؤتمرات المرئية تقلل انبعاثات السفر).</li>\n<li><b>الارتداد (Rebound)</b> — مكاسب الكفاءة تدفع لمزيد من الاستخدام (مثلاً، تخزين سحابي أرخص يؤدي لاكتناز البيانات).</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p><b>تأثير الارتداد</b> هو الخفي — الكفاءة بدون انضباط سلوكي قد <em>تزيد</em> الطلب الكلي على الموارد.</p>\n</div>\n",

        "topic-12": "\n<h3><span class=\"dot\"></span>حالة دراسية: فضيحة انبعاثات فولكسفاجن</h3>\n<div class=\"ex\">\n<span class=\"lbl\">ما الذي حدث</span>\n<p>ركّبت VW <b>برمجية \"جهاز هزيمة\"</b> في ملايين سيارات الديزل. أثناء الاختبارات المخبرية بدت ملتزمة؛ وعلى الطرق أصدرت حتى <b>40× من NOx</b>. زيّفت البرمجية مقاييس الاستدامة، مضللةً المنظمين والمستهلكين.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">الدرس</span>\n<p>أخلاقيات البرمجية ⇄ الاستدامة البيئية. مليارات الغرامات + ضرر السمعة = تكلفة الهندسة غير الأمينة الخفية.</p>\n</div>\n",

        "topic-13": "\n<h3><span class=\"dot\"></span>هندسة المتطلبات للاستدامة</h3>\n<ul>\n<li>عرّف <b>المتطلبات الوظيفية وغير الوظيفية</b> — بما يشمل أهداف الاستدامة الصريحة.</li>\n<li>التقط مقاييس كفاءة الطاقة وموارد دورة الحياة أثناء الاستخراج.</li>\n<li>استخدم <b>النمذجة الموجهة بالأهداف</b> لربط اهتمامات الاستدامة بأهداف البرمجية.</li>\n<li>أشرك أصحاب المصلحة المتنوعين لفهم الآثار الاجتماعية/البيئية <b>مبكرًا</b>.</li>\n<li>وثّق المقايضات بين المتطلبات المتنافسة بشفافية.</li>\n</ul>\n",

        "topic-14": "\n<h3><span class=\"dot\"></span>ممارسات التصميم والبناء المستدام</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>التصميم</h4>\n<ul>\n<li>أنماط معيارية وقابلة لإعادة الاستخدام</li>\n<li>خوارزميات منخفضة التعقيد</li>\n<li>مقايضات سحابية الأصل قابلة للتوسع</li>\n<li>الأمن/الخصوصية/إمكانية الوصول كركائز تصميم</li>\n</ul>\n</div>\n<div class=\"col\">\n<h4>البناء</h4>\n<ul>\n<li>إرشادات ترميز للوضوح والكفاءة</li>\n<li>محللات لنقاط الطاقة الساخنة</li>\n<li>مراجعات الأقران + تحليل ثابت</li>\n<li>قلل تضخم المكتبات الخارجية</li>\n</ul>\n</div>\n</div>\n",

        "topic-15": "\n<h3><span class=\"dot\"></span>كفاءة الطاقة في لغات البرمجة</h3>\n<p>قاس بيريرا وآخرون وقت التشغيل والذاكرة والطاقة عبر اللغات. المقاييس الرئيسية:</p>\n<ul>\n<li><b>استهلاك الذاكرة</b> — إدارة فعّالة = استهلاك طاقة أقل.</li>\n<li><b>قوة المعالجة</b> — حساب أقل = طاقة أقل.</li>\n<li><b>استخدام الموارد في الخمول</b> — أوضاع السكون تساعد.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">ترتيب الطاقة</span>\n<p>اللغات المترجمة تتفوق: <b>C (1.00، الأكثر كفاءة)</b>، Rust (1.03)، C++ (1.34). اللغات المفسرة في الذيل: Python (75.88)، <b>Perl (79.58، الأقل كفاءة)</b>. Java (1.98، على VM) تجلس في الوسط الكفؤ.</p>\n</div>\n",

        "topic-16": "\n<h3><span class=\"dot\"></span>مقاييس الاستدامة والأدوات</h3>\n<ul>\n<li><b>SCI (شدة الكربون البرمجية)</b> — مقياس مؤسسة البرمجيات الخضراء لانبعاثات البرمجية.</li>\n<li>قس الطاقة على مستوى المكوّن والنظام.</li>\n<li>تتبّع استخدام العتاد، ومؤشرات قابلية الصيانة، وتكاليف دورة الحياة.</li>\n<li>الأدوات: إضافات IDE، ومحللات، ولوحات تحكم سحابية، وتقارير اختبار آلية.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال: SuSoftPro</span>\n<p>أداة تحلل متطلبات الاستدامة البرمجية مبكرًا في التطوير. توفر <b>نظام تنميط استدامة بخمس نجوم</b> بمشاركة أصحاب المصلحة — تشجع التكامل المبكر في هندسة المتطلبات.</p>\n</div>\n",

        "topic-17": "\n<h3><span class=\"dot\"></span>حالة دراسية: مشاركة سيارات DriveNow</h3>\n<p>خدمة مشاركة سيارات من BMW + Daimler. يجد المستخدمون السيارات ويستأجرونها عبر تطبيق؛ تُركَن السيارات في أي مكان داخل منطقة الخدمة.</p>\n<ul>\n<li><b>الخطوة 1:</b> حلل <b>القيم</b> العامة (مثل تقليل التلوث، استقطاب العملاء، وصول سهل للسيارة).</li>\n<li><b>الخطوة 2:</b> حدد <b>الأنشطة والمؤشرات</b> (العناصر الخضراء = أنشطة كشفها تحليل الاستدامة).</li>\n<li><b>الخطوة 3:</b> ارسم الروابط <b>المباشرة وغير المباشرة</b> بين الأنشطة والمؤشرات.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">الدروس المستفادة</span>\n<p>نمذجة الاستدامة تكشف أهدافًا ومخاطر مغفلة. الأنظمة التي تعتمد على أنشطة فردية (مثل السيارات الكهربائية فقط) تحتاج <b>خطط بديلة</b>. راقب المؤشرات باستمرار — الفجوات في البيانات الواقعية شائعة.</p>\n</div>\n",

        "topic-18": "\n<h3><span class=\"dot\"></span>ما هو الذكاء الاصطناعي في هندسة البرمجيات؟</h3>\n<p>تطبيق التعلم الآلي وNLP وخوارزميات ذكية لـ <b>المساعدة في مهام تطوير البرمجيات</b>. يُمكّن الأدوات من تعلم أنماط الكود، والتنبؤ بالأخطاء، وأتمتة الأعمال المعقدة (مثل توليد الكود).</p>\n<ul>\n<li><b>GitHub Copilot</b> — مبرمج زوج بالذكاء الاصطناعي مدعوم بـ OpenAI Codex.</li>\n<li><b>OpenAI Codex</b> — LLM مدرّب على الكود؛ يولد الكود، يصلح الأخطاء، يقترح طلبات الدمج.</li>\n<li><b>Diffblue Cover</b> — وكيل قائم على RL يولد اختبارات Java آليًا.</li>\n<li><b>Appvance IQ</b> — منصة اختبار مدعومة بالذكاء الاصطناعي تولد وتشغل اختبارات UI/API آليًا.</li>\n</ul>\n",

        "topic-19": "\n<h3><span class=\"dot\"></span>حالة دراسية: GitHub Copilot</h3>\n<p>أُطلق 2021، مدعومًا بـ OpenAI Codex (نموذج GPT مدرّب على الكود العام). يوفر إكمال كود واعٍ بالسياق في IDEs (VS Code، إلخ).</p>\n<div class=\"ex\">\n<span class=\"lbl\">الأثر المُقاس</span>\n<p>برمجة <b>أسرع بـ ~55%</b> مع Copilot مقارنة بدونه. <b>85%</b> من المطورين شعروا بثقة أعلى في كودهم. في تجربة مؤسسية: <b>90%</b> شعروا بإشباع أعلى، <b>95%</b> استمتعوا بالبرمجة أكثر.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>يمكن لـ Codex أن يعمل كـ <b>وكيل ذكاء اصطناعي</b> — يكتب الميزات، ويصلح الأخطاء، وينشئ طلبات الدمج في بيئة اختبار معزولة تحت إشراف بشري.</p>\n</div>\n",

        "topic-20": "\n<h3><span class=\"dot\"></span>لماذا نستخدم الذكاء الاصطناعي في SE؟ (الفوائد)</h3>\n<ul>\n<li><b>الإنتاجية</b> — يسرّع الترميز والاختبار، ويقصّر دورات التطوير.</li>\n<li><b>جودة الكود</b> — يلتقط الأخطاء مبكرًا (تنبؤ بالعيوب، فرض المعايير).</li>\n<li><b>أتمتة ذكية</b> — يؤتمت المهام المتكررة (الكود التكراري، الاختبارات).</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">المختصرات</span>\n<p><b>AI</b> = الذكاء الاصطناعي · <b>SE</b> = هندسة البرمجيات · <b>NLP</b> = معالجة اللغة الطبيعية · <b>LLM</b> = نموذج لغوي كبير.</p>\n</div>\n",

        "topic-21": "\n<h3><span class=\"dot\"></span>AI4SE مقابل SE4AI</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>AI4SE</h4>\n<ul>\n<li>الذكاء الاصطناعي <b>يساعد المطورين</b></li>\n<li>أتمتة وتحسين مهام التطوير</li>\n<li>إكمال الكود، التنبؤ بالعيوب</li>\n</ul>\n</div>\n<div class=\"col\">\n<h4>SE4AI</h4>\n<ul>\n<li>SE <b>يبني ذكاءً اصطناعيًا موثوقًا</b></li>\n<li>يعرّف المتطلبات والبنية والاختبار لـ ML</li>\n<li>هندسة خطوط أنابيب ML موثوقة</li>\n</ul>\n</div>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>هما <b>مرتبطان ومتكاملان</b>: أدوات AI تحتاج عمليات SE جيدة، وعمليات SE تستفيد من أتمتة AI.</p>\n</div>\n",

        "topic-22": "\n<h3><span class=\"dot\"></span>الذكاء الاصطناعي في هندسة المتطلبات</h3>\n<ul>\n<li><b>IBM Requirements Quality Assistant (RQA)</b> — قائم على Watson، يستخدم NLP في IBM DOORS لكشف المتطلبات الغامضة آنيًا. حتى <b>60% خفض في كلفة العيوب</b>.</li>\n<li><b>نماذج NLP (BERT، GPT)</b> تستخرج المتطلبات الأساسية من الوثائق غير المنظمة.</li>\n<li><b>التحقق المعتمد على NLP</b> يرصد التناقضات والمصطلحات الغامضة والشروط غير المستوفاة.</li>\n<li><b>NER (التعرف على الكيانات المسماة)</b> يحدد الفاعلين والوظائف ويوضح السياق (مثلاً \"Apple\" الشركة مقابل الفاكهة).</li>\n</ul>\n",

        "topic-23": "\n<h3><span class=\"dot\"></span>الذكاء الاصطناعي في تصميم البرمجيات</h3>\n<ul>\n<li><b>التعرف على الأنماط</b> — مصنفات BERT تكشف Singleton وأنماط تصميم أخرى في الكود المصدري، تساعد في التوثيق وإعادة الهيكلة.</li>\n<li><b>تحسين البنية المعمارية</b> — LLMs تولد بنى مرشحة من المتطلبات؛ التحسين متعدد الأهداف يوازن الأداء والأمن والتكلفة.</li>\n<li><b>المستقبل</b> — وكلاء معمارية مستقلون يقترحون ويقيّمون تصاميم أنظمة كاملة.</li>\n</ul>\n",

        "topic-24": "\n<h3><span class=\"dot\"></span>استخدام ChatGPT لتوليد UML</h3>\n<p>ثلاث استراتيجيات في هندسة المطالبات لتوليد نموذج فئات UML:</p>\n<ul>\n<li><b>القوة الغاشمة</b> — الصق المشكلة كاملة، ولّد نموذجًا، ثم نقّحه تدريجيًا.</li>\n<li><b>ابدأ صغيرًا ثم انمُ</b> — قدّم مقتطفًا، احصل على نموذج صغير، ثم أضف التفاصيل.</li>\n<li><b>ركّز على الهدف</b> — قدّم الهدف الشامل، ثم وجّه ChatGPT خطوة بخطوة.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">نمط المطالبة</span>\n<p>\"أنت معماري برمجيات خبير. أحتاج مساعدتك في تصميم تطبيق جديد...\" — تأطير الدور + المهمة يعطي مخرجات أفضل بالمجال.</p>\n</div>\n",

        "topic-25": "\n<h3><span class=\"dot\"></span>الذكاء الاصطناعي في التنفيذ</h3>\n<ul>\n<li><b>إكمال وتوليف الكود</b> — Copilot/Codex يقلل الكود التكراري؛ يولد دوال/فئات من التعليقات.</li>\n<li><b>التنبؤ بالعيوب</b> — ML على مقاييس الكود (التعقيد، التموج، الأخطاء السابقة) يتنبأ بالوحدات الأكثر عرضة للأخطاء.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال على الدقة</span>\n<p>نموذج Apple القائم على المحوّل <b>ADE-QVAET</b> حقق <b>~98% F1</b> في التنبؤ بالأخطاء على مجموعة بيانات مرجعية بتحليل خصائص الكود (الحجم، التعقيد، الهيكل).</p>\n</div>\n",

        "topic-26": "\n<h3><span class=\"dot\"></span>برمجة الفايب (Vibe Coding)</h3>\n<p>سير عمل تطوير برمجي مدفوع بالذكاء الاصطناعي بأربع خطوات دورية:</p>\n<ul>\n<li><b>1. مطالبة عالية المستوى</b> — حدد الاتجاه العام للمشروع.</li>\n<li><b>2. توليد الكود بالذكاء الاصطناعي</b> — ولّد الكود الأولي للاختبار.</li>\n<li><b>3. التحسين التكراري</b> — قدّم ملاحظات للتصحيح.</li>\n<li><b>4. مواءمة المنتج النهائي</b> — تأكد من أن المنتج يلبي التوقعات.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">الفوائد</span>\n<p><b>إنتاجية مدفوعة بالذكاء الاصطناعي</b>، <b>عتبة دخول أدنى</b> (غير المبرمجين يستطيعون البناء)، و<b>جودة كود محسّنة</b> عبر التقاط الأخطاء وأفضل الممارسات بدعم AI.</p>\n</div>\n",

        "topic-27": "\n<h3><span class=\"dot\"></span>الذكاء الاصطناعي في الاختبار</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>Diffblue Cover</h4>\n<ul>\n<li>وكيل RL يولد اختبارات Java آليًا</li>\n<li>حتى <b>أسرع بـ 250×</b> من اليدوي</li>\n<li>يكشف حالات حدية يفوتها المطور</li>\n</ul>\n</div>\n<div class=\"col\">\n<h4>Appvance IQ</h4>\n<ul>\n<li>ينشئ ويشغل آلاف اختبارات UI/API</li>\n<li>حتى <b>1000×</b> أسرع من اليدوي</li>\n<li>يحدد الأولوية للمسارات الحرجة عبر AI</li>\n</ul>\n</div>\n</div>\n",

        "topic-28": "\n<h3><span class=\"dot\"></span>الذكاء الاصطناعي في التصحيح والصيانة</h3>\n<ul>\n<li><b>تنقيب السجلات</b> — منصات AIOps تطبق ML (مثل Isolation Forest) لرصد الشذوذ في السجلات قبل الأعطال.</li>\n<li><b>السبب الجذري</b> — NLP على آثار الاستدعاء ورسائل الخطأ يحدد مواقع الخلل المحتملة.</li>\n<li><b>الصيانة التنبؤية</b> — قياسات + ML للتنبؤ بأعطال المكونات (تسرب الذاكرة، اتجاهات زمن الاستجابة).</li>\n<li><b>كشف روائح الكود</b> — LLMs مضبوطة بدقة ترصد \"God Class\" والتكرار والدوال الطويلة → ترشد إعادة الهيكلة.</li>\n</ul>\n",

        "topic-29": "\n<h3><span class=\"dot\"></span>الذكاء الاصطناعي في إدارة المشاريع</h3>\n<ul>\n<li><b>تقدير الجهد</b> — ML على بيانات المشاريع التاريخية يتنبأ بالوقت والتكلفة بدقة أعلى من الحدس البشري.</li>\n<li><b>نمذجة المخاطر</b> — AI يرصد العوامل التي سبّبت تجاوزات (عيوب كثيرة، تغير النطاق)؛ ينبه المديرين مبكرًا للتخفيف.</li>\n<li><b>التعلم المستمر</b> — تتحسّن نماذج المخاطر مع تراكم بيانات المشاريع.</li>\n</ul>\n",

        "topic-30": "\n<h3><span class=\"dot\"></span>الذكاء الاصطناعي في الجودة والتوثيق</h3>\n<ul>\n<li><b>التنبؤ بالعيوب</b> يوجه جهد QA للوحدات عالية الخطورة.</li>\n<li><b>لوحات تحكم مقاييس الجودة</b> — AI يتتبع التغطية والتعقيد وتغيرات الاتجاه المفاجئة.</li>\n<li><b>التوثيق التلقائي</b> — نماذج NLP تلخّص الدوال باللغة الإنجليزية البسيطة؛ تولد تعليقات الكود وملفات README من الكود الموجود.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>التوثيق المُولَّد بالذكاء الاصطناعي <b>يبقى محدّثًا مع تغيرات الكود</b> — يحل مشكلة التوثيق المتقادم الأبدية.</p>\n</div>\n",

        "topic-31": "\n<h3><span class=\"dot\"></span>دورة حياة SDLC وCI/CD مدفوعة بالذكاء الاصطناعي</h3>\n<p>تخيّل وكيلًا ذكاءً اصطناعيًا لكل مرحلة، ينسّقه مُنسّق مركزي:</p>\n<ul>\n<li><b>المتطلبات</b> — مساعد PM ذكي يحوّل نصوص الاجتماعات إلى وثائق متطلبات منظمة.</li>\n<li><b>التصميم</b> — مساعد هندسي ينشئ المواصفات والرسوم.</li>\n<li><b>الترميز والاختبار</b> — AI يكتب الكود، ووكلاء اختبار يولدون الحالات.</li>\n<li><b>CI/CD</b> — SonarQube/DeepCode عند الالتزام؛ تحديد أولويات اختبار ذكي؛ <b>Harness.ai</b> يتنبأ بفشل الإصدارات التجريبية ويتراجع تلقائيًا.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر — دور الإنسان</span>\n<p>\"الذكاء الاصطناعي لن يحل محل المبرمجين، بل سيصبح أداة لا غنى عنها\". المهندسون يصبحون <b>طيارين للذكاء الاصطناعي</b> — يوجهون ويراجعون مخرجاته. الدور يتطور؛ يظل محوريًا.</p>\n</div>\n",

        "footer": "\n<p>أنت قادر على هذا. راجع صناديق <b>تذكر</b> العنبرية مرة أخيرة قبل الاختبار.</p>\n<div class=\"pill-row\">\n<span class=\"pill\">5 أبعاد للاستدامة</span>\n<span class=\"pill\">تأثير الارتداد خفي</span>\n<span class=\"pill\">AI4SE + SE4AI = تكامل</span>\n</div>\n<a class=\"top-link\" href=\"#\">↑ العودة إلى الأعلى</a>\n"
      }
    },
    quizzes: {
      en: {
        "quiz5": [
          {
            "q": "Which Brundtland-era definition matches sustainability?",
            "options": [
              "Maximising profit while ignoring tomorrow",
              "Meeting present needs without compromising future generations' ability to meet theirs",
              "Building software that lasts forever",
              "Eliminating all environmental impact at any cost"
            ],
            "answer": 1,
            "explain": "Brundtland 1987: development for the present that does not compromise the future."
          },
          {
            "q": "Roughly what share of global energy use and GHG emissions do digital technologies account for?",
            "options": [
              "Under 0.5%",
              "About 2–4%",
              "Around 15%",
              "More than 30%"
            ],
            "answer": 1,
            "explain": "Digital tech is responsible for ~2–4% of global energy use and greenhouse gas emissions."
          },
          {
            "q": "How many sustainability dimensions does the standard model define?",
            "options": [
              "Three",
              "Four",
              "Five",
              "Seven"
            ],
            "answer": 2,
            "explain": "Five: environmental, economic, social, individual, and technical."
          },
          {
            "q": "Which Karlskrona principle says sustainability must be considered even if it's NOT the system's primary goal?",
            "options": [
              "P1 Systemic",
              "P2 Multidimensional",
              "P4 Transcends the system's objective",
              "P9 Visibility"
            ],
            "answer": 2,
            "explain": "P4 — sustainability transcends the system's stated objective."
          },
          {
            "q": "Which dimension covers developer wellbeing, ergonomic interfaces, and humane workloads?",
            "options": [
              "Environmental",
              "Economic",
              "Individual",
              "Technical"
            ],
            "answer": 2,
            "explain": "Individual sustainability addresses physical/mental wellbeing of developers, maintainers, and users."
          },
          {
            "q": "Which dimension focuses on architectures for longevity, modularity, and avoiding short-lived tech?",
            "options": [
              "Social",
              "Economic",
              "Technical",
              "Environmental"
            ],
            "answer": 2,
            "explain": "Technical sustainability — longevity, modularity, standardised protocols."
          },
          {
            "q": "Cheaper cloud storage encourages more data hoarding, increasing resource demand. This is…",
            "options": [
              "A direct impact",
              "An indirect impact",
              "A rebound effect",
              "A primary impact"
            ],
            "answer": 2,
            "explain": "Rebound effect: efficiency gains lead to higher overall usage."
          },
          {
            "q": "The Volkswagen emissions scandal is a software-ethics lesson because…",
            "options": [
              "VW used too much energy compiling code",
              "VW software falsified emissions tests, misleading regulators",
              "VW failed to write unit tests",
              "VW didn't use Git"
            ],
            "answer": 1,
            "explain": "VW's 'defeat device' software made cars look compliant in lab tests while emitting up to 40× more NOx on the road."
          },
          {
            "q": "Which programming language tops the Pereira et al. energy efficiency ranking?",
            "options": [
              "Python",
              "JavaScript",
              "C",
              "Ruby"
            ],
            "answer": 2,
            "explain": "C scored 1.00 (most efficient). Perl was least efficient at 79.58."
          },
          {
            "q": "What does SCI stand for in sustainability metrics?",
            "options": [
              "Software Code Index",
              "Software Carbon Intensity",
              "System Compliance Indicator",
              "Sustainable Cloud Initiative"
            ],
            "answer": 1,
            "explain": "SCI = Software Carbon Intensity, the Green Software Foundation's emission metric."
          },
          {
            "q": "What is SuSoftPro?",
            "options": [
              "A new programming language",
              "A tool that analyses software sustainability requirements early via a five-star profiling system",
              "A car-sharing service",
              "An open-source compiler"
            ],
            "answer": 1,
            "explain": "SuSoftPro: a five-star sustainability profiling tool that encourages early integration in requirements engineering."
          },
          {
            "q": "In the DriveNow case study, the 'green elements' in step 2 represent…",
            "options": [
              "Electric vehicles only",
              "Activities surfaced by sustainability analysis that the original case overlooked",
              "Carbon-neutral office practices",
              "Recyclable car parts"
            ],
            "answer": 1,
            "explain": "Green = added activities identified through sustainability analysis, not present in the original case."
          },
          {
            "q": "Which is NOT one of the three types of sustainability impacts?",
            "options": [
              "Direct",
              "Indirect",
              "Reflective",
              "Rebound"
            ],
            "answer": 2,
            "explain": "The three types are Direct, Indirect, and Rebound. 'Reflective' isn't part of the taxonomy."
          }
        ],
        "quiz6": [
          {
            "q": "What is GitHub Copilot powered by?",
            "options": [
              "Stable Diffusion",
              "OpenAI Codex (a GPT-based model trained on public code)",
              "BERT",
              "AlphaCode"
            ],
            "answer": 1,
            "explain": "Copilot uses OpenAI Codex, a GPT-based LLM trained on public code."
          },
          {
            "q": "According to the empirical study cited, how much faster do developers code with Copilot?",
            "options": [
              "About 10% faster",
              "About 25% faster",
              "About 55% faster",
              "About 90% faster"
            ],
            "answer": 2,
            "explain": "Developers using Copilot were measured to code ~55% faster."
          },
          {
            "q": "AI4SE differs from SE4AI in that…",
            "options": [
              "AI4SE uses AI to help developers; SE4AI uses SE practices to build reliable AI systems",
              "They are the same thing",
              "AI4SE only works with Python; SE4AI only works with C++",
              "AI4SE is for hardware; SE4AI is for cloud"
            ],
            "answer": 0,
            "explain": "AI4SE = AI helping with SE tasks. SE4AI = applying SE rigor to building AI/ML systems."
          },
          {
            "q": "What does IBM's Requirements Quality Assistant (RQA) do?",
            "options": [
              "Generates UML diagrams",
              "Uses NLP in IBM DOORS to catch ambiguous requirements in real-time",
              "Compiles requirements into machine code",
              "Translates requirements into Arabic"
            ],
            "answer": 1,
            "explain": "RQA is a Watson-based tool that flags ambiguous or unclear requirements live as authors type."
          },
          {
            "q": "What is Named Entity Recognition (NER) used for in requirements?",
            "options": [
              "Detecting plagiarism in user stories",
              "Identifying actors, functionalities, and disambiguating context (e.g., 'Apple' company vs fruit)",
              "Encrypting requirements documents",
              "Translating requirements between programming languages"
            ],
            "answer": 1,
            "explain": "NER classifies entities — useful for identifying stakeholders, features, and resolving ambiguity."
          },
          {
            "q": "Which prompt-engineering strategy for UML generation starts with the whole problem at once?",
            "options": [
              "Start small and grow",
              "Brute force",
              "Focus on the goal",
              "Reverse engineering"
            ],
            "answer": 1,
            "explain": "Brute force = paste the whole problem, then refine. Start small and Focus-on-goal are incremental approaches."
          },
          {
            "q": "Apple's ADE-QVAET model achieved roughly what F1 score in defect prediction?",
            "options": [
              "~60%",
              "~80%",
              "~98%",
              "~50%"
            ],
            "answer": 2,
            "explain": "The transformer-based ADE-QVAET model hit ~98% F1 on a benchmark by analysing code attributes."
          },
          {
            "q": "What is Vibe Coding?",
            "options": [
              "Coding while listening to music",
              "An AI-driven workflow with prompting, generation, refinement, and alignment",
              "A debugging technique using sound cues",
              "A code obfuscation method"
            ],
            "answer": 1,
            "explain": "Vibe Coding's four-step cycle: high-level prompting, AI code generation, iterative refinement, final product alignment."
          },
          {
            "q": "Diffblue Cover automates what testing task?",
            "options": [
              "Manual exploratory testing",
              "Auto-generating Java unit tests using reinforcement learning",
              "Network penetration testing",
              "UI accessibility audits"
            ],
            "answer": 1,
            "explain": "Diffblue Cover is an RL agent that auto-generates JUnit tests — up to 250× faster than manual writing."
          },
          {
            "q": "What does a 'circuit breaker' for failed services do?",
            "options": [
              "Adds randomness to error logs",
              "Immediately denies access to a failed service, avoiding timeout delays",
              "Restarts the entire cluster",
              "Disables version control"
            ],
            "answer": 1,
            "explain": "From Ch 4 — circuit breakers fail-fast rather than waiting on timeout delays for dead services. (Bonus crossover question.)"
          },
          {
            "q": "What does AIOps log mining typically use to detect anomalies?",
            "options": [
              "Random number generation",
              "ML algorithms like Isolation Forest on system logs and telemetry",
              "Manual log review by interns",
              "Disabling all logging"
            ],
            "answer": 1,
            "explain": "AIOps applies ML (e.g., Isolation Forest) to identify unusual log patterns before they cause failures."
          },
          {
            "q": "Which AI maintenance task involves flagging 'God Class' and duplicated code?",
            "options": [
              "Predictive maintenance",
              "Code smell detection",
              "A/B testing",
              "Load balancing"
            ],
            "answer": 1,
            "explain": "Code smell detection: fine-tuned LLMs classify common smells like God Class, long methods, duplicates."
          },
          {
            "q": "Per the leading quote in the slides, what's the relationship between AI and programmers?",
            "options": [
              "AI will replace programmers within five years",
              "AI won't replace programmers, but will become an essential tool",
              "AI is irrelevant to programming",
              "Programmers should switch careers immediately"
            ],
            "answer": 1,
            "explain": "Engineers become 'AI pilots' — they guide and review AI output. The role evolves, not disappears."
          }
        ]
      },
      ar: {
        "quiz5": [
          {
            "q": "أي تعريف من حقبة برنتلاند يطابق الاستدامة؟",
            "options": [
              "تعظيم الربح مع تجاهل الغد",
              "تلبية احتياجات الحاضر دون المساس بقدرة الأجيال المقبلة على تلبية احتياجاتها",
              "بناء برمجيات تدوم للأبد",
              "إزالة كل أثر بيئي بأي ثمن"
            ],
            "answer": 1,
            "explain": "برنتلاند 1987: تنمية للحاضر لا تساوم المستقبل."
          },
          {
            "q": "ما النسبة التقريبية لاستهلاك التقنيات الرقمية للطاقة العالمية والانبعاثات؟",
            "options": [
              "أقل من 0.5%",
              "حوالي 2–4%",
              "حوالي 15%",
              "أكثر من 30%"
            ],
            "answer": 1,
            "explain": "التقنية الرقمية مسؤولة عن ~2–4% من استهلاك الطاقة والانبعاثات الدفيئة."
          },
          {
            "q": "كم بُعدًا للاستدامة يحدّد النموذج المعياري؟",
            "options": [
              "ثلاثة",
              "أربعة",
              "خمسة",
              "سبعة"
            ],
            "answer": 2,
            "explain": "خمسة: بيئية، اقتصادية، اجتماعية، فردية، تقنية."
          },
          {
            "q": "أي مبدأ من كارلسكرونا يقول إن الاستدامة يجب النظر فيها حتى لو لم تكن هدف النظام الأساسي؟",
            "options": [
              "P1 منظومية",
              "P2 متعددة الأبعاد",
              "P4 تتجاوز هدف النظام",
              "P9 الرؤية"
            ],
            "answer": 2,
            "explain": "P4 — الاستدامة تتجاوز هدف النظام المعلن."
          },
          {
            "q": "أي بُعد يغطي رفاهية المطور والواجهات المريحة وأحمال العمل الإنسانية؟",
            "options": [
              "البيئي",
              "الاقتصادي",
              "الفردي",
              "التقني"
            ],
            "answer": 2,
            "explain": "البعد الفردي يعالج السلامة الجسدية/النفسية للمطورين والصيانة والمستخدمين."
          },
          {
            "q": "أي بُعد يركز على معماريات طويلة العمر، والتجزيء، وتجنب التقنيات قصيرة العمر؟",
            "options": [
              "الاجتماعي",
              "الاقتصادي",
              "التقني",
              "البيئي"
            ],
            "answer": 2,
            "explain": "الاستدامة التقنية — العمر الطويل، التجزيء، البروتوكولات المعيارية."
          },
          {
            "q": "تخزين سحابي أرخص يشجع على اكتناز البيانات، فيزيد الطلب على الموارد. هذا هو…",
            "options": [
              "أثر مباشر",
              "أثر غير مباشر",
              "تأثير ارتدادي (Rebound)",
              "أثر أوّلي"
            ],
            "answer": 2,
            "explain": "تأثير الارتداد: مكاسب الكفاءة تؤدي لزيادة الاستخدام الإجمالي."
          },
          {
            "q": "فضيحة انبعاثات فولكسفاجن درس في أخلاقيات البرمجيات لأن…",
            "options": [
              "VW استهلكت طاقة كثيرة في الترجمة",
              "برمجية VW زيّفت اختبارات الانبعاثات وضللت المنظمين",
              "VW فشلت في كتابة اختبارات الوحدة",
              "VW لم تستخدم Git"
            ],
            "answer": 1,
            "explain": "برمجية \"جهاز هزيمة\" VW جعلت السيارات تبدو ملتزمة مخبريًا بينما تصدر حتى 40× NOx على الطريق."
          },
          {
            "q": "أي لغة برمجة تتصدر ترتيب كفاءة الطاقة لبيريرا وآخرين؟",
            "options": [
              "Python",
              "JavaScript",
              "C",
              "Ruby"
            ],
            "answer": 2,
            "explain": "C حصلت على 1.00 (الأكثر كفاءة). Perl الأقل كفاءة عند 79.58."
          },
          {
            "q": "ماذا تعني SCI في مقاييس الاستدامة؟",
            "options": [
              "مؤشر كود البرمجية (Software Code Index)",
              "شدة الكربون البرمجية (Software Carbon Intensity)",
              "مؤشر امتثال النظام",
              "مبادرة السحابة المستدامة"
            ],
            "answer": 1,
            "explain": "SCI = Software Carbon Intensity، مقياس انبعاثات مؤسسة البرمجيات الخضراء."
          },
          {
            "q": "ما هو SuSoftPro؟",
            "options": [
              "لغة برمجة جديدة",
              "أداة تحلل متطلبات استدامة البرمجية مبكرًا عبر نظام تنميط من خمس نجوم",
              "خدمة مشاركة سيارات",
              "مُترجم مفتوح المصدر"
            ],
            "answer": 1,
            "explain": "SuSoftPro: أداة تنميط استدامة بخمس نجوم تشجع التكامل المبكر في هندسة المتطلبات."
          },
          {
            "q": "في حالة DriveNow، ماذا تمثّل \"العناصر الخضراء\" في الخطوة 2؟",
            "options": [
              "السيارات الكهربائية فقط",
              "أنشطة كشفها تحليل الاستدامة كانت مغفلة في الحالة الأصلية",
              "ممارسات مكتبية محايدة كربونيًا",
              "قطع سيارات قابلة لإعادة التدوير"
            ],
            "answer": 1,
            "explain": "الخضراء = أنشطة مضافة بفضل تحليل الاستدامة، لم تكن في الحالة الأصلية."
          },
          {
            "q": "أي مما يلي ليس من الأنواع الثلاثة لتأثيرات الاستدامة؟",
            "options": [
              "مباشرة",
              "غير مباشرة",
              "انعكاسية",
              "ارتدادية"
            ],
            "answer": 2,
            "explain": "الأنواع الثلاثة: مباشرة، غير مباشرة، ارتدادية. \"انعكاسية\" ليست جزءًا من التصنيف."
          }
        ],
        "quiz6": [
          {
            "q": "ما الذي يُشغّل GitHub Copilot؟",
            "options": [
              "Stable Diffusion",
              "OpenAI Codex (نموذج قائم على GPT مدرّب على الكود العام)",
              "BERT",
              "AlphaCode"
            ],
            "answer": 1,
            "explain": "Copilot يستخدم OpenAI Codex، نموذج LLM قائم على GPT مدرّب على الكود العام."
          },
          {
            "q": "حسب الدراسة المُستشهد بها، كم أسرع يبرمج المطورون مع Copilot؟",
            "options": [
              "أسرع بـ ~10%",
              "أسرع بـ ~25%",
              "أسرع بـ ~55%",
              "أسرع بـ ~90%"
            ],
            "answer": 2,
            "explain": "قياس المطورين باستخدام Copilot أسرع بـ ~55%."
          },
          {
            "q": "كيف يختلف AI4SE عن SE4AI؟",
            "options": [
              "AI4SE يستخدم AI لمساعدة المطورين؛ SE4AI يستخدم ممارسات SE لبناء أنظمة AI موثوقة",
              "متطابقان",
              "AI4SE يعمل فقط مع Python؛ SE4AI فقط مع C++",
              "AI4SE للعتاد؛ SE4AI للسحابة"
            ],
            "answer": 0,
            "explain": "AI4SE = AI يساعد في مهام SE. SE4AI = تطبيق صرامة SE لبناء أنظمة AI/ML."
          },
          {
            "q": "ماذا يفعل مساعد جودة المتطلبات (RQA) من IBM؟",
            "options": [
              "يولد مخططات UML",
              "يستخدم NLP في IBM DOORS لكشف المتطلبات الغامضة آنيًا",
              "يُجمّع المتطلبات إلى كود آلة",
              "يترجم المتطلبات إلى العربية"
            ],
            "answer": 1,
            "explain": "RQA أداة قائمة على Watson تشير للمتطلبات الغامضة لحظيًا أثناء الكتابة."
          },
          {
            "q": "ما الذي يستخدم له التعرف على الكيانات المسماة (NER) في المتطلبات؟",
            "options": [
              "كشف الانتحال في قصص المستخدم",
              "تحديد الفاعلين والوظائف وحل الالتباس (مثلاً \"Apple\" الشركة مقابل الفاكهة)",
              "تشفير وثائق المتطلبات",
              "ترجمة المتطلبات بين لغات البرمجة"
            ],
            "answer": 1,
            "explain": "NER يصنّف الكيانات — مفيد لتحديد أصحاب المصلحة والميزات وحل الغموض."
          },
          {
            "q": "أي استراتيجية في هندسة المطالبات لتوليد UML تبدأ بالمشكلة كاملة دفعة واحدة؟",
            "options": [
              "ابدأ صغيرًا ثم انمُ",
              "القوة الغاشمة (Brute force)",
              "ركّز على الهدف",
              "الهندسة العكسية"
            ],
            "answer": 1,
            "explain": "القوة الغاشمة = الصق المشكلة كاملة ثم نقّح. \"ابدأ صغيرًا\" و\"ركّز على الهدف\" تدريجيتان."
          },
          {
            "q": "ما النتيجة التقريبية لـ F1 التي حققها نموذج ADE-QVAET في التنبؤ بالعيوب؟",
            "options": [
              "~60%",
              "~80%",
              "~98%",
              "~50%"
            ],
            "answer": 2,
            "explain": "نموذج ADE-QVAET القائم على المحوّل وصل إلى ~98% F1 على مرجع بتحليل خصائص الكود."
          },
          {
            "q": "ما هي برمجة الفايب (Vibe Coding)؟",
            "options": [
              "البرمجة أثناء الاستماع للموسيقى",
              "سير عمل مدفوع بالذكاء الاصطناعي يجمع المطالبة والتوليد والتحسين والمواءمة",
              "تقنية تصحيح أخطاء تستخدم إشارات صوتية",
              "طريقة لتشويش الكود"
            ],
            "answer": 1,
            "explain": "دورة Vibe Coding الرباعية: مطالبة عالية المستوى، توليد كود AI، تحسين تكراري، مواءمة المنتج النهائي."
          },
          {
            "q": "Diffblue Cover يؤتمت أي مهمة اختبار؟",
            "options": [
              "اختبار استكشافي يدوي",
              "توليد اختبارات Java آليًا باستخدام التعلم المعزز",
              "اختبار اختراق الشبكة",
              "تدقيق إمكانية الوصول للواجهة"
            ],
            "answer": 1,
            "explain": "Diffblue Cover وكيل RL يولد اختبارات JUnit آليًا — أسرع بـ 250× من اليدوي."
          },
          {
            "q": "ماذا يفعل \"قاطع الدائرة\" للخدمات الفاشلة؟",
            "options": [
              "يضيف عشوائية لسجلات الأخطاء",
              "يرفض الوصول للخدمة الفاشلة فورًا متجنبًا تأخيرات المهلة",
              "يعيد تشغيل العنقود كاملًا",
              "يعطل التحكم بالإصدارات"
            ],
            "answer": 1,
            "explain": "من الفصل 4 — قواطع الدائرة تفشل بسرعة بدل انتظار المهلات للخدمات الميتة. (سؤال تكاملي.)"
          },
          {
            "q": "ماذا يستخدم تنقيب سجلات AIOps لرصد الشذوذ؟",
            "options": [
              "توليد أرقام عشوائية",
              "خوارزميات ML مثل Isolation Forest على سجلات النظام والقياسات",
              "مراجعة يدوية للسجلات من المتدربين",
              "تعطيل كل التسجيل"
            ],
            "answer": 1,
            "explain": "AIOps يطبق ML (مثل Isolation Forest) لتحديد أنماط سجلات غير عادية قبل الأعطال."
          },
          {
            "q": "أي مهمة صيانة AI تنطوي على رصد \"God Class\" والكود المكرر؟",
            "options": [
              "الصيانة التنبؤية",
              "كشف روائح الكود (Code Smell Detection)",
              "اختبار A/B",
              "موازنة الحمل"
            ],
            "answer": 1,
            "explain": "كشف روائح الكود: LLMs مضبوطة تصنّف الروائح الشائعة كـ God Class والدوال الطويلة والتكرار."
          },
          {
            "q": "حسب الاقتباس البارز في الشرائح، ما العلاقة بين AI والمبرمجين؟",
            "options": [
              "AI سيحل محل المبرمجين خلال خمس سنوات",
              "AI لن يحل محل المبرمجين بل يصبح أداة لا غنى عنها",
              "AI غير ذي صلة بالبرمجة",
              "على المبرمجين تغيير مسارهم المهني فورًا"
            ],
            "answer": 1,
            "explain": "المهندسون يصبحون \"طيارين للذكاء الاصطناعي\" — يوجهون ويراجعون مخرجاته. الدور يتطور لا يختفي."
          }
        ]
      }
    },
    quizUi: {
      en: {
        badge: "QUIZ",
        questionLabel: "Q",
        whyLabel: "Why:",
        scoreLabel: "You scored {correct} / {total}",
        perfect: "Perfect - you're ready!",
        retry: "Re-read the ones you missed and try again.",
        meta: {
          "quiz5": {
            "title": "Chapter 5 Check",
            "sub": "Tap an answer. You'll see instantly if it's right, plus a quick why."
          },
          "quiz6": {
            "title": "Chapter 6 Check",
            "sub": "Tap an answer to see if it's right and why."
          }
        }
      },
      ar: {
        badge: "اختبار",
        questionLabel: "س",
        whyLabel: "السبب:",
        scoreLabel: "حصلت على {correct} / {total}",
        perfect: "ممتاز، أنت جاهز!",
        retry: "راجع الأسئلة التي أخطأت فيها ثم جرّب مرة أخرى.",
        meta: {
          "quiz5": {
            "title": "مراجعة الفصل 5",
            "sub": "اضغط على الإجابة، وستعرف فورًا إن كانت صحيحة مع سبب سريع."
          },
          "quiz6": {
            "title": "مراجعة الفصل 6",
            "sub": "اضغط على الإجابة لمعرفة إن كانت صحيحة ولماذا."
          }
        }
      }
    }
  });
})();
