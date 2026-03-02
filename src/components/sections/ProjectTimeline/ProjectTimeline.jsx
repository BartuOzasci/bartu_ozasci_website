// ============================================================
// PROJECT TIMELINE SECTION
// - Sağlı sollu çapraz proje listesi
// - Her item: resim + açıklama + teknoloji tagları
// - Scroll animasyonları (Framer Motion + IntersectionObserver)
// - "Tüm Çalışmalarım" alt butonu
// ============================================================
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiTag, FiImage } from "react-icons/fi";
import Button from "../../common/Button/Button";
import { timelineProjects } from "../../../data/homeData";
import "./ProjectTimeline.css";

// Single item animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// ---- Single Timeline Item ----
const TimelineItem = ({ project, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const isImgRight = project.imgSide === "right";

  return (
    <motion.div
      ref={ref}
      className={`timeline__item timeline__item--img-${project.imgSide}`}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: 0.1 }}
    >
      {/* ---- Image ---- */}
      <div className="timeline__item-img">
        <img
          src={project.image}
          alt={project.title}
          className="timeline__img"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="timeline__img-placeholder" style={{ display: "none" }}>
          <FiImage />
        </div>
        <div className="timeline__img-overlay" aria-hidden="true" />
      </div>

      {/* ---- Center Node ---- */}
      <div className="timeline__item-node" aria-hidden="true">
        <div className="timeline__item-dot" />
        <span className="timeline__item-year">{`0${index + 1}`}</span>
      </div>

      {/* ---- Info ---- */}
      <div className="timeline__item-info">
        <span className="timeline__item-number">{`// 0${index + 1}`}</span>
        <h3 className="timeline__item-title">{project.title}</h3>
        <p className="timeline__item-desc">{project.description}</p>

        {/* Technology Tags */}
        <div
          className="timeline__item-tags"
          role="list"
          aria-label="Kullanılan Teknolojiler"
        >
          {project.technologies.map((tech) => (
            <span key={tech} className="timeline__tag" role="listitem">
              <FiTag className="timeline__tag-icon" aria-hidden="true" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ---- Timeline Section ----
const ProjectTimeline = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projeler" className="timeline" aria-label="Projeler Bölümü">
      <div className="timeline__container">
        {/* Header */}
        <motion.div
          ref={ref}
          className="timeline__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="timeline__section-tag">// 02 — Çalışmalarım</span>
          <h2 className="section-title">Önemli Projelerim</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Yaptığım çalışmalardan öne çıkan projeler
          </p>
        </motion.div>

        {/* Timeline List */}
        <div className="timeline__list" style={{ position: "relative" }}>
          {/* Central line - desktop */}
          <div className="timeline__line" aria-hidden="true" />

          {timelineProjects.map((project, i) => (
            <TimelineItem key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="timeline__cta">
          <Button to="/projects" variant="outline" size="lg">
            Tüm Çalışmalarım
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
