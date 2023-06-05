import CodeBlock from '@/components/Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation'
import React from 'react'
import { animated } from '@react-spring/web'

export const Selectors = () => {
    
    const [spring] = useSlideAnimation();
    
    return (
        <animated.div style={spring}>

            <h1> What are CSS Selectors? </h1>
            <p>
                CSS Selectors are used to choose and style specific elements in a HTML document. A CSS selector selects the HTML element(s) that you want to style. There are several types of selectors in CSS:
            </p>
            <ul className="md:ml-20 ml-10 list-disc">
                <li> Type Selector </li>
                <li>Class Selector</li>
                <li>ID Selector</li>
                <li>Attribute Selector</li>
                <li>Pseudo-class Selector</li>
                <li>Pseudo-elements Selector</li>
            </ul>

            <h1> Type Selector </h1>
            <p> The type selector is used to select elements with a specified tag name. For example, if we want to select all paragraph elements on a web page, we can use the following code:</p>
            <CodeBlock code={`
<html>
    <head>
        <style>
            h3 {
                color: red;
            }
        </style>
    </head>

    <body>
        <h3> Hello world css selectors </h3>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            This code will make all paragraph elements on the web page appear in red.

            <h1> Class Selector </h1>
            <p>The class selector is used to select elements with a specific class attribute. A class selector is preceded by a period (.) character. For example, let’s say we have some HTML code that looks like this:</p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <style>
            .heading {
                color: red;
            }
        </style>
    </head>

    <body>
        <h4 class="heading"> This will be red </h4>
        <h4 > This will be not be red </h4>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1>CSS ID Selector</h1>
            <p>
            The ID selector is used to select elements with a specific ID attribute. An ID selector is preceded by a hash (#) character. For example, let’s say we have some HTML code that looks like this:The ID selector is used to select elements with a specific ID attribute. An ID selector is preceded by a hash (#) character. For example, let’s say we have some HTML code that looks like this:
            </p>
            <CodeBlock
            code={`

<!DOCTYPE html>
<html>
    <head>
        <title>My Website</title>
        <style>
            #span {
                color: orange;
            }

            h2 {
                color: red
            }
        </style>
    </head>
    <body>
        <h2 id="span">This text will be orange.</h2>
        <h2>This text will not be orange. it will be red.</h2>
    </body>
</html>
                        
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Attribute Selector </h1>
            <p>The attribute selector is used to select elements based on their attributes. We can select elements based on their attribute name, value, or a combination of name and value. There are four different types of attribute selectors:</p>
            <ul className="md:ml-20 ml-10 list-disc">
                <li>[attribute] – Selects all elements that have the specified attribute name.</li>
                <li>[attribute=value] – Selects all elements that have the specified attribute and value.</li>
                <li>[attribute~=value] – Selects all elements that have the specified attribute and value within a space-separated list of values.</li>
                <li>[attribute|=value] – Selects all elements that have the specified attribute and value within a hyphen-separated list of values.</li>
            </ul>

            <p> Let's take the following example: </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>My Website</title>
        <style>

        a[href="https://google.com"] {
            color: green;
        }

        a[href="https://bing.com"] {
            color: blue;
        }

        a[href="https://yahoo.com"] {
            color: orange;
        }
        </style>
    </head>
    <body>
        <a href="https://google.com">Google</a>
        <a href="https://bing.com">Bing</a>
        <a href="https://yahoo.com">Yahoo</a>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Pseudo-classes </h1>
            <p>
                Pseudo-classes are used to select elements based on their state or position. Some examples of pseudo-classes are :hover, :active, :focus, :first-child, and :last-child. Let’s say we have some HTML code that looks like this:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>My Website</title>
        <style>
            .item:hover {
                background-color: green;
            }
        </style>
    </head>
    <body>
        <ul>
            <li class="item">Item 1</li>
            <li class="item">Item 2</li>
            <li class="item">Item 3</li>
        </ul>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p> This code will make the background-color of the first list item element turn yellow when it is hovered. </p>
            
            <h1> Pseudo-elements </h1>
            <p>Pseudo-elements are used to style specific parts of an element. Some examples of pseudo-elements are ::before, ::after, and ::first-letter. Let’s say we have some HTML code that looks like this:</p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>My Website</title>
        <style>
            h6::first-letter {
                font-size: 2em;
                font-weight: bold;
                color: red;
            }
        </style>
    </head>
    <body>
        <h6> First letter is in red. </h6>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>This code will make the first letter of the {"<h6>"} element appear in bold, red, and twice the size of the rest of the text.</p>
            <h1> Conclusion </h1>
            <p>
            CSS Selectors are a powerful tool for styling web pages. By using these selectors, we can apply custom styles to specific elements on a web page, making our pages more visually appealing.
            </p>
        </animated.div>
    )
}
