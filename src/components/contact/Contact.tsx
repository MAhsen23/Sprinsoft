"use client"
import React, { useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'

const Contact = () => {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [status, setStatus] = useState('')
    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetails(prevDetails => ({ ...prevDetails, [name]: value }));
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    name: details.name,
                    email: details.email,
                    message: details.message
                })
            })
            if (response.status === 200) {
                setDetails({
                    name: "",
                    email: "",
                    message: ""
                })
                setStatus("success")
            } else {
                setStatus('error')
            }
        }
        catch (error: any) {
            console.log(error)
        }
    }
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#FF4E00]">Get in touch</h2>
                        <p className="mt-4 text-center text-lg text-gray-600 lg:mx-auto">
                            We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:space-x-8">
                    <div className="md:w-1/2 p-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input autoComplete='off' value={details.name} onChange={handleChange} required className="w-full outline-none px-3 py-2 border rounded-lg" name='name' type="text" id="name" placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input autoComplete='off' value={details.email} onChange={handleChange} required name='email' className="w-full px-3 py-2 border outline-none rounded-lg" type="email" id="email" placeholder="Your Email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea autoComplete='off' minLength={60} value={details.message} onChange={handleChange} required name='message' className="w-full px-3 py-2 border resize-none rounded-lg focus:outline-none" id="message" rows={5} placeholder="Your Message"></textarea>
                            </div>
                            <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
                                Send Message
                            </button>
                        </form>
                    </div>
                    {/* <div className="md:w-1/2 items-center flex flex-col gap-y-8 lg:flex-row justify-center p-2">
                        <div className='w-60 bg-gray-100 bg-opacity-100 relative items-center justify-center flex-col flex h-52 mx-5 rounded-xl'>
                            <a href='https://wa.me/+923055701828?text=Hello%2C%20I%20would%20like%20more%20information%20about%20your%20services.' target='_blank' className='w-full  bg-gray-50 bg-opacity-80 absolute right-4 bottom-4 items-center justify-center flex-col flex h-52 rounded-xl'>
                                <FaWhatsappSquare className="w-6 h-6 mb-4 text-gray-600" />
                                <p className="text-gray-600 text-sm font-medium">+92 305 5701828</p>
                            </a>
                        </div>
                        <div className='w-60 bg-gray-100 bg-opacity-100 relative items-center justify-center flex-col flex h-52 mx-5 rounded-xl'>
                            <a href='mailto:sprinsoft@gmail.com' target='_blank' className='w-full  bg-gray-50 bg-opacity-80 absolute right-4 bottom-4 items-center justify-center flex-col flex h-52 rounded-xl'>
                                <FaEnvelope className="w-6 h-6 mb-4 text-gray-600" />
                                <p className="text-gray-600 text-sm font-medium">sprinsoft@gmail.com</p>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Contact