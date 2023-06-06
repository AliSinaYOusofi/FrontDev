import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSFonts() {

    return (
        <div>
            <h1> CSS Font Family </h1>
            <p>
                Font-family is one of the most important and frequently used font properties in CSS. It specifies the typeface to use for an HTML element. In other words, font-family tells your web browser what font to load and use for your text. In this blog, we will discuss the importance of font family, how it works, and provide examples of its usage.
            </p>

            <h2> Font Families </h2>
            <p>
                There are several font families that web developers use in their project, some of the popular font families are as follows:
            </p>
            <ul className="ml-10 list-disc">
                <li>Serif</li>
                <li> Sans-serif </li>
                <li> Monospace </li>
                <li> Cursive </li>
                <li> Fantasy </li>
            </ul>

            <p>
                The above mentioned font families are also known as generic font families. The generic font families are used as fallback fonts in case the web browser doesn't support the font family specified by the web developer.
            </p>

            <h2> Specifying Font-Family </h2>
            <p>
                You can specify font-family in CSS using the following syntax:
            </p>
            <CodeBlock code={`
selector {
    font-family: font family name here;
}`}         language={"html"}
            onlyCode={true}
            />

            <p> For example, if you want to use the font family Arial for the paragraph tag, you can do so as follows: </p>
            <CodeBlock
            code={`
p {
    font-family: Arial, sans-serif;
    }
`}          language="css"
            onlyCode={true}
            />

            <p>
                In this case, you specify Arial as the font family name. You can also specify alternate font families after Arial, separated by commas. In this example, the fallback font family is sans-serif. If the user's computer doesn't have Arial installed, it will use the sans-serif font family instead.
            </p>

            <h2> Example One: Using Custom Fonts </h2>
            <p>
                You can also use custom fonts in your CSS by importing the necessary font files and referencing them in your font-family declaration.
            </p>


            <p>
                For example:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS fonts</title>
        <style>

            .header {
                font-family: Tahoma, "Helvetica Neue", Helvetica, Arial;
            }
        </style>
    </head>
    <body>
        <h1 class="header">CSS fonts</h1>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this case, we are using the Roboto font, which is not a generic font provided by web browsers. We have to link it and use the font-family property to specify the font family as 'Roboto'. The .woff2 and .woff files are located in the same directory as the HTML file. The font-family declaration also specifies a fallback sans-serif font family in case the Roboto font isn't available on the user's computer.
            </p>

            <h2> Example Two: Combining Multiple Font Families </h2>
            <p>
                You can also combine multiple font families to create a custom font stack to be used in your CSS.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Multiple font family</title>
        <style>
            .header {
                font-family: monospace, "Helvetica Neue", Helvetica, Arial, sans-serif;
            }
        </style>
    </head>
    <body>
        <h1 class="header">Text with font families</h1>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
            This font family declaration selects the system fonts based on the platform. On macOS and iOS, -apple-system and BlinkMacSystemFont will refer to the system fonts like San Francisco (Apple), while on Windows it will use Segoe UI.
            </p>

            <h2> Using Serif Fonts </h2>
            <p>
                Serif fonts are often used for print designs, but they can also be a great choice for digital typography. Here's an example:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Serif Font Example</title>
        <style>

            .h1, .p {
                font-family: "Georgia", "Times New Roman", Times, serif;
            }
        </style>
    </head>
    <body>
        <h1 class="h1">Welcome to my webpage!</h1>
        <p class="p">This is a paragraph using a serif font family.</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we are using Georgia, a popular serif font, as the primary font, with Times New Roman as a fallback. If these are not available, Times, which is another serif font, will be used. Finally, if none of these fonts are present, the browser will use a generic serif font.
            </p>

            <h1> Conclusion </h1>
            <p>
                The font-family property is an important attribute in web design as it influences how text appears on a web page. By using font-family, you can specify the font typeface for your text, making it more appealing and readable to your audience. In this blog, we explained how to use the font-family property in CSS with multiple examples in conjunction with generic font families, custom fonts, and system fonts to ensure that your web pages adopt the desired typography and result in a better user experience.
            </p>
        </div>
    )
}
