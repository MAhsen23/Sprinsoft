import React from 'react'

const Technology = (props: any) => {
    return (
        <div key={props.tech.name} className="flex w-32 flex-col items-center">
            <div className="mb-4">{props.tech.icon}</div>
            <p className="text-lg font-medium text-gray-900">{props.tech.name}</p>
        </div>
    )
}

export default Technology