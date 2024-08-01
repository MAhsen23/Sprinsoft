// from-blue-500 to-blue-50
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Header from '../header/Header';

const HeroSection = (props: any) => {
    return (
        <>
            <div className="h-[600px] relative bg-gradient-to-tl from-gray-900 to-gray-700 flex flex-col py-4 lg:px-12">
                <div className=''>
                    <Header />
                </div>
                <div className="container mx-auto my-4 px-6 py-12 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 sm:w-full">
                        <h1 className="text-5xl md:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
                            {props.title}
                        </h1>
                        <p className="text-xl text-gray-50 mb-4">
                            {props.description}
                        </p>
                        <Link href={'/about'}>
                            {props.showButton && (
                                <button className="px-6 md:px-12 py-3 hover:shadow-lg shadow-md md:py-4 mt-6 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-xl hover:text-white transition duration-300">
                                    Learn More
                                </button>
                            )}
                        </Link>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
                        {/* <div className="w-0 md:w-80 lg:w-96">
                            <Image
                                src={props.imageUrl}
                                alt="Hero Image"
                                className="rounded-lg"
                                width={props.width ? props.width : 500}
                                height={props.height ? props.height : 500}
                                layout="responsive"
                            />
                        </div> */}
                    </div>
                </div>
                {props.tilt &&
                    <div className="custom-shape-divider-bottom-1722258337">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                        </svg>
                    </div>
                }
            </div>
        </>
    );
}

export default HeroSection;