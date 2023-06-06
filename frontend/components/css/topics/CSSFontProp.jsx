import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSFontProp() {

    return (
        <div>
            <h1>CSS font properties </h1>
            <p>
                Fonts play a crucial role in web design. They communicate a message or tone, add personality to a design, and even influence the user experience. One of the primary factors that web designers consider when choosing fonts is the font style and size. In this blog post, we will explore what font style and font size are and how Google Fonts can help you in selecting the perfect font for your website.
            </p>

            <h2> What is Font Style? </h2>
            <p>
                The font style refers to how the letters in a font are presented. There are different styles of fonts that convey different moods and messages. The four most common font styles are:
            </p>

            <ul className="list-disc ml-10">
                <li> Normal: This is the default font style that most fonts have. It's the standard style in which the letters are neither slanted nor bold. </li>
                <li>Italic: The italic style is a slanted version of the normal style that is used for emphasis or to convey a different tone of voice.</li>
                <li>Bold: The bold style is used to give more emphasis to the text. The letters in a bold font are thicker and darker than in a normal font.</li>
                <li>Bold italic: The bold italic style combines both the italic and bold styles to convey strong emphasis or to impart a more significant tone of voice.</li>
            </ul>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Font Style Example</title>
        <style>
            /* Regular (normal) */
            .regular {
                font-style: normal;
            }

            /* Italic */
            .italic {
                font-style: italic;
            }

            /* Bold */
            .bold {
                font-weight: bold;
            }

            /* Bold Italic */
            .bold-italic {
                font-weight: bold;
                font-style: italic;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to my Webpage!</h1>
        <p class="regular">This is a regular (normal) paragraph.</p>
        <p class="italic">This is an example of italic text.</p>
        <p class="bold">This is an example of bold text.</p>
        <p class="bold-italic">This is an example of bold and italic text.</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> What is Font Size? </h2>
            <p>
                The font size refers to how big or small the text appears on the screen. The size of the text can influence how easy or difficult it is to read and navigate a web page. Typically, the font size is measured in pixels (px), but designers also use other units of measurements like points (pt), ems (em), and percentages (%).
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Font Size Example</title>
        <style>
            .small {
                font-size: 12px;
            }

            .medium {
                font-size: 26pt;
            }

            .large {
                font-size: 6em;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to my Webpage!</h1>
        <p class="small">This is an example of small text.</p>
        <p class="medium">This is an example of medium-sized text.</p>
        <p class="large">This is an example of large text.</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p> Notes on em and pt:</p>
            <ul className="list-disc ml-10">
                <li> em is a unit of measurement that is relative to the font size of the parent element.</li>
                <li>pt is a unit of measurement that is equal to 1/72nd of an inch and is primarily used for print.</li>
            </ul>
            
            <h2> Using Google fonts</h2>
            <p>
                To use a font from Google Fonts, you need to add the link to the font stylesheet in the head section of your HTML document.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Google Fonts Example</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide">
        <style>
            .header {
                font-family: 'Audiowide', sans-serif;
                font-size: 18px;
                font-style: italic;
            }
            .paragraph {
                font-family: sans, sans-serif;
                font-size: 18px;
                font-style: bold;
            }
        </style>
    </head>
    <body>
        <h1 class="header">Welcome to my Webpage! Google Fonts (Audiowide)</h1>
        <p class="paragraph" >This is an example of text using the serif font</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we're using the Audiowide font from Google Fonts. First, we need to add a link to the stylesheet in the head of our document. The link points to the Google Fonts API and specifies the font we want to use (in this case, Audiowide).
            </p>

            <h2> CSS font-weight property</h2>
            <p>
                font-weight refers to the thickness or boldness of the font. You can use a range of values from 100 (thin) to 900 (black), or you can use keywords like normal and bold as shorthand. Here's an example:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Font-Weight Example</title>
        <style>
        .light {
            font-weight: 300;
        }

        .regular {
            font-weight: normal;
        }

        .bold {
            font-weight: bold;
        }

        .extra-bold {
            font-weight: 800;
        }
        </style>
    </head>
    <body>
        <h1 class="light">This is an example of light text.</h1>
        <h2 class="regular">This is an example of regular weight text.</h2>
        <p class="bold">This is an example of bold text.</p>
        <p class="extra-bold">This is an example of extra bold text.</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we're using font-weight with four different values:
            </p>

            <ul>
                <li> The .light class has a font-weight of 300, which sets the text to a lighter weight than the default font.</li>
                <li>The .regular class uses normal as the value for font-weight, which is the default value for most fonts.</li>
                <li>The .bold class uses bold as the value for font-weight, which sets the text to appear bold.</li>
                <li> The .extra-bold class uses 800 as the value for font-weight, which sets the text to an extra bold weight.</li>
            </ul>

            <h2> CSS font-variant </h2>
            <p>
                font-variant refers to the appearance of the font. One of the most common uses of font-variant is to create small caps, which appear smaller than the regular text but still have the same proportions. You can also use font-variant to change the text to all uppercase or lowercase. Here's an example:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Font-Variant Example</title>
        <style>
        .small-caps {
            font-variant: small-caps;
        }

        .lining-nums {
            font-variant: lining-nums;
        }

        .oldstyle-nums {
            font-variant: oldstyle-nums;
        }
        </style>
    </head>
    <body>
        <h1 class="small-caps">This is an example of small-caps text.</h1>
        <p class="lining-nums">1234567890</p>
        <p class="oldstyle-nums">1234567890</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we're just using font-variant to create varying font styles:
            </p>

            <ul className="list-disc ml-10">
                <li> The .small-caps class uses font-variant: small-caps;, which creates text that has small capital letters.</li>
                <li> The .lining-nums class uses font-variant: lining-nums;, which changes the numbers to the same height as capital letters, creating a lining number style.</li>
                <li> The .oldstyle-nums class uses font-variant: oldstyle-nums;, which creates a number style that has descenders and ascenders, much like lowercase letters.</li>
            </ul>

            <h2> CSS font shorthand property </h2>
            <p>
                The font shorthand property in CSS allows you to specify multiple font properties in one line of code. The font property takes a series of values, including font-style, font-weight, font-size, line-height, and font-family. By using the font shorthand property, you can quickly define multiple font properties using one line of code, simplifying your CSS. If any of the properties are not set in the shorthand, they'll default to their initial values. When using the font shorthand property, it's essential to list all the properties explicitly and in the correct order, as the order matters.
            </p>

            <p> The syntax is as follows </p>
            <CodeBlock code={`font: [font-style] [font-weight] [font-size]/[line-height] [font-family];`} language="html" onlyCode={true} />

            <p> Here is an example </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Font Shorthand Example</title>
        <style>
        .title {
            font: bold 36px/1.5 Arial, sans-serif;
        }

        .paragraph {
            font: italic 16px/1.2 Georgia, serif;
        }
        </style>
    </head>
    <body>
        <h1 class="title">Welcome to my Website!</h1>
        <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis enim, tincidunt vitae lacus at, vestibulum placerat elit.</p>
    </body>
</html>
            `}
            language={"html"}
            showCodeEditor={true}
            />

            <p>
            In our example:
            </p>

            <ul>
                <li>The .title class uses bold 36px/1.5 Arial, sans-serif as the font shorthand property.</li>
                <li> The .paragraph class uses font: italic 16px/1.2 Georgia, serif;, which specifies an italic font style, 16px font size, 1.2 line height, and Georgia and serif font families. </li>
            </ul>

            <h1> Conclusion </h1>
            <p>
                In conclusion, font style and font size are critical elements in web design that can impact the user experience. Google Fonts provides an extensive range of fonts that allows designers to choose a font that aligns with their website's tone and message.
            </p>
        </div>
    )
}
