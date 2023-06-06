import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function TextAlignment() {
    return (
        <div>
            <h1> Text-Alignment CSS Property </h1>
            <p>
                Text-alignment is a fundamental aspect of formatting text on a web page. CSS provides a property called “text-align” to manipulate the alignment of text in HTML elements. In this part, we’ll explore how to use the text-align property and provide examples of how to implement it in your HTML code.
            </p>

            <h2> Syntax of the text-align Property </h2>
            <p>
                The text-align property is used to specify the horizontal alignment of text in an HTML element. It can be applied to block level elements such as {"<div>"}, {"<p>"}, {"<h1>"} and {"<h2>"}, as well as inline-level elements like {"<span>"} and {"<a>"}.
            </p>
            <CodeBlock
            code={`
selector {
    text-align: value;
}
            `}
            language="css"
            onlyCode={true}
            />
            <p>
                In the code above, selector matches the HTML element, and value should be one of the following:
            </p>

            <ul className="list-disc ml-10">
                <li> center: aligns the text in the center of the element horizontally. </li>
                <li> left: aligns the text to the left of the element. </li>
                <li> right: aligns the text to the right of the element. </li>
                <li> justify: stretches the text so that each line of the element has equal width. </li>
            </ul>

            <h2> Examples of the text-align Property </h2>
            <p>
                Now that we have covered the basics of the text-align property, let's explore how it can be used in HTML code. We'll use the following HTML code template for our examples:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Text Alignment Example</title>
        <style>
            body {
            font-family: Arial, sans-serif;
            }
            .center {
            text-align: center;
            }
            .right {
            text-align: right;
            }
            .left {
            text-align: left;
            }
            .justify {
            text-align: justify;
            }
        </style>
    </head>
    <body>
        <h1 class="center">Text Alignment Examples</h1>
        <p class="left">
            This text is aligned to the left.
        </p>
        <p class="center">
            This text is centered.
        </p>
        <p class="right">
            This text is aligned to the right.
        </p>
        <p class="justify">
            This text is justified. This is an example of the justify align property stretching the text
            so that each line of the element has equal width.
        </p>
    </body>
</html>
            `}
            language="css"
            showCodeEditor={true}
            />

            <p>
                In this example, we use the text-align property to align the text in different ways.
            </p>

            <p>
            The first {"<p>"} element is aligned to the left with the class .left. The second paragraph is centered with the class .center. The third paragraph is aligned to the right with the class .right. Finally, the fourth paragraph is justified with the class .justify, where the text stretches to fill the full width of the element.
            </p>

            <h1> Conclusion </h1>
            <p>
                The text-align property is a basic function in CSS that is used to align text within an HTML element. It offers flexibility in aligning text to center, left, right, or stretching to justify an element. Between these basic alignments and the ability to modify padding and margin around text, designers and developers can create visually impressive and legible web experiences.
            </p>
        </div>
    )
}
