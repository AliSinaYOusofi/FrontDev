import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSZIndex() {

    return (
        <div>
            <h1> CSS z-index Property </h1>
            <p>The z-index property in CSS is used to control an element's visual layering in the document. It determines the order in which overlapping elements are stacked, vertically, on the z-axis. The elements with a higher z-index value will be positioned in front of the elements with lower z-index values.</p>

            <p> Let's see an example of z-index property in action</p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Lower z-index Example</title>
        <style>
        .lower {
            position: relative;
            background-color: blue;
            color: white;
            padding: 10px;
            z-index: 1;
        }
        .higher {
            position: relative;
            background-color: green;
            color: white;
            padding: 10px;
            z-index: 2;
            top: -20px;
        }
        </style>
    </head>
    <body>
        <h1>Lower z-index Example</h1>
        <div>
        <p>This paragraph contains a <span class="lower">lower z-index value</span></p>
        <p>This paragraph contains a <span class="higher">higher z-index value</span></p>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                As you can see from the example above, when the z-index value is lower, it is positioned behind the element with a higher z-index value. In this example, the blue element is positioned behind the green element, since the blue element has a lower z-index value than the green element.
            </p>

            <h1> Conclusion </h1>
            <p>
            The z-index property is a useful tool in CSS for controlling the visual layering of elements in a document. By setting a higher or lower z-index value for an element, developers can manipulate the order in which overlapping elements are stacked on the z-axis to create complex and visually rich web pages.
            </p>
        </div>
    )
}
