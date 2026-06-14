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
    ["#ch2", "chapter-head-1"],
    ["#ch3", "chapter-head-2"],
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
      ar: "AI3011 - مذاكرة سريعة للاختبار - الفصلان 2 و3"
    },
    translations: {
      html: {
        "site-nav-label": "أدلة الدراسة",
        "site-nav-links": "\n<a href=\"index.html\">الصفحة الرئيسية</a>\n<a class=\"current\" href=\"ai-study-guide-ch2-3.html\">السلاسل 2-3</a>\n<a href=\"ai-study-guide-ch4-5.html\">السلاسل 4-5</a>\n<a href=\"ai-study-guide-ch6-7.html\">السلاسل 6-7</a>\n",
        "hero-tag": "AI3011 · الاختبار النهائي",
        "hero-title": "دليل الدراسة السريع",
        "hero-copy": "الفصلان الثاني والثالث — المفاهيم فقط، بدون عمليات حسابية ثقيلة",
        "page-nav": "\n<a href=\"#ch2\">الفصل 2: ​​الانحدار</a>\n<a href=\"#quiz2\">الاختبار الثاني</a>\n<a href=\"#ch3\">الفصل 3: التصنيف</a>\n<a href=\"#quiz3\">الاختبار الثالث</a>\n",
        "chapter-head-1": "\n<span class=\"num\">الفصل الثاني</span>\n<h2>التعلم الخاضع للإشراف - الانحدار</h2>\n",
        "chapter-head-2": "\n<span class=\"num\">الفصل الثالث</span>\n<h2>الانحدار اللوجستي وأشجار القرار والغابة العشوائية</h2>\n",
        "topic-1": "\n<h3><span class=\"dot\"></span>أساسيات التعلم الخاضع للإشراف</h3>\n<p>يتعلم الكمبيوتر من <b>الأمثلة المصنفة</b> (البيانات التي نعرف الإجابة عليها بالفعل)، حتى يتمكن من توقع الإجابات للبيانات الجديدة.</p>\n<ul>\n<li><b>الميزات (X):</b> المدخلات/الأدلة (مثل الحجم منزل).</li>\n<li><b>الهدف (y):</b> الإجابة التي نريدها (مثل السعر).</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>مثل دراسة الاختبارات السابقة <em>مع</em> مفتاح الإجابة. وبعد التدريب الكافي، يمكنك الإجابة عن الأسئلة الجديدة التي لم تراها من قبل.</p>\n</div>\n",
        "topic-2": "\n<h3><span class=\"dot\"></span>الانحدار مقابل التصنيف</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>الانحدار</h4>\n<ul>\n<li>يتنبأ <b>بالرقم</b></li>\n<li>السعر ودرجة الحرارة والراتب</li>\n<li>\"كم؟\"</li>\n</ul>\n</div>\n<div class=\"col\">\n<h4>التصنيف</h4>\n<ul>\n<li>يتنبأ أ <b>الفئة</b></li>\n<li>البريد العشوائي / ليس البريد العشوائي</li>\n<li>\"أي مجموعة؟\"</li>\n</ul>\n</div>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>الانحدار = أرقام مستمرة. التصنيف = التسميات/الفئات. يدور هذا الفصل حول <b>الانحدار</b>.</p>\n</div>\n",
        "topic-3": "\n<h3><span class=\"dot\"></span>سير العمل (5 خطوات)</h3>\n<ul>\n<li><b>1. اجمع</b> البيانات المصنفة</li>\n<li><b>2. قم بتقسيمها</b> (عادةً 70-80% للتدريب، و20-30% للاختبار)</li>\n<li><b>3. اختر</b> نموذجًا</li>\n<li><b>4. تدريب</b> النموذج على بيانات التدريب</li>\n<li><b>5. قم بتقييم</b> على بيانات الاختبار التي لم يسبق لها مثيل</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>اختبر دائمًا <b>البيانات غير المرئية</b>. إن اختبار بيانات التدريب يشبه تقييم الطالب بنفس الأسئلة التي تدرب عليها - وهو أمر غير صادق.</p>\n</div>\n",
        "topic-4": "\n<h3><span class=\"dot\"></span>الانحدار الخطي</h3>\n<p>يناسب <b>خطًا مستقيمًا</b> خلال البيانات لالتقاط الاتجاه. ميزة واحدة = الانحدار الخطي البسيط؛ العديد من الميزات = الانحدار الخطي المتعدد (\"مستوى\" مسطح بدلاً من الخط).</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>الراتب مقابل الخبرة: المزيد من السنوات → راتب أعلى. يتيح لك الخط تخمين الراتب لأي عدد من السنوات.</p>\n</div>\n",
        "topic-5": "\n<h3><span class=\"dot\"></span>دالة التكلفة (ما مدى \"خطأ\" النموذج)</h3>\n<p>يقيس النموذج الخطأ من خلال النظر في الفجوة بين توقعه والقيمة الحقيقية. نحن <b>نقوم بتربيع</b> تلك الفجوات بحيث تكون دائمًا إيجابية ويتم معاقبة الأخطاء الكبيرة بشكل أكبر. التدريب = جعل هذا الخطأ الإجمالي صغيرًا قدر الإمكان.</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>فكر في رمي السهام: التكلفة هي مدى فاتك نقطة الهدف. يستمر النموذج في التكيف مع الأخطاء بمعدل أقل.</p>\n</div>\n",
        "topic-6": "\n<h3><span class=\"dot\"></span>الافتراضات الخمسة (الانحدار الخطي يعمل بشكل جيد فقط إذا كانت هذه الافتراضات صحيحة)</h3>\n<ul>\n<li><b>1. الخطية</b> — العلاقة الحقيقية هي تقريبًا خط مستقيم.</li>\n<li><b>2. الاستقلال</b> — لا تعتمد نقطة بيانات واحدة على أخرى.</li>\n<li><b>3. التماثل</b> — يظل حجم الخطأ تقريبًا <b>نفسه</b> في كل مكان (لا يزداد حجمه مع القيم الكبيرة).</li>\n<li><b>4. الحالة الطبيعية للأخطاء</b> — تتبع الأخطاء \"منحنى الجرس\" العادي.</li>\n<li><b>5. لا يوجد تعدد خطي</b> — لا ينبغي أن تكون الميزات نسخًا من بعضها البعض.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">الكلمات الصعبة أصبحت سهلة</span>\n<p><b>التجانس</b> = \"التشتت المتساوي.\" يتم توزيع الأخطاء بالتساوي، وليس على شكل مروحة/مخروط.<br/>\n<b>الخطية المتعددة</b> = ميزتان تقولان نفس الشيء، على سبيل المثال. الحجم بالـ <em>القدم</em> والحجم بالـ <em>بالأمتار</em>. يرتبك النموذج بشأن أيهما يهم.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>إذا تحطمت الافتراضات → توقعات غير موثوقة ونتائج مضللة.</p>\n</div>\n",
        "topic-7": "\n<h3><span class=\"dot\"></span>الانحدار متعدد الحدود</h3>\n<p>عندما تكون البيانات <b>منحنية</b>، يفشل الخط المستقيم. يضيف الانحدار متعدد الحدود القوى (x², x³…) بحيث يمكن للخط <b>الانحناء</b> ومتابعة المنحنيات.</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>كفاءة وقود السيارة مقابل السرعة: سيئ عند السرعات المنخفضة جدًا، والأفضل في المنتصف، وسيئ عند السرعات العالية - شكل حرف U. منحنى يناسب هذا؛ الخط المستقيم لا يمكنه ذلك.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p><b>غير ملائم</b> = بسيط جدًا، يفتقد النمط. <b>التناسب الزائد</b> = معقد جدًا، ويحفظ الضوضاء. البقعة الحلوة في المنتصف هي الأفضل. هذه هي <b>مقايضة التحيز والتباين</b>.</p>\n</div>\n",
        "topic-8": "\n<h3><span class=\"dot\"></span>النسب المتدرج (كيف يتعلم النموذج)</h3>\n<p>طريقة خطوة بخطوة للعثور على أقل خطأ. ويستمر في اتخاذ خطوات صغيرة \"هبوطًا\" حتى يصل إلى القاع (أدنى خطأ).</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>مثل المشي أسفل جبل ضبابي - لا يمكنك رؤية القاع، لذلك عليك فقط الاستمرار في السير في الاتجاه الأكثر انحدارًا حتى لا تتمكن من النزول.</p>\n</div>\n<p style=\"margin-top:10px\"><b>ثلاثة أنواع:</b></p>\n<ul>\n<li><b>دفعة</b> — يستخدم كافة البيانات في كل خطوة. مستقرة ولكنها بطيئة في التعامل مع البيانات الضخمة.</li>\n<li><b>مؤشر ستوكاستيك (SGD)</b> — يستخدم مثالاً واحدًا في كل خطوة. سريع ولكن صاخب/متقلب.</li>\n<li><b>الدفعة الصغيرة</b> — تستخدم مجموعة صغيرة (على سبيل المثال، 32–256). أفضل ما في الأمرين → <b>معيار الصناعة</b>.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر - معدل التعلم</span>\n<p><b>حجم الخطوة</b>. كبير جدًا → يتجاوز الحدود ولا يستقر أبدًا. صغير جدًا → بطيء للغاية. صحيح تمامًا → يصل إلى القاع بسرعة.</p>\n</div>\n",
        "topic-9": "\n<h3><span class=\"dot\"></span>قياس الأداء (المقاييس)</h3>\n<ul>\n<li><b>MSE / RMSE</b> — متوسط ​​الخطأ؛ يعاقب الأخطاء الكبيرة بشدة. يوجد RMSE بنفس الوحدات (مثل الدولار)، لذلك من السهل قراءته.</li>\n<li><b>MAE</b> — متوسط ​​الخطأ في معالجة جميع الأخطاء بالتساوي؛ <b>أكثر قوة بالنسبة للقيم المتطرفة</b>.</li>\n<li><b>درجة R²</b> - مقدار النمط الذي يوضحه النموذج. 1 = مثالي، 0 = عديم الفائدة. (R² = 0.85 يعني أنه يفسر 85%.)</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>الأخطاء الكبيرة هي الأكثر أهمية → استخدم <b>RMSE</b>. لا ينبغي أن تهيمن القيم المتطرفة → استخدم <b>MAE</b>. المقارنة عبر مجموعات البيانات → استخدم <b>R²</b>.</p>\n</div>\n",
        "topic-10": "\n<h3><span class=\"dot\"></span>من الانحدار إلى التصنيف</h3>\n<p>نتوقع الآن <b>الفئات</b>، وليس أرقامًا: بريد عشوائي أم لا، مريض أو صحي، معتمد أو مرفوض.</p>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>ثنائي</h4>\n<ul><li>فقط <b>2</b> النتائج</li><li>البريد العشوائي / هام</li><li>الاحتيال / الشرعي</li></ul>\n</div>\n<div class=\"col\">\n<h4>متعدد الفئات</h4>\n<ul><li><b>3+</b> النتائج</li><li>الأرقام من 0 إلى 9</li><li>نقاط البيع / محايد / سلبي </li></ul>\n</div>\n</div>\n",
        "topic-11": "\n<h3><span class=\"dot\"></span>لماذا يفشل الانحدار الخطي هنا</h3>\n<p>يمكن للخط المستقيم أن يعطي إجابات مثل 2.3 أو −0.5 - ولكن يجب أن يظل الاحتمال بين <b>0 و1</b>. نحن بحاجة إلى شيء يضغط أي رقم في هذا النطاق.</p>\n",
        "topic-12": "\n<h3><span class=\"dot\"></span>الدالة السيني</h3>\n<p>منحنى على شكل حرف S يحول <b>أي رقم إلى احتمال (0 إلى 1)</b>. هذا هو قلب الانحدار اللوجستي.</p>\n<ul>\n<li>الإخراج دائمًا بين 0 و1</li>\n<li>عند الإدخال 0 → الإخراج هو 0.5 (الوسط)</li>\n<li>الإدخال الإيجابي الكبير → بالقرب من 1؛ سلبي كبير → قريب من 0</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>فكر في مفتاح التعتيم: بغض النظر عن مدى قوة الدفع، يظل الضوء بين وضع إيقاف التشغيل الكامل (0) وتشغيله بالكامل (1) - ولا يتجاوزه أبدًا.</p>\n</div>\n",
        "topic-13": "\n<h3><span class=\"dot\"></span>نموذج الانحدار اللوجستي</h3>\n<p>ينتج <b>الاحتمال</b> أن شيئًا ما ينتمي إلى الفئة 1. إذا كان هذا الاحتمال أعلى من <b>العتبة</b> (عادةً 0.5)، فإننا نتوقع الفئة 1.</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>يشير فلتر البريد العشوائي إلى \"92% بريد عشوائي\" → أعلى من 0.5 → ضع علامة كبريد عشوائي. الإجابة \"51%\" تعني أنها غير متأكدة.</p>\n</div>\n",
        "topic-14": "\n<h3><span class=\"dot\"></span>الصعاب وتسجيل الصعاب (لا داعي للذعر)</h3>\n<p>مجرد طريقة أخرى للتعبير عن الفرصة.</p>\n<ul>\n<li><b>الصعاب</b> = ما مدى احتمالية أن تكون \"نعم\" أكثر من \"لا\". من المرجح حدوث احتمالات 3 → 3×.</li>\n<li><b>Log-odds</b> = سجل الاحتمالات. إيجابي → الفئة 1 أكثر احتمالا؛ سلبي → الفئة 0 أكثر احتمالية.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>\"هذا الفريق لديه احتمالات فوز 2 إلى 1\" = احتمال فوزه ضعف احتمال الخسارة. نفس الفكرة، مجرد لغة المقامرة.</p>\n</div>\n",
        "topic-15": "\n<h3><span class=\"dot\"></span>حدود القرار</h3>\n<p>الخط الفاصل بين الفئات. من جهة يتنبأ بالفئة 1، ومن جهة أخرى بالفئة 0. بالنسبة للانحدار اللوجستي، يكون هذا الخط <b>مستقيمًا</b> - مما يحده بالنسبة للأشكال المعقدة.</p>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>العتبة عادةً ما تكون 0.5 ولكن يمكنك تغييرها اعتمادًا على الخطأ الأسوأ.</p>\n</div>\n",
        "topic-16": "\n<h3><span class=\"dot\"></span>الإنتروبيا الثنائية (الخسارة)</h3>\n<p>قياس الخطأ للتصنيف. إنه <b>يعاقب الإجابات الخاطئة الواثقة</b> بشدة. قول \"99% من البريد العشوائي\" بشأن بريد إلكتروني حقيقي = عقوبة كبيرة.</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>مثل إجابة اختبار واثقة: إذا كنت متأكدًا ومخطئًا بنسبة 100%، فهذا يضر أكثر من مجرد التخمين المتردد.</p>\n</div>\n",
        "topic-17": "\n<h3><span class=\"dot\"></span>التنظيم (إيقاف التجهيز الزائد)</h3>\n<p>يضيف عقوبة للأوزان الكبيرة جدًا بحيث يظل النموذج بسيطًا وعامًا.</p>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>L2 (Ridge)</h4>\n<ul><li>يقلص الأوزان نحو 0</li><li>يحتفظ بجميع الميزات</li><li>تصغير سلس</li></ul>\n</div>\n<div class=\"col\">\n<h4>L1 (Lasso)</h4>\n<ul><li>يدفع بعض الأوزان إلى 0 بالضبط</li><li>يحذف الميزات غير المفيدة</li><li>= اختيار الميزة</li></ul>\n</div>\n</div>\n",
        "topic-18": "\n<h3><span class=\"dot\"></span>قراءة الأوزان (المعاملات)</h3>\n<ul>\n<li><b>الوزن الإيجابي</b> → يدفع نحو الفئة 1 (على سبيل المثال، دخل أعلى ← الموافقة على القرض).</li>\n<li><b>الوزن السلبي</b> → يدفع نحو الفئة 0 (على سبيل المثال، ارتفاع الدين → مرفوض).</li>\n<li><b>حجم أكبر</b> → تأثير أقوى على القرار.</li>\n</ul>\n",
        "topic-19": "\n<h3><span class=\"dot\"></span>الانحدار اللوجستي - الإيجابيات والسلبيات</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>نقاط القوة</h4>\n<ul><li>يعطي الاحتمالات</li><li>سريع وفعال</li><li>سهل التفسير</li></ul>\n</div>\n<div class=\"col\">\n<h4>نقاط الضعف</h4>\n<ul><li>فقط بشكل مستقيم الحدود</li><li>ضعيفة في الأنماط المعقدة</li><li>حساسة لتحجيم الميزات</li></ul>\n</div>\n</div>\n",
        "topic-20": "\n<h3><span class=\"dot\"></span>أشجار القرار</h3>\n<p>مخطط انسيابي يضم <b>أسئلة نعم/لا</b>. تتبع الإجابات لأسفل حتى تصل إلى التنبؤ النهائي في الأسفل (\"ورقة\").</p>\n<ul>\n<li><b>الجذر</b> = سؤال البداية (جميع البيانات)</li>\n<li><b>العقد الداخلية</b> = المزيد من الأسئلة</li>\n<li><b> الأوراق</b> = الإجابات النهائية</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>مثل لعبة \"20 سؤالًا\": \"هل هي أكبر من القطة؟ هل تطير؟\" تقوم كل إجابة بتضييق نطاقها وصولاً إلى التخمين النهائي.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>الأشجار <b>سهلة جدًا للقراءة</b> (كل مسار = قاعدة واضحة) وتتعامل مع البيانات المنحنية/المعقدة بدون خط مستقيم.</p>\n</div>\n",
        "topic-21": "\n<h3><span class=\"dot\"></span>كيف تنتقي الشجرة الأسئلة: الإنتروبيا واكتساب المعلومات</h3>\n<ul>\n<li><b>الإنتروبيا</b> = كيف تكون <b>مختلطة/فوضوية</b> في المجموعة. كل فئة واحدة = نقية = 0. النصف والنصف = الأكثر فوضوية.</li>\n<li><b>اكتساب المعلومات</b> = مقدار السؤال <b>ينظف</b> الفوضى. تختار الشجرة السؤال ذو المكسب الأعلى.</li>\n<li><b>شوائب جيني</b> = طريقة أخرى لقياس الفوضى؛ <b>أسرع في الحساب</b> لذا فهو مفضل غالبًا. كلاهما يعطي أشجارًا متشابهة.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>فرز كيس مختلط من الكرات الحمراء والزرقاء. سؤال جيد يقسمهم إلى كومة \"معظمها حمراء\" وكومة \"معظمها زرقاء\". عملية التنظيف الكبيرة هذه = اكتساب معلومات عالية.</p>\n</div>\n",
        "topic-22": "\n<h3><span class=\"dot\"></span>حدود قرارات الشجرة</h3>\n<p>تقسم الأشجار المساحة إلى <b>مربعات</b> (مستطيلات). تكون الحدود دائمًا مستقيمة وبزوايا قائمة - على شكل درجة/درج، وليس منحنى سلس.</p>\n",
        "topic-23": "\n<h3><span class=\"dot\"></span>التحكم في التجهيز الزائد في الأشجار</h3>\n<p>تحب الأشجار الحفظ. هناك إصلاحان (ملاحظة: التنظيم لا ينطبق على الأشجار):</p>\n<ul>\n<li><b>التقليم المسبق / الحد من النمو</b> — تعيين القواعد مبكرًا، على سبيل المثال. الحد الأقصى للعمق أو الحد الأدنى للعينات المراد تقسيمها.</li>\n<li><b>التقليم</b> - دعها تنمو بالكامل، ثم اقطع الفروع التي لا تساعد في التحقق من صحة البيانات.</li>\n</ul>\n",
        "topic-24": "\n<h3><span class=\"dot\"></span>حدود الأشجار المنفردة</h3>\n<ul>\n<li><b>التركيب الزائد</b> - الأشجار العميقة تحفظ</li>\n<li><b>التباين العالي</b> - تغير صغير في البيانات → شجرة مختلفة جدًا</li>\n<li><b>جشع</b> - يختار أفضل تقسيم الآن، قد يخطئ الأفضل بشكل عام</li>\n</ul>\n",
        "topic-25": "\n<h3><span class=\"dot\"></span>مجموعة عشوائية (الحل)</h3>\n<p>بدلاً من شجرة واحدة، أنشئ <b>العديد</b> الأشجار واسمح لهم <b>بالتصويت</b>. إجابة الأغلبية تفوز. يؤدي هذا إلى إلغاء الأخطاء الفردية.</p>\n<ul>\n<li><b>التعبئة</b> - تتدرب كل شجرة على عينة عشوائية من البيانات</li>\n<li><b>عشوائية الميزات</b> - ينظر كل قسم إلى بعض الميزات فقط</li>\n<li><b>التصويت</b> - اجمع كل الأشجار للحصول على الإجابة النهائية</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>قد يكون طلب النصيحة من أحد الأصدقاء أمرًا متحيزًا. يعد سؤال 100 صديق مختلف والذهاب مع الأغلبية أكثر موثوقية بكثير. هذه غابة.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>المجموعة العشوائية = <b>تباين أقل + أكثر قوة + أقل فرطًا في التجهيز</b> من شجرة واحدة. هضاب الأداء حوالي 100-500 شجرة.</p>\n</div>\n",
        "topic-26": "\n<h3><span class=\"dot\"></span>واحد مقابل راحة (خدعة متعددة الفئات)</h3>\n<p>يحول مشكلة متعددة الفئات إلى عدة مسائل نعم/لا - مصنف واحد لكل فئة (\"هل هي فئة أ أم لا؟\"). والفئة ذات الاحتمالية الأعلى هي التي تفوز.</p>\n",
        "footer": "\n<p>لقد حصلت على هذا. راجع المربعات الكهرمانية <b>تذكر</b> المربعات مرة أخيرة قبل الاختبار.</p>\n<div class=\"pill-row\">\n<span class=\"pill\">الانحدار = أرقام</span>\n<span class=\"pill\">Sigmoid = 0 إلى 1</span>\n<span class=\"pill\">الغابة = تصويت الأشجار</span>\n</div>\n<a class=\"top-link\" href=\"#\">↑ العودة إلى الأعلى</a>\n"
}
    },
    quizzes: {
      en: {
        "quiz2": [
                {
                        "q": "What does regression predict?",
                        "options": [
                                "A category like spam/not spam",
                                "A continuous number like price",
                                "A yes or no answer",
                                "A ranking order"
                        ],
                        "answer": 1,
                        "explain": "Regression predicts continuous numbers. Categories are classification."
                },
                {
                        "q": "Why do we test the model on data it has NOT seen?",
                        "options": [
                                "To make training faster",
                                "To get an honest measure of how it generalizes",
                                "Because training data is deleted",
                                "To reduce the number of features"
                        ],
                        "answer": 1,
                        "explain": "Testing on unseen data shows real-world performance. Testing on training data is misleadingly easy."
                },
                {
                        "q": "'Homoscedasticity' means…",
                        "options": [
                                "Features are unrelated",
                                "Errors stay roughly equal in size everywhere",
                                "Data is always linear",
                                "The model has no bias"
                        ],
                        "answer": 1,
                        "explain": "It means 'equal scatter' — error size is consistent, not a fan/cone shape."
                },
                {
                        "q": "Multicollinearity is a problem because…",
                        "options": [
                                "Two features carry the same info and confuse the model",
                                "There is too little data",
                                "The line is too steep",
                                "Errors are negative"
                        ],
                        "answer": 0,
                        "explain": "E.g. size in feet AND meters. The model can't tell which one matters."
                },
                {
                        "q": "When data is curved, the best fix is…",
                        "options": [
                                "Add more straight lines",
                                "Use polynomial regression so the line can bend",
                                "Remove the target",
                                "Use a higher learning rate"
                        ],
                        "answer": 1,
                        "explain": "Polynomial regression adds powers (x², x³) so it can follow curves."
                },
                {
                        "q": "What does a learning rate that is TOO HIGH cause?",
                        "options": [
                                "Very slow learning",
                                "Overshooting — it bounces and may never settle",
                                "Perfect accuracy",
                                "Fewer features"
                        ],
                        "answer": 1,
                        "explain": "Big steps overshoot the minimum. Too small = painfully slow."
                },
                {
                        "q": "Which gradient descent type is the industry standard?",
                        "options": [
                                "Batch (all data)",
                                "Stochastic (one example)",
                                "Mini-batch (small groups)",
                                "None of them"
                        ],
                        "answer": 2,
                        "explain": "Mini-batch balances speed and stability — best of both worlds."
                },
                {
                        "q": "Which metric is MOST robust to outliers?",
                        "options": [
                                "MSE",
                                "RMSE",
                                "MAE",
                                "R²"
                        ],
                        "answer": 2,
                        "explain": "MAE treats all errors equally (no squaring), so outliers don't dominate."
                },
                {
                        "q": "An R² score of 0.85 means…",
                        "options": [
                                "The model is 85% wrong",
                                "The model explains 85% of the pattern",
                                "Error is 0.85 dollars",
                                "85 features were used"
                        ],
                        "answer": 1,
                        "explain": "R² = proportion of the pattern explained. 1 = perfect, 0 = useless."
                }
        ],
        "quiz3": [
                {
                        "q": "Why does plain linear regression fail for classification?",
                        "options": [
                                "It's too slow",
                                "It can output values outside 0–1, but probabilities must stay in 0–1",
                                "It needs too much data",
                                "It can't use features"
                        ],
                        "answer": 1,
                        "explain": "Probabilities must be between 0 and 1; a straight line isn't bounded."
                },
                {
                        "q": "The sigmoid function does what?",
                        "options": [
                                "Turns any number into a probability between 0 and 1",
                                "Removes outliers",
                                "Counts features",
                                "Splits data into trees"
                        ],
                        "answer": 0,
                        "explain": "It's the S-curve that squeezes any value into the 0–1 range."
                },
                {
                        "q": "At input 0, the sigmoid outputs…",
                        "options": [
                                "0",
                                "1",
                                "0.5",
                                "Infinity"
                        ],
                        "answer": 2,
                        "explain": "Sigmoid(0) = 0.5 — right in the middle."
                },
                {
                        "q": "A logistic model outputs 0.92 for spam (threshold 0.5). The result?",
                        "options": [
                                "Not spam",
                                "Spam",
                                "Unsure, no decision",
                                "Error"
                        ],
                        "answer": 1,
                        "explain": "0.92 is above 0.5, so it's classified as spam."
                },
                {
                        "q": "Binary cross-entropy especially punishes…",
                        "options": [
                                "Hesitant guesses",
                                "Confident wrong answers",
                                "Correct answers",
                                "Missing features"
                        ],
                        "answer": 1,
                        "explain": "Being very confident AND wrong gives the biggest penalty."
                },
                {
                        "q": "L1 (Lasso) regularization is special because it…",
                        "options": [
                                "Keeps every feature",
                                "Pushes some weights to exactly 0 (feature selection)",
                                "Makes the model bigger",
                                "Increases the learning rate"
                        ],
                        "answer": 1,
                        "explain": "L1 zeroes out useless features. L2 only shrinks them."
                },
                {
                        "q": "Entropy of a group that is ALL one class is…",
                        "options": [
                                "Highest (most messy)",
                                "0 (pure)",
                                "Always 0.5",
                                "Negative"
                        ],
                        "answer": 1,
                        "explain": "Pure group = no mess = entropy 0. Half-and-half = most messy."
                },
                {
                        "q": "A decision tree chooses the split with the highest…",
                        "options": [
                                "Entropy",
                                "Information gain",
                                "Number of features",
                                "Learning rate"
                        ],
                        "answer": 1,
                        "explain": "Information gain = how much a question cleans up the mess."
                },
                {
                        "q": "Gini impurity is often preferred over entropy because it's…",
                        "options": [
                                "More accurate always",
                                "Faster to compute",
                                "Bounded at 1",
                                "Based on logarithms"
                        ],
                        "answer": 1,
                        "explain": "Gini is faster (no logs). Both produce similar trees."
                },
                {
                        "q": "A random forest makes its final prediction by…",
                        "options": [
                                "Using the deepest tree only",
                                "Letting many trees vote and taking the majority",
                                "Picking one random tree",
                                "Averaging the features"
                        ],
                        "answer": 1,
                        "explain": "Many diverse trees vote; the majority wins → lower variance, more robust."
                },
                {
                        "q": "The main benefit of a random forest over a single tree is…",
                        "options": [
                                "Faster training",
                                "Lower variance and less overfitting",
                                "Fewer features needed",
                                "Smaller file size"
                        ],
                        "answer": 1,
                        "explain": "Combining trees cancels individual errors, reducing variance."
                },
                {
                        "q": "Decision tree boundaries look like…",
                        "options": [
                                "Smooth curves",
                                "Boxes / staircases at right angles",
                                "Diagonal lines",
                                "Circles"
                        ],
                        "answer": 1,
                        "explain": "Trees split into axis-aligned rectangles — a step-like shape."
                }
        ]
},
      ar: {
        "quiz2": [
                {
                        "q": "ماذا يتنبأ الانحدار؟",
                        "options": [
                                "فئة مثل البريد العشوائي/ليس البريد العشوائي",
                                "رقم مستمر مثل السعر",
                                "إجابة بنعم أو لا",
                                "ترتيب ترتيب"
                        ],
                        "answer": 1,
                        "explain": "يتنبأ الانحدار بالأرقام المستمرة. الفئات هي تصنيف."
                },
                {
                        "q": "لماذا نختبر النموذج على البيانات التي لم يراها؟",
                        "options": [
                                "لجعل التدريب أسرع",
                                "للحصول على مقياس صادق لكيفية تعميمه",
                                "لأن بيانات التدريب يتم حذفها",
                                "لتقليل عدد الميزات"
                        ],
                        "answer": 1,
                        "explain": "الاختبار على تظهر البيانات غير المرئية الأداء في العالم الحقيقي. يعد اختبار بيانات التدريب سهلاً بشكل مضلل."
                },
                {
                        "q": "يعني \"التجانس\"…",
                        "options": [
                                "الميزات غير مرتبطة",
                                "تظل الأخطاء متساوية تقريبًا في الحجم في كل مكان",
                                "البيانات خطية دائمًا",
                                "لا يحتوي النموذج على أي تحيز"
                        ],
                        "answer": 1,
                        "explain": "يعني \"التشتت المتساوي\" - حجم الخطأ متسق، وليس شكل مروحة/مخروط."
                },
                {
                        "q": "يمثل تعدد الخطوط الخطية مشكلة لأن…",
                        "options": [
                                "هناك ميزتان تحملان نفس المعلومات وتربكان النموذج",
                                "هناك القليل جدًا من البيانات",
                                "الخط كبير جدًا حاد",
                                "الأخطاء سلبية"
                        ],
                        "answer": 0,
                        "explain": "على سبيل المثال. الحجم بالقدم والمتر. لا يستطيع النموذج تحديد أي منها يهم."
                },
                {
                        "q": "عندما تكون البيانات منحنية، فإن أفضل حل هو…",
                        "options": [
                                "إضافة المزيد من الخطوط المستقيمة",
                                "استخدام الانحدار متعدد الحدود حتى يمكن ثني الخط",
                                "إزالة الهدف",
                                "استخدام معدل تعلم أعلى"
                        ],
                        "answer": 1,
                        "explain": "يضيف الانحدار متعدد الحدود القوى (x², x³) حتى يتمكن من اتباع المنحنيات."
                },
                {
                        "q": "ما الذي يسببه معدل التعلم المرتفع جدًا؟",
                        "options": [
                                "التعلم البطيء جدًا",
                                "التجاوز - يرتد وقد لا يستقر أبدًا",
                                "الدقة المثالية",
                                "ميزات أقل"
                        ],
                        "answer": 1,
                        "explain": "الخطوات الكبيرة تتجاوز الحد الأدنى. صغير جدًا = بطيء للغاية."
                },
                {
                        "q": "ما هو نوع النسب المتدرج الذي يعد معيار الصناعة؟",
                        "options": [
                                "الدُفعة (جميع البيانات)",
                                "العشوائية (مثال واحد)",
                                "الدُفعة الصغيرة (مجموعات صغيرة)",
                                "لا شيء منها"
                        ],
                        "answer": 2,
                        "explain": "توازن الدفعة الصغيرة بين السرعة والاستقرار - أفضل ما في العالمين."
                },
                {
                        "q": "ما هو المقياس الأكثر قوة بالنسبة للقيم المتطرفة؟",
                        "options": [
                                "MSE",
                                "RMSE",
                                "MAE",
                                "R²"
                        ],
                        "answer": 2,
                        "explain": "يتعامل MAE مع جميع الأخطاء بالتساوي (بدون تربيع)، لذلك لا تهيمن القيم المتطرفة."
                },
                {
                        "q": "تعني درجة R² 0.85…",
                        "options": [
                                "النموذج خاطئ بنسبة 85%",
                                "يشرح النموذج 85% من النمط",
                                "الخطأ هو 0.85 دولار",
                                "تم استخدام 85 ميزة"
                        ],
                        "answer": 1,
                        "explain": "R² = نسبة النمط الموضح. 1 = مثالي، 0 = عديم الفائدة."
                }
        ],
        "quiz3": [
                {
                        "q": "لماذا يفشل الانحدار الخطي العادي في التصنيف؟",
                        "options": [
                                "إنه بطيء جدًا",
                                "يمكنه إخراج قيم خارج 0–1، ولكن يجب أن تظل الاحتمالات في 0–1",
                                "يحتاج إلى الكثير من البيانات",
                                "لا يمكنه استخدام الميزات"
                        ],
                        "answer": 1,
                        "explain": "الاحتمالات يجب أن يكون بين 0 و1؛ الخط المستقيم غير محدد."
                },
                {
                        "q": "ماذا تفعل الدالة السيني؟",
                        "options": [
                                "تحويل أي رقم إلى احتمال بين 0 و1",
                                "إزالة القيم المتطرفة",
                                "تعداد الميزات",
                                "تقسيم البيانات إلى أشجار"
                        ],
                        "answer": 0,
                        "explain": "إنه المنحنى S الذي يضغط أي قيمة في النطاق 0-1."
                },
                {
                        "q": "عند الإدخال 0، يخرج السيني…",
                        "options": [
                                "0",
                                "1",
                                "0.5",
                                "Infinity"
                        ],
                        "answer": 2,
                        "explain": "Sigmoid(0) = 0.5 — في المنتصف مباشرةً."
                },
                {
                        "q": "يُخرج النموذج اللوجستي 0.92 للبريد العشوائي (الحد الأدنى 0.5). النتيجة؟",
                        "options": [
                                "ليست بريدًا عشوائيًا",
                                "بريدًا عشوائيًا",
                                "غير متأكد، لم يتم اتخاذ قرار",
                                "خطأ"
                        ],
                        "answer": 1,
                        "explain": "0.92 أعلى من 0.5، لذا تم تصنيفه كبريد عشوائي."
                },
                {
                        "q": "الإنتروبيا الثنائية يعاقب بشكل خاص…",
                        "options": [
                                "التخمينات المترددة",
                                "الإجابات الخاطئة الواثقة",
                                "الإجابات الصحيحة",
                                "الميزات المفقودة"
                        ],
                        "answer": 1,
                        "explain": "الثقة الشديدة والخطأ يعطي أكبر عقوبة."
                },
                {
                        "q": "يعد تنظيم L1 (Lasso) خاصًا لأن it…",
                        "options": [
                                "يحتفظ بكل ميزة",
                                "يدفع بعض الأوزان إلى 0 بالضبط (اختيار الميزة)",
                                "يجعل النموذج أكبر",
                                "يزيد معدل التعلم"
                        ],
                        "answer": 1,
                        "explain": "L1 يزيل الميزات غير المفيدة. L2 يقلصها فقط."
                },
                {
                        "q": "إنتروبيا المجموعة التي تتكون من فئة واحدة هي…",
                        "options": [
                                "الأعلى (الأكثر فوضوية)",
                                "0 (نقية)",
                                "دائمًا 0.5",
                                "سلبية"
                        ],
                        "answer": 1,
                        "explain": "المجموعة النقية = لا فوضى = إنتروبيا 0. النصف والنصف = الأكثر فوضوية."
                },
                {
                        "q": "تختار شجرة القرار التقسيم ذي الأعلى…",
                        "options": [
                                "الإنتروبيا",
                                "اكتساب المعلومات",
                                "عدد الميزات",
                                "معدل التعلم"
                        ],
                        "answer": 1,
                        "explain": "اكتساب المعلومات = مقدار السؤال الذي يزيل الفوضى."
                },
                {
                        "q": "غالبًا ما يتم تفضيل شوائب جيني على الإنتروبيا لأنها…",
                        "options": [
                                "أكثر دقة دائمًا",
                                "أسرع في الحساب",
                                "يحدها 1",
                                "مستندة في اللوغاريتمات"
                        ],
                        "answer": 1,
                        "explain": "Gini أسرع (بدون سجلات). كلاهما ينتج أشجارًا متشابهة."
                },
                {
                        "q": "تقوم الغابة العشوائية بالتنبؤ النهائي عن طريق…",
                        "options": [
                                "استخدام أعمق شجرة فقط",
                                "السماح للعديد من الأشجار بالتصويت والحصول على الأغلبية",
                                "اختيار شجرة عشوائية واحدة",
                                "حساب متوسط الميزات"
                        ],
                        "answer": 1,
                        "explain": "العديد منها متنوعة تصويت الأشجار؛ الأغلبية تفوز → تباين أقل، أكثر قوة."
                },
                {
                        "q": "الفائدة الرئيسية من الغابة العشوائية على شجرة واحدة هي…",
                        "options": [
                                "تدريب أسرع",
                                "تباين أقل وتجاوز أقل",
                                "يتطلب ميزات أقل",
                                "حجم ملف أصغر"
                        ],
                        "answer": 1,
                        "explain": "يؤدي دمج الأشجار إلى إلغاء الأخطاء الفردية، وتقليل التباين."
                },
                {
                        "q": "تبدو حدود شجرة القرار…",
                        "options": [
                                "منحنيات سلسة",
                                "صناديق / سلالم بزوايا قائمة",
                                "خطوط قطرية",
                                "دوائر"
                        ],
                        "answer": 1,
                        "explain": "تنقسم الأشجار إلى مستطيلات بمحاذاة المحور - شكل يشبه الخطوة."
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
          "quiz2": {
                    "title": "Chapter 2 Check",
                    "sub": "Tap an answer. You'll see instantly if it's right, plus a quick why."
          },
          "quiz3": {
                    "title": "Chapter 3 Check",
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
          "quiz2": {
                    "title": "مراجعة الفصل 2",
                    "sub": "اضغط على الإجابة، وستعرف فورًا إن كانت صحيحة مع سبب سريع."
          },
          "quiz3": {
                    "title": "مراجعة الفصل 3",
                    "sub": "اضغط على الإجابة لمعرفة إن كانت صحيحة ولماذا."
          }
}
      }
    }
  });
})();
