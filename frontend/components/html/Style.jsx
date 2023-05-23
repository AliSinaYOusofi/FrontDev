import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'

export default function Style() {
    return (
        <div>
            <h1>The Style Attribute </h1>
            <p>
                The "style" attribute is a powerful tool in web development that allows developers to 
                add inline CSS rules to individual HTML elements. 
                In other words, instead of using external CSS files or embedding style sheets in the head section of an HTML document, 
                you can apply CSS properties directly to the HTML elements using the style attribute.
            </p>

            <p>For example, consider the following HTML code:</p>
            <CodeBlock code={`<h1 style="color: blue; font-size: 32px;">Hello World!</h1>`} language={"html"} showCodeEditor={true} />

            <p>
                In this example, the "style" attribute is used to apply CSS rules to the {"<h1>"} element. The "color" property is set to blue, and the "font-size" property is set to 2em. As a result, the text "Hello World!" will appear in blue with a font size of 32px.
            </p>

            <p>The "style" attribute can be used to apply any valid CSS property to an HTML element, including color, font-size, text-align, border, background, padding, margin, and many more. You can also use the "style" attribute to apply multiple CSS properties by separating them with a semicolon, like this:</p>
            <CodeBlock code={`<div style="color: red; font-size: 1.5em; background: yellow; padding: 10px;">This is a sample text</div>`} language="html" showCodeEditor={true} />
            <p> In this example, the {"<div>"} element is styled using four different CSS properties. The "color" property is set to red, the "font-size" property is set to 1.5em, the "background" property is set to yellow, and the "padding" property is set to 10px. </p>

            <h1 className="mt-10"> Note *</h1>
            <p>
                However, inline styles can also lead to redundancy and bloated HTML code if overused or applied to multiple elements throughout a webpage. In such cases, it's better to use external CSS files or embedded style sheets in the head section of an HTML document to keep the code organized and maintainable.
            </p>

            <h1 className="mt-10"> Conclusion </h1>
            <p>
                In summary, the "style" attribute is a powerful tool in web development that allows developers to apply CSS rules directly to HTML elements. It can be useful for quick and small styling adjustments, but should be used sparingly and with consideration for the overall structure and organization of the code.
            </p>
        </div>
    )
}
