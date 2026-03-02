// ============================================================
// PORTFOLIO PAGE — Teknik Yetkinlikler & Hakkımda
// Cosmic theme — pulsing vertical timeline
// ============================================================
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FiDownload } from "react-icons/fi";
import BackButton from "../../components/common/BackButton/BackButton";
import {
  bioParagraphs,
  skillCategories,
  experienceTimeline,
  portfolioPageData,
} from "../../data/portfolioData";
import "./Portfolio.css";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

// ---- Skill Bar ----
const SkillBar = ({ name, level, color, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div ref={ref} className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.1,
            delay: delay * 0.08,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </div>
    </div>
  );
};

// ---- Skill Category Card ----
const SkillCard = ({ cat, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      className="skill-card"
      style={{ "--cat-color": cat.color }}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.12 }}
    >
      <div className="skill-card__icon">{cat.icon}</div>
      <h3 className="skill-card__title">{cat.title}</h3>
      <div className="skill-card__bars">
        {cat.skills.map((s, i) => (
          <SkillBar
            key={s.name}
            name={s.name}
            level={s.level}
            color={cat.color}
            delay={i + index * 5}
          />
        ))}
      </div>
    </motion.div>
  );
};

// ---- Experience Item ----
const ExperienceItem = ({ item, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });
  return (
    <motion.div
      ref={ref}
      className="exp-item"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div className="exp-item__dot" />
      <div className="exp-item__card">
        <span className="exp-item__year">{item.year}</span>
        <h3 className="exp-item__title">{item.title}</h3>
        <span className="exp-item__institution">{item.institution}</span>
        <p className="exp-item__desc">{item.description}</p>
        <div className="exp-item__tags">
          {item.tags.map((t) => (
            <span key={t} className="exp-item__tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ---- Cosmic Background ----
const CosmicBg = () => (
  <div className="portfolio-page__cosmic-bg" aria-hidden="true">
    <div className="portfolio-page__black-hole" />
    <div className="portfolio-page__grid" />
    <div className="portfolio-page__particle-stream portfolio-page__particle-stream--1" />
    <div className="portfolio-page__particle-stream portfolio-page__particle-stream--2" />
    <div className="portfolio-page__particle-stream portfolio-page__particle-stream--3" />
  </div>
);

// ---- Portfolio Page ----
const Portfolio = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <>
      <Helmet>
        <title>Portfolyo | Bartu Özaşçı</title>
        <meta
          name="description"
          content="Bartu Özaşçı teknik yetkinlikler, disiplinler arası uzmanlık: AI, veri mühendisliği, inşaat, web."
        />
      </Helmet>

      <div className="portfolio-page">
        <CosmicBg />

        <div className="portfolio-page__topbar">
          <BackButton label="Ana Sayfaya Dön" to="/" />
        </div>

        <div className="portfolio-page__content">
          {/* ========== HEADER ========== */}
          <motion.div
            ref={headerRef}
            className="portfolio-page__header"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="portfolio-page__tag">
              // BARTU ÖZAŞÇI — PORTFOLYO
            </div>
            <h1 className="portfolio-page__title">
              {portfolioPageData.heading}
            </h1>
            <p className="portfolio-page__subtitle">
              {portfolioPageData.subheading}
            </p>
          </motion.div>

          {/* ========== BIO ========== */}
          <section className="portfolio-section">
            <div className="portfolio-section__label">// BEN KİMİM</div>
            <div className="portfolio-section__line" />
            <div className="bio-block">
              {bioParagraphs.map((para, i) => (
                <motion.p
                  key={i}
                  className="bio-block__para"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </section>

          {/* ========== SKILLS ========== */}
          <section className="portfolio-section">
            <div className="portfolio-section__label">
              // TEKNİK YETKİNLİKLER
            </div>
            <div className="portfolio-section__line" />
            <div className="skills-grid">
              {skillCategories.map((cat, i) => (
                <SkillCard key={cat.id} cat={cat} index={i} />
              ))}
            </div>
          </section>

          {/* ========== EXPERIENCE TIMELINE ========== */}
          <section className="portfolio-section">
            <div className="portfolio-section__label">// DENEYİM & EĞİTİM</div>
            <div className="portfolio-section__line" />

            {/* Pulsing timeline line */}
            <div className="portfolio-page__timeline">
              <div
                className="portfolio-page__timeline-line"
                aria-hidden="true"
              />
              <div className="portfolio-page__items">
                {experienceTimeline.map((item, i) => (
                  <ExperienceItem key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>
          </section>

          {/* ========== CV ========== */}
          <motion.div
            className="portfolio-page__cv"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>Bartu Özaşçı — CV</h3>
            <p>Detaylı özgeçmişim için aşağıdan indirebilirsiniz.</p>
            <a
              href={portfolioPageData.cvUrl}
              className="portfolio-page__cv-btn"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload />
              CV İndir
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
