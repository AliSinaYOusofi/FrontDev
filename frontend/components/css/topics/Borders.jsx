import CodeBlock from '@/components/Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation'
import React from 'react'
import { animated } from '@react-spring/web';
export default function Borders() {

    const [spring] = useSlideAnimation();

    return (
        <animated.div style={spring}>

            <h1> CSS Border Property </h1>
            <p>CSS (Cascading Style Sheets) is a language used for styling web pages. One of the most commonly used CSS properties is the border property, which is used to create borders around HTML elements.</p>

            <h2>
                The Basic Syntax of Border Property
            </h2>
            <p>
                The border property has three values: border-width, border-style, and border-color. These three values can be written separately or combined into a single shorthand value.
            </p>
            <CodeBlock
            code={`
/* Separate properties */
border-color: red;
border-width: 1px;
border-style: solid;

/* Shorthand property */
border: 1px solid red;
            `}
            language="css"
            onlyCode={true}
            />

            <p> The order of the values doesn't matter, but it is important to include all three values in the same order. </p>

            <h2> Border-Width Property </h2>
            <p> The border-width property specifies the width of the border. The value can be set in pixels, ems, rems, or any other CSS unit of measurement. The default value is medium.</p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Border-Width Property Example</title>
        <style>
            .border-example {
                border-style: solid;
                border-width: 5px;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <h1 class="border-example">Hello, world!</h1>
        <p class="border-example">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt dictum metus eu consequat.</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>In this example, we've created a CSS class called .border-example that sets the border style to solid and the border width to 5px. We've also added some padding to the elements to create some space between the content and the border.</p>

            <h2> Border-Style Property</h2>
            <p>
                The border-style property specifies the style of the border. The value can be one of the following: none, dotted, dashed, solid, double, groove, ridge, inset, or outset. The default value is none.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Border-Style Property Example</title>
        <style>
            
            .dashed {
                border-style: dashed;
                border-color: blue;
                border-width: 10px;
            }

            .dotted {
                border-width: 10px;
                border-style: dotted;
                border-color: green;
            }

            .solid {
                border-width: 10px;
                border-style: solid;
                border-color: red;
            }

            .double {
                border-width: 10px;
                border-style: double;
                border-color: purple;
            }

            .groove {
                border-width: 10px;
                border-style: groove;
                border-color: gray;
            }

            .ridge {
                border-width: 10px;
                border-style: ridge;
                border-color: orange;
            }

            .inset {
                border-width: 10px;
                border-style: inset;
                border-color: black;
            }

            .outset {
                border-width: 10px;
                border-style: outset;
                border-color: pink;
            }
        </style>
    </head>
    <body>
        <div class="dashed">Dashed border</div>
        <div class="dotted">Dotted border</div>
        <div class="solid">Solid border</div>
        <div class="double">Double border</div>
        <div class="groove">Groove border</div>
        <div class="ridge">Ridge border</div>
        <div class="inset">Inset border</div>
        <div class="outset">Outset border</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> Border-Color Property</h2>
            <p>
                The border-color property specifies the color of the border. The value can be any valid CSS color.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Border-Color Property Example</title>
        <style>
            .border-example {
                border-style: solid;
                border-width: 5px;
                border-color: red;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <h1 class="border-example">Hello, world!</h1>
        <p class="border-example">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt dictum metus eu consequat.</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we've created a CSS class called .border-example that sets the border style to solid, the border width to 5px, and the border color to red. We've also added some padding to the elements to create some space between the content and the border.
            </p>

            <p>
                This will create a solid, 5 pixel wide, red border around the content of each element.
            </p>

            <h2> Shorthand Border Property </h2>
            <p>
                The shorthand border property allows you to specify all three values in a single line of code. The values are specified in the following order: border-width, border-style, and border-color.
            </p>
            <CodeBlock code={`/* Shorthand property */ border: 1px solid red;`} language="css" onlyCode={true} />
            <p> This is equivalent to: </p>
            <CodeBlock 
            code={`
border-width: 1px;
border-style: solid;
border-color: red;`} 
            language="css" onlyCode={true} />

            <p> Here's an example of using the border shorthand property in CSS </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Border Shorthand Property Example</title>
        <style>
            .border-example {
                border: 5px solid red;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <h1 class="border-example">Hello, world!</h1>
        <p class="border-example">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt dictum metus eu consequat.</p>
    </body>
</html>
            `}
            language="Html"
            showCodeEditor={true}
            />

            <h2> Styling specific sides</h2>
            <p>We can use the border property to style the specific part of an element like so </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>One-Sided Border Example</title>
        <style>
            .top-border {
                border-top: 5px solid red;
                padding: 10px;
            }

            .right-border {
                border-right: 5px solid blue;
                padding: 10px;
            }

            .bottom-border {
                border-bottom: 5px solid green;
                padding: 10px;
            }

            .left-border {
                border-left: 5px solid orange;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <div class="top-border">Top border</div>
        <div class="right-border">Right border</div>
        <div class="bottom-border">Bottom border</div>
        <div class="left-border">Left border</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> Border Radius Property</h2>
            <p>
                border-radius is a CSS property that allows you to create rounded corners for an HTML element's border. It can be used to apply rounded corners to all four corners of an element, or to apply rounded corners to individual corners.
            </p>

            <p>
                The border-radius property has two values: border-radius-top-left, border-radius-top-right, border-radius-bottom-right, and border-radius-bottom-left. Each value can be set to a length, percentage, or inherit value.
            </p>
            <p>
                Here's an example of how you can use the border-radius property to create rounded corners on an element:
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Border-Radius Example</title>
        <style>
            .rounded {
                border: 1px solid orange;
                border-radius: 10px;
                padding: 20px;
            }
        </style>
    </head>
    <body>
        <div class="rounded">This element has rounded corners</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we've created a CSS class called .rounded that sets the border property to 1px solid black, adds 10px of border-radius to all corners of the element, and adds 20px of padding around the content.
            </p>

            <h1> Conclusion</h1>
            <p>
                The border property is a powerful and versatile CSS property that allows you to add borders to HTML elements. Whether you use separate properties or shorthand notation, the border property is a great way to enhance the design of your web pages.
            </p>

        </animated.div>
    )
}
