// "use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function NotFound() {
    // const router = useRouter();
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         router.push('/');
    //     }, 300);
    //     return () => clearTimeout(timer);
    // }, [router]);
    return (
        <div className="flex items-center justify-center min-h-[500px]">
            <div className="text-center">
                <h1 className="text404 font-bold text-gray-700">404</h1>
                <p className="text-gray-700 text-lg">Sorry, the page you are looking for does not exist.</p>
                <Link href="/">
                    <button className="inline-block px-10 py-3 mt-12 text-lg font-normal text-white bg-gray-500 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20">
                        BACK TO HOMEPAGE
                    </button>
                </Link>
            </div>
        </div>
    );
}
