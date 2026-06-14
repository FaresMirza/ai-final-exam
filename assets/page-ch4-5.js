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
    ["#ch4", "chapter-head-1"],
    ["#ch5", "chapter-head-2"],
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
      ar: "AI3011 - مذاكرة سريعة للاختبار - الفصلان 4 و5"
    },
    translations: {
      html: {
        "site-nav-label": "أدلة الدراسة",
        "site-nav-links": "\n<a href=\"index.html\">الصفحة الرئيسية</a>\n<a href=\"ai-study-guide-ch2-3.html\">السلاسل 2-3</a>\n<a class=\"current\" href=\"ai-study-guide-ch4-5.html\">السلاسل 4-5</a>\n<a href=\"ai-study-guide-ch6-7.html\">السلاسل 6-7</a>\n",
        "hero-tag": "AI3011 · الاختبار النهائي",
        "hero-title": "دليل الدراسة السريع",
        "hero-copy": "الفصلان 4 و5 - المفاهيم فقط، بدون عمليات حسابية ثقيلة",
        "page-nav": "\n<a href=\"#ch4\">الفصل 4: SVM والمقاييس</a>\n<a href=\"#quiz4\">الاختبار الرابع</a>\n<a href=\"#ch5\">الفصل 5: التجميع</a>\n<a href=\"#quiz5\">الاختبار الخامس</a>\n",
        "chapter-head-1": "\n<span class=\"num\">الفصل الرابع</span>\n<h2>دعم الآلات المتجهة ومقاييس التقييم</h2>\n",
        "chapter-head-2": "\n<span class=\"num\">الفصل الخامس</span>\n<h2>التعلم غير الخاضع للرقابة - التجميع</h2>\n",
        "topic-1": "\n<h3><span class=\"dot\"></span>ما هو SVM؟</h3>\n<p>مصنف يرسم <b>أفضل خط فاصل</b> بين مجموعتين. بدلاً من مجرد <em>أي</em> خط يفصل بينهما، فإنه يختار الخط الذي يحتوي على <b>الفجوة الأوسع</b> على كلا الجانبين.</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>تخيل مجموعتين من الأطفال في الملعب. تريد رسم خط طباشيري بينهما حتى لا تتزاحم أي مجموعة ضده. يعثر SVM على الخط الذي يترك أكبر مساحة فارغة على كلا الجانبين - الفاصل الأكثر أمانًا.</p>\n</div>\n",
        "topic-2": "\n<h3><span class=\"dot\"></span>الهامش ومتجهات الدعم</h3>\n<ul>\n<li><b>الهامش:</b> الفجوة الفارغة بين الخط الفاصل وأقرب النقاط. يجعل SVM هذه الفجوة <b>واسعة</b> قدر الإمكان.</li>\n<li><b>متجهات الدعم:</b> أقرب النقاط القليلة التي \"تصمد\" الخط. هذه فقط هي المهمة - يمكنك حذف كل النقاط الأخرى والحصول على نفس السطر.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>مثل الطريق بين حيين. تحدد المنازل الموجودة على حافة الطريق مدى اتساعها. لا تؤثر المنازل البعيدة على ذلك على الإطلاق - تلك المنازل الطرفية هي \"ناقلات الدعم\".</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>هامش أوسع = أكثر ثقة وأكثر موثوقية في البيانات الجديدة. فقط <b>متجهات الدعم</b> (أقرب النقاط) هي التي تحدد الحدود.</p>\n</div>\n",
        "topic-3": "\n<h3><span class=\"dot\"></span>الهامش الثابت مقابل الهامش الناعم</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>الهامش الثابت</h4>\n<ul>\n<li>يسمح <b>بصفر</b> الأخطاء</li>\n<li>يحتاج إلى بيانات قابلة للفصل تمامًا</li>\n<li>فواصل مع ضوضاء/تداخل</li>\n</ul>\n</div>\n<div class=\"col\">\n<h4>الهامش الناعم</h4>\n<ul>\n<li>يسمح <b>بضعة</b> الأخطاء</li>\n<li>يتعامل مع البيانات الحقيقية الفوضوية</li>\n<li>أكثر عملية</li>\n</ul>\n</div>\n</div>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>الهامش الثابت هو المعلم الصارم الذي لا يقبل أي أخطاء - يعمل فقط إذا كان الفصل مثاليًا. الهامش الناعم هو المعلم العادل الذي يسمح ببعض الأخطاء وبالتالي تكون النتيجة الإجمالية أفضل في العالم الحقيقي الفوضوي.</p>\n</div>\n",
        "topic-4": "\n<h3><span class=\"dot\"></span>معلمة C (قرص الدقة)</h3>\n<p>تتحكم C في عدد الأخطاء التي يتحملها SVM أثناء رسم الخط.</p>\n<ul>\n<li><b>Small C</b> → مريح. فجوة أوسع، تسمح بمزيد من الأخطاء. يمكن أن يكون بسيطًا للغاية (غير ملائم).</li>\n<li><b>C كبير</b> → صارم. فجوة ضيقة، تسمح بأخطاء قليلة. يمكن حفظ الضوضاء (التناسب الزائد).</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>C هو قرص صارم. منخفض C = متسامح وعامة. ارتفاع C = صارم ومحفوف بالمخاطر. عادةً ما يتم العثور على أفضل لغة C عن طريق الاختبار (التحقق المتبادل).</p>\n</div>\n",
        "topic-5": "\n<h3><span class=\"dot\"></span>خدعة Kernel</h3>\n<p>في بعض الأحيان لا يمكن تقسيم المجموعات بخط مستقيم. تتيح <b>خدعة النواة</b> لـ SVM ثني الحدود عن طريق عرض البيانات سرًا من زاوية أعلى - دون إجراء عمليات حسابية ثقيلة مباشرة.</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>صور عملات معدنية متناثرة على طاولة - حمراء في المنتصف، وزرقاء حول الحواف. ولا يمكن لخط مستقيم أن يفصل بينهما. لكن إذا <em>رفعت</em> العملات الحمراء لأعلى عن الطاولة، فيمكنك الآن تحريك ورقة مسطحة بين الأحمر والأزرق. تقوم النواة بهذا \"الرفع\" نيابةً عنك.</p>\n</div>\n",
        "topic-6": "\n<h3><span class=\"dot\"></span>النوى المشتركة</h3>\n<ul>\n<li><b>الخطي</b> — خط مستقيم. الأفضل عندما يكون من السهل بالفعل فصل البيانات (مثل النص).</li>\n<li><b>متعددة الحدود</b> — حدود منحنية؛ يلتقط مجموعات الميزات.</li>\n<li><b>RBF (وظيفة الأساس الشعاعي)</b> — الأكثر مرونة، وينشئ حدودًا سلسة تشبه النقطة. الإعداد الافتراضي الشائع.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>بيانات الخط المستقيم → <b>الخطية</b>. البيانات المتعرجة/المعقدة → <b>RBF</b> هي الأداة الشاملة التي يمكن الاعتماد عليها.</p>\n</div>\n",
        "topic-7": "\n<h3><span class=\"dot\"></span>نقاط القوة والضعف في SVM</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>جيد في</h4>\n<ul>\n<li>الأبعاد العالية</li>\n<li>الهوامش الواضحة</li>\n<li>نواة المنحنيات</li>\n<li>ضوء الذاكرة (عدد قليل من متجهات الدعم)</li>\n</ul>\n</div>\n<div class=\"col\">\n<h4>يكافح مع</h4>\n<ul>\n<li>مجموعات بيانات كبيرة جدًا (بطيئة)</li>\n<li>اختيار C والنواة</li>\n<li>يصعب تفسيرها</li>\n<li>لا يوجد احتمال مباشر</li>\n</ul>\n</div>\n</div>\n",
        "topic-8": "\n<h3><span class=\"dot\"></span>مصفوفة الارتباك</h3>\n<p>جدول بسيط 2×2 يوضح أين كان المصنف على صواب وخطأ. أربعة مربعات:</p>\n<ul>\n<li><b>إيجابي حقيقي (TP):</b> قال نعم، وكان نعم ✅</li>\n<li><b> سلبي حقيقي (TN):</b> قال لا، وكان لا ✅</li>\n<li><b>إيجابي كاذب (FP):</b> قال نعم، لكنه كان لا ❌ (إنذار كاذب)</li>\n<li><b>سلبي كاذب (FN):</b> قال لا، لكنه كان نعم ❌ (فاتته)</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>إنذار حريق. <b>إيجابية كاذبة</b> = يصدر صوت تنبيه بدون نار (مزعج). <b>سلبي كاذب</b> = حريق حقيقي ولكن بدون صوت تنبيه (خطير). تتتبع المصفوفة عدد مرات حدوث كل منها.</p>\n</div>\n",
        "topic-9": "\n<h3><span class=\"dot\"></span>لماذا يمكن أن تكذب الدقة</h3>\n<p>الدقة = عدد النقاط الصحيحة بشكل عام. يبدو الأمر رائعًا، لكنه <b>يفشل في البيانات غير المتوازنة</b> (عندما تكون مجموعة واحدة نادرة).</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>إذا كان شخص واحد فقط من كل 100 شخص مصاب بمرض، فإن النموذج الكسول يقول \"صحي\" <em>للجميع</em> دقيق بنسبة 99% - ومع ذلك فهو يلتقط <b>صفر</b> من المرضى. دقة عالية، وغير مجدية على الإطلاق.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>في مشكلات الأحداث النادرة (المرض، والاحتيال، والبريد العشوائي)، <b>لا تثق في الدقة وحدها</b>. استخدم الدقة والاستدعاء وF1.</p>\n</div>\n",
        "topic-10": "\n<h3><span class=\"dot\"></span>الدقة مقابل الاستدعاء</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>الدقة</h4>\n<ul>\n<li>من بين التخمينات \"نعم\"، كم عدد التخمينات التي كانت صحيحة؟</li>\n<li>تعاقب <b>الإنذارات الكاذبة</b></li>\n<li>\"لا تبكي أيها الذئب\"</li>\n</ul>\n</div>\n<div class=\"col\">\n<h4>التذكر</h4>\n<ul>\n<li>من بين حالات \"نعم\" الحقيقية، كم عدد الحالات التي اكتشفناها؟</li>\n<li>يعاقب <b>الأخطاء</b></li>\n<li>\"لا تفوت أي منها\"</li>\n</ul>\n</div>\n</div>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p><b>الدقة مهم</b> بالنسبة لمرشحات البريد العشوائي - فأنت لا تريد أن يتم إرسال بريد إلكتروني حقيقي إلى المهملات بشكل خاطئ. <b>تذكر الأمور المهمة</b> فيما يتعلق بفحص السرطان - يعد فقدان ورم حقيقي أسوأ بكثير من الإنذار الكاذب الذي يمكنك التحقق منه مرة أخرى.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>الدقة = \"عندما أقول نعم، هل أنا على حق؟\" أذكر = \"هل وجدت كل تلك الحقيقية؟\" غالبًا ما يؤدي رفع أحدهما إلى خفض الآخر (المقايضة).</p>\n</div>\n",
        "topic-11": "\n<h3><span class=\"dot\"></span>F1-Score</h3>\n<p>رقم واحد <b>يوازن بين الدقة والتذكر</b>. ويظل المعدل منخفضًا إذا كان <em>أي منهما</em> أحدهما سيئًا، لذلك لا يمكنك الغش بحد أقصى واحد فقط.</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>مثل الحكم على الطالب بناءً على <em>كلا</em> السرعة والدقة. كونك سريعًا للغاية ولكن مخطئًا (أو مثاليًا ولكن بطيئًا بشكل مؤلم) يعطي نتيجة مجمعة سيئة. يجب أن تكون كلاهما لائقًا.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>استخدم <b>F1</b> عندما تهتم بالدقة والتذكر معًا - خاصة في حالة البيانات غير المتوازنة.</p>\n</div>\n",
        "topic-12": "\n<h3><span class=\"dot\"></span>منحنى ROC وAUC</h3>\n<p>يوضح <b>منحنى ROC</b> مدى نجاح النموذج في الفصل بين الفئتين عبر جميع نقاط القطع المحتملة. <b>AUC</b> (المنطقة تحت المنحنى) تضغط ذلك في درجة واحدة.</p>\n<ul>\n<li><b>AUC = 1.0</b> → فصل مثالي</li>\n<li><b>AUC = 0.5</b> → عديمة الفائدة، مجرد تخمين (عملة معدنية) flip)</li>\n<li>المساحة تحت المنحنى الأعلى = أفضل. 0.9+ ممتاز.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>الجامعة الأمريكية بالقاهرة هي فرصة أنه إذا اخترت \"نعم\" واحدة حقيقية و\"لا\" حقيقية واحدة بشكل عشوائي، فإن النموذج يصنف \"نعم\" أعلى. النموذج المثالي يفعل ذلك دائمًا (1.0)؛ الشخص الجاهل يكون على حق في نصف الوقت (0.5).</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>تتجاهل الجامعة الأمريكية بالقاهرة عدم توازن الفصل، لذا فهي رائعة لمشكلات الأحداث النادرة. 0.5 = قلب العملة، 1.0 = مثالي.</p>\n</div>\n",
        "topic-13": "\n<h3><span class=\"dot\"></span>التحقق المتبادل (K-Fold)</h3>\n<p>بدلاً من الاختبار على تقسيم واحد فقط محظوظ/غير محظوظ، يمكنك تقسيم البيانات إلى <b>أجزاء K</b>، والتدريب على معظمها واختبار الباقي، و<b>التدوير</b> بحيث كل جزء يحصل على دوره كمجموعة الاختبار. ثم قم بمتوسط ​​الدرجات.</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>مثل الحصول على درجات من 5 معلمين مختلفين بدلاً من معلم واحد. قد يكون أحد المعلمين سهلاً أو قاسيًا على نحو غير معتاد؛ متوسط ​​الخمس نقاط يعطي درجة أكثر عدلاً وجديرة بالثقة.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>يعطي K-Fold درجة أكثر <b>صادقة ومستقرة</b>. استخدم <b>الطي K الطبقي</b> للبيانات غير المتوازنة بحيث تحتفظ كل طية بنفس مزيج الفئة (على سبيل المثال، تتضمن دائمًا بعض الحالات النادرة).</p>\n</div>\n",
        "topic-14": "\n<h3><span class=\"dot\"></span>ما هو التعلم غير الخاضع للإشراف؟</h3>\n<p>هنا لا تحتوي البيانات على <b>بدون تصنيفات</b> — ولا يوجد مفتاح إجابة. يستكشف الكمبيوتر من تلقاء نفسه للعثور على المجموعات أو الأنماط المخفية.</p>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>خاضعة للإشراف</h4>\n<ul><li>تحتوي على تصنيفات (إجابات)</li><li>\"التعلم مع المعلم\"</li><li>التنبؤ/التصنيف</li></ul>\n</div>\n<div class=\"col\">\n<h4>غير خاضعة للإشراف</h4>\n<ul><li><b>لا</b> التصنيفات</li><li>\"استكشف بنفسك\"</li><li>ابحث عن المجموعات</li></ul>\n</div>\n</div>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>ألقِ سلة من الفاكهة المختلطة على طاولة دون ذكر أسماء. من الطبيعي أن تقوم بتكديسها حسب اللون أو الحجم. وهذا التجميع الذاتي هو بالضبط ما يفعله <b>التجميع</b>.</p>\n</div>\n",
        "topic-15": "\n<h3><span class=\"dot\"></span>أنواع التعلم غير الخاضع للرقابة</h3>\n<ul>\n<li><b>التجميع</b> - تجميع العناصر المتشابهة (تركيزنا الرئيسي).</li>\n<li><b>تقليل الأبعاد</b> - تقليص العديد من الميزات إلى عدد أقل مع الحفاظ على المعنى.</li>\n<li><b>اكتشاف الحالات الشاذة</b> - اكتشف الشيء الغريب.</li>\n<li><b>النمذجة التوليدية</b> - تعرف على نمط البيانات لإنشاء بيانات جديدة مماثلة.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p><b>اكتشاف الحالات الشاذة</b> في البنك الذي تتعامل معه: فهو يتعرف على إنفاقك العادي، ثم يشير إلى رسوم مفاجئة بقيمة 5000 دولار أمريكي في الخارج على أنها مشبوهة.</p>\n</div>\n",
        "topic-16": "\n<h3><span class=\"dot\"></span>المسافة = التشابه</h3>\n<p>يقيس التجميع مدى \"تشابه\" نقطتين من خلال <b>المسافة</b> بينهما. قريبون من بعضهم = متشابهون = من المحتمل نفس المجموعة.</p>\n<ul>\n<li><b>الإقليدية</b> - مسافة الخط المستقيم (المعتاد).</li>\n<li><b>مانهاتن</b> - المسافة على طول الشبكة، مثل مربعات المدينة.</li>\n<li><b>جيب التمام</b> - يقارن الاتجاه/الزاوية، رائع بالنسبة text.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p><b>الإقليدية</b> = طائر يطير مباشرة إلى نقطة ما. <b>مانهاتن</b> = سيارة أجرة يمكنها القيادة فقط على طول الشوارع، والانعطاف عند الزوايا.</p>\n</div>\n",
        "topic-17": "\n<h3><span class=\"dot\"></span>قم بقياس ميزاتك دائمًا</h3>\n<p>قبل التجميع، ضع كل الميزات على <b>نفس المقياس</b>. وإلا فإن الميزة ذات الأرقام الكبيرة تتنمر على الصغار وتفسد التجميع.</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>مقارنة الأشخاص حسب العمر (0-100) والراتب (0-100000). وبدون القياس، تهيمن أعداد الرواتب الضخمة ويتم تجاهل العمر. القياس يجعلها متساوية.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>الطرق المعتمدة على المسافة <b>حساسة جدًا للقياس</b>. قم دائمًا بالقياس أولاً (StandardScaler) — وهذه نقطة اختبار كلاسيكية.</p>\n</div>\n",
        "topic-18": "\n<h3><span class=\"dot\"></span>طرق التجميع الثلاث</h3>\n<p>ثلاث \"فلسفات\" مختلفة لتجميع البيانات:</p>\n<ul>\n<li><b>K-Means</b> — تقسم البيانات إلى نقاط دائرية K حول المراكز.</li>\n<li><b>تسلسل هرمي</b> - ينشئ شجرة من المجموعات؛ لا داعي لاختيار K مقدمًا.</li>\n<li><b>DBSCAN</b> - المجموعات حسب الكثافة؛ يتعامل مع الأشكال الغريبة والضوضاء.</li>\n</ul>\n",
        "topic-19": "\n<h3><span class=\"dot\"></span>K-Means Clustering</h3>\n<p>يمكنك إخباره بعدد المجموعات (<b>K</b>) التي تريدها. فهو يضع مراكز K، ويعين كل نقطة إلى أقرب مركز لها، ثم ينقل المراكز إلى منتصف نقاطها - ويكرر حتى يتم تسويتها.</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>إعداد 3 أكشاك طعام في حديقة. تريد كل كشك في وسط حشدها. يمكنك تخمين 3 نقاط، ومعرفة من يذهب إلى أين، وحرك كل كشك إلى وسط مجموعته، وكرر ذلك حتى لا يقوم أحد بتبديل الأكشاك.</p>\n</div>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>الإيجابيات</h4>\n<ul><li>بسيط وسريع</li><li>التوسع إلى البيانات الكبيرة</li></ul>\n</div>\n<div class=\"col\">\n<h4>السلبيات</h4>\n<ul><li>يجب اختيار K</li><li>تفترض النقط المستديرة</li><li>حساسة للقيم المتطرفة</li></ul>\n</div>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>تحتاج K-Means إلى اختيار <b>K مقدمًا</b> وتفترض <b>جولة، مجموعات مماثلة الحجم</b>.</p>\n</div>\n",
        "topic-20": "\n<h3><span class=\"dot\"></span>اختيار K: الكوع والصورة الظلية</h3>\n<ul>\n<li><b>طريقة الكوع:</b> ارسم الخطأ مع نمو K. يعتبر انحناء \"المرفق\" - حيث تتوقف إضافة المزيد من المجموعات عن المساعدة كثيرًا - بمثابة K.</li>\n<li><b>نتيجة الصورة الظلية:</b> تُقيّم مدى ضيق المجموعات وفصلها جيدًا. النطاقات من -1 إلى 1؛ <b>الأعلى هو الأفضل</b>.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>الكوع = مثل إضافة ساعات الدراسة: الانتقال من 1←3 ساعات يساعد كثيرًا، لكن 8←9 ساعات بالكاد يغير درجتك. نقطة التسطيح هذه هي النقطة المثالية.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>الكوع = ابحث عن الانحناء. صورة ظلية = الأعلى هو الأفضل. غالبًا ما يتفقون على نفس K.</p>\n</div>\n",
        "topic-21": "\n<h3><span class=\"dot\"></span>التجميع الهرمي</h3>\n<p>ينشئ <b>شجرة من المجموعات</b> (\"مخطط الأشجار\"). يبدأ النمط الشائع (<b>التكتلي</b>) بكل نقطة على حدة، ثم يستمر في دمج أقرب مجموعتين حتى يتم ضم الجميع.</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>شجرة عائلة في الاتجاه المعاكس: يندمج أبناء العمومة في عائلات، والعائلات في عشائر، والعشائر في مجموعة واحدة كبيرة. يمكنك \"قص\" الشجرة على أي ارتفاع لتحديد عدد المجموعات التي تريدها - <em>بعد</em> إنشائها.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>الميزة الكبيرة: <b>لا داعي لاختيار K أولاً</b> - فقط قم بقطع الشجرة في المكان الذي تريده. الجانب السلبي: <b>بطيء</b> في مجموعات البيانات الكبيرة.</p>\n</div>\n",
        "topic-22": "\n<h3><span class=\"dot\"></span>قراءة مخطط الأشجار والربط</h3>\n<p>في الشجرة: <b>ارتفاع كل عملية دمج</b> = مدى تباعد هذه المجموعات. لاختيار مجموعات، ارسم قطعًا أفقيًا - ابحث عن <b>أطول فجوة</b> بدون عمليات دمج، مما يشير إلى عدد طبيعي للمجموعات.</p>\n<p style=\"margin-top:8px\"><b>الربط</b> = قاعدة قياس المسافة بين المجموعات:</p>\n<ul>\n<li><b>مفردة</b> - أقرب زوج (يمكن تسبب \"سلاسل\" متماسكة).</li>\n<li><b>كامل</b> - الزوج الأبعد (مجموعات ضيقة ومضغوطة).</li>\n<li><b>المتوسط</b> - متوسط جميع الأزواج (وسط متوازن).</li>\n<li><b>Ward's</b> - يحافظ على ترتيب المجموعات عن طريق التقليل من الفوضى. عادةً ما يكون الخيار الافتراضي هو الأفضل.</li>\n</ul>\n",
        "topic-23": "\n<h3><span class=\"dot\"></span>DBSCAN (على أساس الكثافة)</h3>\n<p>تجميع النقاط التي <b>مجمعة بشكل وثيق معًا</b> وتصنف النقاط الوحيدة على أنها <b>ضوضاء</b>. لا يتطلب منك اختيار K ويمكنه العثور على أشكال غريبة وغير مستديرة.</p>\n<p style=\"margin-top:8px\">ثلاثة أنواع من النقاط:</p>\n<ul>\n<li><b>النقطة الأساسية</b> — بها الكثير من الجيران القريبين (في حشد من الناس).</li>\n<li><b>نقطة حدودية</b> — بالقرب من حشد من الناس ولكن ليست مزدحمة نفسها (الحافة).</li>\n<li><b>نقطة الضوضاء</b> - وحيدًا، بعيدًا عن الجميع (خارج).</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>أشخاص في مهرجان. التجمعات الكثيفة = الحشود في كل مرحلة. شخص يتجول بمفرده في حقل فارغ = ضجيج. يعثر DBSCAN على الحشود بغض النظر عن شكلهم ويتجاهل المنعزلين.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>يتألق DBSCAN في <b>الأشكال الغريبة + الضوضاء</b> ولا يحتاج إلى K. ولكنه يواجه صعوبات عندما يكون لدى المجموعات <b>مختلفة جدًا بكثافات</b> وبأبعاد عالية.</p>\n</div>\n",
        "topic-24": "\n<h3><span class=\"dot\"></span>الوسائل K مقابل DBSCAN (سؤال الاختبار الشائع)</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>اختر الوسائل K عندما</h4>\n<ul><li>المجموعات مستديرة وذات حجم مماثل</li><li>تعرف عددها تقريبًا</li><li>البيانات كبيرة (السرعة)</li></ul>\n</div>\n<div class=\"col\">\n<h4>اختر DBSCAN عندما</h4>\n<ul><li>المجموعات أشكال غريبة</li><li>هناك ضوضاء/قيم متطرفة</li><li>أنت لا تعرف K</li></ul>\n</div>\n</div>\n",
        "topic-25": "\n<h3><span class=\"dot\"></span>تقييم المجموعات (بدون تصنيفات!)</h3>\n<p>بدون مفتاح إجابة، نحكم على المجموعات بطريقتين:</p>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>جوهري</h4>\n<ul><li>يستخدم البيانات فقط، <b>بدون تصنيفات</b></li><li>صورة ظلية، Davies-Bouldin</li><li>يعمل في الحياة الواقعية</li></ul>\n</div>\n<div class=\"col\">\n<h4>خارجي</h4>\n<ul><li>يقارن بـ <b>التسميات الحقيقية</b></li><li>ARI وNMI</li><li>فقط للاختبار/المعايير</li></ul>\n</div>\n</div>\n<ul style=\"margin-top:10px\">\n<li><b>الصورة الظلية</b> — الأعلى أفضل (ضيق + منفصل).</li>\n<li><b>Davies-Bouldin</b> — <b>الأقل</b> أفضل (0 = مثالي).</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>في العمل الحقيقي غير الخاضع للإشراف، لا يكون لديك عادةً أي تصنيفات → تعتمد على <b>المقاييس الجوهرية</b>. صورة ظلية <b>عالية</b> = جيدة; ديفيز بولدين <b>منخفض</b> = جيد. استخدم عدة مقاييس + المنطق السليم، وليس واحدًا فقط.</p>\n</div>\n",
        "topic-26": "\n<h3><span class=\"dot\"></span>الأخلاق: تدقيق مجموعاتك</h3>\n<p>يمكن أن يؤدي التجميع عن طريق الخطأ إلى اكتشاف <b>التحيز</b> المخفي في البيانات. إذا كانت البيانات السابقة غير عادلة، فيمكن للمجموعات تكرار هذا الظلم بهدوء.</p>\n<div class=\"ex\">\n<span class=\"lbl\">مثال سهل</span>\n<p>قد تقوم أداة التوظيف التي تجمع المتقدمين بتجميعهم بطرق تتماشى مع الجنس أو الخلفية - مما يؤدي إلى قوائم مختصرة غير عادلة. تحقق دائمًا من المجموعات قبل الوثوق بها.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>البنية المخفية يمكن أن تشفر التحيز. <b>تدقيق عدالة المجموعة</b> قبل النشر - نقطة اختبار أخلاقية محتملة (CLO 3.1).</p>\n</div>\n",
        "footer": "\n<p>لقد حصلت على هذا. راجع المربعات الكهرمانية <b>تذكر</b> المربعات مرة أخيرة قبل الاختبار.</p>\n<div class=\"pill-row\">\n<span class=\"pill\">SVM = الفجوة الأوسع</span>\n<span class=\"pill\">تذكر = التقطها جميعًا</span>\n<span class=\"pill\">AUC 0.5 = قلب العملة المعدنية</span>\n<span class=\"pill\">المقياس قبل التجميع</span>\n<span class=\"pill\">DBSCAN = الأشكال + الضوضاء</span>\n</div>\n<a class=\"top-link\" href=\"#\">↑ العودة إلى الأعلى</a>\n"
}
    },
    quizzes: {
      en: {
        "quiz4": [
                {
                        "q": "What does an SVM try to find between two groups?",
                        "options": [
                                "The shortest line",
                                "The line with the widest gap (margin) on both sides",
                                "Any line that touches the points",
                                "A curved line only"
                        ],
                        "answer": 1,
                        "explain": "SVM maximizes the margin — the widest empty gap between the boundary and the nearest points."
                },
                {
                        "q": "Support vectors are…",
                        "options": [
                                "All the training points",
                                "The points farthest from the line",
                                "The closest points that define the boundary",
                                "The cluster centers"
                        ],
                        "answer": 2,
                        "explain": "Only the nearest points (support vectors) shape the line. Removing far-away points changes nothing."
                },
                {
                        "q": "Why use a soft margin instead of a hard margin?",
                        "options": [
                                "It's faster to draw",
                                "It allows a few mistakes so it handles messy, overlapping real data",
                                "It needs less memory",
                                "It removes the need for kernels"
                        ],
                        "answer": 1,
                        "explain": "Real data is rarely perfectly separable. Soft margin tolerates a few errors for better overall results."
                },
                {
                        "q": "A LARGE value of C tends to cause…",
                        "options": [
                                "A wider margin and underfitting",
                                "A narrow margin and risk of overfitting",
                                "Faster training only",
                                "No effect on the model"
                        ],
                        "answer": 1,
                        "explain": "Large C = strict, few mistakes allowed → narrow margin → can overfit by chasing noise."
                },
                {
                        "q": "What problem does the kernel trick solve?",
                        "options": [
                                "Slow training",
                                "Data that can't be split by a straight line",
                                "Too many features",
                                "Missing labels"
                        ],
                        "answer": 1,
                        "explain": "Kernels let SVM create non-linear (curved) boundaries for data a straight line can't separate."
                },
                {
                        "q": "Which kernel is the flexible all-rounder default?",
                        "options": [
                                "Linear",
                                "Polynomial",
                                "RBF",
                                "None"
                        ],
                        "answer": 2,
                        "explain": "RBF creates smooth, flexible boundaries and is the popular go-to for complex data."
                },
                {
                        "q": "A 'False Negative' means the model…",
                        "options": [
                                "Said yes and was right",
                                "Said no but the real answer was yes (a miss)",
                                "Said yes but it was no",
                                "Said no and was right"
                        ],
                        "answer": 1,
                        "explain": "False Negative = it missed a real positive. Like a fire alarm staying silent during a real fire."
                },
                {
                        "q": "Why can accuracy be misleading?",
                        "options": [
                                "It's hard to compute",
                                "On imbalanced data, predicting only the common class scores high but catches no rare cases",
                                "It needs labels",
                                "It ignores training data"
                        ],
                        "answer": 1,
                        "explain": "If a disease is 1% rare, always saying 'healthy' is 99% accurate but finds zero patients."
                },
                {
                        "q": "Recall answers which question?",
                        "options": [
                                "When I say yes, am I right?",
                                "Of the real positives, how many did I catch?",
                                "How fast is the model?",
                                "How many features are used?"
                        ],
                        "answer": 1,
                        "explain": "Recall = coverage of actual positives. Critical for cancer screening (don't miss real cases)."
                },
                {
                        "q": "Precision is most important when…",
                        "options": [
                                "Missing a tumor is the worst outcome",
                                "False alarms are costly, e.g. trashing a real email as spam",
                                "You have no labels",
                                "The data is tiny"
                        ],
                        "answer": 1,
                        "explain": "Precision punishes false positives — vital when a false alarm causes real harm (e.g. spam filters)."
                },
                {
                        "q": "The F1-score is useful because it…",
                        "options": [
                                "Only measures speed",
                                "Balances precision and recall in one number",
                                "Ignores false negatives",
                                "Always equals accuracy"
                        ],
                        "answer": 1,
                        "explain": "F1 stays low if either precision or recall is poor — you can't cheat by maxing just one."
                },
                {
                        "q": "An AUC of 0.5 means the model is…",
                        "options": [
                                "Perfect",
                                "Excellent",
                                "No better than random guessing",
                                "Slightly above average"
                        ],
                        "answer": 2,
                        "explain": "AUC 0.5 = a coin flip (no discriminating power). 1.0 = perfect separation."
                },
                {
                        "q": "Why is AUC good for imbalanced data?",
                        "options": [
                                "It's faster",
                                "It's insensitive to class imbalance, unlike accuracy",
                                "It needs no model",
                                "It always gives 1.0"
                        ],
                        "answer": 1,
                        "explain": "AUC measures ranking ability across thresholds and isn't fooled by a dominant majority class."
                },
                {
                        "q": "Why use K-Fold cross-validation?",
                        "options": [
                                "To train faster",
                                "To get an honest, stable score by testing on every part in turn",
                                "To delete the test set",
                                "To reduce the number of features"
                        ],
                        "answer": 1,
                        "explain": "Rotating the test fold and averaging avoids being fooled by one lucky or unlucky split."
                },
                {
                        "q": "Stratified K-Fold is preferred for imbalanced data because it…",
                        "options": [
                                "Runs more folds",
                                "Keeps the same class mix in every fold",
                                "Removes outliers",
                                "Skips the rare class"
                        ],
                        "answer": 1,
                        "explain": "Stratification preserves class proportions so each fold still contains the rare cases."
                }
        ],
        "quiz5": [
                {
                        "q": "What makes a problem 'unsupervised'?",
                        "options": [
                                "It has too much data",
                                "There are no labels — no answer key",
                                "It uses only one feature",
                                "It always uses K-Means"
                        ],
                        "answer": 1,
                        "explain": "Unsupervised learning works with features only and discovers structure without labels."
                },
                {
                        "q": "Clustering means…",
                        "options": [
                                "Predicting a number",
                                "Grouping similar data points together",
                                "Removing features",
                                "Labeling data by hand"
                        ],
                        "answer": 1,
                        "explain": "Clustering finds natural groups of similar points — like sorting mixed fruit by type."
                },
                {
                        "q": "In clustering, two points are considered similar if they are…",
                        "options": [
                                "Far apart",
                                "Close together in distance",
                                "Different colors",
                                "In different files"
                        ],
                        "answer": 1,
                        "explain": "Smaller distance = more similar = likely the same cluster."
                },
                {
                        "q": "Why must you scale features before clustering?",
                        "options": [
                                "To save memory",
                                "So a large-numbered feature doesn't dominate the distance and bias the groups",
                                "To add more clusters",
                                "To remove the labels"
                        ],
                        "answer": 1,
                        "explain": "Without scaling, big-range features (like salary) overpower small ones (like age)."
                },
                {
                        "q": "K-Means requires you to…",
                        "options": [
                                "Build a tree first",
                                "Choose the number of clusters K in advance",
                                "Label the data",
                                "Use cosine distance"
                        ],
                        "answer": 1,
                        "explain": "You must pick K upfront, and K-Means assumes round, similar-sized clusters."
                },
                {
                        "q": "The 'elbow method' helps you…",
                        "options": [
                                "Scale the data",
                                "Choose a good number of clusters K",
                                "Remove noise",
                                "Measure precision"
                        ],
                        "answer": 1,
                        "explain": "The elbow is where adding more clusters stops reducing error much — a good K."
                },
                {
                        "q": "For the silhouette score, which is true?",
                        "options": [
                                "Lower is better",
                                "Higher is better (tight, well-separated clusters)",
                                "It must equal zero",
                                "It only works with labels"
                        ],
                        "answer": 1,
                        "explain": "Silhouette ranges −1 to 1; higher means tighter and better-separated clusters."
                },
                {
                        "q": "The big advantage of hierarchical clustering is…",
                        "options": [
                                "It's the fastest method",
                                "You don't have to pick K first — just cut the tree",
                                "It needs labels",
                                "It ignores distance"
                        ],
                        "answer": 1,
                        "explain": "It builds a dendrogram you can cut at any height to choose K after the fact."
                },
                {
                        "q": "In a dendrogram, the height of a merge represents…",
                        "options": [
                                "The number of features",
                                "How far apart the two merged groups were",
                                "The learning rate",
                                "The accuracy"
                        ],
                        "answer": 1,
                        "explain": "Taller merge = groups were more distant. A tall uncrossed gap suggests a natural K."
                },
                {
                        "q": "A DBSCAN 'noise point' is one that…",
                        "options": [
                                "Is in a dense crowd",
                                "Is alone, far from any cluster (an outlier)",
                                "Defines the boundary",
                                "Is a cluster center"
                        ],
                        "answer": 1,
                        "explain": "Noise points aren't reachable from any dense core — DBSCAN labels them as outliers."
                },
                {
                        "q": "You'd choose DBSCAN over K-Means when…",
                        "options": [
                                "Clusters are perfectly round",
                                "Clusters have odd shapes and there's noise",
                                "You already know K",
                                "The data is labeled"
                        ],
                        "answer": 1,
                        "explain": "DBSCAN handles arbitrary shapes and noise without needing K — unlike K-Means."
                },
                {
                        "q": "Intrinsic metrics (like Silhouette) are special because they…",
                        "options": [
                                "Need true labels",
                                "Judge clusters using the data alone, no labels needed",
                                "Only work on K-Means",
                                "Measure training speed"
                        ],
                        "answer": 1,
                        "explain": "Intrinsic metrics work in real unsupervised settings where no labels exist."
                },
                {
                        "q": "For the Davies-Bouldin index, which is true?",
                        "options": [
                                "Higher is better",
                                "Lower is better (0 = perfect separation)",
                                "It needs labels",
                                "It equals accuracy"
                        ],
                        "answer": 1,
                        "explain": "Davies-Bouldin measures cluster overlap — lower means better-separated clusters."
                },
                {
                        "q": "Why audit clusters for ethics before deploying?",
                        "options": [
                                "To speed up the model",
                                "Because clusters can encode hidden bias from unfair past data",
                                "To add more features",
                                "To pick a bigger K"
                        ],
                        "answer": 1,
                        "explain": "Hidden structure may repeat historical bias (e.g. in hiring) — always check fairness first."
                },
                {
                        "q": "Which is the safest overall evaluation approach?",
                        "options": [
                                "Trust one metric only",
                                "Use several metrics plus domain knowledge",
                                "Ignore metrics",
                                "Use accuracy alone"
                        ],
                        "answer": 1,
                        "explain": "No single score is perfect — combine multiple metrics with common sense."
                }
        ]
},
      ar: {
        "quiz4": [
                {
                        "q": "ما الذي يحاول SVM العثور عليه بين مجموعتين؟",
                        "options": [
                                "أقصر خط",
                                "الخط ذو الفجوة الأوسع (الهامش) على كلا الجانبين",
                                "أي خط يلامس النقاط",
                                "الخط المنحني فقط"
                        ],
                        "answer": 1,
                        "explain": "يعمل SVM على زيادة الهامش — أوسع فجوة فارغة بين الحدود وأقرب النقاط."
                },
                {
                        "q": "متجهات الدعم هي…",
                        "options": [
                                "جميع نقاط التدريب",
                                "أبعد النقاط عن الخط",
                                "أقرب النقاط التي تحدد الحدود",
                                "مراكز الكتلة"
                        ],
                        "answer": 2,
                        "explain": "أقرب النقاط فقط (الدعم) المتجهات) شكل الخط. إزالة النقاط البعيدة لا تغير شيئًا."
                },
                {
                        "q": "لماذا تستخدم هامشًا بسيطًا بدلاً من الهامش الثابت؟",
                        "options": [
                                "إنه أسرع في الرسم",
                                "يسمح ببعض الأخطاء لذا فهو يتعامل مع البيانات الحقيقية الفوضوية والمتداخلة",
                                "يحتاج إلى ذاكرة أقل",
                                "يزيل الحاجة إلى kernels"
                        ],
                        "answer": 1,
                        "explain": "نادرًا ما تكون البيانات الحقيقية قابلة للفصل تمامًا. يتحمل الهامش البسيط بعض الأخطاء للحصول على نتائج إجمالية أفضل."
                },
                {
                        "q": "تميل القيمة الكبيرة لـ C إلى التسبب…",
                        "options": [
                                "هامش أوسع ونقص في الملاءمة",
                                "هامش ضيق وخطر التجاوز",
                                "تدريب أسرع فقط",
                                "لا يوجد تأثير على النموذج"
                        ],
                        "answer": 1,
                        "explain": "C كبير = صارم، مسموح ببعض الأخطاء → هامش ضيق → يمكن أن يفرط في الاحتواء عن طريق مطاردة الضوضاء."
                },
                {
                        "q": "ما هي المشكلة التي تحلها خدعة kernel؟",
                        "options": [
                                "التدريب البطيء",
                                "البيانات التي لا يمكن تقسيمها بخط مستقيم",
                                "ميزات كثيرة جدًا",
                                "التسميات المفقودة"
                        ],
                        "answer": 1,
                        "explain": "تسمح النواة لـ SVM بإنشاء حدود غير خطية (منحنية) للبيانات التي لا يمكن للخط المستقيم فصلها."
                },
                {
                        "q": "ما هي النواة الافتراضية المرنة الشاملة؟",
                        "options": [
                                "الخطية",
                                "متعددة الحدود",
                                "RBF",
                                "لا شيء"
                        ],
                        "answer": 2,
                        "explain": "ينشئ RBF حدودًا سلسة ومرنة وهو المرجع الشائع للبيانات المعقدة."
                },
                {
                        "q": "\"السلبي الكاذب\" يعني النموذج...",
                        "options": [
                                "قال نعم وكان على حق",
                                "قال لا ولكن الإجابة الحقيقية كانت نعم (ملكة جمال)",
                                "قال نعم ولكنه لم يكن",
                                "قال لا وكان على حق"
                        ],
                        "answer": 1,
                        "explain": "سلبي كاذب = فاته إيجابي حقيقي. مثل بقاء إنذار الحريق صامتًا أثناء حريق حقيقي."
                },
                {
                        "q": "لماذا يمكن أن تكون الدقة مضللة؟",
                        "options": [
                                "من الصعب إجراء العمليات الحسابية",
                                "في البيانات غير المتوازنة، يتم التنبؤ فقط بدرجات عالية للفصل العام ولكن لا يتم اكتشاف الحالات النادرة",
                                "يحتاج إلى تسميات",
                                "يتجاهل التدريب data"
                        ],
                        "answer": 1,
                        "explain": "إذا كان المرض نادرًا بنسبة 1%، فإن قول \"صحي\" دائمًا يكون دقيقًا بنسبة 99% ولكنه لا يجد أي مريض."
                },
                {
                        "q": "أذكر إجابات أي سؤال؟",
                        "options": [
                                "عندما أقول نعم، هل أنا على حق؟",
                                "من بين الإيجابيات الحقيقية، كم عدد الحالات التي اكتشفتها؟",
                                "ما مدى سرعة ذلك؟ النموذج؟",
                                "كم عدد الميزات المستخدمة؟"
                        ],
                        "answer": 1,
                        "explain": "الاستدعاء = تغطية الإيجابيات الفعلية. أمر بالغ الأهمية لفحص السرطان (لا تفوت الحالات الحقيقية)."
                },
                {
                        "q": "الدقة هي الأكثر أهمية عندما…",
                        "options": [
                                "إن فقدان الورم هو أسوأ النتائج",
                                "إن الإنذارات الكاذبة مكلفة، على سبيل المثال. نقل بريد إلكتروني حقيقي كبريد عشوائي",
                                "ليس لديك أي تصنيفات",
                                "البيانات صغيرة جدًا"
                        ],
                        "answer": 1,
                        "explain": "الدقة تعاقب الإيجابيات الكاذبة - وهو أمر حيوي عندما يتسبب إنذار كاذب في ضرر حقيقي (مثل مرشحات البريد العشوائي)."
                },
                {
                        "q": "تعد درجة F1 مفيدة لأنها…",
                        "options": [
                                "تقيس فقط السرعة",
                                "يوازن الدقة والتذكر في رقم واحد",
                                "يتجاهل السلبيات الكاذبة",
                                "يساوي الدقة دائمًا"
                        ],
                        "answer": 1,
                        "explain": "يظل F1 منخفضًا إذا كانت الدقة أو الاستدعاء ضعيفًا - لا يمكنك الغش عن طريق زيادة رقم واحد فقط إلى الحد الأقصى."
                },
                {
                        "q": "تعني AUC بقيمة 0.5 النموذج هو…",
                        "options": [
                                "ممتاز",
                                "ممتاز",
                                "ليس أفضل من التخمين العشوائي",
                                "أعلى قليلاً من المتوسط"
                        ],
                        "answer": 2,
                        "explain": "AUC 0.5 = قلب العملة المعدنية (بدون قوة تمييزية). 1.0 = فصل مثالي."
                },
                {
                        "q": "لماذا تعد الجامعة الأمريكية بالقاهرة جيدة للبيانات غير المتوازنة؟",
                        "options": [
                                "إنها أسرع",
                                "إنها غير حساسة لاختلال التوازن الطبقي، على عكس الدقة",
                                "لا تحتاج إلى نموذج",
                                "فهي تعطي دائمًا 1.0"
                        ],
                        "answer": 1,
                        "explain": "تقيس الجامعة الأمريكية بالقاهرة القدرة على التصنيف عبر الحدود ولا تنخدع بفئة الأغلبية المهيمنة."
                },
                {
                        "q": "لماذا نستخدم التحقق المتقاطع K-Fold؟",
                        "options": [
                                "للتدريب بشكل أسرع",
                                "للحصول على درجة صادقة ومستقرة من خلال اختبار كل جزء على حدة",
                                "لحذف مجموعة الاختبار",
                                "لتقليل عدد الميزات"
                        ],
                        "answer": 1,
                        "explain": "يؤدي تدوير طية الاختبار ومتوسطها إلى تجنب الانخداع بتقسيم واحد محظوظ أو سيئ الحظ."
                },
                {
                        "q": "يُفضل طيات K الطبقية للبيانات غير المتوازنة لأنها…",
                        "options": [
                                "تعمل على طيات أكثر",
                                "تحتفظ بنفس مزيج الصفوف في كل منها طية",
                                "إزالة القيم المتطرفة",
                                "تخطي الفئة النادرة"
                        ],
                        "answer": 1,
                        "explain": "يحافظ التقسيم الطبقي على نسب الفئة بحيث تظل كل طية تحتوي على الحالات النادرة."
                }
        ],
        "quiz5": [
                {
                        "q": "ما الذي يجعل المشكلة \"غير خاضعة للإشراف\"؟",
                        "options": [
                                "تحتوي على الكثير من البيانات",
                                "لا توجد تسميات - لا يوجد مفتاح إجابة",
                                "يستخدم ميزة واحدة فقط",
                                "يستخدم دائمًا وسائل K-Means"
                        ],
                        "answer": 1,
                        "explain": "يعمل التعلم غير الخاضع للإشراف مع الميزات فقط ويكتشف البنية بدونها التصنيفات."
                },
                {
                        "q": "يعني التجميع…",
                        "options": [
                                "التنبؤ برقم",
                                "تجميع نقاط البيانات المتشابهة معًا",
                                "إزالة الميزات",
                                "تصنيف البيانات يدويًا"
                        ],
                        "answer": 1,
                        "explain": "يبحث التجميع عن مجموعات طبيعية من نقاط متشابهة - مثل فرز الفاكهة المختلطة حسب النوع."
                },
                {
                        "q": "في التجميع، تعتبر النقطتان متشابهتين إذا كانتا…",
                        "options": [
                                "متباعدتين",
                                "متقاربتين في المسافة",
                                "ألوان مختلفة",
                                "في ملفات مختلفة"
                        ],
                        "answer": 1,
                        "explain": "مسافة أصغر = أكثر تشابهًا = من المحتمل أن تكون نفسها المجموعة."
                },
                {
                        "q": "لماذا يجب عليك قياس الميزات قبل التجميع؟",
                        "options": [
                                "لتوفير الذاكرة",
                                "حتى لا تهيمن المعالم ذات الأرقام الكبيرة على المسافة وتتحيز المجموعات",
                                "لإضافة المزيد من المجموعات",
                                "لإزالة التسميات"
                        ],
                        "answer": 1,
                        "explain": "بدون التوسع، تتغلب الميزات الكبيرة (مثل الراتب) على الميزات الصغيرة (مثل العمر)."
                },
                {
                        "q": "تتطلب K-Means…",
                        "options": [
                                "إنشاء شجرة أولاً",
                                "اختيار عدد المجموعات K مقدمًا",
                                "تسمية البيانات",
                                "استخدام جيب التمام المسافة"
                        ],
                        "answer": 1,
                        "explain": "يجب عليك اختيار K مقدمًا، وتفترض K-Means مجموعات مستديرة ومتشابهة الحجم."
                },
                {
                        "q": "تساعدك \"طريقة الكوع\"...",
                        "options": [
                                "قياس البيانات",
                                "اختر عددًا جيدًا من المجموعات K",
                                "إزالة الضوضاء",
                                "دقة القياس"
                        ],
                        "answer": 1,
                        "explain": "المرفق هو المكان الذي تتوقف فيه إضافة المزيد من المجموعات عن تقليل الخطأ كثيرًا - K جيد."
                },
                {
                        "q": "بالنسبة إلى درجة الصورة الظلية، أيهما صحيح؟",
                        "options": [
                                "الأقل هو الأفضل",
                                "الأعلى هو الأفضل (مجموعات ضيقة ومنفصلة جيدًا)",
                                "يجب أن يساوي الصفر",
                                "يعمل فقط مع التصنيفات"
                        ],
                        "answer": 1,
                        "explain": "نطاقات الصور الظلية من −1 إلى 1؛ الأعلى يعني مجموعات أكثر إحكامًا وفصلًا أفضل."
                },
                {
                        "q": "الميزة الكبيرة للتجميع الهرمي هي…",
                        "options": [
                                "إنها الطريقة الأسرع",
                                "ليس عليك اختيار K أولاً - فقط قم بقطع الشجرة",
                                "إنها تحتاج إلى تسميات",
                                "تتجاهل المسافة"
                        ],
                        "answer": 1,
                        "explain": "تقوم بإنشاء مخطط شجيرات يمكنك قصه بأي ارتفاع لاختيار K بعد الحقيقة."
                },
                {
                        "q": "في مخطط الأشجار، يمثل ارتفاع الدمج…",
                        "options": [
                                "عدد الميزات",
                                "مدى التباعد بين المجموعتين المدمجتين",
                                "معدل التعلم",
                                "الدقة"
                        ],
                        "answer": 1,
                        "explain": "الدمج الأطول = كانت المجموعات أكثر بعدًا. تشير الفجوة الطويلة غير المتقاطعة إلى وجود K طبيعي."
                },
                {
                        "q": "\"نقطة الضجيج\" في DBSCAN هي تلك التي…",
                        "options": [
                                "توجد في حشد كثيف",
                                "توجد بمفردها، بعيدًا عن أي مجموعة (قيمة متطرفة)",
                                "تحدد الحدود",
                                "تمثل مجموعة center"
                        ],
                        "answer": 1,
                        "explain": "لا يمكن الوصول إلى نقاط الضوضاء من أي نواة كثيفة - يصنفها DBSCAN على أنها قيم متطرفة."
                },
                {
                        "q": "يمكنك اختيار DBSCAN بدلاً من K-Means عندما…",
                        "options": [
                                "المجموعات مستديرة تمامًا",
                                "المجموعات لها أشكال غريبة وهناك ضوضاء",
                                "أنت بالفعل تعرف K",
                                "يتم تصنيف البيانات"
                        ],
                        "answer": 1,
                        "explain": "يتعامل DBSCAN مع الأشكال العشوائية والضوضاء دون الحاجة إلى K - على عكس K-Means."
                },
                {
                        "q": "تعد المقاييس الجوهرية (مثل Silhouette) خاصة لأنها…",
                        "options": [
                                "تحتاج إلى تصنيفات حقيقية",
                                "الحكم على المجموعات باستخدام البيانات وحدها، لا حاجة إلى تسميات",
                                "تعمل فقط على K-Means",
                                "قياس سرعة التدريب"
                        ],
                        "answer": 1,
                        "explain": "تعمل المقاييس الجوهرية في إعدادات حقيقية غير خاضعة للرقابة حيث لا توجد تسميات."
                },
                {
                        "q": "بالنسبة لمؤشر Davies-Bouldin، ما هو الصحيح؟",
                        "options": [
                                "الأعلى هو الأفضل",
                                "الأقل هو الأفضل (0 = الفصل المثالي)",
                                "يحتاج إلى تسميات",
                                "إنه يساوي الدقة"
                        ],
                        "answer": 1,
                        "explain": "يقيس ديفيز-بولدين تداخل المجموعات - الأقل يعني مجموعات منفصلة بشكل أفضل."
                },
                {
                        "q": "لماذا تدقيق المجموعات من حيث الأخلاقيات قبل النشر؟",
                        "options": [
                                "لتسريع النموذج",
                                "لأن المجموعات يمكن أن تشفر التحيز المخفي من بيانات سابقة غير عادلة",
                                "لإضافة المزيد من الميزات",
                                "لاختيار K أكبر"
                        ],
                        "answer": 1,
                        "explain": "قد تؤدي البنية المخفية إلى تكرار التحيز التاريخي (على سبيل المثال في التوظيف) - تحقق دائمًا من العدالة أولاً."
                },
                {
                        "q": "ما هو أسلوب التقييم الشامل الأكثر أمانًا؟",
                        "options": [
                                "ثق بمقياس واحد فقط",
                                "استخدم عدة مقاييس بالإضافة إلى المعرفة بالمجال",
                                "تجاهل المقاييس",
                                "استخدم الدقة وحدها"
                        ],
                        "answer": 1,
                        "explain": "لا توجد نتيجة واحدة مثالية - اجمع بين مقاييس متعددة مع مقاييس مشتركة بمعنى."
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
          "quiz4": {
                    "title": "Chapter 4 Check",
                    "sub": "Tap an answer. You'll see instantly if it's right, plus a quick why."
          },
          "quiz5": {
                    "title": "Chapter 5 Check",
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
          "quiz4": {
                    "title": "مراجعة الفصل 4",
                    "sub": "اضغط على الإجابة، وستعرف فورًا إن كانت صحيحة مع سبب سريع."
          },
          "quiz5": {
                    "title": "مراجعة الفصل 5",
                    "sub": "اضغط على الإجابة لمعرفة إن كانت صحيحة ولماذا."
          }
}
      }
    }
  });
})();
