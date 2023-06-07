"use client";

import { animated } from "@react-spring/web";
import React, {useEffect, useRef, useState } from "react";

import Introduction from "./topics/Introduction";
import CSSSyntax from "./topics/CSSSyntax";


import useSlideAnimation from "@/hooks/useSlideAnimation";

import { useNextContext } from "@/context/NextContext";
import HowToAddCSS from "./topics/HowToAddCSS";
import { Selectors } from "./topics/Selectors";
import CSSComments from "./topics/CSSComments";
import CSSColors from "./topics/CSSColors";
import Backgrounds from "./topics/backgrounds";
import Borders from "./topics/Borders";
import Margin from "./topics/Margin";
import Padding from "./topics/Padding";
import WidthHeight from "./topics/WidthHeight";
import Outline from "./topics/Outline";
import OutlineVSBorders from "./topics/OutlineVSBorders";
import TextColor from "./topics/TextColor";
import TextAlignment from "./topics/TextAlignment";
import TextDecoration from "./topics/TextDecoration";
import TextTransformation from "./topics/TextTransformation";
import TextShadow from "./topics/TextShadow";
import CSSFonts from "./topics/CSSFonts";
import CSSFontProp from "./topics/CSSFontProp";
import CSSIcons from "./topics/CSSIcons";
import CSSLinks from "./topics/CSSLinks";
import CSSListStyleType from "./topics/CSSListStyleType";
import CSSTables from "./topics/CSSTables";
import CSSDisplay from "./topics/CSSDisplay";
import CSSPositions from "./topics/CSSPositions";
import CSSZIndex from "./topics/CSSZIndex";
import CSSOverflow from "./topics/CSSOverflow";
import CSSFloat from "./topics/CSSFloat";
import CSSCombinators from "./topics/CSSCombinators";
import PseudoClasses from "./topics/PseudoClasses";
import PseudoElements from "./topics/PseudoElements";
import CSSOpacity from "./topics/CSSOpacity";
import CSSAttrSelector from "./topics/CSSAttrSelector";



export default function Sidebar() {

    const [activeListItem, setActiveListItem] = useState(null);
    const [component, setComponent] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const detailsRef = useRef(null);

    const {theme} = useNextContext();

    const componentsArray = [
        <Introduction />,
        <CSSSyntax />,
        <HowToAddCSS />,
        <Selectors />,
        <CSSComments />,
        <CSSColors />,
        <Backgrounds />,
        <Borders />,
        <Margin />,
        <Padding />,
        <WidthHeight />,
        <Outline />,
        <OutlineVSBorders />,
        <TextColor />,
        <TextAlignment />,
        <TextDecoration />,
        <TextTransformation />,
        <TextShadow />,
        <CSSFonts />,
        <CSSFontProp />,
        <CSSIcons />,
        <CSSLinks />,
        <CSSListStyleType />,
        <CSSTables />,
        <CSSDisplay />,
        <CSSPositions />,
        <CSSZIndex />,
        <CSSOverflow />,
        <CSSFloat />,
        <CSSCombinators />,
        <PseudoClasses />,
        <PseudoElements />,
        <CSSOpacity />,
        <CSSAttrSelector />
    ];

    const liArray = [
        "CSS Introduction",
        "CSS Syntax",
        "How To Add CSS",
        "CSS Selectors",
        "CSS Comments",
        "CSS Colors",
        "CSS Backgrounds",
        "CSS Borders",
        "CSS Margin",
        "CSS Padding",
        "CSS Width Height property",
        "CSS outline",
        "CSS outline vs. Borders",
        "CSS Text Color",
        "CSS Text Alignment",
        "CSS Text Decoration",
        "CSS Text Transformation",
        "CSS Text Shadow",
        "CSS font",
        "CSS font properties",
        "CSS Icons",
        "CSS Links",
        "CSS Lists",
        "CSS Tables",
        "CSS Display",
        "CSS Position",
        "CSS z-index",
        "CSS Overflow",
        "CSS Float",
        "CSS Combinators",
        "CSS Pseudo-Classes",
        "CSS Pseudo-Elements",
        "CSS Opacity",
        "CSS Attr Selector"
    ]
    
    const [spring] = useSlideAnimation();

    const [currentPage, setCurrentPage] = useState(null);
    const totalPages = componentsArray.length - 1;

    useEffect( () => {
        if (currentPage === null) {
            setComponent(componentsArray[0]);
            setCurrentPage(0);
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
        
        window.scrollTo({top: 0, behavior: 'smooth'});

        setTimeout( () => {

            if (currentPage <= totalPages && currentPage >= 0) {
                setComponent(componentsArray[currentPage + 1])
                setCurrentPage(page => page + 1);
                setActiveListItem(currentPage + 1);
                setSelectedTopic(liArray[currentPage + 1]);
            }
        }, 100)
       
    };

    const handlePreviousClick = () => {
        
        window.scrollTo({top: 0, behavior: 'smooth'});
        
        setTimeout(() => {
          if (currentPage > 1) {
            setComponent(componentsArray[currentPage - 1])
            setCurrentPage(page => page - 1);
            setActiveListItem(currentPage - 1);
            setSelectedTopic(liArray[currentPage - 1]);
          }
        }, 100);
      };
    
    const handleMenuItemClick = (index) => {
        setComponent(componentsArray[index]);
        setCurrentPage(index);
        detailsRef.current.toggleAttribute('open');
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
    const menuItems = liArray.map( (li, index) => 
        <li 
            className={`${activeListItem === index  ? theme ? "bg-[#161B22] border-l-4 border-green-500": "bg-gray-100 border-l-4 border-green-500" : ""} ${theme ? "hover:bg-[#161B22]" : "hover:bg-gray-100"}`} 
            key={index} 
            onClick={() => {
                handleMenuItemClick(index);
                setActiveListItem(index);
                setSelectedTopic(li);
            }}>
            {li}
        </li> 
    );

    return (
        <div className="mx-auto flex flex-col md:flex-row">
        <animated.div
            style={{ ...spring }}
            key={spring.key}
            className={`${theme ? "md:bg-[#0D1117] text-white"  : "bg-white text-black"}`}
        >
            <form className="w-full md:w-fit mt-4 md:mt-0">
                <div className="relative hidden md:block  md:px-4  px-4 py-2">
                    <div className={`text-black pl-6 absolute inset-y-0 left-0 flex items-center  pointer-events-none`}>
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5  "
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
                        className={`text-black block py-2  text-xs md:text-sm p-2 rounded-sm outline-none pl-10  border w-full md:w-auto`}
                        placeholder="Search topics"
                        required
                        onChange={searchTopics}
                    />
                </div>
            </form>

            <div className={`md:hidden block rounded-md px-4 list-none sidebar_li mt-5 ${theme ? "bg-[#0D1117] text-white"  : "bg-gray-50 text-black"} w-[90%] mx-auto`}>
                <details ref={detailsRef} className=" rounded-md">
                    <summary className="py-1 cursor-pointer" >
                        {selectedTopic ? selectedTopic : 'Select a topic'}
                    </summary>
                    
                    <div className="relative mt-3  md:px-4  px-4 py-2">
                        <div className={`text-black pl-6 absolute inset-y-0 left-0 flex items-center  pointer-events-none`}>
                            <svg
                                className="w-5 h-5  "
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
                            className="block text-black py-2  text-xs md:text-sm p-2 rounded-sm outline-none pl-10  border w-full md:w-auto"
                            placeholder="Search topics"
                            required
                            onChange={searchTopics}
                        />
                    </div>
                    <ul className="py-1">
                        {menuItems}
                    </ul>
                </details>
            </div>

            <ul className={`sidebar_li  hidden md:block w-full md:px-4 px-1 text-xs md:text-base overflow-scroll scrollbar-hide h-[70%] sticky list-inside `}>
                {menuItems}
            </ul>

        </animated.div>

        <div className={ `w-full md:w-[80%] mx-auto mt-2 content_container `}>
            
            <div className="md:p-0 px-4">
                { component}
            </div>

            <div className={`pagination-container mt-5 w-full flex flex-wrap flex-row md:py-2 md:px-0 py-5 px-4 md:flex-row justify-between items-center text-white`}>
                
                <button 
                    className={`${currentPage <=0 ? "cursor-not-allowed" : ""} hover:bg-[#28ae40] bg-[#2EA043] relative rounded-md px-5 py-2.5 text-sm font-medium ` } 
                    onClick={handlePreviousClick} disabled={currentPage <= 0}
                >
                    Previous &nbsp;:
                    <span className="ml-2"> {liArray[currentPage - 1] || "null"} </span>
                </button>
                
                <button 
                    className={`bg-[#2EA043] hover:bg-[#28ae40] relative rounded-md px-5 py-2.5 text-sm font-medium ${currentPage >= totalPages ? "cursor-not-allowed" : ""}`} 
                    onClick={handleNextClick}
                >
                    Next &nbsp;: 
                    <span className="ml-2"> {liArray[currentPage + 1] || "null"} </span>
                </button>
        
            </div>
        </div>
    </div>
  )
  }