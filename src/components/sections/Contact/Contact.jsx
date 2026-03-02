// ============================================================
// CONTACT SECTION
// - Formspree entegreli iletişim formu
// - Ad soyad, telefon, mail, konu, mesaj alanları
// - Başarı/hata durumu mesajları
// - Scroll animasyonları
// ============================================================
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiPhone, FiLoader } from "react-icons/fi";
import { contactData } from "../../../data/homeData";
import "./Contact.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(
        `https://formspree.io/f/${contactData.formspreeId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
          }),
        },
      );
      if (res.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="iletisim"
      className="contact"
      aria-label="İletişim Bölümü"
      ref={ref}
    >
      <div className="contact__container">
        {/* Header */}
        <motion.div
          className="contact__header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="contact__section-tag">// 03 — İletişim</span>
          <h2 className="section-title">{contactData.heading}</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            {contactData.subheading}
          </p>
        </motion.div>

        <div className="contact__layout">
          {/* ---- Left Info ---- */}
          <motion.div
            className="contact__info"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <div>
              <h3>Konuşalım</h3>
              <p>
                Bir projeniz, fikriniz veya iş birliği teklifiniz mi var?
                Aşağıdaki formu doldurun ya da doğrudan iletişime geçin.
              </p>
            </div>

            <a href={`mailto:${contactData.email}`} className="contact__detail">
              <span className="contact__detail-icon">
                <FiMail />
              </span>
              <div className="contact__detail-text">
                <span className="contact__detail-label">E-posta</span>
                <span className="contact__detail-value">
                  {contactData.email}
                </span>
              </div>
            </a>

            <a href={`tel:${contactData.phone}`} className="contact__detail">
              <span className="contact__detail-icon">
                <FiPhone />
              </span>
              <div className="contact__detail-text">
                <span className="contact__detail-label">Telefon</span>
                <span className="contact__detail-value">
                  {contactData.phone}
                </span>
              </div>
            </a>
          </motion.div>

          {/* ---- Form Card ---- */}
          <motion.div
            className="contact__form-card"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.35 }}
          >
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              {/* Row 1: First + Last name */}
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label className="contact__form-label" htmlFor="firstName">
                    Ad
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="contact__form-input"
                    placeholder="Adınız"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label className="contact__form-label" htmlFor="lastName">
                    Soyad
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="contact__form-input"
                    placeholder="Soyadınız"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Row 2: Phone + Email */}
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label className="contact__form-label" htmlFor="phone">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="contact__form-input"
                    placeholder="+90 5XX XXX XX XX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact__form-group">
                  <label className="contact__form-label" htmlFor="email">
                    E-posta
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="contact__form-input"
                    placeholder="mail@ornek.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="subject">
                  Konu
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="contact__form-input"
                  placeholder="Mesaj konusu"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message */}
              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="message">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__form-textarea"
                  placeholder="Mesajınızı buraya yazın..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Status */}
              {status === "success" && (
                <div className="contact__status contact__status--success">
                  ✓ Mesajınız başarıyla gönderildi! En kısa sürede dönüş
                  yapacağım.
                </div>
              )}
              {status === "error" && (
                <div className="contact__status contact__status--error">
                  ✗ Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan mail
                  atın.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="contact__form-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>Gönderiliyor...</>
                ) : (
                  <>
                    <FiSend /> Mesaj Gönder
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
