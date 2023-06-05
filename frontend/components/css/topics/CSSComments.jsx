import CodeBlock from '@/components/Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation'
import React from 'react'
import { animated } from '@react-spring/web';
export default function CSSComments() {

    const [spring] = useSlideAnimation();

    return (
        <animated.div style={spring}>

            <h1> CSS Comments </h1>
            <p>Comments are texts that explain the code, provide context, and help developers organize their work. It is crucial to understand how to use comments in CSS because they make code readable, understandable, and easy to maintain.</p>

            <h2>Why Use CSS Comments</h2>
            <p>
                CSS comments are lines of code that are not executed by the browser but are visible in the code editor. Comments provide a way to write notes and explanations within the CSS code for other developers or even for the future version of yourself. Comments allow developers to test and debug code while hiding specific lines of code that are not relevant to a particular issue. Comments also provide information about the author, date, or purpose of a particular block of CSS code.
            </p>

            <p> For example, let's say you have a CSS file with the following code: </p>
            <CodeBlock
            code={`
/* This is the CSS for the header section */
header {
    background-color: blue;
    color: white;
    font-size: 32px;
}

/* This is the CSS for the main content section */
#main-content {
    background-color: white;
    color: black;
    font-size: 16px;
}
            `}
            language={"css"}
            onlyCode={true}
            />

            <p>
                In this code example, the comments provide context for the CSS selectors. The comments explain what each block of CSS code does, making the CSS more readable and easier to understand. In addition, comments can help others to quickly understand the code's purpose or the author's intent.
            </p>

            <h1> How to Write CSS Comments </h1>
            <p>
                In CSS, comments are written between /* and */. For example, suppose you want to add a comment to a CSS selector. In that case, you can add the comment to the beginning of the line, or you can add it after the CSS declaration.
            </p>
            <CodeBlock
            code={`
            /* Add a comment to the beginning of a CSS line */
p {
  /* This is a comment for the font size property */
    font-size: 16px;
}

/* Add a comment after the CSS declaration */
p {
    font-size: 16px; /* This is a comment for the font size property */
}
            `}
            language={"css"}
            onlyCode={true}
            />

            <p> CSS comments can also be used to temporarily disable code while testing or debugging. For example, let's say you have a CSS file with the following code: </p>
            <CodeBlock
            code={`
/* Add a background color to the body */
body {
    background-color: white;
}

/* Change the font size for the header */
header {
    font-size: 24px;
}
            `}
            language={"css"}
            onlyCode={true}
            />

            <p>If you want to test the effect of removing the body background color, you can add a comment to disable the line:</p>
            <CodeBlock
            code={`
/* Add a background color to the body */
/* body {
    background-color: white;
} */

/* Change the font size for the header */
header {
    font-size: 24px;
}
            `}
            onlyCode={true}
            language="css"
            />

            <p>By commenting out the body selector, you can see the effect of removing the background color without deleting the line.</p>

            <h2>
                Try to comment and ucomment the following code
            </h2>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>

    <head>
        <title>CSS Comments Example</title>
        <style>
        /* Add a background color to the h6 */
        /* h6 {
            color: darkgray;
        } */

        /* Change the font size for the header */
        header {
            background-color: blue;
        }
        </style>
    </head>

    <body>
        <header>Welcome to my website!</header>
        <h6>This is an example of CSS comments.</h6>
    </body>
</html>
            `}
            language={"html"}
            showCodeEditor={true}
            />
            <h1> Conclusion </h1>
            <p>
                CSS comments play a vital role in making code readable, understandable, and easy to maintain. Comments provide context and explanations within the CSS code, which can be helpful to other developers or the future version of yourself. By using CSS comments, you can also test and debug code while hiding specific lines of code that are not relevant to a particular issue. Knowing how to use CSS comments effectively is an important aspect of CSS development.
            </p>
        </animated.div>
    )
}
