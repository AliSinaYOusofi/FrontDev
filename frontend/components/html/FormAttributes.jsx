import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation';
import {animated} from '@react-spring/web';


export default function FormAttributes() {

    const [lessonsSprings] = useSlideAnimation();

    return (
        <animated.div key={lessonsSprings.key} style={...lessonsSprings}>
            <h1> Forms Attributes </h1>
            <p>
                Forms are a fundamental part of web development. They are used to collect information from users and pass it to servers for processing. The design and functionality of forms can be enhanced using attributes. Attributes provide additional features and functionality to make forms more user-friendly and effective. In this part, we will explore the most commonly used form attributes and how they can be used.
            </p>

            <h1> Basic Syntax </h1>
            <p>
                Before we dive into the different form attributes, let's take a quick look at the basic structure of a form.
            </p>
            <CodeBlock
            code={`
<form action="#" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">

    <label for="password">Password:</label>
    <input type="password" id="password" name="password">

    <input type="submit" value="Submit">
</form>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Commonly Used Form Attributes </h1>
            <p>Below are the most commonly used form attributes.</p>

            <h1> Action </h1>
            <p>
                The action attribute tells the browser where to send the form data once it is submitted by the user. The action attribute’s value is usually a URL that points to a server-side script that can handle the form data.
            </p>
            <CodeBlock code={`<form action="https://example.com/form-handler" method="POST">`} language="html" showCodeEditor={true} />

            <h1> FormAction</h1>
            <p>
                The formaction attribute is used with the submit form input type to specify the URL of the server-side script that will handle the form submission. This attribute overrides the action attribute defined in the form element tag.
            </p>
            <p>
                Here is an example of how to use the formaction attribute in HTML:
            </p>
            <CodeBlock
            code={`
<form action="/form-handler.php" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <br><br>
    <input type="submit" value="Submit" formaction="/submit-handler.php">
    <input type="submit" value="Save as Draft" formaction="/draft-handler.php">
</form>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In the above example, when the user clicks the "Submit" button, the form data will be sent to the server-side script defined in the formaction attribute, which in this case is /submit-handler.php. Similarly, when they click the "Save as Draft" button, the data will be sent to the server-side script defined in the formaction attribute, which in this case is /draft-handler.php.
            </p>

            <p>
                It's worth noting that the formaction attribute is not supported in older browsers, so you should use it with caution and provide a fallback action in case the attribute is not supported.
            </p>

            <h1> Method </h1>
            <p>
                The method attribute specifies the HTTP verb to use when sending the form data to the server. The two most common methods are "GET" and "POST".
            </p>

            <h1> 1. GET Method </h1>
            <p>
                Data is appended to the form's action URL, and the data is visible in the URL. The information sent is limited, and the method is used mainly for submitting search queries and displaying the results.
            </p>
            <CodeBlock code={`<form action="https://example.com/form-handler" method="GET"> </form>`} language="html" showCodeEditor={false} />

            <h1> 2. POST method </h1>
            <p>
                Data is sent in the request body, and the data is not visible in the URL. The method is more secure and can be used for submitting sensitive data like passwords and credit card information.
            </p>
            <CodeBlock code={`<form action="https://example.com/form-handler" method="POST"> </form>`} language="html" showCodeEditor={false} />

            <h1> Name </h1>
            <p>
                The name attribute specifies the unique name of the input field. The values of the input fields are sent in the form of key-value pairs, and the names of the input fields are the keys.
            </p>
            <CodeBlock code={`
<label for="name">Name</label>
<input type="text" name="name" id="name">
        `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Required </h1>
            <p>
                The required attribute specifies that the input field must be filled before the form is submitted. The browser will prompt the user to fill in the field if it remains unfilled.
            </p>
            <CodeBlock
            code={`
<label for="location">Location</label>
<input type="text" name="location" id="location" required>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Placeholder </h1>
            <p>
                The placeholder attribute specifies a short hint or example about the expected value of the input field. It disappears when the user types in the field.
            </p>
            <CodeBlock
            code={`
<label for="email">Email</label>
<input type="email" name="email" id="email" placeholder="name@example.com">
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Value </h1>
            <p>
                The value attribute is used to set the default value of the input field. It can be used with any input type and is not required.
            </p>
            <CodeBlock
            code={`
<label for="gender">Gender</label>
<input type="radio" name="gender" id="male" value="male">
<label for="male">Male</label>
<input type="radio" name="gender" id="female" value="female">
<label for="female">Female</label>`
            }
            language="html"
            showCodeEditor={true}
            />

            <h1> Disabled </h1>
            <p>
                The disabled attribute disables the input field, preventing the user from interacting with it.
            </p>
            <CodeBlock
            code={`
<label for="email">Email</label>
<input type="email" name="email" id="email" disabled>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Readonly </h1>
            <p>
                The readonly attribute makes the input field read-only, preventing the user from modifying the input value.
            </p>
            <CodeBlock
            code={`
<label for="date">Date</label>
<input type="text" id="date" name="date" value="2022-01-01" readonly>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Conclusion </h1>
            <p>
                Forms attributes can enhance the functionality and user experience of HTML forms. In this blog, we have covered some of the most common form attributes, including action, method, name, required, placeholder, value, disabled, and readonly. By incorporating these attributes, web developers can provide better usability, security, and accessibility to their users, resulting in a seamless user experience.
            </p>
        </animated.div>
    )
}
