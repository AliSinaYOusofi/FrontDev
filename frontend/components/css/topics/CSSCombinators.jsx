import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSCombinators() {

    return (
        <div>

            <h1> CSS Combinators </h1>
            <p>
                CSS combinators are selectors used to select specific elements based on their relationship to other elements. There are four types of CSS combinators:
            </p>
            <ul className="ml-10 list-disc">
                <li> Descendant Selector (space) </li>
                <li>Child Selector ({">"})</li>
                <li>Adjacent Sibling Selector (+)</li>
                <li>General Sibling Selector (~)</li>
            </ul>

            <h2> Descendant Selector </h2>
            <p>
                The descendant selector selects all elements that are descendants of a specified parent element. The selector is created by typing a space between the parent and child elements.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Descendant Selector Example</title>
        <style>
            .parent p {
                color: red;
            }
        </style>
    </head>
    <body>
        <h1>Descendant Selector Example</h1>

        <div class="parent">
            <p>This text will be red</p>
            <span>This text will not be red</span>
            <ul>
                <li><a href="#">This text will also be red</a></li>
            </ul>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In the example above, all p elements that are descendants of the .parent element, will be colored red.
            </p>

            <h2> Child Selector</h2>
            <p>
                The child selector selects all direct child elements of a parent element. The selector is created by using the greater than sign ({">"}) between the parent and child elements.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Child Selector Example</title>
        <style>
            .parent1 > p {
                color: blue;
                background-color: green;
                border-radius: 10px;
                width: fit-content;
                padding: 5px;
            }
        </style>
        </head>
    <body>

        <h1>Child Selector Example</h1>
        <div class="parent1">
            <p>This text will be blue</p>
            <span>This text will not be blue</span>
            <ul>
                <li><a href="#">This text will also not be blue</a></li>
            </ul>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
            In the example above, only the p element that is a direct child of the .parent element, will be colored blue.
            </p>

            <h2> Adjacent Sibling Selector </h2>
            <p>
                The adjacent sibling selector selects the element that immediately follows a specific element. The selector is created by using the plus sign (+) between the two elements.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
    <title>Adjacent Sibling Selector Example</title>
    <style>
        .sibling + p {
            color: green;
        }
    </style>
    </head>

    <body>
        <h1>Adjacent Sibling Selector Example</h1>
        <p>Paragraph 1</p>
        <h2 class="sibling">Header 1</h2>
        <p>This text will be green</p>
        <h2>Header 2</h2>
        <p>This text will not be green</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In the example above, the p element that immediately follows the .sibling element, will be colored green.
            </p>

            <h2> General Sibling Selector </h2>
            <p>
                The general sibling selector selects all sibling elements that follow a specific element. The selector is created by using the tilde sign (~) between the two elements.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>General Sibling Selector Example</title>
        <style>
            /* Style all span elements that come after a h2 element */
            h2 ~ span {
                color: red;
            }
        </style>
    </head>

    <body>
        <h1>General Sibling Selector Example</h1>
        <h2>Heading 1</h2>
        <p>This text will not be red</p>
        <span>This text will be red</span>
        <p>This text will also be red</p>
        <span>This text will be red as well</span>
        <h2>Heading 2</h2>
        <p>This text will not be red</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
            In this example, all span elements that appear after h2 elements will have the color property set to red. The first span element and the following p element will have the color property set to red, but not the second span element because it appears after an h2 element.
            </p>

            <h1> Conclusion </h1>
            <p>
                CSS combinators help to target specific elements in an HTML document based on their relationship to other elements. The four types of CSS combinators are: descendant selector (space), child selector (greater than sign), adjacent sibling selector (plus sign), and general sibling selector (tilde sign). By understanding these selectors, developers can use more efficient and effective styles to achieve the desired layout of their web pages.
            </p>
            
        </div>
    )
}
