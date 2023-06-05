import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function WidthHeight() {

    return (
        <div>
            <h1>CSS Width and Height property</h1>
            <p>
                The height and width properties in CSS are responsible for controlling the dimensions of an element on a web page. The height property defines how tall the element should be, while the width property specifies its width. In this tutorial, we'll explore these CSS properties and their use in creating visually appealing web layouts.
            </p>

            <h1> Understanding CSS Height Property </h1>
            <p>
                The height property sets the height of an element. This value can be specified using different units of measurement, such as pixels, ems, or percentages. Let's take a look at an example of a div element with a height of 200px using internal CSS:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Height Property Example</title>
        <style>
            .example1 {
            height: 200px;
            background-color: lightblue;
            color: white;
            text-align: center;
            line-height: 200px;
            }
        </style>
    </head>
    <body>
        <div class="example1">This element has a height of 200 pixels</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we've used internal CSS styles to apply a height of 200px to a div element with the class .example. We've also added some additional styles to make the element more visually appealing, such as a light blue background color and white text with centered alignment.
            </p>

            <h2> Understanding CSS Width Property </h2>
            <p>
                The width property controls the width of an element. As with height, this value can be specified using different units of measurement. Here's an example of using the width property along with the height property to set the dimensions of a div element:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Width and Height Example</title>
        <style>
        .example2 {
            height: 200px;
            width: 500px;
            background-color: yellow;
            color: black;
            text-align: center;
            line-height: 200px;
        }
        </style>
    </head>
    <body>
        <div class="example2">This element has a width of 300 pixels and height of 200 pixels</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we've used the same .example class to set both height and width properties of the div element. We've also changed the background color to yellow to differentiate it from the previous example.
            </p>

            <h2> Common Values for Height and Width Properties </h2>
            <p>
                There are a variety of values that can be used for both the height and width properties. Here's an example that shows how keywords like auto, %, min-content, max-content, and fit-content can be used to set the dimensions of a div element:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Height and Width Property Values Example</title>
        <style>
        .example3 {
            height: auto;
            width: 50%;
            background-color: lightgreen;
            color: black;
            text-align: center;
            line-height: 200px;
            min-height: 100px;
            max-height: max-content;
            min-width: fit-content;
            border-radius: 10px;
        }
        </style>
    </head>
    <body>
        <div class="example3">This element has variable dimensions based on the content inside it</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we've used the same .example class to set a minimum height of 100px, a maximum height of max-content, and a minimum width of fit-content. We've also set the height to auto, and the width to 50% of its parent container.
            </p>

            <h2>CSS max-height and min-height property</h2>
            <p>
                The max-height and min-height properties set the maximum and minimum height of an element, respectively. These properties can be useful when you want to ensure that an element is never larger or smaller than a certain size. Here's an example of using max-height and min-height to set allowable limits for a div element:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Max Height and Min Height Example</title>
        <style>
        .example4 {
            min-height: 100px;
            max-height: 300px;
            background-color: lightgray;
            color: black;
            text-align: center;
            line-height: 100px;
        }
        </style>
    </head>
    <body>
        <div class="example4">This element has a minimum height of 100 pixels and a maximum height of 300 pixels</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we've used the same .example class to ensure that the div element has a minimum height of 100px and a maximum height of 300px. This ensures that the element never falls below the minimum height we've specified or goes beyond the maximum height limit.
            </p>

            <h2>CSS max-width and min-width property</h2>
            <p>
                Similar to max-height and min-height, the max-width and min-width properties set the maximum and minimum width of an element, respectively. Here's an example of using max-width and min-width to set allowable limits for a div element:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Max Width and Min Width Example</title>
        <style>
        .example5 {
            min-width: 200px;
            max-width: 300px;
            background-color: lightgreen;
            color: black;
            text-align: center;
            line-height: 100px;
        }
        </style>
    </head>
    <body>
        <div class="example5">This element has a minimum width of 100 pixels and a maximum width of 300 pixels</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
            In this example, we've used the same .example class to ensure that the div element has a minimum width of 100px and a maximum width of 300px. This ensures that the element never falls below the minimum width we've specified or goes beyond the maximum width limit.
            </p>


            <h1> Conclusion </h1>
            <p>
            In conclusion, these are the different properties used to control the dimensions of an element on a web page in CSS. By using these properties, web designers have the flexibility to create web layouts that are visually appealing and easy to navigate. Understanding how to utilize height, width, max-height, min-height, max-width, and min-width will help you establish your webpage design layout effectively.
            </p>

        </div>
    )
}
