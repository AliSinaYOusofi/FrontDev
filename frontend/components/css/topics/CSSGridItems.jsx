import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSGridItems() {

    return (
        <div>
            <h1> CSS Grid Items Properties  </h1>
            <p>
                CSS Grid is a powerful layout module introduced in CSS3 that creates a two-dimensional grid-based layout system that makes it easier to create more complex and responsive web layouts. In this blog post, we will explore some of the essential properties used in CSS Grid layouts for the grid items.
            </p>

            <h2> grid-column </h2>
            <p>
                The grid-column property specifies the position and width of a grid item along the grid's columns. It accepts a start and end value separated by a slash.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>CSS Grid Example - Grid Column</title>
        <style>
            .grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 10px;
            }
            
            .item {
                background-color: #ddd;
                padding: 20px;
                font-size: 24px;
            }
            
            .first-item {
                grid-column: 1/3;
            }
            
            .second-item {
                grid-column: 2/4;
            }
        </style>
    </head>
    <body>
        <div class="grid">
            <div class="item first-item">Item 1</div>
            <div class="item second-item">Item 2</div>
            <div class="item">Item 3</div>
            <div class="item">Item 4</div>
            <div class="item">Item 5</div>
            <div class="item">Item 6</div>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we have a grid container with three columns of equal width. The .first-item class occupies the first and second columns using grid-column: 1/3, while the .second-item occupies the second and third columns using grid-column: 2/4.
            </p>

            <h2> grid-row </h2>
            <p>
                The grid-row property specifies the position and height of a grid item along the grid's rows. It also accepts a start and end value separated by a slash.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>CSS Grid Example - Grid Row</title>
        <style>
            .grid1 {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(2, 1fr);
                grid-gap: 10px;
            }
            
            .item1 {
                background-color: #ddd;
                padding: 20px;
                font-size: 24px;
            }
            
            .first-item1 {
                grid-row: 1/3;
            }
            
            .second-item1 {
                grid-row: 2/4;
            }
        </style>
    </head>
    <body>
        <div class="grid">
            <div class="item1 first-item1">Item 1</div>
            <div class="item1 second-item1">Item 2</div>
            <div class="item1">Item 3</div>
            <div class="item1">Item 4</div>
            <div class="item1">Item 5</div>
            <div class="item1">Item 6</div>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we have a grid container with three columns of equal width and two rows of equal height. The .first-item class occupies the first and second rows using grid-row: 1/3, while the .second-item occupies the second and third rows using grid-row: 2/4.
            </p>

            <h2> grid-area</h2>
            <p>
                The grid-area property defines the location and size of a grid item using a combination of start and end row and column line names or values. It simplifies the syntax of using grid-row and grid-column together.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>CSS Grid Example - Grid Area</title>
        <style>
            .grid2 {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(3, 1fr);
                grid-gap: 10px;
            }
            
            .item2 {
                background-color: #ddd;
                padding: 20px;
                font-size: 24px;
            }
            
            .first-item2 {
                grid-area: 1/1/3/3;
            }
            
            .second-item2 {
                grid-area: 2/2/4/4;
            }
        </style>
    </head>
    <body>
        <div class="grid2">
            <div class="item2 first-item2">Item 1</div>
            <div class="item2 second-item2">Item 2</div>
            <div class="item2">Item 3</div>
            <div class="item2">Item 4</div>
            <div class="item2">Item 5</div>
            <div class="item2">Item 6</div>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we have a grid container with three columns of equal width and three rows of equal height. The .first-item class occupies the first two rows and columns using grid-area: 1/1/3/3, while the .second-item class occupies the second two rows and columns using grid-area: 2/2/4/4.
            </p>

            <h1> Conclusion </h1>
            <p>
                CSS Grid provides advanced features that give greater control over the placement and sizing of the elements within a grid, making it easier to design and code complex, responsive layouts. In this blog post, we have explored some of the essential properties used in CSS Grid layouts for the grid items, such as grid-column, grid-row, and grid-area. By combining these properties with other CSS rules, developers can create stunning grid layouts that are both flexible and responsive.
            </p>
        </div>
    )
}
