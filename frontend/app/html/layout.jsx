import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/html/Sidebar'
import React from 'react'

export default function layout() {
    return (
        <div className="relative">
            <Navbar />
            <Sidebar />
        </div>
    )
}
