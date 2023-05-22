"use client";
import {animated, useSpring} from '@react-spring/web';
import React from 'react'
import CodeBlock from '../Code Block/CodeBlock';
export default function Introduction() {
    
    const [spring, api] = useSpring(
        () => ({
            from: { 
                x: -100,
                opacity: 0
            },
            to: { 
                x: 0,
                opacity: 1,
            },
            config: {
                damping: 400,
                clamp: true,
                tension: 50,
                friction: 10
            }
        }),
        
    )

    return (
        <animated.div key={spring.key} style={...spring} className="introduction_container">
            <div>
                <h1 className="content_header text-[1.5rem]">Introduction to HTML</h1>
                <p className="mt-2 paragraph">
                    HTML, or HyperText Markup Language, is a computer language that's 
                    used to create and structure content on the internet. It's the backbone of 
                    every website and is used to define how a web page looks and what it contains.
                </p>
            </div>

            <div>
                <h1 className="content_header text-[1.5rem]  mt-10">
                    Basic HTML structure
                </h1>
                <p className="paragraph mt-2">
                    HTML files contain a structured set of code that computers can read and interpret as a webpage. 
                    Here's the basic structure of an HTML document:
                </p>
                <CodeBlock code={`
    <!DOCTYPE html>
        <html>
            <head>
                <title>Page Title</title>
            </head>
            <body>
                <h1>This is a Heading</h1>
                <p>This is a paragraph.</p>
            </body>
        </html>`
                } 
                    language="html"
                    showCodeEditor={true}
                />

                <h2 className="h2_content mt-4"> Let's break this down: </h2>
                <ol className="list-decimal ml-10 mt-2">
                    <li> The {"<"}!DOCTYPE html{">"} declaration at the beginning defines the version of HTML that's being used.</li>
                    <li>The html element is the root element of an HTML page. It contains all the other elements.</li>
                    <li>The head element contains meta information about the document, such as the title of the page that appears in the browser tab.</li>
                    <li>The title element is a sub-element of the head element and defines the title of the page.</li>
                    <li>The body element contains the main content of the document, such as headings, paragraphs, images, etc.</li>
                    <li>The h1 and p elements are examples of HTML elements that can be used to display text on a webpage.</li>
                </ol>
            </div>
            <div>
                <h1 className="content_header text-[1.5rem] mt-10">HTML elements</h1>
                <p className="paragraph mt-2">
                    HTML is made up of a set of elements that define the structure and content of a webpage. 
                    HTML elements are used to define the structure of a webpage and to display content. 
                    Each element has a specific meaning or purpose. 
                    Here are some examples of common HTML elements:
                </p>
                
                <ul className="list-disc ml-10 mt-2">
                    <li>h1 -  A heading element that is used to create a large, bold title for a section of text.</li>
                    <li>h2 - A heading element that is used to create a smaller, bold title for a section of text.</li>
                    <li>h3 - A heading element that is used to create an even smaller, bold title for a section of text.</li>
                    <li>p - A paragraph element that is used to create a block of text.</li>
                    <li>ul - An unordered list element that is used to create a list of items with bullet points. An unordered list element that is used to create a list of items.</li>
                    <li>ol - An ordered list element that is used to create a list of items with numbers.</li>
                    <li>img -  An image element that is used to display an image on a web page.</li>
                    <li>a - A link element that is used to create a link to another web page or resource.</li>
                    <li>div - A generic container element that can be used to hold other elements.</li>
                    <li>span - An inline container element that can be used to hold other elements.</li>
                </ul>

                
                <h2 className="h2_content mt-10">HTML elements are usually written using a start tag and an end tag, like this:</h2>
                <CodeBlock code={`<p>This is a paragraph.</p>`} language="html" showCodeEditor={true}/>
                <p className="paragraph mt-2">
                    The start tag {"(<p>)"} tells the browser where the element begins, and the end tag {"(</p>)"} tells the browser where the element ends. The content between the start and end tags is the content of the element.
                </p>
            </div>

            <div>
                <h1 className="content_header text-[1.5rem] mt-10">HTML attributes</h1>
                <p className="paragraph mt-2"> HTML elements can also have attributes that provide additional information about the element. <br />Here are some examples of common HTML attributes: </p>
                
                <ul className="list-disc ml-10 mt-2">
                    <li >class - a class name that can be used to apply styles to the element. </li>
                    <li >id - a unique identifier for the element.</li>
                    <li >href - the URL of a link element.</li>
                </ul>

                <h2 className="h2_content mt-2">Attributes are added to the start tag of an element, like this:</h2>
                <CodeBlock code={`<a href="https://www.twitter.com">Twitter Link</a>`} language={"html"} showCodeEditor={true}/>
            </div>

            <div>
                <h1 className="content_header text-[1.5rem] mt-10">Conclusion</h1>
                <p className="paragraph mt-2">
                    HTML is a fundamental building block of the internet. 
                    Understanding its basic structure, elements, and attributes is key to 
                    creating web pages that are well-structured and easy to use. By using HTML properly, 
                    you can create engaging web pages that deliver value to your audience.
                </p>
            </div>
        </animated.div>
    )
}
