// import Image from 'next/image';
// import Link from 'next/link';

// interface ProjectProps {
//     id: string,
//     title: string;
//     description: string;
//     imageUrl: string;
// }

// const Project: React.FC<ProjectProps> = ({ id, title, description, imageUrl }) => {
//     return (
//         <Link href={`/projects/${id}`}>
//             <div className="relative group">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-[#2CD4B6] to-[#FF4E00] rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
//                 <div className="relative bg-white ring-1 ring-gray-900/5 rounded-lg leading-none overflow-hidden">
//                     <div className="relative border-2 m-5 border-gray-100 rounded-xl h-48">
//                         <Image
//                             src={imageUrl}
//                             alt={title}
//                             layout="fill"
//                             objectFit="cover"
//                             className="rounded-xl"
//                         />
//                     </div>
//                     <div className="px-7 py-6 space-y-3">
//                         <p className="text-gray-800 font-medium">{title}</p>
//                         <p className="text-gray-600 text-sm">
//                             {description.length > 100 ? `${description.substring(0, 100)}...` : description}
//                         </p>
//                         <button className="block text-[#2CD4B6] pt-1 group-hover:text-slate-800 transition duration-200">View Project →</button>
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     );
// };
// export default Project;

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
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2CD4B6] to-[#FF4E00] rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    <div className="space-y-3">
                        <p className="text-gray-800 font-medium">{title}</p>
                        <p className="text-gray-600 text-sm">
                            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
                        </p>
                        <button className="block text-[#2CD4B6] pt-1 group-hover:text-slate-800 transition duration-200">View Project →</button>
                    </div>
                </div>
            </div>
        </Link >
    );
};
export default Project;