import CodeBlock from '@/components/Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation'
import React from 'react'
import { animated } from '@react-spring/web';
export default function Backgrounds() {

    const [spring] = useSlideAnimation();

    return (
        <animated.div style={spring}>
            <h1> CSS Backgrounds </h1>
            <p>The background of a webpage is like the canvas on which the rest of the content is painted. It sets the tone of the website and is critical to creating an aesthetically pleasing look and feel. In this article, we'll look at the various CSS background properties and how to use them to enhance the look of your website.</p>
            
            <h2> CSSbackground-color </h2>
            <p>
                The background-color property sets the background color of an element. You can use a color name, RGB value, HEX code, or HSL value to specify the color. To set the background color of a div element with class myDiv, use the following CSS:
            </p>

            <p>
                Here is an example of how to set the background color of a div
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>CSS Backgrounds Example</title>
        <style>
        .myDiv1 {
            background-color: #f1f1f1; /* light grey */
            width: 80vw;
            height: 400px;
            border: 1px solid blue;
        }
        </style>
    </head>
    <body>
        <div class="myDiv1"></div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> CSS background-image </h2>
            <p>
                The background-image property sets an image as the background of an element. You can specify an image URL or use a url() function to specify a path to an image file. To set the background image of a div element with class myDiv, use the following CSS:
            </p>
            
            <p>Here is an example </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>CSS Backgrounds Example</title>
        <style>
        .myDiv2 {
            background-image: url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600'); /* random image from pexels */
            width: 80vw;
            height: 500px;
            border: 1px solid green;
        }
        </style>
    </head>
    <body>
        <div class="myDiv2"></div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2>CSS background-repeat</h2>
            <p>
                The background-repeat property sets how background images are repeated within an element. You can set the value to repeat (default), repeat-x, repeat-y, or no-repeat. To set the background image to not repeat horizontally within a div element with class myDiv, use the following CSS:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>CSS Backgrounds Example</title>
        <style>
        .myDiv3 {
            background-image: url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600'); /* random image from pexels */
            background-repeat: no-repeat;
            background-position: center center; /* center the image */
            width: 80vw;
            height: 500px;
            border: 1px solid red;
        }
        </style>
    </head>
    <body>
        <div class="myDiv3"></div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            
            <h2> CSS background-attachment</h2>
            <p>
                The background-attachment property sets whether the background image is fixed or scrolls with the element. You can set the value to scroll (default) or fixed. To set the background image to be fixed within the viewport of a div element with class myDiv, use the following CSS:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>CSS Backgrounds Example</title>
        <style>
        .myDiv4 {
            background-image: url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600'); /* random image from pexels */
            background-position: center center; /* center the image */
            background-attachment: fixed;
            width: 80vw;
            height: 400px;
            border: 1px solid darkgray;
        }
        </style>
    </head>
    <body>
        <div class="myDiv4"></div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> CSS background-position</h2>
            <p>
                The background-position property sets the initial position of the background image. You can set the value to a specific position (e.g. top left, center right, etc.) or use an x y coordinate value. To set the background image to be positioned at the bottom right of a div element with class myDiv, use the following CSS:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>CSS Backgrounds Example</title>
        <style>
        .myDiv5 {
            background-image: url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600'); /* random image from pexels */
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: bottom right;
            width: 80vw;
            height: 400px;
            border: 1px solid orange;
        }
        </style>
    </head>
    <body>
        <div class="myDiv5"></div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
            This positions the background image at the bottom right of the div element. You can also use the x y coordinate value to position the background image at a specific pixel location. For example:
            </p>

            <p>
            In the example below, we have included the updated version of the HTML code that includes the complete information for the background-position property.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>CSS Backgrounds Example</title>
        <style>
        .lightGrey1 {
            background-color: #f1f1f1;
            width: 80vw;
            height: 400px;
            border: 1px solid #00FF00; /* Green */
        }
        
        .myImg1 {
            background-image: url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600');
            background-repeat: no-repeat;
            background-position: center center;
            width: 80pvw;
            height: 400px;
            border: 1px solid black;
        }
        
        .myFixedImg1 {
            background-image: url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: bottom right;
            width: 80vw;
            height: 200px;
            border: 1px solid hsla(240, 100%, 50%, 0.5); /* Blue with 50% transparency */
        }
        </style>
    </head>
    <body>
        <div class="lightGrey1"></div>
        <div class="myImg1"></div>
        <div class="myFixedImg1"></div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> background (shorthand property)</h2>
            <p>
                Instead of specifying each background property separately, you can use the background shorthand property to set them all at once. The background property can take up to six values: background-color, background-image, background-repeat, background-attachment, background-position, and background-size.
            </p>
            <p>Here is an example </p>
            <CodeBlock code={`
.myDiv {
    background: #f1f1f1 url('my-image.jpg') no-repeat fixed center center;
}`}
            language={"html"}
            onlyCode={true}
            />

            <p>
            This sets the background color to light grey (#f1f1f1), an image as the background image (url('my-image.jpg')), not to repeat the image (no-repeat), fixed attachment (fixed), and center it horizontally (center) and vertically (center) within the element.
            </p>
            <p>
                Alternatively, you can selectively include only the background properties you want to modify with the background shorthand property.
            </p>

            <p>
                Here is an example of how to set the background-image and background-color properties using the background shorthand property:
            </p>
            <CodeBlock
            code={`
.myDiv {
    background-image: url('my-image.jpg');
    background-color: #f1f1f1;
    background-repeat: no-repeat;
    background-position: center center;
}
            `}
            language="html"
            onlyCode={true}
            />

            <p>
                This sets the background image to a specified URL (url('my-image.jpg')), the background color to light grey using background-color, not to repeat the image using background-repeat, and center it horizontally and vertically using background-position.
            </p>

            <p> Here is an example of using internal CSS and HTML with div elements that use the various CSS background properties discussed above: </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>CSS Backgrounds Example</title>
        <style>
        .lightGrey2 {
            background-color: #f1f1f1;
            width: 80vw;
            height: 400px;
            border: 1px solid slate;
        }
        
        .myImg2 {
            background: url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600') no-repeat center center;
            width: 80pvw;
            height: 400px;
            border: 1px solid gray;
        }
        
        .myFixedImg2 {
            background: url('https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600') no-repeat fixed center center;
            width: 80vw;
            height: 400px;
            border: 1px solid darkred;
        }
        </style>
    </head>
    <body>
        <div class="lightGrey2"></div>
        <div class="myImg2"></div>
        <div class="myFixedImg2"></div>
    </body>
</html>
            `}
            showCodeEditor={true}
            language="html"
            />

            <p>
                In this example, we have three div elements styled using internal CSS:
            </p>

            <ul className="list-disc ml-10">
                <li> The first div has a light grey background color (#f1f1f1) set using the background-color property in the .lightGrey class.</li>
                <li> The second div has a background image set to a random image from pexels using the background-image property for the .myImg class. The background-repeat is set to not repeat the image using no-repeat, and the background-position is set to center the image horizontally and vertically within the div using center center.</li>
                <li> The third div has a similar styling to the second div, but with an additional background-attachment property set to fixed to keep the background image fixed within the viewport when the user scrolls.</li>
            </ul>

            <h1> Conclusion </h1>
            <p> By using these CSS background properties in various combinations, you can create a wide range of visual effects and enhance the look and feel of your website.</p>

        </animated.div>
    )
}
