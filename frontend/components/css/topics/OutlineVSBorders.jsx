import CodeBlock from '@/components/Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation'
import React from 'react'
import { animated } from '@react-spring/web';

export default function OutlineVSBorders() {

    const [spring] = useSlideAnimation();

    return (
        <animated.div style={spring}>
            <h1> Outline VS Borders</h1>
            <p>
            While both outline and border are used to add visual emphasis to an element, there are some key differences between the two.
            </p>

            <h2>
                Outline
            </h2>
            <ul className="list-disc ml-10">
                <li> Does not take up space </li>
                <li> Can be non-rectangular</li>
                <li> Does not affect the layout of the page</li>
                <li> Used for visual emphasis or to indicate the focus state of an element</li>
            </ul>

            <h2> Border </h2>
            <ul className="list-disc ml-10">
                <li> Takes up space </li>
                <li> Always rectangular </li>
                <li> Can affect the layout of the page </li>
                <li> Used for visual emphasis or to separate content </li>
            </ul>

            <h2> Example </h2>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Outline vs. Border Example</title>
        <style>
            .outline1 {
                outline-style: dotted;
                outline-color: blue;
                outline-width: 3px;
                outline-offset: 5px;
            }

            .border1 {
                border-style: solid;
                border-color: red;
                border-width: 2px;
                padding: 10px;
            }
        </style>
    </head>

    <body>
        <h1 class="outline1">Outline Example</h1>
        <h1 class="border1">Border Example</h1>
    </body>

</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we have added both an outline and a border to two different h1 elements. The first h1 has an outline with a dotted style, a blue color, a 3px width, and a 5px offset from the element. The second h1 has a border with a solid style, a red color, and a 2px width. Both elements have a padding of 10px.
            </p>

            <p>
                As you can see, the outline does not affect the layout of the page and does not take up any additional space. It is used purely for visual emphasis. On the other hand, the border does affect the layout of the page and takes up additional space. Borders are often used to separate content or to provide additional structure to a page.
            </p>

            <h1> Conclusion </h1>
            <p>
                In conclusion, both outline and border have their uses and can be used to add visual emphasis to an element. However, it's important to understand the differences between the two so that you can use the correct one for your needs.
            </p>
        </animated.div>
    )
}
