"use client"
import React, { useState } from 'react'

export default function Navbar() {

    //Make navbar
    const [navbar, setNavbar] = useState(false);
    
    const ulList = (<nav className="block md:hidden lg:hidden transition-all duration-300 bg-white py-10 w-[90%] mx-auto rounded-md">
  <ul className="flex flex-col items-center justify-center gap-6 text-sm">
    <li>
      <a className="text-gray-500 transition hover:text-blue-100" href="/">
        HTML5
        
      </a>
    </li>

    <li>
      <a className="text-gray-500 transition hover:text-blue-100" href="/">
        CSS3
      </a>
    </li>

    <li>
      <a className="text-gray-500 transition hover:text-blue-100" href="/">
        Javascript
      </a>
    </li>

    <li>
      <a className="text-gray-500 transition hover:text-blue-100" href="/">
        React
      </a>
    </li>
  </ul>
</nav>
    )
    return (
        <header className="">
            <div
                className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="block text-teal-600" href="/">
                    <svg className="h-8 w-8" fill="#c0c0c0" width="136px" height="136px" viewBox="-2.56 -2.56 37.12 37.12" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#c0c0c0" transform="matrix(-1, 0, 0, 1, 0, 0)" strokeWidth="0.00032">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.128"></g><g id="SVGRepo_iconCarrier"> <title>cog</title> <path d="M0 16q0-0.832 0.576-1.408t1.44-0.576h1.984q0.032 0 0.064 0t0.064 0.032 0.064 0q0.448-2.72 2.080-4.992-0.128-0.064-0.16-0.096l-1.408-1.44q-0.608-0.576-0.608-1.408t0.608-1.408 1.408-0.608 1.408 0.608l1.408 1.408q0.032 0.032 0.096 0.16 2.304-1.632 5.024-2.048 0-0.032-0.032-0.096t0-0.128v-1.984q0-0.832 0.576-1.408t1.408-0.608 1.408 0.608 0.608 1.408v1.984q0 0.032-0.032 0.096t0 0.128q2.72 0.416 4.992 2.048 0.064-0.128 0.096-0.16l1.408-1.408q0.576-0.608 1.408-0.608t1.44 0.608 0.576 1.408-0.576 1.408l-1.408 1.408q-0.064 0.064-0.192 0.128 1.632 2.272 2.080 4.992 0.032 0 0.096 0t0.096-0.032h2.016q0.8 0 1.408 0.576t0.576 1.408-0.576 1.44-1.408 0.576h-2.016q-0.032 0-0.096-0.032t-0.096-0.032q-0.448 2.752-2.080 5.024 0.128 0.064 0.192 0.128l1.408 1.408q0.576 0.576 0.576 1.376t-0.576 1.44-1.44 0.576-1.408-0.576l-1.408-1.408q-0.032-0.064-0.096-0.16-2.272 1.6-4.992 2.048 0 0.032 0 0.096t0.032 0.096v2.016q0 0.832-0.608 1.408t-1.408 0.576-1.408-0.576-0.576-1.408v-2.016q0-0.032 0-0.096t0.032-0.096q-2.72-0.448-5.024-2.048-0.064 0.128-0.096 0.16l-1.408 1.408q-0.576 0.576-1.408 0.576t-1.408-0.576-0.608-1.44 0.608-1.376l1.408-1.408q0.064-0.064 0.16-0.128-1.632-2.272-2.080-5.024 0 0-0.064 0.032t-0.128 0.032h-1.984q-0.832 0-1.44-0.576t-0.576-1.44zM8 16q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z">
                        </path> </g>
                    </svg>
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav className={`hidden md:block`}>
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                                HTML5
                                </a>
                            </li>

                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                                CSS3
                                </a>
                            </li>

                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                                Javascript
                                </a>
                            </li>

                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                                React
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                        <a
                                className="block rounded-md bg-gray-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
                                href="/"
                            >
                                Login
                            </a>

                            <a
                                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black/80 transition hover:text-black sm:block"
                                href="/"
                            >
                                Register
                            </a>
                        </div>

                        <button
                        className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        onClick={() => setNavbar(!navbar)}>
                        
                            <span class="sr-only" >Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="">
                {
                    navbar 
                    ?
                    ulList
                    : null
                }
            </div>
        </header>

    )
}
