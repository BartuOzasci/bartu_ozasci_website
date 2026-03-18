// ============================================================
// BACK BUTTON - Alt sayfalarda geri dön butonu
// Portfolio, Galeri, Tüm Çalışmalar sayfalarında kullanılır
// ============================================================
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './BackButton.css';

const BackButton = ({ label = 'Geri Dön', to = '/' }) => {
  const navigate = useNavigate();

  return (
    <button
      className="back-btn"
      onClick={() => navigate(to)}
      aria-label="Geri dön"
    >
      <FiArrowLeft className="back-btn__icon" />
      <span>{label}</span>
    </button>
  );
};

export default BackButton;
