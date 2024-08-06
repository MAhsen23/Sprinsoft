import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="hidden md:flex text-white space-x-6">
                <Link href="/" className="hover:text-gray-200">Home</Link>
                <Link href="/#services" className="hover:text-gray-200">Services</Link>
                <Link href="/#projects" className={`hover:text-gray-200`}>Projects</Link>
                <Link href="/about" className="hover:text-gray-200">About Us</Link>
                <Link href="/#contact" className="hover:text-gray-200">Contact</Link>
            </nav>
        </>
    )
}

export default Navbar