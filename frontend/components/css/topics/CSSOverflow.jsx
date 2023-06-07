import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSOverflow() {

    return (
        <div>
            <h1> CSS Overflow Property </h1>
            <p>
                The overflow property in CSS is used to control how content overflows an element's box. It determines what happens when the content of an element exceeds the height and width of the element's box.
            </p>

            <h1> Values </h1>
            <p>
                The overflow property can have four different values:
            </p>

            <h2> 1. Visible </h2>
            <p>
                visible is the default value. When an element's overflow property is set to visible, the content is not clipped, and may flow outside the element's box.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Overflow Visible Example</title>
        <style>
        .visible1 {
            width: 200px;
            height: 100px;
            background-color: gray;
            overflow: visible;
        }
        </style>
    </head>
    <body>
        <h1>Overflow Visible Example</h1>
    <div class="visible1">
        <p> This is a paragraph with a lot of text, which will extend beyond the grey box. </p>
    </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />


            <h2> 2. Hidden </h2>
            <p>
                When an element's overflow property is set to hidden, the content is clipped, and the rest of the content will be invisible. This is useful when you only want to show a portion of content.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Overflow Hidden Example</title>
        <style>
            .hidden1 {
                width: 200px;
                height: 100px;
                background-color: gray;
                overflow: hidden;
            }
        </style>
    </head>

    <body>
        <h1>Overflow Hidden Example</h1>
        <div class="hidden1">
            <p> This is a paragraph with a lot of text, which will be clipped by the gray box. </p>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> 3. Scroll </h2>
            <p>
                When an element's overflow property is set to scroll, the content is clipped, and a scrollbar is added to see the rest of the content. This is useful when you want to show all the content, but want the user to interact with a scrollbar to see the content.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Overflow Scroll Example</title>
        <style>
            .scroll1 {
                width: 200px;
                height: 100px;
                background-color: gray;
                overflow: scroll;
            }
        </style>
    </head>

    <body>
        <h1>Overflow Scroll Example</h1>
        <div class="scroll1">
            <p> This is a paragraph with a lot of text, which will be clipped by the gray box. </p>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />


            <h2> 4. Auto </h2>
            <p>
            When an element's overflow property is set to auto, the content is clipped, and a scrollbar is added only when it is needed. This is useful when you want to show the content but want to keep the appearance of a tidy view.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Overflow Auto Example</title>
        <style>
            .auto1 {
                width: 200px;
                height: 100px;
                background-color: gray;
                overflow: auto;
            }
        </style>
    </head>
    <body>
        <h1>Overflow Auto Example</h1>
        <div class="auto1">
            <p> This is a paragraph with a lot of text, which will be clipped by the gray box. </p>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Conclusion </h1>
            <p>
            The overflow property is used to control the appearance of a content inside an element. The overflow property has four different values including visible, hidden, scroll, and auto. Each value encloses different behaviors to adjust the content inside an element. By understanding these values, developers can create perfectly shaped content inside an element.
            </p>
        </div>
    )
}
