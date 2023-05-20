"use client"
import React, {memo} from 'react'


export const TechInfo = memo(({name, description, svg, step}) => {

    return (
        <div  className="md:w-[400px] lg:w-[450px] h- max-h-full gradient-border mx-auto mb-2 bg-gray-50 rounded-md p-5 transition-all duration-300 hover:scale-[1.01]">
            <div className="flex items-center gap-x-1 mb-3">
                <p className="bg-gray-200 px-2 rounded-[50%]">{step} </p>
                <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-600">{name}</h3>
                </div>
                <div className="">
                   {svg}
                </div>
            </div>
            <p className="text-gray-500 ">{description}</p>
        </div>
    )
})

export default TechInfo;