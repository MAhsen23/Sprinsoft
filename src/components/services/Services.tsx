import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaDesktop, FaSearch, FaPalette, FaHeadset } from 'react-icons/fa';
import Service from './service/Service';
import { AiOutlineAppstore, AiOutlineCode, AiOutlineCustomerService, AiOutlineDesktop, AiOutlineLaptop, AiOutlineMobile, AiOutlineSearch } from 'react-icons/ai';

const services = [
    {
        title: 'Web Development',
        description: 'Creating responsive and modern websites to help your business stand out online.',
        Icon: AiOutlineCode
    },
    {
        title: 'App Development',
        description: 'Developing mobile applications that provide seamless user experiences on iOS and Android platforms.',
        Icon: AiOutlineMobile
    },
    {
        title: 'Desktop Applications',
        description: 'Building powerful desktop applications to enhance your business productivity.',
        Icon: AiOutlineDesktop
    },
    {
        title: 'SEO Optimization',
        description: 'Improving your website’s visibility on search engines to drive more organic traffic.',
        Icon: AiOutlineSearch
    },
    {
        title: 'UI/UX Design',
        description: 'Designing intuitive and engaging user interfaces and experiences for websites and applications.',
        Icon: AiOutlineAppstore
    },
    {
        title: 'Technical Support',
        description: 'Providing reliable support and troubleshooting to ensure smooth operation of your technology solutions.',
        Icon: AiOutlineCustomerService
    }
];

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-gradient-to-t from-gray-50 to-white bg-opacity-100">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#FF4E00]">Our Services</h2>
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
