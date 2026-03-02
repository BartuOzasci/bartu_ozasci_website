// ============================================================
// HOME PAGE DATA
// Tüm ana sayfa verilerini buradan düzenleyebilirsiniz
// ============================================================

// ---- HERO SECTION ----
export const heroData = {
  name: "Bartu Özaşçı",
  roles: ["AI & DATA ENGINEER", "CIVIL ENGINEER", "WEB DEVELOPER"],
  ctaButtons: {
    portfolio: { label: "Portfolyomu Gör", href: "/portfolio" },
    contact: { label: "Benimle İletişime Geç", href: "#iletisim" },
  },
};

// ---- ABOUT SECTION ----
export const aboutData = {
  // Resim: src/assets/img/home/profile.jpg koyunuz
  profileImage: "/assets_img/home/about_Photo.jpeg",
  description: `Ben Bartu Özaşçı. 2 Aralık 2000 tarihinde İzmir, Konak’ta doğdum. İlk ve ortaöğrenimimi Balıkesir'de tamamladıktan sonra, lise eğitimime Balıkesir Cumhuriyet Anadolu Lisesi’nde başlayıp 2019 yılında Karesi Temel Lisesi’nden mezun oldum.
2024 yılında Eskişehir Osmangazi Üniversitesi İnşaat Mühendisliği Bölümü’ndeki lisans eğitimimi başarıyla tamamladım.
Şu anda akademik kariyerime aynı üniversitede devam ediyor; Prof. Dr. Hakan Özbaşaran danışmanlığında, 'İnşaat Mühendisliğinde Yapay Zeka' üzerine yüksek lisans çalışmalarımı sürdürüyorum.
Akademik çalışmalarımın yanı sıra yazılım geliştirmek, algoritmalar tasarlamak ve yapay zeka modelleri eğitmek en büyük tutkumdur. Hem hobilerimin hem de profesyonel çalışmalarımın bir yansıması olan bu portfolyo sitesine hoş geldiniz.`,

  info: {
    name: "Bartu Özaşçı",
    title: "AI & Data Engineer | Civil Engineer | Web Developer",
    phone: "+90 (541) 938 45 26",
    email: "bartuozasci@gmail.com",
    github: "https://github.com/BartuOzasci",
    linkedin: "https://www.linkedin.com/in/bartu-özaşçı-522679271/",
  },
};

// ---- TIMELINE PROJECTS (Ana sayfa - 4 öne çıkan proje) ----
export const timelineProjects = [
  {
    id: 1,
    title:
      "VisionTalk: Yapay Zeka Destekli Görsel Analiz ve Soru-Cevap (VQA) Sistemi",
    description:
      "Kullanıcıların yüklediği görseller üzerinde Salesforce'un gelişmiş BLIP (Bootstrapping Language-Image Pre-training) derin öğrenme modellerini kullanarak otomatik içerik açıklaması (captioning) oluşturan ve görseller hakkında sorulan karmaşık soruları yanıtlayan yenilikçi bir web uygulamasıdır. Sistem, 'lazy loading' (tembel yükleme) mimarisiyle modelleri yalnızca ihtiyaç anında belleğe alarak yüksek sunucu optimizasyonu sağlar. Ayrıca, entegre çeviri katmanı sayesinde İngilizce eğitilmiş AI modelleriyle tamamen Türkçe etkileşim kurulmasına olanak tanır. Ön yüzde ise sürükle-bırak dosya yükleme, gerçek zamanlı sohbet (chat) ekranı ve cam efekti (glassmorphism) gibi modern UI/UX tasarım trendleriyle kesintisiz bir kullanıcı deneyimi sunar.",
    technologies: [
      "Python 3.11+",
      "FastAPI",
      "Uvicorn",
      "PyTorch",
      "Hugging Face Transformers",
      "Salesforce BLIP (blip-vqa-base & blip-image-captioning-base)",
      "deep-translator (Google Translate API)",
      "React 19",
      "Vite",
      "Tailwind CSS 4",
      "Axios",
    ],
    image: "/assets_img/projects/main_project_1.png",
    // imgSide: "right" = Resim sağda, "left" = Resim solda (timeline sıralı)
    imgSide: "right",
  },
  {
    id: 2,
    title: "Bütçe Takip (Budget Control): Finansal Yönetim ve Analiz Sistemi",
    description:
      "Kullanıcıların gelir ve gider hareketlerini detaylı bir şekilde izlemelerine, yönetmelerine ve analiz etmelerine olanak tanıyan, ASP.NET Core MVC mimarisi ile geliştirilmiş kapsamlı bir bütçe takip web uygulamasıdır. Sistem; işlemleri (gelir/gider) özel olarak oluşturulabilen kategoriler altında sınıflandırma ve bu verileri Entity Framework Core aracılığıyla güvenilir bir veritabanı altyapısında saklama özelliklerine sahiptir. Entegre Dashboard (Kontrol Paneli) sayesinde kullanıcılar, toplam gelir, gider ve net bakiye gibi kritik finansal metriklerini tek bir ekranda özet olarak görüntüleyerek daha sağlıklı bütçe planlaması yapabilirler. Backend tarafında C# gücünden faydalanılırken, ön yüzde Razor Views ve standart web teknolojileri kullanılarak dinamik ve kullanıcı dostu bir arayüz sunulmaktadır.",
    technologies: [
      "C#",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "Razor Views (.cshtml)",
      "HTML5",
      "CSS3",
      "JavaScript",
      "SQL Server (veya SQLite - Entity Framework destekli DB provider)",
    ],
    image: "/assets_img/projects/main_project_2.png",
    imgSide: "left",
  },
  {
    id: 3,
    title: "FutbolBot: Yapay Zeka Destekli Futbol Haberleri Asistanı",
    description:
      "Ollama üzerinde çalışan yerel bir büyük dil modeli (LLM) ile güncel futbol haberlerini birleştirerek Türkçe yanıtlar üreten yapay zeka tabanlı bir chatbot uygulamasıdır. Sistem; RSS beslemeleri, NewsAPI ve TheSportsDB gibi çoklu kaynaklardan asenkron (paralel) olarak haber ve maç verilerini çeker, tekilleştirir ve İngilizce içerikleri otomatik çevirerek modele bağlam (context) olarak sunar. FastAPI ile geliştirilen arka uç mimarisi, Server-Sent Events (SSE) teknolojisi üzerinden streaming (akış) yaparak frontend'e anlık veri iletir ve 'typewriter' efektiyle dinamik bir sohbet deneyimi oluşturur. Ayrıca bellek-içi akıllı önbellekleme (cache) ile dış API çağrıları optimize edilirken, ön yüzde Tailwind CSS kullanılarak koyu temalı ve mobil uyumlu modern bir arayüz sağlanmaktadır.",
    technologies: [
      "Python 3.11+",
      "FastAPI",
      "Ollama (Yerel LLM)",
      "httpx (Asenkron İstekler)",
      "Server-Sent Events (SSE)",
      "HTML5 / Vanilla JS",
      "Tailwind CSS 3.x",
      "NewsAPI & TheSportsDB",
      "RSS (XML)",
    ],
    image: "/assets_img/projects/main_project_3.png",
    imgSide: "right",
  },
  {
    id: 4,
    title: "İHA Kanat Yapısal Optimizasyonu: Surrogate Modelleme",
    description:
      "Bayesian Optimizasyon ve Aktif Öğrenme teknikleri kullanılarak İHA (drone) kanat tasarımında, yapısal güvenlik kısıtı (maksimum sehim) altında ağırlık minimizasyonu sağlayan bir mühendislik optimizasyon sistemidir. Hesaplama maliyeti yüksek olan fizik motoru (Euler-Bernoulli kiriş teorisi) simülasyonlarını minimize etmek amacıyla Gaussian Process (GP) tabanlı bir surrogate (vekil) model kullanır. Expected Improvement (EI) edinim fonksiyonu sayesinde belirsiz bölgeleri keşfetme (exploration) ve bilinen iyi bölgeleri sömürme (exploitation) dengesini kurarak, en az simülasyon çağrısıyla en hafif kanat geometrisini (uzunluk, genişlik, kalınlık) otomatik olarak bulur. Sistem ayrıca Latin Hiperkup Örnekleme (LHS) ile başlangıç veri seti oluşturma ve 'Warm Start' özelliği ile optimizasyona kaldığı yerden devam edebilme yeteneklerine sahiptir.",
    technologies: [
      "Python 3.10+",
      "Scikit-Learn (Gaussian Process, LHS)",
      "NumPy",
      "SciPy",
      "Matplotlib",
      "Joblib",
      "PyTorch",
    ],
    image: "/assets_img/projects/main_project_4.png",
    imgSide: "left",
  },
];

// ---- CONTACT SECTION ----
export const contactData = {
  formspreeId: "xojnodro",
  heading: "İletişime Geçelim",
  subheading: "Bir projeniz mi var? Birlikte çalışalım.",
  email: "bartuozasci@gmail.com",
  phone: "+90 (541) 938 45 26",
};

// ---- SOCIAL LINKS ----
export const socialLinks = {
  github: "https://github.com/BartuOzasci",
  linkedin: "https://www.linkedin.com/in/bartu-özaşçı-522679271/",
  instagram: "https://www.instagram.com/bartuozsci?igsh=aXR4eXhoYzF1dnd2",
  email: "mailto:bartuozasci@gmail.com",
  phone: "tel:+905419384526",
};
