import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaDesktop } from 'react-icons/fa';
import Service from './service/Service';

const services = [
    {
        title: 'Web Development',
        description: 'Creating responsive and modern websites to help your business stand out online.',
        Icon: FaLaptopCode
    },
    {
        title: 'App Development',
        description: 'Developing mobile applications that provide seamless user experiences on iOS and Android platforms.',
        Icon: FaMobileAlt
    },
    {
        title: 'Desktop Applications',
        description: 'Building powerful desktop applications to enhance your business productivity.',
        Icon: FaDesktop
    }
];

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="pt-10 pb-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-orange-400">Our Services</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We provide a wide range of services to help your business grow.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <Service key={index} title={item.title} description={item.description} Icon={item.Icon} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection; 
