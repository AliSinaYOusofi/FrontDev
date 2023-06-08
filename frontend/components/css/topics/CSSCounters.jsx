import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSCounters() {
    return (
        <div>
            <h1> CSS counters</h1>
            <p>
                CSS counters are a powerful tool that enables us to generate content dynamically or apply certain styles to specific elements or portions of our websites. Counters allow us to specify a number that tracks how many times a certain element appears on a page.
            </p>

            <p>
                In this part, we will explain each of the following CSS counter properties with examples:
            </p>

            <ul className="ml-10 list-disc">
                <li> counter-reset</li>
                <li> counter-increment </li>
                <li> content</li>
                <li> counter() or counters()</li>
            </ul>

            <h2>
                Counter-reset
            </h2>

            <p>
                Counter-reset sets the initial value of a counter and creates it if it doesn't already exist. We can use this property to reset an existing counter's value to zero or create a new counter. The value assigned represents the initial value for the counter when it is reset.
            </p>

            <h2> Content </h2>
            <p>
                Content is used to specify the content to be displayed on web pages and can also include counters. With the content property, we can insert text, images, or symbols before, after, or within elements on our website.
            </p>

            <p> Here is an example of content, and counter-reset</p>

            <CodeBlock
            code={
               `
<!DOCTYPE html>
<html>
    <head>
        <title>My Stylish Numbered List Example</title>
        <style>
            .ul {
                counter-reset: my-counter;
                list-style-type: none;
                margin: 0;
                padding: 0;
            }
            .ul li::before {
                counter-increment: my-counter;
                content: counter(my-counter) ". ";
                font-weight: bold;
                margin-right: 10px;
            }
        </style>
    </head>
    <body>
        <h2>My Stylish Numbered List</h2>
        <ul class="ul">
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
            <li>Item Four</li>
            <li>Item Five</li>
        </ul>
    </body>
</html>
               ` 
            }
            language="html"
            showCodeEditor={true}
            />

            <h2> Counter() or counters() </h2>
            <p>
                Counter() and counters() are both functions used with content property to insert content corresponding to a counter.
            </p>

            <p>
                counter() function is used to insert the current value of the specified counter. Here's an example for this function:
            </p>
            
            <CodeBlock
            code={
               `
<!DOCTYPE html>
<html>
    <head>
        <title>My Nested List Example</title>
        <style>
            .ol {
                counter-reset: chapter;
                list-style-type: none;
                margin: 0;
                padding: 0;
            }
            .ol li::before {
                content: counters(chapter, ".") " ";
                counter-increment: chapter;
                font-weight: bold;
                margin-right: 10px;
            }

            .sub, .space {
                margin-left: 15px;
            }
        </style>
    </head>
    <body>
        <h2>My Nested List</h2>
        <ol class="ol">
            <li>Chapter One</li>
            <li>Chapter Two
                <ol class="ol space">
                    <li>Section One</li>
                    <li>Section Two
                        <ol class="sub">
                            <li>Subsection One</li>
                            <li>Subsection Two</li>
                        </ol>
                    </li>
                    <li>Section Three</li>
                </ol> 
            </li>
            <li>Chapter Three</li>
        </ol>
    </body>
</html>
               ` 
            }
            language="html"
            showCodeEditor={true}
            />

            <h2> Counter-increment </h2>
            <p>
                Counter-increment increases the value of the counter by a specified amount. We can use this property to increment an existing counter's value by any desired amount.
            </p>

            <p>
            Here's an example:
            </p>

            <CodeBlock
            code={
               `
<!DOCTYPE html>
<html>
    <head>
    <title>Increment by 10 Example</title>
        <style>
            .counter {
                counter-reset: my-counter;
            }

            .my-class:before {
                counter-increment: my-counter 10;
                content: counter(my-counter);
            }

            .my-class {
                margin-left: 5px;
            }
        </style>
    </head>
    <body>
        <div class="counter">
            <p class="my-class"> Will be incremented by 10</p>
            <p class="my-class"> Will be incremented by 10</p>
            <p class="my-class"> Will be incremented by 10</p>
        </div>
    </body>
</html>
               ` 
            }
            language="html"
            showCodeEditor={true}
            />

            <h1> Conclusion </h1>
            <p>
            In conclusion, CSS counters provide an efficient and customizable way to insert dynamic content and styles to web pages. By understanding and utilizing the counter-reset, counter-increment, content, and counter() or counters() properties, web designers can create a wide variety of layouts and effects that cater to the needs of different websites and web pages.
            </p>
        </div>
    )
}
