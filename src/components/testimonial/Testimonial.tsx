"use client"
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Review from './review/Review';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dynamic from 'next/dynamic';
import reviews from '@/data/reviews';

const Slider = dynamic(() => import('react-slick'), { ssr: false }) as React.ComponentType<any>;
const CustomArrow = ({ onClick, direction }: { onClick?: () => void, direction: 'next' | 'prev' }) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 transform -translate-y-1/2 z-20 p-2 outline-none transition-all duration-300 focus:outline-none ${direction === 'next' ? '-right-6' : '-left-6'
            }`}
        aria-label={direction === 'next' ? 'Next slide' : 'Previous slide'}
    >
        {direction === 'next' ? (
            <IoIosArrowForward size={28} className="text-gray-400 hover:text-gray-800" />
        ) : (
            <IoIosArrowBack size={28} className="text-gray-400 hover:text-gray-800" />
        )}
    </button>
);

const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const Testimonial = () => {
    return (
        <section id="testimonials" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#FF4E00]">Testimonials</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        What People Think About Us
                    </p>
                </div>
                <div className="relative">
                    <Slider {...settings} className="testimonial-slider">
                        {reviews.map((item, index) => (
                            <div key={index} className="px-4">
                                <Review
                                    name={item.name}
                                    gender={item.gender}
                                    review={item.review}
                                    imageUrl={item.imageUrl}
                                    rating={item.rating}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
