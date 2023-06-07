import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSLinks() {

    return (
        <div>
            <h1> Styling anchor tags {"<a>"} </h1>
            <p>
                Anchors (or links) are one of the most important elements on a web page, allowing users to navigate between different pages or sections of a page. It's essential to have properly styled links to improve user experience, increase usability, and make your website more appealing. In this part post, we'll discuss different techniques to style anchor tags.
            </p>

            <h2> Here is an example </h2>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Link Styling Example</title>
        
        <style>
        /* unvisited link with class selector */
        .normal-link1 {
            color: blue;
            text-decoration: none;
        }
        
        /* visited link with class selector */
        .visited-link1 {
            color: red;
            text-decoration: none;
        }
        
        /* mouse over link with ID selector */
        #hover-link1:hover {
            color: gray;
            text-decoration: underline;
        }
        
        /* selected link with ID selector */
        #active-link1:active {
            color: purple;
            text-decoration: underline;
        } 
        
        </style>
        
    </head>
    
    <body>
        
        
        <a href="#" class="normal-link1">Normal Link</a>
        
        <a href="#" class="visited-link1">Visited Link</a>
        
        <a href="#" id="hover-link1">Hover Link</a>
        
        <a href="#" id="active-link1">Active Link</a>
        
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we're using class selectors to style the normal and visited links, and ID selectors to style the hover and active links.
            </p>

            <h2> Changing the cursor </h2>
            <p>
                You can also change the cursor's shape when the user interacts with the anchor tag to provide visual feedback that the element is clickable.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Cursor Pointer Example</title>
        
        <style>
        /* unvisited link with class selector */
        .normal-link {
            color: blue;
            text-decoration: none;
        }
        
        /* visited link with tag selector */
        a.visited-link {
            color: purple;
            text-decoration: none;
        }
        
        /* mouse over link with ID selector */
        #hover-link:hover {
            color: gray;
            text-decoration: underline;
            cursor: pointer;
        }
        
        /* selected link with tag selector */
        a:active {
            color: red;
            text-decoration: underline;
        } 
        
        </style>
        
    </head>
    
    <body>
        
        <p>This is an example of how to change the cursor to a pointer when the user hovers over a link:</p>
        
        <a href="#" class="normal-link">Click me</a>
        <a href="#" class="visited-link">Visited link</a>
        <a href="#" id="hover-link">Hover link</a>
        
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we've added the cursor: pointer property to the a:hover selector. This changes the cursor's appearance to a pointer when the user hovers over the link, indicating that the element is clickable and improving the user experience.
            </p>

            <h2> Styling the links (anchor) tags</h2>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Anchor Tag Styling Example</title>
        
        <style>
        /* unvisited link with class selector */
        .normal-link2 {
            color: white;
            background-color: blue;
            text-decoration: none;
            padding: 10px;
            border-radius: 5px;
        }
        
        /* visited link with class selector */
        .visited-link2 {
            color: white;
            background-color: red;
            text-decoration: none;
            padding: 10px;
            border-radius: 5px;
        }
        
        /* hover link with class selector */
        .hover-link2 {
            color: white;
            background-color: gray;
            text-decoration: none;
            padding: 10px;
            border-radius: 5px;
            transition: background-color 0.5s ease;
        }
        
        /* hover link with class selector */
        .hover-link2:hover {
            background-color: lightgray;
        }
        
        /* selected link with ID selector */
        #active-link2:active {
            color: white;
            background-color: purple;
            text-decoration: none;
            padding: 10px;
            border-radius: 5px;
        } 
        
        </style>
        
    </head>
    
    <body>
        
        <a href="#" class="normal-link2">Normal Link</a>
        
        <a href="#" class="visited-link2">Visited Link</a>
        
        <a href="#" class="hover-link2">Hover Link</a>
        
        <a href="#" id="active-link2">Active Link</a>
        
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we've applied the properties background-color, padding, and border-radius to style the anchor tags. We've also added a beginner-friendly hover effect using the hover and transition properties. The hover effect slowly fades in a light gray background color when the user hovers over the link. Finally, we use :active to define styles for the moment the link is clicked, changing the background color to purple.
            </p>

            <h1> Conclusion </h1>
            <p>
            Styling Anchor tags should be more than just changing colors and text decorations. It is important to make users understand how to interact with links providing feedback, ensuring that links are easily identifiable, and adding a good user experience to your website
            </p>
        </div>
    )
}
