import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { FaGithub, } from 'react-icons/fa6';
const Footer = () => {
    return (
        <footer className="px-4 bg-gray-900 text-white py-8">
            <div className="container h-full mx-auto flex flex-col justify-between lg:px-12">
                <div className='flex flex-col md:flex-row md:justify-between justify-center items-center md:items-start'>
                    <div>
                        <Image src={'/sprinsoft_ow.png'} alt="Sprinsoft Logo" width={120} height={70} />
                    </div>
                    <div className='mt-8 md:mt-0'>
                        <div className='text-left space-y-1 md:space-y-5'>
                            <div className="flex flex-row justify-center md:justify-start items-center">
                                <FaPhoneAlt className="w-4 h-4 mr-2 text-gray-200" />
                                <a target='_blank' className="text-gray-200 text-sm" href="https://wa.me/+923055701828?text=Hello%2C%20I%20would%20like%20more%20information%20about%20your%20services.">+92 305 5701828</a>
                            </div>
                            <div className="flex flex-row justify-center md:justify-start items-center">
                                <FaEnvelope className="w-4 h-4 mr-2 text-gray-200" />
                                <a target='_blank' className="text-gray-200 text-sm" href="mailto:sprinsoft@gmail.com">sprinsoft@gmail.com</a>
                            </div>
                            {/* <div className="flex items-center">
                                <FaMapMarkerAlt className="w-4 h-4 mr-2 text-gray-200" />
                                <div>
                                    <p className="text-gray-200 text-sm">M 18-B, Mid City Mall,</p>
                                    <p className="text-gray-200 text-sm">Rehmanabad, Rawalpindi</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className="flex space-x-4 justify-center md:justify-start pb-4">
                        <a href='https://www.linkedin.com/company/sprinsoft' target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href='https://www.instagram.com/sprinsoftofficial' target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a href='https://www.facebook.com/share/GH5tz2sahwy8P9dy/?mibextid=qi2Omg' target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaFacebook className="w-6 h-6" />
                        </a>
                        <a href='https://www.github.com/sprinsoft' target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaGithub className="w-6 h-6" />
                        </a>
                    </div>
                    <div className='border-t pt-4 flex flex-col-reverse md:flex-row justify-between border-gray-500'>
                        <p className="text-sm my-1 text-center text-gray-300">&copy; 2024 Sprinsoft. All rights reserved.</p>
                        <div className='flex my-1 justify-center md:justify-end flex-row space-x-4'>
                            <Link className="text-gray-200 text-sm hover:text-gray-300" href="/">
                                Home
                            </Link>
                            <Link className="text-gray-200 text-sm hover:text-gray-300" href="/about">
                                About
                            </Link>
                            <Link className="text-gray-200 text-sm hover:text-gray-300" href="/#contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
