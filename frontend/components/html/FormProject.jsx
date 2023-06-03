import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import {animated} from '@react-spring/web';
import useSlideAnimation from '@/hooks/useSlideAnimation';


export default function FormProject() {

    const [lessonsSprings, lessonAPI] = useSlideAnimation();

    return (
        <animated.div key={lessonsSprings.key} style={...lessonsSprings}>
            <h1>Form Project</h1>

            <p>
                This is an example of a form that includes every possible type of input and HTML attribute. It demonstrates how to use HTML form attributes to collect and validate user input, from simple text fields to more complex elements like range sliders and file uploads.
            </p>
            <CodeBlock
            code={`
<form action="submit-form.php" method="post">
    <label for="name">Name:</label>
    <br>
    <input type="text" id="name" name="name" required>
    <br>

    <label for="email">Email:</label>
    <br>
    <input type="email" id="email" name="email" required>
    <br>

    <label for="password">Password:</label>
    <br>
    <input type="password" id="password" name="password" minlength="8" maxlength="20" required>
    <br>

    <label for="phone">Phone:</label>
    <br>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required>
    <br>

    <label for="website">Website:</label>
    <br>
    <input type="url" id="website" name="website" required>
    <br>

    <label for="birthdate">Birthdate:</label>
    <br>
    <input type="date" id="birthdate" name="birthdate" required>
    <br>

    <label for="time">Time:</label>
    <br>
    <input type="time" id="time" name="time" required>
    <br>

    <label for="color">Favorite color:</label>
    <br>
    <input type="color" id="color" name="color" required>
    <br>

    <label for="file">Upload file:</label>
    <br>
    <input type="file" id="file" name="file" accept=".pdf,.doc,.docx" required>
    <br>

    <label for="range">Rating:</label>
    <br>
    <input type="range" id="range" name="range" min="0" max="10" value="5" step="1">
    <br>

    <label for="checkbox">Agree to terms:</label>
    <br>
    <input type="checkbox" id="checkbox" name="checkbox" required>
    <br>

    <label for="radio1">Option 1:</label>
    <br>
    <input type="radio" id="radio1" name="radio" value="option1">
    <br>

    <label for="radio2">Option 2:</label>
    <br>
    <input type="radio" id="radio2" name="radio" value="option2">
    <br>

    <label for="select">Select option:</label>
    <br>
    <select id="select" name="select" required>
        <option value="">Please select</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>
    <br>

    <label for="textarea">Message:</label>
    <br>
    <textarea id="textarea" name="textarea" rows="5" cols="30" maxlength="200" required></textarea>
    <br>

    <input type="submit" value="Submit">
</form>
            `}
            language="html"
            showCodeEditor={true}
            />
            <h1> Explanation </h1>
            
            <ul className="ml-20 list-decimal">
                <li>The action attribute specifies the URL of the page that will process the form data when it's submitted.</li>
                <li>The method attribute specifies the HTTP method to use when submitting the form data (post or get).</li>
                <li>The label tag is used to describe each form input.</li>
                <li>The type attribute is used to specify the type of input (text, email, password, etc.).</li>
                <li>The name attribute is used to identify the input data when the form is submitted.</li>
                <li>The id attribute is used to associate the label with the input element.</li>
                <li>The required attribute is used to specify if the input is required or not.</li>
                <li>The minlength and maxlength attributes are used to define the minimum and maximum length of characters that an input data can contain.</li>
                <li>The pattern attribute is used to define a regex pattern to which an input's value must match.</li>
                <li>The accept attribute is used to limit the types of files that can be uploaded using the file input.</li>
                <li>The min and max attributes are used to define the minimum and maximum values of a range input.</li>
                <li>The value attribute is used to define the default value of an input.</li>
                <li>The rows and cols attributes are used to define the number of rows and columns for the textarea input.</li>
            </ul>
            
        </animated.div>
    )
}
