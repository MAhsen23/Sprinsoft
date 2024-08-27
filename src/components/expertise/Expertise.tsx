import { FaAndroid, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiFlutter, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import Technology from "./technology/Technology";

const technologies = [
    { name: "React Native", icon: <SiReact size={50} color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={50} color="#000000" /> },
    { name: "Flutter", icon: <SiFlutter size={50} color="#02569B" /> },
    { name: "Node.js", icon: <FaNodeJs size={50} color="#339933" /> },
    { name: "Python", icon: <FaPython size={50} color="#3776AB" /> },
    { name: "Android", icon: <FaAndroid size={50} color="#3DDC84" /> },
];

const Expertise = () => {
    return (
        <section className="relative pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#FF4E00]">Our Expertise</h2>
                        <p className="mt-4 text-center text-lg text-gray-600 lg:mx-auto">
                            We use a variety of modern technologies to deliver high-quality solutions.
                        </p>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex flex-wrap justify-center gap-20">
                        {technologies.map((tech) => (
                            <Technology key={tech.name} tech={tech} />
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className="custom-shape-divider-bottom-1722258337">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" style={{ fill: 'rgb(243 244 246)' }} className="shape-fill"></path>
                </svg>
            </div> */}
        </section>
    );
};

export default Expertise;
