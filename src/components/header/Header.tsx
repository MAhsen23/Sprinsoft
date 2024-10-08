"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="relative pt-4">
            <div className="container max-w-7xl rounded-lg mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <div className='relative w-24 md:w-32 h-8'>
                                <Image src="/sprinsoft.png" alt="Sprinsoft" layout='fill' objectFit='contain' />
                            </div>
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-6">
                        <Link href="/#services" className="text-gray-800 hover:text-gray-500">Services</Link>
                        <Link href="/#projects" className="text-gray-800 hover:text-gray-500">Projects</Link>
                        <Link href="/#testimonials" className="text-gray-800 hover:text-gray-500">Testimonials</Link>
                        <Link href="/about" className="text-gray-800 hover:text-gray-500">About Us</Link>
                    </nav>

                    <div className="hidden md:block">
                        <Link href="/#contact" className="bg-[#2CD4B6] text-white px-4 py-2 rounded-md hover:bg-opacity-80">
                            Contact
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={toggleMenu}></div>
                    <div className="md:hidden absolute bg-white shadow-lg rounded-b-2xl z-50 w-full">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="/#services" className="block px-3 py-2 text-gray-700 hover:text-gray-900" onClick={closeMenu}>Services</Link>
                            <Link href="/#projects" className="block px-3 py-2 text-gray-700 hover:text-gray-900" onClick={closeMenu}>Projects</Link>
                            <Link href="/#testimonials" className="block px-3 py-2 text-gray-700 hover:text-gray-900" onClick={closeMenu}>Testimonials</Link>
                            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900" onClick={closeMenu}>About Us</Link>
                            <Link href="/#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900" onClick={closeMenu}>Contact</Link>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
};

export default Header;
