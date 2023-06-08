import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function TextDecoration() {
    return (
        <div>
            <h1> Text-Decoration CSS Property </h1>
            <p>
                The text-decoration CSS property is used to add or remove decoration to the text. Decorations can include underlining, line-throughs, overline, or a combination of these. In this part post, we’ll explore the different text-decoration properties and how they can be used in your CSS styles.
            </p>

            <h2> Using text-decoration-line </h2>
            <p>
            The text-decoration-line property specifies the type of line decoration to apply to the text. The values that it can have are:
            </p>
            <ul className="ml-10 list-disc">
                <li>underline: adds a line underneath the text.</li>
                <li>overline: adds a line above the text.</li>
                <li> line-through: adds a line through the text. </li>
                <li> none: removes any existing line decorations. </li>
            </ul>

            <CodeBlock
            code={`
            <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Text Decoration Example</title>
	<style>
		.h11 {
			text-decoration-line: underline;
		}
	
		.h21 {
			text-decoration-line: overline line-through;
		}
	
		.paragraph1 {
			text-decoration-line: none;
		}
	</style>
</head>
<body>
	<h1 class="h11">Example of text-decoration-line: underline</h1>
	<h2 class="h21">Example of text-decoration-line: overline line-through</h2>
	<p class="paragraph1">Example of text-decoration-line: none</p>
</body>
</html>
            `}
            language={"html"}
            showCodeEditor={true}
            />
            <p>
                In this example, we apply text-decoration-line to different elements. The h1 element has an underline, the h2 element has both an overline and line-through, while the p element has no decoration.
            </p>

            <h2> Using text-decoration-color </h2>
            <p>
            The text-decoration-color property specifies the color of the line decoration on the text. This property works in conjunction with text-decoration-line.
            </p>
            <CodeBlock
            code={`
            <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Text Decoration Example</title>
	<style>
		
		.h12 {
			text-decoration-line: underline;
			text-decoration-color: red;
		}
	
		.h22 {
			text-decoration-line: overline;
			text-decoration-color: blue;
		}
	
		.paragraph2 {
			text-decoration-line: line-through;
			text-decoration-color: green;
		}
	</style>
</head>
<body>
	<h1 class="h12">Example of text-decoration-color: red</h1>
	<h2 class="h22">Example of text-decoration-color: blue</h2>
	<p class="paragraph2">Example of text-decoration-color: green</p>
</body>
</html>
            `}
            language={"html"}
            showCodeEditor={true}
            />

            <p>
                In this example, the text-decoration-color is applied to different elements. The h1 element’s underline is red, the h2 element’s overline is blue, and the p element’s line-through is green.
            </p>

            <h2> CSS text-decoration-style property</h2>
            <p>
                text-decoration-style is a CSS property that is used to specify the style of the line that appears under or over words or phrases.
            </p>

            <p>
                The following are some possible values for text-decoration-style:
            </p>
            <ul className="ml-10 list-disc">
                <li> solid: A solid line is displayed. </li>
                <li> double: Two parallel lines are displayed, both solid and the same thickness as each other.</li>
                <li>dotted: A dotted line is displayed.</li>
                <li> wavy: A wavy line is displayed. </li>
            </ul>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Text Decoration Example</title>
        <style>
            .h13 {
                text-decoration-line: underline;
                text-decoration-color: red;
            }
        
            .h23 {
                text-decoration-line: overline;
                text-decoration-color: blue;
            }
        
            .paragraph3 {
                text-decoration-line: line-through;
                text-decoration-color: green;
            }
        </style>
    </head>
    <body>
        <h1 class="h13">Example of text-decoration-color: red</h1>
        <h2 class="h23">Example of text-decoration-color: blue</h2>
        <p class="paragraph3">Example of text-decoration-color: green</p>
    </body>
</html>
            `}
            language={"html"}
            showCodeEditor={true}
            />

            <h2> CSS text-decoration-thickness property</h2>
            <p>
                text-decoration-thickness is a CSS property that is used to set the thickness of the line that appears under, over, or through words or phrases. This property only works in Chrome and Safari browsers.
            </p>
            <p>
                Here is an example in the format you provided that demonstrates the usage of text-decoration-thickness property:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Text Decoration Example</title>
        <style>
            .h14 {
                text-decoration-line: underline;
                text-decoration-color: red;
                text-decoration-thickness: 2px;
            }
        
            .h24 {
                text-decoration-line: overline;
                text-decoration-color: blue;
                text-decoration-thickness: 4px;
            }
        
            .paragraph4 {
                text-decoration-line: line-through;
                text-decoration-color: green;
                text-decoration-thickness: 6px;
            }
        </style>
    </head>
    <body>
        <h1 class="h14">Example of text-decoration-thickness: 2px</h1>
        <h2 class="h24">Example of text-decoration-thickness: 4px</h2>
        <p class="paragraph4">Example of text-decoration-thickness: 6px</p>
    </body>
</html>
            `}
            language={"html"}
            showCodeEditor={true}
            />


            <h2> CSS shorthand text-decoration property</h2>
            <p>
                text-decoration is a shorthand CSS property that allows you to set all the properties at once that determines how the text should be decorated. The text-decoration property makes it easy to apply all the text decoration properties (line, style, color, and thickness) in one declaration.
            </p>
            <p>
            Here is an example in the format you provided that demonstrates the usage of the text-decoration shorthand property:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Text Decoration Example</title>
        <style>
            .h15 {
                text-decoration: underline red 2px;
            }
        
            .h25 {
                text-decoration: overline blue dotted;
            }
        
            .paragraph5 {
                text-decoration: line-through green;
            }
        </style>
    </head>
    <body>
        <h1 class="h15">Example of text-decoration property - underline red 2px</h1>
        <h2 class="h25">Example of text-decoration property - overline blue dotted</h2>
        <p class="paragraph5">Example of text-decoration property - line-through green</p>
    </body>
</html>
            `}
            language={"html"}
            showCodeEditor={true}
            />

            <p>
                In the above example, all the text decoration properties are set using the text-decoration shorthand property. The line (underline, overline, line-through), style (solid, dashed, dotted, double, wavy, etc.), color, and thickness can be set in one declaration separated by spaces.
            </p>

            <h2> Note </h2>
            <p>
            Note that you can leave some properties empty while specifying others. This is useful when you only want to change specific properties, leaving the others to their default value. You can also specify values in different order, but it's recommended to follow the same order (line, style, color, thickness) to avoid confusion.
            </p>

            <h1> Conclusion </h1>
            <p>
            text-decoration CSS property is used to determine how text should be decorated. It allows the specification of all the text-decoration properties like line, style, color, and thickness using a single declaration
            </p>

        </div>
    )
}
