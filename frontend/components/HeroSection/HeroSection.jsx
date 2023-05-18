"use client";
import React from 'react'
import { animated, useSpring } from '@react-spring/web'
export default function HeroSection() {

    const [spring, api] = useSpring(
        () => ({
            from: { 
                opacity: 0, 
                transform: 'translate3d(0, 30px, 0)' 
            },
            to: { 
                opacity: 1, 
                transform: 'translate3d(0, 0, 0)' 
            },
            
            config: {
                mass: 1, 
                tension: 280, 
                friction: 25
            }
        })
    )

    return (
    
        <animated.div className="relative overflow-hidden" key={spring.key} style={{...spring}}>
        
            <div className="relative z-10 mt-10 ">
                <div className="max-w-[85rem] h-fit mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                    <div className="max-w-2xl text-center mx-auto">
                        <p className="inline-block text-sm animate-pulse font-medium text-white p-1 rounded-sm bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                        Experimental
                        </p>

                    
                        <div className="mt-5 max-w-2xl">
                            <h1 className="block font-semibold text-gray-600 text-4xl md:text-5xl lg:text-6xl">
                                The Ultimate Learning Platform
                            </h1>
                        </div>
                    

                        <div className="mt-5 max-w-3xl">
                            <p className="text-lg text-gray-600 dark:text-gray-400">Unleash your creativity with HTML, CSS, JS, and React. Learn how to build stunning and dynamic web pages that will captivate and engage your audience. Start your web development journey today!</p>
                        </div>

                    
                        <div className="mt-8  grid grid-rows-2 grid-cols-1 gap-3 w-full sm:inline-flex sm:justify-center">
                            <a className="inline-flex group justify-center items-center gap-x-3 text-center text-white bg-gray-700 px-4 py-2 rounded-md cursor-pointer ">
                                Get started
                                <svg className="w-3 h-3 transition-all duration-200 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </a>
                        </div>
                        <div className="w-full flex items-center js justify-center mt-0  md:mt-20">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 bg-gray-200 p-1 rounded-full text-black/50 cursor-pointer transition-all duration-300 hover:translate-y-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>

    )
}
