"use client";

import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/js/Sidebar'
import React from 'react'
import { useNextContext } from '@/context/NextContext';
import BackToTop from '@/components/Back To Top/BackToTop';

export default function layout({params}) {

    const {theme} = useNextContext();
    
    return (
        <div className={`relative ${theme ? "bg-[#000308] text-white" : "bg-[white] text-black"}`}>
            <Navbar />
            <Sidebar topic={params}/>
            <BackToTop />
        </div>
    )
}
