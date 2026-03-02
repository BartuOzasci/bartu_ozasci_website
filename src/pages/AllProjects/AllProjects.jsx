// ============================================================
// ALL PROJECTS PAGE
// - Kart grid tasarımı
// - Her kart: resim (linke gider), proje adı, teknoloji tagları
// - "Detay" butonuna basınca aşağıdan yukarı sliding modal açılır
// - Kategori filtresi
// ============================================================
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiX, FiImage } from "react-icons/fi";
import BackButton from "../../components/common/BackButton/BackButton";
import { allProjectsData } from "../../data/projectsData";
import "./AllProjects.css";

// Unique categories
const ALL_CATEGORY = "Tümü";
const getCategories = (projects) => [
  ALL_CATEGORY,
  ...Array.from(new Set(projects.map((p) => p.category.split("/")[0].trim()))),
];

// ---- Single Project Card ----
const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Image – clicking on it goes to live URL */}
      <div className="project-card__img-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__img"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.nextSibling.style.display = "flex";
          }}
        />
        <a
          className="project-card__img-link"
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} projesine git`}
        >
          <FiExternalLink className="project-card__img-link-icon" />
        </a>
        <div
          className="project-card__img-placeholder"
          style={{ display: "none" }}
        >
          <FiImage />
        </div>
      </div>

      {/* Body */}
      <div className="project-card__body">
        <div className="project-card__category">{project.category}</div>
        <h3 className="project-card__title">{project.title}</h3>

        {/* Tech Tags (first 4) */}
        <div className="project-card__tags">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="project-card__tag">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="project-card__footer">
          <button
            className="project-card__detail-btn"
            onClick={() => setOpen(true)}
            aria-label={`${project.title} detaylarını gör`}
          >
            Detayları Gör
          </button>
          <a
            href={project.liveUrl}
            className="project-card__live-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Projeye git"
          >
            <FiExternalLink />
          </a>
        </div>
      </div>

      {/* ---- In-card slide-up overlay ---- */}
      <div
        className={`project-card__overlay${open ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} detayları`}
      >
        {/* Close */}
        <button
          className="project-card__overlay-close"
          onClick={() => setOpen(false)}
          aria-label="Kapat"
        >
          <FiX size={16} />
        </button>

        <div className="project-card__overlay-cat">{project.category}</div>
        <h3 className="project-card__overlay-title">{project.title}</h3>
        <p className="project-card__overlay-desc">{project.description}</p>

        <div className="project-card__overlay-tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__overlay-actions">
          <a
            href={project.liveUrl}
            className="project-card__overlay-link project-card__overlay-link--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink /> Projeye Git
          </a>
          <a
            href={project.githubUrl}
            className="project-card__overlay-link project-card__overlay-link--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ---- AllProjects Page ----
const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState(ALL_CATEGORY);
  const categories = getCategories(allProjectsData);

  const filtered =
    activeFilter === ALL_CATEGORY
      ? allProjectsData
      : allProjectsData.filter(
          (p) => p.category.split("/")[0].trim() === activeFilter,
        );

  return (
    <>
      <Helmet>
        <title>Tüm Çalışmalar | Bartu Özaşçı</title>
        <meta
          name="description"
          content="Bartu Özaşçı tüm projeleri ve çalışmaları."
        />
      </Helmet>

      <div className="projects-page">
        {/* Back Button */}
        <div className="projects-page__topbar">
          <BackButton label="Ana Sayfaya Dön" to="/" />
        </div>

        <div className="projects-page__content">
          {/* Header */}
          <motion.div
            className="projects-page__header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="projects-page__tag">// TÜM ÇALIŞMALARIM</span>
            <h1 className="section-title">Projeler</h1>
            <p className="section-subtitle" style={{ margin: "0.5rem auto 0" }}>
              Geliştirdiğim tüm proje ve çalışmalar
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="projects-page__filters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            role="group"
            aria-label="Kategori Filtreleri"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`projects-page__filter-btn${activeFilter === cat ? " active" : ""}`}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={activeFilter === cat}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="projects-page__grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default AllProjects;
