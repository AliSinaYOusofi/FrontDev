import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSOpacity() {

    return (
        <div>
            <h1> CSS Opacity property</h1>
            <p>
            CSS opacity is a property used to adjust the transparency of an element or its contents. When an element or its contents are made more transparent, other elements behind them become more visible. The opacity property can take a value between 0.0 (fully transparent) and 1.0 (fully opaque).
            </p>

            <p>Here are some of the most commonly used opacity properties in CSS.</p>    

            <h2> opacity </h2>
            <p>
                The opacity property is used to adjust the opacity of an element.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Opacity Example</title>
        <style>
            /* Make an image partially transparent */
            .image-opacity {
                opacity: 0.5;
            }
        </style>
    </head>
    <body>
        <img src="https://images.pexels.com/photos/225769/pexels-photo-225769.jpeg?auto=compress&cs=tinysrgb&w=600" alt="example image" class="image-opacity">
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p> In this example, the opacity property is used to make the img element partially transparent.</p>

            <h2> rgba </h2>
            <p>
                The rgba function is used to set an opacity value for an element as part of its color.
            </p>
            
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>RGBA Example</title>
        <style>
            /* Make a background color partially transparent using rgba */
            .background-color {
                background-color: rgba(255, 0, 0, 0.5);
            }
        </style>
    </head>
    <body>
        <div class="background-color">
            <h1>Hello, world!</h1>
        </div>
    </body>
            </html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, the rgba function is used to set an opacity value for an element as part of its color.In this example, the rgba function is used to set a red background color with partial transparency for the div element.

            </p>            

            <h2> :hover </h2>
            <p>
            The :hover selector is used to change the opacity of an element when the user hovers over it.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Hover Opacity Example</title>
        <style>
            /* Make an image partially transparent on hover */
            .image-hover:hover {
                opacity: 0.5;
            }
        </style>
    </head>
    <body>
        <img src="https://images.pexels.com/photos/225769/pexels-photo-225769.jpeg?auto=compress&cs=tinysrgb&w=600" alt="example image" class="image-hover">
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, the opacity property is used to make the img element partially transparent when the user hovers over it.
            </p>

            <h1> Conclusion</h1>
            <p>
            CSS opacity is a powerful tool that can be used to adjust the transparency of an element or its contents. Opacity is most commonly adjusted using the opacity property, but it can also be set as part of a color with the rgba function or changed on hover with the :hover selector. By understanding opacity, developers can create more dynamic and engaging designs on their web pages.
            </p>
        </div>
    )
}
