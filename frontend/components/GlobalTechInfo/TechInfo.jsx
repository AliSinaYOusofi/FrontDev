"use client"
import React, {memo} from 'react'
import { animated, useInView } from '@react-spring/web'

export const TechInfo = memo(({name, description, svg, step}) => {

    const [ref, springs] = useInView(
        () => ({
            from: {
                opacity: 0,
                y: 100,
              },
            to: {
                opacity: 1,
                y: 0,
            },
           
            config: {
                tension: 200, 
                friction: 18,
                threshold: 0.25,
                triggerOnce: true,
            },
        }),
        {
            once: true
        },
        
    )
    return (
        <animated.div ref={ref} style={springs} className="w-[450px] gradient-border mx-auto mb-2 bg-gray-50 rounded-md p-5 transition-all duration-300 hover:scale-[1.01]">
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
        </animated.div>
    )
})

export default TechInfo;