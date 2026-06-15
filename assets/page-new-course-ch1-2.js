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
    ["#ch1", "chapter-head-1"],
    ["#ch2", "chapter-head-2"],
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
      ar: "SE4705 — مواضيع مختارة في هندسة البرمجيات — الفصلان 1 و2"
    },
    translations: {
      html: {
        "site-nav-label": "أدلة المذاكرة",
        "site-nav-links": "\n<a href=\"index.html\">الصفحة الرئيسية</a>\n<a class=\"current\" href=\"new-course-ch1-2.html\">الفصلان 1-2</a>\n<a href=\"new-course-ch3-4.html\">الفصلان 3-4</a>\n<a href=\"new-course-ch5-6.html\">الفصلان 5-6</a>\n<a href=\"new-course-ch7-8.html\">الفصلان 7-8</a>\n",
        "hero-tag": "SE4705 · مواضيع مختارة",
        "hero-title": "دليل المذاكرة السريع",
        "hero-copy": "الفصلان الأول والثاني — المفاهيم أولًا، جاهز للاختبار",
        "page-nav": "\n<a href=\"#ch1\">الفصل 1: الاتجاهات الناشئة</a>\n<a href=\"#quiz1\">اختبار 1</a>\n<a href=\"#ch2\">الفصل 2: منتجات البرمجيات</a>\n<a href=\"#quiz2\">اختبار 2</a>\n",
        "chapter-head-1": "\n<span class=\"num\">الفصل الأول</span>\n<h2>الاتجاهات الناشئة في هندسة البرمجيات</h2>\n",
        "chapter-head-2": "\n<span class=\"num\">الفصل الثاني</span>\n<h2>منتجات البرمجيات</h2>\n",

        "topic-1": "\n<h3><span class=\"dot\"></span>المشهد الديناميكي</h3>\n<p>لم تعد هندسة البرمجيات مجرد كتابة كود — إنها تنسيق <b>أنظمة ذكية وبنى سحابية الأصل وحلول محورها الإنسان</b> تقود التحول الرقمي العالمي.</p>\n<ul>\n<li><b>سياق السوق:</b> من المتوقع أن يتجاوز الإنفاق العالمي على البرمجيات 1.3 تريليون دولار (جارتنر، 2025).</li>\n<li><b>محركات الابتكار:</b> الذكاء الاصطناعي، والاختراقات الكمومية، وأتمتة DevOps تدفع دورات الإصدار من أشهر إلى أيام.</li>\n<li><b>المسؤولية:</b> الذكاء الاصطناعي الأخلاقي والاستدامة والتصميم الشامل أصبحت غير قابلة للتفاوض.</li>\n</ul>\n",

        "topic-2": "\n<h3><span class=\"dot\"></span>التطوير المعتمد على الذكاء الاصطناعي والأتمتة</h3>\n<p>الذكاء الاصطناعي مدمج الآن عبر <b>دورة حياة البرمجيات بأكملها</b>، وينقل تركيز المطورين من البرمجة المتكررة إلى حل المشكلات الاستراتيجي.</p>\n<ul>\n<li><b>أدوات ذكاء اصطناعي منتشرة:</b> أكثر من 80% من المطورين يستخدمون أدوات الذكاء الاصطناعي يوميًا؛ و90% يبلغون عن مكاسب في الإنتاجية.</li>\n<li><b>تطور الأدوار وليس استبدالها:</b> الذكاء الاصطناعي يتعامل مع الأكواد التكرارية والتصحيح؛ والمهندسون يركّزون على البنية والتحقق ومراقبة الذكاء الاصطناعي.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>الكلمة المفتاح هي <b>التعزيز</b>، وليست الاستبدال. ويظل المطورون المبتدئون محوريين للنمو طويل المدى.</p>\n</div>\n",

        "topic-3": "\n<h3><span class=\"dot\"></span>برمجة الفايب (Vibe Coding)</h3>\n<p>صاغها <b>أندريه كارباثي في فبراير 2025</b>. توليد كود مدفوع باللغة الطبيعية ومحادثة — يوجه المطورون نماذج LLM بمطالبات ويركّزون على الملاحظات عالية المستوى بدلاً من كتابة الكود سطرًا بسطر.</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>إخبار النموذج اللغوي \"اصنع لي تطبيق مهام بوضع ليلي\" والتكرار بالإحساس، بدلًا من كتابة كل مكوّن بنفسك.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر — المخاطر</span>\n<p>النمذجة السريعة تأتي مع <b>مخرجات غير متوقعة، ومخاوف الصيانة، وثغرات أمنية محتملة</b>.</p>\n</div>\n",

        "topic-4": "\n<h3><span class=\"dot\"></span>الذكاء الاصطناعي الوكيلي (Agentic AI)</h3>\n<p>وكلاء ذكاء اصطناعي <b>مستقلون</b> يتصرفون كأعضاء فريق — يساعدون في جمع المتطلبات والتصميم وتوليد الكود والاختبار. يتعاملون مع قرارات معقدة لكنهم يحتاجون إلى <b>التحقق والتحقق المعتمدين على الذكاء الاصطناعي (V&amp;V)</b> ليبقوا موثوقين.</p>\n",

        "topic-5": "\n<h3><span class=\"dot\"></span>الاختبار وتصحيح الأخطاء الذكي</h3>\n<ul>\n<li><b>SonarQube + ML</b> تحليل الانحدار → كشف الأخطاء التنبئي.</li>\n<li>إصلاح أخطاء الصياغة تلقائيًا وتوليد حالات الاختبار.</li>\n<li>النتيجة: إصدارات أسرع وأكثر موثوقية.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">دراسة حالة</span>\n<p>تفيد GitHub أن <b>46%</b> من الكود المكتوب على منصتها في 2025 تضمّن مساعدة Copilot.</p>\n</div>\n",

        "topic-6": "\n<h3><span class=\"dot\"></span>تطور DevOps و GitOps</h3>\n<ul>\n<li><b>DevOps → هندسة المنصات:</b> منصات المطورين الداخلية (IDPs)، وأدوات الخدمة الذاتية، ومسارات العمل الذهبية تقلل العبء المعرفي.</li>\n<li><b>DevSecOps:</b> الأمن مدمج في كل مرحلة من دورة الحياة.</li>\n<li><b>الخدمات المصغرة والحاويات:</b> Docker و Kubernetes — قابلية النقل والتوسع.</li>\n<li><b>الحوسبة الطرفية وIoT والوقت الحقيقي:</b> الاستدلال بالذكاء الاصطناعي على الجهاز يقلل زمن الاستجابة؛ اعتماد أقل على السحب المركزية.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>الشركات التي تتبنى <b>GitOps</b> تخفض زمن النشر بنسبة <b>40–60%</b> (CNCF، 2024). أتقن CI/CD مع Jenkins و ArgoCD و Flux.</p>\n</div>\n",

        "topic-7": "\n<h3><span class=\"dot\"></span>الخدمات المصغرة، Serverless، والبنى المعتمدة على الأحداث</h3>\n<p>تهيمن الحوسبة السحابية الأصل في 2025 — تجمع بين <b>التجزئة وقابلية التوسع وكفاءة التكلفة</b>.</p>\n<ul>\n<li><b>الخدمات المصغرة:</b> توسع مستقل، ومرونة في اللغات.</li>\n<li><b>Serverless:</b> AWS Lambda وGoogle Cloud Functions — مدفوعة بالأحداث، ادفع حسب الاستخدام.</li>\n<li><b>EDA:</b> 72% من المؤسسات تستخدمها، و13% فقط ناضجة (جارتنر، 2025).</li>\n<li><b>شبكة الخدمات:</b> Istio و Linkerd و Envoy — أمن عدم الثقة، تحكم وصول دقيق، تدوير الشهادات.</li>\n<li><b>WASM:</b> شركات مثل Fermyon تدفع WebAssembly لأحمال serverless خفيفة ومحمولة.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">ملاحظة صناعية</span>\n<p>يبقى Kubernetes العمود الفقري للتنسيق، ويدعم الآن <b>سير عمل هجين ومدفوع بالذكاء الاصطناعي</b>.</p>\n</div>\n",

        "topic-8": "\n<h3><span class=\"dot\"></span>تكامل الحوسبة الكمومية</h3>\n<p>محطة في 2025: شريحة <b>Majorana 1</b> الكمومية من مايكروسوفت (فبراير 2025) تُظهر <b>كيوبتات طوبولوجية</b> لحوسبة على مستوى صناعي.</p>\n<ul>\n<li><b>لماذا الكم؟</b> الحوسبة الكلاسيكية تقترب من حدود تصغير الترانزستور؛ والكم يحل مشكلات كانت مستعصية (محاكاة الجزيئات، تحسين اللوجستيات).</li>\n<li><b>التطبيقات:</b> اكتشاف الأدوية (طيّ البروتين)، والمال (تحسين المحفظة)، والأمن السيبراني (تهديد بكسر RSA وحل بتشفير آمن كميًا في آن).</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">التحضير المهني</span>\n<p>المطورون ذوو الخبرة → تعلّم <b>Q# (مايكروسوفت)</b> و<b>Qiskit (IBM)</b>. المطورون الجدد → ركّزوا على الأساسيات؛ التبني الواسع لا يزال على بعد 3–5 سنوات.</p>\n</div>\n",

        "topic-9": "\n<h3><span class=\"dot\"></span>هندسة البرمجيات المستدامة</h3>\n<p>الاستدامة أصبحت <b>متطلبًا هندسيًا أساسيًا</b> بحلول 2025. تحسينات الذكاء الاصطناعي من Google DeepMind خفّضت استهلاك طاقة تبريد مراكز البيانات حتى <b>40%</b> في 2024.</p>\n<ul>\n<li><b>خوارزميات موفّرة للطاقة</b> — تحسّن دورات المعالج واستهلاك الطاقة.</li>\n<li><b>السحابة الخضراء</b> — AWS وAzure وGCP يلتزمون بالحياد الكربوني.</li>\n<li><b>تقييم دورة الحياة</b> — قياس البصمة الكربونية عبر مراحل التطوير والنشر والتقاعد.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">الأثر</span>\n<p>البرمجيات تمثّل <b>~2–3% من انبعاثات CO₂ العالمية</b>؛ الكود الكفؤ والسحابة المستدامة يقللان التكلفة والضرر البيئي معًا.</p>\n</div>\n",

        "topic-10": "\n<h3><span class=\"dot\"></span>تعزيز الأمن والخصوصية</h3>\n<p>مع ارتفاع الهجمات بنسبة <b>50% سنويًا</b> (CheckPoint، 2025)، تهيمن الهندسة المعتمدة على الأمن أولًا.</p>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>DevSecOps</h4>\n<ul><li>فحص الثغرات في كل التزام</li><li>الأمن يبدأ مبكرًا</li></ul>\n</div>\n<div class=\"col\">\n<h4>عدم الثقة (Zero Trust)</h4>\n<ul><li>\"لا تثق أبدًا، تحقق دائمًا\"</li><li>مصادقة مستمرة</li></ul>\n</div>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p><b>هندسة الخصوصية</b> = امتثال مدمج (GDPR، CCPA، أخلاقيات الذكاء الاصطناعي) — وليس فكرة لاحقة.</p>\n</div>\n",

        "topic-11": "\n<h3><span class=\"dot\"></span>هندسة البرمجيات المتمحورة حول الإنسان</h3>\n<p>ما وراء التقنية، <b>احتياجات الإنسان تقود التصميم</b>.</p>\n<ul>\n<li><b>تجربة شاملة</b> — يخبز الوصول في التصميم من اليوم الأول.</li>\n<li><b>واجهات تكيفية</b> — تخصيص يدرك السياق (IoT + AI).</li>\n<li><b>ذكاء اصطناعي أخلاقي</b> — قرارات شفافة، تخفيف التحيز، إنصاف.</li>\n</ul>\n",

        "topic-12": "\n<h3><span class=\"dot\"></span>منصات Low-Code و No-Code</h3>\n<p>تُديمقرط إنشاء البرمجيات — يبني مستخدمو الأعمال تطبيقات بأقل قدر من البرمجة. تسرّع التحول الرقمي وتقلل التراكم وتعزز التعاون متعدد الوظائف.</p>\n<ul>\n<li><b>تطوير مرئي</b> — محررات السحب والإفلات للنمذجة السريعة.</li>\n<li><b>تكامل API</b> — اتصال سلس بمصادر البيانات والخدمات الخارجية.</li>\n<li><b>الحوكمة والأمن</b> — ضوابط محسّنة للامتثال وحماية البيانات.</li>\n</ul>\n",

        "topic-13": "\n<h3><span class=\"dot\"></span>المهارات والأدوار المهنية المستقبلية</h3>\n<ul>\n<li><b>مسارات مهنية متطورة</b> — يتقسم الطلب إلى <em>أصحاب الاختصاص العام</em> (تحديات عبر المؤسسات) و<em>المتخصصين</em> (مجال عميق).</li>\n<li><b>تفكير استراتيجي</b> — يحدد المهندسون <em>ماذا نبني ولماذا</em>؛ والذكاء الاصطناعي يتولى تفاصيل التنفيذ.</li>\n<li><b>تطوير مستمر للمهارات</b> — أدوات الذكاء الاصطناعي، وهندسة المنصات، والبرمجة المستدامة، والأمن، والكم والذكاء الاصطناعي الوكيلي.</li>\n</ul>\n",

        "topic-14": "\n<h3><span class=\"dot\"></span>كيف تبقي نفسك محدّثًا</h3>\n<ul>\n<li>جرّب التقنيات الجديدة.</li>\n<li>احضر المؤتمرات الوطنية والدولية.</li>\n<li>اقرأ الكتب التقنية.</li>\n<li>استمر بممارسة تقنياتك الحالية.</li>\n<li>انضم لمجتمعات المطورين.</li>\n<li>تعاون مع مطورين آخرين.</li>\n</ul>\n",

        "topic-15": "\n<h3><span class=\"dot\"></span>هل سيظل مهندسو البرمجيات مطلوبين؟</h3>\n<ul>\n<li><b>1. التقدم التقني السريع</b> — الذكاء الاصطناعي والكم و5G وIoT وAR/VR كلها تعتمد على البرمجيات.</li>\n<li><b>2. العالم يتجه إلى الإنترنت</b> — تحول رقمي بعد الجائحة؛ تطبيقات كـ Zoom وUber وPaytm تحتاج مهندسين مهرة.</li>\n<li><b>3. الكود يحتاج تحديثًا مستمرًا</b> — البرمجيات لا \"تنتهي\" أبدًا؛ ترقيات وإعادة كتابة دائمة.</li>\n<li><b>4. دور عبر دورة حياة المنتج</b> — تصميم، تطوير، اختبار، نشر، توثيق، صيانة.</li>\n<li><b>5. نقص في المهندسين المهرة</b> — الطلب يفوق العرض → رواتب أعلى.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>السوق يحتاج أكثر من مهارات البرمجة: <b>معرفة SDLC، وحل المشكلات، والعمل الجماعي، والوعي بالاتجاهات</b>.</p>\n</div>\n",

        "topic-16": "\n<h3><span class=\"dot\"></span>ما هو منتج البرمجيات؟</h3>\n<p>منتجات البرمجيات هي <b>أنظمة برمجية عامة</b> توفر وظائف مفيدة لمجموعة واسعة من العملاء — من أنظمة الأعمال الكبيرة (MS Excel) إلى الأدوات الشخصية (Evernote) إلى تطبيقات الجوال والألعاب (سودوكو).</p>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>طوّرت طرق المنتجات من تقنيات بُنيت أصلًا لـ <b>برمجيات مخصصة لمرة واحدة</b>. وما زالت الأنظمة المخصصة حيوية للشركات الكبيرة والهيئات الحكومية.</p>\n</div>\n",

        "topic-17": "\n<h3><span class=\"dot\"></span>هندسة البرمجيات القائمة على المشاريع</h3>\n<p>تُبنى البرمجيات لصالح <b>عميل خارجي</b> يملك المتطلبات.</p>\n<ul>\n<li><b>نقطة البداية:</b> مجموعة متطلبات من العميل.</li>\n<li><b>المطوّر:</b> شركة برمجيات (مقاول) تصمم وتنفذ لتلبيتها.</li>\n<li><b>التغيير طبيعي:</b> يمكن للعميل تغيير المتطلبات في أي وقت؛ ويتكيف المقاول.</li>\n<li><b>عمر طويل:</b> غالبًا تعيش البرمجيات المخصصة 10+ سنوات وتحتاج دعمًا.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">المثلث (شكل 1.1)</span>\n<p><b>المشكلة</b> (العميل) → <em>تولّد</em> → <b>المتطلبات</b> (عميل ومطور) → <em>تُنفّذ بواسطة</em> → <b>البرمجية</b> (المطور) → <em>تساعد في</em> → عودة إلى المشكلة.</p>\n</div>\n",

        "topic-18": "\n<h3><span class=\"dot\"></span>هندسة البرمجيات المنتجية</h3>\n<p>لا يوجد عميل خارجي — المطور يلتقط <b>فرصة تجارية</b>، ويبني منتجًا، ويبيعه لكثير من العملاء.</p>\n<ul>\n<li><b>قيادة المطور:</b> الشركة نفسها تقرر الجدول الزمني، والميزات، ووقت تغييرها.</li>\n<li><b>السرعة مهمة:</b> التسليم السريع ضروري لالتقاط السوق.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">المثلث (شكل 1.2)</span>\n<p><b>الفرصة</b> (المطور) → <em>تُلهم</em> → <b>ميزات المنتج</b> (المطور) → <em>تُنفّذ بواسطة</em> → <b>البرمجية</b> (المطور) → <em>تحقّق</em> → عودة إلى الفرصة.</p>\n</div>\n",

        "topic-19": "\n<h3><span class=\"dot\"></span>خطوط المنتجات مقابل المنصات</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>خط منتجات برمجي</h4>\n<ul>\n<li><b>عائلة</b> تشارك جوهرًا مشتركًا</li>\n<li>كل عضو يضيف تفاصيل خاصة بالعميل</li>\n<li>يُستخدم عندما لا يلبي منتج عام احتياجات محددة</li>\n</ul>\n</div>\n<div class=\"col\">\n<h4>منصة</h4>\n<ul>\n<li>برمجية (أو برمجية+عتاد) <b>تُبنى عليها تطبيقات أخرى</b></li>\n<li>توفر وظائف قابلة للتوسيع</li>\n<li>مثال: فيسبوك + تطبيقات فيسبوك</li>\n</ul>\n</div>\n</div>\n",

        "topic-20": "\n<h3><span class=\"dot\"></span>نماذج تنفيذ البرمجيات</h3>\n<p>أين يعمل المنتج فعليًا؟ ثلاثة خيارات:</p>\n<ul>\n<li><b>مستقل</b> — يعمل بالكامل على جهاز العميل. البائع يدفع التحديثات فقط.</li>\n<li><b>هجين</b> — جزء على جهاز العميل، وجزء على خوادم البائع (مثل النسخ الاحتياطي والميزات الإضافية).</li>\n<li><b>البرمجيات كخدمة (SaaS)</b> — كل الوظائف على خوادم البائع؛ يستخدم العميل متصفحًا أو تطبيقًا.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>SaaS = <b>كل شيء عن بُعد</b>. مستقل = <b>كل شيء محلي</b>. هجين = كلاهما — شائع لتطبيقات المستهلك المتزامنة مع السحابة.</p>\n</div>\n",

        "topic-21": "\n<h3><span class=\"dot\"></span>تطوير برمجيات مماثل</h3>\n<p>أنواع تطوير أخرى تشارك سمة \"لا عميل خارجي يدفع\" مع تطوير المنتج:</p>\n<ul>\n<li><b>مشاريع الطلاب</b> — الطلاب يقررون الميزات لمهمة دراسية.</li>\n<li><b>برمجيات بحثية</b> — الباحثون يبنون أدوات للإجابة على أسئلتهم.</li>\n<li><b>أدوات داخلية</b> — مطورون يبنون لفريقهم؛ ليست للإصدار الخارجي.</li>\n</ul>\n",

        "topic-22": "\n<h3><span class=\"dot\"></span>رؤية المنتج</h3>\n<p><b>نقطة البداية</b> لتطوير المنتج. عبارة قصيرة تلتقط جوهر المنتج وتجيب على ثلاثة أسئلة:</p>\n<ul>\n<li><b>ماذا</b> سيُبنى المنتج؟</li>\n<li><b>من</b> هم العملاء والمستخدمون المستهدفون؟</li>\n<li><b>لماذا</b> يجب على العملاء شراؤه؟</li>\n</ul>\n",

        "topic-23": "\n<h3><span class=\"dot\"></span>قالب رؤية مور</h3>\n<p>بنية تعبئة فراغات لكتابة رؤية منتج حادة:</p>\n<ul>\n<li><b>لـ (FOR)</b> (العميل المستهدف)</li>\n<li><b>الذي (WHO)</b> (الحاجة / الفرصة)</li>\n<li>الـ <b>(اسم المنتج)</b> هو (فئة المنتج)</li>\n<li><b>الذي (THAT)</b> (الفائدة الرئيسية / سبب الشراء)</li>\n<li><b>بخلاف (UNLIKE)</b> (المنافس الرئيسي)</li>\n<li><b>منتجنا (OUR PRODUCT)</b> (التميّز الأساسي)</li>\n</ul>\n",

        "topic-24": "\n<h3><span class=\"dot\"></span>مثال رؤية — iLearn</h3>\n<div class=\"ex\">\n<span class=\"lbl\">رؤية مُعبّأة</span>\n<p><b>لـ</b> المعلمين والمربين <b>الذين</b> يحتاجون طريقة لمساعدة الطلاب على استخدام موارد التعلم على الويب، <b>فإن</b> نظام iLearn <b>هو</b> بيئة تعلم مفتوحة <b>التي</b> تتيح للمعلمين تكوين الموارد لكل فصل/طالب. <b>بخلاف</b> Moodle وأنظمة VLE التي تركّز على الإدارة، <b>منتجنا</b> يركّز على عملية التعلم نفسها — مما يتيح بيئات حسب المادة والعمر مبنية من أي موارد ويب.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">لماذا هذا التنسيق فعّال</span>\n<p>يفرض الوضوح حول العميل والمشكلة والفئة والفائدة والمنافس والتمايز — كل ذلك في فقرة واحدة.</p>\n</div>\n",

        "topic-25": "\n<h3><span class=\"dot\"></span>مصادر معلومات الرؤية</h3>\n<ul>\n<li><b>خبرة المجال</b> — المطورون العاملون في المجال يرصدون الفجوات والإحباطات.</li>\n<li><b>خبرة المنتج</b> — مستخدمو البرمجيات الموجودة يرون طرقًا أبسط/أفضل (غالبًا بتقنيات جديدة كالكلام).</li>\n<li><b>خبرة العميل</b> — نقاشات مع العملاء المحتملين تكشف مشاكلهم وقيودهم.</li>\n<li><b>النمذجة واللعب</b> — ابنِ نموذجًا سريعًا لتنقيح فكرتك قبل الالتزام.</li>\n</ul>\n",

        "topic-26": "\n<h3><span class=\"dot\"></span>إدارة منتجات البرمجيات</h3>\n<p>نشاط <b>تجاري</b> يتمركز حول المنتجات التي تبيعها الشركة.</p>\n<ul>\n<li><b>مديرو المنتج (PMs)</b> يمتلكون المنتج — تخطيط، وتطوير، وتسويق.</li>\n<li>يجلسون في <b>الواجهة</b> بين الشركة وعملائها وفريق التطوير.</li>\n<li>منخرطون في كل مرحلة — من الفكرة الأولى حتى سحب المنتج من السوق.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>على مديري المنتج النظر <b>خارجًا نحو العملاء</b>، لا داخلًا نحو الكود.</p>\n</div>\n",

        "topic-27": "\n<h3><span class=\"dot\"></span>اهتمامات إدارة المنتج</h3>\n<p>يوازن مدير المنتج بين ثلاث قوى (شكل 1.4):</p>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>احتياجات العمل</h4>\n<ul><li>يجب أن تحقق البرمجية <b>أهداف الشركة التجارية</b></li></ul>\n</div>\n<div class=\"col\">\n<h4>قيود التقنية</h4>\n<ul><li>توعية المطورين بالقضايا التقنية <b>التي تهم العملاء</b></li></ul>\n</div>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تجربة العميل</span>\n<p>كن على تواصل منتظم مع العملاء الحاليين والمحتملين — افهم ما يبحثون عنه، ومن هم، وكيف يستخدمون المنتج.</p>\n</div>\n",

        "topic-28": "\n<h3><span class=\"dot\"></span>التفاعلات التقنية لمديري المنتج</h3>\n<p>المسؤوليات التقنية اليومية لمدير المنتج:</p>\n<ul>\n<li><b>إدارة رؤية المنتج</b> — حماية من \"انحراف الرؤية\" عند تقييم التغييرات.</li>\n<li><b>خارطة طريق المنتج</b> — امتلاك خطة التطوير والإصدار والتسويق.</li>\n<li><b>قصص المستخدم والسيناريوهات</b> — تنقيح الرؤية إلى ميزات ملموسة.</li>\n<li><b>تراكم المنتج (Backlog)</b> — قائمة \"المهام\" المرتبة حسب الأولوية؛ يساعد المدير في تحديد الأولويات.</li>\n<li><b>اختبار القبول</b> — التحقق من أن الإصدار يلبي أهداف الخارطة، وفعّال وموثوق.</li>\n<li><b>اختبار العميل</b> — اختيار العملاء، وإجراء جلسات الإصدار المبكر، وجمع الملاحظات.</li>\n<li><b>تصميم الواجهة</b> — يتصرف كـ <em>مستخدم بديل</em>؛ يتأكد أن الميزات ليست معقدة بلا داعٍ.</li>\n</ul>\n",

        "topic-29": "\n<h3><span class=\"dot\"></span>نمذجة المنتج</h3>\n<p>ابنِ <b>نسخة مبكرة</b> لاختبار الأفكار وإقناع الممولين بأن المنتج له إمكانات حقيقية. المستخدمون لا يستطيعون التفاعل مع بيان رؤية، لكنهم <em>يستطيعون</em> التفاعل مع نسخة عاملة.</p>\n<ul>\n<li>النموذج يساعد في تحديد المكونات الأساسية واختبار التقنية.</li>\n<li>بناؤه يجب أن يكون <b>أول شيء تفعله</b>.</li>\n<li><b>خطّط للتخلص منه</b> — أعد التنفيذ بشكل صحيح للأمن والموثوقية.</li>\n</ul>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>عرض الجدوى</h4>\n<ul>\n<li>إثبات أن الفكرة <b>تعمل</b></li>\n<li>إقناع الممولين/الإدارة</li>\n<li>إظهار ما يتفوق على المنافسين</li>\n</ul>\n</div>\n<div class=\"col\">\n<h4>عرض العميل</h4>\n<ul>\n<li>توسيع نموذج الجدوى</li>\n<li>إضافة ميزات خاصة بالعميل</li>\n<li>يتطلب دراسات مستخدم أولًا</li>\n</ul>\n</div>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>النمذجة من أجل <b>التعلم</b> — انقّح أفكارك، واعرض الميزات للعملاء المحتملين، ثم أعد بناء المنتج الحقيقي.</p>\n</div>\n",

        "footer": "\n<p>أنت قادر على هذا. راجع صناديق <b>تذكر</b> العنبرية مرة أخيرة قبل الاختبار.</p>\n<div class=\"pill-row\">\n<span class=\"pill\">الذكاء الاصطناعي = تعزيز لا استبدال</span>\n<span class=\"pill\">الرؤية = ماذا · من · لماذا</span>\n<span class=\"pill\">SaaS = كل شيء على خوادم البائع</span>\n</div>\n<a class=\"top-link\" href=\"#\">↑ العودة إلى الأعلى</a>\n"
      }
    },
    quizzes: {
      en: {
        "quiz1": [
          {
            "q": "What is 'Vibe Coding'?",
            "options": [
              "A new style of writing CSS animations",
              "Conversational, natural-language-driven code generation with LLMs",
              "A pair-programming technique used by Google",
              "A type of debugger that uses sound cues"
            ],
            "answer": 1,
            "explain": "Coined by Andrej Karpathy in Feb 2025 — developers guide LLMs with prompts and focus on high-level feedback."
          },
          {
            "q": "According to the slides, what role do experts say AI plays for engineers?",
            "options": [
              "Full replacement of junior developers",
              "Augmentation of engineers, not replacement",
              "Replacement of senior architects only",
              "It will have no effect on engineering roles"
            ],
            "answer": 1,
            "explain": "AI handles repetitive tasks; engineers focus on architecture, verification, and AI oversight. Augmentation, not replacement."
          },
          {
            "q": "Which 2025 milestone is highlighted for quantum computing?",
            "options": [
              "IBM's 1000-qubit Condor chip",
              "Google's Sycamore 2",
              "Microsoft's Majorana 1 Quantum Chip (topological qubits)",
              "AWS Braket general availability"
            ],
            "answer": 2,
            "explain": "Majorana 1 (Feb 2025) demonstrates topological qubits for industrial-scale computing."
          },
          {
            "q": "What does 'DevSecOps' mean?",
            "options": [
              "Security integrated at every stage of the software lifecycle",
              "A separate security team that audits after release",
              "DevOps for security companies only",
              "Manual penetration tests once a year"
            ],
            "answer": 0,
            "explain": "DevSecOps shifts security left — automated vulnerability scans in every commit."
          },
          {
            "q": "What is the core idea of Zero Trust security?",
            "options": [
              "Trust devices once they've authenticated, forever",
              "Never trust, always verify — with continuous authentication",
              "Block all external traffic by default",
              "Replace passwords with biometrics"
            ],
            "answer": 1,
            "explain": "Zero Trust: continuously authenticate every request, no implicit trust."
          },
          {
            "q": "Why is platform engineering the new frontier in DevOps?",
            "options": [
              "It eliminates the need for testing",
              "It reduces developer cognitive load via IDPs and golden paths",
              "It removes Kubernetes from the stack",
              "It moves all servers on-premise"
            ],
            "answer": 1,
            "explain": "Internal developer platforms and self-service tools reduce cognitive load and accelerate delivery."
          },
          {
            "q": "Which set of tools is associated with service mesh?",
            "options": [
              "Jenkins, Ansible, Terraform",
              "Istio, Linkerd, Envoy",
              "Docker, Podman, Buildah",
              "Prometheus, Grafana, Loki"
            ],
            "answer": 1,
            "explain": "Istio/Linkerd/Envoy integrate zero-trust security, fine-grained access control, and cert rotation."
          },
          {
            "q": "Roughly what share of global CO₂ emissions does software account for?",
            "options": [
              "Under 0.1%",
              "About 2–3%",
              "Around 10%",
              "More than 20%"
            ],
            "answer": 1,
            "explain": "Software is ~2–3% of global CO₂ emissions — efficient code reduces both cost and harm."
          },
          {
            "q": "What characterises low-code / no-code platforms?",
            "options": [
              "They only work for backend services",
              "Drag-and-drop interfaces that let non-developers build apps with minimal coding",
              "They require a Python license",
              "They eliminate the need for governance"
            ],
            "answer": 1,
            "explain": "Visual development, API integration, and governance — democratising software creation."
          },
          {
            "q": "What is agentic AI in software engineering?",
            "options": [
              "AI used only inside the IDE for autocomplete",
              "Autonomous AI agents that act as team members across the lifecycle",
              "Hardware accelerators for ML inference",
              "A regulation about AI deployment"
            ],
            "answer": 1,
            "explain": "Agentic AI = autonomous agents helping with requirements, design, code, and testing — requires V&V."
          },
          {
            "q": "What is GitHub's reported Copilot involvement in code written in 2025?",
            "options": [
              "12%",
              "25%",
              "46%",
              "78%"
            ],
            "answer": 2,
            "explain": "GitHub reports 46% of code on its platform in 2025 involved Copilot assistance."
          },
          {
            "q": "Which statement best describes how engineering roles are shifting?",
            "options": [
              "Toward defining what to build and why, while AI handles implementation details",
              "Toward pure manual coding without tools",
              "Toward eliminating all junior roles",
              "Away from any contact with customers"
            ],
            "answer": 0,
            "explain": "Engineers focus on strategic thinking; AI handles implementation. Demand splits between generalists and specialists."
          }
        ],
        "quiz2": [
          {
            "q": "What best defines a software product?",
            "options": [
              "A one-off system built for a single external client",
              "A generic software system with functionality useful to many customers",
              "Any prototype written by students",
              "Internal tools built by developers for their own team"
            ],
            "answer": 1,
            "explain": "Software products are GENERIC systems for a range of customers — unlike custom one-off systems."
          },
          {
            "q": "In project-based software engineering, who owns the requirements?",
            "options": [
              "The contractor / developer",
              "The external client / customer",
              "The end user only",
              "Nobody — they evolve organically"
            ],
            "answer": 1,
            "explain": "Requirements are owned by an external client; the contractor designs and implements to meet them."
          },
          {
            "q": "What is the starting point for product software engineering?",
            "options": [
              "A signed contract from a paying customer",
              "A business opportunity identified by individuals or a company",
              "A set of formal government requirements",
              "A legacy codebase to be rewritten"
            ],
            "answer": 1,
            "explain": "Product development starts with a business opportunity — not external requirements."
          },
          {
            "q": "Which best describes a software product line?",
            "options": [
              "A platform on which third parties build apps",
              "A family of products sharing a common core, with customer-specific adaptations",
              "An open-source codebase",
              "A queue of features waiting to be implemented"
            ],
            "answer": 1,
            "explain": "Product lines = shared core + per-customer adaptations. Platforms are different (apps built on top)."
          },
          {
            "q": "Facebook (as an example) is best described as a…",
            "options": [
              "Software product line",
              "Platform — extensible functionality that other apps build on",
              "Stand-alone product",
              "Custom one-off system"
            ],
            "answer": 1,
            "explain": "Facebook provides extensive product functionality AND lets third parties build 'Facebook apps' on top — classic platform."
          },
          {
            "q": "In a SaaS execution model, where do features run?",
            "options": [
              "Entirely on the customer's computer",
              "Partly on the customer, partly on the vendor",
              "All on the vendor's servers; the customer uses a browser or app",
              "Only on edge devices"
            ],
            "answer": 2,
            "explain": "SaaS = everything on vendor servers, accessed via browser/app. Stand-alone = all local. Hybrid = mixed."
          },
          {
            "q": "Which three questions must a product vision answer?",
            "options": [
              "How fast, how cheap, how big",
              "What is the product, who is it for, why should they buy it",
              "Who codes it, who tests it, who ships it",
              "Where, when, how"
            ],
            "answer": 1,
            "explain": "The vision answers What / Who / Why — the essence of the product."
          },
          {
            "q": "Moore's vision template starts with…",
            "options": [
              "OUR PRODUCT (differentiation)",
              "FOR (target customer)",
              "THAT (key benefit)",
              "UNLIKE (competitor)"
            ],
            "answer": 1,
            "explain": "Order: FOR → WHO → THE (name) is a (category) → THAT → UNLIKE → OUR PRODUCT."
          },
          {
            "q": "Which is NOT listed as an information source for developing a product vision?",
            "options": [
              "Domain experience",
              "Product experience",
              "Customer experience",
              "Government certification"
            ],
            "answer": 3,
            "explain": "The four sources are domain, product, customer experience, and prototyping/playing around."
          },
          {
            "q": "What is a product manager's primary outward focus?",
            "options": [
              "The internal codebase",
              "The customers and potential customers",
              "Compiler warnings",
              "The CI/CD pipeline"
            ],
            "answer": 1,
            "explain": "PMs must look OUTWARD to customers rather than inward at the software being developed."
          },
          {
            "q": "Which is NOT a typical technical interaction of a product manager?",
            "options": [
              "Product backlog management",
              "Acceptance testing",
              "Writing low-level kernel drivers",
              "User interface design feedback"
            ],
            "answer": 2,
            "explain": "PMs handle vision, roadmap, stories, backlog, acceptance & customer testing, and UI feedback — not kernel code."
          },
          {
            "q": "What should you plan to do with your first product prototype?",
            "options": [
              "Ship it as version 1.0",
              "Keep maintaining it forever",
              "Throw it away and re-implement properly for security and reliability",
              "Sell it to investors"
            ],
            "answer": 2,
            "explain": "Prototypes are for learning and demos. Always plan to throw them away and rebuild for production quality."
          }
        ]
      },
      ar: {
        "quiz1": [
          {
            "q": "ما هي \"برمجة الفايب\" (Vibe Coding)؟",
            "options": [
              "أسلوب جديد لكتابة رسوم CSS المتحركة",
              "توليد كود محادثي مدفوع باللغة الطبيعية باستخدام نماذج LLM",
              "تقنية برمجة ثنائية تستخدمها جوجل",
              "نوع من المصححات يستخدم إشارات صوتية"
            ],
            "answer": 1,
            "explain": "صاغها أندريه كارباثي في فبراير 2025 — المطور يوجّه نماذج LLM بمطالبات ويركّز على الملاحظات عالية المستوى."
          },
          {
            "q": "ما الدور الذي يؤديه الذكاء الاصطناعي للمهندسين بحسب الشرائح؟",
            "options": [
              "استبدال كامل للمطورين المبتدئين",
              "تعزيز المهندسين، وليس استبدالهم",
              "استبدال كبار المعماريين فقط",
              "لن يؤثر على أدوار الهندسة"
            ],
            "answer": 1,
            "explain": "الذكاء الاصطناعي يتولى المهام المتكررة؛ ويركز المهندسون على البنية والتحقق ومراقبة الذكاء الاصطناعي. تعزيز لا استبدال."
          },
          {
            "q": "ما المحطة المهمة في 2025 للحوسبة الكمومية؟",
            "options": [
              "شريحة Condor من IBM بـ 1000 كيوبت",
              "Sycamore 2 من جوجل",
              "شريحة Majorana 1 من مايكروسوفت (كيوبتات طوبولوجية)",
              "توفر AWS Braket عامًا"
            ],
            "answer": 2,
            "explain": "Majorana 1 (فبراير 2025) تُظهر كيوبتات طوبولوجية للحوسبة الصناعية."
          },
          {
            "q": "ماذا يعني DevSecOps؟",
            "options": [
              "الأمن مدمج في كل مرحلة من دورة حياة البرمجيات",
              "فريق أمن منفصل يدقق بعد الإصدار",
              "DevOps لشركات الأمن فقط",
              "اختبارات اختراق يدوية مرة في السنة"
            ],
            "answer": 0,
            "explain": "DevSecOps يحرّك الأمن نحو اليسار — فحوصات الثغرات الآلية في كل التزام."
          },
          {
            "q": "ما الفكرة الأساسية لأمن Zero Trust؟",
            "options": [
              "ثق بالأجهزة بمجرد مصادقتها للأبد",
              "لا تثق أبدًا، تحقق دائمًا — مع مصادقة مستمرة",
              "حظر كل حركة المرور الخارجية افتراضيًا",
              "استبدال كلمات المرور بالبصمات"
            ],
            "answer": 1,
            "explain": "Zero Trust: تحقق مستمر من كل طلب، بدون ثقة ضمنية."
          },
          {
            "q": "لماذا هندسة المنصات هي حدود DevOps الجديدة؟",
            "options": [
              "تلغي الحاجة للاختبار",
              "تقلل العبء المعرفي عبر IDPs والمسارات الذهبية",
              "تزيل Kubernetes من المكدس",
              "تنقل كل الخوادم محليًا"
            ],
            "answer": 1,
            "explain": "منصات المطورين الداخلية وأدوات الخدمة الذاتية تقلل العبء المعرفي وتسرّع التسليم."
          },
          {
            "q": "أي مجموعة من الأدوات ترتبط بشبكة الخدمات (service mesh)؟",
            "options": [
              "Jenkins و Ansible و Terraform",
              "Istio و Linkerd و Envoy",
              "Docker و Podman و Buildah",
              "Prometheus و Grafana و Loki"
            ],
            "answer": 1,
            "explain": "Istio/Linkerd/Envoy تدمج أمن عدم الثقة والوصول الدقيق وتدوير الشهادات."
          },
          {
            "q": "ما النسبة التقريبية لانبعاثات CO₂ العالمية الناتجة عن البرمجيات؟",
            "options": [
              "أقل من 0.1%",
              "حوالي 2–3%",
              "حوالي 10%",
              "أكثر من 20%"
            ],
            "answer": 1,
            "explain": "البرمجيات ~2–3% من انبعاثات CO₂ العالمية — الكود الكفؤ يقلل التكلفة والضرر."
          },
          {
            "q": "ما الذي يميّز منصات low-code / no-code؟",
            "options": [
              "تعمل فقط للخدمات الخلفية",
              "واجهات سحب وإفلات تتيح لغير المطورين بناء تطبيقات بأقل قدر من البرمجة",
              "تتطلب ترخيص Python",
              "تلغي الحاجة للحوكمة"
            ],
            "answer": 1,
            "explain": "تطوير مرئي وتكامل API وحوكمة — تُديمقرط إنشاء البرمجيات."
          },
          {
            "q": "ما هو الذكاء الاصطناعي الوكيلي (agentic AI) في هندسة البرمجيات؟",
            "options": [
              "ذكاء اصطناعي يُستخدم داخل IDE للإكمال التلقائي فقط",
              "وكلاء ذكاء اصطناعي مستقلون يتصرفون كأعضاء فريق عبر دورة الحياة",
              "مسرّعات عتاد لاستدلال ML",
              "تنظيم حول نشر الذكاء الاصطناعي"
            ],
            "answer": 1,
            "explain": "الذكاء الاصطناعي الوكيلي = وكلاء مستقلون يساعدون في المتطلبات والتصميم والكود والاختبار — يتطلب V&V."
          },
          {
            "q": "ما النسبة المُبلغ عنها لمشاركة Copilot في الكود المكتوب على GitHub في 2025؟",
            "options": [
              "12%",
              "25%",
              "46%",
              "78%"
            ],
            "answer": 2,
            "explain": "تفيد GitHub أن 46% من الكود على منصتها في 2025 تضمّن مساعدة Copilot."
          },
          {
            "q": "أي عبارة تصف بشكل أفضل كيف تتحول أدوار الهندسة؟",
            "options": [
              "نحو تحديد ماذا نبني ولماذا، بينما يتولى الذكاء الاصطناعي تفاصيل التنفيذ",
              "نحو ترميز يدوي بحت بدون أدوات",
              "نحو إلغاء كل الأدوار المبتدئة",
              "بعيدًا عن أي تواصل مع العملاء"
            ],
            "answer": 0,
            "explain": "المهندسون يركّزون على التفكير الاستراتيجي؛ والذكاء الاصطناعي يتولى التنفيذ. الطلب يتقسم بين أصحاب الاختصاص العام والمتخصصين."
          }
        ],
        "quiz2": [
          {
            "q": "ما التعريف الأفضل لمنتج برمجي؟",
            "options": [
              "نظام لمرة واحدة يُبنى لعميل خارجي واحد",
              "نظام برمجي عام بوظائف مفيدة لكثير من العملاء",
              "أي نموذج أولي يكتبه الطلاب",
              "أدوات داخلية يبنيها المطورون لفريقهم"
            ],
            "answer": 1,
            "explain": "منتجات البرمجيات أنظمة عامة لمجموعة عملاء — بخلاف الأنظمة المخصصة لمرة واحدة."
          },
          {
            "q": "في الهندسة القائمة على المشاريع، من يملك المتطلبات؟",
            "options": [
              "المقاول / المطور",
              "العميل الخارجي / الزبون",
              "المستخدم النهائي فقط",
              "لا أحد — تتطور عضويًا"
            ],
            "answer": 1,
            "explain": "المتطلبات يملكها عميل خارجي؛ والمقاول يصمم وينفذ لتلبيتها."
          },
          {
            "q": "ما نقطة بداية هندسة البرمجيات المنتجية؟",
            "options": [
              "عقد موقّع من عميل يدفع",
              "فرصة تجارية يحددها أفراد أو شركة",
              "مجموعة متطلبات حكومية رسمية",
              "قاعدة كود قديمة يجب إعادة كتابتها"
            ],
            "answer": 1,
            "explain": "تطوير المنتج يبدأ بفرصة تجارية — لا متطلبات خارجية."
          },
          {
            "q": "أي وصف يصف خط منتجات برمجي بشكل أفضل؟",
            "options": [
              "منصة يبني عليها طرف ثالث تطبيقات",
              "عائلة منتجات تشارك جوهرًا مشتركًا، مع تكييفات لكل عميل",
              "قاعدة كود مفتوحة المصدر",
              "قائمة ميزات بانتظار التنفيذ"
            ],
            "answer": 1,
            "explain": "خطوط المنتجات = جوهر مشترك + تكييفات لكل عميل. المنصات مختلفة (تطبيقات تُبنى فوقها)."
          },
          {
            "q": "فيسبوك (كمثال) يُوصف أفضل بأنه…",
            "options": [
              "خط منتجات برمجي",
              "منصة — وظائف قابلة للتوسيع تبني عليها تطبيقات أخرى",
              "منتج مستقل",
              "نظام مخصص لمرة واحدة"
            ],
            "answer": 1,
            "explain": "فيسبوك يوفر وظائف منتج واسعة ويسمح ببناء \"تطبيقات فيسبوك\" — منصة كلاسيكية."
          },
          {
            "q": "في نموذج SaaS، أين تعمل الميزات؟",
            "options": [
              "بالكامل على جهاز العميل",
              "جزء على العميل وجزء على البائع",
              "كل شيء على خوادم البائع؛ والعميل يستخدم متصفحًا أو تطبيقًا",
              "فقط على أجهزة الحافة"
            ],
            "answer": 2,
            "explain": "SaaS = كل شيء على خوادم البائع، يُصل عبر متصفح/تطبيق. مستقل = كل شيء محلي. هجين = مختلط."
          },
          {
            "q": "ما الأسئلة الثلاثة التي يجب أن تجيب عليها رؤية المنتج؟",
            "options": [
              "بأي سرعة، وكم رخيص، وكم كبير",
              "ما هو المنتج، ولمن، ولماذا يشترونه",
              "من يبرمج، ومن يختبر، ومن يشحن",
              "أين، ومتى، وكيف"
            ],
            "answer": 1,
            "explain": "الرؤية تجيب: ماذا / من / لماذا — جوهر المنتج."
          },
          {
            "q": "قالب رؤية مور يبدأ بـ…",
            "options": [
              "OUR PRODUCT (التمايز)",
              "FOR (العميل المستهدف)",
              "THAT (الفائدة الرئيسية)",
              "UNLIKE (المنافس)"
            ],
            "answer": 1,
            "explain": "الترتيب: FOR → WHO → THE (الاسم) هو (فئة) → THAT → UNLIKE → OUR PRODUCT."
          },
          {
            "q": "أي مما يلي ليس مصدر معلومات لتطوير رؤية المنتج؟",
            "options": [
              "خبرة المجال",
              "خبرة المنتج",
              "خبرة العميل",
              "الاعتماد الحكومي"
            ],
            "answer": 3,
            "explain": "المصادر الأربعة هي خبرة المجال والمنتج والعميل والنمذجة/اللعب."
          },
          {
            "q": "ما التركيز الخارجي الأساسي لمدير المنتج؟",
            "options": [
              "قاعدة الكود الداخلية",
              "العملاء الحاليون والمحتملون",
              "تحذيرات المُجمِّع",
              "خط أنابيب CI/CD"
            ],
            "answer": 1,
            "explain": "يجب على مديري المنتج النظر خارجًا نحو العملاء بدلًا من داخلًا نحو البرمجية قيد التطوير."
          },
          {
            "q": "أي مما يلي ليس تفاعلًا تقنيًا اعتياديًا لمدير المنتج؟",
            "options": [
              "إدارة تراكم المنتج (Backlog)",
              "اختبار القبول",
              "كتابة مشغّلات نواة منخفضة المستوى",
              "ملاحظات تصميم الواجهة"
            ],
            "answer": 2,
            "explain": "PMs يتولّون الرؤية والخارطة والقصص والتراكم واختبار القبول والعميل وملاحظات الواجهة — لا أكواد النواة."
          },
          {
            "q": "ماذا يجب أن تخطط لفعله بنموذجك الأولي الأول؟",
            "options": [
              "شحنه كإصدار 1.0",
              "الاستمرار بصيانته للأبد",
              "التخلص منه وإعادة التنفيذ بشكل صحيح للأمن والموثوقية",
              "بيعه للمستثمرين"
            ],
            "answer": 2,
            "explain": "النماذج الأولية للتعلم والعرض. خطّط دائمًا للتخلص منها وإعادة بنائها لجودة الإنتاج."
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
          "quiz1": {
            "title": "Chapter 1 Check",
            "sub": "Tap an answer. You'll see instantly if it's right, plus a quick why."
          },
          "quiz2": {
            "title": "Chapter 2 Check",
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
          "quiz1": {
            "title": "مراجعة الفصل 1",
            "sub": "اضغط على الإجابة، وستعرف فورًا إن كانت صحيحة مع سبب سريع."
          },
          "quiz2": {
            "title": "مراجعة الفصل 2",
            "sub": "اضغط على الإجابة لمعرفة إن كانت صحيحة ولماذا."
          }
        }
      }
    }
  });
})();
