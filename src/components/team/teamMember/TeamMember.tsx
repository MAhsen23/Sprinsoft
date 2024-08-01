import Image from 'next/image'
import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaUserCircle } from 'react-icons/fa'

const TeamMember = (props: any) => {
    return (
        <div className="flex w-72 h-80 justify-between flex-col items-center bg-white p-6 rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <div className="flex flex-col items-center">
                {props.member.imageUrl ? (
                    <Image src={props.member.imageUrl} objectFit='contain' width={1000} height={1000} alt={props.member.name} className="w-32 h-32 rounded-full object-cover mb-4" />
                ) : (
                    <FaUserCircle className="w-32 h-32 text-gray-400 mb-4" />
                )}
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold text-gray-900">{props.member.name}</h3>
                    <p className="text-gray-500">{props.member.role}</p>
                </div>
            </div>
            <div className="flex space-x-4">
                {props.member.linkedInUrl && (
                    <a href={props.member.linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                )}
                {props.member.twitterUrl && (
                    <a href={props.member.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                        <FaTwitter className="w-6 h-6" />
                    </a>
                )}
                {props.member.instagramUrl && (
                    <a href={props.member.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                        <FaInstagram className="w-6 h-6" />
                    </a>
                )}
                {props.member.githubUrl && (
                    <a href={props.member.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                        <FaGithub className="w-6 h-6" />
                    </a>
                )}
            </div>
        </div>
    )
}

export default TeamMember