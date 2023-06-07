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

            <h2> Example 1: Modify src Attribute with  </h2>
            <p>
            The following example demonstrates how the attr() selector can modify the src attribute of an HTML element dynamically. In this example, the image's source changes to a new image when the user hovers over the element:
            </p>

            <CodeBlock
            code={`
            <!DOCTYPE html>
            <html>
              <head>
                <title>Image Hover Example</title>
                <style>
                  /* Change the image source on hover */
                  .image-hover {
                    display: inline-block;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    width: 400px;
                    height: 300px;
                    background-color: blue;
                  }
            
                  .image-hover:hover {
                    background-image: url(attr(data-hover-src));
                  }
                </style>
              </head>
            
              <body>
                <div class="image-hover" data-hover-src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></div>
              </body>
            </html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
            In this example, the CSS code uses the attr() selector to modify the src attribute of the img tag when the user hovers over the element. The data-hover-src attribute value is assigned to the src attribute, which changes the displayed image.
            </p>

            <h2> Example 2: Modify alt Attribute with attr() </h2>
            <p>
            The following example demonstrates how the attr() selector can modify the alt attribute of an HTML element. In this example, the alt attribute's value is extracted and used in the content of a pseudo-element when the user hovers over the element:
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Image Hover Example</title>
        <style>
        /* Show the image's alternative text on hover */
        .image-alt {
            position: relative;
            display: inline-block;
        }
        
        .image-alt img:hover::after {
            content: attr(alt);
            position: absolute;
            bottom: 100%;
            left: 0;
            padding: 5px;
            background-color: #1E90FF;
            color: #FFF;
            font-size: 12px;
            white-space: nowrap;
            z-index: 1;
            width: 100px;
            height: 30px;
            color: white;   
        }
        
        </style>
    </head>

    <body>
        <div class="image-alt">
        <img 
            src="https://images.pexels.com/photos/225769/pexels-photo-225769.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Example Image"
        >
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
            In this example, the CSS code uses the attr() selector to extract the image's alt attribute value when the user hovers over the element. The extracted value is used in the content of a pseudo-element, which displays the alternative text in a tooltip.
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
