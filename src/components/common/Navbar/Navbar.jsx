// ============================================================
// NAVBAR COMPONENT
// - Sol: Logo (src/assets/img/logo/logo.png)
// - Sağ: Menü linkleri (desktop) + Toggle (mobil)
// - Active link takibi
// - Scroll'da arka plan blur efekti
// ============================================================
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../../assets/img/logo/site_Logo.png";

// Navigasyon linkleri - buradan düzenleyebilirsiniz
const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#hero", type: "anchor" },
  { label: "Hakkımda", href: "#hakkimda", type: "anchor" },
  { label: "Çalışmalarım", href: "#projeler", type: "anchor" },
  { label: "İletişim", href: "#iletisim", type: "anchor" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState("");
  const location = useLocation();

  // Scroll detection for navbar background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active anchor detection (home page sections)
      const sections = ["hero", "hakkimda", "projeler", "iletisim"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveAnchor(`#${id}`);
            return;
          }
        }
      }
      setActiveAnchor("");
    };

    handleScroll(); // Set initial active state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleAnchorClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMenuOpen(false);
      if (location.pathname !== "/") {
        window.location.href = href === "#hero" ? "/" : `/${href}`;
        return;
      }
      if (href === "#hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isLinkActive = (link) => {
    if (link.type === "anchor") return activeAnchor === link.href;
    return false;
  };

  const renderLinks = (isMobile = false) =>
    NAV_LINKS.map((link) => (
      <li key={link.label} className="navbar__link">
        <a
          href={link.href}
          className={isLinkActive(link) ? "active" : ""}
          onClick={(e) => handleAnchorClick(e, link.href)}
        >
          {link.label}
        </a>
      </li>
    ));

  return (
    <nav
      className={`navbar${scrolled ? " scrolled" : ""}`}
      role="navigation"
      aria-label="Ana Navigasyon"
    >
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="Ana Sayfa">
          <img
            src={logoImg}
            alt="Bartu Özaşçı Logo"
            className="navbar__logo-img"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links" role="menubar">
          {renderLinks()}
        </ul>

        {/* Mobile Toggle */}
        <button
          className={`navbar__toggle${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu - Navbar'ın altında açılır */}
      <ul
        className={`navbar__mobile${menuOpen ? " open" : ""}`}
        role="menu"
        aria-hidden={!menuOpen}
      >
        {renderLinks(true)}
      </ul>
    </nav>
  );
};

export default Navbar;
