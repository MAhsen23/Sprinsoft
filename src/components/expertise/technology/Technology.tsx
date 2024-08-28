import React from 'react';

const Technology = ({ tech }: any) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center mb-4">
                <img src={tech.icon} alt={tech.name} className="w-full h-full" />
            </div>
            <p className="text-lg font-medium text-gray-900">{tech.name}</p>
        </div>
    );
};

export default Technology;