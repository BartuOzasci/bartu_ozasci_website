// ============================================================
// APP - Ana Router
// - Home sayfasında Navbar + Footer gösterilir
// - Alt sayfalar (Portfolio, Gallery, AllProjects) kendi başlarına
// ============================================================
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Gallery from "./pages/Gallery/Gallery";
import AllProjects from "./pages/AllProjects/AllProjects";

// Pages that show Navbar + Footer
const SHELL_ROUTES = ["/"];

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

const App = () => {
  const location = useLocation();
  const showShell = SHELL_ROUTES.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {showShell && <Navbar />}

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ width: "100%" }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {showShell && <Footer />}
    </>
  );
};

export default App;
