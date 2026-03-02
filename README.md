<div align="center">

# 🚀 Bartu Özaşçı — Kişisel Portfolyo Sitesi

**AI & Data Engineer · Civil Engineer · Web Developer**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-FF0055?style=flat-square&logo=framer)](https://www.framer.com/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

[🌐 Canlı Demo](#) &nbsp;·&nbsp; [📧 İletişim](mailto:bartuozasci@gmail.com) &nbsp;·&nbsp; [💼 LinkedIn](https://www.linkedin.com/in/bartu-özaşçı-522679271/)

</div>

---

## 📌 Proje Hakkında

Bu repo, **Bartu Özaşçı**'nın kişisel portfolyo ve tanıtım sitesinin kaynak kodunu içermektedir. Site; yapay zeka, veri mühendisliği, inşaat mühendisliği ve web geliştirme alanlarındaki çalışmaları, teknik yetkinlikleri ve iletişim bilgilerini modern ve etkileyici bir arayüzle sunmak amacıyla sıfırdan geliştirilmiştir.

Koyu tema ve cam efektli (glassmorphism) tasarım diliyle inşa edilen site; animasyonlar, 3D carousel galeri, scroll-triggered geçişler ve tam responsive yapısıyla zengin bir kullanıcı deneyimi sunar.

---

## ✨ Özellikler

- 🎨 **Koyu tema** — Özenle seçilmiş mor/cyan renk paleti, glassmorphism efektleri
- 🔄 **3D Carousel Galeri** — CSS `perspective` + `transform-style: preserve-3d` ile dönen galeri, klavye & swipe destekli
- 🗂️ **Proje Kataloğu** — Kategori filtreli, slide-up detay overlay'li proje kartları
- 📜 **Timeline Bölümü** — Sağlı-sollu çapraz proje zaman çizelgesi
- 📊 **Portfolyo Sayfası** — Animasyonlu skill barları, deneyim zaman çizelgesi, CV indirme
- 📬 **İletişim Formu** — Formspree entegrasyonlu, gerçek zamanlı durum geri bildirimi
- ⚡ **Sayfa Geçişleri** — Framer Motion ile `AnimatePresence` geçiş animasyonları
- 📱 **Tam Responsive** — Mobil, tablet ve masaüstü için optimize
- 🔍 **SEO** — `react-helmet-async` ile sayfa bazlı meta etiketleri
- 📄 **CV İndirme** — Portfolio sayfasından direkt PDF indirme

---

## 🛠️ Teknoloji Yığını

| Katman               | Teknoloji                                     |
| -------------------- | --------------------------------------------- |
| **Framework**        | React 19 + Vite 6                             |
| **Routing**          | React Router DOM v7                           |
| **Animasyon**        | Framer Motion, CSS 3D Transforms              |
| **Stil**             | Tailwind CSS 3, CSS Modules (component bazlı) |
| **İkonlar**          | React Icons (Feather)                         |
| **Scroll Animasyon** | react-intersection-observer                   |
| **Form**             | Formspree REST API                            |
| **SEO**              | react-helmet-async                            |
| **Build Tool**       | Vite + @vitejs/plugin-react                   |
| **Linting**          | ESLint 9 (flat config)                        |

---

## 📁 Proje Yapısı

```
src/
├── assets/
│   └── img/
│       ├── gallery/        # Galeri fotoğrafları
│       ├── home/           # Ana sayfa görselleri (profil fotoğrafı vb.)
│       ├── logo/           # Site logosu
│       └── projects/       # Proje görselleri
├── components/
│   ├── common/
│   │   ├── BackButton/     # Geri dön butonu
│   │   ├── Button/         # Genel amaçlı buton
│   │   ├── Footer/         # Alt bilgi
│   │   ├── Navbar/         # Üst navigasyon
│   │   └── ScrollToTop/    # Route değişiminde sayfayı üste al
│   └── sections/
│       ├── About/          # Hakkımda bölümü
│       ├── Contact/        # İletişim formu
│       ├── Hero/           # Açılış (hero) bölümü
│       └── ProjectTimeline/# Ana sayfa proje zaman çizelgesi
├── data/
│   ├── galleryData.js      # Galeri öğeleri
│   ├── homeData.js         # Ana sayfa verileri (hero, about, timeline, contact, social)
│   ├── portfolioData.js    # Portfolyo sayfası verileri (bio, skills, timeline, cv)
│   └── projectsData.js     # Tüm projeler sayfası verileri
├── pages/
│   ├── Home.jsx            # Ana sayfa (Navbar + Hero + About + Timeline + Contact + Footer)
│   ├── AllProjects/        # Tüm çalışmalar — filtreli grid
│   ├── Gallery/            # 3D carousel galeri
│   └── Portfolio/          # Teknik yetkinlikler & CV
├── App.jsx                 # Router + AnimatePresence
├── main.jsx                # ReactDOM + BrowserRouter + HelmetProvider
└── index.css               # Global stiller, CSS değişkenleri
public/
└── cv/
    └── bartu-ozasci-cv.pdf # İndirilebilir CV
```

---

## 📄 Sayfalar

| Sayfa            | Yol          | Açıklama                                              |
| ---------------- | ------------ | ----------------------------------------------------- |
| **Ana Sayfa**    | `/`          | Hero, Hakkımda, Seçili Projeler, İletişim             |
| **Portfolyo**    | `/portfolio` | Bio, Skill barları, Deneyim zaman çizelgesi, CV indir |
| **Tüm Projeler** | `/projects`  | Kategori filtreli proje kartları, detay overlay       |
| **Galeri**       | `/gallery`   | 3D dönen fotoğraf galerisi                            |

---

## 🚀 Kurulum & Çalıştırma

### Ön Gereksinimler

- Node.js ≥ 18
- npm ≥ 9

### Adımlar

```bash
# 1. Depoyu klonla
git clone https://github.com/BartuOzasci/bartu_ozasci_website.git
cd bartu_ozasci_website

# 2. Bağımlılıkları yükle
npm install

# 3. Geliştirme sunucusunu başlat
npm run dev

# 4. Üretim derlemesi oluştur
npm run build

# 5. Derlemeyi önizle
npm run preview
```

---

## ⚙️ İçerik Özelleştirme

Tüm site içeriği merkezi veri dosyalarından yönetilir; herhangi bir bileşene dokunmaya gerek yoktur.

| Dosya                           | Ne Değiştirilir                                                                   |
| ------------------------------- | --------------------------------------------------------------------------------- |
| `src/data/homeData.js`          | İsim, roller, hakkımda metni, iletişim bilgileri, sosyal linkler, seçili projeler |
| `src/data/projectsData.js`      | Tüm çalışmalar sayfasındaki proje kartları                                        |
| `src/data/portfolioData.js`     | Bio paragrafları, skill seviyeleri, deneyim zaman çizelgesi, CV linki             |
| `src/data/galleryData.js`       | Galeri fotoğrafları ve etiketleri                                                 |
| `public/cv/bartu-ozasci-cv.pdf` | İndirilebilir CV dosyası                                                          |

---

## 📬 İletişim

| Platform      | Bağlantı                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------- |
| **E-posta**   | [bartuozasci@gmail.com](mailto:bartuozasci@gmail.com)                                         |
| **LinkedIn**  | [linkedin.com/in/bartu-özaşçı-522679271](https://www.linkedin.com/in/bartu-özaşçı-522679271/) |
| **GitHub**    | [github.com/BartuOzasci](https://github.com/BartuOzasci)                                      |
| **Instagram** | [@bartuozsci](https://www.instagram.com/bartuozsci)                                           |
| **Telefon**   | +90 (541) 938 45 26                                                                           |

---

## 📝 Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır. İçeriklerin (fotoğraflar, CV, kişisel bilgiler) telif hakkı **Bartu Özaşçı**'ya aittir.

---

<div align="center">

Geliştirici: **Bartu Özaşçı** &nbsp;|&nbsp; © 2026 Tüm hakları saklıdır.

</div>
