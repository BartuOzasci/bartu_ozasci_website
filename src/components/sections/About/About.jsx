// ============================================================
// ABOUT SECTION
// - Glass kart tasarımı
// - Profil resmi (src/assets/img/home/profile.jpg)
// - İsim, meslek, telefon, mail, GitHub, LinkedIn mini bilgi alanı
// - Galeri butonu
// - Intersection Observer ile scroll animasyonu
// ============================================================
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  FiUser,
  FiBriefcase,
  FiPhone,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiImage,
} from "react-icons/fi";
import Button from "../../common/Button/Button";
import { aboutData } from "../../../data/homeData";
import "./About.css";

// Skill tags to display
const SKILLS = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "NLP",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "SQLlite",
  "PostgreSQL",
  "Time Series Analysis",
  "Git",
  "Docker",
  "ASP.NET Core",
  "API Development",
  "Frameworks",
  "Transformers",
  "Multimodal AI",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const About = () => {
  const { profileImage, description, info } = aboutData;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      id="hakkimda"
      className="about"
      aria-label="Hakkımda Bölümü"
      ref={ref}
    >
      <div className="about__container">
        {/* Section Header */}
        <motion.div
          className="about__header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="about__section-tag">// 01 — Hakkımda</span>
          <h2 className="section-title">Beni Tanıyın</h2>
        </motion.div>

        {/* Main Layout */}
        <div className="about__layout">
          {/* ---- Profile Card ---- */}
          <motion.div
            className="about__card"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            {/* Profile Image */}
            <div className="about__img-wrap">
              <img
                src={profileImage}
                alt="Bartu Özaşçı profil fotoğrafı"
                className="about__img"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                className="about__img-placeholder"
                style={{ display: "none" }}
              >
                <FiUser />
              </div>
              <div className="about__img-glow" aria-hidden="true" />
            </div>

            {/* Mini Info */}
            <div className="about__mini-info">
              <div className="about__info-name">{info.name}</div>
              <div className="about__info-title">{info.title}</div>

              <div className="about__info-items">
                <div className="about__info-item">
                  <span className="about__info-item-icon">
                    <FiUser />
                  </span>
                  {info.name}
                </div>
                <div className="about__info-item">
                  <span className="about__info-item-icon">
                    <FiBriefcase />
                  </span>
                  {info.title.split("|")[0].trim()}
                </div>
                <div className="about__info-item">
                  <span className="about__info-item-icon">
                    <FiPhone />
                  </span>
                  {info.phone}
                </div>
                <div className="about__info-item">
                  <span className="about__info-item-icon">
                    <FiMail />
                  </span>
                  {info.email}
                </div>
              </div>

              {/* Social Icons */}
              <div className="about__social-row">
                <a
                  href={info.github}
                  className="about__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                <a
                  href={info.linkedin}
                  className="about__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ---- Right Content ---- */}
          <motion.div
            className="about__content"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.35 }}
          >
            <div className="about__text-block">
              <h2>
                AI Mühendisi , İnşaat Mühendisi &{" "}
                <span className="gradient-text">Web Geliştirici</span>
              </h2>
              <p>{description}</p>
            </div>

            {/* Skills */}
            <div>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.85rem",
                  marginBottom: "0.75rem",
                  fontFamily: "JetBrains Mono, monospace",
                  letterSpacing: "0.1em",
                }}
              >
                // TEKNOLOJİLER
              </p>
              <div className="about__tags">
                {SKILLS.map((skill) => (
                  <span key={skill} className="about__tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery Button */}
            <div className="about__gallery-btn">
              <Button to="/gallery" variant="ghost" icon={<FiImage />}>
                Galerime Git
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
