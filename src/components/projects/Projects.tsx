import React from 'react';
import Project from './project/Project';
import projects from '../../data/projects';

const ProjectsSection: React.FC = () => {
    return (
        <section id='projects' className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-orange-400">Our Projects</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Here are some of the projects we've worked on.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 grid-cols-1 md:mx-36">
                    {
                        projects.slice(0, 4).map((project, index) => (
                            <Project
                                key={index}
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                cover={project.cover}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;