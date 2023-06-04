"use client"
import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/html/Sidebar'
import { useNextContext } from '@/context/NextContext';
import {  lightThemeSetup } from '@/utils/themseAndFont';
import React from 'react';


export default function layout() {

    const {theme} = useNextContext();
 
    return (
        <div className={`relative ${theme ? "bg-[#000308] text-white" : lightThemeSetup}`}>
            <Navbar />
            <Sidebar />
        </div>
    )
}
