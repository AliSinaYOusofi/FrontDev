"use client";

import React from 'react'
import {animated, useSpring} from '@react-spring/web';
import CodeBlock from '../Code Block/CodeBlock';
import useSlideAnimation from '@/hooks/useSlideAnimation';

export default function Basics() {
    
    const [lessonsSprings, lessonAPI] = useSlideAnimation();

    return (
        <animated.div className="basics" key={lessonsSprings.key} style={...lessonsSprings}>
            <div>
                <h1 className="content_header text-[1.5rem]">HTML {"(Hypertext Markup Language)"}</h1>
                
                <p className="paragraph mt-2">
                    HTML stands for HyperText Markup Language. It is a markup language used to 
                    create and design web pages. With HTML, you can create a structured and organized layout for different types of content such as text, 
                    images, videos, and more.
                </p>
                <p className="paragraph mt-2">
                    HTML is the foundation of any web page, 
                    and it is essential that web developers and designers know how to use it.
                </p>
            </div>
            
            <div>
                <h1 className="content_header text-[1.5rem] mt-10">Basic Structure of HTML</h1>
                <p className="paragraph mt-2">
                    HTML documents have a specific structure that must be followed to ensure they 
                    function properly.
                </p>
                <CodeBlock 
                    code={`
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

                <h2 className="h2_content mt-4">Let's break this down:</h2>
                <ul className="list-disc ml-10 mt-2">
                    <li> &lt;!DOCTYPE html &gt; - This declaration tells the web browser that this is an HTML document.</li>
                    <li> &lt;html&gt; - This element is the container for all other HTML elements, and it signals the start of the HTML document.</li>
                    <li> &lt;head&gt; - This element contains meta information about the document, including the title, links to external stylesheets or scripts, and other data that isn't displayed on the page.</li>
                    <li> &lt;title&gt; -  This element defines the title of the document, which is displayed in the browser's title bar or tab.</li>
                    <li> &lt;body&gt; - This element contains all the visible content of the web page.</li>
                    <li> &lt;h1&gt; - This element is a heading, and it specifies the most important heading on the page.</li>
                    <li> &lt;p&gt; - This element is a paragraph, and it is used to display text.</li>
                </ul>
            </div>

            <div>
                <h1 className="content_header mt-10 text-[1.5rem]"> HTML Elements </h1>
                <p className="paragraph mt-2">
                    HTML elements are the building blocks of HTML documents. 
                    They are the smallest building blocks of a web page.
                </p>
            </div>

            <div>
                <h1 className="content_header mt-10 text-[1.5rem]">Headings</h1>
                <p className="paragraph mt-2">
                    Headings are used to create titles and subtitles on a webpage. 
                    There are six different levels of headings in HTML, from h1 to h6. The h1 tag is used for the most important 
                    heading, and the h6 tag is used for the least important heading.
                </p>

                <CodeBlock
                    code={`
    <h1>This is a Heading Level 1</h1>
    <h2>This is a Heading Level 2</h2>
    <h3>This is a Heading Level 3</h3>
    <h4>This is a Heading Level 4</h4>
    <h5>This is a Heading Level 5</h5>
    <h6>This is a Heading Level 6</h6>`
                    }
                    language="html"
                    showCodeEditor={true}
                />
            </div>

            <div>
                <h1 className="text-[1.5rem] mt-10">Paragraphs</h1>
                <p className="mt-1"> Paragraphs are used to display text on the webpage. You can create a paragraph using the p tag.</p>
                <CodeBlock 
                    code={` <p>This is a paragraph.</p>`} 
                    language="html" 
                />
            </div>

            <div>
                <h1 className="text-[1.5rem] mt-10">Links</h1>
                <p className="mt-1"> Links are used to navigate the webpage. You can create a link using the a tag.</p>
                <CodeBlock 
                    code={` <a href="https://www.google.com">This is a google link</a>`}
                    language="html"
                    showCodeEditor={true}
                />
            </div>

            <div>
                <h1 className="text-[1.5rem] mt-10">Images</h1>
                <p className="mt-1"> Images are used to display an image on the webpage. You can create an image using the img tag.</p>
                <CodeBlock 
                    code={` <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo"/>`}
                    language="html"
                    showCodeEditor={true}
                />
            </div>
            <div>
                <h1 className="text-[1.5rem] mt-10">Lists</h1>
                <p className="mt-1"> Lists are used to display a list of items on the webpage. You can create a list using the ul tag.</p>
                <CodeBlock 
                    code={` 
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>`
                    }
                    language="html"
                    showCodeEditor={true}
                />
            </div>

            <div>
                <h1 className="text-[1.5rem] mt-10">Divisions</h1>
                <p>
                    Divisions are used to create sections on a webpage. 
                    You can create a division using the div tag. Divisions can be styled using CSS to create unique layouts and styles.
                </p>

                <CodeBlock
                code={`
    <div class="division">
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
    </div>`
                }
                language="html"
                showCodeEditor={true}
                />
            </div>
            <div>
                <h1 className="text-[1.5rem] mt-10"> Wrap up</h1>
                <p className="mt-2">
                    In conclusion, HTML is an incredibly fundamental skill for web developers 
                    and designers. With HTML, you can create a structured and organized layout 
                    for various types of content. In this part, we covered the basic structure of 
                    HTML, common HTML elements, and organized them in a way that even beginners can 
                    learn quickly. Keep practicing, 
                    and you will surely become comfortable with HTML in no time.
                </p>
            </div>
        </animated.div>
    )
}
