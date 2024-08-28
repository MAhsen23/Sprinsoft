import HeroSection from '@/components/hero/Hero';
import ProjectsSection from '@/components/projects/Projects';
import ServicesSection from '@/components/services/Services';
import TeamSection from '@/components/team/Team';
import Expertise from '@/components/expertise/Expertise';
import Footer from '@/components/footer/Footer';

const About: React.FC = () => {
    return (
        <>
            <HeroSection page={'about'} title={"Turning Your Ideas into Creative Digital Solutions"} tilt={true} description={"We use technology and creativity to create amazing digital experiences. Our dedicated team turns complex problems into simple, elegant solutions."} />
            <TeamSection />
            <Footer />
        </>
    );
};

export default About;
