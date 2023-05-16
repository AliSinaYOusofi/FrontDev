"use client";

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function Sidebar({sidebar}) {

    const pathname = usePathname();

    return (
        <div className={`transfrom ${sidebar ? "-translate-x-full" : "-translate-x-0"} flex z-[100] justify-center fixed transition-all duration-300 shadow-black/10 shadow-sm bg-gray-100 top-0 left-0 flex-col h-screen w-64  text-black`}>
            
            <div className="flex flex-col items-center justify-center h-16 bg-white">
                <h1 className="text-2xl font-bold">LazyDevs Community</h1>
            </div>
            
            <nav className="flex-grow w-full mt-">
                <ul className="flex flex-col justify-center items-start gap-y-3 w-full">
                    <li className="w-full p-1">
                        <Link className={`p-2 gap-x-2 flex items-center transition-all duration-200 hover:bg-white  text-sm text-slate-700 rounded-md ${pathname === "/" ? "bg-white" : ""}`}  href="/">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
                                alt="home"
                                className="w-6 h-6"
                            />
                            Home
                        </Link>
                    </li>

                    <li className="w-full p-1" id="bu-users-accordion">
                        <Link className={`p-2 gap-x-2 flex items-center transition-all duration-200 hover:bg-white  text-sm text-slate-700 rounded-md ${pathname === "/blogs" ? "bg-white" : ""}`}  href="/blogs">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/6939/6939207.png"
                                alt="home"
                                className="w-6 h-6"
                            />
                        Blogs
                        </Link>
                    </li>

                    <li className="w-full p-1" id="bu-users-accordion">
                        <Link className={`p-2 gap-x-2 flex items-center transition-all duration-200 hover:bg-white  text-sm text-slate-700 rounded-md ${pathname === "/blogs" ? "bg-white" : ""}`}  href="/login">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1828/1828466.png"
                                alt="home"
                                className="w-6 h-6"
                            />
                        Login
                        </Link>
                    </li>

                    <li className="w-full p-1" id="bu-users-accordion">
                        <Link className={`p-2 gap-x-2 flex items-center transition-all duration-200 hover:bg-white  text-sm text-slate-700 rounded-md ${pathname === "/create_account" ? "bg-white" : ""}`}  href="/create_account">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/9068/9068668.png"
                                alt="home"
                                className="w-6 h-6"
                            />
                        Create Account
                        </Link>
                    </li>
                </ul>
                
            </nav>
            <div className="ml-2 mb-2">
                
            </div>
        </div>
    )
}
