import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../nav/Navbar';
const Header: React.FC = () => {
    return (
        <header className="text-black">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link href="/">
                        <Image alt='Sprinsoft Logo' src={'/sprinsoft_white.png'} width={140} height={140} />
                    </Link>
                </div>
                <Navbar />
            </div>
        </header>
    );
};
export default Header;
