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
    ["#ch6", "chapter-head-1"],
    ["#ch7", "chapter-head-2"],
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
      ar: "AI3011 - مذاكرة سريعة للاختبار - الفصلان 6 و7"
    },
    translations: {
      html: {
        "site-nav-label": "أدلة الدراسة",
        "site-nav-links": "\n<a href=\"index.html\">الصفحة الرئيسية</a>\n<a href=\"ai-study-guide-ch2-3.html\">السلاسل 2-3</a>\n<a href=\"ai-study-guide-ch4-5.html\">السلاسل 4-5</a>\n<a class=\"current\" href=\"ai-study-guide-ch6-7.html\">السلاسل 6-7</a>\n",
        "hero-tag": "AI3011 · الاختبار النهائي",
        "hero-title": "دليل الدراسة السريع",
        "hero-copy": "الفصلان 6 و7 — المفاهيم فقط، بدون عمليات حسابية ثقيلة",
        "page-nav": "\n<a href=\"#ch6\">الفصل 6: تقليل الأبعاد</a>\n<a href=\"#quiz6\">الاختبار السادس</a>\n<a href=\"#ch7\">الفصل 7: الشبكات العصبية</a>\n<a href=\"#quiz7\">الاختبار السابع</a>\n",
        "chapter-head-1": "\n<span class=\"num\">الفصل السادس</span>\n<h2>التعلم غير الخاضع للرقابة - تقليل الأبعاد</h2>\n",
        "chapter-head-2": "\n<span class=\"num\">الفصل السابع</span>\n<h2>الشبكات العصبية وأساسيات التعلم العميق</h2>\n",
        "topic-1": "\n<h3><span class=\"dot\"></span>ماذا تعني \"الأبعاد\" هنا</h3>\n<p>البعد <b></b> هو مجرد <b>ميزة/عمود</b> في بياناتك. توجد مجموعة بيانات تحتوي على 100 عمود في \"100 بُعد\". يعني تقليل الأبعاد <b>ضغط العديد من الأعمدة في عدد قليل</b> مع الاحتفاظ بالمعلومات المهمة.</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>وصف شخص باستخدام 50 حقيقة (الطول، الوزن، العمر، الهوايات...). يمكن التعرف على معظم هوياتهم في بعض الحقائق الأساسية. احتفظ بالقليل الذي يهمك واترك الباقي.</p>\n</div>\n",
        "topic-2": "\n<h3><span class=\"dot\"></span>خاضع للإشراف مقابل غير خاضع للإشراف (تذكير سريع)</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>خاضع للإشراف</h4>\n<ul>\n<li>يحتوي على <b>تسميات</b> (إجابات)</li>\n<li>يتعلم المدخلات ← المخرجات المعروفة</li>\n<li>كانت الحلقتان 2 و3 هذا</li>\n</ul>\n</div>\n<div class=\"col\">\n<h4>غير خاضع للرقابة</h4>\n<ul>\n<li><b>بدون تسميات</b></li>\n<li>يبحث عن بنية مخفية بمفردها</li>\n<li>هذا الفصل هو</li>\n</ul>\n</div>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>تقليل الأبعاد هو <b>غير خاضعة للرقابة</b> — لا يوجد مفتاح إجابة. فهو يقوم فقط بإعادة تنظيم البيانات في شكل أصغر وأنظف.</p>\n</div>\n",
        "topic-3": "\n<h3><span class=\"dot\"></span>لعنة الأبعاد</h3>\n<p>المشكلة الكبيرة التي يحلها هذا الفصل: عندما تحتوي البيانات على <b>ميزات كثيرة جدًا</b>، تصبح النماذج أسوأ وأبطأ ويصعب الثقة بها.</p>\n<ul>\n<li><b>تناثر البيانات</b> - تنتشر النقاط بعيدًا عن بعضها البعض لدرجة أن \"الجيران\" تصبح فارغة. تختفي الأنماط.</li>\n<li><b>تركيز المسافة</b> - كل شيء ينتهي به الأمر على نفس المسافة تقريبًا، لذلك يتوقف \"الأقرب\" عن أي شيء.</li>\n<li><b>الانفجار الحسابي</b> - المزيد من الميزات = المزيد من الذاكرة والوقت.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>من السهل العثور على صديق في غرفة صغيرة. في ملعب فارغ عملاق، يكون الجميع \"بعيدين\" ويصعب الوصول إليهم بنفس القدر. المساحة الإضافية (الأبعاد) تجعل كل شيء يبدو منتشرًا ومتشابهًا.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>المزيد من الميزات ≠ أفضل. بعد نقطة ما، تضيف الميزات الإضافية <b>ضوضاء</b>، وتتسبب في <b>التركيب الزائد</b>، وتجعل من المستحيل تصور البيانات (لا يمكننا رؤية سوى ثنائي الأبعاد/ثلاثي الأبعاد).</p>\n</div>\n",
        "topic-4": "\n<h3><span class=\"dot\"></span>الهدفان</h3>\n<ul>\n<li><b>ميزات أقل</b> - قلل عدد الأعمدة.</li>\n<li><b>البنية المحفوظة</b> - ولكن احتفظ بالعلاقات ذات المغزى (ما يشبه ماذا).</li>\n</ul>\n<p>هناك <b>ثلاثة مجموعات</b> من الأساليب: <b>خطية</b> (PCA)، <b>غير خطية</b> (t-SNE، UMAP)، و<b>عصبية</b> (أجهزة التشفير التلقائي).</p>\n",
        "topic-5": "\n<h3><span class=\"dot\"></span>PCA (تحليل المكونات الرئيسية)</h3>\n<p>الطريقة الأكثر شيوعًا. فهو يعثر على الاتجاهات التي <b>تتنوع فيها البيانات بشكل أكبر</b> ويحتفظ بها، مما يؤدي إلى إسقاط الاتجاهات المملة منخفضة التباين. إنها <b>خطية</b> (تعمل مع العلاقات المستقيمة) و<b>حتمية</b> (نفس الإدخال ← نفس المخرجات في كل مرة).</p>\n<ul>\n<li><b>تعظيم التباين</b> — احتفظ بالاتجاهات التي تحمل أكبر قدر من الأهمية information.</li>\n<li><b>إزالة التكرار</b> — دمج الميزات التي تقول نفس الشيء سرًا.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>تصوير كرسي. أنت تختار بشكل غريزي الزاوية التي تظهر أكبر قدر من التفاصيل، وليس الجانب المسطح الذي يخفي شكله. يختار PCA \"الزوايا\" (الاتجاهات) التي تكشف معظم معلومات بياناتك.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر - قاعدة \"المرفق\"</span>\n<p>ارسم مقدار المعلومات التي يضيفها كل مكون. اختر الرقم الموجود في <b>الكوع</b>، حيث لا تساعد إضافة المزيد إلا بالكاد. غالبًا ما تلتقط بعض المكونات <b>90%+</b> من المعلومات.</p>\n</div>\n",
        "topic-6": "\n<h3><span class=\"dot\"></span>PCA - نقاط القوة والحدود</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>نقاط القوة</h4>\n<ul><li>سريعة وقابلة للتطوير</li><li>حتمية (قابلة للتكرار)</li><li>قابلة للتفسير</li></ul>\n</div>\n<div class=\"col\">\n<h4>حدود</h4>\n<ul><li><b>خطية فقط</b></li><li>يفتقد الأشكال المنحنية/الملتوية</li><li>يمكن أن يشوه المجموعات المحلية</li></ul>\n</div>\n</div>\n<div class=\"ex\">\n<span class=\"lbl\">الكلمات الصعبة أصبحت سهلة</span>\n<p><b>التباين</b> = مدى انتشار البيانات. التباين العالي = الكثير من الاختلافات المفيدة للتعلم منها. <b>خطي</b> = أنماط الخطوط المستقيمة فقط؛ ولا يمكن أن يتبع منحنى.</p>\n</div>\n",
        "topic-7": "\n<h3><span class=\"dot\"></span>t-SNE (تصور غير خطي)</h3>\n<p>مصمم لمهمة واحدة: إنشاء <b>صورة ثنائية الأبعاد</b> تكشف عن <b>مجموعات</b>. فهو يحافظ على النقاط التي كانت قريبة من بعضها البعض في الأبعاد العالية قريبة من بعضها البعض في الصورة. رائعة <b>لرؤية</b> المجموعات، وليس لإدخالها في نموذج آخر.</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>مثل جلوس الضيوف في حفل زفاف: يجلس الأصدقاء المتوافقون معًا على نفس الطاولة. يقوم t-SNE بتجميع نقاط البيانات المتشابهة في \"جداول\" (مجموعات) مرئية.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>t-SNE <b>بطيء</b> في البيانات الضخمة ويحتفظ فقط بالبنية <b>المحلية</b> - <b>المسافة بين المجموعات ليست ذات معنى</b>. استخدمه للاستكشاف/التصور، وليس للقياس.</p>\n</div>\n",
        "topic-8": "\n<h3><span class=\"dot\"></span>UMAP (الترقية الحديثة)</h3>\n<p>هدف مشابه لـ t-SNE (خريطة ثنائية وثلاثية الأبعاد للبيانات) ولكنه <b>أسرع</b> ويحافظ على بنية <b>المحلية والعالمية</b> - لذا فإن المسافات بين المجموعات تعني المزيد.</p>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>t-SNE</h4>\n<ul><li>بطيء في البيانات الكبيرة</li><li>البنية المحلية فقط</li><li>مجموعات جميلة</li></ul>\n</div>\n<div class=\"col\">\n<h4>UMAP</h4>\n<ul><li><b>سريع</b>، يتسع للملايين</li><li>هيكل <b>+ عالمي</b></li><li>تباعد أفضل بين المجموعات</li></ul>\n</div>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>كلاهما <b>عشوائي</b> (عشوائي) - مجموعة بذرة للحصول على نتائج متكررة. يفوز UMAP بشكل عام في <b>السرعة</b> و<b>البنية</b>.</p>\n</div>\n",
        "topic-9": "\n<h3><span class=\"dot\"></span>أجهزة التشفير التلقائي (طريقة عصبية)</h3>\n<p>شبكة عصبية <b>تضغط البيانات عبر وسط ضيق</b> (عنق الزجاجة)، ثم تحاول إعادة بناء النسخة الأصلية من تلك النسخة المضغوطة. يضطر الوسط الضيق إلى تعلم الملخص الأكثر أهمية.</p>\n<ul>\n<li><b>المشفر</b> — يضغط الإدخال لأسفل.</li>\n<li><b>المساحة الكامنة (عنق الزجاجة)</b> - الملخص المضغوط الصغير.</li>\n<li><b>وحدة فك التشفير</b> — يعيد بناء الأصل من ملخص.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>تلخيص فيلم في جملة واحدة، ثم يحاول أحد الأصدقاء إعادة بناء الحبكة من جملتك. إذا استطاعوا، فقد احتفظ ملخصك بالأجزاء المهمة. \"الجملة الواحدة\" هي المساحة الكامنة.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>إنها تتعلم عن طريق تقليل <b>خطأ إعادة البناء</b> (مدى اختلاف الناتج المعاد بناؤه عن الأصل). جهاز تشفير تلقائي خطي بدون تنشيط = PCA بشكل أساسي. مع الطبقات غير الخطية، تكون <b>أقوى</b> من PCA.</p>\n</div>\n",
        "topic-10": "\n<h3><span class=\"dot\"></span>متغيرات وحدة التشفير التلقائي (اعرف الأسماء فقط)</h3>\n<ul>\n<li><b>متفرقة</b> — تجعل معظم الملخص صفرًا ← ميزات أكثر وضوحًا وبساطة.</li>\n<li><b>تقليل الضوضاء</b> - أعطه مدخلات فوضوية، واطلب إخراجًا نظيفًا ← تعلم ميزات قوية.</li>\n<li><b>التنوع (VAE)</b> — يتعلم <b>التوزيع</b>، حتى يتمكن من <b>إنشاء بيانات</b> جديدة ← جسر إلى الذكاء الاصطناعي التوليدي.</li>\n</ul>\n",
        "topic-11": "\n<h3><span class=\"dot\"></span>اختيار الطريقة الصحيحة</h3>\n<ul>\n<li><b>هل تحتاج إلى شرح ذلك/قابلية التفسير؟</b> → PCA</li>\n<li><b>هل تريد فقط صورة ثنائية الأبعاد للمجموعات؟</b> → t-SNE أو UMAP</li>\n<li><b>مجموعة بيانات كبيرة؟</b> → UMAP أو Autoencoder (t-SNE يكافح بعد 50 ألف نقطة تقريبًا)</li>\n<li><b>استخراج الميزات لنموذج آخر؟</b> → PCA أو Autoencoder</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر - الغش السريع</span>\n<p>PCA = سريع وقابل للتفسير. t-SNE/UMAP = التصور. التشفير التلقائي = مرن وقوي. عادةً ما يكون PCA هو المحاولة الصحيحة <b>المحاولة الأولى</b>.</p>\n</div>\n",
        "topic-12": "\n<h3><span class=\"dot\"></span>جزء الأخلاقيات (نقطة الاختبار المحتملة)</h3>\n<ul>\n<li><b>التحيز الخفي</b> - قد تتضمن المعلومات التي تتخلص منها مجموعات محمية؛ يمكن أن تختفي مشكلات العدالة من العرض دون ترك النموذج.</li>\n<li><b>التشويه الهيكلي</b> — المخططات ثنائية الأبعاد دائمًا ما تكون مشوهة. المجموعات التي تبدو منفصلة قد تتداخل في الواقع.</li>\n<li><b>المرئيات المضللة</b> — يمكن للحبكة الجميلة أن تخلق ثقة زائفة. اسأل دائماً عما بقي وماذا ضاع.</li>\n</ul>\n",
        "topic-13": "\n<h3><span class=\"dot\"></span>البيانات المنظمة مقابل البيانات غير المنظمة</h3>\n<p>تتمثل القوة العظمى للتعلم العميق في التعامل مع <b>البيانات الأولية الفوضوية</b> مباشرة.</p>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>الهيكلية</h4>\n<ul><li>جداول/أعمدة مرتبة</li><li>تحتوي كل ميزة على معنى واضح</li><li>يتعامل تعلم الآلة الكلاسيكي معها</li></ul>\n</div>\n<div class=\"col\">\n<h4>غير منظم</h4>\n<ul><li>صور وصوت ونص مجاني</li><li>وحدات البكسل الأولية لا تعني شيئًا بمفردها</li><li>التعلم العميق يتألق هنا</li></ul>\n</div>\n</div>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>جدول بيانات لحقائق الطيور = منظم. مجلد الطيور <em>الصور</em> = غير منظم. يمكن للتعلم العميق أن يتعلم مباشرة من الصور دون وضع علامة يدوية على كل ميزة.</p>\n</div>\n",
        "topic-14": "\n<h3><span class=\"dot\"></span>الخلايا العصبية البيولوجية مقابل الخلايا العصبية الاصطناعية</h3>\n<p>الخلايا العصبية الاصطناعية <b>مستوحاة بشكل فضفاض</b> من خلايا الدماغ، ولكنها مجرد <b>رياضيات</b> - وليست عمليات محاكاة حقيقية.</p>\n<ul>\n<li><b>دماغ الخلية العصبية:</b> تحصل على إشارات، و\"تطلق\" إذا تجاوزت الحد.</li>\n<li><b>الخلايا العصبية الاصطناعية:</b> تأخذ أرقامًا، وتضرب كل منها بـ <b>بالوزن</b>، ثم تجمعها، وتضيف <b>تحيزًا</b>، ثم يمرر النتيجة من خلال <b>وظيفة التنشيط</b>.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>تحديد ما إذا كنت تريد الخروج أم لا. المدخلات: الطقس، المزاج، وقت الفراغ. أنت تزن كل واحد منها (الطقس هو الأهم)، ثم تضيفها، وإذا تجاوز المجموع خط \"يستحق كل هذا العناء\"، فابدأ. هذه خلية عصبية.</p>\n</div>\n",
        "topic-15": "\n<h3><span class=\"dot\"></span>الأوزان والتحيز (الأجزاء القابلة للتعلم)</h3>\n<ul>\n<li><b>الوزن</b> — ما مدى <b>أهمية</b> الإدخال. الوزن الكبير = التأثير الكبير.</li>\n<li><b>التحيز</b> - دفعة تتيح للخلايا العصبية إطلاق النار حتى عندما تكون المدخلات صفرًا؛ يغير خط القرار.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>الأوزان والتحيزات هي بالضبط ما <b>يضبطه التدريب</b>. \"التعلم\" = العثور على أفضل الأوزان والتحيزات.</p>\n</div>\n",
        "topic-16": "\n<h3><span class=\"dot\"></span>خلية عصبية واحدة = الانحدار اللوجستي</h3>\n<p>الخلية العصبية المفردة ذات الشكل السيني هي حرفيًا <b>الانحدار اللوجستي</b> مُصنف (من الفصل 3). إن تكديس العديد من الخلايا العصبية في طبقات هو ما يجعل الشبكة العصبية حقيقية.</p>\n",
        "topic-17": "\n<h3><span class=\"dot\"></span>الإدراك الحسي متعدد الطبقات (MLP)</h3>\n<p>الشبكة العصبية الأساسية. يتم تنظيم الخلايا العصبية في <b>طبقات</b>، وتتصل كل خلية عصبية بكل خلية عصبية في الطبقة التالية (<b>متصلة بالكامل</b>). تتدفق البيانات في اتجاه واحد: <b>للأمام</b>.</p>\n<ul>\n<li><b>طبقة الإدخال</b> — تتلقى الميزات الأولية (بدون حسابات، فقط تمرر القيم).</li>\n<li><b>الطبقات المخفية</b> — طبقات \"التفكير\" التي تتعلم الأنماط. المزيد من الطبقات = <b>شبكة</b> عميقة.</li>\n<li><b>طبقة الإخراج</b> - تعطي الإجابة النهائية (خلية عصبية واحدة لنعم/لا، وخلايا عصبية K لفئات K).</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">الكلمات الصعبة أصبحت سهلة</span>\n<p><b>سطحية</b> الشبكة = 1-2 طبقات مخفية. <b>شبكة عميقة</b> = العديد من الطبقات المخفية، تتعلم كل منها فكرة أكثر تجريدًا (الحواف → الأشكال → الوجوه). وهذا العمق هو \"العمق\" في التعلم العميق.</p>\n</div>\n",
        "topic-18": "\n<h3><span class=\"dot\"></span>عد المعلمات (خدعة الاختبار الشائعة)</h3>\n<p>كل اتصال له <b>وزن</b>; تحتوي كل خلية عصبية (باستثناء المدخلات) على <b>تحيز</b>.</p>\n<ul>\n<li><b>الأوزان بين طبقتين</b> = (خلايا عصبية في الطبقة A) × (خلايا عصبية في الطبقة B).</li>\n<li><b>تحيزات</b> = واحد لكل خلية عصبية في الطبقة المستقبلة الطبقة.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>الإدخال 3 → مخفي 4: الأوزان = 3 × 4 = <b>12</b>، بالإضافة إلى <b>4</b> متحيزة. مخفي 4 → الإخراج 2: الأوزان = 4 × 2 = <b>8</b>، بالإضافة إلى <b>2</b> التحيزات. الإجمالي = 12 + 4 + 8 + 2 = <b>26 معلمة</b>.</p>\n</div>\n",
        "topic-19": "\n<h3><span class=\"dot\"></span>سبب أهمية وظائف التنشيط</h3>\n<p>بدونها، لا يكون تكديس الطبقات مجديًا - فالعديد من الطبقات الخطية تنهار إلى <b>خط مستقيم واحد</b>. تضيف وظائف التنشيط <b>اللاخطية</b>، مما يسمح للشبكة بتعلم الأنماط المعقدة والمنحنية.</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>لا يمكن أبدًا لخلط المساطر المستقيمة فقط رسم دائرة. أنت بحاجة إلى أداة ملتوية. وظائف التنشيط هي تلك الأداة المرنة - فهي تسمح بمنحنى الشبكة.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>لا يوجد تنشيط = بغض النظر عن عدد الطبقات، فإنك تحصل فقط على <b>نموذج خطي</b>. اللاخطية هي ما يجعل العمق جديرًا بالاهتمام.</p>\n</div>\n",
        "topic-20": "\n<h3><span class=\"dot\"></span>وظائف التنشيط الثلاث</h3>\n<ul>\n<li><b>ReLU</b> — يحتفظ بالإيجابيات، ويحول السلبيات إلى 0. رخيص وسريع. <b>الافتراضي للطبقات المخفية.</b> الخطر: \"احتضار ReLU\" (الخلايا العصبية عالقة عند 0).</li>\n<li><b>Sigmoid</b> - يتم ضغطه إلى 0–1. مناسب لـ <b>مخرجات احتمالية نعم/لا</b>. ضعيف في الطبقات المخفية (تلاشي التدرج).</li>\n<li><b>Softmax</b> — يحول النتائج إلى احتمالات <b>تضيف ما يصل إلى 1</b>. يُستخدم مع <b>الإخراج متعدد الفئات</b>.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر - القاعدة الأساسية</span>\n<p><b>ReLU</b> في الطبقات المخفية · <b>السيني</b> للإخراج الثنائي · <b>Softmax</b> للمخرجات متعددة الفئات.</p>\n</div>\n",
        "topic-21": "\n<h3><span class=\"dot\"></span>دالة الخسارة (ما مدى خطأ ذلك)</h3>\n<p>درجة لمدى سوء التوقعات. يحاول التدريب جعلها صغيرة قدر الإمكان.</p>\n<ul>\n<li><b>MSE</b> (متوسط الخطأ التربيعي) - من أجل <b>الانحدار</b> (تنبؤات الأرقام).</li>\n<li><b>الإنتروبيا المتقاطعة</b> - من أجل <b>التصنيف</b> (توقعات الفئة).</li>\n</ul>\n",
        "topic-22": "\n<h3><span class=\"dot\"></span>الانتشار العكسي (كيف يتعلم)</h3>\n<p>خوارزمية التعلم الأساسية. بعد التخمين، يعمل <b>رجوعًا</b> من الخطأ لمعرفة مقدار مساهمة كل وزن في الخطأ، ثم يدفع كل وزن إلى أداء أفضل في المرة القادمة.</p>\n<ul>\n<li><b>1. تمريرة أمامية</b> — قم بالتنبؤ.</li>\n<li><b>2. الخسارة</b> — قم بقياس مدى الخطأ الذي حدث.</li>\n<li><b>3. التمريرة الخلفية</b> — تتبع اللوم لكل وزن.</li>\n<li><b>4. تحديث الوزن</b> — اضبط الأوزان قليلًا في الاتجاه الصحيح.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>أخطأت تسديدة كرة السلة الجهة اليسرى. يمكنك تتبع سبب ذلك (زاوية المعصم، والطاقة) وضبط كل منهما قليلاً. كرر آلاف المرات → تحصل على الخير. هذا هو backprop.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>يستخدم Backprop <b>قاعدة السلسلة</b> لإلقاء اللوم بشكل عكسي. يتحكم <b>معدل التعلم</b> في مدى حجم كل تعديل.</p>\n</div>\n",
        "topic-23": "\n<h3><span class=\"dot\"></span>المُحسِّنون: SGD vs Adam</h3>\n<p>يقرر المُحسِّن <b>كيفية</b> لتحديث الأوزان باستخدام التدرجات.</p>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>SGD</h4>\n<ul><li>تحديثات بسيطة على دفعات صغيرة</li><li>غالبًا ما تكون الأفضل <b>النتيجة النهائية</b></li><li>تحتاج إلى ضبط دقيق</li></ul>\n</div>\n<div class=\"col\">\n<h4>آدم</h4>\n<ul><li>يتكيف مع حجم الخطوة لكل وزن</li><li><b>سريع</b>، ويعمل خارج الصندوق</li><li>اختيار افتراضي رائع</li></ul>\n</div>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>سير العمل المشترك: ابدأ بـ <b>Adam</b> للحصول على نتائج سريعة، ثم انتقل إلى <b>SGD</b> للحصول على أفضل نتيجة نهائية الأداء.</p>\n</div>\n",
        "topic-24": "\n<h3><span class=\"dot\"></span>كلمات المناظر الطبيعية (تعريفات سريعة)</h3>\n<ul>\n<li><b>الحد الأدنى المحلي</b> — نقطة منخفضة ليست الأدنى بشكل عام.</li>\n<li><b>نقطة السرج</b> — نقطة مسطحة ليست الحد الأدنى؛ يساعد الزخم على الهروب منه.</li>\n<li><b>معدل التعلم</b> — الإعداد الأكثر أهمية. كبير جدًا → يتباعد؛ صغير جدًا → بطيء جدًا.</li>\n<li><b>التجاوز</b> — حفظ بيانات التدريب. الإصلاحات: التسرب، L2، زيادة البيانات، التوقف المبكر.</li>\n</ul>\n",
        "topic-25": "\n<h3><span class=\"dot\"></span>جزء الأخلاقيات (نقطة الاختبار المحتملة)</h3>\n<ul>\n<li><b>التحيز</b> يدخل من بيانات التدريب المنحرفة، والتسميات المتحيزة، وميزات الوكيل (مثل الرمز البريدي)، وحلقات التغذية الراجعة.</li>\n<li><b>مشكلة الصندوق الأسود</b> - يصعب تفسير الشبكات العميقة؛ لا يمكنك أن تسأل بسهولة \"لماذا؟\".</li>\n<li><b>الحلول</b> - أدوات قابلة للشرح (SHAP وLIME)، وتصميمات قابلة للتفسير، ووثائق نموذجية واضحة. تتطلب قوانين مثل قانون الاتحاد الأوروبي للذكاء الاصطناعي تفسيرات للذكاء الاصطناعي عالي الخطورة.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>التحيز والغموض <b>مسؤوليات هندسية</b>، وليست أفكارًا لاحقة.</p>\n</div>\n",
        "footer": "\n<p>لقد أوشكت على الانتهاء. راجع المربعات الكهرمانية <b>تذكر</b> المربعات مرة أخيرة قبل الاختبار.</p>\n<div class=\"pill-row\">\n<span class=\"pill\">PCA = سريع وخطي</span>\n<span class=\"pill\">UMAP &gt; t-SNE على السرعة</span>\n<span class=\"pill\">ReLU مخفي، مخرج Softmax</span>\n<span class=\"pill\">Backprop = إلقاء اللوم على الخلف</span>\n</div>\n<a class=\"top-link\" href=\"#\">↑ العودة إلى الأعلى</a>\n"
}
    },
    quizzes: {
      en: {
        "quiz6": [
                {
                        "q": "What does a 'dimension' mean in this chapter?",
                        "options": [
                                "A row of data",
                                "A feature/column in the data",
                                "A type of model",
                                "A neural layer"
                        ],
                        "answer": 1,
                        "explain": "A dimension is just a feature (column). 100 columns = 100 dimensions."
                },
                {
                        "q": "Dimensionality reduction is which type of learning?",
                        "options": [
                                "Supervised",
                                "Unsupervised",
                                "Reinforcement",
                                "Semi-supervised"
                        ],
                        "answer": 1,
                        "explain": "There are no labels — it just reorganizes data into a smaller form."
                },
                {
                        "q": "Which is NOT one of the three curse-of-dimensionality problems?",
                        "options": [
                                "Data sparsity",
                                "Distance concentration",
                                "Computational explosion",
                                "Faster training"
                        ],
                        "answer": 3,
                        "explain": "More dimensions make things slower, not faster. The three problems are sparsity, distance concentration, and compute explosion."
                },
                {
                        "q": "'Distance concentration' means…",
                        "options": [
                                "All points end up roughly equally far apart",
                                "Points get closer together",
                                "Distances become negative",
                                "Data shrinks to one point"
                        ],
                        "answer": 0,
                        "explain": "In high dimensions everything is about the same distance, so 'nearest neighbor' loses meaning."
                },
                {
                        "q": "PCA keeps the directions with the most…",
                        "options": [
                                "Labels",
                                "Variance",
                                "Noise",
                                "Neurons"
                        ],
                        "answer": 1,
                        "explain": "PCA maximizes variance — it keeps the most informative directions and drops the rest."
                },
                {
                        "q": "A key strength of PCA is that it is…",
                        "options": [
                                "Nonlinear",
                                "Random each run",
                                "Deterministic and interpretable",
                                "Only for images"
                        ],
                        "answer": 2,
                        "explain": "Same input → same output, and components are explicit combinations of features."
                },
                {
                        "q": "The biggest limitation of PCA is…",
                        "options": [
                                "It's too slow",
                                "It only captures linear (straight-line) patterns",
                                "It needs labels",
                                "It can't reduce features"
                        ],
                        "answer": 1,
                        "explain": "PCA is linear, so it misses curved/twisted manifold structure."
                },
                {
                        "q": "t-SNE is mainly used for…",
                        "options": [
                                "Feature extraction for models",
                                "Visualizing clusters in 2D",
                                "Speeding up training",
                                "Generating new data"
                        ],
                        "answer": 1,
                        "explain": "t-SNE makes a 2D picture that reveals clusters. It's for exploring, not measuring."
                },
                {
                        "q": "A warning about t-SNE plots is that…",
                        "options": [
                                "Distances between clusters are NOT meaningful",
                                "They always overfit",
                                "They need labels",
                                "They delete features"
                        ],
                        "answer": 0,
                        "explain": "t-SNE only preserves local structure; gaps between clusters shouldn't be read as real distances."
                },
                {
                        "q": "Compared to t-SNE, UMAP is generally…",
                        "options": [
                                "Slower and less accurate",
                                "Faster and keeps local + global structure",
                                "Only for small data",
                                "The same thing"
                        ],
                        "answer": 1,
                        "explain": "UMAP scales to millions of points and preserves both local and global structure."
                },
                {
                        "q": "In an autoencoder, the narrow middle is called the…",
                        "options": [
                                "Encoder",
                                "Latent space (bottleneck)",
                                "Decoder",
                                "Output layer"
                        ],
                        "answer": 1,
                        "explain": "The bottleneck/latent space is the compressed summary the network is forced to learn."
                },
                {
                        "q": "A linear autoencoder with no activation behaves like…",
                        "options": [
                                "t-SNE",
                                "PCA",
                                "A random forest",
                                "Softmax"
                        ],
                        "answer": 1,
                        "explain": "Without non-linearity it converges to the same solution as PCA."
                },
                {
                        "q": "Which autoencoder variant can GENERATE new data?",
                        "options": [
                                "Sparse",
                                "Denoising",
                                "Variational (VAE)",
                                "Standard"
                        ],
                        "answer": 2,
                        "explain": "A VAE learns a distribution, so you can sample new points — a bridge to generative AI."
                },
                {
                        "q": "Need an interpretable method you can explain? Pick…",
                        "options": [
                                "t-SNE",
                                "PCA",
                                "UMAP",
                                "Denoising autoencoder"
                        ],
                        "answer": 1,
                        "explain": "PCA components are explicit and explainable; the others are more black-box."
                }
        ],
        "quiz7": [
                {
                        "q": "Deep learning's big advantage is handling…",
                        "options": [
                                "Only neat tables",
                                "Unstructured raw data like images and text",
                                "Only small datasets",
                                "Only numbers"
                        ],
                        "answer": 1,
                        "explain": "It learns features directly from raw, unstructured data — no manual feature engineering."
                },
                {
                        "q": "An artificial neuron multiplies each input by a… then adds them up.",
                        "options": [
                                "Label",
                                "Weight",
                                "Cluster",
                                "Pixel"
                        ],
                        "answer": 1,
                        "explain": "Weights = importance of each input. It sums them, adds bias, then applies activation."
                },
                {
                        "q": "What does the bias term do?",
                        "options": [
                                "Deletes features",
                                "Lets the neuron fire even when all inputs are 0",
                                "Speeds up the GPU",
                                "Counts the layers"
                        ],
                        "answer": 1,
                        "explain": "Bias shifts the decision line, allowing activation even with zero input."
                },
                {
                        "q": "A single neuron with a sigmoid is equivalent to…",
                        "options": [
                                "A random forest",
                                "Logistic regression",
                                "PCA",
                                "An autoencoder"
                        ],
                        "answer": 1,
                        "explain": "One sigmoid neuron is literally a logistic regression classifier."
                },
                {
                        "q": "What makes a network 'deep'?",
                        "options": [
                                "Many input features",
                                "Many hidden layers",
                                "A large learning rate",
                                "Using SGD"
                        ],
                        "answer": 1,
                        "explain": "Depth = number of hidden layers. Each learns a more abstract representation."
                },
                {
                        "q": "Weights between a 3-neuron and a 4-neuron layer =",
                        "options": [
                                "7",
                                "12",
                                "34",
                                "4"
                        ],
                        "answer": 1,
                        "explain": "3 × 4 = 12 weights (each connection is one weight)."
                },
                {
                        "q": "Without activation functions, a deep network is just…",
                        "options": [
                                "A single linear model",
                                "More accurate",
                                "A decision tree",
                                "Impossible to build"
                        ],
                        "answer": 0,
                        "explain": "Stacked linear layers collapse into one linear function — depth is wasted."
                },
                {
                        "q": "The default activation for hidden layers is…",
                        "options": [
                                "Sigmoid",
                                "Softmax",
                                "ReLU",
                                "None"
                        ],
                        "answer": 2,
                        "explain": "ReLU is cheap, fast, and avoids vanishing gradients — the hidden-layer default."
                },
                {
                        "q": "Which activation makes outputs that sum to 1 for multi-class?",
                        "options": [
                                "ReLU",
                                "Sigmoid",
                                "Softmax",
                                "MSE"
                        ],
                        "answer": 2,
                        "explain": "Softmax turns scores into a probability distribution that adds up to 1."
                },
                {
                        "q": "Which loss is used for classification?",
                        "options": [
                                "MSE",
                                "Cross-Entropy",
                                "R²",
                                "MAE"
                        ],
                        "answer": 1,
                        "explain": "Cross-Entropy is for categories; MSE is for regression (numbers)."
                },
                {
                        "q": "Backpropagation works by…",
                        "options": [
                                "Guessing weights randomly",
                                "Tracing the error backward to adjust each weight",
                                "Adding more layers",
                                "Removing features"
                        ],
                        "answer": 1,
                        "explain": "It assigns blame backward (chain rule) and nudges each weight to reduce error."
                },
                {
                        "q": "Which optimizer is the fast, works-out-of-the-box default?",
                        "options": [
                                "SGD",
                                "Adam",
                                "Batch GD",
                                "None"
                        ],
                        "answer": 1,
                        "explain": "Adam adapts step sizes per weight and is the common starting choice."
                },
                {
                        "q": "A 'saddle point' is…",
                        "options": [
                                "The lowest point overall",
                                "A flat spot that isn't a minimum",
                                "A type of neuron",
                                "The output layer"
                        ],
                        "answer": 1,
                        "explain": "Flat region where the gradient is ~0 but it's not a minimum; momentum helps escape it."
                },
                {
                        "q": "The 'black box problem' in neural networks refers to…",
                        "options": [
                                "They run on dark servers",
                                "They're hard to explain / interpret",
                                "They only work at night",
                                "They need no data"
                        ],
                        "answer": 1,
                        "explain": "Millions of weights make it hard to explain decisions. SHAP/LIME help, and laws may require explanations."
                }
        ]
},
      ar: {
        "quiz6": [
                {
                        "q": "ماذا يعني \"البعد\" في هذا الفصل؟",
                        "options": [
                                "صف من البيانات",
                                "ميزة/عمود في البيانات",
                                "نوع النموذج",
                                "طبقة عصبية"
                        ],
                        "answer": 1,
                        "explain": "البعد هو مجرد ميزة (عمود). 100 عمود = 100 بُعد."
                },
                {
                        "q": "أي نوع من أنواع التعلم هو تقليل الأبعاد؟",
                        "options": [
                                "خاضع للإشراف",
                                "غير خاضع للإشراف",
                                "التعزيز",
                                "شبه خاضع للإشراف"
                        ],
                        "answer": 1,
                        "explain": "لا توجد تسميات - إنها فقط تعيد تنظيم البيانات في شكل أصغر."
                },
                {
                        "q": "أيها ليس أحد مشاكل لعنة الأبعاد الثلاث؟",
                        "options": [
                                "تناثر البيانات",
                                "التركيز عن بعد",
                                "الانفجار الحسابي",
                                "تدريب أسرع"
                        ],
                        "answer": 3,
                        "explain": "المزيد من الأبعاد يجعل الأمور أبطأ وليس أسرع. المشاكل الثلاث هي التشتت، وتركيز المسافة، والانفجار الحسابي."
                },
                {
                        "q": "يعني \"تركيز المسافة\"…",
                        "options": [
                                "تنتهي جميع النقاط متباعدة بشكل متساوٍ تقريبًا",
                                "تقترب النقاط من بعضها البعض",
                                "تصبح المسافات سالبة",
                                "تتقلص البيانات إلى نقطة واحدة"
                        ],
                        "answer": 0,
                        "explain": "في الأبعاد العالية، يكون كل شيء على نفس المسافة تقريبًا، لذلك يفقد \"أقرب جار\" معناه."
                },
                {
                        "q": "يحتفظ PCA بالاتجاهات مع معظم…",
                        "options": [
                                "التسميات",
                                "التباين",
                                "الضوضاء",
                                "الخلايا العصبية"
                        ],
                        "answer": 1,
                        "explain": "يعمل PCA على زيادة التباين إلى الحد الأقصى - فهو يحتفظ بالتوجيهات الأكثر إفادة ويسقط الباقي."
                },
                {
                        "q": "تتمثل القوة الرئيسية لـ PCA في أنه…",
                        "options": [
                                "غير خطي",
                                "عشوائي لكل تشغيل",
                                "حتمي وقابل للتفسير",
                                "فقط لـ الصور"
                        ],
                        "answer": 2,
                        "explain": "نفس الإدخال ← نفس المخرجات، والمكونات عبارة عن مجموعات واضحة من الميزات."
                },
                {
                        "q": "أكبر قيود PCA هي…",
                        "options": [
                                "إنه بطيء جدًا",
                                "إنه يلتقط فقط الأنماط الخطية (الخط المستقيم)",
                                "يحتاج إلى تسميات",
                                "لا يمكن أن يقلل الميزات"
                        ],
                        "answer": 1,
                        "explain": "PCA خطي، لذا فهو يفتقد البنية المتعددة المنحنية/الملتوية."
                },
                {
                        "q": "يُستخدم t-SNE بشكل أساسي في…",
                        "options": [
                                "استخراج الميزات للنماذج",
                                "تصور المجموعات في ثنائي الأبعاد",
                                "تسريع التدريب",
                                "إنشاء بيانات جديدة"
                        ],
                        "answer": 1,
                        "explain": "يقوم t-SNE بعمل صورة ثنائية الأبعاد تكشف عن المجموعات. إنه للاستكشاف وليس للقياس."
                },
                {
                        "q": "التحذير بشأن مخططات t-SNE هو أن…",
                        "options": [
                                "المسافات بين المجموعات ليست ذات معنى",
                                "إنها دائمًا ما تفرط في التناسب",
                                "تحتاج إلى تسميات",
                                "إنها تحذف الميزات"
                        ],
                        "answer": 0,
                        "explain": "t-SNE يحافظ فقط على البنية المحلية؛ لا ينبغي قراءة الفجوات بين المجموعات على أنها مسافات حقيقية."
                },
                {
                        "q": "بالمقارنة مع t-SNE، يعد UMAP بشكل عام…",
                        "options": [
                                "أبطأ وأقل دقة",
                                "أسرع ويحافظ على البنية المحلية والعالمية",
                                "فقط للبيانات الصغيرة",
                                "نفس الشيء"
                        ],
                        "answer": 1,
                        "explain": "يتوسع UMAP إلى ملايين النقاط ويحافظ على البنية المحلية والعالمية."
                },
                {
                        "q": "في جهاز التشفير التلقائي، يُطلق على الوسط الضيق اسم…",
                        "options": [
                                "جهاز التشفير",
                                "المساحة الكامنة (عنق الزجاجة)",
                                "وحدة فك التشفير",
                                "الإخراج الطبقة"
                        ],
                        "answer": 1,
                        "explain": "عنق الزجاجة/المساحة الكامنة هو الملخص المضغوط الذي تضطر الشبكة إلى تعلمه."
                },
                {
                        "q": "يتصرف جهاز التشفير التلقائي الخطي بدون تنشيط مثل…",
                        "options": [
                                "t-SNE",
                                "PCA",
                                "غابة عشوائية",
                                "Softmax"
                        ],
                        "answer": 1,
                        "explain": "بدون اللاخطية، فإنه يتقارب مع نفس الحل مثل PCA."
                },
                {
                        "q": "ما هو متغير جهاز التشفير التلقائي الذي يمكنه إنشاء بيانات جديدة؟",
                        "options": [
                                "متفرق",
                                "مزيل الضوضاء",
                                "متغير (VAE)",
                                "قياسي"
                        ],
                        "answer": 2,
                        "explain": "يتعلم VAE التوزيع، حتى تتمكن من أخذ عينات من نقاط جديدة - جسر إلى الذكاء الاصطناعي التوليدي."
                },
                {
                        "q": "هل تحتاج إلى طريقة قابلة للتفسير يمكنك شرحها؟ اختر…",
                        "options": [
                                "t-SNE",
                                "PCA",
                                "UMAP",
                                "جهاز التشفير التلقائي لتقليل الضوضاء"
                        ],
                        "answer": 1,
                        "explain": "مكونات PCA صريحة وقابلة للتفسير؛ أما الآخرون فهم أقرب إلى الصندوق الأسود."
                }
        ],
        "quiz7": [
                {
                        "q": "الميزة الكبيرة للتعلم العميق هي التعامل مع…",
                        "options": [
                                "الجداول الأنيقة فقط",
                                "البيانات الأولية غير المنظمة مثل الصور والنصوص",
                                "مجموعات البيانات الصغيرة فقط",
                                "الأرقام فقط"
                        ],
                        "answer": 1,
                        "explain": " تتعلم الميزات مباشرة من البيانات الأولية غير المنظمة - لا توجد ميزة يدوية الهندسة."
                },
                {
                        "q": "تضرب الخلية العصبية الاصطناعية كل مدخلات بـ... ثم تجمعها.",
                        "options": [
                                "التسمية",
                                "الوزن",
                                "الكتلة",
                                "البكسل"
                        ],
                        "answer": 1,
                        "explain": "الأوزان = أهمية كل مدخل. فهو يجمعها، ويضيف التحيز، ثم يطبق التنشيط."
                },
                {
                        "q": "ماذا يفعل مصطلح التحيز؟",
                        "options": [
                                "يحذف الميزات",
                                "يسمح للخلايا العصبية بالعمل حتى عندما تكون جميع المدخلات 0",
                                "يسرع وحدة معالجة الرسومات",
                                "يحسب الطبقات"
                        ],
                        "answer": 1,
                        "explain": "يعمل التحيز على تغيير خط القرار، مما يسمح بالتنشيط حتى مع عدم وجود مدخلات."
                },
                {
                        "q": "الخلية العصبية المفردة ذات السيني تعادل…",
                        "options": [
                                "غابة عشوائية",
                                "الانحدار اللوجستي",
                                "PCA",
                                "An autoencoder"
                        ],
                        "answer": 1,
                        "explain": "واحدة من الخلايا العصبية السينية هي حرفيًا مصنف انحدار لوجستي."
                },
                {
                        "q": "ما الذي يجعل الشبكة \"عميقة\"؟",
                        "options": [
                                "العديد من ميزات الإدخال",
                                "العديد من الطبقات المخفية",
                                "معدل تعلم كبير",
                                "استخدام SGD"
                        ],
                        "answer": 1,
                        "explain": "العمق = عدد الطبقات المخفية. يتعلم كل منهم تمثيلًا أكثر تجريدًا."
                },
                {
                        "q": "الأوزان بين الطبقة المكونة من 3 خلايا عصبية وطبقة مكونة من 4 خلايا عصبية =",
                        "options": [
                                "7",
                                "12",
                                "34",
                                "4"
                        ],
                        "answer": 1,
                        "explain": "3 × 4 = 12 وزنًا (لكل منهما) الاتصال هو وزن واحد)."
                },
                {
                        "q": "بدون وظائف التنشيط، تكون الشبكة العميقة مجرد…",
                        "options": [
                                "نموذج خطي واحد",
                                "أكثر دقة",
                                "شجرة قرارات",
                                "من المستحيل البناء"
                        ],
                        "answer": 0,
                        "explain": "تنهار الطبقات الخطية المكدسة في دالة خطية واحدة - العمق هو مهدر."
                },
                {
                        "q": "التنشيط الافتراضي للطبقات المخفية هو…",
                        "options": [
                                "Sigmoid",
                                "Softmax",
                                "ReLU",
                                "لا شيء"
                        ],
                        "answer": 2,
                        "explain": "ReLU رخيص وسريع ويتجنب اختفاء التدرجات - الطبقة المخفية default."
                },
                {
                        "q": "ما هو التنشيط الذي يجعل مخرجات مجموعها 1 للفئات المتعددة؟",
                        "options": [
                                "ReLU",
                                "Sigmoid",
                                "Softmax",
                                "MSE"
                        ],
                        "answer": 2,
                        "explain": "يحول Softmax النتائج إلى توزيع احتمالي يضيف ما يصل إلى 1."
                },
                {
                        "q": "ما هي الخسارة المستخدمة للتصنيف؟",
                        "options": [
                                "MSE",
                                "Cross-Entropy",
                                "R²",
                                "MAE"
                        ],
                        "answer": 1,
                        "explain": "Cross Entropy مخصص للفئات؛ MSE مخصص للانحدار (الأرقام)."
                },
                {
                        "q": "يعمل الانتشار العكسي عن طريق…",
                        "options": [
                                "تخمين الأوزان بشكل عشوائي",
                                "تتبع الخطأ للخلف لضبط كل وزن",
                                "إضافة المزيد من الطبقات",
                                "إزالة الميزات"
                        ],
                        "answer": 1,
                        "explain": "يعين اللوم بشكل عكسي (قاعدة السلسلة) ويدفع كل وزن لتقليل الخطأ."
                },
                {
                        "q": "أي مُحسِّن هو الإعداد الافتراضي السريع والجاهز؟",
                        "options": [
                                "SGD",
                                "Adam",
                                "Batch GD",
                                "لا شيء"
                        ],
                        "answer": 1,
                        "explain": "يكيف آدم أحجام الخطوات حسب الوزن وهو خيار البداية الشائع."
                },
                {
                        "q": "\"نقطة السرج\" هي…",
                        "options": [
                                "أدنى نقطة بشكل عام",
                                "نقطة مسطحة ليست بحد أدنى",
                                "نوع من الخلايا العصبية",
                                "طبقة الإخراج"
                        ],
                        "answer": 1,
                        "explain": "منطقة مسطحة حيث يكون التدرج ~0 ولكنه ليس الحد الأدنى؛ يساعد الزخم على الهروب منها."
                },
                {
                        "q": "تشير \"مشكلة الصندوق الأسود\" في الشبكات العصبية إلى…",
                        "options": [
                                "إنها تعمل على خوادم مظلمة",
                                "يصعب شرحها/تفسيرها",
                                "إنها تعمل فقط في الليل",
                                "لا تحتاج إلى بيانات"
                        ],
                        "answer": 1,
                        "explain": "ملايين البيانات الأوزان تجعل من الصعب تفسير القرارات. مساعدة SHAP/LIME، وقد تتطلب القوانين توضيحات."
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
          "quiz6": {
                    "title": "Chapter 6 Check",
                    "sub": "Tap an answer. You'll see instantly if it's right, plus a quick why."
          },
          "quiz7": {
                    "title": "Chapter 7 Check",
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
          "quiz6": {
                    "title": "مراجعة الفصل 6",
                    "sub": "اضغط على الإجابة، وستعرف فورًا إن كانت صحيحة مع سبب سريع."
          },
          "quiz7": {
                    "title": "مراجعة الفصل 7",
                    "sub": "اضغط على الإجابة لمعرفة إن كانت صحيحة ولماذا."
          }
}
      }
    }
  });
})();
