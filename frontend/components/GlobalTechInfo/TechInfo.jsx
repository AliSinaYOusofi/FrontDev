import { useNextContext } from '@/context/NextContext';
import React, {memo} from 'react'


export const TechInfo = memo(({name, description, svg, step}) => {

    const { theme } = useNextContext();

    return (
        <div className={`${theme ? "bg-[#0D1117] " : "bg-gray-50"} md:w-[400px] lg:w-[450px] h- max-h-full gradient-border mx-auto mb-2  rounded-md p-5 transition-all duration-300 hover:scale-[1.01]`}>
            <div className="flex items-center gap-x-1 mb-3">
                <p className=" px-2 rounded-[50%]">{step} </p>
                <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold ">{name}</h3>
                </div>
                <div className="">
                   {svg}
                </div>
            </div>
            <p className=" ">{description}</p>
        </div>
    )
})

export default TechInfo;