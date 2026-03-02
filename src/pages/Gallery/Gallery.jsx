// ============================================================
// GALLERY PAGE — 3D Rotating Carousel
// - CSS 3D perspective carousel
// - Sol/sağ ok tuşları ile gezinti (desktop)
// - Mobilde touch swipe destekli
// - Klavye (←/→) destekli
// ============================================================
import { useState, useEffect, useCallback, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { FiChevronLeft, FiChevronRight, FiImage } from "react-icons/fi";
import BackButton from "../../components/common/BackButton/BackButton";
import { galleryItems } from "../../data/galleryData";
import "./Gallery.css";

const CARD_COUNT = galleryItems.length;
const ANGLE_STEP = 360 / CARD_COUNT;
// circumradius: card edges touch at CARD_WIDTH/(2*sin(π/N)) — add 80px for spacing
const CARD_WIDTH = 340;
const RADIUS =
  Math.round(CARD_WIDTH / (2 * Math.sin(Math.PI / CARD_COUNT))) + 80;

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  const go = useCallback((delta) => {
    setCurrent((prev) => (prev + delta + CARD_COUNT) % CARD_COUNT);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) go(delta > 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <>
      <Helmet>
        <title>Galeri | Bartu Özaşçı</title>
        <meta name="description" content="Bartu Özaşçı fotoğraf galerisi." />
      </Helmet>

      <div className="gallery-page">
        {/* Ambient background */}
        <div className="gallery-page__bg" aria-hidden="true">
          <div className="gallery-page__glow gallery-page__glow--1" />
          <div className="gallery-page__glow gallery-page__glow--2" />
          <div className="gallery-page__grid" />
        </div>

        {/* Back */}
        <div className="gallery-page__topbar">
          <BackButton label="Ana Sayfaya Dön" to="/" />
        </div>

        <div className="gallery-page__inner">
          {/* Carousel Stage */}
          <div
            className="gallery-stage"
            aria-label="3D Fotoğraf Galerisi"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Prev Arrow */}
            <button
              className="gallery-arrow gallery-arrow--prev"
              onClick={() => go(-1)}
              aria-label="Önceki"
            >
              <FiChevronLeft />
            </button>

            {/* 3D Scene */}
            <div className="gallery-scene">
              <div
                className="gallery-carousel"
                style={{ transform: `rotateY(${-current * ANGLE_STEP}deg)` }}
              >
                {galleryItems.map((item, i) => {
                  const angle = i * ANGLE_STEP;
                  const isActive = i === current;
                  return (
                    <div
                      key={item.id}
                      className={`gallery-card${isActive ? " gallery-card--active" : ""}`}
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                      }}
                      onClick={() => {
                        const delta = (i - current + CARD_COUNT) % CARD_COUNT;
                        go(
                          delta <= CARD_COUNT / 2 ? delta : delta - CARD_COUNT,
                        );
                      }}
                      role="button"
                      aria-label={item.title}
                      tabIndex={isActive ? 0 : -1}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="gallery-card__img"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className="gallery-card__placeholder"
                        style={{ display: "none" }}
                      >
                        <FiImage />
                        <span>{item.number}</span>
                      </div>
                      <div
                        className="gallery-card__overlay"
                        aria-hidden="true"
                      />
                      <div className="gallery-card__tag">{item.tag}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Next Arrow */}
            <button
              className="gallery-arrow gallery-arrow--next"
              onClick={() => go(1)}
              aria-label="Sonraki"
            >
              <FiChevronRight />
            </button>
          </div>

          {/* Dots indicator */}
          <div
            className="gallery-dots"
            role="tablist"
            aria-label="Galeri navigasyon"
          >
            {galleryItems.map((item, i) => (
              <button
                key={item.id}
                className={`gallery-dot${i === current ? " gallery-dot--active" : ""}`}
                onClick={() => {
                  const delta = (i - current + CARD_COUNT) % CARD_COUNT;
                  go(delta <= CARD_COUNT / 2 ? delta : delta - CARD_COUNT);
                }}
                role="tab"
                aria-selected={i === current}
                aria-label={`${item.title} göster`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
