// ============================================================
// BUTTON COMPONENT - Ortak buton bileşeni
// Tüm sayfalarda aynı tasarımı paylaşır
// ============================================================
import { Link } from "react-router-dom";
import "./Button.css";

/**
 * @param {string} variant - 'primary' | 'outline' | 'ghost'
 * @param {string} size    - 'sm' | 'md' | 'lg'
 * @param {string} href    - Harici link (a etiketi)
 * @param {string} to      - Router link (react-router Link)
 * @param {string} anchor  - Aynı sayfada anchor (href ile # scrolls)
 * @param {function} onClick
 */
const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  anchor,
  onClick,
  className = "",
  icon,
  ...props
}) => {
  const classes = [
    "btn",
    `btn-${variant}`,
    size !== "md" ? `btn-${size}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  if (anchor) {
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      if (onClick) onClick(e);
    };
    return (
      <button className={classes} onClick={handleAnchorClick} {...props}>
        {content}
      </button>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  );
};

export default Button;
