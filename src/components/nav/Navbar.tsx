import Link from 'next/link'
import React from 'react'

// className = {`md:hidden bg-[${colors.background}]`}
const Navbar = () => {
    return (
        <>
            <nav className="hidden md:flex space-x-8">
                <Link href="/#services" className="hover:text-gray-400">Services</Link>
                <Link href="/#projects" className="hover:text-gray-400">Projects</Link>
                <Link href="/about" className={`hover:text-gray-400`}>About</Link>
                <Link href="/#contact" className="hover:text-gray-400">Contact</Link>
            </nav>
        </>
    )
}

export default Navbar