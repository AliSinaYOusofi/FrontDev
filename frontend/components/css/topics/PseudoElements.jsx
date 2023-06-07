import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function PseudoElements() {
    return (
        <div>
            <h1> CSS Pseudo-Elements </h1>
            <p>
                pseudo-elements are used to style different parts of an element. They allow developers to style elements beyond the actual HTML structures. It is important to note that pseudo-elements do not represent an actual HTML element and cannot be used to create new elements.
            </p>

            <p> Here are some of the most commonly used pseudo-elements in HTML: </p>

            <h2> ::before </h2>
            <p>
            The ::before pseudo-element is used to insert content before the content of an element.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Before Example</title>
        <style>
            /* Add an arrow before the link */
            .link::before {
                content: "➡️";
            }
        </style>
    </head>
    <body>
        <a href="#" class="link">Click me</a>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, an arrow will be added before the text of the link element using the ::before pseudo-element.
            </p>

            <h2> ::after </h2>
            <p>
                The ::after pseudo-element is used to insert content after the content of an element.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>After Example</title>
        <style>
            /* Add a heart icon after the text */
            .text::after {
                content: "❤️";
            }
        </style>
    </head>
    <body>
        <p class="text">I love coding</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, a heart icon will be added after the text of the p element using the ::after pseudo-element.
            </p>

            <h2> ::first-letter </h2>
            <p>
            The ::first-letter pseudo-element is used to select and style the first letter of a text.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>First Letter Example</title>
        <style>
            /* Make the first letter of a paragraph bigger */
            .first-letter::first-letter {
                font-size: 2em;
            }
        </style>
    </head>
    <body>
        <p class="first-letter">Lorem ipsum dolor sit amet.</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
            In this example, the first letter of the p element will have its font size set to 2em.
            </p>

            <h2> ::first-line </h2>
            <p>
                The ::first-line pseudo-element is used to select and style the first line of a text.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>First Line Example</title>
        <style>
            /* Make the first line of a paragraph blue */
            .first-line::first-line {
                color: blue;
            }
        </style>
    </head>
    <body>
        <p class="first-line">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
            In this example, the first line of the p element will have its color set to blue.
            </p>

            <h2> ::selection </h2>
            <p>
            The ::selection pseudo-element is used to style the portion of text that is selected by the user.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Selection Example</title>
        <style>
            /* Change the background color of selected text */
            .para::selection {
                background-color: yellow;
            }
        </style>
    </head>
    <body>
        <p class="para">Select a portion of this text to see the effect.</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, the background color of the selected text will be changed to yellow using the ::selection pseudo-element.
            </p>

            <h2> ::marker </h2>
            <p>
            The ::marker pseudo-element is used to style the marker of a list item, such as a bullet or number.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Marker Example</title>
        <style>
            /* Change the marker of a list item */
            .my-list li::marker {
                color: red;
                content: "✔️";
            }
        </style>
    </head>
    <body>
        <ul class="my-list">
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
            In this example, the marker of each list item will be changed to a checkmark icon and its color will be set to red using the ::marker pseudo-element. Note that this is not widely supported yet, so you may not see the actual checkmark icon with some browsers.
            </p>

            <h1> Conclusion </h1>
            <p>
            CSS pseudo-elements are powerful tools that can be used to style different parts of an element and allow for greater design flexibility. The most commonly used pseudo-elements are ::before, ::after, ::first-letter, ::first-line, ::selection, and ::marker. By understanding these pseudo-elements, developers can create more engaging and visually interesting web pages.
            </p>

            
        </div>
    )
}
