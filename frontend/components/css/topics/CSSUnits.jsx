import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSUnits() {

    return (
        <div>
            <h1> CSS units </h1>
            <p>
                CSS units are used in web development to define the size and positioning of elements on a web page. Different units can be used depending on whether you want a specific or flexible size. In this part, we'll cover the two main categories of CSS units: absolute units and relative units.
            </p>

            <h2> Absolute Units </h2>
            <p>
                Absolute units have a fixed size in relation to physical units like inches or centimeters. Using absolute units can be beneficial when creating designs that have to have fixed dimensions such as print layouts and documents that have to be printed.
            </p>

            <p>
                The following are examples of absolute units in CSS:
            </p>

            <h2> CSS px unit </h2>
            <p>
                 The most common absolute unit used in CSS is the pixel. One pixel is defined as one dot on a display's screen. Pixels are used to define exact dimensions and are the ideal unit of measurement for fixed-width layouts.
            </p>

            <h2> CSS pt unit</h2>
            <p>
                The point is another absolute unit that is commonly used in print and typography. One point is equivalent to 1/72 of an inch.
            </p>

            <h2> CSS cm unit </h2>
            <p>
                This unit represents centimeters, which is roughly equal to 0.39 inches. It is used to define the size of a physical object in centimeters.
            </p>

            <h2> CSS mm unit </h2>
            <p>
                This unit represents millimeters, which is one-10th of a centimeter and roughly equal to 0.04 inches. It is commonly used to define the size of small objects.
            </p>

            <p> Here is an example of these units: </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Heading Example</title>
        <style>
            /* Using pt unit */
            .pt-heading {
                font-size: 24pt;
                margin-bottom: 12pt;
                text-align: center;
            }

            /* Using px unit */
            .px-heading {
                font-size: 48px;
                margin-bottom: 24px;
                text-align: center;
            }

            /* Using mm unit */
            .mm-heading {
                font-size: 16mm;
                margin-bottom: 8mm;
                text-align: center;
            }

            .cm-heading {
                font-size: 20cm;
                margin-bottom: 8cm;
                text-align: center
            }
        </style>
    </head>
    <body>
        <h1 class="pt-heading">This is a heading using pt units</h1>
        <h1 class="px-heading">This is a heading using px units</h1>
        <h1 class="mm-heading">This is a heading using mm units</h1>
        <h1 class="cm-heading">This is a heading using cm units</h1>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> CSS Relative Units</h1>
            <p>
                When working with Cascading Style Sheets (CSS), it's important to understand relative units, which allow us to size and position elements in relation to other elements. This can make it easier to create responsive and adaptable designs that look good on different devices and screen sizes.
            </p>

            <h2> The em unit </h2>
            <p>
                The em unit is a relative unit of measurement that is based on the font size of the parent element. Specifically, one em is equal to the font size of the parent element, so if the parent element has a font size of 16px, one em would be 16px. If an element's font size is set to 1.5em, for example, it would be 1.5 times the font size of its parent element.
            </p>

            <p>
                It's worth noting that em units are calculated based on the font size of the nearest parent element that has a font size defined in pixels. If there is no such parent element, the em unit will be based on the default font size of the document, which is typically 16px.
            </p>

            <h2> The rem unit </h2>
            <p>
                The rem unit is similar to the em unit, but it is based on the font size of the root element (usually the {"<html>"} element), rather than the font size of the parent element. This can make it easier to create consistent layouts across different parts of a page.
            </p>

            <p>
                For example, if the root font size is set to 16px, one rem would be 16px. If an element's font size is set to 2rem, it would be twice the root font size, or 32px.
            </p>

            <h2> The ch unit </h2>
            <p>
                The ch unit is based on the width of the 0 (zero) character in the font being used. This can be useful for creating layouts that are based on character widths, such as tables or columns of text.
            </p>

            <p>
                For example, if the width of the 0 character in the font being used is 10px, one ch would be 10px. If an element's width is set to 20ch, it would be twice the width of the 0 character, or 200px in this case.
            </p>

            <h2> The vw unit </h2>
            <p>
                The vw unit is based on the width of the viewport (the visible area of the browser window). One vw is equal to 1% of the viewport width. This can be useful for creating responsive layouts that adjust to different screen sizes.
            </p>

            <p>
                For example, if the viewport width is 1000px, one vw would be 10px. If an element's width is set to 50vw, it would be half the viewport width, or 500px in this case.
            </p>

            <h2> The vh unit </h2>
            <p>
                The vh unit is similar to the vw unit, but it is based on the height of the viewport instead of the width. One vh is equal to 1% of the viewport height.
            </p>

            <p>
                For example, if the viewport height is 800px, one vh would be 8px. If an element's height is set to 50vh, it would be half the viewport height, or 400px in this case.
            </p>

            <h2> The vmin unit </h2>
            <p>
            The vmin unit is based on the smaller of the viewport's width or height. One vmin is equal to 1% of the smaller of the two.
            </p>
            <p>
            For example, if the viewport is 1000px wide and 800px high, one vmin would be 8px. If an element's width is set to 50vmin, it would be half the smaller of the viewport width or height, or 400px in this case.
            </p>

            <h2> The vmax unit </h2>
            <p>
                The vmax unit is based on the larger of the viewport's width or height. One vmax is equal to 1% of the larger of the two.
            </p>
            <p>
                For example, if the viewport is 1000px wide and 800px high, one vmax would be 10px. If an element's width is set to 50vmax, it would be half the larger of the viewport width or height, or 500px in this case.
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Relative Units Example</title>
        <style>
            /* Using em unit */
            .em-heading {
                font-size: 1.5em;
                margin-bottom: 1em;
                text-align: center;
            }

            /* Using rem unit */
            html {
                font-size: 16px;
            }
            .rem-heading {
                font-size: 2rem;
                margin-bottom: 2rem;
                text-align: center;
            }

            /* Using ch unit */
            .ch-heading {
                font-size: 16px;
                width: 30ch;
                margin-bottom: 1ch;
                text-align: center;
            }

            /* Using vw unit */
            .vw-heading {
                font-size: 16px;
                width: 50vw;
                margin-bottom: 5vh;
                text-align: center;
            }

            /* Using vh unit */
            .vh-heading {
                font-size: 16px;
                height: 20vh;
                margin-bottom: 10vw;
                text-align: center;
            }

            /* Using vmin unit */
            .vmin-heading {
                font-size: 16px;
                width: 50vmin;
                margin-bottom: 5vmax;
                text-align: center;
            }

            /* Using vmax unit */
            .vmax-heading {
                font-size: 16px;
                height: 20vmax;
                margin-bottom: 10vmin;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1 class="em-heading">This is a heading using em units</h1>
        <h1 class="rem-heading">This is a heading using rem units</h1>
        <h1 class="ch-heading">This is a heading using ch units</h1>
        <h1 class="vw-heading">This is a heading using vw units</h1>
        <h1 class="vh-heading">This is a heading using vh units</h1>
        <h1 class="vmin-heading">This is a heading using vmin units</h1>
        <h1 class="vmax-heading">This is a heading using vmax units</h1>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this example, we've used each of the relative CSS units we discussed in the blog to define the font size, width, and height of headings. Each of these units adjusts to different factors, such as font size, viewport size, or the width of a character, so they can be used in a variety of contexts.
            </p>

            <h1> Conclusion </h1>
            <p>
            In summary, these relative CSS units can be very helpful for creating responsive and adaptable designs that look good on different devices and screen sizes. By using relative units instead of fixed units like pixels, you can create layouts that adjust to different contexts, making your website or application more user-friendly and accessible.    
            </p>
            
        </div>
    )
}
