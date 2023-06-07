import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function PseudoClasses() {

    return (
        <div>
            <h1>Pseudo Classes</h1>
            <p>
                CSS pseudo-classes are selectors that are used to select elements based on their state or behavior. These selectors have a specific syntax and are added to the end of a selector to style a specific state or behavior of an element.
            </p>

            <p>
            Here are some of the most commonly used pseudo-classes in CSS:
            </p>

            <h2> :hover pseudo-classes </h2>
            <p>
                The :hover pseudo-class is used to select an element when the user hovers over it with their mouse.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Hover Example</title>
        <style>
            /* Change the background color of a button when the user hovers over it */
            .button:hover {
                background-color: blue;
            }
        </style>
    </head>
    <body>
        <button class="button">Click me</button>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
            In this example, the background color of the button element will change to blue when the user hovers over it.            </p>

            <h2> :active pseudo-classes</h2>
            <p>
                The :active pseudo-class is used to select an element when it is being clicked or activated.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Active Example</title>
        <style>
            /* Change the background color of a button when it is being clicked */
            .button1:active {
                background-color: red;
            }
        </style>
    </head>
    <body>
        <button class="button1">Click me</button>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
            In this example, the background color of the button element will change to red while it is being clicked.
            </p>

            <h2> :focus pseudo-classes</h2>
            <p>
                The :focus pseudo-class is used to select an element when it has focus, such as when a user is interacting with it via keyboard navigation.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Focus Example</title>
        <style>
            /* Change the border of an input element when it has focus */
            .input:focus {
                border: 1px solid blue;
            }
        </style>
    </head>
    <body>
        <input class="input" type="text" placeholder="Type something...">
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, the border of the input element will change to blue when it has focus.
            </p>

            <h2> :first-child pseudo-classes</h2>
            <p>
                The :first-child pseudo-class is used to select the first child element of a parent element.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>First Child Example</title>
        <style>
            /* Make the first li element of a ul element bold */
            .ul_list li:first-child {
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <ul class="ul_list">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
        </ul>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, the first li element of a ul element will have its font weight set to bold.
            </p>

            <h2> :last-child pseudo-classes</h2>
            <p>
                The :last-child pseudo-class is used to select the last child element of a parent element.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Last Child Example</title>
        <style>
            /* Make the last li element of a ul element red */
            .ul_list1 li:last-child {
                color: red;
            }
        </style>
    </head>
    <body>
        <ul class="ul_list1">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
        </ul>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
            In this example, the last li element of a ul element will have its color set to red.
            </p>

            <h2> :nth-child(n) pseudo-classes</h2>
            <p>
            The :nth-child(n) pseudo-class is used to select the nth child element of a parent element.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Nth Child Example</title>
        <style>
            /* Make all odd numbered li elements of a ul element gray */
            .ul_list2 li:nth-child(odd) {
                background-color: gray;
            }
        </style>
    </head>
    <body>
        <ul class="ul_list2">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
            <li>Fourth item</li>
            <li>Fifth item</li>
        </ul>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, all odd numbered li elements of a ul element will have their background color set to gray.
            </p>

            <h2> :nth-of-type(n) pseudo-classes</h2>
            <p>
                The :nth-of-type(n) pseudo-class is used to select the nth element of a specific type within its parent element.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Nth of Type Example</title>
        <style>
            /* Make the third li element of a ul element purple */
            .ul_list3 li:nth-of-type(3) {
                color: purple;
            }
        </style>
    </head>
    <body>
        <ul class="ul_list3">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
            <li>Fourth item</li>
            <li>Fifth item</li>
        </ul>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            
            <p>
                In this example, the third li element of a ul element will have its color set to purple.
            </p>

            <h1> Conclusion </h1>
            <p>
                CSS pseudo-classes are used to style elements based on their state or behavior. The most commonly used pseudo-classes are :hover, :active, :focus, :first-child, :last-child, :nth-child(n), and :nth-of-type(n). By using these pseudo-classes, developers can create more interactive and dynamic web pages.
            </p>
        </div>
    )
}
