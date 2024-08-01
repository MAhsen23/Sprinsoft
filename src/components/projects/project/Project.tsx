import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
    id: string,
    title: string;
    description: string;
    imageUrl: string;
}

const Project: React.FC<ProjectProps> = ({ id, title, description, imageUrl }) => {
    return (
        <Link href={`/projects/${id}`}>
            <div className="bg-white bg-opacity-100 relative h-full border-gray-200 rounded-lg overflow-hidden transition-shadow duration-500 flex flex-col hover:shadow-lg">
                <div className='relative p-4 w-full h-52'>
                    <Image src={imageUrl} alt={title} layout="fill" objectFit="contain" className="transition-opacity duration-300 hover:opacity-75 border-b border-b-gray-100" />
                </div>
                <div className="p-6 flex flex-col">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
                        <p className="mt-4 text-gray-600">{description.length > 90 ? `${description.substring(0, 90)} ...` : description}</p>
                    </div>
                    <div className='text-right text-white mt-1'>
                        {/* <Link href={`/projects/${id}`} className='text-right text-white mt-1'> */}
                        <button className='bg-gray-600 px-4 py-2 rounded-md'>Read More</button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Project;
