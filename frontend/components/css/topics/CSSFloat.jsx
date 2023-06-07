import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSFloat() {

    return (
        <div>
            <h1> CSS float property</h1>
            <p>
                The float property in CSS is used for positioning and formatting content, such as an image, to float left or right within a container and allow text to wrap around it.
            </p>

            <h1> Values </h1>
            <p>
                The float property can have four different values:
            </p>

            <h2> 1. Left </h2>
            <p>
                When an element's float property is set to left, the element will float to the left of its container.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Float Left Example</title>
        <style>
        .left {
            float: left;
            margin-right: 20px;
        }
        </style>
    </head>
    <body>
        <h1>Float Left Example</h1>
        <img class="left" src="https://via.placeholder.com/150" style="width: 100px; height: 100px;">
        <p>This is an example of text that wraps around a floated image. By using the float property, we can position the image to the left and allow the text to flow on the right side of the image. </p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> 2. Right </h2>
            <p>
            When an element's float property is set to right, the element will float to the right of its container.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Float Right Example</title>
        <style>
            .right {
                float: right;
                margin-left: 20px;
            }
        </style>
    </head>
    <body>
        <h1>Float Right Example</h1>
        <img class="right" src="https://via.placeholder.com/150" style="width: 100px; height: 100px;">
        <p>This is an example of text that wraps around a floated image. By using the float property, we can position the image to the right and allow the text to flow on the left side of the image. </p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            

            <h2> 3. None </h2>
            <p>
                When an element's float property is set to none, the element does not float, and will appear where it occurs in the text.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Float None Example</title>
        <style>
            .none {
                float: none;
            }
        </style>
    </head>
    <body>
        <h1>Float None Example</h1>
        <img class="none" src="https://via.placeholder.com/150" style="width: 100px; height: 100px;">
        <p>This is an example of text that does not wrap around a floated image. By using the float property with a value of none, the image will appear where it occurs in the text and the text will not be affected by the image. </p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> 4. Inherit </h2>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
    <title>Float Inherit Example</title>
        <style>
            .parent {
                float: left;
                margin-right: 20px;
            }
            .child {
                float: inherit;
            }
        </style>
    </head>
    <body>
        <h1>Float Inherit Example</h1>
        <div class="parent">
            <img class="child" src="https://via.placeholder.com/150" style="width: 100px; height: 100px;">
        </div>
        <p>This is an example of text that wraps around a floated image. By using the float property, we can position the image to the left and allow the text to flow on the right side of the image. </p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Conclusion </h1>
            <p>
            The float property is used for positioning and formatting content inside a container. The float property has four different values including left, right, none, and inherit. Each value encloses different behaviors to adjust the position and layout of the element inside a container. By understanding these values, developers can create a more attractive and visually balanced web page.
            </p>
        </div>
    )
}
