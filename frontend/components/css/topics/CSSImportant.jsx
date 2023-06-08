import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSImportant() {

    return (
        <div>
            <h1> CSS !important </h1>
            <p>
            When writing Cascading Style Sheets (CSS), you may come across situations where you want to override previously defined styles. One way to do this is to use the !important keyword. In this blog, we'll explain what !important is, when you might want to use it, and how to use it with practical examples.
            </p>

            <h2> What is !important?</h2>
            <p>
                In CSS, styles are applied in a cascading manner, with more specific selectors or more recent declarations overriding previous ones. However, in some cases, you may want to override a style that is being applied to an element using a less specific selector or an earlier declaration.
            </p>

            <p>
                This is where !important comes in. When you add !important after a property value, it tells the browser that this style should take precedence over other styles, even if they are defined by more specific selectors or more recent declarations.
            </p>

            <p>
            It's worth noting that overusing !important can lead to issues with maintainability and readability in your CSS. In general, it's best to use !important sparingly and only when necessary.
            </p>

            <h2> When to use !important </h2>
            <p>
                So when might you want to use !important? Here are a few scenarios:
            </p>

            <ul className="ml-10 list-disc">
                <li> Overriding third-party styles: If you are using a CSS library or framework that has styles you want to override, using !important can be a way to ensure that your styles take precedence. </li>
                <li>Styling a specific element: If you want to apply a style to a specific element, but another style is being applied using a more general selector, using !important can ensure that your specific style is used.</li>
                <li> Fixing style issues: Sometimes, a style issue can arise that is difficult to fix without using !important. For example, if a style is being applied inline using the style attribute, using !important may be the only way to override it.</li>
            </ul>

            <h2> How to use !important </h2>
            <p>Let's take a look at this example</p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>CSS !important Example: When and How to Use it</title>
        <style>
        /* Example 1: Overriding third-party styles */
        .body {
            font-size: 14px;
        }
        .h1 {
            font-size: 24px !important;
        }

        /* Example 2: Styling a specific element */
        .a {
            color: blue;
            text-decoration: none;
        }

        .special-link {
            text-decoration: underline !important;
        }

        /* Example 3: Fixing style issues */
        .div {
            background-color: green !important;
        }
        </style>
    </head>
    <body class="body">
        <!-- Example 1: Overriding third-party styles -->
        <h1 class="h1">This is a heading using !important</h1>

        <!-- Example 2: Styling a specific element -->
        <a class="a" href="#">This is a regular link</a>
        <br>
        <a href="#" class="special-link">This is a special link</a>

        <!-- Example 3: Fixing style issues -->
        <div class="div" style="background-color: red;">This element has a red background.</div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h2> Example 1: Overriding third-party styles </h2>
            <p>
                Suppose you are using a CSS framework that applies a default font size of 14px to all elements. However, you want to set the font size of your headings to 24px
            </p>

            <p>
                By adding !important to the font-size property, you are telling the browser to use this style instead of the earlier defined style for body. This ensures that your headings will be the size you want, regardless of what the framework has defined.
            </p>

            <h2> Example 2: Styling a specific element </h2>
            <p>
                Suppose you have styled all your links in a specific way but you want to style on special link differently that's when you need to use the !important 
            </p>

            <p>
            By adding !important to the text-decoration property, you are telling the browser to use this style instead of the previous style defined for a. This ensures that your special link will be underlined, even though it is using the same element as all the other links.
            </p>

            <h2> Example 3: Fixing style issues </h2>
            <p>
                Suppose you are working on a project where some styles are being applied inline using the style attribute
                By adding !important to the background-color property, you are telling the browser to use this style instead of the inline style defined for the div element. This ensures that the element will now have a white background, regardless of what was previously defined inline.
            </p>

            <h1> Conclusion </h1>
            <p>
            Overall, !important can be a useful tool in certain situations where you need to ensure that a particular style takes precedence over other styles. However, it should be used with caution, as overusing it can lead to issues with maintainability and readability in your CSS.
            </p>
        </div>
    )
}
