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
    ["#ch9", "chapter-head-1"],
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
      ar: "SE4705 — مواضيع مختارة في هندسة البرمجيات — الفصل 9"
    },
    translations: {
      html: {
        "site-nav-label": "أدلة المذاكرة",
        "site-nav-links": `
<a href="index.html">الصفحة الرئيسية</a>
<a href="new-course-ch1-2.html">الفصلان 1-2</a>
<a href="new-course-ch3-4.html">الفصلان 3-4</a>
<a href="new-course-ch5-6.html">الفصلان 5-6</a>
<a href="new-course-ch7-8.html">الفصلان 7-8</a>
<a class="current" href="new-course-ch9.html">الفصل 9</a>
`,
        "hero-tag": "SE4705 · مواضيع مختارة",
        "hero-title": "دليل المذاكرة السريع",
        "hero-copy": "الفصل التاسع — دراسات حالة تربط بين كل مفاهيم المقرر",
        "page-nav": `
<a href="#ch9">نظرة عامة</a>
<a href="#netflix">Netflix</a>
<a href="#spotify">Spotify</a>
<a href="#google">Google</a>
<a href="#amazon">Amazon</a>
<a href="#quiz9">اختبار 9</a>
`,
        "chapter-head-1": `
<span class="num">الفصل التاسع</span>
<h2>دراسات حالة في هندسة البرمجيات الحديثة</h2>
`,

        "topic-1": `
<h3><span class="dot"></span>لماذا تهم هذه الدراسات</h3>
<p>الفصل التاسع يربط المقرر كله ببعضه عبر أمثلة حقيقية من شركات ضخمة طبّقت المفاهيم السابقة على نطاق واسع.</p>
<ul>
  <li><b>Netflix</b> تبرز المعماريات الخدمية والمرونة والرصد وCI/CD.</li>
  <li><b>Spotify</b> تبرز ثقافة DevOps والتصميم التنظيمي وDDD والتدفق الحدثي.</li>
  <li><b>Google/TensorFlow</b> تبرز هندسة البرمجيات المدفوعة بالذكاء الاصطناعي وMLOps والأخلاقيات والاستدامة.</li>
  <li><b>Amazon/AWS Lambda</b> تبرز الحوسبة الحدثية والسيرفرلس مع الكفاءة في التكلفة والطاقة.</li>
</ul>
`,

        "topic-2": `
<h3><span class="dot"></span>خلفية Netflix ومشكلة النظام الأحادي</h3>
<ul>
  <li>قبل 2010 كانت Netflix تدير خدمة DVD ناجحة مع خدمة بث متنامية.</li>
  <li>كان النظام يعمل كـ <b>monolith</b> كبير داخل مركز بيانات خاص.</li>
  <li>حادثة فساد كبيرة في قاعدة البيانات سببت <b>تعطلًا لعدة أيام</b> وأثبتت خطورة الاعتماد على هذا الشكل.</li>
  <li>لهذا التزمت Netflix بالانتقال إلى <b>AWS + microservices موزعة</b>.</li>
</ul>
`,

        "topic-3": `
<h3><span class="dot"></span>معمارية Netflix: ترابط منخفض وتماسك عالٍ</h3>
<ul>
  <li>كل خدمة تركز على قدرة عمل واحدة مثل الفوترة أو البحث أو التوصيات.</li>
  <li>الخدمات تستخدم <b>polyglot persistence</b> فتختار قاعدة البيانات المناسبة لاحتياجها.</li>
  <li>يمكن للفرق تطوير الخدمات واختبارها ونشرها <b>بشكل مستقل</b>.</li>
</ul>
<div class="ex">
  <span class="lbl">نقطة الدخول</span>
  <p>طلبات العملاء تمر أولًا على طبقة بوابة API التي تدير التوجيه والوصول قبل تمريرها إلى خدمات أصغر كثيرة.</p>
</div>
`,

        "topic-4": `
<h3><span class="dot"></span>Hystrix والفشل المتدرج بأمان</h3>
<p>عمّمت Netflix نمط <b>قاطع الدائرة</b> عبر Hystrix.</p>
<ul>
  <li>إذا بدأ أحد الاعتماديات بالفشل كثيرًا فإن الدائرة <b>تفتح</b>.</li>
  <li>تُحوَّل الطلبات فورًا إلى <b>مسار بديل</b> بدل انتظار مهلات متكررة.</li>
  <li>هذا يمنع <b>الفشل المتسلسل</b> عبر بقية النظام.</li>
</ul>
<div class="remember">
  <span class="lbl">مثال</span>
  <p>إذا تعطلت خدمة التخصيص يمكن لـ Netflix إظهار قائمة توصيات عامة بدل توقف التجربة بالكامل.</p>
</div>
`,

        "topic-5": `
<h3><span class="dot"></span>Chaos Engineering في Netflix</h3>
<ul>
  <li>Chaos Engineering تعني <b>إدخال الفشل عمدًا</b> لاختبار المرونة.</li>
  <li><b>Chaos Monkey</b> ينهي مثيلات إنتاج عشوائيًا أثناء ساعات العمل.</li>
  <li>الفكرة: إذا انكسر النظام تحت فشل متحكم به، فهو لم يكن مرنًا أصلًا.</li>
</ul>
<div class="remember">
  <span class="lbl">الدرس</span>
  <p>لا يمكن الوثوق بمرونة النظام دون اختبارها باستمرار تحت ظروف فشل واقعية.</p>
</div>
`,

        "topic-6": `
<h3><span class="dot"></span>CI/CD والرصد في Netflix</h3>
<div class="compare">
  <div class="col">
    <h4>التسليم</h4>
    <ul>
      <li>Spinnaker يدير التسليم المستمر</li>
      <li>المراحل تشمل البناء والاختبار وcanary والنشر والتراجع</li>
      <li>يدعم نشرات كثيرة جدًا بثقة عالية</li>
    </ul>
  </div>
  <div class="col">
    <h4>الرصد</h4>
    <ul>
      <li>مقاييس للصحة والزمن</li>
      <li>سجلات مركزية للتصحيح</li>
      <li>Distributed tracing عبر خدمات كثيرة</li>
    </ul>
  </div>
</div>
`,

        "topic-7": `
<h3><span class="dot"></span>تحدي التوسع في Spotify</h3>
<ul>
  <li>كان على Spotify خدمة كتالوج ضخم ومستخدمين كثيرين مع تخصيص منخفض التأخير.</li>
  <li>الأقسام الوظيفية التقليدية صنعت <b>تطويرًا بطيئًا واعتماديات ثقيلة</b>.</li>
  <li>التحدي لم يكن تقنيًا فقط، بل أيضًا <b>كيف تُنظَّم الفرق</b> لتحقيق السرعة والاستقلالية.</li>
</ul>
`,

        "topic-8": `
<h3><span class="dot"></span>نموذج الـ Squads</h3>
<ul>
  <li><b>Squads</b> فرق صغيرة متعددة التخصصات تركز على مساحة منتج واحدة.</li>
  <li><b>Tribes</b> تجمع squads ذات الصلة.</li>
  <li><b>Chapters</b> تربط أصحاب التخصص الواحد.</li>
  <li><b>Guilds</b> مجتمعات ممارسة أوسع عبر الشركة.</li>
</ul>
<div class="ex">
  <span class="lbl">الفكرة الأساسية</span>
  <p>نجحت Spotify في التوسع عبر مواءمة هيكل الفرق مع ملكية المنتج، لا مع التخصصات التقنية وحدها.</p>
</div>
`,

        "topic-9": `
<h3><span class="dot"></span>ثقافة DevOps: أنت تبنيه وأنت تشغله</h3>
<ul>
  <li>الـ squads تملك الدورة الكاملة: التطوير والنشر والتشغيل والصيانة.</li>
  <li>البنية التحتية ذاتية الخدمة تقلل الاعتماد على فرق خارجية.</li>
  <li>Spotify تعتمد <b>blameless postmortems</b> لتحسين النظام بدل لوم الأفراد.</li>
</ul>
`,

        "topic-10": `
<h3><span class="dot"></span>DDD والتدفق الحدثي في Spotify</h3>
<ul>
  <li>تُحاذي Spotify الخدمات المصغرة مع <b>bounded contexts</b> مثل الحسابات أو التشغيل أو التوصيات.</li>
  <li>كل سياق يملك مصطلحاته ونموذجه البياني الخاص.</li>
  <li>تعتمد الخدمات بكثافة على <b>تدفقات أحداث غير متزامنة</b> مثل Kafka.</li>
</ul>
<div class="remember">
  <span class="lbl">تذكر</span>
  <p>Spotify هي أوضح مثال على أن التصميم التنظيمي يمكن أن يعزز التصميم البرمجي مباشرة.</p>
</div>
`,

        "topic-11": `
<h3><span class="dot"></span>CI/CD وFeature Flags في Spotify</h3>
<ul>
  <li>التكامل المستمر يشغّل اختبارات آلية على كل commit.</li>
  <li>التسليم المستمر يستخدم <b>canary deployments</b> لمجموعات صغيرة من المستخدمين أولًا.</li>
  <li><b>Feature flags</b> تفصل نشر الكود عن إطلاق الميزة، ما يسهّل A/B testing والتراجع السريع.</li>
</ul>
`,

        "topic-12": `
<h3><span class="dot"></span>Google وثورة تعلم الآلة</h3>
<ul>
  <li>تعتمد منتجات Google بشدة على تعلم الآلة في الترتيب والاستهداف والتوصيات.</li>
  <li>كثرة النماذج والفرق خلقت تعقيدًا يفوق أدوات DevOps التقليدية.</li>
  <li>لذلك أضافت Google انضباطًا هندسيًا أكبر عبر <b>MLOps</b> وأطر مثل <b>TensorFlow Extended (TFX)</b>.</li>
</ul>
`,

        "topic-13": `
<h3><span class="dot"></span>MLOps والتدريب المستمر</h3>
<ul>
  <li>يتعامل MLOps مع <b>النماذج والبيانات والكود</b> كعناصر أساسية من الدرجة الأولى.</li>
  <li>يشمل خط الأنابيب: فحص البيانات، التدريب، التحقق من النموذج، النشر، والمراقبة.</li>
  <li>الإضافة الأساسية فوق DevOps هي <b>Continuous Training (CT)</b> عند ظهور data drift أو model decay.</li>
</ul>
<div class="compare">
  <div class="col">
    <h4>DevOps</h4>
    <ul>
      <li>التركيز: كود التطبيق والملفات التنفيذية</li>
      <li>الخط: CI/CD</li>
      <li>الهدف: نشر سريع ومستقر</li>
    </ul>
  </div>
  <div class="col">
    <h4>MLOps</h4>
    <ul>
      <li>التركيز: الكود وبيانات التدريب وأوزان النموذج</li>
      <li>الخط: CI/CD + CT</li>
      <li>الهدف: الاستقرار مع دقة النموذج</li>
    </ul>
  </div>
</div>
`,

        "topic-14": `
<h3><span class="dot"></span>الاستدامة في أنظمة تعلم الآلة</h3>
<ul>
  <li>النماذج الكبيرة تستهلك كميات ضخمة من الحوسبة والطاقة أثناء التدريب.</li>
  <li>تحسن Google الكفاءة عبر <b>TPUs</b> وتصميم مراكز بيانات محسّن.</li>
  <li>على المهندسين تفضيل النماذج الأصغر أو الأكفأ عندما تكون فروق الدقة هامشية.</li>
</ul>
<div class="remember">
  <span class="lbl">رابط بالمقرر</span>
  <p>هذه الحالة تربط بين الذكاء الاصطناعي المدفوع برمجيًا وبين فصل الاستدامة مباشرة.</p>
</div>
`,

        "topic-15": `
<h3><span class="dot"></span>الأخلاقيات والتحيز وقابلية التفسير في ML</h3>
<ul>
  <li>قد تعيد نماذج ML إنتاج التحيز أو تضخيمه إذا تدربت على بيانات منحازة.</li>
  <li>تستخدم Google <b>Fairness Indicators</b> لقياس الفروقات بين المجموعات.</li>
  <li>أدوات <b>Explainable AI</b> مثل LIME وSHAP تساعد في تفسير سبب التنبؤ.</li>
  <li>الاختبار الأخلاقي جزء من المسؤولية الهندسية وليس خطوة متأخرة.</li>
</ul>
`,

        "topic-16": `
<h3><span class="dot"></span>مشكلة Amazon: خمول حوسبي وهدر</h3>
<ul>
  <li>حتى داخل AWS، كانت أحمال كثيرة تعمل على EC2 أكثر من حاجتها الفعلية.</li>
  <li>الأحمال المتقطعة أو المتذبذبة سببت <b>تكلفة خمول</b> و<b>هدرًا في الطاقة</b>.</li>
  <li>احتاجت AWS إلى نموذج يشغل الكود لمللي ثوانٍ دون الحاجة إلى إدارة خادم كامل.</li>
</ul>
`,

        "topic-17": `
<h3><span class="dot"></span>AWS Lambda والتحول إلى Serverless</h3>
<ul>
  <li><b>AWS Lambda</b> أطلق نموذج Function-as-a-Service إلى الاستخدام الواسع.</li>
  <li>يكتب المطور الدوال بينما يتولى المزود إدارة الخوادم والترقيعات والتوسع.</li>
  <li>الفوترة تعتمد على <b>وقت التنفيذ الفعلي</b> لا على السعة المحجوزة.</li>
</ul>
<div class="remember">
  <span class="lbl">لماذا كان مهمًا</span>
  <p>غيّر Serverless اقتصاديات البرمجيات السحابية لأنه سمح بالتوسع والصفرية تقريبًا في تكلفة الخمول.</p>
</div>
`,

        "topic-18": `
<h3><span class="dot"></span>التدفق الحدثي في Serverless</h3>
<ul>
  <li>محفز مثل رفع ملف إلى S3 أو تغيير DynamoDB أو طلب API Gateway يستدعي دالة عديمة الحالة.</li>
  <li>تعمل الدالة فقط للمدة المطلوبة ثم تتوقف.</li>
  <li>يمكن أن يؤدي خرجها إلى حدث جديد، ولهذا يعد Serverless مناسبًا جدًا لـ <b>EDA</b>.</li>
</ul>
`,

        "topic-19": `
<h3><span class="dot"></span>استدامة Serverless وكفاءته</h3>
<ul>
  <li>يتجنب Serverless تشغيل خوادم مخصصة دائمًا لأحمال الاستفادة المنخفضة.</li>
  <li>البنية المشتركة تحسن <b>استخدام الموارد</b> وتقلل هدر الطاقة في الخمول.</li>
  <li>هذا يفيد المستخدم عبر خفض الكلفة ويفيد البيئة عبر رفع الكفاءة.</li>
</ul>
`,

        "topic-20": `
<h3><span class="dot"></span>الدروس المشتركة بين الحالات</h3>
<div class="compare">
  <div class="col">
    <h4>دروس معمارية</h4>
    <ul>
      <li>Netflix: microservices + resilience</li>
      <li>Spotify: DDD + event streaming + مواءمة الفرق</li>
      <li>Google: MLOps للأنظمة الغنية بالنماذج</li>
      <li>Amazon: serverless + تنفيذ حدثي</li>
    </ul>
  </div>
  <div class="col">
    <h4>دروس أوسع</h4>
    <ul>
      <li>DevOps تقني وتنظيمي معًا</li>
      <li>الرصد والاختبار يبنيان الثقة</li>
      <li>الأخلاقيات والاستدامة قضايا تشغيلية فعلية</li>
      <li>الهندسة الحديثة تعتمد على الملاءمة لا على نمط واحد للجميع</li>
    </ul>
  </div>
</div>
`,

        "footer": `
<p>الفصل التاسع هو فصل الربط. إذا كنت تستطيع شرح لماذا اختارت كل شركة معماريتها وعملياتها، فأنت في وضع ممتاز للاختبار.</p>
<div class="pill-row">
  <span class="pill">Netflix = المرونة</span>
  <span class="pill">Spotify = الاستقلالية</span>
  <span class="pill">Google = MLOps</span>
  <span class="pill">Amazon = Serverless</span>
</div>
<a href="#" class="top-link">↑ العودة إلى الأعلى</a>
`
      }
    },
    quizzes: {
      en: {
        quiz9: [
          {
            q: "What major event pushed Netflix away from its monolith?",
            options: [
              "A marketing campaign failure",
              "A multi-day outage caused by major database corruption",
              "A failed mobile app redesign",
              "A shortage of developers"
            ],
            answer: 1,
            explain: "The database corruption incident exposed the risk of the monolithic architecture and accelerated the shift to AWS microservices."
          },
          {
            q: "What does the Hystrix circuit breaker mainly prevent?",
            options: [
              "Code compilation",
              "Cascading failures between dependent services",
              "Database normalization",
              "Feature flag rollout"
            ],
            answer: 1,
            explain: "Hystrix isolates dependency failures and redirects requests to fallback logic instead of letting failure spread."
          },
          {
            q: "What is Chaos Monkey designed to do?",
            options: [
              "Randomly terminate production instances to test resilience",
              "Generate user recommendations",
              "Replace CI/CD pipelines",
              "Encrypt service logs"
            ],
            answer: 0,
            explain: "Chaos Monkey intentionally breaks things in production so teams build and verify fault tolerance."
          },
          {
            q: "Spotify's Squad model is mainly about…",
            options: [
              "Separating frontend and backend more strictly",
              "Creating small autonomous cross-functional teams",
              "Replacing all managers with AI",
              "Eliminating testing"
            ],
            answer: 1,
            explain: "Squads are small self-organizing teams that own a specific product area end to end."
          },
          {
            q: "Which phrase best captures Spotify's DevOps responsibility model?",
            options: [
              "You plan it, finance runs it",
              "You build it, you run it",
              "You test it, legal owns it",
              "You design it, vendors run it"
            ],
            answer: 1,
            explain: "Spotify's culture emphasizes end-to-end ownership by the team that builds the service."
          },
          {
            q: "At Spotify, why are feature flags useful?",
            options: [
              "They remove the need for deployment",
              "They decouple code deployment from feature release",
              "They replace unit tests",
              "They eliminate bounded contexts"
            ],
            answer: 1,
            explain: "Feature toggles let teams deploy code safely while controlling when users actually see the feature."
          },
          {
            q: "What makes MLOps different from classic DevOps?",
            options: [
              "It ignores testing",
              "It manages only hardware",
              "It must handle data, models, and continuous training in addition to code",
              "It never uses automation"
            ],
            answer: 2,
            explain: "MLOps expands the lifecycle to include training data, model artifacts, drift, and retraining."
          },
          {
            q: "What does Continuous Training (CT) respond to?",
            options: [
              "Only code style changes",
              "Data drift or model decay",
              "Changes to CSS themes",
              "Manual HR approvals"
            ],
            answer: 1,
            explain: "In MLOps, a new deployment can be triggered because the data or model performance has changed."
          },
          {
            q: "Why are TPUs mentioned in the Google case study?",
            options: [
              "They are a social media feature",
              "They improve energy efficiency for ML workloads",
              "They replace all datasets",
              "They are used only for logging"
            ],
            answer: 1,
            explain: "Google uses TPUs to get better compute efficiency per watt for ML processing."
          },
          {
            q: "What do Fairness Indicators and tools like LIME/SHAP support?",
            options: [
              "Only faster deployment",
              "Bias measurement and model explainability",
              "Lower font sizes",
              "DVD shipping optimization"
            ],
            answer: 1,
            explain: "They help engineers evaluate fairness and understand why models make certain predictions."
          },
          {
            q: "What was the core motivation behind AWS Lambda?",
            options: [
              "Increase idle server usage",
              "Provide a compute model for short-lived workloads without managing servers",
              "Replace all event-driven systems",
              "Force all apps to use one language"
            ],
            answer: 1,
            explain: "Lambda was created for intermittent, spiky, short-duration workloads where full server management is wasteful."
          },
          {
            q: "Why is serverless often described as sustainable?",
            options: [
              "Because it requires more always-on machines",
              "Because shared infrastructure reduces idle waste and improves utilization",
              "Because it removes all networking",
              "Because it stops the need for monitoring"
            ],
            answer: 1,
            explain: "Serverless can reduce cost and energy waste by running code only when needed on shared infrastructure."
          }
        ]
      },
      ar: {
        quiz9: [
          {
            q: "ما الحدث الكبير الذي دفع Netflix بعيدًا عن النظام الأحادي؟",
            options: [
              "فشل حملة تسويقية",
              "تعطل لعدة أيام سببه فساد كبير في قاعدة البيانات",
              "فشل إعادة تصميم تطبيق الجوال",
              "نقص المطورين"
            ],
            answer: 1,
            explain: "حادثة فساد قاعدة البيانات كشفت خطورة المعمارية الأحادية وسرّعت الانتقال إلى microservices على AWS."
          },
          {
            q: "ما الذي يمنعه Hystrix Circuit Breaker بشكل أساسي؟",
            options: [
              "ترجمة الكود",
              "الفشل المتسلسل بين الخدمات المعتمدة على بعضها",
              "تطبيع قواعد البيانات",
              "إطلاق feature flags"
            ],
            answer: 1,
            explain: "Hystrix يعزل فشل الاعتماديات ويوجه الطلبات إلى fallback بدل السماح بانتشار الفشل."
          },
          {
            q: "ما الهدف من Chaos Monkey؟",
            options: [
              "إنهاء مثيلات الإنتاج عشوائيًا لاختبار المرونة",
              "توليد توصيات المستخدمين",
              "استبدال خطوط CI/CD",
              "تشفير السجلات"
            ],
            answer: 0,
            explain: "Chaos Monkey يكسر الأمور عمدًا في الإنتاج حتى تبني الفرق التسامح مع الفشل وتتحقق منه."
          },
          {
            q: "نموذج Squads في Spotify يدور أساسًا حول…",
            options: [
              "الفصل الأكثر صرامة بين الواجهة والخلفية",
              "إنشاء فرق صغيرة مستقلة ومتعددة التخصصات",
              "استبدال كل المديرين بالذكاء الاصطناعي",
              "إلغاء الاختبار"
            ],
            answer: 1,
            explain: "Squads فرق صغيرة ذاتية التنظيم تملك منطقة منتج محددة من طرف إلى طرف."
          },
          {
            q: "ما العبارة التي تلخص نموذج مسؤولية DevOps في Spotify؟",
            options: [
              "أنت تخطط له والمالية تشغله",
              "أنت تبنيه وأنت تشغله",
              "أنت تختبره والقانون يملكه",
              "أنت تصممه والمورد يشغله"
            ],
            answer: 1,
            explain: "ثقافة Spotify تؤكد على الملكية الكاملة للخدمة من الفريق الذي يبنيها."
          },
          {
            q: "لماذا تُعد feature flags مفيدة في Spotify؟",
            options: [
              "لأنها تلغي الحاجة للنشر",
              "لأنها تفصل نشر الكود عن إطلاق الميزة",
              "لأنها تستبدل اختبارات الوحدة",
              "لأنها تلغي bounded contexts"
            ],
            answer: 1,
            explain: "Feature toggles تسمح بنشر الكود بأمان مع التحكم في توقيت ظهور الميزة للمستخدم."
          },
          {
            q: "ما الذي يجعل MLOps مختلفًا عن DevOps التقليدي؟",
            options: [
              "أنه يتجاهل الاختبار",
              "أنه يدير العتاد فقط",
              "أنه يتعامل مع البيانات والنماذج والتدريب المستمر إضافة إلى الكود",
              "أنه لا يستخدم الأتمتة"
            ],
            answer: 2,
            explain: "MLOps يوسّع دورة الحياة لتشمل بيانات التدريب وأصول النموذج والانجراف وإعادة التدريب."
          },
          {
            q: "ما الذي يستجيب له Continuous Training (CT)؟",
            options: [
              "تغيرات نمط الكود فقط",
              "انجراف البيانات أو تدهور النموذج",
              "تغيرات ثيمات CSS",
              "موافقات الموارد البشرية"
            ],
            answer: 1,
            explain: "في MLOps قد يبدأ نشر جديد لأن البيانات أو أداء النموذج تغير."
          },
          {
            q: "لماذا ذُكرت TPUs في دراسة حالة Google؟",
            options: [
              "لأنها ميزة شبكات اجتماعية",
              "لأنها تحسن كفاءة الطاقة لأحمال تعلم الآلة",
              "لأنها تستبدل كل البيانات",
              "لأنها تستخدم فقط للتسجيل"
            ],
            answer: 1,
            explain: "تستخدم Google TPUs للحصول على كفاءة حوسبية أفضل لكل واط في معالجة ML."
          },
          {
            q: "ما الذي تدعمه Fairness Indicators وأدوات مثل LIME وSHAP؟",
            options: [
              "النشر الأسرع فقط",
              "قياس التحيز وقابلية تفسير النموذج",
              "تصغير أحجام الخطوط",
              "تحسين شحن أقراص DVD"
            ],
            answer: 1,
            explain: "هي تساعد المهندسين على تقييم العدالة وفهم سبب تنبؤات النماذج."
          },
          {
            q: "ما الدافع الأساسي وراء AWS Lambda؟",
            options: [
              "زيادة استخدام الخوادم الخاملة",
              "توفير نموذج حوسبي لأحمال قصيرة العمر دون إدارة الخوادم",
              "استبدال كل الأنظمة الحدثية",
              "إجبار كل التطبيقات على لغة واحدة"
            ],
            answer: 1,
            explain: "Lambda صُممت للأحمال المتقطعة والقصيرة حيث تكون إدارة خادم كامل هدرًا."
          },
          {
            q: "لماذا يوصف Serverless غالبًا بأنه مستدام؟",
            options: [
              "لأنه يتطلب مزيدًا من الأجهزة العاملة دائمًا",
              "لأن البنية المشتركة تقلل هدر الخمول وتحسن الاستفادة",
              "لأنه يلغي الشبكات كلها",
              "لأنه يلغي الحاجة للمراقبة"
            ],
            answer: 1,
            explain: "Serverless يمكن أن يقلل التكلفة وهدر الطاقة لأنه يشغل الكود فقط عند الحاجة وعلى بنية مشتركة."
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
          quiz9: {
            title: "Chapter 9 Check",
            sub: "Tap an answer. You'll see instantly if it's right, plus a quick why."
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
          quiz9: {
            title: "مراجعة الفصل 9",
            sub: "اضغط على الإجابة، وستعرف فورًا إن كانت صحيحة مع سبب سريع."
          }
        }
      }
    }
  });
})();
