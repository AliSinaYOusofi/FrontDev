import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import { useSpring, animated } from '@react-spring/web'
import useSlideAnimation from '@/hooks/useSlideAnimation'

export default function Paragraphs() {

    const [spring, api] = useSlideAnimation();
    
    return (
        <animated.div style={...spring} key={spring.key}>

            <h1 className="text-[1.5rem]"> HTML Paragraphs </h1>
            <p className="mt-2">
                A paragraph is a block of text that contains one or more sentences and is separated from other paragraphs by a blank line or some other visual cue, such as indentation or vertical space.
            </p>

            <p className="mt-4">
                To create a paragraph in HTML, we use the {"<p>"} element. For example, to create a web page with a single paragraph that says "Hello, world!", we would use the following HTML code:
            </p>
            <CodeBlock
            code={`
    <!DOCTYPE html>
    <html>
        <head>
            <title>My First Web Page</title>
        </head>
        <body>
            <p>Hello, world!</p>
        </body>
    </html>
            `}
            language="html"
            showCodeEditor={true}
            />

            

            <p className="mt-4">
                We can also add multiple paragraphs to a web page by using the {"<p>"} element multiple times. For example, if we wanted to create a page with three paragraphs that say "This is the first paragraph.", "This is the second paragraph.", and "This is the third paragraph.", we would use the following code:
            </p>

            <CodeBlock
            code={`
    <!DOCTYPE html>
    <html>
        <head>
            <title>My Second Web Page</title>
        </head>
        <body>
            <p>This is the first paragraph.</p>
            <p>This is the second paragraph.</p>
            <p>This is the third paragraph.</p>
        </body>
    </html>
            `}
            language={"html"}
            showCodeEditor={true}
            />

            <h1 className="mt-10 text-[1.5rem]"> Displaying text in different ways. </h1>
            <p className="mt-2">In addition to the {"<p>"} tag, there are other tags that can be used to display text in different ways. One of these is the {"<pre />"} tag, which is short for "preformatted text".</p>

            <h1 className="mt-5 text-[1.5rem]"> The {"<pre>"} tag </h1>
            <p className="mt-2">
                The {"<pre />"} tag is used to display text exactly as it appears in the source code, including whitespace and line breaks. This can be useful for displaying code snippets, ASCII art, or other text that requires precise formatting. For example, if we wanted to display a block of code on our web page, we would use the following code:
            </p>
            <CodeBlock
            code={`
    <!DOCTYPE html>
    <html>
        <head>
            <title>My Third Web Page</title>
        </head>
        <body>
            <pre>
            This is some
            preformatted
            text.
            </pre>
        </body>
    </html>
            `}
            language={"html"}
            showCodeEditor={true}
            />

        <h1 className="mt-5 text-[1.5rem]"> The {"<hr />"} tag </h1>
        <p className="mt-2">
            The {"<hr />"} tag is another HTML element that can be used to separate content. {"<hr />"} is short for "horizontal rule", and it is used to create a horizontal line that visually separates two sections of content. For example, if we wanted to separate two paragraphs on our web page, we could use the following code:
        </p>
        <CodeBlock
        code={`
    <!DOCTYPE html>
    <html>
        <head>
            <title>My Fourth Web Page</title>
        </head>
        <body>
            <p>This is the first paragraph.</p>
            <hr />
            <p>This is the second paragraph.</p>
        </body>
    </html>
        `}
        language="html"
        showCodeEditor={true}
        />

        <h1 className="text-[1.5rem] mt-5"> The {"<br />"} tag </h1>
        <p className="mt-2">
            The {"<br />"} tag is another HTML element that can be used to separate content. {"<br />"} is short for "break", and it is used to create a line break. For example, if we wanted to separate two paragraphs on our web page, we could use the following code:</p>
        
        <CodeBlock
        code={
            `
    <!DOCTYPE html>
    <html>
        <head>
            <title>My Fifth Web Page</title>
        </head>
        <body>
            <p>This is the first paragraph.</p>
            <br />
            <p>This is the second paragraph.</p>
        </body>
    </html>
            `
        }
        language="html"
        showCodeEditor={true}
        />
        

        <h1 className="mt-10 text-[1.5rem]">Conclusion</h1>
        <p className="mt-2">
            In summary, HTML paragraphs are an essential part of web design and allow us to display text in a clear and readable format. By using the {"<p>"} tag, we can create paragraphs of any length and style them as needed. In addition, we can use other HTML tags like {"<pre />"} and {"<hr />"} to display text in different ways and separate content on the page. With some knowledge of HTML and CSS, we can create beautiful and effective web pages that communicate our message to the world.
        </p>
        </animated.div>
    )
}
