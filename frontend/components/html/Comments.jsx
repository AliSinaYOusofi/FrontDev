import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import { animated} from "@react-spring/web";
import useSlideAnimation from '@/hooks/useSlideAnimation';

export default function Comments() {

    const [spring] = useSlideAnimation();
    return (
        <animated.div style={spring} key={spring.key}>
            <h1>HTML Comments</h1>
            <p>
                HTML comments are annotations added to the source code of a web page to help developers 
                explain their code or remind themselves for future reference. Comments are not shown on 
                the final web page and won't affect how the page displays in a web browser. 
                They are only visible to developers who view the source code.
            </p>

            <h1 className="mt-10"> Why Use Comments in HTML? </h1>
            <ol className="list-decimal ml-20">
                <li> Developers can use comments in HTML to explain their code for their benefits or other developers that work on the same project. </li>
                <li> Comments can also help in debugging code by removing faulty code temporarily with a comment, rather than deleting the code.</li>
                <li> Comments add context and clarity to code, which can help other developers better understand the functionality of a web page.</li>
                <li> Comments can also be used as a reminder for future updates or changes to the website.</li>
            </ol>

            <h1 className="mt-10">How to Add Comments to HTML Code</h1>
            <p>
                HTML comments start with {"<!--"} and end with{" -->"}. Anything within these opening and closing tags is considered a comment.
            </p>
            <CodeBlock
            code={
    `<!DOCTYPE html>
    <html>
    <head>
        <title>My Web Page</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- This is a comment that explains the purpose of the meta tag above -->
        <link rel="stylesheet" href="style.css">
        <!-- CSS file link above -->
    </head>
    <body>
        <h1>Welcome to my web page</h1>
        <p>Here is some content for my web page.</p>
        <!-- This is a comment for future updates to the content above -->
    </body>
    </html>`
            }
            language="html"
            showCodeEditor={true}
            />

            <p>
                In the example above, the first comment explains the purpose of the meta tag and helps other developers to understand why the tag is present. The second comment is added as a reminder for future updates to the content.
            </p>
            
            <h1 className="mt-10">Note</h1>
            <p>
                One important thing to keep in mind is that comments should not be overused and should only be added when necessary. Overuse of comments can make the code difficult to read and understand. In addition, excess comments can slow down the page's loading time.
            </p>

            <h1 className="mt-10">Conclusion</h1>
            <p>
            HTML comments are an essential tool for web developers in structuring their codes 
            and projects. Use them wisely to improve collaboration, add context, and help other 
            developers understand your code. With HTML comments, developers 
            can turn confusing and complex code into easy-to-read and well-organized pages.
            </p>
        </animated.div>
    )
}
