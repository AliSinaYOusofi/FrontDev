import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'
import { animated } from "@react-spring/web";
import useSlideAnimation from "@/hooks/useSlideAnimation";
import { getServerSideProps } from 'next/app';

export default function CSSSyntax() {

    const [spring] = useSlideAnimation();
    
    return (
        <animated.div style={spring}>

            <h1> CSS Syntax</h1>
            <p>Cascading Style Sheets (CSS) is a styling language that allows web designers to add visual elements and features to web pages. It is an essential tool for web development, and having a good understanding of CSS syntax is critical for any developer. In this guide, we’ll take a deep dive into CSS syntax, exploring the building blocks that make up CSS and how they are used.</p>
            
            <h1>CSS Syntax Basics </h1>
            <p>Before diving into the specifics of CSS syntax, it’s essential to understand the basic rules that govern it. CSS syntax is made up of two parts: selectors and declarations.</p>
            <p>Selectors are used to identify an HTML element, while declarations determine how the element should be styled. These elements are then grouped together and defined within a set of curly braces.</p>

            <p>
                Here’s what the basic syntax of a CSS rule looks like:
            </p>
            <CodeBlock
            code={`
    selector {
        property: value;
        property: value;
        property: value;
    }
            `}
            language="css"
            showCodeEditor={false}
            onlyCode={true}
            />

            <h1> CSS Selectors </h1>
            <p>CSS selectors are used to identify and target specific HTML elements for styling. Selectors can be based on the element's tag name, class, and ID attributes or based on the element's relationship to other elements on the page.</p>

            <h1> CSS Declarations </h1>
            <p> CSS declarations are used to define the styles that should be applied to an HTML element. Declarations consist of two parts: a property and a value. </p>
            <ul>
                <li>Property is a specific visual element that we want to style, such as the color of text or the size of a margin.</li>
                <li>Value is a specific value that we want to assign to the property, such as "red" for the color property or "10px" for the margin property.</li>
            </ul>

            <p> Here is an example of CSS declarations: </p>
            <CodeBlock
            code={`
    p {
        color: red;
        font-size: 16px;
        background-color: #FFFFFF;
        margin: 10px;
    }
            `}
            language="css"
            showCodeEditor={false}
            onlyCode={true}
            />

            <p> In this example, the p selector targets all p elements on the page, and the specified declarations change the text color to red, font size to 16 pixels, background color to white, and margin to 10 pixels. </p>

            <h1> Conclusion </h1>
            <p>CSS syntax is a critical component of web design and development. Understanding CSS's fundamental building blocks can help web developers create visually appealing and highly functional web pages from scratch. By utilizing selectors, declarations, and comments, developers can tailor the layout and behavior of web pages to meet specific design goals.</p>
        </animated.div>
    )
}
