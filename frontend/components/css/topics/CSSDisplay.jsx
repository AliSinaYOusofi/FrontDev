import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSDisplay() {

    return (
        <div>

            <h1> CSS Display </h1>
            <p>
                Before diving inot display property let's the difference btween inline and block elments
            </p>

            <h2> Block-Level Elements </h2>
            <p>
                Block-level elements are those that take up the entire width available to them in a browser. They always start on a new line and create a new block of content. Some examples of block-level elements are {"<div>, <h1>, <p>, <ul>, <ol>, <li>, <table>, and <form>"}.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Block-level Example</title>
        <style>
        .block1 {
            background-color: darkgray;
            border: 1px solid black;
            padding: 10px;
        }
        </style>
    </head>

    <body>
        <h1>Block-level Example</h1>
        <div class="block1">
            <p>This is a block-level element. It takes up the full width of its parent container and always starts on a new line.</p>
            <p>Another block-level element here. Notice that it also takes up the full width of its parent container.</p>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we have a div element with a class of block. This div element is a block-level element and takes up the full width of its parent container. We've added a yellow background color, a black border, and 10 pixels of padding to the div element using the .block CSS class.
            </p>

            <h2> Inline Elements </h2>
            <p>
                Inline elements are those that only take up the necessary space required to display their content. They do not start on a new line and are used for smaller chunks of content. Some examples of inline elements are {"<span>, <a>, <img>, <strong>, and <em>."}
            </p>

            <p>
                Here's an example of inline elements in action:
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Inline Example</title>
        <style>
            .inline {
                background-color: red;
                border: 1px solid black;
                padding: 10px;
            }
        </style>
    </head>

    <body>
        <h1>Inline Example</h1>
        <p>Here is some text and an inline element: <span class="inline">an inline element</span>. Notice that the inline element only takes up the amount of space required to display its contents, and does not start on a new line.</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we have a span element with a class of inline. This span element is an inline element and only takes up the amount of space required to display its contents. We've added a yellow background color, a black border, and 10 pixels of padding to the span element using the .inline CSS class. Notice that the inline element does not start on a new line and is displayed within the flow of the text.
            </p>

            <h1> Display and Visibility Properties </h1>
            <p>
                HTML elements on a webpage are typically displayed as either a block, inline, or inline-block element. However, we can control how HTML elements are displayed using the display property in CSS. The visibility property, on the other hand, controls whether an HTML element is visible or hidden on a webpage.
            </p>

            <h2>CSS Display Property </h2>
            <p>
                The display property controls how HTML elements are displayed on a webpage. By default, elements are displayed as either block, inline, or inline-block. These are the most common values for the display property:
            </p>

            <ul className="ml-10 list-disc">
                <li> block - elements are displayed as a block that takes up the full width of the parent container and always starts on a new line.</li>
                <li>inline - elements are displayed inline and only take up the space required to display their contents.</li>
                <li>  inline-block - elements are displayed inline, but can also have a width and height specified like a block-level element. </li>
            </ul>

            <p>
            We can control how elements are displayed using the display property. Here's an example of how we can change the display value for a heading element:
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Display Property Example</title>
        <style>
            /* make h4 element display inline */
            .inline-p, .inline-h4 {
                display: inline;
            }
        </style>
    </head>
    
    <body>
        <h4 class="inline-h4">This heading is displayed inline</h4>
        <p class="inline-p">This is some text that comes after the heading.</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we've changed the h1 element to be displayed as inline instead of its default block display value. This allows the heading to be displayed inline with other elements on the webpage rather than starting on a new line.
            </p>

            <h2> Visibility Property </h2>
            <p>
                The visibility property controls whether an HTML element is visible or hidden on a webpage. The visibility property can take two values: visible (default) or hidden.
            </p>

            <p>
            Here's an example of how we can use the visibility property to hide an HTML element:
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Visibility Property Example</title>
        <style>
            /* hide the p element by default */
            .p {
                visibility: hidden;
            }
        
            /* make the p element visible on hover */
            .division:hover p {
                visibility: visible;
            }
        </style>
    </head>
    
    <body>
        <h1>Visibility Property Example</h1>
        <div class="division">
            <p class="p">This paragraph will only be visible when the mouse hovers over the div element.</p>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, the p element is hidden by default using the visibility property. However, we can make the p element visible when the mouse hovers over the div element by changing the visibility property to visible using the :hover pseudoclass. This allows us to show and hide elements on a webpage as needed.
            </p>

            <h1> Conclusion </h1>
            <p>
                In conclusion, the display and visibility properties in CSS are useful tools for controlling how elements are displayed on a webpage. By changing the display value, we can control whether elements are displayed as block, inline, or inline-block. Meanwhile, the visibility property allows us to show and hide elements on a webpage as needed. By using these properties effectively, we can create well-structured and visually appealing webpages that are easy to navigate.
            </p>
            
        </div>
    )
}
