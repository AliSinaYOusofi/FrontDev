"use client";

import { useSpring, animated } from '@react-spring/web';
import React, { useState } from 'react'
import Introduction from './Introduction';
import Basics from './Basics';
import Attributes from './Attributes';

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

                <ul className="w-fit md:px-4 px-1 text-xs md:text-base overflow-scroll h-full list-inside text-gray-700 ">
                    <li onClick={() => setComponent(<Introduction />)} className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Introduction</li>
                    <li onClick={() => setComponent(<Basics />)} className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Basics</li>
                    <li onClick={() => setComponent(<Attributes />)} className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Attributes</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">HTML syntax</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">HTML Basics</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Elements and attributes</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all  cursor-pointer duration-300">Comments</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Entities</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">White space</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Document Structure</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">The doctype declaration</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">The head element</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">The body element</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Headings and Text</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Heading elements</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Paragraphs</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Lists</li>
                    <li className="hover:bg-gray-100 p-2 rounded-mdtransition-all cursor-pointer duration-300">Links</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Anchor elements</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">External links</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Internal links</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Images</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">The img element</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Image attributes</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  cursor-pointerduration-300">Tables</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">The table element</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Table rows and columns</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Table cells</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Forms</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">The form element</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Form controls</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer duration-300">Form submission</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">Divisions and Spans</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">The div element</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">The span element</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">Semantic Elements</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">Semantic heading elements</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">Semantic list elements</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all  cursor-pointer duration-300">Semantic button elements</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">Embedding External Media</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">The audio element</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">The video element</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">The iframe element</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">Meta Information</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">The title element</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">The description element</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">The keywords element</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">HTML Entities</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">Character entities</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">Named entities</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">Numerical entities</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">HTML5</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">New elements</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">New attributes</li>
                    <li className="hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer  duration-300">New features</li>
                </ul>
            </animated.div>
            <div className="w-[60%] mx-auto mt-2 content_container">
                {component}
            </div>
        </div>
    )
}
