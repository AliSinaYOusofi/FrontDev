import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation';
import {animated} from '@react-spring/web';


export default function InputAttributes() {
        
        const [lessonsSprings] = useSlideAnimation();

        return (
        <animated.div key={lessonsSprings.key} style={...lessonsSprings}>
            <h1> Input Attributes</h1>
            <p>HTML form inputs allow users to input data that can be later submitted for various purposes, such as creating user accounts, submitting feedback forms, or making search queries. In this part, we'll explore the attributes that affect the behavior of form inputs in HTML.</p>

            <h1> Name Attribute </h1>
            <p> The name attribute is essential to associating a specific input field with the rest of the form. Input fields should have distinct names to avoid confusion when submitting the form to the server. </p>
            <CodeBlock
            code={`
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Value Attribute </h1>
            <p> The value attribute allows developers to set the initial value of an input element. For instance, set a specific value for a checkbox if it is initially checked.</p>
            <CodeBlock
            code={`
    <input type="checkbox" id="remember" name="remember" value="true" checked>
    <label   label for="remember">Remember me</label>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Placeholder Attribute </h1>
            <p>
                The placeholder attribute provides an instructional message that appears inside the input element before the user starts typing. For example, an input field that collects users' emails might display an instructional message hinting to what should be entered.
            </p>
            <CodeBlock
            code={`
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email">
            `}
            language={"html"}
            showCodeEditor={true}
            />

            <h1> Required Attribute </h1>
            <p>
                The required attribute demands user input before the form can be submitted. It can prevent incomplete or incorrect data submissions.
            </p>
            <CodeBlock
            code={`
    <label for="city">City:</label>
    <input type="text" id="city" name="city" required>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Disabled Attribute </h1>
            <p>
                The disabled attribute restricts user interaction with the form element and grays it out. For example, an online store could reveal if a product is out of stock by disabling the "add to cart" button.
            </p>
            <CodeBlock code={`<input type="text" id="product" name="product" disabled>`} language="html"showCodeEditor={true} />

            <h1> Checked Attribute </h1>
            <p>
                The checked attribute allows the developer to preselect a radio button or checkbox on page load.
            </p>
            <CodeBlock
            code={`
    <input type="radio" id="male" name="gender" value="male" checked>
    label for="male">Male</label>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Read-Only Attribute </h1>
            <p>
                The readonly attribute prevents a user from modifying a particular input field value. It can be useful for creating disabled input fields in forms that can not be edited.
            </p>
            <CodeBlock
            code={`
    <label for="id">ID:</label>
    <input type="text" id="id" name="id" value="345" readonly>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Maxlength Attribute </h1>
            <p> The maxlength attribute limits the number of characters that can be inputted in an input field. </p>
            <CodeBlock
            code={`
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" maxlength="30">
            `}
            language="Html"
            showCodeEditor={true}
            />

            <h1> Autofocus Attribute </h1>
            <p> The autofocus attribute ensures that the input field is focused on page load, which makes it more convenient for users. </p>
            <CodeBlock
            code={`
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" autofocus>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Min, Max, and Step Attributes </h1>
            <p>
                The min, max, and step attributes work together with the number input type to set the minimum value, maximum value, and the increment for the input field.
            </p>
            <CodeBlock
            code={`
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="0" max="100" step="1">
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Pattern Attribute </h1>
            <p> The pattern attribute sets a regular expression pattern that the user's input must match for the input to be valid. </p>
            <CodeBlock
            code={`
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" pattern="[a-zA-Z0-9]+">
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Form Attribute </h1>
            <p>
                The form attribute is used to associate an input element with a specific form. It is useful when an input field is not included in the form elements directly.
            </p>
            <CodeBlock
            code={`
    <form id="form1">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
    </form>

    <input type="submit" form="form1" value="Submit">
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Multiple Attribute </h1>
            <p> The multiple attribute is used for input types that allow multiple entries, such as file uploads.</p>
            <CodeBlock
            code={`
    <label for="file">Select multiple files:</label>
    <input type="file" id="file" name="file" multiple>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Accept Attribute </h1>
            <p> The accept attribute specifies the type of file that the input field should accept.</p>
            <CodeBlock
            code={`
    <label for="file">Select an image:</label>
    <input type="file" id="file" name="file" accept="image/*">
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Autocapitalize and Autocorrect Attributes </h1>
            <p> The autocapitalize and autocorrect attributes allow the developer to enable or disable the corresponding functionality on the input field.</p>
            <CodeBlock
            code={`
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" autocapitalize="words" autocorrect="on">
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Conclusion </h1>
            <p>
                HTML input attributes allow developers to customize how forms operate in multiple ways. By using different attributes, developers can control how input fields behave, validate users' data entries, and make their forms more accessible to users. By making good use of the above attributes, you can build efficient and effective forms that serve their intended purposes.
            </p>
        </animated.div>
    )
}
