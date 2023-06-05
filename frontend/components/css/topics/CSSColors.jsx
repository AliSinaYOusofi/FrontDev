import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'
import { animated } from '@react-spring/web';
import useSlideAnimation from '@/hooks/useSlideAnimation';
export default function CSSColors() {

    const [spring] = useSlideAnimation();

    return (
        <animated.div style={spring}>
            <h1> CSS Colors </h1>
            <p>Colors play a vital role in web development. They add visual appeal and enhance user experience on a website. Cascading Style Sheets (CSS) offers web developers a range of options to work with colors. In this part, we will describe various CSS colors that you can use in your website development.</p>

            <h2> Color Names </h2>
            <p>
                The easiest way to set a color in CSS is by using the name of the color. CSS provides 147 color names that you can use, such as red, green, blue, black, white, and orange. Here's an example of how to use color names in HTML using internal CSS:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Color Names Example</title>
        <style>
        .code {
            background-color: blue;
        }
        </style>
    </head>
    <body>
        <h1 class="code">Welcome to My Website</h1>
        <p>This is an example of a website with a blue background header.</p>
    </body>
</html>
            `}
            language={"html"}
            showCodeEditor={true}
            />

            <h2> RGB and HEX </h2>
            <p> RGB and HEX are color models that you can use to specify colors in CSS. Here's an example of how to use RGB and HEX in HTML using internal CSS: </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>RGB and HEX Example</title>
        <style>
        .code h6 {
            background-color: rgb(255, 0, 0); /* Red */
        }

        .paragraph {
            color: #00FF00; /* Green */
        }
        </style>
    </head>
    <body>
        <h6 class="code">Welcome to My Website</h6>
        <p class="paragraph">This is an example of a website with a green text.</p>
    </body>
</html>
            `}
            language={"html"}
            showCodeEditor={true}
            />
            <p>
                In the above code, the body element's background color is set to RGB value for red—rgb(255, 0, 0)—using internal CSS. The h1 element's text color is set to HEX value for green—#00FF00—using internal CSS.
            </p>

            <h2> HSL</h2>
            <p>hsla() is a color function in CSS that stands for hue, saturation, lightness, and alpha. Together, these four parameters allow you to create a wide range of colors, including transparency. The hsla() function uses the following syntax:</p>
            <CodeBlock code={`hsla(hue, saturation, lightness, alpha)`} onlyCode={true} language="css" />
            <ul className=" ml-10 list-disc">
                <li> The hue parameter determines the base color and is represented as a degree from 0 to 360 on a color wheel. For example, 0 is red, 120 is green, and 240 is blue.</li>
                <li>The saturation parameter specifies the saturation of the color and is represented as a percentage from 0% to 100%. A lower percentage means the color is more grayish, while a higher percentage means the color is more vivid.</li>
                <li>The lightness parameter specifies the brightness of the color and is represented as a percentage from 0% to 100%. A lower percentage means the color is darker, while a higher percentage means the color is lighter.</li>
                <li>The alpha parameter specifies the level of transparency and is represented as a value from 0 to 1 (0 being completely transparent and 1 being completely opaque).</li>
            </ul>

            <p> Here is an exampling using hsla</p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>HSLA Example</title>
        <style>
        .division1 {
            background-color: hsla(240, 100%, 50%, 0.5); /* Blue with 50% transparency */
            width: 1200px;
            height: 100px;
        }
        </style>
    </head>
    <body>
        <div class="division1">
            <h1>Welcome to My Website</h1>
            <p>This is an example of a blue background color with 50% transparency using hsla() color function.</p>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> HSL </h2>
            <p> hsl() is similar to hsla(), but without the alpha parameter. This means that the color cannot be transparent. The hsl() function uses the following syntax: </p>
            <CodeBlock code={`hsl(hue, saturation, lightness)`} onlyCode={true} language="css" />
            <p> Here's an example of how to use hsl(): </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>HSL Example</title>
        <style>
        .division2 {
            background-color: hsl(0, 100%, 50%); /* Red */
            width: 1200px;
            height: 100px;
        }
        </style>
    </head>
    <body>
        <div class="division2">
            <h1>Welcome to My Website</h1>
            <p>This is an example of a red background color using hsl() color function.</p>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> RGBA </h2>
            <p> rgba() is similar to hsla(), but it uses the red, green, and blue color channels instead of hue, saturation, and lightness. The rgba() function uses the following syntax:</p>
            <CodeBlock code={`rgba(red, green, blue, alpha)`} onlyCode={true} language="css" />
            <ul className="list-disc  ml-10">
                <li>The red, green, and blue parameters specify the amount of red, green, and blue in the color, respectively. Each value ranges from 0 to 255.</li>
                <li>The alpha parameter specifies the level of transparency and is represented as a value from 0 to 1 (0 being completely transparent and 1 being completely opaque).</li>
            </ul>

            <p> Here's an example of how to use rgba(): </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>RGBA Example</title>
        <style>
        .division3 {
            background-color: rgba(255, 165, 0, 1); /* Orange  with 50% transparency */
            width: 1200px;
            height: 100px;
        }
        </style>
    </head>
    <body>
        <div class="division3">
            <h1>Welcome to My Website</h1>
            <p>This is an example of a orange background color with 50% transparency using rgba() color function.</p>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Conclusion</h1>
            <p>CSS offers various options to work with colors, such as color names, RGB, HEX, HSL, RGBA, and HSLA values. Understanding and using these color options can help you create an aesthetically pleasing and visually appealing website. You can experiment with CSS colors to create different shades and tones, which can significantly improve the appearance of your website. By using internal CSS, you can keep your styles neatly organized and easily accessible in your HTML file.</p>
        </animated.div>
    )
}
