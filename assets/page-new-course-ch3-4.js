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
    ["#ch3", "chapter-head-1"],
    ["#ch4", "chapter-head-2"],
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
      ar: "SE4705 — مواضيع مختارة في هندسة البرمجيات — الفصلان 3 و4"
    },
    translations: {
      html: {
        "site-nav-label": "أدلة المذاكرة",
        "site-nav-links": "\n<a href=\"index.html\">الصفحة الرئيسية</a>\n<a href=\"new-course-ch1-2.html\">الفصلان 1-2</a>\n<a class=\"current\" href=\"new-course-ch3-4.html\">الفصلان 3-4</a>\n<a href=\"new-course-ch5-6.html\">الفصلان 5-6</a>\n<a href=\"new-course-ch7-8.html\">الفصلان 7-8</a>\n",
        "hero-tag": "SE4705 · مواضيع مختارة",
        "hero-title": "دليل المذاكرة السريع",
        "hero-copy": "الفصلان الثالث والرابع — المفاهيم أولًا، جاهز للاختبار",
        "page-nav": "\n<a href=\"#ch3\">الفصل 3: DevOps والكود</a>\n<a href=\"#quiz3\">اختبار 3</a>\n<a href=\"#ch4\">الفصل 4: الخدمات المصغرة</a>\n<a href=\"#quiz4\">اختبار 4</a>\n",
        "chapter-head-1": "\n<span class=\"num\">الفصل الثالث</span>\n<h2>DevOps وإدارة الكود</h2>\n",
        "chapter-head-2": "\n<span class=\"num\">الفصل الرابع</span>\n<h2>معمارية الخدمات المصغرة</h2>\n",

        "topic-1": "\n<h3><span class=\"dot\"></span>نموذج الدعم التقليدي</h3>\n<p>تقليديًا، ثلاث <b>فرق منفصلة</b> تدير مراحل دورة حياة البرمجية:</p>\n<ul>\n<li><b>فريق التطوير</b> — يكتب نسخة \"نهائية\" ويسلّمها.</li>\n<li><b>فريق الإصدار</b> — يبني نسخة الإصدار، يختبرها، ويعدّ الوثائق قبل الشحن.</li>\n<li><b>فريق الدعم</b> — يقدّم دعم العملاء بعد الإصدار.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر — المشكلة</span>\n<p>فرق منفصلة = <b>تأخيرات حتمية وأعباء إضافية</b>. عمليات التسليم تبطّئ كل شيء.</p>\n</div>\n",

        "topic-2": "\n<h3><span class=\"dot\"></span>DevOps (تطوير + عمليات)</h3>\n<p>نهج بديل يدمج <b>التطوير والنشر والدعم</b> في فريق واحد متعدد المهارات. ثلاث عوامل أدت لظهوره:</p>\n<ul>\n<li><b>أجايل</b> قلّصت وقت التطوير، وكشفت أن الإصدار صار العنق المُتأخر الجديد.</li>\n<li><b>أمازون</b> أعادت هندسة نظامها حول الخدمات، حيث يملك فريق واحد الخدمة من البداية للنهاية — ونشرت مكاسب الموثوقية.</li>\n<li><b>التسليم السحابي</b> جعل إصدار البرمجيات كخدمة ممكنًا — لا حاجة لوسائط مادية أو تحميلات.</li>\n</ul>\n",

        "topic-3": "\n<h3><span class=\"dot\"></span>مبادئ DevOps الثلاثة</h3>\n<ul>\n<li><b>الجميع مسؤول عن كل شيء</b> — مسؤولية مشتركة عن التطوير والتسليم والدعم.</li>\n<li><b>كل ما يمكن أتمتته يجب أتمتته</b> — تدخل يدوي أدنى في النشر.</li>\n<li><b>قِس أولًا، غيّر لاحقًا</b> — اجمع البيانات، ثم استخدمها لاتخاذ قرارات بشأن العمليات والأدوات.</li>\n</ul>\n",

        "topic-4": "\n<h3><span class=\"dot\"></span>فوائد DevOps</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>السرعة والمخاطر</h4>\n<ul>\n<li><b>نشر أسرع</b> — تأخيرات تواصل أقل</li>\n<li><b>مخاطر أقل</b> — زيادات صغيرة، أعطال أقل</li>\n<li><b>إصلاح أسرع</b> — لا انتظار للفريق \"المسؤول\"</li>\n</ul>\n</div>\n<div class=\"col\">\n<h4>الأشخاص</h4>\n<ul>\n<li>فرق أكثر سعادة وإنتاجية</li>\n<li>دوران أقل للموظفين</li>\n<li>ملكية مشتركة للنتائج</li>\n</ul>\n</div>\n</div>\n",

        "topic-5": "\n<h3><span class=\"dot\"></span>إدارة الكود</h3>\n<p>مجموعة ممارسات مدعومة ببرمجيات لإدارة قاعدة كود متطورة — عشرات الآلاف من الأسطر، ومئات الملفات، وعشرات المكتبات.</p>\n<ul>\n<li>تمنع المطورين من <b>الكتابة فوق تغييرات بعضهم</b>.</li>\n<li>تتيح إنشاء وتتبع <b>إصدارات منتج مختلفة</b>.</li>\n<li>تسهّل بناء التنفيذي وتشغيل الاختبارات الآلية.</li>\n</ul>\n",

        "topic-6": "\n<h3><span class=\"dot\"></span>قصة آليس وبوب</h3>\n<div class=\"ex\">\n<span class=\"lbl\">قصة تحذيرية</span>\n<p>آليس تُصلح خطأ في وحدة <em>TaxReturnPreparation</em>. بوب — غير مدرك — كان قد أخذ نسخة <em>قبل</em> إصلاحها وحفظ تغييراته، <b>طامسًا إصلاح آليس</b>. الاختبارات لم تكشف الخطأ المتقطع. الإقرارات الضريبية للعملاء لم تُقدَّم. غرامات. شركة FinanceMadeSimple تنهار. الاثنان يفقدان وظائفهما.</p>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>بدون إدارة كود سليمة، يدمّر العمل المتوازي نفسه بصمت. هذه هي المشكلة التي وُجد التحكّم بالمصدر لحلّها.</p>\n</div>\n",

        "topic-7": "\n<h3><span class=\"dot\"></span>مستودع الكود وميزاته</h3>\n<p>كل أنظمة إدارة الكود تتمركز حول <b>مستودع مشترك</b> يخزن الملفات المصدرية، التهيئات، سكربتات البناء، المكتبات، والتاريخ.</p>\n<ul>\n<li><b>نقل الكود</b> — اسحب إلى الجهاز المحلي، ثم ارجعه.</li>\n<li><b>تخزين واسترجاع الإصدارات</b> — إصدارات كثيرة؛ أيّها يمكن جلبه.</li>\n<li><b>التفريع والدمج</b> — عمل متوازي ثم تسوية.</li>\n<li><b>معلومات الإصدار</b> — من غيّر ماذا ومتى ولماذا.</li>\n<li><b>إدارة التخزين</b> — فروقات فعّالة، لا نسخ كاملة.</li>\n</ul>\n",

        "topic-8": "\n<h3><span class=\"dot\"></span>Git — التحكم الموزّع بالإصدارات</h3>\n<p>أنشأه <b>لينوس تورفالدز عام 2005</b> لإدارة نواة لينكس. الاختراق: بدلًا من حفظ الملفات التي تعمل عليها فقط، يستنسخ Git <b>المستودع بالكامل</b> على جهاز كل مستخدم.</p>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>المرونة</h4>\n<ul><li>كل نسخة هي نسخة احتياطية</li><li>اعمل بدون إنترنت</li><li>استعد المستودع المشترك من أي نسخة</li></ul>\n</div>\n<div class=\"col\">\n<h4>السرعة والحرية</h4>\n<ul><li>الالتزامات محلية — لا شبكة</li><li>جرّب بسرّية بدون كشف العمل للآخرين</li></ul>\n</div>\n</div>\n",

        "topic-9": "\n<h3><span class=\"dot\"></span>التفريع والدمج</h3>\n<p>الـ <b>فرع (branch)</b> نسخة مستقلة قائمة بذاتها تُنشأ عندما يريد أحدهم تغيير ملف. ثم تُدمج التغييرات من الفروع المختلفة في فرع مشترك.</p>\n<ul>\n<li>أخطأت؟ ارجع إلى ملف الأساس.</li>\n<li>التزمت أثناء العمل؟ ارجع إلى أي التزام سابق.</li>\n<li>أنهيت واختبرت؟ ادمج في الفرع الأساسي.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>يضمن المستودع أن تغييرات الفرع <b>لا يمكن أن تطمس</b> ملفات الأساس بدون عملية دمج صريحة — وهي الحماية التي افتقدتها آليس وبوب.</p>\n</div>\n",

        "topic-10": "\n<h3><span class=\"dot\"></span>أتمتة DevOps — أربعة جوانب</h3>\n<ul>\n<li><b>التكامل المستمر (CI)</b> — كل التزام بفرع الأساس يطلق بناءً واختبارًا.</li>\n<li><b>التسليم المستمر</b> — يُختبر الإصدار الجديد في بيئة إنتاج محاكاة.</li>\n<li><b>النشر المستمر</b> — كل تغيير على الأساس يُطلق تلقائيًا للمستخدمين.</li>\n<li><b>البنية التحتية ككود (IaC)</b> — نماذج قابلة للقراءة آليًا تبني منصة التنفيذ تلقائيًا.</li>\n</ul>\n",

        "topic-11": "\n<h3><span class=\"dot\"></span>التكامل المستمر</h3>\n<p>كل دفع للمستودع المشترك يطلق خادم تكامل <b>للبناء والاختبار</b>.</p>\n<ul>\n<li><b>GET</b> المصدر من إدارة الكود</li>\n<li><b>COMPILE &amp; BUILD</b> باستخدام المكتبات والتهيئة وملفات قاعدة البيانات</li>\n<li><b>TEST</b> ضد الاختبارات التنفيذية → نظام قابل للنشر</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">لا تكسر البناء</span>\n<p>\"كسر البناء\" = دفع كود يفشل في اختبارات النظام. استخدم قاعدة <b>التكامل-مرتين</b>: ابنِ واختبر محليًا قبل الدفع إلى مستودع المشروع.</p>\n</div>\n",

        "topic-12": "\n<h3><span class=\"dot\"></span>بناء النظام والاعتماديات</h3>\n<p>لكي يكون CI سريعًا، يجب أن يكون البناء <b>تزايديًا</b> — أعد فقط ترجمة الأجزاء التي تغيّرت. تتبع أدوات البناء الآلية <b>نموذج اعتماديات</b> باستخدام توقيتات الملفات:</p>\n<ul>\n<li>الملف المُترجم أحدث من المصدر → لا شيء.</li>\n<li>المصدر أحدث من المترجم → أعد الترجمة.</li>\n<li>تغيّرت أي اعتمادية (مثل <em>Classdef</em>) → أعد ترجمة الملف المعتمد.</li>\n</ul>\n",

        "topic-13": "\n<h3><span class=\"dot\"></span>التسليم المستمر مقابل النشر المستمر</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>التسليم المستمر</h4>\n<ul>\n<li>إعداد <b>بيئة اختبار مدرّجة</b> تحاكي الإنتاج</li>\n<li>تثبيت وتشغيل اختبارات القبول (وظائفية، حمل، أداء)</li>\n<li>البرمجية <em>جاهزة</em> للشحن</li>\n</ul>\n</div>\n<div class=\"col\">\n<h4>النشر المستمر</h4>\n<ul>\n<li>تثبيت على خوادم الإنتاج</li>\n<li>تحويل حركة المرور للنسخة الجديدة</li>\n<li>البرمجية <em>تُشحن</em> — تلقائيًا في كل تغيير</li>\n</ul>\n</div>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>النشر المستمر عمليًا فقط عندما يُسلَّم المنتج <b>كخدمة سحابية</b>.</p>\n</div>\n",

        "topic-14": "\n<h3><span class=\"dot\"></span>فوائد النشر المستمر</h3>\n<ul>\n<li><b>تكاليف أقل</b> — خط أنابيب آلي يعود ربحه سريعًا مع التحديثات المنتظمة.</li>\n<li><b>حل المشاكل أسرع</b> — المشكلة غالبًا تشير إلى آخر تغيير صغير.</li>\n<li><b>ملاحظات أسرع</b> — الميزات تشحن فور جاهزيتها؛ الملاحظات تقود التحسين.</li>\n<li><b>اختبار A/B</b> — انشر الإصدار الجديد على بعض الخوادم، حوّل الحركة عبر موازن الحمل، وقِس.</li>\n</ul>\n",

        "topic-15": "\n<h3><span class=\"dot\"></span>البنية التحتية ككود (IaC)</h3>\n<p>بدلًا من تهيئة الخوادم يدويًا، اكتب البنية التحتية كـ <b>نموذج قابل للمعالجة آليًا</b>. أدوات CM مثل <b>Puppet</b> و<b>Chef</b> تثبّت البرمجيات والخدمات تلقائيًا.</p>\n<div class=\"remember\">\n<span class=\"lbl\">أربع خصائص</span>\n<p><b>الرؤية</b> (نموذج يقرأه الجميع)، <b>القابلية للتكرار</b> (نفس التسلسل، نفس النتيجة)، <b>الموثوقية</b> (لا أخطاء يدوية)، <b>الاسترداد</b> (مُصدَّر — ارجع لإعدادات تعمل).</p>\n</div>\n",

        "topic-16": "\n<h3><span class=\"dot\"></span>الحاويات (Containers)</h3>\n<p>توفر الحاوية <b>بيئة تنفيذ قائمة بذاتها</b> تعمل فوق نظام تشغيل كلينكس. مع <b>Docker</b>، يعرّف <em>Dockerfile</em> بنيتك التحتية ككود؛ ومعالجته تبني صورة قابلة للتنفيذ.</p>\n<ul>\n<li><b>بيئات متطابقة</b> — نفس الصورة للاختبار والإنتاج.</li>\n<li><b>تحديثات سهلة</b> — أعد بناء الصورة بالبرمجية الجديدة، شغّلها بجانب القديمة، ثم حوّل حركة المرور.</li>\n</ul>\n",

        "topic-17": "\n<h3><span class=\"dot\"></span>قياسات DevOps</h3>\n<p>أربعة أنواع من قياس تطوير البرمجيات:</p>\n<ul>\n<li><b>العملية</b> — بيانات التطوير والاختبار والنشر.</li>\n<li><b>الخدمة</b> — أداء، موثوقية، قبول العميل.</li>\n<li><b>الاستخدام</b> — كيف يستخدم العملاء المنتج فعلًا.</li>\n<li><b>نجاح العمل</b> — كيف يساهم المنتج في نجاح الأعمال إجمالًا.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">سجل مقاييس IBM (9 مقاييس)</span>\n<p><b>العملية:</b> تكرار النشر، حجم التغيير، الزمن من التطوير للنشر، نسبة فشل النشر، متوسط زمن الاستعادة. <b>الخدمة:</b> الأداء، التوافر، شكاوى العملاء، نمو عدد العملاء.</p>\n</div>\n",

        "topic-18": "\n<h3><span class=\"dot\"></span>الخدمات البرمجية</h3>\n<p><b>الخدمة البرمجية</b> مكوّن يُوصل إليه عن بُعد عبر الإنترنت. بإدخال معيّن، تُنتج إخراجًا — <b>بدون آثار جانبية</b>.</p>\n<ul>\n<li>يُوصل إليها فقط عبر <b>واجهتها المنشورة</b>؛ والتنفيذ مخفي.</li>\n<li><b>عديمة الحالة</b> — الحالة إما في قاعدة بيانات أو يمررها المستدعي.</li>\n<li>بسبب غياب الحالة المحلية، يمكن إعادة توزيع الخدمات وتكرارها بحرية.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر — الخدمات الحديثة</span>\n<p>الخدمات الويب \"الكبيرة\" (SOAP، WSDL، XML) كانت ثقيلة. الخدمات الحديثة تستخدم <b>بروتوكولات أخف</b> لعبء أقل وتنفيذ أسرع.</p>\n</div>\n",

        "topic-19": "\n<h3><span class=\"dot\"></span>الخدمات المصغرة</h3>\n<p>خدمات <b>صغيرة الحجم وعديمة الحالة</b>، ذات <b>مسؤولية واحدة</b>، تتجمع لإنشاء التطبيقات. كل واحدة مستقلة تمامًا — لها قاعدة بياناتها وكود واجهتها.</p>\n<div class=\"ex\">\n<span class=\"lbl\">حالة الاستخدام</span>\n<p>للمنتجات السحابية التي تحتاج <b>مرونة وقابلية توسع وصمود</b>، صمّمها حول معمارية خدمات مصغرة.</p>\n</div>\n",

        "topic-20": "\n<h3><span class=\"dot\"></span>خصائص الخدمات المصغرة</h3>\n<ul>\n<li><b>قائمة بذاتها</b> — تدير بياناتها وواجهتها؛ لا اعتماديات خارجية.</li>\n<li><b>خفيفة</b> — بروتوكولات تواصل قليلة العبء.</li>\n<li><b>مستقلة عن التنفيذ</b> — أي لغة، أي تقنية قاعدة بيانات.</li>\n<li><b>قابلة للنشر باستقلالية</b> — كل واحدة في عمليتها، تُنشر عبر الأتمتة.</li>\n<li><b>موجهة للأعمال</b> — تنفّذ قدرات أعمال، لا مجرد وظائف تقنية.</li>\n</ul>\n",

        "topic-21": "\n<h3><span class=\"dot\"></span>التماسك والتقارن والمسؤولية الواحدة</h3>\n<p>الخدمة المصغرة المصممة جيدًا لها <b>تماسك عالٍ</b> و<b>تقارن منخفض</b>.</p>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>تماسك عالٍ</h4>\n<ul><li>كل ما تحتاج الخدمة لتسليمه يعيش <b>داخل</b> الخدمة</li><li>أجزاؤها الداخلية مترابطة بقوة</li></ul>\n</div>\n<div class=\"col\">\n<h4>تقارن منخفض</h4>\n<ul><li>علاقات قليلة مع مكونات أخرى</li><li>سهلة التغيير دون كسر غيرها</li></ul>\n</div>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>كل خدمة تفعل <b>شيئًا واحدًا فقط</b> — لكن \"شيء واحد\" حكم. ليس بالضرورة وظيفة مفردة — قد تكون مجال مسؤولية واحدة.</p>\n</div>\n",

        "topic-22": "\n<h3><span class=\"dot\"></span>معمارية الخدمات المصغرة (مقابل المتراصة)</h3>\n<p><b>أسلوب معماري</b> يحل ألمين للأنظمة المتراصة:</p>\n<ul>\n<li>يجب <b>إعادة بناء واختبار ونشر</b> النظام كله عند كل تغيير — بطيء، والتغييرات قد تؤثر على مكونات لا علاقة لها.</li>\n<li>للتعامل مع حمل أكبر، يجب توسيع <b>النظام كله</b> — حتى لو الميزات الساخنة قليلة.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">حل الخدمات المصغرة</span>\n<p>كل خدمة تُنشر في حاويتها، يمكن إيقافها/إعادة تشغيلها معزولة. للحمل الأكبر، فقط <b>وسّع</b> الخدمة الساخنة — أرخص من توسيع نظام متراص.</p>\n</div>\n",

        "topic-23": "\n<h3><span class=\"dot\"></span>مثال: نظام طباعة الصور</h3>\n<p>تطبيق جوّال يرفع فيه المستخدمون الصور (من الهاتف أو إنستغرام)، يختارون الحجم والوسيط (كوب، تيشيرت...)، يدفعون (Apple/Android Pay أو بطاقة محفوظة)، وتُشحن المطبوعات للمنزل.</p>\n<ul>\n<li>خدمة <b>التسجيل</b></li>\n<li>خدمة <b>المصادقة</b></li>\n<li>خدمة <b>الرفع</b></li>\n<li>خدمة <b>الدفع</b></li>\n<li>خدمة <b>الطباعة</b></li>\n<li>خدمة <b>الإرسال</b></li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">بوابة API</span>\n<p>التطبيق يتحدث مع <b>بوابة API</b> واحدة، التي توجه الطلبات للخدمة الصحيحة — تخفي البنية الداخلية عن العميل.</p>\n</div>\n",

        "topic-24": "\n<h3><span class=\"dot\"></span>إرشادات التفكيك</h3>\n<ul>\n<li><b>وازن بين الدقة والأداء</b> — الخدمات أحادية الوظيفة تحدّ من نطاق التغيير لكن تضيف تواصلًا بين الخدمات (الذي يبطئ النظام).</li>\n<li><b>مبدأ الإغلاق المشترك</b> — الأشياء التي تتغير معًا تنتمي لنفس الخدمة.</li>\n<li><b>توافق مع قدرات الأعمال</b> — كل خدمة تدعم مجال أعمال محدد.</li>\n<li><b>وصول أدنى للبيانات</b> — أعطِ كل خدمة فقط ما تحتاج؛ ووزّع البيانات المشتركة بحذر.</li>\n</ul>\n",

        "topic-25": "\n<h3><span class=\"dot\"></span>التواصل المتزامن مقابل غير المتزامن</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>متزامن (A ينتظر B)</h4>\n<ul>\n<li>A يرسل الطلب ويعلّق</li>\n<li>ينتظر رد B</li>\n<li>بسيط — لكنه يحجب</li>\n</ul>\n</div>\n<div class=\"col\">\n<h4>غير متزامن (A و B يعملان معًا)</h4>\n<ul>\n<li>A يضع الطلب في طابور</li>\n<li>A يستمر بالعمل</li>\n<li>B يضع النتيجة في طابور؛ A يقتنصها لاحقًا</li>\n</ul>\n</div>\n</div>\n",

        "topic-26": "\n<h3><span class=\"dot\"></span>التواصل المباشر مقابل غير المباشر</h3>\n<ul>\n<li><b>مباشر</b> — الخدمات تعرف عناوين بعضها وتتصل مباشرة.</li>\n<li><b>غير مباشر</b> — الخدمات ترسل إلى <b>وسيط رسائل (message broker)</b>؛ والوسيط يجد خدمة قادرة على معالجة الطلب.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>غير مباشر = تقارن أرخى وتوزيع حمل أسهل؛ مباشر = أبسط لكن تقارن أشد بين الخدمات.</p>\n</div>\n",

        "topic-27": "\n<h3><span class=\"dot\"></span>تصميم البيانات والاتساق النهائي</h3>\n<p>اعزل بيانات كل خدمة؛ وإن وجب المشاركة، ففضّل <b>القراءة فقط</b>. معاملات ACID الكاملة بين خدمات مصغرة غير عملية.</p>\n<ul>\n<li><b>تناقض تابع</b> — فشل خدمة يترك بيانات أخرى قديمة.</li>\n<li><b>تناقض النسخ</b> — نسخ متزامنة تحدّث نسخها من قاعدة البيانات باستقلالية.</li>\n</ul>\n<div class=\"ex\">\n<span class=\"lbl\">الاتساق النهائي</span>\n<p>الضمان أن قواعد البيانات <em>ستصير</em> متسقة — يُنفّذ عبر <b>سجل تحديثات معلّقة</b> تسحب منه النسخ وتؤكّد.</p>\n</div>\n",

        "topic-28": "\n<h3><span class=\"dot\"></span>تنسيق الخدمات: التنسيق مقابل التكويغ</h3>\n<p>معظم جلسات المستخدم <b>سير عمل (workflows)</b> — تسلسل عمليات بترتيب محدد (مثال: تسجيل دخول بـ 3 محاولات قبل الفشل).</p>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>التنسيق (Orchestration)</h4>\n<ul>\n<li>خدمة <b>متحكّم</b> تقود سير العمل</li>\n<li>تستدعي login ثم password وهكذا</li>\n<li>سلطة مركزية</li>\n</ul>\n</div>\n<div class=\"col\">\n<h4>التكويغ (Choreography)</h4>\n<ul>\n<li>الخدمات تتفاعل مع <b>الأحداث</b></li>\n<li>لا متحكّم مركزي</li>\n<li>تنسيق فضفاض مدفوع بالأحداث</li>\n</ul>\n</div>\n</div>\n",

        "topic-29": "\n<h3><span class=\"dot\"></span>إدارة الفشل وقواطع الدائرة</h3>\n<p>ثلاثة أنواع فشل في أنظمة الخدمات المصغرة:</p>\n<ul>\n<li><b>داخلي</b> — الخدمة ترصد وتبلّغ (مثل URL غير صالح).</li>\n<li><b>خارجي</b> — سبب خارجي يجعل الخدمة لا تستجيب.</li>\n<li><b>أداء</b> — الخدمة تتدهور؛ تحتاج مراقبة خارجية.</li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">نمط قاطع الدائرة</span>\n<p>المهلات الزمنية البسيطة تبطئ كل النظام لأن كل اتصال بخدمة ميتة ينتظر. <b>قاطع الدائرة</b> يرفض الوصول للخدمة الفاشلة فورًا — مثل قاطع كهربائي — متجنبًا تأخير المهلة كليًا.</p>\n</div>\n",

        "topic-30": "\n<h3><span class=\"dot\"></span>خدمات RESTful</h3>\n<p>REST = <b>نقل تمثيل الحالة (Representational State Transfer)</b>. الخادم ينقل تمثيلات <b>للموارد</b> الرقمية إلى العملاء. كل مورد له <b>URI</b> فريد.</p>\n<ul>\n<li><b>أفعال HTTP</b> — GET، PUT، POST، DELETE تُعيّن على العمليات.</li>\n<li>خدمات <b>عديمة الحالة</b> — لا حالة داخلية بين الاتصالات.</li>\n<li>موارد <b>قابلة للعنونة بـ URI</b> بهرمية (مثل <code>/incidents/A90/stonehaven/north/1</code>).</li>\n<li><b>JSON أو XML</b> للتمثيل (JSON الأشيع).</li>\n</ul>\n",

        "topic-31": "\n<h3><span class=\"dot\"></span>عمليات CRUD في REST</h3>\n<div class=\"compare\">\n<div class=\"col\">\n<h4>إنشاء / قراءة</h4>\n<ul>\n<li><b>POST</b> ← إنشاء مورد جديد (خطأ إن وُجد)</li>\n<li><b>GET</b> ← قراءة؛ لا يعدّل الحالة أبدًا</li>\n</ul>\n</div>\n<div class=\"col\">\n<h4>تحديث / حذف</h4>\n<ul>\n<li><b>PUT</b> ← يعدّل موردًا قائمًا (ليس للإنشاء)</li>\n<li><b>DELETE</b> ← يجعل الوصول عبر URI متعذرًا</li>\n</ul>\n</div>\n</div>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر</span>\n<p>GET يجب أن يكون <b>غير متغيّر (idempotent)</b> — تكراره (بدون PUT بينه) يرجع نفس القيمة دائمًا.</p>\n</div>\n",

        "topic-32": "\n<h3><span class=\"dot\"></span>نشر الخدمات وخط الأنابيب المستمر</h3>\n<p>كل فريق خدمة مصغرة يختار لغته وقاعدة بياناته ومكتباته — فلا توجد تهيئة نشر موحدة. الفرق تملك النشر إلى جانب التطوير، باستخدام <b>النشر المستمر</b>.</p>\n<ul>\n<li>الالتزام يطلق <b>اختبارات الوحدة</b></li>\n<li>نجاح → <b>بناء نظام الاختبار</b></li>\n<li>نجاح → <b>اختبارات التكامل</b></li>\n<li>نجاح → <b>تعبئة في حاوية</b>، نشر، تشغيل اختبارات القبول</li>\n<li>نجاح → <b>استبدال الخدمة الحالية</b></li>\n</ul>\n<div class=\"remember\">\n<span class=\"lbl\">تذكر — الخدمات المُصدَّرة</span>\n<p>أبقِ الإصدارات القديمة حيّة خلف بوابة API لتتمكن من <b>التراجع فورًا</b> إذا أساء إصدار جديد.</p>\n</div>\n",

        "footer": "\n<p>أنت قادر على هذا. راجع صناديق <b>تذكر</b> العنبرية مرة أخيرة قبل الاختبار.</p>\n<div class=\"pill-row\">\n<span class=\"pill\">DevOps = تطوير + عمليات معًا</span>\n<span class=\"pill\">الخدمات المصغرة = مسؤولية واحدة</span>\n<span class=\"pill\">REST = GET/POST/PUT/DELETE</span>\n</div>\n<a class=\"top-link\" href=\"#\">↑ العودة إلى الأعلى</a>\n"
      }
    },
    quizzes: {
      en: {
        "quiz3": [
          {
            "q": "What does 'DevOps' stand for?",
            "options": [
              "Developer Operations Standard",
              "Development + Operations",
              "Deployment Optimization",
              "Distributed Object Programming"
            ],
            "answer": 1,
            "explain": "DevOps merges Development and Operations into a single team responsible for the whole lifecycle."
          },
          {
            "q": "Which is NOT one of the three DevOps principles?",
            "options": [
              "Everyone is responsible for everything",
              "Everything that can be automated should be automated",
              "Always release on Fridays",
              "Measure first, change later"
            ],
            "answer": 2,
            "explain": "The three principles are shared responsibility, automation, and measurement-driven change."
          },
          {
            "q": "Why was DevOps developed?",
            "options": [
              "To replace agile methods",
              "To speed up release and support, since the traditional model has inevitable delays",
              "To increase the size of release teams",
              "To replace cloud computing"
            ],
            "answer": 1,
            "explain": "Traditional separate teams cause delays and overheads — DevOps removes the hand-offs."
          },
          {
            "q": "In the Alice & Bob story, what went wrong?",
            "options": [
              "Alice forgot to write tests",
              "Bob took a copy before Alice's fix and his save overwrote her fix",
              "The compiler was broken",
              "The customer never paid"
            ],
            "answer": 1,
            "explain": "Without code management, Bob's older copy overwrote Alice's bug fix when saved."
          },
          {
            "q": "Who created Git and in what year?",
            "options": [
              "Brian Kernighan, 1995",
              "Linus Torvalds, 2005",
              "Ken Thompson, 2001",
              "Tim Berners-Lee, 1999"
            ],
            "answer": 1,
            "explain": "Linus Torvalds created Git in 2005 to manage the Linux kernel source code."
          },
          {
            "q": "What makes Git 'distributed'?",
            "options": [
              "It runs on multiple operating systems",
              "Every user has a full clone of the repository on their machine",
              "It uses multiple network protocols",
              "It splits files across hard drives"
            ],
            "answer": 1,
            "explain": "DVCS means every user owns a complete repository clone — resilience, speed, and offline work."
          },
          {
            "q": "In continuous integration, what triggers a build?",
            "options": [
              "A nightly cron job only",
              "A developer manually pressing 'build'",
              "Each push of a change to the project's master branch",
              "A weekly release manager review"
            ],
            "answer": 2,
            "explain": "CI builds and tests automatically every time a change is pushed to the shared repo."
          },
          {
            "q": "What is 'breaking the build'?",
            "options": [
              "Physically damaging the build server",
              "Pushing code that, when integrated, causes system tests to fail",
              "Pausing a build to fix a typo",
              "Deleting a Git branch"
            ],
            "answer": 1,
            "explain": "Code that fails system tests after integration breaks the build for everyone."
          },
          {
            "q": "What is the difference between continuous delivery and continuous deployment?",
            "options": [
              "They mean the same thing",
              "Delivery prepares the system in a staged environment; deployment automatically pushes it to production",
              "Deployment is manual; delivery is automatic",
              "Delivery is only for mobile apps"
            ],
            "answer": 1,
            "explain": "Delivery = ready-to-release. Deployment = released automatically on every change."
          },
          {
            "q": "What is 'Infrastructure as Code'?",
            "options": [
              "Writing the application logic in YAML",
              "Defining the server infrastructure in a machine-processable model so tools like Puppet/Chef can build it automatically",
              "Storing physical hardware diagrams in Git",
              "Encrypting source code"
            ],
            "answer": 1,
            "explain": "IaC means the infrastructure is a model under version control — visibility, reproducibility, reliability, recovery."
          },
          {
            "q": "What file defines what's installed inside a Docker container?",
            "options": [
              "Makefile",
              "Containerfile.yaml",
              "Dockerfile",
              "manifest.json"
            ],
            "answer": 2,
            "explain": "A Dockerfile is, in essence, your infrastructure-as-code definition for the container."
          },
          {
            "q": "Which is NOT a type of DevOps measurement?",
            "options": [
              "Process measurement",
              "Service measurement",
              "Astrology measurement",
              "Usage measurement"
            ],
            "answer": 2,
            "explain": "The four types are Process, Service, Usage, and Business success measurement."
          },
          {
            "q": "Which DevOps process metric should you want to DECREASE?",
            "options": [
              "Deployment frequency",
              "Mean time to recovery",
              "Lines of code changed",
              "Customer count"
            ],
            "answer": 1,
            "explain": "Lower MTTR = recover faster from failures. Deployment frequency and code volume should increase."
          }
        ],
        "quiz4": [
          {
            "q": "Which best describes a microservice?",
            "options": [
              "A large, stateful service handling many responsibilities",
              "A small-scale, stateless service with a single responsibility",
              "A service that only runs on Kubernetes",
              "A type of database"
            ],
            "answer": 1,
            "explain": "Microservices are small, stateless, single-responsibility services with their own DB and UI."
          },
          {
            "q": "A microservice is described as 'self-contained' because…",
            "options": [
              "It cannot communicate with other services",
              "It manages its own data and UI, with no external dependencies",
              "It only runs on one machine",
              "It uses no libraries"
            ],
            "answer": 1,
            "explain": "Self-contained = manages own data, own UI, runs in its own process — no external dependencies."
          },
          {
            "q": "What does 'high cohesion, low coupling' mean for a microservice?",
            "options": [
              "Many internal relationships, few external ones — easy to change without breaking others",
              "Many external relationships, few internal ones",
              "No internal organization",
              "It works without networking"
            ],
            "answer": 0,
            "explain": "Cohesion = parts inside relate strongly; coupling = relationships with other components stay few."
          },
          {
            "q": "Which problem of monolithic systems does microservices architecture solve?",
            "options": [
              "Only the need for backups",
              "The need to rebuild and redeploy the whole system on any change, and to scale the whole system for any hot feature",
              "The need to write tests",
              "Compiler errors"
            ],
            "answer": 1,
            "explain": "Microservices isolate change and let you scale only the hot services."
          },
          {
            "q": "What is the 'common closure principle' for microservices?",
            "options": [
              "All services should close at the same time",
              "Things that change together should live in the same service",
              "Use the same closing braces in every file",
              "Always close database connections"
            ],
            "answer": 1,
            "explain": "Common closure: co-locate things that change together — most changes touch only one service."
          },
          {
            "q": "In synchronous service interaction, what does service A do while B processes?",
            "options": [
              "Continues other work in parallel",
              "Suspends and waits for B's response",
              "Restarts itself",
              "Returns an error immediately"
            ],
            "answer": 1,
            "explain": "Sync = A waits. Async = A continues and picks up the result later."
          },
          {
            "q": "What is a message broker for?",
            "options": [
              "Encrypting service data",
              "Indirect communication — services name a target service, and the broker routes the request",
              "Replacing the database",
              "Caching HTML pages"
            ],
            "answer": 1,
            "explain": "Indirect comms via a broker (a.k.a. message bus) decouples sender from receiver."
          },
          {
            "q": "Why are full ACID transactions impractical across microservices?",
            "options": [
              "They require centralized control over multiple service databases, which breaks independence",
              "They are illegal in some countries",
              "They are too cheap",
              "They only work in Python"
            ],
            "answer": 0,
            "explain": "Each service owns its DB. Cross-service ACID would re-couple everything. Use eventual consistency instead."
          },
          {
            "q": "What is 'eventual consistency'?",
            "options": [
              "All databases are always identical",
              "A guarantee that databases will eventually become consistent, implemented via a pending-updates log",
              "Data is consistent only on Tuesdays",
              "Consistency is checked manually once a year"
            ],
            "answer": 1,
            "explain": "Replicas pull updates from a transaction log and acknowledge — converging over time."
          },
          {
            "q": "Service orchestration differs from choreography in that…",
            "options": [
              "Orchestration is event-driven; choreography has a central controller",
              "Orchestration has a central controller; choreography is event-driven and decentralized",
              "They are the same thing",
              "Choreography requires synchronous calls only"
            ],
            "answer": 1,
            "explain": "Orchestrator drives the workflow centrally. Choreography = services react to events independently."
          },
          {
            "q": "Why use a circuit breaker instead of plain timeouts?",
            "options": [
              "Circuit breakers use less RAM",
              "Plain timeouts make every call to a failed service wait — slowing the whole system; a circuit breaker denies access immediately",
              "Circuit breakers are required by law",
              "Timeouts don't work in containers"
            ],
            "answer": 1,
            "explain": "Circuit breaker = fail fast. Avoids piling delay onto every call to a dead service."
          },
          {
            "q": "In a RESTful API, which HTTP verb should you use to read a resource?",
            "options": [
              "POST",
              "GET",
              "PUT",
              "DELETE"
            ],
            "answer": 1,
            "explain": "GET is for reading. POST creates, PUT updates, DELETE removes."
          },
          {
            "q": "Which is NOT a RESTful service principle?",
            "options": [
              "Use HTTP verbs",
              "Stateless services",
              "URI-addressable resources",
              "Must use SOAP for all requests"
            ],
            "answer": 3,
            "explain": "REST is the lightweight alternative to SOAP. JSON (or XML) and HTTP verbs are the norm."
          },
          {
            "q": "Why keep older service versions deployed alongside the new one in continuous deployment?",
            "options": [
              "For nostalgia",
              "To enable instant rollback if the new version misbehaves",
              "To use up extra disk space",
              "Because containers are slow to delete"
            ],
            "answer": 1,
            "explain": "Versioned services let you switch the API gateway back to a known-good version instantly."
          }
        ]
      },
      ar: {
        "quiz3": [
          {
            "q": "ماذا تعني \"DevOps\"؟",
            "options": [
              "معيار عمليات المطور",
              "تطوير + عمليات (Development + Operations)",
              "تحسين النشر",
              "برمجة الكائنات الموزعة"
            ],
            "answer": 1,
            "explain": "DevOps يدمج التطوير والعمليات في فريق واحد مسؤول عن دورة الحياة كلها."
          },
          {
            "q": "أي مما يلي ليس من مبادئ DevOps الثلاثة؟",
            "options": [
              "الجميع مسؤول عن كل شيء",
              "كل ما يمكن أتمتته يجب أتمتته",
              "أصدر دائمًا يوم الجمعة",
              "قس أولًا، غيّر لاحقًا"
            ],
            "answer": 2,
            "explain": "المبادئ الثلاثة: المسؤولية المشتركة، والأتمتة، والتغيير المدفوع بالقياس."
          },
          {
            "q": "لماذا طُوّر DevOps؟",
            "options": [
              "لاستبدال أساليب أجايل",
              "لتسريع الإصدار والدعم، لأن النموذج التقليدي فيه تأخيرات حتمية",
              "لزيادة حجم فرق الإصدار",
              "لاستبدال الحوسبة السحابية"
            ],
            "answer": 1,
            "explain": "الفرق المنفصلة التقليدية تسبب تأخيرات وأعباء — DevOps يلغي عمليات التسليم بينها."
          },
          {
            "q": "في قصة آليس وبوب، ما الذي حدث؟",
            "options": [
              "نسيت آليس كتابة الاختبارات",
              "أخذ بوب نسخة قبل إصلاح آليس وحفظ تغييراته فطمس إصلاحها",
              "كان المُترجِم معطّلًا",
              "لم يدفع العميل"
            ],
            "answer": 1,
            "explain": "بدون إدارة كود، نسخة بوب القديمة طمست إصلاح آليس عند الحفظ."
          },
          {
            "q": "من أنشأ Git وفي أي سنة؟",
            "options": [
              "بريان كرنيجان، 1995",
              "لينوس تورفالدز، 2005",
              "كن طومسون، 2001",
              "تيم برنرز-لي، 1999"
            ],
            "answer": 1,
            "explain": "لينوس تورفالدز أنشأ Git في 2005 لإدارة كود نواة لينكس."
          },
          {
            "q": "ما الذي يجعل Git \"موزعًا\"؟",
            "options": [
              "يعمل على عدة أنظمة تشغيل",
              "كل مستخدم لديه استنساخ كامل للمستودع على جهازه",
              "يستخدم عدة بروتوكولات شبكة",
              "يوزع الملفات عبر الأقراص الصلبة"
            ],
            "answer": 1,
            "explain": "DVCS يعني أن كل مستخدم يملك استنساخ مستودع كامل — مرونة وسرعة وعمل بدون إنترنت."
          },
          {
            "q": "في التكامل المستمر، ما الذي يطلق البناء؟",
            "options": [
              "مهمة كرون ليلية فقط",
              "ضغط مطور يدوي على زر \"build\"",
              "كل دفع تغيير لفرع الأساس في المشروع",
              "مراجعة أسبوعية من مدير الإصدارات"
            ],
            "answer": 2,
            "explain": "CI يبني ويختبر تلقائيًا في كل دفع للمستودع المشترك."
          },
          {
            "q": "ما هو \"كسر البناء\"؟",
            "options": [
              "إتلاف خادم البناء فيزيائيًا",
              "دفع كود يؤدي عند الدمج لفشل اختبارات النظام",
              "إيقاف البناء لإصلاح خطأ إملائي",
              "حذف فرع Git"
            ],
            "answer": 1,
            "explain": "كود يفشل في اختبارات النظام بعد الدمج يكسر البناء للجميع."
          },
          {
            "q": "ما الفرق بين التسليم المستمر والنشر المستمر؟",
            "options": [
              "متطابقان",
              "التسليم يجهز النظام في بيئة مدرّجة؛ النشر يدفعه تلقائيًا للإنتاج",
              "النشر يدوي؛ التسليم آلي",
              "التسليم فقط لتطبيقات الجوال"
            ],
            "answer": 1,
            "explain": "التسليم = جاهز للشحن. النشر = مُشحن تلقائيًا في كل تغيير."
          },
          {
            "q": "ما هي \"البنية التحتية ككود\"؟",
            "options": [
              "كتابة منطق التطبيق بـ YAML",
              "تعريف البنية التحتية للخادم في نموذج آلي ليبنيها Puppet/Chef تلقائيًا",
              "حفظ مخططات العتاد في Git",
              "تشفير الكود المصدري"
            ],
            "answer": 1,
            "explain": "IaC = البنية التحتية نموذج تحت التحكم بالإصدارات — رؤية، تكرار، موثوقية، استرداد."
          },
          {
            "q": "ما الملف الذي يعرّف ما داخل حاوية Docker؟",
            "options": [
              "Makefile",
              "Containerfile.yaml",
              "Dockerfile",
              "manifest.json"
            ],
            "answer": 2,
            "explain": "Dockerfile هو، في جوهره، تعريف بنيتك التحتية ككود للحاوية."
          },
          {
            "q": "أي مما يلي ليس نوع قياس في DevOps؟",
            "options": [
              "قياس العملية",
              "قياس الخدمة",
              "قياس الأبراج",
              "قياس الاستخدام"
            ],
            "answer": 2,
            "explain": "الأنواع الأربعة: العملية، والخدمة، والاستخدام، ونجاح الأعمال."
          },
          {
            "q": "أي مقياس عملية في DevOps يجب أن تريد <b>تقليله</b>؟",
            "options": [
              "تكرار النشر",
              "متوسط زمن الاستعادة",
              "أسطر الكود المُغيّرة",
              "عدد العملاء"
            ],
            "answer": 1,
            "explain": "MTTR أقل = استعادة أسرع من الأعطال. تكرار النشر وحجم الكود يجب أن يرتفعا."
          }
        ],
        "quiz4": [
          {
            "q": "أي وصف يصف خدمة مصغرة بأفضل؟",
            "options": [
              "خدمة كبيرة بحالة تتولى مسؤوليات كثيرة",
              "خدمة صغيرة عديمة الحالة بمسؤولية واحدة",
              "خدمة تعمل فقط على Kubernetes",
              "نوع من قواعد البيانات"
            ],
            "answer": 1,
            "explain": "الخدمات المصغرة صغيرة وعديمة الحالة، أحادية المسؤولية، ولها قاعدة بياناتها وواجهتها."
          },
          {
            "q": "تُوصف الخدمة المصغرة بأنها \"قائمة بذاتها\" لأنها…",
            "options": [
              "لا تستطيع التواصل مع خدمات أخرى",
              "تدير بياناتها وواجهتها، بلا اعتماديات خارجية",
              "تعمل فقط على جهاز واحد",
              "لا تستخدم مكتبات"
            ],
            "answer": 1,
            "explain": "قائمة بذاتها = تدير بياناتها، وواجهتها، وتعمل في عمليتها — بلا اعتماديات خارجية."
          },
          {
            "q": "ماذا يعني \"تماسك عالٍ، تقارن منخفض\" للخدمة المصغرة؟",
            "options": [
              "علاقات داخلية كثيرة، خارجية قليلة — سهلة التغيير دون كسر غيرها",
              "علاقات خارجية كثيرة، داخلية قليلة",
              "لا تنظيم داخلي",
              "تعمل بدون شبكة"
            ],
            "answer": 0,
            "explain": "التماسك = الأجزاء الداخلية مترابطة بقوة؛ التقارن = العلاقات مع المكونات الأخرى تبقى قليلة."
          },
          {
            "q": "أي مشكلة في الأنظمة المتراصة تحلّها معمارية الخدمات المصغرة؟",
            "options": [
              "فقط الحاجة للنسخ الاحتياطي",
              "الحاجة لإعادة بناء ونشر النظام كله عند أي تغيير، وتوسيع النظام كله لأي ميزة ساخنة",
              "الحاجة لكتابة اختبارات",
              "أخطاء المُترجم"
            ],
            "answer": 1,
            "explain": "الخدمات المصغرة تعزل التغيير وتتيح توسيع الخدمات الساخنة فقط."
          },
          {
            "q": "ما هو \"مبدأ الإغلاق المشترك\" للخدمات المصغرة؟",
            "options": [
              "كل الخدمات يجب أن تغلق في نفس الوقت",
              "الأشياء التي تتغير معًا يجب أن تعيش في نفس الخدمة",
              "استخدام نفس أقواس الإغلاق في كل ملف",
              "أغلق دائمًا اتصالات قاعدة البيانات"
            ],
            "answer": 1,
            "explain": "الإغلاق المشترك: ضمّ الأشياء التي تتغير معًا — معظم التغييرات تلامس خدمة واحدة فقط."
          },
          {
            "q": "في التفاعل المتزامن، ماذا يفعل A بينما يعالج B؟",
            "options": [
              "يواصل أعمالًا أخرى بالتوازي",
              "يعلّق وينتظر رد B",
              "يعيد تشغيل نفسه",
              "يرجع خطأ فورًا"
            ],
            "answer": 1,
            "explain": "متزامن = A ينتظر. غير متزامن = A يستمر ويلتقط النتيجة لاحقًا."
          },
          {
            "q": "لماذا نستخدم وسيط الرسائل (message broker)؟",
            "options": [
              "لتشفير بيانات الخدمة",
              "للتواصل غير المباشر — الخدمات تسمّي خدمة هدفًا، والوسيط يوجه الطلب",
              "ليحل محل قاعدة البيانات",
              "لتخزين صفحات HTML مؤقتًا"
            ],
            "answer": 1,
            "explain": "التواصل غير المباشر عبر وسيط (message bus) يفصل المرسل عن المستقبل."
          },
          {
            "q": "لماذا معاملات ACID الكاملة غير عملية بين خدمات مصغرة؟",
            "options": [
              "تتطلب تحكمًا مركزيًا في عدة قواعد بيانات للخدمات، ما يكسر استقلالها",
              "غير قانونية في بعض الدول",
              "رخيصة جدًا",
              "تعمل فقط في Python"
            ],
            "answer": 0,
            "explain": "كل خدمة تملك قاعدة بياناتها. ACID عبر الخدمات يعيد ربط كل شيء. استخدم الاتساق النهائي بدلاً منه."
          },
          {
            "q": "ما هو \"الاتساق النهائي\"؟",
            "options": [
              "كل قواعد البيانات متطابقة دائمًا",
              "ضمان أن قواعد البيانات ستصبح متسقة في النهاية، يُنفّذ عبر سجل تحديثات معلّقة",
              "البيانات متسقة فقط أيام الثلاثاء",
              "الاتساق يُفحص يدويًا مرة في السنة"
            ],
            "answer": 1,
            "explain": "النسخ تسحب التحديثات من سجل المعاملات وتؤكد — متقاربة عبر الزمن."
          },
          {
            "q": "تنسيق الخدمات (orchestration) يختلف عن التكويغ (choreography) في أن…",
            "options": [
              "التنسيق مدفوع بالأحداث؛ والتكويغ به متحكّم مركزي",
              "التنسيق به متحكّم مركزي؛ والتكويغ مدفوع بالأحداث ولا مركزي",
              "متطابقان",
              "التكويغ يتطلب اتصالات متزامنة فقط"
            ],
            "answer": 1,
            "explain": "المنسّق يقود سير العمل مركزيًا. التكويغ = الخدمات تتفاعل مع الأحداث باستقلالية."
          },
          {
            "q": "لماذا نستخدم قاطع الدائرة بدل المهلات البسيطة؟",
            "options": [
              "قواطع الدائرة تستخدم RAM أقل",
              "المهلات البسيطة تجعل كل اتصال بخدمة فاشلة ينتظر — مبطئًا النظام؛ القاطع يرفض الوصول فورًا",
              "القاطع مطلوب قانونًا",
              "المهلات لا تعمل في الحاويات"
            ],
            "answer": 1,
            "explain": "قاطع الدائرة = افشل بسرعة. يتجنب تكديس التأخير على كل اتصال بخدمة ميتة."
          },
          {
            "q": "في واجهة RESTful، أي فعل HTTP تستخدمه لقراءة مورد؟",
            "options": [
              "POST",
              "GET",
              "PUT",
              "DELETE"
            ],
            "answer": 1,
            "explain": "GET للقراءة. POST ينشئ، PUT يحدّث، DELETE يحذف."
          },
          {
            "q": "أي مما يلي ليس مبدأ من مبادئ RESTful؟",
            "options": [
              "استخدم أفعال HTTP",
              "خدمات عديمة الحالة",
              "موارد قابلة للعنونة بـ URI",
              "يجب استخدام SOAP لكل الطلبات"
            ],
            "answer": 3,
            "explain": "REST هو البديل الخفيف عن SOAP. JSON (أو XML) وأفعال HTTP هي المعيار."
          },
          {
            "q": "لماذا تبقي الإصدارات الأقدم منشورة بجانب الجديدة في النشر المستمر؟",
            "options": [
              "للحنين",
              "لتمكين التراجع الفوري إن أساء الإصدار الجديد",
              "لاستهلاك مساحة قرص إضافية",
              "لأن حذف الحاويات بطيء"
            ],
            "answer": 1,
            "explain": "الخدمات المُصدَّرة تتيح إعادة بوابة API لإصدار معروف الجودة فورًا."
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
          "quiz3": {
            "title": "Chapter 3 Check",
            "sub": "Tap an answer. You'll see instantly if it's right, plus a quick why."
          },
          "quiz4": {
            "title": "Chapter 4 Check",
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
          "quiz3": {
            "title": "مراجعة الفصل 3",
            "sub": "اضغط على الإجابة، وستعرف فورًا إن كانت صحيحة مع سبب سريع."
          },
          "quiz4": {
            "title": "مراجعة الفصل 4",
            "sub": "اضغط على الإجابة لمعرفة إن كانت صحيحة ولماذا."
          }
        }
      }
    }
  });
})();
