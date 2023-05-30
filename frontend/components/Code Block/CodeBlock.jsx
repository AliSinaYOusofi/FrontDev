"use client";

import Prism from 'prismjs';
import 'prism-themes/themes/prism-atom-dark.css';

import React, { useEffect, useState } from 'react'
import CodeEditor from '../Code/CodeEditor';
import { useNextContext } from '@/context/NextContext';
import { darkThemeSetup, lightThemeSetup } from '@/utils/themseAndFont';

export default function CodeBlock({code, language, showCodeEditor, onlyCode}) {
    
    const [clipboard, setClipboard] = useState(false);
    const {theme} = useNextContext();

    useEffect( () => {
        Prism.highlightAll();
    }, [])

    const copyToClipboard = () => {
        
        setClipboard(true);
        
        setTimeout(() => {
            setClipboard(false);
        }, 2000);
        
        navigator.clipboard.writeText(code);
    }

    if (onlyCode) {
        return (
            <div className={`relative mt-5 ${theme ? darkThemeSetup : lightThemeSetup}`}>
                <pre className="">
                    <code className={`rounded-md p-3 mr-10 language-${language}`}>
                        {code}
                    </code>
                </pre>
            </div>
        )
    }

    return (
        <div className="relative mt-5">
            <pre className="">
                <code className={`rounded-md p-3 mr-10 language-${language}`}>
                    {code}
                </code>
            </pre>
            <div 
                className={`absolute top-0 right-0 p-2 text-white`}
                onClick={copyToClipboard}
            >
                {
                    !clipboard
                    ?

                    <svg
                        viewBox="0 0 384 512"
                        fill="currentColor"
                        className="w-6 h-6  cursor-pointer"
                    >
                        <path d="M320 64h-49.61C262.1 27.48 230.7 0 192 0s-71 27.48-78.4 64H64C28.65 64 0 92.66 0 128v320c0 35.34 28.65 64 64 64h256c35.35 0 64-28.66 64-64V128c0-35.34-28.7-64-64-64zM192 48c13.23 0 24 10.77 24 24s-10.8 24-24 24-24-10.77-24-24 10.8-24 24-24zm144 400c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V128c0-8.82 7.178-16 16-16h18.26c-1.33 5.1-2.26 10.4-2.26 16v16c0 8.8 7.16 16 16 16h192c8.836 0 16-7.164 16-16v-16c0-5.559-.932-10.86-2.264-16H320c8.822 0 16 7.18 16 16v320z" />
                    </svg>
                    :
                    <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="w-6 h-6  cursor-pointer"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.854 7.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7.5 9.793l2.646-2.647a.5.5 0 01.708 0z"
                        />
                        <path d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" />
                        <path d="M9.5 1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" />
                    </svg>
                }
            </div>
            <CodeEditor code={code} showCodeEditor={showCodeEditor}/>
        </div>
    )
}
