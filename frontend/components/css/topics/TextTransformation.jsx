import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function TextTransformation() {

    return (
        <div>
            <h1>CSS Text Transformation property</h1>
            <p>The text-transform property is a CSS property that is used to modify the appearance of text by transforming it to uppercase, lowercase, capitalize, or none. It is a useful property when dealing with text, especially when dealing with titles, headings, and other important parts of the web page.</p>
        
            <p>
                Let's look at some examples to demonstrate how the text-transform property can be used:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Text Transform Example</title>
        <style>
            .h1 {
                text-transform: uppercase;
            }
            .h2 {
                text-transform: lowercase;
            }
            .paragraph {
                text-transform: capitalize;
            }
            .span {
                text-transform: none;
            }
        </style>
    </head>
    <body>
        <h1 class="h1">THIS TEXT WILL BE UPPERCASED</h1>
        <h2 class="h2">This text will be lowercased</h2>
        <p class="paragraph">this text will be capitalized</p>
        <span class="span">This text is not transformed</span>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In the above example, four different styling classes are defined using text-transform:
            </p>

            <ul className="ml-10 list-disc">
                <li> The first class, h1, is used to transform the text to uppercase, which is helpful when dealing with headings or titles. </li>
                <li>The second class, h2, is used to transform the text to lowercase, which is useful, for example, in separating different sections of the content visually.</li>
                <li>The third class, p, is used to capitalize the first letter of each word in the text.</li>
                <li> The fourth class, span, is used to not transform the text which allows us to maintain the original text.</li>
            </ul>

            <p> As illustrated in the above example, the text-transform property can be used to quickly modify text in a variety of ways, making it more legible and visually appealing. </p>
            <h1> Conclusion </h1>
            <p>
                In conclusion, the text-transform CSS property is a very useful way to adjust the appearance of text on your web page. It can be helpful when dealing with titles and headings, text with lengthy content, and other parts of the page where tweaking can enhance the content's appearance. By using text-transform, web developers can improve the readability and presentation of the text on their pages and communicate their ideas effectively.
            </p>
        </div>
    )
}
