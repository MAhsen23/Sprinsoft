"use client"
import { notFound } from 'next/navigation';
import projects from '../../../data/projects';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find((project) => project.id === id);

    if (!project) {
        notFound();
    }

    return (
        <>
            {/* <Header /> */}
            <div className="bg-gray-50">
                {/* <div className="relative">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={3000}
                    height={3000}
                    objectFit="contain"
                    className="brightness-50 w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl font-bold text-white text-center max-w-4xl px-4">
                        {project.title}
                    </h1>
                </div>
            </div> */}

                {/* Project Details */}
                <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                        <div className="p-8">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Project Overview</h2>
                            <p className="text-gray-600 mb-6">{project.description}</p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 mb-2">Client</h3>
                                    <p className="text-gray-600">Ahsen Khan</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 mb-2">Date</h3>
                                    <p className="text-gray-600">February 2024</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 mb-2">Category</h3>
                                    <p className="text-gray-600">Mobile Application</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 mb-2">Technology</h3>
                                    <p className="text-gray-600">{project.technologies.join(', ')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Project Gallery</h2>
                    <div className="space-y-8">
                        {project.projectImagesUrl.map((imageUrl, index) => (
                            <Image
                                key={index}
                                src={imageUrl}
                                alt={`${project.title} - Image ${index + 1}`}
                                width={5000}
                                height={5000}
                                className='w-full shadow-lg rounded-lg'
                                objectFit="contain"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProjectPage;