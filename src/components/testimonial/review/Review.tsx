import React from 'react';
import { FaStar } from 'react-icons/fa';

interface ReviewProps {
    name: string;
    review: string;
    imageUrl?: string;
    rating: string;
    gender: string;
}

const Review: React.FC<ReviewProps> = ({ name, review, imageUrl, rating, gender }) => {
    return (
        <div className="w-full h-full">
            <div className="bg-white p-4 rounded-xl border-gray-100 border-2 transition-shadow duration-300 flex flex-col h-full">
                <div className="flex flex-col mb-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200">
                        <img
                            src={gender === "male" ? "/avatarmale.png" : "/avatarfemale.png"}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="mt-4 flex items-center">
                        <div className="font-medium text-medium">{name}</div>
                        <div className='flex items-center'>
                            <FaStar className="inline ml-6 text-sm text-yellow-400" />
                            <div className="text-sm ml-2 text-gray-600">{rating}</div>
                        </div>
                    </div>
                </div>
                <p className="text-gray-500 text-xs">{review}</p>
            </div>
        </div>
    );
};

export default Review;