// ============================================================
// HERO SECTION
// - Degrade animasyonlu arka plan
// - Büyük isim yazısı
// - Typewriter efekti (AI & DATA ENGINEER, CIVIL ENGINEER, WEB DEVELOPER)
// - İki CTA butonu
// ============================================================
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import Button from "../../common/Button/Button";
import { heroData } from "../../../data/homeData";
import "./Hero.css";

const Hero = () => {
  const { name, roles, ctaButtons } = heroData;
  const [firstName, lastName] = name.split(" ");

  return (
    <section className="hero" id="hero" aria-label="Hero Bölümü">
      {/* ---- Animated Background ---- */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__gradient-orb hero__gradient-orb--1" />
        <div className="hero__gradient-orb hero__gradient-orb--2" />
        <div className="hero__gradient-orb hero__gradient-orb--3" />
        <div className="hero__grid" />
      </div>

      {/* ---- Content ---- */}
      <div className="hero__content">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Merhaba, ben
        </div>

        {/* Name */}
        <h1 className="hero__name">
          <span className="hero__name-first">{firstName}</span>
          <span className="hero__name-last">{lastName}</span>
        </h1>

        {/* Typewriter */}
        <div className="hero__typewriter-wrap">
          <span className="hero__typewriter">
            <Typewriter
              options={{
                strings: roles,
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="hero__cta">
          <Button to="/portfolio" variant="primary" size="lg">
            {ctaButtons.portfolio.label}
          </Button>
          <Button anchor="#iletisim" variant="outline" size="lg">
            {ctaButtons.contact.label}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>kaydır</span>
      </div>
    </section>
  );
};

export default Hero;
