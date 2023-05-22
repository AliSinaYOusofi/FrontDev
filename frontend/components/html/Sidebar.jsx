"use client";

import { useSpring, animated } from '@react-spring/web';
import React, { useState } from 'react'
import Introduction from './Introduction';
import Basics from './Basics';
import Attributes from './Attributes';
import Headings from './Headings';
import Paragraphs from './Paragraphs';

export default function Sidebar() {

    const [component, setComponent] = useState(null);

    const [spring, api] = useSpring(
        () => ({
            from: { 
                x: -100,
                opacity: 0
            },
            to: { 
                x: 0,
                opacity: 1,
            },
            config: {
                damping: 400,
                clamp: true,
                tension: 50,
                friction: 10
            }
        }),
        
    )

    const searchTopics = (event) => {
        
        const searchText = event.target.value.toLowerCase();
    
        const lis = document.querySelectorAll('li');

        lis.forEach((li) => {
            const text = li.textContent.toLowerCase();
    
            if (text.includes(searchText)) {
                li.style.display = 'block'; 
            } else {
                li.style.display = 'none';
            }
        });
    };


    return (
       
        <div className="mx-auto flex">
            
            <animated.div style={...spring} key={spring.key} className=" bg-white">

                <form className="">   
                    <div className="relative w-fit md:px-4 px-1 py-1">
                        <div className="absolute inset-y-0 left-2 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>

                        <input 
                            type="search" 
                            id="default-search" 
                            className="block text-xs md:text-sm p-2 rounded-md outline-none pl-10 text-gray-900 border w-[150px] md:w-fit" placeholder="Search topics" required 
                            onChange={searchTopics}
                        />
                        
                    </div>
                </form>

                <ul className="sidebar_li w-full md:px-4 px-1 text-xs md:text-base overflow-scroll h-full list-inside text-gray-700 ">
                    <li onClick={() => setComponent(<Introduction />)} className="">Introduction</li>
                    <li onClick={() => setComponent(<Basics />)} className="">Basics</li>
                    <li onClick={() => setComponent(<Attributes />)} className="">Attributes</li>
                    <li onClick={ () => setComponent(<Headings />)} className="">Headings</li>
                    <li onClick={ () => setComponent(<Paragraphs />)} className="">Paragraphs</li>
                </ul>
            </animated.div>
            <div className="w-[60%] mx-auto mt-2 content_container">
                {component}
            </div>
        </div>
    )
}
