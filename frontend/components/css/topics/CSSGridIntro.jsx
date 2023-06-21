import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSGridIntro() {

    return (
        <div>
            <h1> Introduction to CSS Grid </h1>
            <p>
                CSS Grid is a powerful layout module introduced in CSS3 that creates a two-dimensional grid-based layout system that makes it easier to create more complex and responsive web layouts. It allows designers and developers to create complex layouts with a mix of rows and columns without the need for additional HTML or CSS code. It provides advanced features that give greater control over the placement and sizing of the elements within a grid, making it easier to design and code complex, responsive layouts.
            </p>

            <p>In this section, we will explore some of the essential properties used in CSS Grid layouts and provide examples demonstrating how each property works.</p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>CSS Grid Example - Grid Container</title>
        <style>
            .grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(3, 100px);
                grid-gap: 10px;
            }
            
            .grid-item {
                background-color: #ddd;
                padding: 20px;
                font-size: 24px;
            }
        </style>
    </head>
    <body>
        <div class="grid">
            <div class="grid-item">Item 1</div>
            <div class="grid-item">Item 2</div>
            <div class="grid-item">Item 3</div>
            <div class="grid-item">Item 4</div>
            <div class="grid-item">Item 5</div>
            <div class="grid-item">Item 6</div>
            <div class="grid-item">Item 7</div>
            <div class="grid-item">Item 8</div>
            <div class="grid-item">Item 9</div>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we have a grid container with a total of nine grid items. The CSS used here specifies that the grid container has three columns with equal widths and three rows with 100 pixels each. Columns are set to ‘1fr’ to make them occupy the same amount of available space. Grid gaps make the outer edges have a spacing of 10px.
            </p>

            <p>
                The class .grid-item is used to style each grid item with a gray background, 20px padding and 24px font size.
            </p>

            <p>
                The result is a 3×3 grid layout with equal sized columns and fixed row height of 100px.
            </p>

            <h1> Conclusion </h1>
            <p>
                In conclusion, CSS Grid provides a flexible and powerful way to create complex and advanced web layouts. It offers a range of properties to help designers and developers create grid-based web experiences with a depth of control not seen before. The above example demonstrates how just a few lines of CSS can create a complex grid layout for any web page.
            </p>
        </div>
    )
}
