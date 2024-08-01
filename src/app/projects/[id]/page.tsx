"use client"
import { notFound } from 'next/navigation';
import projects from '../../../data/projects';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find((project) => project.id === id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) {
        notFound();
    }
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.projectImagesUrl.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? project.projectImagesUrl.length - 1 : prevIndex - 1
        );
    };
    return (
        <div className="flex flex-col min-h-screen py-4 px-12">
            <div className="flex flex-col p-8 capitalize bg-white shadow-md rounded-md min-h-[700px]">
                <div className="border-b border-b-gray-200 mb-4 pb-2">
                    <div>
                        <h3 className="text-2xl font-semibold uppercase text-gray-800">{project.title}</h3>
                        <div className="mt-4 flex-row flex justify-between">
                            <p className="text-gray-600">{project.description.length > 90 ? `${project.description.substring(0, 90)} ...` : project.description}</p>
                            <p className="text-gray-600 font-medium text-right"><span></span>Feb 2024</p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[450px]">
                    <Image
                        className="rounded-md"
                        alt={project.title}
                        src={project.projectImagesUrl[currentImageIndex]}
                        layout="fill"
                        objectFit="contain"
                    />
                    <button
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white w-12 h-12 rounded-md shadow-md text-2xl hover:bg-gray-100"
                        onClick={handlePrevImage}
                    >
                        &lt;
                    </button>
                    <button
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2  w-12 h-12 text-2xl rounded-md shadow-md hover:bg-gray-100"
                        onClick={handleNextImage}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;