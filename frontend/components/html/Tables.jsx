import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import { animated } from '@react-spring/web';
import useSlideAnimation from '@/hooks/useSlideAnimation';

export default function Tables() {

    const [spring] = useSlideAnimation();

    return (
        <animated.div style={spring} key={spring.key}>
            <h1>Tables</h1>
            <p>
                HTML tables allow us to organize data in rows and columns, similar to a spreadsheet. They are used to display information such as product listings, schedules, and survey results. In this post, you'll learn how to create tables in HTML, add data, format cells, and more!
            </p>

            <h1> Table Structure </h1>
            <p>
                Before we dive into creating tables in HTML, it's important to understand the basic structure of a table. A table consists of one or more rows, and each row consists of one or more cells. To create a new table, we use the table tag. Here's an example:
            </p>
            <CodeBlock
            code={`
    <table>
        <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
        </tr>
        <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
        </tr>
    </table>`}
            language={"html"}
            showCodeEditor={true}
            />
            <p>
                In this example, we've created a table with two rows and two columns. Each row is represented by the tr tag, and each cell is represented by the td tag.
            </p>

            <h1>Table Headers</h1>
            <p>
                Tables often have column headings that describe the contents of each column. To create a header row, we use the th tag instead of the td tag. Here's an example:
            </p>
            <CodeBlock
            code={`
    <table style="border: 1px solid black;">
        <tr style="border: 1px solid black;">
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
        <tr style="border: 1px solid black;">
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
        </tr>
    </table>`}
        language={"html"}
        showCodeEditor={true}
        />
        <p>In this example, we've added a header row with two columns</p>

        <h1> Formatting Cells </h1>
        <p>
            HTML tables allow us to format cells in various ways to improve the readability and visual appeal of our data. Here are some examples:
        </p>
        
        <h1> Cell Padding and Spacing </h1>
        <CodeBlock
        code={`
    <table style="border: 1px solid black;" cellpadding="10" cellspacing="0" border="1">
        <tr style="border: 1px solid black;">
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
        <tr style="border: 1px solid black;">
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
        </tr>
        <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
        </tr>
    </table>
        `}
        language={"html"}
        showCodeEditor={true}
        />
        <p>
            This code defines a table with cell padding of 10 pixels and no spacing between the cells. The border attribute adds a border around the table.
        </p>

        <h1> Cell Colors </h1>
        <CodeBlock
        code={`
    <table border="5">
        <tr>
            <th bgcolor="#cccccc">Column 1</th>
            <th bgcolor="#cccccc">Column 2</th>
        </tr>
        <tr>
            <td bgcolor="#red" style="color:white">Row 1, Column 1</td>
            <td bgcolor="#orage">Row 1, Column 2</td>
        </tr>
        <tr>
            <td bgcolor="gray">Row 2, Column 1</td>
            <td bgcolor="#blue">Row 2, Column 2</td>
        </tr>
    </table>`}
            language="html"
            showCodeEditor={true}
        />
            <p>In this example, we've added background colors to the cells using the bgcolor attribute.</p>

            <h1> Rowspan and Colspan</h1>
            <p> In some cases, we might need to merge two or more cells into a single cell. We can achieve this using the rowspan and colspan attributes. Here's an example:</p>
            <CodeBlock
            code={`
    <table style="border: 1px solid black;">
        <tr style="border: 1px solid blue;">
            <th>Column 1</th>
            <th colspan="2">Column 2</th>
            <th>Column 3</th>
        </tr>
        <tr style="border: 1px solid gray;">
            <td>Row 1, Column 1</td>
            <td rowspan="5">Row 1 & 2, Column 2</td>
            <td>Row 1, Column 3</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 3</td>
        </tr>
        <tr style="border: 1px solid blue;">
            <td>Row 3, Column 1</td>
            <td>Row 3, Column 2</td>
            <td>Row 3, Column 3</td>
        </tr>
    </table>
            `}
            language={"html"}
            showCodeEditor={true}
            />
            <p>
                In this example, we have merged cells using both rowspan and colspan attributes.
            </p>

            <h1> Example </h1>
            <CodeBlock
            code={
               `
    <table style="font-family: Arial; border-collapse: collapse; width: 100%;">
        <tr style="border: 1px solid black;">
            <th style="padding: 10px; text-align: left; background-color: #cccccc;">Field</th>
            <th style="padding: 10px; text-align: left; background-color: #cccccc;">Description</th>
            <th style="padding: 10px; text-align: left; background-color: #cccccc;">Example</th>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="padding: 10px; text-align: left;">HTML</td>
            <td style="padding: 10px; text-align: left;">Defines the structure of web pages using tags and attributes.</td>
            <td style="padding: 10px; text-align: left;">&lt;html&gt;&lt;head&gt;&lt;title&gt;Page Title&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;/body&gt;&lt;/html&gt;</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="padding: 10px; text-align: left;">CSS</td>
            <td style="padding: 10px; text-align: left;">Defines the presentation and layout of web pages using rules and declarations.</td>
            <td style="padding: 10px; text-align: left;">color: blue; font-size: 16px; margin: 10px;</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="padding: 10px; text-align: left;">JavaScript</td>
            <td style="padding: 10px; text-align: left;">Adds interactivity and behavior to web pages through scripting.</td>
            <td style="padding: 10px; text-align: left;">document.getElementById("demo").innerHTML = "Hello World!";</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="padding: 10px; text-align: left;">Responsive Design</td>
            <td style="padding: 10px; text-align: left;">Creates web pages that adjust to different screen sizes and devices.</td>
            <td style="padding: 10px; text-align: left;">@media (max-width: 768px) { /* CSS rules */ }</td>
        </tr>
    </table>
               ` 
            }
            language="html"
            showCodeEditor={true}
            />

            <ul className="list-decimal ml-20">
                <li>Using padding can help to create more space between table cells, making the table easier to read and understand.</li>
                <li>Using text-align can help to align text in table cells to improve the visual appearance of the table and make it easier to read.</li>
                <li> Using border can help to create clearer distinctions between rows and columns in a table and make it easier for the user to separate and comprehend the data in the table.</li>
            </ul>

            <h1> Conclusion </h1>
            <p>
            HTML tables are crucial when it comes to displaying data in web pages, and in this part, we've seen how to create tables, add data, format cells, and merge cells. By understanding the structure and formatting options available, you'll be able to create tables that are both informative and visually appealing.
            </p>
        </animated.div>
    )
}
