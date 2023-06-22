import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSTransformFuncs() {

    return (
        <div>
            <h1> CSS Transform Functions </h1>
            

            <h2> Translate() </h2>
            <p>
                The translate() function allows you to move an element relative to its current position. It takes two arguments, tx and ty, which represent the horizontal and vertical distance, respectively.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Translate() Example</title>
        <style>
            .myDiv1 {
                background-color: #f1f1f1; /* light grey */
                width: 100px;
                height: 40px;
                border: 1px solid blue;
                transform: translate(50px, 100px);
            }
        </style>
    </head>
    <body>
        <div class="myDiv1"></div>
    </body>
</html>
            `}
            showCodeEditor={true}
            language={"html"}
            />

            <p>
                In this example, the element will be moved 50 pixels to the right and 100 pixels downwards.
            </p>

            <h2> Rotate() </h2>
            <p>
                The rotate() function rotates an element around its origin by a specified angle. It takes one argument, angle, which represents the angle of rotation in degrees.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Rotate() Example</title>
        <style>
            .myDiv2 {
                background-color: #f1f1f1; /* light grey */
                width: 100px;
                height: 40px;
                border: 1px solid blue;
                transform: rotate(45deg);
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
            <p>
                In this example, the element will be rotated 45 degrees clockwise.
            </p>

            <h2> ScaleX() and ScaleY() </h2>
            <p>
                scaleX() scales an element along the horizontal axis by a given factor, while scaleY() scales an element along the vertical axis by a given factor.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>ScaleX() and ScaleY() Example</title>
        <style>
            .myDiv3 {
                background-color: #f1f1f1; /* light grey */
                width: 100px;
                height: 40px;
                border: 1px solid blue;
                transform: scaleX(2) scaleY(0.5);
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
            <p>
                In this example, the element will appear twice as wide as its original size and half as tall.
            </p>

            <h2> Scale() </h2>
            <p>
                The scale() function scales an element along both the horizontal and vertical axes by the same factor. It takes one argument, factor, which represents the scaling factor.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Scale() Example</title>
        <style>
            .myDiv4 {
                background-color: #f1f1f1; /* light grey */
                width: 100px;
                height: 40px;
                border: 1px solid blue;
                transform: scale(1.5);
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
            <p>In this example, the element will be scaled by a factor of 1.5 along both axes.</p>

            <h2> SkewX() and SkewY() </h2>
            <p>
                skewX() skews an element along the horizontal axis by a given angle, while skewY() skews an element along the vertical axis by a given angle.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>SkewX() and SkewY() Example</title>
        <style>
            .myDiv5 {
                background-color: #f1f1f1; /* light grey */
                width: 100px;
                height: 40px;
                border: 1px solid blue;
                transform: skewX(30deg) skewY(10deg);
            }
        </style>
    </head>
    <body>
        <div class="myDiv5"></div>
    </body>
</html>
            `}
            language={"html"}
            showCodeEditor={true}
            />

            <p>
                In this example, the element will be skewed 30 degrees along the horizontal axis and 10 degrees along the vertical axis.
            </p>

            <h2> Skew() </h2>
            <p>
                The skew() function skews an element along both the horizontal and vertical axes by a given angle. It takes two arguments, angleX and angleY, which represent the angles of skew along the horizontal and vertical axes, respectively.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Skew() Example</title>
        <style>
            .myDiv6 {
                background-color: #f1f1f1; /* light grey */
                width: 100px;
                height: 40px;
                border: 1px solid blue;
                transform: skew(10deg, 20deg);
            }
        </style>
    </head>
    <body>
        <div class="myDiv6"></div>
    </body>
</html>
            `}
            language={"html"}
            showCodeEditor={true}
            />

            <p>
                In this example, the element will be skewed 10 degrees along the horizontal axis and 20 degrees along the vertical axis.
            </p>

            <h2> Matrix()</h2>
            <p>
                The matrix() function allows you to perform multiple transformations at once using a 2D transformation matrix. The transformation matrix is a 2x3 or 3x3 array of numbers that represents a combination of translation, rotation, scaling, and skewing.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Matrix() Example</title>
        <style>
            .myDiv7 {
                background-color: #f1f1f1; /* light grey */
                width: 100px;
                height: 40px;
                border: 1px solid blue;
                transform: matrix(1, -0.3, 0, 1, 0, 0);
            }
        </style>
    </head>
    <body>
        <div class="myDiv7"></div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, the transformation matrix will perform a skew transformation along the x-axis, with a shear angle of -0.3 radians. The last two values of the matrix (0 and 0) represent the x and y translation values, respectively.
            </p>
        </div>
    )
}
