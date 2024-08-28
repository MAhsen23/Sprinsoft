import React from 'react';
import { FaAndroid, FaNodeJs, FaPython, FaReact, FaWordpress } from "react-icons/fa";
import { SiFlutter, SiNextdotjs, SiMongodb, SiReact } from "react-icons/si";
import Technology from "./technology/Technology";

const technologies = [
    { name: "React Native", icon: "/reactnative.svg" },
    { name: "Next.js", icon: "/nextjs.svg" },
    { name: "Flutter", icon: "/flutter.svg" },
    { name: "Node.js", icon: "/nodejs.svg" },
    { name: "Python", icon: "/python.svg" },
    { name: "Android", icon: "/android.svg" },
    { name: "MERN", icon: "/mongo.png" },
    { name: "WordPress", icon: "/wordpress.svg" },
];

const Expertise = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16">Our Expertise</h2>
                <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-6">
                    {technologies.map((tech, index) => (
                        <div
                            key={tech.name}
                            className={`${index % 2 === 0 ? '-mt-16' : 'mt-16'}`}
                        >
                            <Technology tech={tech} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;