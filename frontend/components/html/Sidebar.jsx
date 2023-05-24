"use client";

import { useSpring, animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import Introduction from "./Introduction";
import Basics from "./Basics";
import Attributes from "./Attributes";
import Headings from "./Headings";
import Paragraphs from "./Paragraphs";
import Style from "./Style";
import TextFormatting from "./TextFormatting";

export default function Sidebar() {
    const [component, setComponent] = useState(null);

    const componentsArray = [
        <Introduction />,
        <Basics />,
        <Attributes />,
        <Headings />,
        <Paragraphs />,
        <Style />,
        <TextFormatting />,
    ];
    
    const [spring, api] = useSpring(() => ({
        from: {
            x: -100,
            opacity: 0,
        },

        to: {
            x: 0,
            opacity: 1,
        },

        config: {
            damping: 400,
            clamp: true,
            tension: 50,
            friction: 10,
        },
    }));

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = componentsArray.length;

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
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            setComponent(componentsArray[currentPage])
        }
    };

    useEffect( () => {
        
        setComponent(componentsArray[currentPage])
        
    }, [])

    const handlePreviousClick = () => {

        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setComponent(componentsArray[currentPage])
        }
    };
    
    const handleMenuItemClick = (item) => {
        switch (item) {
            case "Introduction":
                setCurrentPage(0);
                setComponent(componentsArray[0])
                break;
            case "Basics":
                setCurrentPage(1);
                setComponent(componentsArray[1])
                
                break;
            case "Attributes":
                setCurrentPage(2);
                setComponent(componentsArray[2])
                
                break;
            case "Headings":
                setCurrentPage(3);
                setComponent(componentsArray[3])
                break;
            case "Paragraphs":
                setCurrentPage(4);
                setComponent(componentsArray[4])
                
                break;
            case "Style":
                setCurrentPage(5);
                setComponent(componentsArray[5])
                
                break;
            case "Text Formatting":
                setCurrentPage(6);
                setComponent(componentsArray[6])
                break;
            default:
                break;
        }
    }
    
    const menuItems = [
        
        <li onClick={() => handleMenuItemClick("Introduction")} className="">
            Introduction
        </li>,

        <li onClick={() => handleMenuItemClick("Basics")} className="">
            Basics
        </li>,

        <li onClick={() => handleMenuItemClick("Attributes")} className="">
            Attributes
        </li>,

        <li onClick={() => handleMenuItemClick("Headings")} className="">
            Headings
        </li>,

        <li onClick={() => handleMenuItemClick("Paragraphs")} className="">
            Paragraphs
        </li>,

        <li onClick={() => handleMenuItemClick("Style")} className="">
            Style
        </li>,

        <li onClick={() => handleMenuItemClick("Text Formatting")} className="">
            Text Formatting
        </li>,
    ];

    return (
    <div className="mx-auto flex">
        <animated.div
            style={{ ...spring }}
            key={spring.key}
            className=" bg-white"
        >
            <form className="">
                <div className="relative w-fit md:px-4 px-1 py-1">
                    <div className="absolute inset-y-0 left-2 flex items-center pl-3 pointer-events-none">
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
                        className="block text-xs md:text-sm p-2 rounded-md outline-none pl-10 text-gray-900 border w-[150px] md:w-fit"
                        placeholder="Search topics"
                        required
                        onChange={searchTopics}
                    />
                </div>
            </form>

            <ul className="sidebar_li w-full md:px-4 px-1 text-xs md:text-base overflow-scroll h-full list-inside text-gray-700 ">
                {menuItems}
            </ul>

        </animated.div>
        <div className="w-[80%] mx-auto mt-2 content_container">
            {component}
            <div className="pagination-container mt-5 w-full flex justify-between items-center">
                <button className="rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer px-5 py-2.5 text-sm font-medium text-black/80 transition hover:text-black " onClick={handlePreviousClick} disabled={currentPage === 1}>
                    Previous
                </button>
                
                <button className="rounded-md bg-gray-100 hover:bg-gray-200 px-5 py-2.5 text-sm font-medium text-black/80 transition hover:text-black " onClick={handleNextClick} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    </div>
  )
  }