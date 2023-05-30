"use client";
import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import Preview from './Preview';
import { darkThemeSetup, lightThemeSetup } from '@/utils/themseAndFont';
import { useNextContext } from '@/context/NextContext';
import { abcdef } from '@uiw/codemirror-theme-abcdef';

export default function CodeEditor({code, showCodeEditor}) {

    const [newCode, setNewCode] = useState(code);
    const {theme} = useNextContext();


    if (! showCodeEditor) return <>
     <h1 className={`text-[1.5rem] `}>Output</h1>

        <div className={`rounded-md p-4 mt-4 ${theme ? "bg-gray-800" : "bg-gray-100"}`}>
            <Preview code={newCode}/>
        </div>
    </>

    return (
        <>
            <h1 className="text-[1.5rem] mt-5"> Try it yourself </h1>

            <div className="mt-4">
                <div className={`${theme ? darkThemeSetup : lightThemeSetup} rounded-md p-4`}>
                    <CodeMirror
                        value={newCode}
                        className={`${theme ? "bg-black text-black" : lightThemeSetup} w-full h-full r  leading-8  p-2 text-lg`}
                        onChange={(value) => setNewCode(value)}
                        theme={abcdef}
                    />
                </div>

                <h1 className="text-[1.5rem] mt-4">Output</h1>

                <div className={` rounded-md p-4 mt-4 ${theme ? "bg-gray-800" : "bg-gray-100"}`}>
                    <Preview code={newCode}/>
                </div>
            </div>
        </>
    )
}
