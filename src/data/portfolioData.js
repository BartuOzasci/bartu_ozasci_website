// ============================================================
// PORTFOLIO PAGE DATA — Teknik Yetkinlikler & Hakkımda
// ============================================================

export const portfolioPageData = {
  heading: "Portfolyom",
  subheading: "Teknik yetkinliklerim ve deneyimlerim",
  cvUrl: "/cv/bartu-ozasci-cv.pdf",
};

// ---- Kişisel tanıtım paragrafları ----
export const bioParagraphs = [
  "Merhaba, ben Bartu Özaşçı. Yapay Zeka Mühendisliği alanında yüksek lisans eğitimime devam eden, teorik bilgiyi pratik çözümlere dönüştürme tutkusuna sahip bir Yapay Zeka Mühendisiyim.",
  "Kariyerimi, Doğal Dil İşleme (NLP) ve Full Stack Web Geliştirme disiplinlerini birleştirerek, uçtan uca akıllı sistemler tasarlamak üzerine kurdum. NLP alanındaki çalışmalarımda, klasik RNN ve LSTM mimarilerinin ötesine geçerek, günümüzün standardı olan Transformer tabanlı modellerle derinlemesine projeler geliştiriyorum. Özellikle Large Language Models (LLMs) üzerine odaklanarak, Llama gibi açık kaynak modellerin Fine-tuning süreçlerini yönetiyor; RAG (Retrieval-Augmented Generation) mimarileri ile halüsinasyon sorununu minimize eden, veriye dayalı chatbotlar ve sesli asistanlar tasarlıyorum. Metin ön işleme (Text Preprocessing) aşamalarından, modelin API olarak servis edilmesine kadar olan tüm pipeline'a hakimim. Ayrıca veri bilimi tarafında Time Series Analysis (Zaman Serisi Analizi) ile tahminleme (Forecasting) modelleri üzerinde çalışarak geleceğe yönelik veri odaklı içgörüler sunuyorum. Yapay zeka yetkinliklerimi, güçlü bir web geliştirme geçmişiyle destekliyorum. Python ekosistemindeki hakimiyetimin yanı sıra; Frontend tarafında HTML5, CSS3 ve JavaScript (ES6+) Bootstrap 5 standartlarını kullanarak React ile modern, komponent tabanlı arayüzler tasarlıyorum. Backend tarafında ise Node.js ve ASP.NET Core ile ölçeklenebilir, RESTful API mimarilerine uygun sistemler kuruyorum. Türkiye genelinde çeşitli firmalar için geliştirdiğim katalog sistemleri ve kurumsal web siteleri, müşteri ihtiyaçlarını teknik çözümlerle buluşturma konusundaki tecrübemin birer yansımasıdır. Git versiyon kontrol sistemleri ile modern CI/CD süreçlerine uyumlu, temiz ve sürdürülebilir kod yazmak benim için bir standarttır.",
];

// ---- Teknik yetkinlik kategorileri ----
export const skillCategories = [
  {
    id: 1,
    icon: "🤖",
    title: "Yapay Zeka & ML",
    color: "#6c63ff",
    skills: [
      { name: "Python", level: 95 },
      { name: "TensorFlow / PyTorch / Scikit-learn", level: 90 },
      { name: "Time Series Analysis", level: 90 },
      { name: "NLP / BERT / Transformers", level: 90 },
      { name: "Machine Learning", level: 85 },
    ],
  },
  {
    id: 2,
    icon: "🔧",
    title: "Veri Mühendisliği",
    color: "#00d4ff",
    skills: [
      { name: "Datasets / APIs", level: 75 },
      { name: "C# / ASP.NET Core", level: 75 },
      { name: "SQLLite / PostgreSQL ", level: 75 },
      { name: "Docker ", level: 70 },
      { name: "LLM Frameworks", level: 70 },
    ],
  },
  {
    id: 3,
    icon: "🌐",
    title: "Web Geliştirme",
    color: "#ffd93d",
    skills: [
      { name: "React / Node.js", level: 90 },
      { name: "HTML / JavaScript", level: 95 },
      { name: "TypeScript", level: 75 },
      { name: "FastAPI", level: 70 },
      { name: "CSS / Tailwind", level: 95 },
    ],
  },
];

// ---- Deneyim zaman çizelgesi ----
export const experienceTimeline = [
  {
    id: 1,
    year: "2025 — 2026",
    title: "AI & Veri Mühendisi",
    institution: "Pasifik Teknoloji",
    description:
      "Yapay zeka destekli veri çözümleri geliştirerek, büyük ölçekli veri işleme ve analiz projelerinde görev aldım. NLP tabanlı chatbotlar, RAG mimarileri ve LLM fine-tuning süreçlerinde aktif rol oynadım. Ayrıca, veri mühendisliği alanında API geliştirme ve Docker tabanlı dağıtım konularında deneyim kazandım.Veri odaklı çözümlerle iş süreçlerini optimize etmeye yönelik projelerde yer aldım.",
    tags: [
      "Python",
      "TensorFlow",
      "NLP",
      "Docker",
      "Data Engineering",
      "API Development",
      "LLM Frameworks",
      "Transformers",
      "Multimodal AI",
      "Frameworks",
      "Git",
      "Time Series Analysis",
      "Machine Learning",
      "Deep Learning",
    ],
  },
  {
    id: 2,
    year: "2024 - 2025",
    title: "Veri Etiketleme Ekip Lideri",
    institution: "Ekinoksoft",
    description:
      "Veri etiketleme süreçlerini yönettim, NLP projeleri için yüksek kaliteli veri kümeleri oluşturdum , analiz ettim ve ürettim. Ekip koordinasyonu ve kalite kontrol süreçlerinde aktif rol aldım.",
    tags: [
      "Data Labeling",
      "NLP",
      "Hugging Face",
      "Python",
      "Label Studio",
      "Data Processing",
      "Machine Learning",
      "Deep Learning",
    ],
  },
  {
    id: 3,
    year: "2025 - Devam Ediyor",
    title: "Yapay Zeka Yüksek Lisans",
    institution: "Eskişehir Osmangazi Üniversitesi",
    description:
      "Yapay Zeka Alanında Yüksek Lisans eğitimime devam ediyorum. Tez konum 'Sonlu Elemanlar Yönteminin GNN Tabanlı Vekil Modellerle Performans Analizi' üzerine. Akademik çalışmalarımın yanı sıra, yapay zeka ve veri bilimi alanlarında uygulamalı projeler geliştiriyorum.",
    tags: [
      "Python",
      "Transformers",
      "Surrogate Models",
      "GNN",
      "Multimodal AI",
      "Frameworks",
      "Torch",
      "TensorFlow",
    ],
  },
  {
    id: 4,
    year: "2019 — 2024",
    title: "İnşaat Mühendisliği Lisans",
    institution: "Eskişehir Osmangazi Üniversitesi",
    description:
      "Lisans eğitimimi başarıyla tamamladım. Akademik kariyerime aynı üniversitede yüksek lisans ile devam ediyorum.",
    tags: ["Yapısal Analiz", "İnşaat Mühendisliğinde Yapay Zeka", "BIM"],
  },
];

// Eski portföy projeleri (AllProjects sayfasında kullanılabilir)
export const portfolioProjects = [];
