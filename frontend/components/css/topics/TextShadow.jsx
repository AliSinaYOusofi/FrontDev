import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function TextShadow() {

    return (
        <div>
            <h1> CSS Text-Shadow </h1>
            <p>
                The text-shadow CSS property enables you to include a shadow behind text. Shadows can be created in various colors, sizes, orientations, and directions, allowing you to give text an extra depth and dimension that can make your web pages more dynamic and interesting.
            </p>

            <h2>Syntax Of text-shadow Property</h2>
            <p>
                The syntax for the CSS text-shadow property is as follows:
            </p>
            <CodeBlock code={`text-shadow: h-shadow v-shadow blur-radius color;`} language="css" onlyCode={true} />

            <p>
                where:
            </p>
            <ul className="ml-10 list-disc">
                <li> h-shadow: Required. The horizontal-offset for the shadow. Negative values position the shadow left from the text, while positive values position it right from the text. </li>
                <li>v-shadow: Required. The vertical-offset for the shadow. Negative values position the shadow up from the text, while positive values position it down from the text.</li>
                <li>blur-radius: Optional. The amount of blur to apply to the shadow. Accepts only positive values, with higher values adding more blur to the shadow.</li>
                <li> color: Required. Specifies the color of the shadow. Can be expressed as a named color, a hex value, an RGB value, or an HSL value. </li>
            </ul>

            <p> Here are multiple examples to demonstrate text-shadow with different use cases: </p>

            <h2> Example 1: Shadow Behind Text</h2>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Shadow Behind Text</title>
        <style>
            .header {
                text-shadow: 12px 12px 14px rgba(0, 0, 0, 0.4);
            }
        </style>
    </head>
    <body>
        <h1 class="header">Text with shadow behind it</h1>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we have added a shadow behind the {"<h1>"} tag's text using the text-shadow property. The shadow is positioned 2 pixels to the right of the text and 2 pixels below the text, has a blur radius of 4 pixels, and is 40% opaque black.
            </p>

            <h2> Example 2: Colored Shadow </h2>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Colored Shadow</title>
        <style>
            .colored {
                text-shadow: 2px 2px 4px blue;
            }
        </style>
    </head>
    <body>
        <h1 class="colored">Text with blue shadow</h1>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p> In this example, we changed the color of the text shadow to blue. </p>

            <h2> Example 3: Multiple Shadows </h2>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Multiple Shadows</title>
        <style>
            .multiple {
                text-shadow: 2px 2px 4px blue, -2px -2px 4px yellow;
            }
        </style>
    </head>
    <body>
        <h1 class="multiple">Text with multiple shadows</h1>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                This example demonstrates how to create multiple text shadows. The first shadow is blue and positioned 2 pixels to the right of the text and 2 pixels below the text, with a blur radius of 4 pixels. The second shadow is yellow and positioned 2 pixels to the left of the text and 2 pixels above the text, with a blur radius of 4 pixels.
            </p>

            <h2> Example 4: Embossed Effect </h2>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Embossed Effect</title>
        <style>
            .embossed {
                text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.7), 4px 4px 0 rgba(0, 0, 0, 0.5);;
            }
        </style>
    </head>
    <body>
        <h1 class="embossed">Text with embossed effect</h1>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
            This example demonstrates how to create an embossed effect using text-shadow. The first shadow is white and positioned 2 pixels to the right of the text and 2 pixels below the text, with no blur radius. The second shadow is black and positioned 4 pixels to the right of the text and 4 pixels below the text, with no blur radius. By using two shadows, we achieve the embossed effect.
            </p>

            <h1> Conclusion </h1>
            <p>
            Text-shadow is a great CSS property to use when you want to create depth and dimension to text on your web page. The possibilities are endless with this property, and these examples are just the tip of the iceberg. Experiment with different values of text-shadow property and see what kind of effects you can generate on your own.
            </p>
        </div>
    )
}
