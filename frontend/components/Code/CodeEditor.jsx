"use client";
import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import Preview from './Preview';
import { darkThemeSetup, lightThemeSetup } from '@/utils/themseAndFont';
import { useNextContext } from '@/context/NextContext';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { githubDark, githubLight } from "@uiw/codemirror-theme-github"

export default function CodeEditor({code, showCodeEditor, language}) {

    const [newCode, setNewCode] = useState(code);
    const {theme} = useNextContext();

    if (! showCodeEditor) return <>
     <h1 className={`text-[1.5rem] `}>Output</h1>

        <div className={`rounded-md p-4 mt-4 ${theme ? "bg-gray-900" : "bg-gray-100"}`}>
            <Preview code={newCode}/>
        </div>
    </>

    return (
        <>
            <h1 className="text-[1.5rem] mt-5"> Code Playground </h1>

            <div className="mt-4">
                <div className={`${theme ? darkThemeSetup : lightThemeSetup} rounded-md p-4`}>
                    <CodeMirror
                        value={newCode}
                        className={` w-full h-full r  leading-8  text-lg code`}
                        onChange={(value) => setNewCode(value)}
                        theme={theme ? githubDark : githubLight}
                        extensions={[loadLanguage(language ? String(language)?.toLowerCase() : "html")]}
                    />
                </div>
                <h1 className="text-[1.5rem] mt-4">Live Preview</h1>

                <div className={` rounded-md p-4 mt-4 ${theme ? "bg-[#0D1117]" : "bg-gray-100"}`}>
                    <Preview code={newCode}/> 
                </div>
            </div>
        </>
    )
}
