import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation';
import {animated} from '@react-spring/web';

export default function FormsIntroduction() {

    const [lessonsSprings] = useSlideAnimation();

    return (
        <animated.div key={lessonsSprings.key} style={...lessonsSprings}>
            <h1>HTML Forms</h1>
            <p>
                HTML forms are used to gather data from users and submit it to a web server for processing. Forms are primarily used for online transactions, such as user registration, login, and checkout. Forms can also be used for more complex interactions with the user, such as surveys and feedback collection.
            </p>

            <p>
                HTML forms consist of several components, each with a specific function. These components include input fields, buttons, and menus, among others. These components work together to provide a user-friendly interface for data collection.
            </p>

            <h1> Basic Components of HTML Forms </h1>
            <p>
                HTML forms consist of several basic components that are essential to the form's functionality. These components include:
            </p>

            <h1>
                Form Container
            </h1>
            <p>
                The form container is the outermost element of the form. It wraps all the other components and provides a way to group them together.
            </p>
            <p>
                To create a form container, we use the {"<form>"} tag, as shown below:
            </p>
            <CodeBlock code={`
    <form>
        <!-- Form components go here -->
    </form>`}
            language={"html"}
            showCodeEditor={false}
            />

            <h1> Input Fields </h1>
            <p>
                Input fields are used to allow the user to enter data into the form. There are several types of input fields, including:
            </p>

            <ul className="list-disc ml-8">
                <li> Text fields: Allow users to enter text characters. </li>
                <li> Password fields: Allow users to enter text characters, but don't display them. </li>
                <li> Email fields: Allow users to enter an email address. </li>
                <li> Number fields: Allow users to enter a number. </li>
                <li> Date fields: Allow users to enter a date. </li>
                <li> Time fields: Allow users to enter a time. </li>
                <li> Color fields: Allow users to enter a color. </li>
            </ul>

            <p>
                For example, a text input field can be created as shown below:
            </p>
            <CodeBlock code={`<input type="text" name="username" placeholder="Enter username" />`} language="html" showCodeEditor={true} />

            <h1> Labels </h1>
            <p>
                Labels are used to identify input fields and form components. A label should be associated with a specific input field to provide additional context to the user.
            </p>
            <CodeBlock
            code={`
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" />
            `}
            language={"html"}
            showCodeEditor={true}

            />
            <h1> Buttons </h1>
            <p>
                Buttons are used to perform specific actions in a form, such as submitting the data to the server or resetting the form. Buttons can be created using the {"<button>"} or {"<input>"} tag.
            </p>
            <CodeBlock
            code={`
        <button type="submit">Submit</button>
        <input type="text" value="Reset Form" />
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Conclusion </h1>
            <p>
                In conclusion, HTML forms are a vital component of web development and are used for a wide range of purposes. HTML forms consist of several components, each with a specific function, such as input fields, labels, and buttons. By using these components correctly and in combination, we can create user-friendly forms that are easy to use and provide accurate data collection.
            </p>
        </animated.div>
    )
}
