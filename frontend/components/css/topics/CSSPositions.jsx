import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSPositions() {

    return (
        <div>
            <h1> CSS position property</h1>
            <p>
                The position property in CSS is used to control an element's position in the HTML document. It includes several values that allow developers to place elements at specific locations on the page, or relative to other elements.
            </p>

            <h2> Values </h2>
            <p> The position property has four different values: </p>

            <h2> 1. Static </h2>
            <p>
            The default value of the position property is static. This means that the element is positioned according to the normal flow of the HTML document, and cannot be moved with any of the other positioning properties.
            </p>

            <CodeBlock
            code={`
            <!DOCTYPE html>
<html>
    <head>
        <title>Static Example</title>
        <style>
            .static1 {
                background-color: blue;
                color: white;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <h1>Static Example</h1>
        <p>This is a paragraph with a <span class="static1">static element</span> inside it.</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> 2. Relative </h2>
            <p>
                An element with a position of relative is positioned relative to its normal position in the HTML document. You can then use the top, right, bottom, and left properties to move the element in any direction.
            </p>
            <CodeBlock
            code={`
            <!DOCTYPE html>
<html>
    <head>
        <title>Relative Example</title>
        <style>
            .relative1 {
                position: relative;
                left: 50px;
                top: 25px;
                background-color: green;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <h1>Relative Example</h1>
        <p>This is a paragraph with a <span class="relative1">relative element</span> inside it.</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> 3. Absolute </h2>
            <p>
                An element with a position of absolute is positioned relative to its closest positioned ancestor element. If there is no positioned ancestor, then the element is positioned relative to the initial containing block. You can use the top, right, bottom, and left properties to move the element.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Absolute Example</title>
        <style>
            #container {
                position: relative;
                height: 200px;
                width: 200px;
                background-color: gray;
            }
            .absolute1 {
                position: absolute;
                top: 50px;
                right: 50px;
                background-color: red;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <h1>Absolute Example</h1>
        <div id="container">
        <p>This is a paragraph inside a container with an <span class="absolute1">absolute element</span> inside it.</p>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> 4. Fixed </h2>
            <p>
                An element with a position of fixed is positioned relative to the viewport (the window that the user is viewing the page in). This means that if the user scrolls the page, the element will stay in the same place on the window. You can use the top, right, bottom, and left properties to move the element.
            </p>

            <CodeBlock
            code={`
            <!DOCTYPE html>
<html>
    <head>
        <title>Relative Example</title>
        <style>
            .relative2 {
                position: relative;
                left: 50px;
                top: 25px;
                background-color: green;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <h1>Relative Example</h1>
        <p>This is a paragraph with a <span class="relative2">relative element</span> inside it.</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> 3. Absolute </h2>
            <p>
                An element with a position of absolute is positioned relative to its closest positioned ancestor element. If there is no positioned ancestor, then the element is positioned relative to the initial containing block. You can use the top, right, bottom, and left properties to move the element.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Fixed Example</title>
        <style>
            .fixed {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: purple;
                color: white;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <h1>Fixed Example</h1>
        <p>This is a paragraph with a <span class="fixed">fixed element</span> inside it.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa eros, posuere non convallis ut, viverra non felis. Sed rhoncus ipsum et lacus ullamcorper, congue pharetra nibh euismod. ...</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Conclusion </h1>
            <p>
                In summary, the position property in CSS allows developers to control the positioning of HTML elements on a page. It comes with several values, including static, relative, absolute, and fixed, each of which allows for different positioning behavior. By understanding these values, developers can create more dynamic and visually appealing web pages.
            </p>

        </div>
    )
}
