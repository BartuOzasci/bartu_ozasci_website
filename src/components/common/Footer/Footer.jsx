// ============================================================
// FOOTER COMPONENT
// - Sosyal medya ikonları (Instagram, LinkedIn, GitHub, Mail, Tel)
// - Hover efektleri
// - Şık minimal tasarım
// ============================================================
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiPhone } from 'react-icons/fi';
import { socialLinks } from '../../../data/homeData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: <FiInstagram />, href: socialLinks.instagram, label: 'Instagram', color: '#E1306C' },
    { icon: <FiLinkedin  />, href: socialLinks.linkedin,  label: 'LinkedIn',  color: '#0A66C2' },
    { icon: <FiGithub    />, href: socialLinks.github,    label: 'GitHub',    color: '#fff'    },
    { icon: <FiMail      />, href: socialLinks.email,     label: 'E-posta',   color: '#00D4FF' },
    { icon: <FiPhone     />, href: socialLinks.phone,     label: 'Telefon',   color: '#6C63FF' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__glow" aria-hidden="true" />

      <div className="footer__container">
        {/* Brand */}
        <div className="footer__brand">
          <span className="footer__name gradient-text">Bartu Özaşçı</span>
          <p className="footer__tagline">AI & Data Engineer · Civil Engineer · Web Developer</p>
        </div>

        {/* Social Icons */}
        <div className="footer__socials" role="list" aria-label="Sosyal Medya Linkleri">
          {socials.map(({ icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              className="footer__social-icon"
              style={{ '--icon-color': color }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              role="listitem"
            >
              {icon}
              <span className="footer__social-tooltip">{label}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="footer__copy">
          © {currentYear} Bartu Özaşçı. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
