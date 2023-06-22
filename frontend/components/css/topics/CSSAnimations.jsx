import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSAnimations() {

    return (
        <div>
            <h1> CSS Animations </h1>
            <p>
                CSS animations have been around for quite some time now, and they allow you to create dynamic and engaging web designs. Animations help to provide visual feedback to users which enhances their experience on a website.
            </p>

            <p>
                We’ll be using the following HTML and CSS code as an example throughout the article.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>CSS Animations Example</title>
        <style>
            .box1 {
                width: 100px;
                height: 100px;
                background-color: #f00;
                position: relative;
                animation-name: move;
                animation-duration: 6s;
                animation-fill-mode: forwards;
            }

            @keyframes move {
                from {
                    left: 0;
                }
                to {
                    left: 200px;
                }
            }
        </style>
    </head>

    <body>
        <div class="box1"></div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                We have created a simple red box that moves from left to right using CSS animations. Let’s understand how it works.
            </p>

            <h2> @keyframes </h2>
            <p>
                @keyframes is used to define the behavior of an animation. It consists of two parts - the animation name and the rules for the animation.
            </p>

            <CodeBlock
            code={`
@keyframes move {
    from {
        left: 0;
    }
    to {
        left: 200px;
    }
}
            `}
            onlyCode={true}
            language="css"
            />
            <p>
                Here, we have created an animation called move, which changes the left property of the box from 0 to 200px over a duration of 2s.
            </p>

            <h2> animation-name </h2>
            <p>
                The animation-name property specifies the name of the animation that should be applied to the element.
            </p>
            <CodeBlock
            code={`
.box1 {
    animation-name: move;
}
            `}
            onlyCode={true}
            language={"css"}
            />
            <p> In this case, the move animation is applied to the .box1 element. </p>

            <h2> animation-duration </h2>
            <p>
            The animation-duration property specifies the duration of the animation.
            </p>
            <CodeBlock
            code={`
.box1 {
    animation-duration: 2s;
}
            `}
            language="css"
            onlyCode={true}
            />
            <p> In this case, the animation lasts for 2s. </p>

            <h2> animation-delay </h2>
            <p>
                The animation-delay property specifies the delay before the animation starts.
            </p>
            <CodeBlock
            code={`
.box1 {
    animation-delay: 1s;
}
            `}
            onlyCode={true}
            language="css"
            />

            <p>
                In this case, there is a delay of 1s before the animation starts.
            </p>

            <h2> animation-iteration-count </h2>
            <p>
                The animation-iteration-count property specifies the number of times the animation is repeated.
            </p>
            <CodeBlock
            code={`
.box1 {
    animation-iteration-count: infinite;
}
            `}
            onlyCode={true}
            language="css"
            />
            <p>
                In this case, the animation is repeated infinite times.
            </p>

            <h2> animation-direction </h2>
            <p>
                The animation-direction property specifies the direction of the animation.
            </p>
            <CodeBlock
            code={`
.box1 {
    animation-direction: reverse;
}
            `}
            onlyCode={true}
            language="css"
            />
            <p>
                In this case, the animation is played in reverse direction.
            </p>

            <h2> animation-timing-function </h2>
            <p>
                The animation-timing-function property specifies the speed curve of the animation.
            </p>
            <CodeBlock
            code={`
.box1 {
    animation-timing-function: ease-in-out;
}
            `}
            language="css"
            onlyCode={true}
            />
            <p>
                In this case, the ease-in-out timing function is used, which starts slow, accelerates in the middle, and then slows down again.
            </p>

            <h2> animation-fill-mode </h2>
            <p>
                The animation-fill-mode property specifies what the element should do when the animation is not playing.
            </p>
            <CodeBlock
            code={`
.box1 {
    animation-fill-mode: forwards;
}
            `}
            onlyCode={true}
            language="css"
            />

            <p>
                In this case, the final state of the animation is retained after the animation completes.
            </p>

            <h2> animation </h2>
            <p>
                The animation shorthand property is used to specify all the animation properties in a single line.
            </p>

            <CodeBlock
            code={`
.box1 {
    animation: move 2s ease-in-out 1s infinite reverse forwards;
}
            `}
            language="css"
            onlyCode={true}
            />

            <p>
            In this case, we have used the shorthand property to specify the animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, and animation-fill-mode properties.
            </p>
        </div>
    )
}
