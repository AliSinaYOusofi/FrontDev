import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function TextColor() {
    return (
        <div>
            <h1> CSS Text Color </h1>
            <p>
                When designing a website, text color is an important aspect of the overall aesthetic. It can help draw attention to important content, improve readability, and create a cohesive design. In this part post, we'll discuss how to change the color of text using CSS, and provide example code using internal CSS and class and ID selectors.
            </p>

            <h2> Changing Text Color with CSS </h2>
            <p>
                By targeting certain elements in an HTML file, you can apply CSS properties such as color. Here's an example HTML document that we'll use to demonstrate how to change text color:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
    <title>Text Color Example</title>
        <style>
            .header {
                color: gray;
            }
            /* ID Selector */
            #red {
            color: red;
            }

            /* Class Selector */
            .green {
            color: green;
            }
        </style>
    </head>
    <body>
        <h1 class="header">Welcome to my website!</h1>
        <p>This text is white by default.</p>
        <p id="red">This text is red because of an ID selector.</p>
        <p class="green">This text is green because of a class selector.</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we have an HTML document with an internal stylesheet in the head of the document. We  have three different paragraphs of text that we'll style differently. The first paragraph will be styled using class selector, and the second paragraph will be styled using a id selector and so on.
            </p>

            <h2> Specifying Text Color Values in CSS </h2>
            <p>
                To specify the color of text in CSS, you need to determine the color value, which is a code that specifies the actual color you want to use. The most common ways to specify color values in CSS are through the use of named colors, hexadecimal values, and RGB values.
            </p>

            <h2> Named Colors </h2>
            <p>
                Named colors refer to a set of pre-defined color keywords that can be used in CSS. The following are some examples of named colors:
            </p>
            <ul className="ml-10 list-disc">
                <li> black </li>
                <li> red </li>
                <li> blue </li>
                <li> orange </li>
                <li> gray </li>
            </ul>
            <p>
                Here's an example of how to use a named color to change the color of text in CSS:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
    <title>Text Color Example</title>
        <style>
            .header1 {
                color: gray;
            }
        </style>
    </head>
    <body>
        <h1 class="header1">Welcome to my website!</h1>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> Hexadecimal Values </h2>
            <p>
                A hexadecimal value is a six-digit code that represents the amount of red, green, and blue in a color. It is a popular way of specifying color values in CSS. Hexadecimal values are usually prefixed with a hash (#) symbol, which is followed by the six-digit code.
            </p>

            <p> Here's an example of how to use a hexadecimal value to change the color of text in CSS: </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
    <title>Text Color Example</title>
        <style>
            .header2 {
                color: #00ff00; /* Green */
            }
        </style>
    </head>
    <body>
        <h1 class="header2">Welcome to my website!</h1>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> RGB Values </h2>
            <p>
                RGB values refer to red, green, and blue values that are specified in decimals, ranging from 0 to 255. This means that there are 256 possible values for each color channel. RGB values are usually formatted like this: "rgb(red, green, blue)."
            </p>
            <p>
            Here's an example of how to use an RGB value to change the color of text in CSS:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
    <title>Text Color Example</title>
        <style>
            .header {
                color: rgb(255,0,255); /* Magenta  */
            }
        </style>
    </head>
    <body>
        <h1 class="header">Welcome to my website!</h1>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> Conclusion </h2>
            <p>
            In conclusion, changing text color using CSS is a simple yet effective way to improve the aesthetics and legibility of your website. By using CSS selectors to target specific HTML elements and changing the color values, you can easily customize your text color. Always experiment and choose colors that are consistent with your website's overall design and brand.
            </p>
        </div>
    )
}
