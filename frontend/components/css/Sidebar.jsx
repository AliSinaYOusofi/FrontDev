"use client";


import React, {useEffect, useState } from "react";


import Introduction from "./topics/Introduction";
import CSSSyntax from "./topics/CSSSyntax";
import useSlideAnimation from "@/hooks/useSlideAnimation";
import { animated } from "@react-spring/web";
import { useNextContext } from "@/context/NextContext";

export default function Sidebar() {

    const [activeListItem, setActiveListItem] = useState(null);
    const [component, setComponent] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState(null);

    const {theme} = useNextContext();

    const componentsArray = [
        <Introduction />,
        <CSSSyntax />
    ];

    const liArray = [
        "Introduction",
        "CSS Syntax"
    ]
    
    const [spring] = useSlideAnimation();

    const [currentPage, setCurrentPage] = useState(null);
    const totalPages = componentsArray.length - 1;

    useEffect( () => {
        if (currentPage === null) {
            setComponent(componentsArray[0]);
            setCurrentPage(0);
            setActiveListItem(0);
        }
        
    }, [])
    const searchTopics = (event) => {
        const searchText = event.target.value.toLowerCase();

        const lis = document.querySelectorAll("li");

        lis.forEach((li) => {
        const text = li.textContent.toLowerCase();

        if (text.includes(searchText)) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
        });
    };

    const handleNextClick = () => {
        if (currentPage <= totalPages && currentPage >= 0) {
            setComponent(componentsArray[currentPage + 1])
            setCurrentPage(page => page + 1);
        }

        setActiveListItem(currentPage + 1);
    };

    const handlePreviousClick = () => {

        if (currentPage >= 1) {
            setComponent(componentsArray[currentPage - 1])
            setCurrentPage(page => page - 1);
        }

        setActiveListItem(currentPage - 1);
    };
    
    const handleMenuItemClick = (index) => {
        setComponent(componentsArray[index]);
        setCurrentPage(index);
    }
    
    const menuItems = liArray.map( (li, index) => 
        <li 
            className={`${activeListItem === index ? "active-list-item" : null} hover:${theme ? "bg-gray-950" : "bg-gray-100"}`} 
            key={index} 
            onClick={() => {
                handleMenuItemClick(index);
                setActiveListItem(index);
                setSelectedTopic(li);
            }}>
            {li}
        </li> 
    )

    return (
        <div className="mx-auto flex flex-col md:flex-row">
        <animated.div
            style={{ ...spring }}
            key={spring.key}
            className="bg-white"
        >
            <form className="w-full md:w-fit">
                <div className="relative  md:px-4  px-4 py-2">
                    <div className="absolute  inset-y-0 left-2 flex items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div>

                    <input
                        type="search"
                        id="default-search"
                        className="block py-2  text-xs md:text-sm p-2 rounded-sm outline-none pl-10 text-gray-900 border w-full md:w-auto"
                        placeholder="Search topics"
                        required
                        onChange={searchTopics}
                    />
                </div>
            </form>

            <div className="md:hidden block px-4 list-none sidebar_li mt-5">
                <details className=" rounded-md">
                    <summary className="py-1 cursor-pointer">
                        {selectedTopic ? selectedTopic : 'Select a topic'}
                    </summary>
                    
                    <ul className="py-1">
                        {menuItems}
                    </ul>
                </details>
            </div>

            <ul className="sidebar_li hidden md:block w-full md:px-4 px-1 text-xs md:text-base overflow-scroll h-[70%] sticky list-inside text-gray-700 ">
                {menuItems}
            </ul>

        </animated.div>

        <div  className="w-full md:w-[80%] mx-auto mt-2 content_container">
            <div className="md:p-0 px-4">
                { component}
            </div>

            <div className="pagination-container mt-5 w-full flex flex-row md:py-2 md:px-0 py-5 px-4 md:flex-row justify-between items-center">
                <button className="rounded-md  hover:bg-gray-200 px-5 py-2.5 text-sm font-medium text-black/80 transition hover:text-black " onClick={handlePreviousClick} disabled={currentPage <= 0}>
                    Previous
                </button>

                <button className="rounded-md  hover:bg-gray-200 px-5 py-2.5 text-sm font-medium text-black/80 transition hover:text-black " onClick={handleNextClick} disabled={currentPage >= totalPages && currentPage >= 0}>
                    Next
                </button>
            </div>
        </div>
    </div>
  )
  }