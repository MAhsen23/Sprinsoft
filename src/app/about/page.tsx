import HeroSection from '@/components/hero/Hero';
import ProjectsSection from '@/components/projects/Projects';
import ServicesSection from '@/components/services/Services';
import TeamSection from '@/components/team/Team';
import Expertise from '@/components/expertise/Expertise';
import Footer from '@/components/footer/Footer';

const About: React.FC = () => {
    return (
        <>
            <HeroSection showButton={false} title={"Who We Are"} tilt={true} description={"Our company is dedicated to providing top-notch web development, app development, and desktop application services. Our mission is to help businesses grow by offering innovative and efficient solutions."} imageUrl={"/about_banner.png"} />
            <Expertise />
            <TeamSection />
            <Footer />
        </>
    );
};

export default About;
