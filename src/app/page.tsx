import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';
import HeroSection from '@/components/hero/Hero';
import ProjectsSection from '@/components/projects/Projects';
import ServicesSection from '@/components/services/Services';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection title={"Welcome to Sprinsoft"} showButton={true} description={"Where ideas spring to life"} tilt={true} imageUrl={'/hero_banner_2.png'} />
      <ServicesSection />
      <ProjectsSection />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
