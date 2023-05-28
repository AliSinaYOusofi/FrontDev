import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation';
import {animated} from '@react-spring/web';

export default function FormElements() {

    const [lessonsSprings] = useSlideAnimation();

    return (
        <animated.div key={lessonsSprings.key} style={...lessonsSprings}>
            <h1> Form Elements </h1>
            <p>
                HTML form elements are essential to creating interactive and dynamic web pages. HTML provides a wide array of form elements that can collect data, select options, and allow users to interact with a webpage
            </p>
            <p> 
                Commonly Used Form Elements
            </p>
            <ul className="ml-20 list-decimal">
                <li> {"<input />"}</li>
                <li> {"<textarea />"}</li>
                <li> {"<select />"}</li>
                <li> {"<button />"}</li>
                <li> {"<fieldset />"}</li>
                <li> {"<legend />"}</li>
                <li> {"<form />"}</li>
                <li> {"<datalist />"}</li>
                <li> {"<option />"} </li>
                <li> {"<optgroup />"} </li>
            </ul>

            <h1> Input fields </h1>
            <p>
                Input fields are used to collect data from users in various formats, such as text, numbers, email, and passwords.
            </p>
            <CodeBlock code={`
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">`
            }
            language="html"
            showCodeEditor={true}
            />

            <h1> Select Menus </h1>
            <p>
                Select menus allow users to select an option from a dropdown menu.
            </p>
            <CodeBlock
            code={`
    <label for="color">Choose a color:</label>
    <select id="color" name="color">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
    </select>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Textareas </h1>
            <p>
                Textarea elements allow users to enter an amount of text.
            </p>
            <CodeBlock
            code={`
    <label for="feedback">Please enter your feedback:</label>
    <textarea id="feedback" name="feedback" rows="5" cols="40"></textarea>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                The rows attribute specifies the visible height of the textarea, and the cols attribute specifies the visible width of the textarea. Both attributes are optional, but it's recommended to use them because they help the browser determine how many rows and columns of text to display in the textarea, which ensures your layout looks as you intended.
            </p>

            <h1>Buttons</h1>
            <p>
                Button elements are used to trigger an action, such as submitting a form.
            </p>
            <CodeBlock code={`<button type="submit">Submit</button>`} language="html" showCodeEditor={true} />

            <h1> Fieldset and Legend </h1>
            <p>
                Fieldset and legend elements group related form elements and provide context.
            </p>
            <CodeBlock
            code={`
    <fieldset>
        <legend>Contact Information</legend>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
    </fieldset>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Datalist </h1>
            <p>
                Datalist elements provide a list of predefined options available for selection.
            </p>
            <CodeBlock
            code={`
    <label for="browser">Choose a browser:</label>
    <input list="browsers" name="browser">
    <datalist id="browsers">
        <option value="Chrome">
        <option value="Firefox">
        <option value="Internet Explorer">
        <option value="Opera">
        <option value="Safari">
    </datalist>
            `}
            language={"html"}
            showCodeEditor={true}
            />

            <h1> Output </h1>
            <p>
                Output elements display the result of a calculation or operation.
            </p>
            <CodeBlock
            code={`
    <label for="amount">Amount:</label>
    <input type="number" id="amount" name="amount">
    <output for="amount"></output>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Option and Optgroup </h1>
            <p> The option and optgroup elements create options and option groups within select elements. </p>
            <CodeBlock
            code={`
    <select>
        <optgroup label="Colors">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
        </optgroup>
        <optgroup label="Fruits"> 
            <option value="apple">Apple</option> 
            <option value="banana">Banana</option> 
            <option value="orange">Orange</option>
        </optgroup> 
    </select>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Conclusion </h1>
            <p> In conclusion, HTML form elements provide web developers with a wide array of tools to create interactive and user-friendly web pages. With input fields, select menus, text areas, buttons, fieldsets, legends, datalists, output elements, options, and optgroups, developers can create forms that suit their website's needs. By understanding how to use these form elements effectively, web developers can create seamless user experiences and achieve their website goals. </p>
        </animated.div>
    )
}
