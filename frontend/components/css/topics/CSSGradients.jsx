import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSGradients() {

    return (
        <div>
            <h1> CSS Gradient  </h1>
            <p>
                CSS gradient is a powerful feature that allows you to create stunning background effects on your web pages. The four primary types of CSS gradients that we will be looking at are:
            </p>
            <ul className="ml-10 list-disc">
                <li> linear-gradient </li>
                <li> radial-gradient </li>
                <li>repeating-linear-gradient </li>
                <li> repeating-radial-gradient </li>
            </ul>

            <p>
                In this part, we will go over each type of gradient, how to use them
            </p>

            <h2> Linear-Gradient </h2>
            <p>
                Linear-gradient is a popular feature that allows you to create a gradient that transitions from one color to another in a straight line. To use linear-gradient in CSS, you need to specify two or more colors separated by a comma.
            </p>
            <CodeBlock
            code={`
            
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS Gradient</title>
        <style>

            .con {
                width: 500px;
                height: 200px;
                background: linear-gradient(red, orange, yellow);
            }
        </style>
    </head>
    <body>
        <div class="con">CSS Gradients</div>
    </body>
</html>
            
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                This code will create a gradient effect that transitions from red to orange to yellow.
            </p>

            <p>
                You can also specify the direction of the gradient using keywords such as to top, to bottom, to left, and to right.
            </p>
            <CodeBlock
            code={`
            
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS Gradient</title>
        <style>

            .con1 {
                width: 500px;
                height: 200px;
                background: linear-gradient(to right, red, orange, yellow);
            }
        </style>
    </head>
    <body>
        <div class="con1">CSS Gradients</div>
    </body>
</html>
            
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                This code will create a gradient that transitions from red to orange to yellow, moving from left to right.
            </p>

            <h2> Radial-Gradient </h2>
            <p>
                Radial-gradient is another popular feature that allows you to create a gradient that radiates out from a center point. To use radial-gradient in CSS, you need to specify the center point of the gradient, the shape of the gradient, and the colors used in the gradient.
            </p>
            <CodeBlock
            code={`
            
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS Gradients</title>
        <style>

            .con2 {
                width: 500px;
                height: 200px;
                background: radial-gradient(circle, red, yellow);
            }
        </style>
    </head>
    <body>
        <div class="con2">CSS Gradients</div>
    </body>
</html>
            
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                This code will create a gradient effect that transitions from red to yellow and fills the container with a circular gradient.
            </p>

            <p>
            You can also specify the position and shape of the gradient. For example:
            </p>
            <CodeBlock
            code={`
            
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS Gradients</title>
        <style>

            .con3 {
                width: 500px;
                height: 200px;
                background: radial-gradient(closest-side at 60% 80%, red, yellow);
            }
        </style>
    </head>
    <body>
        <div class="con3">CSS Gradients</div>
    </body>
</html>
            
            `}
            language="html"
            showCodeEditor={true}
            />

            <p> This code will create a gradient that radiates out from 60% of the width and 80% of the height of the container to its closest side, with red to yellow color transition.</p>

            <h2> Conic-Gradient </h2>
            <p>
                Conic-gradient is a new feature in CSS that allows you to create a gradient that radiates out from a center point in a circular shape, like a pie chart. To use conic-gradient, you need to specify the center point of the gradient and the colors used in the gradient.
            </p>
            <CodeBlock
            code={`
            
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS Gradients</title>
        <style>

            .con4 {
                width: 500px;
                height: 200px;
                background: conic-gradient(red, yellow, green, blue, purple, red);
            }
        </style>
    </head>
    <body>
        <div class="con4">CSS Gradients</div>
    </body>
</html>
            
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                This code will create a gradient effect that transitions from red to yellow to green to blue to purple and back to red, in a pie chart like fashion.
            </p>

            <p>
                You could also specify the direction and the starting point of the gradient.
            </p>
            <CodeBlock
            code={`
            
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS Gradients</title>
        <style>

            .con5 {
                width: 500px;
                height: 200px;
                background: conic-gradient(from 120deg at 50% 50%, red, yellow, green, blue, purple, red);
            }
        </style>
    </head>
    <body>
        <div class="con5">CSS Gradients</div>
    </body>
</html>
            
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                This code will create a gradient that starts at 120 degrees from the top of the container and radiates out from the center, with red to yellow to green to blue to purple and back to red color transition.
            </p>

            <h2> Repeating-Linear-Gradient and Repeating-Radial-Gradient </h2>
            <p>
                Repeating-linear-gradient and repeating-radial-gradient are similar to linear-gradient and radial-gradient, respectively. The only difference is that they repeat the gradient pattern instead of stopping at the end of the container.
            </p>
            <CodeBlock
            code={`
            
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS Gradients</title>
        <style>

            .con6 {
                width: 500px;
                height: 200px;
                background: repeating-linear-gradient(red, orange, yellow 100px);
            }
        </style>
    </head>
    <body>
        <div class="con6">CSS Gradients</div>
    </body>
</html>
            
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
            This code will create a gradient effect that repeats from red to orange to yellow every 100 pixels.
            </p>
            <CodeBlock
            code={`
            
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS Gradients</title>
        <style>

            .con7 {
                width: 500px;
                height: 200px;
                background: repeating-radial-gradient(circle, red, yellow 100px);
            }
        </style>
    </head>
    <body>
        <div class="con7">CSS Gradients</div>
    </body>
</html>
            
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                This code will create a circular gradient effect that repeats from red to yellow every 100 pixels.
            </p>

            <h1> Conclusion </h1>
            <p>
                CSS gradients allow you to create visually stunning backgrounds for your web page. With linear-gradient, radial-gradient, conic-gradient, repeating-linear-gradient, and repeating-radial-gradient, you have the flexibility to create a wide range of gradients that are sure to impress your visitors. Try experimenting with these gradients and see which effect works best for your website.
            </p>
        </div>
    )
}
