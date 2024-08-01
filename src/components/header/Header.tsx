"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = (props: any) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/#services", label: "Services" },
        { href: "/#projects", label: "Projects" },
        { href: "/#contact", label: "Contact" },
    ];

    return (
        <header className="text-white">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image alt='Sprinsoft Logo' objectFit='contain' src={'/sprinsoft_white.png'} width={140} height={140} />
                </Link>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none hover:text-gray-300 transition duration-300">
                        <FaBars size={24} />
                    </button>
                </div>
                <nav className="hidden md:flex space-x-6">
                    {menuItems.map((item) => (
                        <Link key={item.href} href={item.href} className="hover:text-gray-300 transition duration-300">
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className={`fixed inset-x-0 top-0 transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'} transition duration-300 ease-in-out z-30 md:hidden`}>
                <div className="w-full bg-gray-800 shadow-lg">
                    <div className="container mx-auto px-4 py-6 flex flex-col items-center">
                        <div className="flex justify-between w-full mb-6">
                            <Link href="/" onClick={toggleMenu}>
                                <Image alt='Sprinsoft Logo' src='/sprinsoft_white.png' width={120} height={120} />
                            </Link>
                            <button onClick={toggleMenu} className="text-white focus:outline-none hover:text-gray-300 transition duration-300">
                                <FaTimes size={24} />
                            </button>
                        </div>
                        <nav className="flex flex-col items-center mt-4 space-y-4">
                            {menuItems.map((item) => (
                                <Link key={item.href} href={item.href} className="text-white hover:bg-gray-700 py-2 px-4 rounded transition duration-300 w-full text-center" onClick={toggleMenu}>
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-20 md:hidden" onClick={toggleMenu}></div>
            )}
        </header>
    );
};

export default Header;