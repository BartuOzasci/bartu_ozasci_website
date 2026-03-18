// ============================================================
// HOME PAGE - Ana sayfa
// Tüm bölümleri bir araya getirir
// ============================================================
import { Helmet } from 'react-helmet-async';
import Hero           from '../components/sections/Hero/Hero';
import About          from '../components/sections/About/About';
import ProjectTimeline from '../components/sections/ProjectTimeline/ProjectTimeline';
import Contact        from '../components/sections/Contact/Contact';

const Home = () => (
  <>
    <Helmet>
      <title>Bartu Özaşçı | AI & Data Engineer, Civil Engineer, Web Developer</title>
      <meta
        name="description"
        content="Bartu Özaşçı kişisel portfolyo sitesi. AI & Data Mühendisi, İnşaat Mühendisi ve Web Geliştirici."
      />
      <link rel="canonical" href="https://bartu.dev/" />
    </Helmet>

    <main>
      <Hero />
      <About />
      <ProjectTimeline />
      <Contact />
    </main>
  </>
);

export default Home;
