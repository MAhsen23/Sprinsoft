import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';
import HeroSection from '@/components/hero/Hero';
import ProjectsSection from '@/components/projects/Projects';
import ServicesSection from '@/components/services/Services';
import Testimonial from '@/components/testimonial/Testimonial';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection page={'home'} showButton={true} description={"Turning your ideas into exciting digital experiences with creativity and precision."} />
      <ServicesSection />
      <ProjectsSection />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
