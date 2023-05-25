"use client";

import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import {animated, useSpring} from '@react-spring/web';
import useSlideAnimation from '@/hooks/useSlideAnimation';
export default function Attributes() {

    const [spring, api] = useSlideAnimation();
    
    return (
        <animated.div style={...spring} key={spring.key}>
            <h1 className="text-[1.5rem]">Introduction to HTML Attributes</h1>
            <p className="mt-2">
                HTML attributes are used to provide additional information about an HTML element. 
                They are used to modify the properties of HTML elements, such as the appearance or behavior of a web page. 
                Attributes can be specified in an opening tag to make certain changes in an element's behavior.
            </p>

            <h1 className="text-[1.5rem] mt-10"> Basic Syntax of HTML Attributes </h1>
            <p className="mt-2">HTML attributes consist of three different parts:</p>
            <ol className="mt-2 list-decimal ml-10">
                <li> The name of the attribute </li>
                <li> An equal sign (=) </li>
                <li> The attribute value, which is enclosed in quotation marks (" "). </li>
            </ol>

            <p className="mt-4"> The basic syntax of an attribute looks like this:</p>
            <CodeBlock
                code={`<element attribute="value">Content that the attribute modifies</element>`}
                language="html"
                
            />

            <p className="mt-4"> Here's an example:</p>
            <CodeBlock
            code={`<p align="center">This paragraph is centered.</p>`}
            language="html"
            showCodeEditor={true}
            />

            <p className="mt-2"> In this example, the align attribute is used in the opening tag of the p element. 
                The attribute value is "center," 
                which means that the paragraph's content will be centered on the page.
            </p>

            <h1 className="mt-10 text-[1.5rem]">Common HTML Attributes</h1>
            <p className="mt-2">Here are some basic HTML attributes you will need to know:</p>

            <h1 className="text-[1.5rem] mt-10">Class</h1>
            <p className="mt-2"> The class attribute is used to define a class name for an HTML element. Class names are used in CSS to apply styles to specific HTML elements.</p>
            <CodeBlock
            code={`<p class="my-class">This paragraph has the "my-class" class.</p>`}
            language="html"
            />

            <h1 className="mt-10 text-[1.5rem]"> Id </h1>
            <p className="mt-2"> The id attribute is used to define a unique identifier for an HTML element. Ids can be used to target specific elements with JavaScript or CSS.</p>
            <CodeBlock
            code={`<p id="my-id">This paragraph has the "my-id" id.</p>`}
            language="html"
            showCodeEditor={true}
            />

            <h1 className="text-[1.5rem] mt-10">Style</h1>
            <p className="mt-2">The style attribute is used to specify CSS styles for an HTML element.</p>
            <CodeBlock
            code={`<p style="color: blue; font-size: 18px;">This paragraph is blue and has a font size of 18 pixels.</p>`}
            language="html"
            showCodeEditor={true}
            />

            <h1 className="text-[1.5rem] mt-10">Src</h1>
            <p className="mt-2">The src attribute is used to specify the URL of an external resource, such as an image.</p>
            <CodeBlock
                code={`<img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600" alt="My Image">`}
                language={'html'}
                showCodeEditor={true}
            />

            <h1 className="text-[1.5rem] mt-10">Href</h1>
            <p className="mt-2">The href attribute is used to specify the URL of a hyperlink.</p>
            <CodeBlock
            code={`<a href="https://twitter.com">This is a link</a>`}
            language="html"
            showCodeEditor={true}
            />
            
            <h1 className="text-[1.5rem] mt-10">Width and Height</h1>
            <p className="mt-2">The width and height attributes are used to specify the width and height, respectively, of an HTML element.</p>
            <CodeBlock
            code={`<img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600" alt="My Image" width="300" height="200">`}
            language="html"
            showCodeEditor={true}
            />

            <h1 className="text-1.5rem] mt-10">Conclusion</h1>
            <p className="mt-2">
                In conclusion, HTML attributes are used to modify the properties of HTML elements.
                They help developers and designers create a visually appealing and well-structured web page. 
                In this part, we covered the basics of HTML attributes, the syntax, 
                and some of the most common HTML attributes that beginners need to know. 
                Keep practicing and experimenting with HTML attributes, 
                and you'll master this skill in no time.
            </p>

        </animated.div>
    )
}
