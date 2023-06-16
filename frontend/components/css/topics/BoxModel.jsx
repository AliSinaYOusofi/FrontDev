import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function BoxModel() {
    return (
        <div>
            <h1>Box Model</h1>
            <p>
                CSS Box model is an important concept in Web development, which defines the structure of a web page and how elements are rendered on a page. Every element on a page is wrapped in a box consisting of four parts - Content, Padding, Border, and Margin. The box model can be adjusted by the CSS properties and values to style the element and adjust its behavior regarding other elements on the page. In this blog, we will explain what Box Model is and how it works with examples.
            </p>

            <p> The Basic CSS Box Model </p>
            <ul className="ml-10 list-decimal">
                <li> Content: It comprises the actual space consumed by an element's content like texts, images, etc. </li>
                <li> Padding: The space between the element's content and its border. Padding is used to adjust the content's distance from the border or other elements on the page.</li>
                <li> Border: It is the line that wraps around the content and padding of an element. The border's thickness, color, and style can be varied using CSS properties. </li>
                <li> Margin: The area between an element's border and its neighboring elements or the body container. Margin is used to add space between two elements or set an element distance from the page's edges. </li>
            </ul>

            <p>
                The figure below illustrates how the elements are organized and separated within the box model:
            </p>

            <img
                src="https://www.scaler.com/topics/images/properties-of-css-box-model.webp"
                alt="box model from scaler"
            />

            <p>
                Each part's size is important because they add up to form the total size of the element. In other words, an element's size equals the content plus padding plus border. The margin is also added to form the total space an element occupies on a page.
            </p>

            <h1> Understanding through Examples </h1>

            <h2> Box Sizing Border-Box </h2>
            <p>
            In this example, we will use the box-sizing property to set the width of a div element and its border without affecting its padding.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Box Sizing Border-Box Example</title>
        <style>
            /* Example 1: Box Sizing Border-Box */
            .box {
                width: 200px;
                padding: 10px;
                border: 5px solid black;
                box-sizing: border-box;
            }
        </style>
    </head>
    <body>
        <h1>Box Sizing Border-Box Example</h1>
        <div class="box">
            This is an example of a div element with padding and border defined inside it. We set the box-sizing property to border-box, which ensures the width of the div element includes its border and padding.
        </div>
    </body>
</html>
            `}
            showCodeEditor={true}
            language="html"
            />

            <p>
            The CSS class box defines a div element with a width of 200px, padding of 10px, and a border of 5px with solid black. We set the box-sizing property to border-box, which retains the width we have defined irrespective of its padding and border.
            </p>

            <h2>  Using the Float Property </h2>
            <p>In this example, we will use the float property to position images to the right and allow the text to wrap around it.</p>
            
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Using the Float Property Example</title>
        <style>
            /* Example 2: Using the Float Property  */
            .image {
                float: right;
                margin: 0 0 20px 20px;
            }
        </style>
    </head>
    <body>
        <h1>Using the Float Property Example</h1>
        <img src="https://via.placeholder.com/150" class="image" style="width: 100px; height: 100px;">
        <p>This is an example of a text wrapped around an image aligned to the right of the page. We apply the float property to the image with class name image, which allows the text to flow on the left side of the image.</p>
    </body>
</html>
            `}
            showCodeEditor={true}
            language="html"
            />

            <p> 
            The CSS class image sets the float property to the right and adds a margin of 0 0 20px 20px around the image. The image is aligned to the right of the page, and the text flows on the left side of the image.
            </p>

            <h2> Adjusting Padding and Margin </h2>
            <p> 
            In this example, we'll adjust the padding and margin of elements on the page to create a grid-like pattern.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Adjusting Padding and Margin Example</title>
        <style>
            /* Example 3: Adjusting Padding and Margin  */
            .container {
                display: flex;
                flex-wrap: wrap;
            }

            .item {
                width: 200px;
                height: 200px;
                background-color: gray;
                margin: 5px;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <h1>Adjusting Padding and Margin Example</h1>
        <div class="container">
            <div class="item">Item 1</div>
            <div class="item">Item 2</div>
            <div class="item">Item 3</div>
            <div class="item">Item 4</div>
            <div class="item">Item 5</div>
            <div class="item">Item 6</div>
        </div>
    </body>
</html>
            `}
            showCodeEditor={true}
            language="html"
            />

            <p>
            The CSS class container sets the display property to flex and flex-wrap to wrap, creating a grid-like pattern when we add items to it. The CSS class item sets the width and height of the item element and adds padding and margin to it, creating enough space and gap between the elements.
            </p>
        </div>
    )
}
