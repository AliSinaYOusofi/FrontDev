import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSFlexContainer() {

    return (
        <div>
            <h1> CSS flex container</h1>
            <p>
                The display property with a value of "flex" or "inline-flex" is used to create a flex container. Its child elements become flex items and are laid out using flexbox.
            </p>

            <h1> Flexbox properties </h1>
            
            <h2>flex-direction </h2>
            <p>
                This property sets the direction of the flex container. The default value is row, which means that flex items are laid out horizontally. Other available values are row-reverse (reverse order of row), column (top to bottom), and column-reverse (bottom to top).
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Flex-Direction Property Example</title>
        <style>
            .flex-example {
                display: flex;
                flex-direction: row-reverse;
            }
        </style>
    </head>
    <body>
        <div class="flex-example">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> flex-wrap </h2>
            <p>
                This property allows items to wrap within the container if there is not enough space. The default value of nowrap means that flex items will not wrap. Other available values are wrap (items wrap onto multiple lines) and wrap-reverse (items wrap onto multiple lines in reverse order).
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Flex-Wrap Property Example</title>
        <style>
            .flex-example1 {
                display: flex;
                flex-wrap: wrap;
            }
            .flex-example1 div {
                flex-basis: 40%;
                margin: 10px;
                height: 100px;
                background-color: #5EADB5;
            }
        </style>
    </head>
    <body>
        <div class="flex-example1">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
            <div>Item 7</div>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> flex-flow </h2>
            <p>
            This property is a shorthand for the flex-direction and flex-wrap properties. It allows you to set these two properties at once. The default value is row nowrap.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Flex-Flow Property Example</title>
        <style>
            .flex-example2 {
                display: flex;
                flex-flow: column wrap;
            }
            .flex-example2 div {
                flex-basis: 100px;
                height: 100px;
                background-color: #5EADB5;
            }
        </style>
    </head>
    <body>
        <div class="flex-example2">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
            <div>Item 7</div>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> justify-content </h2>
            <p>
                This property is used to align items along the main axis. The default value is flex-start, which positions items at the start of the container. Other available values are center (centers items), flex-end (positions items at the end of the container), space-between (distributes the space between items), and space-around (distributes the space evenly around items).
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Justify-Content Property Example</title>
        <style>
            .flex-example3 {
                display: flex;
                justify-content: space-between;
            }
            .flex-example3 div {
                flex-basis: 100px;
                height: 100px;
                background-color: #5EADB5;
            }
        </style>
    </head>
    <body>
        <div class="flex-example3">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> align-items </h2>
            <p>This property is used to align items along the cross axis. The default value is stretch, which stretches items to fill the container. Other available values are center (positions items at the center of the container), flex-start (positions items at the start of the cross axis), flex-end (positions items at the end of the cross axis), baseline (aligns items at their baseline), and stretch (stretches items to fill the container along the cross axis).</p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Align-Items Property Example</title>
        <style>
            .flex-example4 {
                display: flex;
                align-items: center;
            }
            .flex-example4 div {
                flex-basis: 100px;
                height: 100px;
                background-color: #5EADB5;
                margin-right: 10px;
            }
            .flex-example div:last-child {
                margin-right: 0;
            }
        </style>
    </head>
    <body>
        <div class="flex-example4">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> align-content </h2>
            <p>
                This property is used to align flex lines within a flex container when there is extra space on the cross axis. It works only when there is more than one line of flex items. The default value is stretch, which stretches the lines to fill the container. Other available values are center (centers the lines in the middle of the container), flex-start (positions the lines at the beginning of the cross axis), flex-end (positions lines at the ends of the cross axis , space-between (distributes the space between lines), and space-around (distributes the space-around lines).
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Align-Content Property Example</title>
        <style>
            .flex-example5 {
                display: flex;
                flex-wrap: wrap;
                height: 300px;
                align-items: center;
                align-content: space-between;
            }
            .flex-example5 div {
                flex-basis: 100px;
                height: 100px;
                background-color: #5EADB5;
            }
        </style>
    </head>
    <body>
        <div class="flex-example5">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
            <div>Item 7</div>
        </div>
    </body>
</html>
            `}
            language={"html"}
            showCodeEditor={true}
            />

            <h1> Conclusion </h1>
            <p>
                In conclusion, the Flexbox layout module offers a powerful way to create flexible layouts that adapt to different screen sizes and devices. By using these properties, you can position, align and distribute elements inside the container easily.
            </p>
        </div>
    )
}
