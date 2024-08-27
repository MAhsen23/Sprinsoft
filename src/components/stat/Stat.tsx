import React from 'react';
import { FaStar } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';

const Stat = ({ icon: Icon, label, value, iconColor = "currentColor", isRating = false }: any) => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
                <Icon className="mr-2" style={{ color: iconColor }} />
                <p className="font-medium">{label}</p>
            </div>
            <p className="text-3xl font-semibold">
                {value}{" "}
                {isRating ? (
                    <FaStar className="inline mb-2 text-yellow-400 text-xl" />
                ) : (
                    <AiOutlinePlus className="inline mb-2 text-xl" />
                )}
            </p>
        </div>
    );
};

export default Stat;
