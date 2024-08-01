import React from 'react';
import { IconType } from 'react-icons';

interface ServiceProps {
    title: string;
    description: string;
    Icon: IconType;
}

const Service: React.FC<ServiceProps> = ({ title, description, Icon }) => {
    return (
        <div className="w-full">
            <div className="bg-white p-12 rounded-lg drop-shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <div className="flex items-center justify-center mb-6">
                    <Icon className="text-gray-500 text-5xl" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{title}</h3>
                <p className="text-gray-600 text-center">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Service;
