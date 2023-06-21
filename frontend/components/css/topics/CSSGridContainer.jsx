import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSGridContainer() {
    return (
        <div>
            <h1> CSS Grid Container Properties </h1>
            <p>
                CSS Grid is a powerful layout module introduced in CSS3 that creates a two-dimensional grid-based layout system that makes it easier to create more complex and responsive web layouts. In this blog post, we will explore some of the essential properties used in CSS Grid layouts for the container.
            </p>

            <h2> grid-template-columns </h2>
            <p>
                The grid-template-columns property defines the number and size of columns in the grid container. It accepts values such as a fixed length, a percentage, or the fr unit, which distributes available space proportionally to the defined fr values.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>CSS Grid Example - Grid Template Columns</title>
	<style>
		.grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
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
	</div>
</body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we have a grid container with three columns of equal width using the repeat function and 1fr unit, specifying that each column should take up an equal share of the available space. Grid gaps make the outer edges have a spacing of 10px.
            </p>

            <h2> grid-template-rows </h2>
            <p>
                The grid-template-rows property defines the number and size of rows in the grid container. It also accepts fixed length, percentage, or the fr unit values.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>CSS Grid Example - Grid Template Rows</title>
	<style>
		.grid1 {
			display: grid;
			grid-template-rows: repeat(3, 1fr);
			grid-gap: 10px;
		}
		
		.grid-item1 {
			background-color: #ddd;
			padding: 20px;
			font-size: 24px;
		}
	</style>
</head>
<body>
	<div class="grid1">
		<div class="grid-item1">Item 1</div>
		<div class="grid-item1">Item 2</div>
		<div class="grid-item1">Item 3</div>
		<div class="grid-item1">Item 4</div>
		<div class="grid-item1">Item 5</div>
		<div class="grid-item1">Item 6</div>
	</div>
</body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
            In this example, we have a grid container with three rows of equal height using the repeat function and 1fr unit, specifying that each row should take up an equal share of the available space.
            </p>

            <h2> justify-content </h2>
            <p>
                The justify-content property is used to align grid items along the row axis of the grid. The property takes values such as start, end, center, space-between, and space-around, among others.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>CSS Grid Example - Justify Content</title>
	<style>
		.grid2 {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 10px;
			justify-content: center;
		}
		
		.grid-item2 {
			background-color: #ddd;
			padding: 20px;
			font-size: 24px;
		}
		
		.first-item2 {
			justify-self: start;
		}
		
		.second-item2 {
			justify-self: center;
		}
		
		.third-item2 {
			justify-self: end;
		}
	</style>
</head>
<body>
	<div class="grid">
		<div class="grid-item2 first-item2">Item 1</div>
		<div class="grid-item2 second-item2">Item 2</div>
		<div class="grid-item2 third-item2">Item 3</div>
		<div class="grid-item2">Item 4</div>
		<div class="grid-item2">Item 5</div>
		<div class="grid-item2">Item 6</div>
    </div>
</body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p> In this example, the justify-content property is set to center, which centers all the elements horizontally in the container. We also have three grid items with different values for the justify-self property. .first-item is aligned to the start of the grid row, .second-item is aligned to the center, and .third-item is aligned to the end.</p>

            <h2> align-content </h2>
            <p>
                The align-content property aligns the grid along the column axis of the container. It accepts values such as start, end, center, stretch, and space-between, among others.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>CSS Grid Example - Align Content</title>
	<style>
		.grid3 {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(3, 100px);
			grid-gap: 10px;
			align-content: space-between;
		}
		
		.grid-item3 {
			background-color: #ddd;
			padding: 20px;
			font-size: 24px;
		}
	</style>
</head>
<body>
	<div class="grid3">
		<div class="grid-item3">Item 1</div>
		<div class="grid-item3">Item 2</div>
		<div class="grid-item3">Item 3</div>
		<div class="grid-item3">Item 4</div>
		<div class="grid-item3">Item 5</div>
		<div class="grid-item3">Item 6</div>
	</div>
</body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, the align-content property is set to space-between, which distributes extra space between grid rows. We also have three rows with fixed height using grid-template-rows: repeat(3, 100px). Grid gaps make the outer edges have a spacing of 10px.
            </p>

            <h1> Conclusion </h1>
            <p>
                CSS Grid provides advanced features that give greater control over the placement and sizing of the elements within a grid, making it easier to design and code complex, responsive layouts. In this blog post, we have explored some of the essential properties used in CSS Grid layouts for the container, such as grid-template-columns, grid-template-rows, justify-content, and align-content. By combining these properties with other CSS rules, developers can create stunning grid layouts that are both flexible and responsive.
            </p>
        </div>
    )
}
