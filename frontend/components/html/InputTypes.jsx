import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation';
import {animated} from '@react-spring/web';

export default function InputTypes() {

    const [lessonsSprings] = useSlideAnimation();

    return (
        <animated.div key={lessonsSprings.key} style={...lessonsSprings}>
            <h1> Input Types </h1>
            <p>
                HTML provides various input types that allow users to enter different types of data. These input types are crucial for user interaction with web forms. In this part, we will explore all the input types available in HTML and their use cases.
            </p>

            <p>
                Before diving into all input types, let's briefly review the basic structure of an HTML input element.
            </p>
            <CodeBlock
            code={`
    <label for="inputField">Input Field:</label>
    <input type="text" id="inputField" name="inputField">
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In the above example, type specifies the type of input that the user must provide. Here are the different types of inputs available in HTML:
            </p>

            <h1> Text </h1>
            <p>
                The text input type is used to create a one-line input field to collect plain text from the user.
            </p>
            <CodeBlock
            code={`
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
            `}
            langauge="html"
            showCodeEditor={true}
            />

            <h1> Number </h1>
            <p> The number input type is used to accept a number from a user. </p>
            <CodeBlock
            code={`
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="0" max="100">
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Date And Time </h1>
            <p>
                The date and time input types allow users to input dates or times respectively.
            </p>
            <CodeBlock
            code={`
    <label for="date">Date:</label>
    <input type="date" id="date" name="date">

    <label for="time">Time:</label>
    <input type="time" id="time" name="time">
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Email and Password </h1>
            <p>
                The email and password input types are used to acquire email addresses and passwords.
            </p>
            <CodeBlock
            code={`
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Checkbox </h1>
            <p>The checkbox input type enables developers to offer users multiple choices in their form.</p>
            <CodeBlock
            code={`
    <label for="interests">Select your interests:</label>
    <input type="checkbox" id="books" name="interests" value="books">
    <label for="books">Books</label>

    <input type="checkbox" id="music" name="interests" value="music">
    <label for="music">Music</label>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Radio </h1>
            <p> The radio input type only allows users to select one option among the available set.</p>
            <CodeBlock
            code={`
    <label for="gender">Choose your gender:</label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>

    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Range </h1>
            <p>
                The range input type allows the user to select a number from a range.
            </p>
            <CodeBlock
            code={`
    <label for="slider">Select a level:</label>
    <input type="range" id="slider" name="slider" min="0" max="10" step="1">
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> File </h1>
            <p>
                The file input type allows the user to choose a file from their computer.
            </p>
            <CodeBlock
            code={`
    <label for="myfile">Select a file:</label>
    <input type="file" id="myfile" name="myfile">`
            }
            language="html"
            showCodeEditor={true}
            />

            <h1> Submit and Reset </h1>
            <p>
                The submit and reset input types enable users to either submit or reset the form.
            </p>
            <CodeBlock
            code={`
    <input type="submit" value="Submit">
    <input type="reset" value="Reset">
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Hidden </h1>
            <p> The hidden input type is used to submit data that the user does not need to see or interact with. </p>
            <CodeBlock code={`<input type="hidden" name="session_id" value="208942">`} language={"html"} showCodeEditor={true}/>

            <h1> Conclusion </h1>
            <p>
                HTML provides various input types that enable developers to create user-friendly and interactive web forms. These input types can be used depending on the nature of data that needs to be collected from the user. By understanding the different input types and their use cases, developers can create effective forms with well-defined inputs that ensure user data is captured accurately and efficiently.
            </p>
        </animated.div>
    )
}
