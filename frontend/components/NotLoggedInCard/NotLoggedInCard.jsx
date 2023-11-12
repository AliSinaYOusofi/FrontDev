"use client"
import Link from 'next/link'
import React from 'react'

export default function NotLoggedInCard({closeCard, onClose}) {

    const hideLoginForm = () => {
        document.getElementById("hidelogin").style.display = "none";
        if (onClose) onClose(false)
    }

    return (
        <div className="w-fit pointer-events-auto bg-gray-800 border-none outline-none rounded-md p-10 mt-10" id="hidelogin">
            
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold mb-2"> To be implemented</h1>
                
                <svg onClick={hideLoginForm} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 cursor-pointer transition-all duration-300 hover:scale-[1.2]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </div>

            <hr />

            <div className="mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
            </div>

            <p className="text-gray-400">We're a place where people learn, stay up-to-date and grow their careers.</p>
            <p className="text-gray-400">The registration section will be available soon</p>
            
            {/* <Link href="/login" className="flex items-center justify-center md:relative shadow-md shadow-black/10 outline-none border-none transition-all duration-300 hover:bg-black hover:text-white mt-4 py-2 px-6  w-full rounded-md  font-semibold mb-2">
                Log in
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
            </Link>
            
            <Link href="/create_account" className="flex items-center justify-center text-gray-500 mt-4 transition-all duration-300 hover:-translate-y-1 hover:text-gray-600">
                Create account
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
            </Link> */}

        </div>
    )
}
