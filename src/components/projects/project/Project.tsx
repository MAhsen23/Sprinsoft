import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
    id: string,
    title: string;
    description: string;
    imageUrl: string;
    variant: number;
}

const Project: React.FC<ProjectProps> = ({ id, title, description, imageUrl, variant }) => {
    const variants = {
        1: (
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-64">
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {description.length > 60 ? `${description.substring(0, 60)}...` : description}
                    </p>
                </div>
                <div className="absolute top-4 right-4">
                    <span className="bg-[#FF4E00] text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Project
                    </span>
                </div>
            </div>
        ),
        2: (
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                    <Image
                        src={imageUrl}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-lg font-semibold">View Details</span>
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                    <p className="text-sm text-gray-600">
                        {description.length > 60 ? `${description.substring(0, 60)}...` : description}
                    </p>
                </div>
            </div>
        ),
        3: (
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2CD4B6] to-[#FF4E00] rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    <div className="space-y-2">
                        <p className="text-slate-800">{title}</p>
                        <p className="text-slate-600 text-sm">
                            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
                        </p>
                        <Link href={`/projects/${id}`} className="block text-[#2CD4B6] pt-1 group-hover:text-slate-800 transition duration-200">View Project →</Link>
                    </div>
                </div>
            </div>
        ),
        4: (
            <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="responsive"
                    width={300}
                    height={200}
                    className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex flex-col justify-end px-4 py-3 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {description.length > 60 ? `${description.substring(0, 60)}...` : description}
                    </p>
                </div>
            </div>
        ),
        5: (
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="p-4 bg-gray-100">
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                </div>
                <div className="relative h-48">
                    <Image
                        src={imageUrl}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="p-4">
                    <p className="text-sm text-gray-600">
                        {description.length > 60 ? `${description.substring(0, 60)}...` : description}
                    </p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        ),
        6: (
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2CD4B6] to-[#FF4E00] rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    <div className="relative w-1/4">
                        <Image
                            src={imageUrl}
                            alt={title}
                            layout='fill'
                            objectFit="contain"
                        />
                    </div>
                    <div className="w-9/12 space-y-2">
                        <p className="text-slate-800">{title}</p>
                        <p className="text-slate-600 text-sm">
                            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
                        </p>
                        <Link href={`/projects/${id}`} className="block text-[#2CD4B6] pt-1 group-hover:text-slate-800 transition duration-200">View Project →</Link>
                    </div>
                </div>
            </div>
        ),
    };

    return (
        <Link href={`/projects/${id}`}>
            {variants[variant as keyof typeof variants]}
        </Link>
    );
};

export default Project;