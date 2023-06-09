"use client";

import { animated } from "@react-spring/web";
import React, {useEffect, useRef, useState } from "react";
import Introduction from "./Introduction";
import Basics from "./Basics";
import Attributes from "./Attributes";
import Headings from "./Headings";
import Paragraphs from "./Paragraphs";
import Style from "./Style";
import TextFormatting from "./TextFormatting";
import useSlideAnimation from "@/hooks/useSlideAnimation";
import Quotation from "./Quotation";
import Comments from "./Comments";
import Project1 from "./Project1";
import Links from "./Links";
import Images from "./Images";
import Lists from "./Lists";
import Tables from "./Tables";
import SecondProject from "./SecondProject";
import MetaTags from "./MetaTags";
import Iframe from "./Iframe";
import FormsIntroduction from "./FormsIntroduction";
import FormAttributes from "./FormAttributes";
import FormElements from "./FormElements";
import InputTypes from "./InputTypes";
import InputAttributes from "./InputAttributes";
import Video from "./Video";
import Audio from "./Audio";
import FormProject from "./FormProject";
import Semantics from "./Semantics";
import { useNextContext } from "@/context/NextContext";
import { usePathname } from "next/navigation";


export default function Sidebar({display}) {

    const [activeListItem, setActiveListItem] = useState(null);
    const [component, setComponent] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const detailsRef = useRef(null);

    const pathname = usePathname();

    const {theme} = useNextContext();

    const componentsArray = [
        <Introduction />,
        <Basics />,
        <Attributes />,
        <Headings />,
        <Paragraphs />,
        <Style />,
        <TextFormatting />,
        <Quotation />,
        <Comments />,
        <Project1 />,
        <Links />,
        <Images />,
        <Lists />,
        <Tables />,
        <SecondProject />,
        <MetaTags />,
        <Iframe />,
        <FormsIntroduction />,
        <FormAttributes />,
        <FormElements />,
        <InputTypes />,
        <InputAttributes />,
        <FormProject />,
        <Video />,
        <Audio />,
        <Semantics />
    ];

    const liArray = [
        "HTML Introduction",
        "HTML Basics",
        "HTML Attributes",
        "HTML Headings",
        "HTML Paragraphs",
        "HTML Style",
        "HTML Text Formatting",
        "HTML Quotation",
        "HTML Comments",
        "HTML First Project",
        "HTML Hyperlinks",
        "HTML Image",
        "HTML Lists",
        "HTML Tables",
        "HTML Second Project",
        "HTML MetaTags",
        "HTML Iframe",
        "HTML Forms",
        "HTML Form Attributes",
        "HTML Form Elements",
        "HTML Input Types",
        "HTML Input Attributes",
        "HTML Form Project",
        "HTML Video",
        "HTML Audio",
        "HTML Semantic elements"
    ]
    
    const [spring] = useSlideAnimation();

    const [currentPage, setCurrentPage] = useState(null);
    const totalPages = componentsArray.length - 1;

    useEffect( () => {
        if (currentPage === null) {
            setComponent(componentsArray[0]);
            setCurrentPage(0);
        }
        if (pathname.split("/").length >= 3) {

            let componentString = pathname.replace("%20", " ").split("/")[2]
            componentString = decodeURI(componentString.replace(/\+/g, '%20'));

            console.log(componentString);
            
            let topicIndex = liArray.indexOf(componentString)
            
            setComponent(componentsArray[topicIndex])
            setCurrentPage(topicIndex);
            setActiveListItem(topicIndex);
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
                updateHistory(liArray[currentPage + 1])
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
            updateHistory(liArray[currentPage - 1])
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
                updateHistory(li)
            }}>
            {li}
        </li> 
    );

    const updateHistory = (li) => {
        history.replaceState(window.history.state, "", `/html/${li}`)
    }

    return (
        <div className="mx-auto flex flex-col md:flex-row">
        <animated.div
            style={{ ...spring }}
            key={spring.key}
            className={`${theme ? "md:bg-[#0D1117] text-white"  : "bg-white text-black"} ${display ? "md:hidden" : "md:block"}`}
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

        <div className={ `w-full md:w-[50%] mx-auto mt-2 content_container `}>
            
            <div className="md:p-0 px-4">
                { component}
            </div>

            <div className={`pagination-container mt-5 w-full flex flex-row md:py-2 md:px-0 py-5 px-4 md:flex-row justify-between items-center text-white`}>
                
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