import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSListStyleType() {
    return (
        <div>
            <h1> CSS styling lists</h1>
            <p>
                lists are a critical component in website design, and they can be used to present content in an organized and easy-to-read format. To make lists visually appealing, we can use CSS list-style properties such as list-style-type, list-style-image, list-style-position, and the shorthand property list-style.
            </p>


            <h2> list-style-type property</h2>
            <p>
                The list-style-type property specifies the marker type for the list items. This property allows you to customize the appearance of the list marker. The possible values for this property are:
            </p>

            <ul className="ml-10 list-disc">
                <li> disc: A filled circle. </li>
                <li>circle: An open circle. </li>
                <li> square: A filled square.</li>
                <li> decimal: Decimal numbers.</li>
                <li>lower-alpha: Lowercase alphabetical letters.</li>
                <li> upper-alpha: Uppercase alphabetical letters.</li>
                <li> lower-roman: Lowercase Roman numerals. </li>
                <li> upper-roman: Uppercase Roman numerals. </li>
            </ul>

            <p>
                Let's take a simple example to illustrate the use of list-style-type property:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>List Style Type Example</title>
        
        <style>
        /* Ordered List styles */
        ol.decimal li {
            list-style-type: decimal;
            margin-left: 50px;
        }
        
        ol.lower-alpha li {
            list-style-type: lower-alpha;
            margin-left: 50px;
        }
        
        ol.lower-roman li {
            list-style-type: lower-roman;
            margin-left: 50px;
        }
        
        /* Unordered List styles */
        ul.disc li {
            list-style-type: disc;
            margin-left: 50px;
        }
        
        ul.circle li {
            list-style-type: circle;
            margin-left: 50px;
        }
        
        ul.square li {
            list-style-type: square;
            margin-left: 50px;
        }
        </style>
    </head>
    
    <body>
        <h1>List Style Type Example</h1>
        
        <!-- Ordered List Example -->
        <h1>Ordered List</h1>
        <ol class="decimal">
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
        </ol>
        
        <ol class="lower-alpha">
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
        </ol>
        
        <ol class="lower-roman">
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
        </ol>
        
        <!-- Unordered List Example -->
        <h1>Unordered List</h1>
        <ul class="disc">
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
        </ul>
        
        <ul class="circle">
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
        </ul>
        
        <ul class="square">
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
        </ul>
        
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we've used the list-style-type property to customize the appearance of ordered and unordered lists. We've created six custom styles using decimal, lower-alpha, lower-roman, disc, circle, and square as values for this property. Therefore, you can use these styles to customize the appearance of your lists further to match your website design.
            </p>

            <h2> list-style-image property </h2>
            <p>
                The list-style-image property specifies an image to use as the marker for the list item. You can use this property to add an image to the marker where available values include url('image_path') or none.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>List Style Image Example</title>
        
        <style>
        /* Unordered List styles */
        ul.image li {
            list-style-image: url('https://via.placeholder.com/16x16');
        }
        
        ul.no-image li {
            list-style-image: none;
        }
        </style>
    </head>
    
    <body>
        <h1>List Style Image Example</h1>
        
        <!-- Unordered List Example -->
        <h2>Unordered List</h2>
        
        <h3>List with Image</h3>
        <ul class="image">
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
        </ul>
        
        <h3>List without Image</h3>
        <ul class="no-image">
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
        </ul>
        
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we've used the list-style-image property to add an image as the marker for the unordered list. We've set the value url('https://via.placeholder.com/16x16') to specify the image URL. Additionally, we've added a class selector ul.no-image to remove the image from the marker.
            </p>

            <h2> list-style-position property </h2>
            <p>
                The list-style-position property specifies the position of the list item marker. The possible values for this property are:
            </p>

            <ul className="list-disc ml-10">
                <li>inside: The marker is inside the content flow. </li>
                <li>outside: The marker is outside the content flow. </li>
            </ul>

            <p>
                Here's an example that illustrates the use of the list-style-position property:
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>List Style Position Example</title>
        
        <style>
            /* Ordered List styles */
            ol.inside li {
                list-style-position: inside;
                padding-left: 20px;
            }
            
            ol.outside li {
                list-style-position: outside;
                margin-left: 20px;
            }
        </style>
    
    </head>
    
    <body>
        <h1>List Style Position Example</h1>
        
        <!-- Ordered List Example -->
        <h2>Ordered List</h2>
        
        <h3>List with Marker Inside</h3>
        <ol class="inside">
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
        </ol>
        
        <h3>List with Marker Outside</h3>
        <ol class="outside">
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
        </ol>
        
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we've used the list-style-position property to set the position of the list item marker. We've created two styles using inside and outside values for this property.
            </p>

            <h2> list-style Shorthand Property </h2>
            <p>
                The list-style property is a shorthand property for setting all the individual list style properties in one declaration. It allows you to set the list-style-type, list-style-image, and list-style-position properties all at once.
            </p>

            <p>
            Here's an example of using the list-style shorthand property:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>List Style Shorthand Example</title>
        
        <style>
            /* Unordered List styles */
            ul.custom li {
            list-style: square url('https://via.placeholder.com/16x16') inside;
            }
        </style>
    
    </head>
    
    <body>
        <h1>List Style Shorthand Example</h1>
        
        <!-- Unordered List Example -->
        <h2>Unordered List</h2>
        
        <h3>List with Custom Style</h3>
        <ul class="custom">
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
        </ul>
        
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In this example, we've used the list-style shorthand property to create a custom style for unordered lists. We've set the values square, url('https://via.placeholder.com/16x16'), and inside to specify the list item marker's shape, the image URL, and the position, respectively.
            </p>

            <h1> Conclusion </h1>
            <p>
            In conclusion, when it comes to adding style to lists, CSS list-style properties such as list-style-type, list-style-image, list-style-position, and the shorthand property list-style help designers to customize the appearance of lists. With just a few lines of CSS code, these properties can be used to create visually appealing and easy-to-read lists that match the website's design. By using a combination of list-style properties, designers can create unique and dynamic lists that make content more engaging for users.
            </p>
        </div>
    )
}
