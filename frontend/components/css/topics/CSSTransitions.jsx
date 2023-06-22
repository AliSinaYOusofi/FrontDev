import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSTransitions() {

    return (
        <div>
            <h1> CSS Transitions </h1>
            <p>
                CSS Transitions allow for smoother changes between CSS property values. It is a property that allows elements to gradually change from one style to another over a period of time. It is a great way to add a professional touch to web pages. In this article, we will cover the following properties related to CSS transitions:
            </p>
            <ul className="ml-10 list-disc">
                <li> transition </li>
                <li> transition-delay </li>
                <li> transition-duration </li>
                <li> transition-property </li>
                <li> transition-timing-function </li>
            </ul>

            <p>
                We’ll be using the following HTML and CSS code as an example throughout the article.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>CSS Transition Example</title>
        <style>
            .box {
                background-color: #f00;
                width: 100px;
                height: 100px;
                transition: all 1s ease-in-out;
            }

            .box:hover {
                background-color: #ff0;
                transform: scale(1.1);
            }
        </style>
    </head>
    <body>
        <h1>CSS Transition Example</h1>
        <div class="box"></div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                We have created a simple red box with a transition that changes color and scales slightly when it is hovered over.
            </p>

            <h2> transition </h2>
            <p>
                The transition property is used to specify the CSS properties that should undergo a transition. It determines which CSS properties to transition and how long it should take.
            </p>
            <CodeBlock
            code={`
.box {
    transition: all 1s ease-in-out;
}
            `}
            onlyCode={true}
            language={"css"}
            />

            <p>
                In this case, we have set the transition property on the .box class to specify that all properties should undergo a transition over 1s with an ease-in-out timing function.
            </p>

            <h2> transition-delay </h2>
            <p>
                The transition-delay property determines the delay time before the transition effect starts. 
            </p>
            <CodeBlock
            code={`
.box {
    transition-delay: 0.5s;
}
            `}
            onlyCode={true}
            language={"css"}
            />
            <p>
                In this example, there is a delay of 0.5s before the transition effect starts.
            </p>

            <h2> transition-duration </h2>
            <p>
                The transition-duration property specifies the duration of the transition effect.
            </p>
            <CodeBlock
            code={`
.box {
    transition-delay: 0.5s;
}
            `}
            onlyCode={true}
            language={"css"}
            />

            <p>In this case, the transition effect for all properties lasts 2s.  </p>

            <h2> transition-property </h2>
            <p>
            The transition-property property specifies the name of the CSS property being transitioned.
            </p>
            <CodeBlock
            code={`
.box {
    transition-property: background-color;
}
            `}
            onlyCode={true}
            language={"css"}
            />
            <p>
            In this case, only the background-color property is being transitioned.
            </p>

            <h2> transition-timing-function </h2>
            <p>
                The transition-timing-function property specifies the timing function to be used for the transition.
            </p>
            <CodeBlock
            code={`
.box {
    transition-timing-function: linear;
}
            `}
            onlyCode={true}
            language={"css"}
            />

            <p>
             In this case, the linear timing function has been used, which makes the transition effect occur at a consistent rate.
            </p>

            <h2> Conclusion </h2>
            <p>
                CSS transitions are a simple and effective way to add professional animations to your web pages. With the transition, transition-delay, transition-duration, transition-property, and transition-timing-function properties, you have complete control over the animation. They are a great way to enhance user experience and add a touch of interactivity to the website.
            </p>

        </div>
    )
}
