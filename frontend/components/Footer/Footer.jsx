"use client";

import Link from 'next/link'
import React from 'react'
import { useInView, animated } from '@react-spring/web';

export default function Footer() {

    const [vision, visionSprings] = useInView(
        () => ({
            
            from: {
                x: 100,
                opacity: 0
            },

            to: {
                x: 0,
                opacity: 1
            },
            
            delay: 500,
        }),
        {
            once: true
        }
    );
    return (
       <footer>
            <animated.div ref={vision} style={visionSprings} className="w-full h-full    relative py-10 px-4 sm:px-6 lg:px-8 mx-auto mt-10">
            
                <div className="flex items-center justify-evenly md:flex-row flex-col gap-y-2">
                    <div>
                        <Link className="flex-none text-center text-xl font-semibold text-black" href="#">
                            <svg className="h-6 w-6" fill="#c0c0c0" width="136px" height="136px" viewBox="-2.56 -2.56 37.12 37.12" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#c0c0c0" transform="matrix(-1, 0, 0, 1, 0, 0)" strokeWidth="0.00032">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.128"></g><g id="SVGRepo_iconCarrier"> <title>cog</title> <path d="M0 16q0-0.832 0.576-1.408t1.44-0.576h1.984q0.032 0 0.064 0t0.064 0.032 0.064 0q0.448-2.72 2.080-4.992-0.128-0.064-0.16-0.096l-1.408-1.44q-0.608-0.576-0.608-1.408t0.608-1.408 1.408-0.608 1.408 0.608l1.408 1.408q0.032 0.032 0.096 0.16 2.304-1.632 5.024-2.048 0-0.032-0.032-0.096t0-0.128v-1.984q0-0.832 0.576-1.408t1.408-0.608 1.408 0.608 0.608 1.408v1.984q0 0.032-0.032 0.096t0 0.128q2.72 0.416 4.992 2.048 0.064-0.128 0.096-0.16l1.408-1.408q0.576-0.608 1.408-0.608t1.44 0.608 0.576 1.408-0.576 1.408l-1.408 1.408q-0.064 0.064-0.192 0.128 1.632 2.272 2.080 4.992 0.032 0 0.096 0t0.096-0.032h2.016q0.8 0 1.408 0.576t0.576 1.408-0.576 1.44-1.408 0.576h-2.016q-0.032 0-0.096-0.032t-0.096-0.032q-0.448 2.752-2.080 5.024 0.128 0.064 0.192 0.128l1.408 1.408q0.576 0.576 0.576 1.376t-0.576 1.44-1.44 0.576-1.408-0.576l-1.408-1.408q-0.032-0.064-0.096-0.16-2.272 1.6-4.992 2.048 0 0.032 0 0.096t0.032 0.096v2.016q0 0.832-0.608 1.408t-1.408 0.576-1.408-0.576-0.576-1.408v-2.016q0-0.032 0-0.096t0.032-0.096q-2.72-0.448-5.024-2.048-0.064 0.128-0.096 0.16l-1.408 1.408q-0.576 0.576-1.408 0.576t-1.408-0.576-0.608-1.44 0.608-1.376l1.408-1.408q0.064-0.064 0.16-0.128-1.632-2.272-2.080-5.024 0 0-0.064 0.032t-0.128 0.032h-1.984q-0.832 0-1.44-0.576t-0.576-1.44zM8 16q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z">
                                </path> </g>
                            </svg>
                        </Link>
                    </div>
                

                    <ul className="text-center">
                        <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                            <Link className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800" href="#">
                                HTML
                            </Link>
                        </li>
                        
                        <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                            <Link className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800" href="#">
                                CSS3
                            </Link>
                        </li>
                        
                        <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                            <Link className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800" href="#">
                                Javascript
                            </Link>
                        </li>

                        <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                            <Link className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800" href="#">
                                Git/Github
                            </Link>
                        </li>

                        <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                            <Link className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800" href="#">
                                React
                            </Link>
                        </li>
                    </ul>
                
                    <div className="md:text-right space-x-2">
                       
                        <Link className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full  transition " href="#">
                            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg>
                        </Link>
                        
                        <Link className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full  transition " href="#">
                            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </animated.div>
        </footer>
    )
}
