import React from 'react'
import { SunIcon } from '@heroicons/react/solid'
const Card = ({label, data, unit}) => {
    return (
        <div className="flex bg-white rounded-xl shadow-xl w-1/5 h-2/5 m-6">
            <div className="textGroup flex flex-col justify-center pl-10 w-2/3">
                <span className="label text-blue-800 font-medium text-lg">{label.toUpperCase()}</span>
                <span className="data text-blue-900 font-bold text-4xl">{data} {unit ? unit : ''}</span>
            </div>
            <SunIcon className ="w-16 text-blue-800"/>
        </div>
    )
}

export default Card
