import CodeBlock from '@/components/Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation'
import React from 'react';
import { animated } from '@react-spring/web';

export default function Padding() {

    const [spring] = useSlideAnimation();
    return (
        <animated.div style={spring}>
            <h1> CSS Padding Property </h1>
            <p>
                CSS padding property is used to add space (or padding) inside an HTML element's border. It defines the distance between the element's content and the border.
            </p>

            <h1> The Basic Syntax of Padding Property </h1>
            <p>
                The padding property has four values: padding-top, padding-right, padding-bottom, and padding-left. These four values can be written separately or combined into a single shorthand value.
            </p>
            <CodeBlock
            code={`
/* Separate properties */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;

/* Shorthand property */
padding: 10px 20px 30px 40px;
            `}
            language="css"
            onlyCode={true}
            />

            <p> The order of the values for the shorthand property is: top, right, bottom, left.</p>

            <h1> Examples of Padding Properties </h1>
            <p> Here are some examples of using padding properties in CSS, including padding-top, padding-right, padding-bottom, and padding-left. </p>

            <h2>CSS padding-top property</h2>
            <p>
            The padding-top property sets the top padding of an element. Here's an example:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Padding-Top Property Example</title>
        <style>
            .padding-top-example {
                padding-top: 20px;
                margin: 0;
                background-color: pink;
                border: 1px solid red;
                border-radius: 10px;
                width: fit-content;
            }
        </style>
    </head>
    <body>
        <div class="padding-top-example">This element has a padding-top of 20px</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we've created a CSS class called .padding-top-example that sets the padding-top property to 20px, sets the margin property to 0 to remove any margin, and sets a background color for visibility.
            </p>

            <h2> CSS padding-right property </h2>
            <p>
                The padding-right property sets the right padding of an element. Here's an example:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Padding-Right Property Example</title>
        <style>
            .padding-right-example {
                padding-right: 20px;
                margin: 0;
                background-color: lightgreen;
                width: fit-content;
                border: 1px solid green;
                border-radius: 10px;
                width: fit-content;
            }
        </style>
    </head>
    <body>
        <div class="padding-right-example">This element has a padding-right of 20px</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
            In this example, we've created a CSS class called .padding-right-example that sets the padding-right property to 20px, sets the margin property to 0 to remove any margin, and sets a background color for visibility.
            </p>

            <h2>CSS padding-bottom property</h2>
            <p>
                The padding-bottom property sets the bottom padding of an element. Here's an example:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Padding-Bottom Property Example</title>
        <style>
            .padding-bottom-example {
                padding-bottom: 20px;
                margin: 0;
                background-color: lightblue;
                border: 1px solid blue;
                border-radius: 15px;
                width: fit-content;
            }
        </style>
    </head>
    <body>
        <div class="padding-bottom-example">This element has a padding-bottom of 20px</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we've created a CSS class called .padding-bottom-example that sets the padding-bottom property to 20px, sets the margin property to 0 to remove any margin, and sets a background color for visibility.
            </p>

            <h2>CSS padding-left property</h2>
            <p>
                The padding-left property sets the left padding of an element. Here's an example:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Padding-Left Property Example</title>
        <style>
            .padding-left-example {
                padding-left: 20px;
                margin: 0;
                background-color: orange;
                border: 2px solid gray;
                border-radius: 20px;
                width: fit-content;
            }
        </style>
    </head>
    <body>
        <div class="padding-left-example">This element has a padding-left of 20px</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we've created a CSS class called .padding-left-example that sets the padding-left property to 20px, sets the margin property to 0 to remove any margin, and sets a background color for visibility.
            </p>

            <h2> Shorthand padding </h2>
            <p>
                The shorthand padding property sets all four paddings in one declaration. Here's an example:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
    <html>
    <head>
        <title>Padding Shorthand Property Example</title>
        <style>
            .padding-example {
                padding: 20px;
                margin: 0;
                background-color: lightgray;
                border: 1px solid red;
                border-radius: 20px;
                width: fit-content;
            }
        </style>
    </head>
    <body>
        <div class="padding-example">This element has paddings of 20px</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                The container has a padding of 20 pixels on all four sides, as indicated by the shorthand property "padding: 20px".
            </p>

            <h1> Conclusion</h1>
            <p>
            In conclusion, the CSS padding property is a crucial tool for building web layouts with optimal spacing and visual balance. It allows designers and developers to add extra space around an element's content, thereby improving readability and creating a more pleasing user experience. The padding property also provides great flexibility in its usage, with a wide range of values and units available to control the element's padding on all four sides or selectively on certain sides. By using padding in CSS appropriately, website designers can create more engaging and functional web pages that meet user needs efficiently. Overall, understanding the different ways in which this property can be used to create visually appealing designs is essential for every front-end developer.
            </p>
        </animated.div>
    )
}
