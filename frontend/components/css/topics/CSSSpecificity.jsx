import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSSpecificity() {

    return (
        <div>

            <h1> CSS specificity </h1>

            <p>
                CSS Specificity is a term that describes how the browser chooses the most relevant style rules to apply to an HTML element. Every time you create a CSS rule, the specificity of that rule is calculated based on the number and types of Selectors you use. The browser selects the style rules with the highest specificity to apply to an element.
            </p>

            
            <ul className="ml-10 list-disc">
                <li> Type selectors: These are the lowest on the hierarchy. They are selectors that target HTML elements based on their tag names (e.g., div, h1, p). </li>
                <li> Class selectors: These are selectors that target elements based on their class attribute. They are more specific than type selectors.</li>
                <li>ID selectors: These are selectors that target elements based on their ID attribute. They are more specific than class selectors.</li>
                <li>Inline styles: These are styles that are applied directly to an element using the style attribute and they are the most specific. </li>
            </ul>
            

            <p>
                The Importance of Specificity
            </p>
            <p>
                CSS Specificity is important because it determines which styles get applied to an HTML element when there are multiple conflicting CSS rules. For example, if you have the following styles:
            </p>

            <CodeBlock
            code={`
body div {
    color: blue;
}

.container {
    color: red;
}
            `}
            language="css"
            onlyCode={true}
            />

            <p> And this HTML code: </p>
            <CodeBlock
            code={`
<body>
    <div class="container">Hello World!</div>
</body>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                When the browser encounters the class .container, it calculates which amongst the rules apply to it, and through its calculation algorithm, it determines that .container is more specific than body div. The .container style will, therefore, be applied to the text.
            </p>

            <h2> Specificity Calculation </h2>

            <p>
            To perform the specificity calculation, you need to count the number of occurrences of each type of selector in a CSS rule. The following guidelines will help you do so:
            </p>

            <ul className="ml-10 list-disc">
                <li> Start with zero and add 1 for each type selector. </li>
                <li> Add 10 for each class selector.</li>
                <li> Add 100 for each ID selector. </li>
                <li>Add the inline style's specificity value (1,000) for each inline style. </li>
            </ul>

            <h2>
                Examples
            </h2>

            <p>
            Let's look at a few examples to see how it works.
            </p>

            <ul className="ml-10 list-disc">
                <li> div selects all the div elements, and thus has a specificity of 0, 0, 0, 1. </li>
                <li> .container selects all elements with the class "container". It has a specificity of 0, 0, 1, 0.</li>
                <li> #header selects all elements with the ID "header". It has a specificity of 0, 1, 0, 0. </li>
                <li> {'<div style="color: red;">'} applies an inline style inline, which has a specificity of 0, 0, 0, 1000. </li>
            </ul>

            <h2>  Specificity and Inheritance </h2>
            <p>
                Inherited styles have a specificity of 0, 0, 0, 0, which means that they are the weakest styles. However, inherited values of styles are applied to their children.
            </p>

            <p> For example, if you have the following HTML code: </p>
            <CodeBlock
            code={`
<div class="container">
    <p>Hello World!</p>
</div>
            `}
            language="html"
            onlyCode={true}
            />

            <p> And you use the following CSS code: </p>
            <CodeBlock
            code={`
.container {
    color: red;
    font-size: 16px;
}

p {
    font-size: inherit;
}
            `}
            language="css"
            onlyCode={true}
            />

            <p>
            The p element, being the child of the .container element, will inherit the color value from the parent. However, the value of font-size for the p element is inherited from the parent .container, with a specificity of 0, 0, 1, 0, for the .containers font-size, and 0, 0, 0, 0, for the p tag.
            </p>

            <h1> Examples </h1>

            <h2> Example 0: Styling the Same Tag with Different Specificity</h2>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Specificity Example</title>
        <style>
            /* more specific selector */
            ul.navigation li.active a {
                color: red;
            }

            /* less specific selector */
            ul li a {
                color: blue;
            }
        </style>
    </head>
    <body>
        <ul class="navigation">
            <li><a href="#">Home</a></li>
            <li class="active"><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, two different selectors are used to style the same tag, 
                an{" <a>"} element in a navigation menu. The first selector, ul.navigation 
                li.active a, is more specific because it includes both a class selector and an element
                 selector, and it only applies to {"<a>"} elements that are descendants of an active list 
                 item in a navigation menu. The second selector, ul li a, is less specific because it only 
                 includes an element selector, and it applies to all {"<a>"} elements that are descendants 
                 of a list item in a navigation menu.
            </p>

            <p>
            As a result, the first selector will override the second selector for {"<a>"} elements that are active in the navigation menu, and those elements will be red. The second selector will apply to all other {"<a>"} elements in the navigation menu, and those elements will be blue.
            </p>


            <h2> Example 1: Specificity with ID Selector </h2>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>ID Selector Example</title>
        <style>
            #id-example {
                color: red;
            }
        </style>
    </head>
    <body>
        <p id="id-example">This text will be red</p>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, the ID selector #id-example is used to style the paragraph element with the ID of id-example. This selector is very specific, as IDs are unique and only apply to one element. Therefore, the style defined for this selector will override any other styles applied to the {"<p>"} element.
            </p>

            <h2> Example 2: Specificity with Class Selector </h2>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Class Selector Example</title>
        <style>
            .class-example {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <p class="class-example">This text will be centered</p>
        <div class="class-example">
            <p>This text will also be centered</p>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, the class selector .class-example is used to style both the {"<p>"} element and the {"<div>"} element with the class of class-example. Class selectors are less specific than ID selectors, as they can apply to multiple elements. However, the style defined for this selector will still override any other styles applied to these elements.
            </p>

            <h2> Example 3: Specificity with Descendant Selector </h2>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Descendant Selector Example</title>
        <style>
            .parent {
                color: blue;
            }
            .parent .child {
                color: red;
            }
        </style>
    </head>
    <body>
        <div class="parent">
            <p>This text will be blue</p>
            <p class="child">This text will be red</p>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p> In this example, the descendant selector .parent .child is used to style only the {"<p>"} element with the class of child that is a descendant of the{" <div>"} element with the class of parent. Descendant selectors are less specific than class selectors, as they apply to all elements with a certain class that are descendants of another element. However, the style defined for this selector will still override any other styles applied to this specific element. </p>
            
            <h2> Example 4: Specificity with Attribute Selector </h2>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Attribute Selector Example</title>
        <style>
            img[alt="logo"] {
                border: 1px solid black;
            }
        </style>
    </head>
    <body>
        <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo">
        <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600" alt="picture">
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
            In this example, the attribute selector img[alt="logo"] is used to style only the {"<img>"} element with the alt attribute set to the value of "logo". Attribute selectors are less specific than class selectors and ID selectors, as they apply to all elements with a certain attribute value. However, the style defined for this selector will still override any other styles applied to this specific element.
            </p>

            <h2> Example 5: Specificity with Child Selector </h2>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Child Selector Example</title>
        <style>
            .main div > p {
                font-weight: bold;
                font-size: 30px;
            }
        </style>
    </head>
    <body>
            <div class="main">
                <div>
                    <p>This text will be bold</p>
                </div>
            </div>
        <section>
            <p>This text will not be bold</p>
        </section>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
            In this example, the child selector div {">"} p is used to style only the {"<p>"} element that is a direct child of the {"<div>"} element. Child selectors are less specific than descendant selectors, as they only apply to direct children of an element. However, the style defined for this selector will still override any other styles applied to this specific element.
            </p>

            <h2> Example 6: Specificity with Pseudo Selector </h2>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Pseudo Selector Example</title>
        <style>
            .large p:first-of-type {
                font-size: 30px;
            }
        </style>
    </head>
    <body>
        <div class="large">
            <p >This text will be larger</p>
            <p>This text will not be larger</p>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
            In this example, the pseudo selector p:first-of-type is used to style only the first {"<p>"} element on the page. Pseudo selectors are less specific than class selectors and ID selectors, as they apply to all elements that meet a certain criteria. However, the style defined for this selector will still override any other styles applied to this specific element.
            </p>

            <h1> Conclusion </h1>
            <p>
            In conclusion, specificity is an important concept in web development that determines which style rules are applied to an HTML element based on the selectors used in CSS. There are several types of CSS selectors that can be used to define specificity, including ID selectors, class selectors, descendant selectors, attribute selectors, child selectors, and pseudo selectors. These selectors can be combined to create more specific rules that override less specific rules for the same HTML element. When styling the same HTML element with different specificity, the more specific rule will always override the less specific rule. It's important to understand specificity in order to write effective and efficient CSS code that produces the desired styling effects on web pages.
            </p>
        </div>
    )
}
