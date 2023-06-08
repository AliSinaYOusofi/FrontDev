import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSAttrSelector() {

    return (
        <div>
            <h1> CSS Attr Selector </h1>
            <p>
                CSS offers various selector features that enable developers to target the desired elements and apply specific styles. One such selector is the attr() selector, which allows developers to select and modify the value of an element's attribute.
            </p>

            <h2> What is the CSS Attr Selector? </h2>
            <p>
                The attr() selector is a CSS function that selects an element based on the value of one of its attributes. The syntax of the attr() selector is as follows:
            </p>

            <CodeBlock
            code={`
selector[attribute=attrValue] {
    property: value;
}
            `}
            language="css"
            onlyCode={true}
            />

            <p>
            The selector name is followed by a square bracket [], which contains the name of the attribute and its value separated by an equal sign =. Afterward, the desired CSS property is specified in a block, followed by its value.
            </p>

            <p>
            The attr() selector can be used to modify various types of attributes, including source (src), alt, title, and data-*. Using this selector allows developers to select and style specific elements that have attributes with particular values dynamically.
            </p>

            <h1> Examples of the CSS Attr Selector </h1>


            <h2> Example 1: Modifying Text Content </h2>
            <p>
                The following example demonstrates how the attr() selector can be used to modify the text content of an HTML element based on the value of its data_attribute attribute:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Modifying Text Content with the CSS attr() Selector</title>
        <style>
        /* Modify the text content based on the value of data_attribute */
        .example::before {
            content: attr(data-attribute);
        }
        
        /* Add some styling to the modified text */
        .example {
            border-bottom: 1px solid green;
            padding-bottom: 5px;
        }
        </style>
    </head>
    <body>
        <h1>Modifying Text Content with the CSS attr() Selector</h1>
        <p>The following paragraph has its text content modified using the data-attribute:</p>
        <p class="example" data-attribute="Modified Text"></p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
            In this example, we have a paragraph element with a class of example. The CSS code defines a rule that adds a pseudo-element before this element, and uses the attr() selector to set the content of this pseudo-element to the value of the data-attribute attribute of the .example element.
            </p>

            <h2> Example 2: Applying Styles to Selected Elements </h2>
            <p>
                The following example demonstrates how the attr() selector can be used to apply styles to selected elements based on their attribute values:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>[data-color="red"] Attribute Selector Example</title>
        <style>
            /* Select elements with a data-color attribute equal to "red" */
            [data-color="red"] {
                background-color: red;
                color: white;
                padding: 10px;
                margin: 10px;
            }
            [data-color="green"] {
                background-color: green;
                color: white;
                padding: 10px;
                margin: 10px;
            }

            [data-color="blue"] {
                background-color: blue;
                color: white;
                padding: 10px;
                margin: 10px;
            }
        </style>
    </head>
    <body>
        <h1>[data-color="red"] Attribute Selector Example</h1>
        <p>The following elements have a data-color attribute with a value equal to "red":</p>
        <div data-color="red">This is a red div</div>
        <p data-color="red">This is a red paragraph</p>
        <span data-color="blue">This is a blue span</span>
        <p data-color="green">This is a green paragraph</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            
            <p>
                In this example, we have four elements with data-color attributes that have different values. The CSS code selects all the elements with a data-color attribute whose value is equal to "red". If this selector identifies an element, then the styles specified within the rule will be applied to that element. In this case, we set the background color to red, the text color to white, added some padding and margin for spacing, and chose not to style any other elements.
            </p>

            <p>
                When you load this page, you will see that the first two elements (the div and paragraph) have a red background and white text, whilst the other two elements that were not selected by the [data-color="red"] attribute selector have their default style.
            </p>


            <h2> Example 3: Modify data-* Attribute with attr() </h2>
            <p>
                The following example demonstrates how the attr() selector can modify a custom data-* attribute of an HTML element. In this example, a custom data-* attribute is used to store an image's size, which is extracted and used to set the image's dimensions:
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
    <title>Image Size Example</title>
    <style>
        /* Set image size with data-* attribute */
        .image-size {
            width: 100%;
        }
        
        .image-size img {
            width: auto;
            height: auto;
            margin: 0 auto;
            display: block;
            max-width: 100%;
            max-height: 100%;
        }
        
        .image-size img[data-size="small"] {
            max-width: 200px;
            max-height: 200px;
        }
        
        .image-size img[data-size="medium"] {
            max-width: 400px;
            max-height: 400px;
        }
        
        .image-size img[data-size="large"] {
            max-width: 600px;
            max-height: 600px;
        }
        
    </style>
    </head>
    
    <body>
    <div class="image-size">
        <img 
            src="https://images.pexels.com/photos/225769/pexels-photo-225769.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Example Image"
            data-size="large"
        >
    </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
            In this example, the attr() selector is used to modify the custom data-size attribute of an HTML image element. The extracted value is used to set the maximum dimensions of an image, which can be small, medium, or large.
            </p>

            <h1> Conclusion </h1>
            <p>
            The attr() selector is a powerful tool that allows developers to modify the value of an element's attribute dynamically. With this selector, developers can select elements based on the specific values of their attributes and apply custom styles or manipulate the content, as demonstrated in the examples above. Being familiar with this selector can enhance the visual appeal and user experience of your web pages.
            </p>
        </div>
    )
}
