import React from 'react'

export default function HeroSection() {
    return (
    
        <div className="relative overflow-hidden">
        
            <div aria-hidden="true" className="flex absolute -top-96 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-violet-700 to-purple-50 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
                <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
            </div>
        

            <div className="relative z-10 mt-20">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                    <div className="max-w-2xl text-center mx-auto">
                        <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                        Preline: A vision for 2023
                        </p>

                    
                        <div className="mt-5 max-w-2xl">
                            <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                                The Intuitive Web Solutions
                            </h1>
                        </div>
                    

                        <div className="mt-5 max-w-3xl">
                            <p className="text-lg text-gray-600 dark:text-gray-400">Preline UI is an open-source set of prebuilt UI components, ready-to-use examples and Figma design system based on the utility-first Tailwind CSS framework.</p>
                        </div>

                    
                        <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
                            <a className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="javascript:;">
                                Get started
                                <svg className="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </a>
                            <a className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-gray-800 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:text-white dark:hover:bg-gray-800 dark:hover:border-gray-900 dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800" href="#">
                                <svg className="w-4 h-4" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z" fill="#0ACF83"></path>
                                <path d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z" fill="#A259FF"></path>
                                <path d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z" fill="#F24E1E"></path>
                                <path d="M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z" fill="#FF7262"></path>
                                <path d="M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z" fill="#1ABCFE"></path>
                                </svg>
                                Preline Figma
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}
