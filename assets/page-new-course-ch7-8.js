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
    ["#ch7", "chapter-head-1"],
    ["#ch8", "chapter-head-2"],
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
      ar: "SE4705 — مواضيع مختارة في هندسة البرمجيات — الفصلان 7 و8"
    },
    translations: {
      html: {
        "site-nav-label": `أدلة المذاكرة`,
        "site-nav-links": `
<a href="index.html">الصفحة الرئيسية</a>
<a href="new-course-ch1-2.html">الفصلان 1-2</a>
<a href="new-course-ch3-4.html">الفصلان 3-4</a>
<a href="new-course-ch5-6.html">الفصلان 5-6</a>
<a class="current" href="new-course-ch7-8.html">الفصلان 7-8</a>
`,
        "hero-tag": `SE4705 · مواضيع مختارة`,
        "hero-title": `دليل المذاكرة السريع`,
        "hero-copy": `الفصلان السابع والثامن — الأخلاقيات والثقافة والمعماريات الحديثة`,
        "page-nav": `
<a href="#ch7">الفصل 7: الأخلاق والمجتمع</a>
<a href="#quiz7">اختبار 7</a>
<a href="#ch8">الفصل 8: النماذج الحديثة</a>
<a href="#quiz8">اختبار 8</a>
`,
        "chapter-head-1": `
<span class="num">الفصل السابع</span>
<h2>الآثار الاجتماعية والأخلاقية لهندسة البرمجيات</h2>
`,
        "chapter-head-2": `
<span class="num">الفصل الثامن</span>
<h2>النماذج الناشئة في تطوير البرمجيات</h2>
`,

        "topic-1": `
<h3><span class="dot"></span>الأخلاقيات في هندسة البرمجيات</h3>
<p>الأخلاقيات تدرس مفاهيم مثل <b>الصواب والخطأ والخير والضرر</b>. وفي هندسة البرمجيات تصبح مجموعة مبادئ توجه طريقة تصميمنا وبنائنا للأنظمة الموجهة للناس.</p>
<ul>
  <li>تحمي <b>الرفاه والعدالة والسلامة والثقة</b>.</li>
  <li>تؤثر في قرارات المتطلبات والتصميم والبرمجة والاختبار والإطلاق.</li>
  <li>تذكّرنا أن قرارات البرمجيات ليست تقنية بحتة أبدًا.</li>
</ul>
`,

        "topic-2": `
<h3><span class="dot"></span>لماذا تهم الأخلاقيات</h3>
<p>الإخفاق الأخلاقي في البرمجيات قد يصنع ضررًا واقعيًا وعلى نطاق واسع جدًا.</p>
<ul>
  <li>فضيحة <b>Cambridge Analytica</b> كشفت إخفاقات في البيانات والثقة.</li>
  <li>أخطاء البرمجيات في الأنظمة الحرجة للسلامة قد تكلّف أرواحًا.</li>
  <li>التصميم السيئ أو إساءة استخدام البيانات قد ينتهك <b>الخصوصية والعدالة والسلامة العامة</b>.</li>
</ul>
<div class="remember">
  <span class="lbl">تذكر</span>
  <p>كلما دخلت البرمجيات تفاصيل الحياة اليومية، أصبحت الجودة الأخلاقية مهمة بقدر الجودة التقنية.</p>
</div>
`,

        "topic-3": `
<h3><span class="dot"></span>لماذا الحكم الأخلاقي صعب</h3>
<ul>
  <li>الأخلاق <b>مرتبطة بالسياق</b>؛ لا توجد إجابة واحدة لكل الحالات.</li>
  <li>كثير من المعضلات لا تبدو صحيحة أو خاطئة بوضوح من البداية.</li>
  <li>القواعد والمعايير تساعد، لكنها لا تغني عن التفكير الواعي.</li>
  <li>على المهندس الاستمرار في تحليل الوضع الاجتماعي الأوسع حول البرمجية.</li>
</ul>
`,

        "topic-4": `
<h3><span class="dot"></span>المسؤوليات الأخلاقية للمهندسين</h3>
<ul>
  <li>العمل بما يحقق <b>المصلحة العامة</b> لا مصلحة المؤسسة قصيرة الأمد فقط.</li>
  <li>عدم اعتماد البرمجية إلا بعد مستوى كافٍ من الاختبار والسلامة والاعتمادية.</li>
  <li>تقييم الأثر المتوقع على المستخدمين والمتأثرين والمجتمع قبل الإطلاق وبعده.</li>
  <li>حماية الخصوصية وتجنب الضرر الممكن منعه على الناس أو البيئة.</li>
</ul>
`,

        "topic-5": `
<h3><span class="dot"></span>العدالة وعدم التمييز</h3>
<ul>
  <li>لا ينبغي للمهندسين بناء أنظمة تستبعد مجموعات أو تضر بها بصورة غير عادلة.</li>
  <li>التصميم المتاح والداعم للتدويل يمنع كثيرًا من الإقصاء الخفي.</li>
  <li>العدالة تعني أيضًا توفير وسائل <b>للاعتراض والإبلاغ والتصحيح</b> عند حدوث نتائج مؤذية.</li>
</ul>
<div class="ex">
  <span class="lbl">أمثلة عملية</span>
  <p>دعم اللغات، والتوافق مع قارئات الشاشة، وقنوات الشكاوى ضد التحيز كلها ميزات أخلاقية وليست إضافات اختيارية.</p>
</div>
`,

        "topic-6": `
<h3><span class="dot"></span>الخصوصية وأخلاقيات البيانات</h3>
<ul>
  <li>اجمع فقط ما تحتاجه فعلًا: <b>تقليل البيانات</b>.</li>
  <li>كن شفافًا حول ما يجمع ولماذا وكيف يُحفظ.</li>
  <li>احترم حقوق الموافقة والوصول والتصحيح والحذف.</li>
  <li>الأمن جزء من الخصوصية؛ الحماية الضعيفة إخفاق أخلاقي أيضًا.</li>
</ul>
`,

        "topic-7": `
<h3><span class="dot"></span>مدونة ACM: المبادئ العامة</h3>
<p>مدونة أخلاقيات ACM تقدم أساسًا عامًا لمهنيي الحوسبة.</p>
<div class="compare">
  <div class="col">
    <h4>قيم أساسية</h4>
    <ul>
      <li>الإسهام في المجتمع ورفاه الإنسان</li>
      <li>تجنب الضرر</li>
      <li>الصدق والموثوقية</li>
      <li>العدل وعدم التمييز</li>
    </ul>
  </div>
  <div class="col">
    <h4>احترام الحقوق</h4>
    <ul>
      <li>احترام الملكية الفكرية</li>
      <li>منح التقدير المستحق</li>
      <li>احترام الخصوصية</li>
      <li>حفظ السرية</li>
    </ul>
  </div>
</div>
`,

        "topic-8": `
<h3><span class="dot"></span>مسؤوليات ACM المهنية والقيادية</h3>
<ul>
  <li>الحفاظ على الكفاءة المهنية واحترام القوانين ذات الصلة.</li>
  <li>قبول المراجعة وتحليل المخاطر وتصميم أنظمة <b>آمنة وقابلة للاستخدام</b>.</li>
  <li>على القادة إبقاء <b>الصالح العام</b> في مركز قرارات الفريق.</li>
  <li>يجب أن تُراعى احتياجات المستخدمين والمتأثرين بوضوح في المتطلبات والتصميم.</li>
</ul>
`,

        "topic-9": `
<h3><span class="dot"></span>مدونة IEEE/ACM لهندسة البرمجيات</h3>
<p>تعطي هذه المدونة إرشادًا أكثر تخصصًا لهندسة البرمجيات عبر ثمانية مبادئ:</p>
<ul>
  <li><b>الجمهور</b>، <b>العميل وصاحب العمل</b>، <b>المنتج</b>، <b>الحكم المهني</b>.</li>
  <li><b>الإدارة</b>، <b>المهنة</b>، <b>الزملاء</b>، <b>الذات</b>.</li>
  <li>الهدف منها دفع المهندس إلى المعايير العالية والنزاهة والتعلم المستمر.</li>
</ul>
`,

        "topic-10": `
<h3><span class="dot"></span>حل التعارضات الأخلاقية</h3>
<ul>
  <li><b>النفعية</b> تسأل: أي خيار يحقق أفضل نتيجة إجمالية؟</li>
  <li><b>الواجبية</b> تسأل: ما الواجبات أو القواعد الأخلاقية التي يجب احترامها؟</li>
  <li>عند تعارض المبادئ، استخدم حكمًا معللًا، وناقش مع الزملاء، وارجع إلى المدونة.</li>
</ul>
<div class="remember">
  <span class="lbl">زاوية اختبارية</span>
  <p>المدونات لا تعطيك معادلة جاهزة لكل معضلة، بل تعطيك القيم والبنية لاتخاذ قرار يمكن الدفاع عنه.</p>
</div>
`,

        "topic-11": `
<h3><span class="dot"></span>المسؤولية الاجتماعية للمهندسين</h3>
<p>البرمجيات تؤثر في الأخبار والتوظيف والائتمان والنقل والرعاية الصحية، لذلك يؤثر المهندس في المجتمع سواء قصد ذلك أم لا.</p>
<ul>
  <li>اسأل: <b>من المستفيد؟ من المتضرر؟ من المستبعد؟</b></li>
  <li>لا تتعامل مع التقنية بوصفها محايدة قيميًا.</li>
  <li>ضع في الحسبان حتى أصحاب المصلحة الأقل قدرةً على الدفاع عن أنفسهم.</li>
</ul>
`,

        "topic-12": `
<h3><span class="dot"></span>التحيز الخوارزمي ومصادره</h3>
<ul>
  <li><b>تحيز البيانات</b> يأتي من بيانات منحازة أو ممثلة بشكل غير عادل.</li>
  <li><b>تحيز الخوارزمية</b> يأتي من اختيار الخصائص أو الأهداف أو طريقة التحسين.</li>
  <li><b>تحيز المستخدم</b> يدخل عبر أنماط التفاعل البشري مثل التقييمات أو التغذية الراجعة.</li>
</ul>
<div class="ex">
  <span class="lbl">مثال مشهور</span>
  <p>نظام التوظيف لدى Amazon تعلّم من سير ذاتية تاريخية يغلب عليها الرجال، فانتهى إلى إضعاف فرص النساء.</p>
</div>
`,

        "topic-13": `
<h3><span class="dot"></span>العدالة: جماعية أم فردية؟</h3>
<div class="compare">
  <div class="col">
    <h4>العدالة الجماعية</h4>
    <ul>
      <li>تنظر إلى التكافؤ بين المجموعات</li>
      <li>مفيدة ضد الأثر غير المتكافئ</li>
      <li>مثال: نسب قبول متقاربة بين الجنسين</li>
    </ul>
  </div>
  <div class="col">
    <h4>العدالة الفردية</h4>
    <ul>
      <li>تعامل الأشخاص المتشابهين بشكل متشابه</li>
      <li>أقرب للعدالة الشخصية</li>
      <li>أصعب في التعريف والتطبيق</li>
    </ul>
  </div>
</div>
<p>قد تتعارض الفكرتان، لذلك يجب على المهندس <b>اختيار معيار العدالة وتوثيقه</b> بما يناسب السياق.</p>
`,

        "topic-14": `
<h3><span class="dot"></span>مقايضات التحيز والخصوصية والقانون</h3>
<ul>
  <li>تحسين العدالة قد يقلل أحيانًا من الدقة التنبؤية الخام.</li>
  <li>ليس كل انحياز غير أخلاقي تلقائيًا، لكن <b>التحيز ضد الفئات المحمية</b> خطر كبير.</li>
  <li>قوانين مثل <b>GDPR</b> تعزز حقوق الموافقة والوصول والحذف والتفسير.</li>
  <li>الأخلاق غالبًا تتجاوز القانون: الالتزام القانوني هو الحد الأدنى لا الحد النهائي.</li>
</ul>
`,

        "topic-15": `
<h3><span class="dot"></span>تدقيق التحيز وأمثلة واقعية</h3>
<ul>
  <li>أدوات مثل <b>IBM AIF360</b> و<b>Microsoft Fairlearn</b> تساعد في قياس التحيز وتخفيفه.</li>
  <li>أنظمة التعرف على الوجوه أظهرت معدلات خطأ أعلى للوجوه الداكنة وللنساء.</li>
  <li>الذكاء التوليدي قد يعيد إنتاج الصور النمطية، مثل تمثيل مهن معينة بشكل منحاز.</li>
</ul>
<div class="remember">
  <span class="lbl">تذكر</span>
  <p>المهندس الأخلاقي يدقق النماذج قبل الإطلاق ويواصل المراقبة بعد تغير البيانات أو النماذج.</p>
</div>
`,

        "topic-16": `
<h3><span class="dot"></span>المساءلة والتصميم الشامل</h3>
<ul>
  <li>وثّق مصادر البيانات وافتراضات التصميم والقيود المعروفة.</li>
  <li>إذا سبّب النظام ضررًا، يجب اكتشافه والإبلاغ عنه وإصلاحه.</li>
  <li>اختبر مع مستخدمين متنوعين، بمن فيهم ذوو الإعاقة ومستخدمو الشبكات الضعيفة.</li>
  <li>ميزات الوصول مثل الترجمة النصية والبدائل النصية جزء من الجودة الأخلاقية.</li>
</ul>
`,

        "topic-17": `
<h3><span class="dot"></span>مقاييس العدالة وأفضل الممارسات</h3>
<ul>
  <li>من المقاييس الشائعة <b>التكافؤ الديموغرافي</b> و<b>تكافؤ الفرصة</b>.</li>
  <li>قارن معدلات الخطأ أو النتائج الإيجابية بين المجموعات لاكتشاف الأنماط غير العادلة.</li>
  <li>ادمج اختبارات العدالة في دورة التطوير مثلما تدمج اختبارات الأمن والجودة.</li>
</ul>
`,

        "topic-18": `
<h3><span class="dot"></span>أبعاد هوفستد الثقافية</h3>
<p>إطار هوفستد يشرح كيف تؤثر القيم الوطنية في السلوك والتواصل والثقة وتوقعات المستخدم من النظام.</p>
<ul>
  <li>الأبعاد الستة هي <b>PDI وIDV وMAS وUAI وLTO وIVR</b>.</li>
  <li>تؤثر في UX وتبني البرمجيات ومعالجة الأخطاء وخصائص التعاون.</li>
  <li>تجاهل الثقافة قد يقلل التبني ويصنع تحيزًا غير مقصود.</li>
</ul>
`,

        "topic-19": `
<h3><span class="dot"></span>PDI وIDV في البرمجيات</h3>
<div class="compare">
  <div class="col">
    <h4>مسافة السلطة (PDI)</h4>
    <ul>
      <li>المرتفع: توقع هرمية، وسلطة، وإرشاد رسمي واضح</li>
      <li>المنخفض: توقع شفافية، وأسئلة، وتخصيص</li>
    </ul>
  </div>
  <div class="col">
    <h4>الفردية (IDV)</h4>
    <ul>
      <li>السياقات الفردية: لوحات شخصية وإعدادات خاصة</li>
      <li>السياقات الجماعية: سير عمل جماعي وأهداف مشتركة وإثبات اجتماعي</li>
    </ul>
  </div>
</div>
`,

        "topic-20": `
<h3><span class="dot"></span>MAS وUAI في البرمجيات</h3>
<div class="compare">
  <div class="col">
    <h4>الذكورية مقابل الأنوثة (MAS)</h4>
    <ul>
      <li>الثقافات الذكورية تستجيب للمنافسة والترتيب والمكانة</li>
      <li>الثقافات الأنثوية تميل إلى التعاون والدعم والرفاه</li>
    </ul>
  </div>
  <div class="col">
    <h4>تجنب عدم اليقين (UAI)</h4>
    <ul>
      <li>المرتفع: تعليمات مفصلة وسلوك متوقع وافتراضات قوية</li>
      <li>المنخفض: تجريب وميزات بيتا واستكشاف مرن</li>
    </ul>
  </div>
</div>
`,

        "topic-21": `
<h3><span class="dot"></span>LTO وIVR والتطبيق الثقافي العملي</h3>
<ul>
  <li><b>LTO</b>: الثقافات طويلة الأمد تقدّر التخطيط والمكاسب المستقبلية، بينما قصيرة الأمد تريد نتائج سريعة وتغذية راجعة فورية.</li>
  <li><b>IVR</b>: الثقافات المتسامحة ترحب بواجهات مرحة وتعبيرية، بينما المقيدة قد تفضل الاعتدال والمسارات الأكثر تحفظًا.</li>
  <li>القائمة العملية: حدد ثقافة المستخدم، اربطها بقرارات UI، لا تكتفِ بالترجمة، وفر التخصيص، واختبر مع مستخدمين حقيقيين.</li>
</ul>
<div class="ex">
  <span class="lbl">أستراليا مقابل السعودية</span>
  <p>تميل أستراليا إلى مسافة سلطة أقل وفردية أعلى، بينما تميل السعودية إلى مسافة سلطة أعلى وتجنب أعلى لعدم اليقين. لذلك قد يحتاج التطبيق التعليمي نفسه إلى مؤشرات سلطة وإرشاد أكثر في سوق، ومساحة استقلالية أكبر في سوق آخر.</p>
</div>
`,

        "topic-22": `
<h3><span class="dot"></span>الضرورة المعمارية الحديثة</h3>
<ul>
  <li>مع نمو الأنظمة، يكسر التعقيد التجاري التصاميم العمودية البسيطة.</li>
  <li>النموذج الواحد الضخم يتحول إلى <b>فوضى أحادية</b> حيث التغييرات الصغيرة تصنع آثارًا جانبية كبيرة.</li>
  <li>الأنظمة الحديثة يجب أن تكون <b>قابلة للتفكيك ومرنة وتفاعلية ومتمحورة حول العمل</b>.</li>
</ul>
`,

        "topic-23": `
<h3><span class="dot"></span>تعريف التصميم الموجّه بالمجال (DDD)</h3>
<p>DDD هو منهج Eric Evans للتعامل مع المجالات التجارية المعقدة عبر جعل نموذج البرمجية يعكس الواقع التجاري مباشرة.</p>
<ul>
  <li>التركيز على <b>المجال الأساسي</b> ومنطق المجال.</li>
  <li>العمل الوثيق مع <b>خبراء المجال</b> لصقل النموذج.</li>
  <li>اعتبار DDD انضباط تصميم وثقافة فريق في الوقت نفسه.</li>
</ul>
`,

        "topic-24": `
<h3><span class="dot"></span>الأركان الاستراتيجية واللغة الشائعة</h3>
<ul>
  <li>حدد أكثر جزء قيّم في العمل: <b>المجال الأساسي</b>.</li>
  <li>أنشئ <b>لغة شائعة</b> بين المطورين وخبراء المجال.</li>
  <li>اقبل أن نموذجًا واحدًا لا يمكنه تمثيل المؤسسة كلها، لذا لا بد من حدود واضحة.</li>
</ul>
<div class="remember">
  <span class="lbl">تذكر</span>
  <p>إذا كان الاسم التجاري هو <b>Transfer Authorization</b> فيجب أن يظهر في الكود أيضًا كـ <b>TransferAuthorization</b>.</p>
</div>
`,

        "topic-25": `
<h3><span class="dot"></span>السياقات المحددة (Bounded Contexts)</h3>
<ul>
  <li><b>السياق المحدد</b> هو حد صريح يبقى داخله نموذج واحد ولغة واحدة متسقين.</li>
  <li>قد يعني المصطلح نفسه أشياء مختلفة في سياقات مختلفة.</li>
  <li>كل سياق محدد مرشح قوي ليكون فريقًا مستقلًا أو خدمة مصغرة مستقلة.</li>
</ul>
`,

        "topic-26": `
<h3><span class="dot"></span>خريطة السياقات (Context Map)</h3>
<ul>
  <li><b>خريطة السياقات</b> تُظهر كيف ترتبط السياقات المحددة وتترجم فيما بينها.</li>
  <li>من الأنماط المهمة <b>Customer/Supplier</b> و<b>Shared Kernel</b> و<b>Conformist</b>.</li>
  <li>تساعد المعماري على تقرير متى يكون التواصل متزامنًا عبر API ومتى يكون غير متزامن عبر الأحداث.</li>
</ul>
`,

        "topic-27": `
<h3><span class="dot"></span>أنماط DDD التكتيكية</h3>
<p>بعد وضوح الحدود، تمنحنا DDD التكتيكية أنماطًا لبناء كود مجال نظيف داخلها.</p>
<ul>
  <li><b>Entities</b></li>
  <li><b>Value Objects</b></li>
  <li><b>Aggregates</b> و<b>Aggregate Roots</b></li>
  <li><b>Domain Services</b> و<b>Domain Events</b></li>
</ul>
`,

        "topic-28": `
<h3><span class="dot"></span>الكيانات مقابل الكائنات القيمية</h3>
<div class="compare">
  <div class="col">
    <h4>الكيانات</h4>
    <ul>
      <li>لها هوية مستمرة عبر الزمن</li>
      <li>غالبًا قابلة للتغيير</li>
      <li>مثال: الموظف رقم 4501</li>
    </ul>
  </div>
  <div class="col">
    <h4>الكائنات القيمية</h4>
    <ul>
      <li>تُعرّف فقط بقيمها</li>
      <li>غير قابلة للتغيير</li>
      <li>أمثلة: العنوان، المال، النطاق الزمني</li>
    </ul>
  </div>
</div>
`,

        "topic-29": `
<h3><span class="dot"></span>الـ Aggregates والجذر Aggregate Root</h3>
<ul>
  <li>الـ <b>Aggregate</b> يجمع كيانات وكائنات قيمية مترابطة في حد اتساق واحد.</li>
  <li>الـ <b>Aggregate Root</b> هو الكائن الوحيد الذي يتحدث معه الخارج مباشرة.</li>
  <li>الجذر يفرض الثوابت business invariants، والمستودعات تحفظ وتحمّل الـ aggregate من خلاله.</li>
</ul>
<div class="ex">
  <span class="lbl">مصطلح مهم</span>
  <p>تغييرات الـ aggregate يجب أن تُعتمد معًا كمعاملة واحدة حتى تبقى قواعد العمل صحيحة.</p>
</div>
`,

        "topic-30": `
<h3><span class="dot"></span>خدمات المجال وأحداث المجال</h3>
<ul>
  <li><b>Domain Services</b> تحتوي منطقًا يمتد عبر أكثر من aggregate.</li>
  <li><b>Domain Events</b> تسجل حقائق مهمة حدثت بالفعل، لذلك تسمى بصيغة الماضي.</li>
  <li>غالبًا تُنشر الأحداث بعد تغيّر حالة ناجح وتصبح جسرًا إلى الأنظمة الحدثية.</li>
</ul>
`,

        "topic-31": `
<h3><span class="dot"></span>الأثر المعماري لـ DDD</h3>
<ul>
  <li>DDD يساعد على تفكيك الأنظمة الأحادية إلى حدود خدمات مصغرة نظيفة.</li>
  <li>تصبح الخدمات <b>متماسكة داخليًا</b> و<b>رخوة الترابط خارجيًا</b>.</li>
  <li>الأنماط التكتيكية تجعل كود الخدمة أوضح وأكثر قابلية للاختبار وارتباطًا بالعمل.</li>
</ul>
`,

        "topic-32": `
<h3><span class="dot"></span>أساسيات المعمارية الحدثية (EDA)</h3>
<ul>
  <li>EDA أسلوب يكون النشاط الأساسي فيه إنتاج الأحداث واكتشافها واستهلاكها والتفاعل معها.</li>
  <li>تصبح الأنظمة <b>تفاعلية</b>: تستجيب لما حدث بدل انتظار الطلبات المباشرة فقط.</li>
  <li>EDA قيمة عندما نحتاج <b>إنتاجية عالية وزمن استجابة منخفضًا وترابطًا ضعيفًا</b>.</li>
</ul>
`,

        "topic-33": `
<h3><span class="dot"></span>الأحداث والأوامر وعدم القابلية للتغيير</h3>
<ul>
  <li><b>الحدث</b> حقيقة عن الماضي، بينما <b>الأمر</b> طلب يخص المستقبل.</li>
  <li>يحمل الحدث عادة حمولة صغيرة مثل النوع والوقت والهوية المتأثرة.</li>
  <li>تُعامل الأحداث كسجلات تاريخية <b>غير قابلة للتغيير</b>.</li>
</ul>
`,

        "topic-34": `
<h3><span class="dot"></span>التواصل غير المتزامن ووسطاء الأحداث</h3>
<ul>
  <li>المنتجون ينشرون دون انتظار المستهلكين، وهذا يرفع الاستجابة.</li>
  <li><b>وسيط الأحداث</b> مثل Kafka أو RabbitMQ أو Amazon SQS يوجّه الأحداث.</li>
  <li>هذا يفصل المنتجين عن المستهلكين في <b>الزمن</b> و<b>المكان</b>.</li>
</ul>
`,

        "topic-35": `
<h3><span class="dot"></span>النشر/الاشتراك والتدفق الحدثي</h3>
<ul>
  <li>في <b>Pub/Sub</b> ينشر المنتجون إلى Topics ويمكن لعدة مستهلكين الاشتراك فيها.</li>
  <li>السجلات المستمرة تسمح بإعادة قراءة الأحداث القديمة من أجل المرونة.</li>
  <li>منصات التدفق تعالج كميات ضخمة من البيانات الحية مثل النقرات أو بيانات IoT أو السجلات.</li>
</ul>
`,

        "topic-36": `
<h3><span class="dot"></span>فوائد EDA وطبقة التكامل</h3>
<ul>
  <li>يمكن لكل خدمة أن <b>تتوسع بشكل مستقل</b> بحسب حملها الخاص.</li>
  <li>الوسيط يعمل كمخزن مؤقت، فيزيد المرونة عند تعطل المستهلكين مؤقتًا.</li>
  <li>EDA يجهز النظام للمستقبل لأن إضافة مستهلك جديد لا تتطلب تغيير المنتج.</li>
</ul>
`,

        "topic-37": `
<h3><span class="dot"></span>السيرفرلس وFunction-as-a-Service</h3>
<ul>
  <li>Serverless لا تعني غياب الخوادم، بل إخفاء إدارتها وراء مزود السحابة.</li>
  <li><b>FaaS</b> تشغّل دوالًا صغيرة عديمة الحالة استجابةً لمحفزات.</li>
  <li>يركز المطور على منطق العمل بدل ترقيع الأنظمة وإدارة الخوادم.</li>
</ul>
`,

        "topic-38": `
<h3><span class="dot"></span>نموذج الاستهلاك والمرونة</h3>
<ul>
  <li>تسعير FaaS يكون لكل طلب وزمن تشغيل، لذلك <b>لا توجد كلفة خمول</b>.</li>
  <li>تستطيع المنصة التوسع فجأة إلى عدد كبير من النسخ المتوازية ثم العودة إلى الصفر.</li>
  <li>هذا يجعلها مناسبة جدًا للأحمال المتقطعة أو غير المتوقعة.</li>
</ul>
`,

        "topic-39": `
<h3><span class="dot"></span>الحالة والمحـفزات والأمن</h3>
<ul>
  <li>دوال السيرفرلس مصممة لتكون <b>عديمة الحالة</b>؛ أما الحالة الدائمة فتعيش في قواعد البيانات أو الطوابير أو الذاكرة المخبئية.</li>
  <li>من المحفزات الشائعة: طلبات HTTP، وتغيرات قواعد البيانات، ورفع الملفات، ورسائل الطوابير.</li>
  <li>الأمن يتبع <b>مسؤولية مشتركة</b>: المزود يؤمن البنية التحتية، والفريق يؤمن الكود وIAM والتشفير والإعدادات.</li>
</ul>
`,

        "topic-40": `
<h3><span class="dot"></span>المعمارية التآزرية</h3>
<ul>
  <li><b>DDD</b> يحدد <b>ماذا</b> نبني: نموذج العمل وحدود الخدمات.</li>
  <li><b>EDA</b> يحدد <b>كيف</b> تتكامل الخدمات: بشكل غير متزامن ورخو الترابط.</li>
  <li><b>Serverless/FaaS</b> يحدد <b>أين وكيف</b> يعمل المنطق: بمرونة وتسعير حسب الاستخدام.</li>
</ul>
<div class="remember">
  <span class="lbl">الصورة الكبرى</span>
  <p>الهدف من هذه النماذج معًا هو أنظمة متوافقة مع العمل، مرنة، قابلة للتوسع، وفعالة من حيث التكلفة.</p>
</div>
`,

        "topic-41": `
<h3><span class="dot"></span>FaaS كمستهلك للأحداث</h3>
<p>حلقة حديثة شائعة يمكن تبسيطها هكذا:</p>
<ul>
  <li>ينشر Aggregate Root حدث مجال.</li>
  <li>يوجه الوسيط الحدث إلى الخدمات المهتمة.</li>
  <li>تستيقظ دالة مخصصة في سياق محدد آخر، تنفذ المنطق المطلوب، ثم تتوقف.</li>
</ul>
<div class="ex">
  <span class="lbl">خلاصة الأعمدة الثلاثة</span>
  <p>DDD يصيغ منطق العمل، وEDA ينقل الإشارات، وServerless ينفذ الاستجابة.</p>
</div>
`,

        "footer": `
<p>مراجعة صناديق <b>تذكر</b> العنبرية مرة أخيرة ستفيدك كثيرًا قبل الاختبار.</p>
<div class="pill-row">
  <span class="pill">المصلحة العامة أولًا</span>
  <span class="pill">العدالة يجب اختبارها</span>
  <span class="pill">DDD + EDA + FaaS تتكامل</span>
</div>
<a href="#" class="top-link">↑ العودة إلى الأعلى</a>
`
      }
    },
    quizzes: {
      en: {
        quiz7: [
          {
            q: "In software engineering, ethics mainly provides…",
            options: [
              "Only legal rules for contracts",
              "Principles for making design and development decisions that affect people",
              "A faster debugging process",
              "A replacement for testing"
            ],
            answer: 1,
            explain: "Software ethics guides decisions about welfare, fairness, safety, privacy, and responsibility."
          },
          {
            q: "Why are cases like Cambridge Analytica important in this chapter?",
            options: [
              "They show that hardware matters more than software",
              "They show that software and data decisions can create major social harm",
              "They prove all AI should be banned",
              "They are examples of good privacy practice"
            ],
            answer: 1,
            explain: "The scandal highlights how poor data governance and software practices can harm privacy and trust at scale."
          },
          {
            q: "Which statement best describes ethical decision-making?",
            options: [
              "You just follow rules and never think beyond them",
              "It is context-dependent and often requires judgment beyond simple checklists",
              "Only managers need to care about it",
              "It matters only after release"
            ],
            answer: 1,
            explain: "Ethics is not solved by rules alone; engineers must reason about context and stakeholder impact."
          },
          {
            q: "What is a core expectation in the ACM and IEEE/ACM codes?",
            options: [
              "Always maximise profit first",
              "Keep the public interest and safety central",
              "Avoid documenting design decisions",
              "Ignore users who are not direct customers"
            ],
            answer: 1,
            explain: "Both codes emphasise the public good, safety, honesty, fairness, and professional responsibility."
          },
          {
            q: "What does data minimisation mean?",
            options: [
              "Delete all databases",
              "Collect only the personal data that is actually necessary",
              "Store data forever for future use",
              "Hide what data you collect"
            ],
            answer: 1,
            explain: "Data minimisation is the privacy principle of collecting only what is needed."
          },
          {
            q: "Which is a source of algorithmic bias?",
            options: [
              "Only hardware failures",
              "Only user interface colours",
              "Data bias, algorithmic bias, and user bias",
              "Only network latency"
            ],
            answer: 2,
            explain: "Bias can come from skewed data, model choices, or user interaction patterns."
          },
          {
            q: "Group fairness is mainly concerned with…",
            options: [
              "Treating every single person identically in all situations",
              "Parity or balanced outcomes across groups",
              "Making software faster",
              "Keeping code immutable"
            ],
            answer: 1,
            explain: "Group fairness looks at whether groups receive outcomes in a statistically balanced way."
          },
          {
            q: "What do tools like IBM AIF360 and Fairlearn help with?",
            options: [
              "Creating animation effects",
              "Measuring and mitigating bias in models",
              "Replacing databases",
              "Compiling JavaScript"
            ],
            answer: 1,
            explain: "They are fairness toolkits used to audit and improve model behaviour."
          },
          {
            q: "Why is inclusive design part of ethics?",
            options: [
              "Because only accessibility laws require it",
              "Because diverse users should not be excluded by the system's design",
              "Because it reduces all development cost to zero",
              "Because it removes the need for testing"
            ],
            answer: 1,
            explain: "Accessible, inclusive systems reduce unfair exclusion and better respect all affected users."
          },
          {
            q: "In Hofstede's model, high Power Distance usually means users expect…",
            options: [
              "More hierarchy and authority cues",
              "More playful gamification only",
              "No structure at all",
              "Complete rejection of official guidance"
            ],
            answer: 0,
            explain: "High-PDI contexts are more comfortable with authority, hierarchy, and top-down guidance."
          },
          {
            q: "High Uncertainty Avoidance users usually prefer…",
            options: [
              "Ambiguous interfaces and experimental flows",
              "Detailed guidance, predictability, and clear defaults",
              "No help or documentation",
              "Constant random changes"
            ],
            answer: 1,
            explain: "High-UAI cultures tend to prefer structure, explicit instructions, and predictable behaviour."
          },
          {
            q: "Which comparison from the slides is correct?",
            options: [
              "Australia is described as higher in power distance than Saudi Arabia",
              "Saudi Arabia is described as higher in uncertainty avoidance than Australia",
              "Both countries are described as identical on every cultural dimension",
              "Saudi Arabia is described as more individualistic than Australia"
            ],
            answer: 1,
            explain: "The chapter compares Saudi Arabia as higher in uncertainty avoidance, while Australia is more flexible."
          }
        ],
        quiz8: [
          {
            q: "What problem is DDD trying to solve?",
            options: [
              "How to make all systems use one global model forever",
              "How to model complex business domains without creating a monolithic mess",
              "How to eliminate domain experts from software projects",
              "How to avoid naming classes"
            ],
            answer: 1,
            explain: "DDD helps teams model complex business reality cleanly instead of growing one tangled model."
          },
          {
            q: "What is the main idea of a Ubiquitous Language?",
            options: [
              "Use technical jargon that business people do not understand",
              "Make business and code use the same precise terms",
              "Translate all code to natural language",
              "Avoid discussing terminology"
            ],
            answer: 1,
            explain: "DDD wants the terminology used by domain experts and developers to match all the way into the code."
          },
          {
            q: "A Bounded Context is…",
            options: [
              "A temporary test environment",
              "An explicit boundary where one model and language stay consistent",
              "A type of serverless function",
              "A caching strategy"
            ],
            answer: 1,
            explain: "Within a bounded context, the model and language are intentionally consistent."
          },
          {
            q: "What does the Context Map show?",
            options: [
              "Only database tables",
              "Relationships and translation patterns between bounded contexts",
              "GPU usage over time",
              "The project's salary bands"
            ],
            answer: 1,
            explain: "It explains how contexts interact and what kind of relationship they have."
          },
          {
            q: "How do Entities differ from Value Objects?",
            options: [
              "Entities have identity; Value Objects are defined by their values and are usually immutable",
              "Value Objects always have more methods than Entities",
              "Entities can never change",
              "There is no difference"
            ],
            answer: 0,
            explain: "Entities are identified by continuity over time, while Value Objects are identified by their attributes."
          },
          {
            q: "What is the Aggregate Root responsible for?",
            options: [
              "Rendering the UI",
              "Enforcing aggregate rules and being the main external access point",
              "Replacing the message broker",
              "Managing CSS styles"
            ],
            answer: 1,
            explain: "The Aggregate Root protects invariants and acts as the gatekeeper for the aggregate."
          },
          {
            q: "A Domain Event should normally be phrased…",
            options: [
              "As a fact in the past tense",
              "As a command in the future tense",
              "As a random identifier only",
              "As a SQL statement"
            ],
            answer: 0,
            explain: "Domain events describe something that has already happened, like OrderPlaced."
          },
          {
            q: "What is the key difference between an Event and a Command?",
            options: [
              "An Event is a past fact; a Command asks for something to happen",
              "An Event is mutable; a Command is immutable",
              "An Event can only be used in monoliths",
              "There is no difference"
            ],
            answer: 0,
            explain: "Events record what happened, while commands request an action."
          },
          {
            q: "Why use an event broker such as Kafka or RabbitMQ?",
            options: [
              "To make producers wait longer",
              "To decouple producers and consumers and route events reliably",
              "To remove all payload data",
              "To replace domain models"
            ],
            answer: 1,
            explain: "The broker enables loose coupling, buffering, routing, and asynchronous communication."
          },
          {
            q: "What is a major advantage of FaaS pricing?",
            options: [
              "You pay large fixed costs even when idle",
              "You pay only for requests and compute time used",
              "You must manage operating system patches yourself",
              "It requires permanent running instances"
            ],
            answer: 1,
            explain: "Consumption-based pricing means no idle-cost penalty and better economics for bursty workloads."
          },
          {
            q: "Where should persistent state usually live in a serverless design?",
            options: [
              "In the function's local memory forever",
              "In external systems such as databases, queues, or caches",
              "Only in CSS files",
              "Inside the event broker configuration comments"
            ],
            answer: 1,
            explain: "Serverless functions are meant to be stateless, so durable state belongs outside the function runtime."
          },
          {
            q: "Which mapping best matches the three modern architecture pillars?",
            options: [
              "DDD = runtime billing, EDA = naming classes, Serverless = writing requirements",
              "DDD = what we build, EDA = how services integrate, Serverless = where/how logic runs",
              "DDD = testing only, EDA = UI only, Serverless = legal compliance",
              "DDD = networking only, EDA = storage only, Serverless = typography only"
            ],
            answer: 1,
            explain: "The chapter frames DDD, EDA, and Serverless as complementary layers of modelling, integration, and execution."
          }
        ]
      },
      ar: {
        quiz7: [
          {
            q: "في هندسة البرمجيات، ما الدور الأساسي للأخلاقيات؟",
            options: [
              "قوانين تعاقدية فقط",
              "مبادئ توجه قرارات التصميم والتطوير التي تؤثر في الناس",
              "طريقة أسرع لتصحيح الأخطاء",
              "بديل عن الاختبار"
            ],
            answer: 1,
            explain: "أخلاقيات البرمجيات توجه القرارات المتعلقة بالرفاه والعدالة والسلامة والخصوصية والمسؤولية."
          },
          {
            q: "لماذا تُعد قضايا مثل Cambridge Analytica مهمة في هذا الفصل؟",
            options: [
              "لأنها تثبت أن العتاد أهم من البرمجيات",
              "لأنها تبيّن أن قرارات البرمجيات والبيانات قد تُحدث ضررًا اجتماعيًا كبيرًا",
              "لأنها تثبت وجوب حظر كل الذكاء الاصطناعي",
              "لأنها أمثلة ممتازة على الخصوصية"
            ],
            answer: 1,
            explain: "القضية توضح كيف يمكن لحوكمة البيانات والممارسات البرمجية السيئة أن تضر الخصوصية والثقة على نطاق واسع."
          },
          {
            q: "أي عبارة تصف اتخاذ القرار الأخلاقي بشكل أفضل؟",
            options: [
              "مجرد اتباع القواعد دون تفكير أبعد",
              "يعتمد على السياق ويتطلب حكمًا يتجاوز القوائم البسيطة",
              "يهتم به المديرون فقط",
              "يبدأ فقط بعد الإطلاق"
            ],
            answer: 1,
            explain: "الأخلاق لا تُحل بالقواعد وحدها؛ يجب التفكير في السياق وأثر القرار على أصحاب المصلحة."
          },
          {
            q: "ما التوقع الجوهري في مدونتي ACM وIEEE/ACM؟",
            options: [
              "تعظيم الربح أولًا دائمًا",
              "إبقاء المصلحة العامة والسلامة في المركز",
              "تجنب توثيق قرارات التصميم",
              "تجاهل المستخدمين غير العملاء المباشرين"
            ],
            answer: 1,
            explain: "كلتا المدونتين تشددان على الصالح العام والسلامة والصدق والعدالة والمسؤولية المهنية."
          },
          {
            q: "ماذا يعني تقليل البيانات (Data Minimisation)؟",
            options: [
              "حذف جميع قواعد البيانات",
              "جمع البيانات الشخصية الضرورية فقط",
              "الاحتفاظ بالبيانات إلى الأبد",
              "إخفاء ما يتم جمعه"
            ],
            answer: 1,
            explain: "تقليل البيانات مبدأ خصوصية يعني جمع ما تحتاجه فقط."
          },
          {
            q: "أي مما يلي يُعد مصدرًا للتحيز الخوارزمي؟",
            options: [
              "أعطال العتاد فقط",
              "ألوان الواجهة فقط",
              "تحيز البيانات وتحيز الخوارزمية وتحيز المستخدم",
              "زمن الشبكة فقط"
            ],
            answer: 2,
            explain: "يمكن أن يأتي التحيز من البيانات أو اختيارات النموذج أو أنماط تفاعل المستخدمين."
          },
          {
            q: "العدالة الجماعية تهتم أساسًا بـ…",
            options: [
              "معاملة كل فرد بنفس الطريقة تمامًا في كل موقف",
              "تحقيق توازن أو تكافؤ في النتائج بين المجموعات",
              "جعل البرمجيات أسرع",
              "إبقاء الكود غير قابل للتغيير"
            ],
            answer: 1,
            explain: "العدالة الجماعية تنظر إلى ما إذا كانت المجموعات تحصل على نتائج متوازنة إحصائيًا."
          },
          {
            q: "ما الذي تساعد عليه أدوات مثل IBM AIF360 وFairlearn؟",
            options: [
              "إنشاء مؤثرات بصرية",
              "قياس التحيز في النماذج والتخفيف منه",
              "استبدال قواعد البيانات",
              "ترجمة JavaScript"
            ],
            answer: 1,
            explain: "هذه أدوات للعدالة تُستخدم لتدقيق سلوك النماذج وتحسينه."
          },
          {
            q: "لماذا يعد التصميم الشامل جزءًا من الأخلاقيات؟",
            options: [
              "لأن قوانين الوصول وحدها تطلبه",
              "لأن المستخدمين المتنوعين يجب ألا يُستبعدوا بسبب التصميم",
              "لأنه يخفض كل تكلفة التطوير إلى صفر",
              "لأنه يلغي الحاجة للاختبار"
            ],
            answer: 1,
            explain: "الأنظمة المتاحة والشاملة تقلل الإقصاء غير العادل وتحترم جميع المتأثرين."
          },
          {
            q: "في نموذج هوفستد، ارتفاع Power Distance يعني غالبًا أن المستخدمين يتوقعون…",
            options: [
              "هرمية أكبر وإشارات أوضح للسلطة",
              "لعبية مرحة فقط",
              "غياب أي بنية",
              "رفضًا كاملًا للإرشاد الرسمي"
            ],
            answer: 0,
            explain: "السياقات ذات PDI المرتفع تكون أكثر ارتياحًا للسلطة والهرمية والإرشاد من الأعلى للأسفل."
          },
          {
            q: "المستخدمون ذوو Uncertainty Avoidance المرتفع يفضلون عادة…",
            options: [
              "واجهات غامضة ومسارات تجريبية",
              "إرشادًا مفصلًا وسلوكًا متوقعًا وافتراضات واضحة",
              "عدم وجود مساعدة أو توثيق",
              "تغييرات عشوائية مستمرة"
            ],
            answer: 1,
            explain: "الثقافات ذات UAI المرتفع تميل إلى البنية والتعليمات الواضحة والسلوك المتوقع."
          },
          {
            q: "أي مقارنة من الشرائح صحيحة؟",
            options: [
              "أستراليا أعلى في مسافة السلطة من السعودية",
              "السعودية أعلى في تجنب عدم اليقين من أستراليا",
              "البلدان متطابقان تمامًا في كل الأبعاد",
              "السعودية أكثر فردية من أستراليا"
            ],
            answer: 1,
            explain: "الفصل يقارن السعودية بأنها أعلى في تجنب عدم اليقين، بينما أستراليا أكثر مرونة."
          }
        ],
        quiz8: [
          {
            q: "ما المشكلة التي يحاول DDD حلها؟",
            options: [
              "جعل كل الأنظمة تستخدم نموذجًا عالميًا واحدًا للأبد",
              "نمذجة المجالات التجارية المعقدة دون الوقوع في فوضى أحادية",
              "إزالة خبراء المجال من المشاريع",
              "تجنب تسمية الأصناف"
            ],
            answer: 1,
            explain: "DDD يساعد الفرق على تمثيل الواقع التجاري المعقد بشكل نظيف بدل تنمية نموذج متشابك واحد."
          },
          {
            q: "ما الفكرة الأساسية للغة الشائعة Ubiquitous Language؟",
            options: [
              "استخدام مصطلحات تقنية لا يفهمها أهل العمل",
              "أن تستخدم البرمجيات والعمل المصطلحات الدقيقة نفسها",
              "ترجمة كل الكود إلى لغة طبيعية",
              "تجنب النقاش حول المصطلحات"
            ],
            answer: 1,
            explain: "DDD يريد أن تتطابق المصطلحات بين خبراء المجال والمطورين وحتى داخل الكود."
          },
          {
            q: "ما هو Bounded Context؟",
            options: [
              "بيئة اختبار مؤقتة",
              "حد صريح يبقى داخله نموذج واحد ولغة واحدة متسقين",
              "نوع من دوال السيرفرلس",
              "استراتيجية تخزين مؤقت"
            ],
            answer: 1,
            explain: "داخل السياق المحدد تكون اللغة والنموذج متسقين عمدًا."
          },
          {
            q: "ماذا تُظهر Context Map؟",
            options: [
              "جداول قاعدة البيانات فقط",
              "العلاقات وأنماط الترجمة بين السياقات المحددة",
              "استخدام GPU عبر الزمن",
              "مستويات الرواتب في المشروع"
            ],
            answer: 1,
            explain: "هي تشرح كيف تتفاعل السياقات وما نوع العلاقة بينها."
          },
          {
            q: "كيف تختلف Entities عن Value Objects؟",
            options: [
              "للكيانات هوية، أما الكائنات القيمية فتُعرّف بقيمها وغالبًا تكون غير قابلة للتغيير",
              "الكائنات القيمية دائمًا تحوي دوال أكثر",
              "الكيانات لا تتغير أبدًا",
              "لا يوجد فرق"
            ],
            answer: 0,
            explain: "الكيانات تُعرف باستمرارية هويتها، بينما الكائنات القيمية تُعرف بخصائصها."
          },
          {
            q: "ما مسؤولية Aggregate Root؟",
            options: [
              "رسم الواجهة",
              "فرض قواعد الـ aggregate وأن يكون نقطة الوصول الرئيسية من الخارج",
              "استبدال وسيط الرسائل",
              "إدارة CSS"
            ],
            answer: 1,
            explain: "Aggregate Root يحمي الـ invariants ويعمل كحارس للـ aggregate."
          },
          {
            q: "كيف ينبغي عادة صياغة Domain Event؟",
            options: [
              "كحقيقة بصيغة الماضي",
              "كأمر بصيغة المستقبل",
              "كمعرف عشوائي فقط",
              "كاستعلام SQL"
            ],
            answer: 0,
            explain: "أحداث المجال تصف شيئًا حدث بالفعل مثل OrderPlaced."
          },
          {
            q: "ما الفرق الجوهري بين Event وCommand؟",
            options: [
              "الحدث حقيقة من الماضي؛ الأمر يطلب حدوث شيء",
              "الحدث قابل للتغيير؛ الأمر غير قابل للتغيير",
              "الحدث لا يستخدم إلا في الأنظمة الأحادية",
              "لا يوجد فرق"
            ],
            answer: 0,
            explain: "الأحداث تسجل ما حدث، بينما الأوامر تطلب تنفيذ فعل."
          },
          {
            q: "لماذا نستخدم وسيط أحداث مثل Kafka أو RabbitMQ؟",
            options: [
              "لجعل المنتجين ينتظرون أكثر",
              "لفصل المنتجين عن المستهلكين وتوجيه الأحداث بشكل موثوق",
              "لإزالة الحمولة من الحدث",
              "لاستبدال نماذج المجال"
            ],
            answer: 1,
            explain: "الوسيط يحقق الترابط الضعيف والتخزين المؤقت والتوجيه والتواصل غير المتزامن."
          },
          {
            q: "ما الميزة الكبيرة لتسعير FaaS؟",
            options: [
              "تدفع تكاليف ثابتة كبيرة حتى أثناء الخمول",
              "تدفع فقط مقابل الطلبات وزمن الحوسبة المستخدم",
              "يجب أن تدير ترقيعات نظام التشغيل بنفسك",
              "يتطلب نسخًا عاملة دائمًا"
            ],
            answer: 1,
            explain: "التسعير حسب الاستهلاك يعني غياب تكلفة الخمول وفعالية أعلى للأحمال المتقطعة."
          },
          {
            q: "أين يجب أن تعيش الحالة الدائمة عادةً في تصميم Serverless؟",
            options: [
              "في ذاكرة الدالة المحلية إلى الأبد",
              "في أنظمة خارجية مثل قواعد البيانات أو الطوابير أو الذاكرة المخبئية",
              "في ملفات CSS فقط",
              "داخل تعليقات إعدادات الوسيط"
            ],
            answer: 1,
            explain: "دوال السيرفرلس مصممة لتكون عديمة الحالة، لذا الحالة الدائمة يجب أن تبقى خارج وقت تشغيل الدالة."
          },
          {
            q: "أي مطابقة تصف الأعمدة الثلاثة للمعمارية الحديثة؟",
            options: [
              "DDD = الفوترة وقت التشغيل، EDA = تسمية الأصناف، Serverless = كتابة المتطلبات",
              "DDD = ماذا نبني، EDA = كيف تتكامل الخدمات، Serverless = أين/كيف يعمل المنطق",
              "DDD = الاختبار فقط، EDA = الواجهة فقط، Serverless = الالتزام القانوني",
              "DDD = الشبكات فقط، EDA = التخزين فقط، Serverless = الطباعة فقط"
            ],
            answer: 1,
            explain: "الفصل يقدم DDD وEDA وServerless كطبقات متكاملة للنمذجة والتكامل والتنفيذ."
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
          quiz7: {
            title: "Chapter 7 Check",
            sub: "Tap an answer. You'll see instantly if it's right, plus a quick why."
          },
          quiz8: {
            title: "Chapter 8 Check",
            sub: "Tap an answer to see if it's right and why."
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
          quiz7: {
            title: "مراجعة الفصل 7",
            sub: "اضغط على الإجابة، وستعرف فورًا إن كانت صحيحة مع سبب سريع."
          },
          quiz8: {
            title: "مراجعة الفصل 8",
            sub: "اضغط على الإجابة لمعرفة إن كانت صحيحة ولماذا."
          }
        }
      }
    }
  });
})();
