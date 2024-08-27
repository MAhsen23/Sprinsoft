import { FaLinkedin, FaTwitter, FaUserCircle } from "react-icons/fa";
import TeamMember from "./teamMember/TeamMember";

const teamMembers = [
    {
        name: "Muhammad Ahsen",
        role: "Full Stack Developer",
        imageUrl: "/team/ahsen.jpg",
        linkedInUrl: "https://www.linkedin.com/in/m-ahsen/",
        twitterUrl: "",
        instagramUrl: "",
        githubUrl: "https://github.com/mahsen23",
    },
    {
        name: "Usama Fayyaz",
        role: "App Developer",
        imageUrl: "/team/usama.jpg",
        linkedInUrl: "https://www.linkedin.com/in/usamafayaz/",
        twitterUrl: "",
        instagramUrl: "",
        githubUrl: "https://github.com/usamafayaz",
    },
    {
        name: "Abdullah Mustafa",
        role: "Python Developer",
        imageUrl: "/team/abdullah.jpg",
        linkedInUrl: "https://www.linkedin.com/in/abdullah-mustafa-65537b1b4/",
        twitterUrl: "",
        instagramUrl: "",
        githubUrl: "https://github.com/abimonyo",
    },
    {
        name: "Muhammad Anees",
        role: "Flutter Developer",
        imageUrl: "/team/anees.jpg",
        linkedInUrl: "https://www.linkedin.com/in/anees7757/",
        twitterUrl: "",
        instagramUrl: "",
        githubUrl: "https://github.com/anees7757",
    },
];

const TeamSection = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#FF4E00]">Meet Our Team</h2>
                        <p className="mt-4 text-center text-lg text-gray-600 lg:mx-auto">
                            Our team is composed of highly skilled and experienced professionals dedicated to delivering the best solutions.
                        </p>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex flex-wrap justify-center gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamMember key={index.toString()} member={member} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;