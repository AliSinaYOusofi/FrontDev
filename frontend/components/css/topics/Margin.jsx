import CodeBlock from '@/components/Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation'
import React from 'react'
import { animated } from '@react-spring/web';

export default function Margin() {

    const [spring] = useSlideAnimation();
    return (
        <animated.div style={spring}>
            <h1> CSS Margin Property </h1>
            <p>
                CSS margin property is used to add space (or margin) around an HTML element's border. It defines the distance between the element's border and the adjacent elements as well as document area margins.
            </p>

            <h2> The Basic Syntax of Margin Property </h2>
            <p>
                The margin property has four values: margin-top, margin-right, margin-bottom, and margin-left. These four values can be written separately or combined into a single shorthand value.
            </p>
            <CodeBlock
            code={`
/* Separate properties */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;

/* Shorthand property */
margin: 10px 20px 30px 40px;
            `}
            language="css"
            onlyCode={true}
            />
            <p> The order of the values for the shorthand property is: top, right, bottom, left. </p>

            <h2> CSS margin-top</h2>
            <p>
                The margin-top property sets the top margin of an element. Here's an example:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Margin-Top Property Example</title>
        <style>
            .margin-top-example {
                margin-top: 20px;
                padding: 10px;
                background-color: pink;
            }
        </style>
    </head>
    <body>
        <p> Hello CSS margins </p>
        <div class="margin-top-example">This element has a margin-top of 20px</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p> In this example, we've created a CSS class called .margin-top-example that sets the margin-top property to 20px, adds some padding for spacing, and sets a background color for visibility.</p>

            <h2>CSS margin-bottom</h2>
            <p>
                The margin-bottom property sets the bottom margin of an element. Here's an example:
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Margin-Bottom Property Example</title>
        <style>
            .margin-bottom-example {
                margin-bottom: 20px;
                padding: 10px;
                background-color: lightgreen;
            }
        </style>
    </head>
    <body>
        <div class="margin-bottom-example">This element has a margin-bottom of 20px</div>
        <p> Hello CSS margins </p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we've created a CSS class called .margin-bottom-example that sets the margin-bottom property to 20px, adds some padding for spacing, and sets a background color for visibility.
            </p>

            <h2> CSS margin-left </h2>
            <p>
                The margin-left property sets the left margin of an element. Here's an example:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Margin-Left Property Example</title>
        <style>
            .margin-left-example {
                margin-left: 20px;
                padding: 10px;
                background-color: lightblue;
            }
        </style>
    </head>
    <body>
        <div class="margin-left-example">This element has a margin-left of 20px</div>
        <span> Hello margin-left </span>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we've created a CSS class called .margin-left-example that sets the margin-left property to 20px, adds some padding for spacing, and sets a background color for visibility.
            </p>

            <h2> CSS margin-right </h2>
            <p> The margin-right property sets the right margin of an element. Here's an example: </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
    <html>
    <head>
        <title>Margin-Right Property Example</title>
        <style>
            .margin-right-example {
                margin-right: 20px;
                padding: 10px;
                background-color: lightyellow;
                color: black
            }
        </style>
    </head>
    <body>
        <span> Hello margin-left </span>
        <div class="margin-right-example">This element has a margin-right of 20px</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we've created a CSS class called .margin-right-example that sets the margin-right property to 20px, adds some padding for spacing, and sets a background color for visibility.
            </p>

            <h2> 
                CSS Shorthand margin property
            </h2>
            <p>
                The shorthand margin property sets all four margins in one declaration. Here's an example:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
    <html>
    <head>
        <title>Margin Shorthand Property Example</title>
        <style>
            .margin-example {
                margin: 20px;
                padding: 10px;
                background-color: lightgray;
            }
        </style>
    </head>
    <body>
        <div class="margin-example">This element has margins of 20px</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we've created a CSS class called .margin-example that uses the shorthand margin property to set all four margin values to 20px, adds some padding for spacing, and sets a background color for visibility.
            </p>

            <h2> CSS Margin Collapse</h2>
            <p>
                When two elements are stacked on top of each other and have margins, the top element's margin collapses with the bottom one. When two margins collapse, the larger one wins and the smaller one is ignored.
            </p>

            <p>
            Here's an example to demonstrate the margin collapse:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Margin Collapse Example</title>
        <style>
            .container {
                background-color: lightgray;
                padding: 20px;
            }

            .element1 {
                background-color: white;
                border: 1px solid black;
                margin: 10px;
                padding: 10px;
                color: blue
            }

            .element2 {
                background-color: white;
                border: 1px solid black;
                margin: 5px;
                padding: 10px;
                color: red;
            
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="element1">Element 1</div>
            <div class="element2">Element 2</div>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we've created a container div that has a light gray background color and 20px of padding. We've added two child elements (div elements) to the container, both with 10px of margin and 10px of padding. The only difference between the two is that element2 has a margin of 5px instead of 10px.
            </p>

            <h1> Conclusion </h1>
            <p>
                CSS margin property is a powerful way to add space around your HTML elements. Whether you use separate properties or shorthand notation, margin is a great way to enhance the design of your web pages. However, be aware of margin collapse, and how it can affect the spacing between elements. By understanding these concepts, you'll be able to create beautiful and well-spaced layouts for your website.
            </p>
        </animated.div>
    )
}
