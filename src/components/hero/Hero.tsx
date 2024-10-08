import Link from 'next/link';
import React from 'react';
import { FaStar, FaMapMarkerAlt, FaProjectDiagram } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import Stat from '../stat/Stat';
import Expertise from '../expertise/Expertise';

const HeroSection = (props: any) => {
    return (
        <>
            <div className="flex flex-col py-20">
                <div className="container mx-auto max-w-7xl px-6 flex flex-col items-center justify-center">
                    <div className="w-full max-w-3xl flex flex-col items-center text-center justify-center">
                        {
                            props.title ? (
                                <h1 className="text-gray-900 leading-normal md:leading-none text-4xl text-center md:text-5xl font-semibold mb-4">
                                    {props.title}
                                </h1>
                            ) : (
                                <h1 className="text-gray-900 leading-normal md:leading-none text-4xl text-center md:text-5xl font-semibold mb-4 relative">
                                    Where <span className="text-[#FF4E00] relative">ideas
                                        <img
                                            src="/curvedline.png"
                                            alt="ideas"
                                            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                                        />
                                    </span> spring to life
                                </h1>
                            )
                        }
                        <h3 className='font-medium text-xl text-center mt-4 md:mt-10 md:leading-relaxed text-gray-800 md:text-2xl'>
                            {props.description}</h3>
                    </div>
                    <div className='mt-6 md:mt-8'>
                        <Link href={'/about'}>
                            {props.showButton && (
                                <button className="px-4 md:px-6 py-2.5 md:py-3 text-gray-500 font-normal rounded-full border-2 border-[#FF4E00] hover:text-gray-800 transition duration-300">
                                    Learn More
                                </button>
                            )}
                        </Link>
                    </div>
                    {props.page === "home" ?
                        <div className="hidden md:flex text-gray-700 w-full max-w-4xl mx-auto mt-8 md:mt-28 flex-col md:flex-row justify-between items-center rounded-3xl border border-gray-400 p-6 sm:px-8">
                            <Stat icon={FaStar} label="Ratings" value="4.9" isRating={true} />
                            <Stat icon={BiUser} label="Clients" value="50" />
                            <Stat icon={FaMapMarkerAlt} label="Locations" value="10" />
                            <Stat icon={FaProjectDiagram} label="Projects" value="200" />
                        </div>
                        :
                        <Expertise />
                    }
                </div>
            </div>
        </>
    );
}

export default HeroSection;