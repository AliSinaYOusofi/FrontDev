import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSFlexItems() {

    return (
        <div>
            <h1> CSS flex items</h1>
            <p> Flexbox uses several properties to achieve the desired layout. In this section, we will focus on six flexbox properties that are used for individual flex items:</p>

            <h2> Flex order property</h2>
            <p>
                The order property specifies the order in which the flex items appear in the flex container. The default value is 0. A positive value makes the item appear later in the order, while a negative value makes the item appear earlier.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Flexbox Order Example</title>
        <style>
            .flex-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .flex-item {
                flex: 1;
                margin: 10px;
            }
            
            .first-item {
                order: 3;
            }
            
            .second-item {
                order: -1;
            }
        </style>
    </head>
    <body>
        <div class="flex-container">
            <div class="flex-item first-item">First Item</div>
            <div class="flex-item second-item">Second Item</div>
            <div class="flex-item">Third Item</div>
            <div class="flex-item">Fourth Item</div>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In the above example, we have a flex container that contains four flex items. The .first-item class is set to appear last in the order using order: 3, while .second-item class is set to appear first in the order using order: -1.
            </p>

            <h2> flex-grow property</h2>
            <p>
                The flex-grow property defines how much the flex item will grow relative to other flex items. The default value is 0, which means that the item will not grow. A value of 1 will cause the item to take up all available space in the flex container, while other items in the same container will be sized proportionally.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Flexbox Flex-Grow Example</title>
        <style>
            .flex-container1 {
                display: flex;
                flex-direction: row;
            }
            
            .flex-item1 {
                margin: 10px;
            }
            
            .first-item1 {
                flex-grow: 1;
                background-color: red;
            }
            
            .second-item1 {
                flex-grow: 2;
                background-color: blue;
            }
            
            .third-item1 {
                flex-grow: 3;
                background-color: green;
            }
        </style>
    </head>
    <body>
        <div class="flex-container1">
            <div class="flex-item1 first-item1">First Item</div>
            <div class="flex-item1 second-item1">Second Item</div>
            <div class="flex-item1 third-item1">Third Item</div>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In the above example, we have three flex items with different flex-grow values. .first-item class has a value of 1, .second-item has a value of 2, and .third-item has a value of 3. This means that .third-item will take up three times the space than the .first-item.
            </p>

            <h2> flex-shrink property</h2>
            <p>
                The flex-shrink property specifies the ability of the flex item to shrink if necessary. Its default value is 1, meaning the element will shrink if required. Setting flex-shrink to 0 will prevent the item from shrinking.
            </p>

            <CodeBlock
            code={`
            <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Flexbox Flex-Shrink Example</title>
        <style>
            .flex-container2 {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
            }
            
            .flex-item2 {
                width: 300px;
                padding: 10px;
            }
            
            .first-item2 {
                background-color: red;
                flex-shrink: 0;
            }
            
            .second-item2 {
                background-color: blue;
                flex-shrink: 1;
            }
            
            .third-item2 {
                background-color: green;
                flex-shrink: 10;
            }
        </style>
    </head>
    <body>
        <div class="flex-container">
            <div class="flex-item2 first-item2">First Item</div>
            <div class="flex-item2 second-item2">Second Item</div>
            <div class="flex-item2 third-item2">Third Item</div> </div>
    </body> 
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In the above example, we have three flex items with different flex-shrink values. .first-item is set to not shrink using flex-shrink: 0, .second-item has a value of 1, and .third-item has a value of 10, which means that .third-item will shrink ten times as much as .second-item if there is not enough space.
            </p>

            <h2> flex-basis property </h2>
            <p>
                The flex-basis property defines the initial size of the flex item before any available space is distributed according to flex factors. Its default value is auto.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Flexbox Flex-Basis Example</title>
        <style>
            .flex-container3 {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            
            .flex-item3 {
                flex: 1;
                margin: 10px;
            }
            
            .first-item3 {
                flex-basis: 100px;
                background-color: red;
            }
            
            .second-item3 {
                flex-basis: 200px;
                background-color: blue;
            }
            
            .third-item3 {
                flex-basis: 50%;
                background-color: green;
            }
        </style>
    </head>
    <body>
        <div class="flex-container3">
            <div class="flex-item3 first-item3">First Item</div>
            <div class="flex-item3 second-item3">Second Item</div>
            <div class="flex-item3 third-item3">Third Item</div>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
            In the above example, we have three flex items with different flex-basis values. .first-item has a fixed value of 100 pixels, .second-item has a fixed value of 200 pixels, and .third-item has a relative value of 50%, which means that its initial size will be 50% of the available space.
            </p>

            <h2> flex shorthand property </h2>
            <p>
                The flex shorthand property is used to set all the flex properties (grow, shrink, and basis) of a flex item in one declaration.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Flexbox Flex Shorthand Example</title>
        <style>
            .flex-container4 {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .flex-item4 {
                margin: 10px;
            }
            
            .first-item4 {
                flex: 1 2 100px;
                background-color: red;
            }
            
            .second-item4 {
                flex: 2 3 200px;
                background-color: blue;
            }
            
            .third-item4 {
                flex: 3 4 50%;
                background-color: green;
            }
        </style>
    </head>
    <body>
        <div class="flex-container">
            <div class="flex-item4 first-item4">First Item</div>
            <div class="flex-item4 second-item4">Second Item</div>
            <div class="flex-item4 third-item4">Third Item</div>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
            In the above example, the flex shorthand property is used to set all the flex properties of each flex item. The values, from left to right, represent the grow factor, the shrink factor, and the basis.
            </p>

            <h2> align-self property </h2>
            <p>
                The align-self property controls how a flex item is aligned along the cross-axis of the flex container. The property also accepts the same values as align-items, but it only affects the individual flex item specified, whereas align-items applies to all the flex items in the container.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Flexbox Align-Self Example</title>
        <style>
            .flex-container5 {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                height: 200px;
            }
            
            .flex-item5 {
                flex: 1;
                margin: 10px;
            }
            
            .first-item {
                background-color: red;
                align-self: flex-start;
            }
            
            .second-item5 {
                background-color: blue;
                align-self: center;
            }
            
            .third-item5 {
                background-color: green;
                align-self: flex-end;
            }
        </style>
    </head>
    <body>
        <div class="flex-container">
            <div class="flex-item5 first-item5">First Item</div>
            <div class="flex-item5 second-item5">Second Item</div>
            <div class="flex-item5 third-item5">Third Item</div>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In the above example, we have three flex items that are each aligned differently along the cross-axis of the flex container. The .first-item is aligned to the start of the cross-axis using align-self: flex-start, .second-item is aligned to the center of the cross-axis using align-self: center, and .third-item is aligned to the end of the cross-axis using align-self: flex-end.
            </p>

            <h1> Conclusion </h1>
            <p>
                In this part, we explored six properties used to style individual flex items in a flexbox layout: order, flex-grow, flex-shrink, flex-basis, flex, and align-self. These properties are important for designing flexible and responsive layouts using CSS. With a deeper understanding of how these properties work, web developers can create more complex and effective layouts that respond to different screen sizes and user behaviors.
            </p>
        </div>
    )
}
