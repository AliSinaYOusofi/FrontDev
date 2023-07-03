"use client"
import React, { useState } from 'react'
import { animated } from '@react-spring/web';
import { useSpring } from '@react-spring/web';
import Link from 'next/link';
import Hamburger from 'hamburger-react'
import { useNextContext } from '@/context/NextContext';

export default function Navbar() {

    //Make navbar
    const [navbar, setNavbar] = useState(false);
    const {theme, setTheme} = useNextContext();
    
    const [spring] = useSpring(
        () => ({
            from: { 
                y: -100,
                opacity: 0
            },
            to: { 
                y: 0,
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

    const [mobileNavAnimated, mobileNavAnimatedApi] = useSpring(
        () => ({
            from: {
                opacity: 0
            },
            config: {
                damping: 400,
                clamp: true,
                tension: 50,
                friction: 10
                
            },
            velocity: 150000000
        })
    )
    
    const handleClickOnBurgerMenu = () => {
        
        setNavbar(!navbar)
        
        mobileNavAnimatedApi.start({
            from: {
                opacity: 0,
                display: "hidden",
                x: -100
            },
            
            to: {
                opacity: 1,
                display: "block",
                x: 0
            },
        });

    }

    
    const ulList = (<nav key={mobileNavAnimated.key} style={mobileNavAnimated} className={`block md:hidden lg:hidden transition-all duration-300 ${theme  ? "bg-[#0D1117]" : "bg-gray-50"} mt-10 py-10 w-[90%] mx-auto rounded-md mb-5`}>
    <ul className="flex flex-col items-start ml-10  justify-start gap-6 text-sm">
        <li className="">
            <Link className="  transition hover:text-gray-600 flex items-center justify-center flex-row-reverse" href="/">
                HTML5
                <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="mr-1 h-6 w-6"
                >
                    <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" />
                </svg>
            </Link>
        </li>

        <li>
            <Link className="transition hover:text-gray-600 flex items-center justify-center flex-row-reverse" href="/css">
                CSS3
                <svg
                viewBox="0 0 32 32"
                fill="currentColor"
                className="mr-1 h-6 w-6"
                >
                    <path
                        fill="currentColor"
                        d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
                    />
                </svg>
            </Link>
        </li>

        {/* <li>
            <Link className=" transition hover:text-gray-600 flex items-center justify-center flex-row-reverse" href="/github">
                Git/Github
                <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mr-1 w-6 h-6"
                >
                    <path d="M15.698 7.287L8.712.302a1.03 1.03 0 00-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 011.55 1.56l1.773 1.774a1.224 1.224 0 011.267 2.025 1.226 1.226 0 01-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 11-1.008-.036V5.887a1.226 1.226 0 01-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 000 1.457l6.986 6.986a1.03 1.03 0 001.457 0l6.953-6.953a1.031 1.031 0 000-1.457" />
                </svg>
            </Link>
        </li> */}

        <li>
            <Link className=" transition hover:text-gray-600 flex items-center justify-center flex-row-reverse" href="/js">
                Javascript
                <svg
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="mr-1 h-6 w-6"
        
                >
                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                </svg>
            </Link>
        </li>

        

        {/* <li>
            <Link className=" transition hover:text-gray-600 flex items-center justify-center flex-row-reverse" href="/">
                React
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1 w-6 h-6"
                >
                    <path d="M13.785 11.245 A1.785 1.785 0 0 1 12 13.03 A1.785 1.785 0 0 1 10.215 11.245 A1.785 1.785 0 0 1 13.785 11.245 z" />
                    <path d="M7.002 14.794l-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 001.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 01-.985-2.542zm10.572 6.095l-.11-.392a19.628 19.628 0 00-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 01-.987 2.542z" />
                    <path d="M6.419 8.695l-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 00-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 00-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 011.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 002.021-2.477l.112-.16.194-.019a19.473 19.473 0 003.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 01-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 01-1.71 2.124z" />
                    <path d="M17.58 8.695l-.395-.099a19.477 19.477 0 00-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0011.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 01-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 01-1.713-2.123 20.692 20.692 0 01-2.696-.419z" />
                    <path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 01-1.126-1.769 26.028 26.028 0 01-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 014.198 0l.194.019.113.16a25.136 25.136 0 012.1 3.628l.083.179-.083.177a24.742 24.742 0 01-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 001.832-3.168 23.916 23.916 0 00-1.832-3.168 23.877 23.877 0 00-3.667 0 23.743 23.743 0 00-1.832 3.168 24.82 24.82 0 001.832 3.168z" />
                </svg>
            </Link>
        </li> */}
    </ul>
    </nav>)


    return (
        <header className="">
            <animated.div
                className={`${theme ? "bg-[#161B22] text-white"  : "bg-white text-black"} mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8`}
                key={spring.key} style={{...spring}}
                >
                
                <span>
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                </span>

                <span onClick={() => setTheme(prevTheme => !prevTheme)} className="block cursor-pointer text-teal-600" href="/">
                    {
                        theme
                        ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>

                    }
                </span>

                

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav className={`hidden md:block`}>
                        <ul  className="flex items-center gap-6 text-sm">
                            <li>
                                <Link className="transition-[font] hover:text-gray-500/75" href="/html">
                                    HTML5
                                </Link>
                            </li>

                            <li>
                                <Link className=" transition hover:text-gray-500/75" href="/css">
                                CSS3
                                </Link>
                            </li>

                            <li>
                                <Link className=" transition hover:text-gray-500/75" href="/js">
                                Javascript
                                </Link>
                            </li>

                            {/* <li>
                                <Link className=" transition hover:text-gray-500/75" href="/">
                                React
                                </Link>
                            </li> */}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <button
                                className="block bg-[#2EA043] hover:bg-[#28ae40] rounded-md px-5 py-2.5 text-sm font-medium text-white"
                                href="/"
                            >
                                Login
                            </button>

                            <button
                                className="hidden border-2 border-[#2EA043] hover:text-white hover:bg-[#2EA043] rounded-md px-5 py-2.5 text-sm font-medium  sm:block"
                                href="/"
                            >
                                Register
                            </button>
                        </div>

                        <button
                            className="block rounded-md bg-white/10 md:hidden"
                            onClick={handleClickOnBurgerMenu}>
                    
                            <Hamburger size={20}/>
                        </button>
                    </div>
                </div>
            </animated.div>
            <animated.div className="" key={mobileNavAnimated.key} style={{...mobileNavAnimated}}>
                {
                    navbar 
                    ?
                    ulList
                    : null
                }
            </animated.div>
        </header>

    )
}
