import React from 'react';
import Project from './project/Project';
import projects from '../../data/projects';

const ProjectsSection: React.FC = () => {
    return (
        <section id='projects' className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#FF4E00]">Our Projects</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Here are some of the projects we've worked on.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center -mx-4">
                    {projects.slice(0, 5).map((project, index) => (
                        <div key={project.id}
                            className={`w-full md:w-1/2 lg:w-1/3 p-4 
                                         ${index % 5 === 0 ? 'lg:ml-[16.666%]' : ''}
                                         ${index % 5 === 4 ? 'lg:mr-[16.666%]' : ''}
                                         ${index % 5 === 2 ? 'lg:mt-16' : ''}`}>
                            <Project
                                variant={3}
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                imageUrl={project.imageUrl}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;