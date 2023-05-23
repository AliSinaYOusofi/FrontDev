"use client";
import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import Preview from './Preview';


export default function CodeEditor({code, showCodeEditor}) {

    const [newCode, setNewCode] = useState(code);

    if (! showCodeEditor) return <>
     <h1 className="text-[1.5rem]">Output</h1>

        <div className="bg-gray-100 rounded-md p-4 mt-2">
            <Preview code={newCode}/>
        </div>
    </>

    return (
        <>
            <h1 className="text-[1.5rem] mt-5"> Try it yourself </h1>

            <div className="mt-4">
                <div className="bg-gray-100 rounded-md p-4">
                    <CodeMirror
                        value={newCode}
                        className="w-full h-full rounded-md border l leading-8 border-gray-400 p-2 text-lg"
                        onChange={(value) => setNewCode(value)}
                        lang='html'
                        options={{
                            mode: 'xml',
                            theme: 'solarized',
                            background: '#ffffff',
                            color: '#000000',
                        }}
                    />
                </div>

                <h1 className="text-[1.5rem] mt-4">Output</h1>

                <div className="bg-gray-100 rounded-md p-4 mt-4">
                    <Preview code={newCode}/>
                </div>
            </div>
        </>
    )
}
