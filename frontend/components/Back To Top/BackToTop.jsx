"use client"

import React, { useEffect, useRef } from 'react'

export default function BackToTop() {

    const ref = useRef();

    const scrollHandler =  () => {
        if (Math.round(window.scrollY) >= 200) {
            if (ref.current) {
                ref.current.style.display = "flex"
                ref.current.style.position = "fixed"
            }
        }
        else
            ref.current.style.display = "none"
    }

    useEffect( () => {
        window.addEventListener('scroll', scrollHandler)
        return () => {
            removeEventListener("scroll", scrollHandler)
        }
    }, [])

    const handleMovePage = () => scroll({"behavior": "smooth", top: 0})

    return (
        <div onClick={handleMovePage} ref={ref} className="fixed  cursor-pointer top-[91%] right-[2%] bg-gray-700 text-white p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
        </div>
    )
}
