import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSTables() {

    return (
        <div>
            <h1> CSS Tables</h1>
            <p>
                Tables are commonly used to present data or information in a structured format. While HTML offers ways to create tables, they can be challenging to style without the help of CSS. With the use of CSS, we can customize the look and feel of tables to match our website's design language. In this part, we will explore different CSS properties used to style tables, including table width and height, table borders, table padding, table hover effects, and table nth-child(even || odd).
            </p>

            <h2> table width and height </h2>
            <p>
                The table width and height properties determine the width and height of the table. Here's an example that demonstrates how these properties can be used:
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Table Styling Example: Width and Height</title>
        <style>
        .table-custom {
            width: 100%;
            height: 200px;
        }
        </style>
    </head>
    <body>
        <h1>Table Styling Example: Width and Height</h1>
        <table class="table-custom">
            <thead>
                <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    <th>Header 3</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Row 1, Column 1</td>
                    <td>Row 1, Column 2</td>
                    <td>Row 1, Column 3</td>
                </tr>

                <tr>
                    <td>Row 2, Column 1</td>
                    <td>Row 2, Column 2</td>
                    <td>Row 2, Column 3</td>
                </tr>

                <tr>
                    <td>Row 3, Column 1</td>
                    <td>Row 3, Column 2</td>
                    <td>Row 3, Column 3</td>
                </tr>
            </tbody>
        </table>
    </body>
            </html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we've used the table width and height properties to set the width of the table to 100% of the parent container and the height to 200px.
            </p>

            <h2> table padding </h2>
            <p>
            The table padding property adds space inside the table cells. Here's an example that demonstrates how this property can be used:
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Table Styling Example: Padding</title>
        <style>
        #table-custom {
            border: 2px solid #000;
            border-spacing: 0;
            border-collapse: collapse;
            padding: 10px;
        }
        th,
        td {
            border: 1px solid #000;
            padding: 5px;
        }
        </style>
    </head>
    <body>
        <h1>Table Styling Example: Padding</h1>
        <table id="table-custom">

            <thead>
                <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    <th>Header 3</th>
                </tr>
            </thead>

            <tbody>

                <tr>
                    <td>Row 1, Column 1</td>
                    <td>Row 1, Column 2</td>
                    <td>Row 1, Column 3</td>
                </tr>

                <tr>
                    <td>Row 2, Column 1</td>
                    <td>Row 2, Column 2</td>
                    <td>Row 2, Column 3</td>
                </tr>

                <tr>
                    <td>Row 3, Column 1</td>
                    <td>Row 3, Column 2</td>
                    <td>Row 3, Column 3</td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
            In this example, we've added padding: 10px to the table element to add space inside the table cells. We've also added padding: 5px to the th and td selectors to add space inside the table header and data cells.
            </p>

            <h2> table borders </h2>
            <p>
                The table borders property determines the border, border-spacing, and border-collapse of the table. Here's an example that demonstrates how these properties can be used:
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Table Styling Example: Hover effect</title>
        <style>
        .table-custom1 {
            border: 2px solid #000;
            border-spacing: 0;
            border-collapse: collapse;
            padding: 10px;
        }
        </style>
    </head>
    <body>
        <h1>Table Styling Example: Hover effect</h1>
        <table class="table-custom1">
        <thead>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Row 1, Column 1</td>
                <td>Row 1, Column 2</td>
                <td>Row 1, Column 3</td>
            </tr>

            <tr>
                <td>Row 2, Column 1</td>
                <td>Row 2, Column 2</td>
                <td>Row 2, Column 3</td>
            </tr>

            <tr>
                <td>Row 3, Column 1</td>
                <td>Row 3, Column 2</td>
                <td>Row 3, Column 3</td>
            </tr>

        </tbody>
        </table>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}

            />

            <p>
                In this example, we've used the table borders property to create a black border around the table using the border property. We've also set the border-spacing to 0 and the border-collapse to collapse to remove gaps between the borders of the table.
            </p>

            <h2> table hover effects </h2>
            <p>
                The table hover property adds a hover effect to the table rows when the mouse is hovered over a table row. Here's an example that demonstrates how this property can be used:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Table Styling Example: Hover effect</title>
        <style>
        .table-custom4 {
            margin-top: 10px;
            border: 2px solid #000;
            border-spacing: 0;
            border-collapse: collapse;
            padding: 10px;
        }
        .table-custom4 tr:hover {
            background-color: #ddd;
            padding: 10px;
        }
        .table-custom4 th,
        .table-custom4 td {
            border: 1px solid white;
            padding: 10px;
        }
        </style>
    </head>
    <body>
        <h1>Table Styling Example: Hover effect</h1>
        <table class="table-custom4">
        <thead>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Row 1, Column 1</td>
                <td>Row 1, Column 2</td>
                <td>Row 1, Column 3</td>
            </tr>

            <tr>
                <td>Row 2, Column 1</td>
                <td>Row 2, Column 2</td>
                <td>Row 2, Column 3</td>
            </tr>

            <tr>
                <td>Row 3, Column 1</td>
                <td>Row 3, Column 2</td>
                <td>Row 3, Column 3</td>
            </tr>
        </tbody>
        </table>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}

            />
            <p>
            The tr:hover selector is used to apply the background-color property to the tr elements when hovered over with the mouse. In this example, we've set the background color of the table row to light gray using background-color: #ddd; when hovered over with the mouse.
            </p>
        </div>
    )
}
