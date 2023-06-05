import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'
import useSlideAnimation from '@/hooks/useSlideAnimation'
import { animated } from '@react-spring/web';

export default function Outline() {
    const [spring] = useSlideAnimation();
    return (
        <animated.div style={spring}>
            <h1> CSS outline property </h1>
            <p>
                The CSS outline property is used to display a visible border around an element. It is similar to the border property, but the difference is that an outline does not take up space and is usually a non-rectangular shape. The outline property has four values:
            </p>
            <ul className="list-disc ml-10">
                <li> outline-style</li>
                <li> outline-color </li>
                <li> outline-width </li>
                <li> outline-offset </li>
            </ul>

            <p> Let's explore each of these values in more detail. </p>

            <h2> CSS outline-style property</h2>
            <p>
            The outline-style property is used to set the style of the outline. The property accepts several values, including solid, dotted, dashed, and double.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Outline Style Example</title>
        <style>
            .outline1 {
                outline-style: dotted;
            }
        </style>
    </head>

    <body>
        <h1 class="outline1">Hello, World!</h1>
    </body>

</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
            In this example, the outline-style property has been set to dotted. As a result, the outline around the h1 element will be displayed as a dotted line.
            </p>

            <h2> outline-color </h2>
            <p>
                The outline-color property is used to set the color of the outline. This property accepts any valid CSS color value.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Outline Color Example</title>
        <style>
            .outline2 {
                outline-style: solid;
                outline-color: red;
            }
        </style>
    </head>

    <body>
        <h1 class="outline2">Hello, World!</h1>
    </body>

</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, the outline-color property has been set to red. As a result, the outline around the h1 element will be displayed in red.
            </p>

            <h2> CSS outline-width property</h2>
            <p>
                The outline-width property is used to set the width of the outline. This property accepts several values, such as thin, medium, and thick.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Outline Width Example</title>
        <style>
            .outline3 {
                outline-style: solid;
                outline-color: blue;
                outline-width: 3px;
            }
        </style>
    </head>

    <body>
        <h1 class="outline3">Hello, World!</h1>
    </body>

</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, the outline-width property has been set to 3px. As a result, the outline around the h1 element will be displayed with a width of 3 pixels.
            </p>
            
            <h2> CSS outline-offset property</h2>
            <p>
                The outline-offset property is used to set the distance between the outline and the element it is surrounding. This property accepts any valid length value (such as px, em, and rem).
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Outline Offset Example</title>
        <style>
            .outline4 {
                outline-style: solid;
                outline-color: green;
                outline-width: 1px;
                outline-offset: 5px;
            }
        </style>
    </head>

    <body>
        <h1 class="outline4">Hello, World!</h1>
    </body>

</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, the outline-offset property has been set to 5px. As a result, the outline around the h1 element will be displayed with an offset of 5 pixels.
            </p>

            <h2> CSS outline shorthand property</h2>
            <p>
                The outline property is a shorthand property that combines the outline-style, outline-color, outline-width, and outline-offset properties into one declaration.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Outline Example</title>
        <style>
            .outline5 {
                outline: dotted 2px blue;
            }
        </style>
    </head>

    <body>
        <h1 class="outline5">Hello, World!</h1>
    </body>

</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, the outline property has been used with the values dotted, 2px, and blue. As a result, the outline around the h1 element will be displayed as a dotted blue line with a width of 2 pixels.
            </p>

            <h1>
                Conclusion
            </h1>
            <p>
                The outline property is a helpful tool for creating visual feedback on elements. By using the various outline properties, it's possible to create multiple styles and shapes of outlines.
            </p>
        </animated.div>
    )
}
