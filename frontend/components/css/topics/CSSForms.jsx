import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSForms() {
    return (
        <div>

            <h1> Simple Login form </h1>

            <p>
                We will build a simple login form using html and will style
                the form using CSS.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Styled Form</title>
        <style>
            /* Style for form elements */
            .form {
                width: 50%;
                margin: auto;
                padding: 20px;
                border: 1px solid #999;
                color: black;
                background-color: #eee;
                border-radius: 10px;
            }
            
            .form label {
                display: block;
                margin-bottom: 5px;
            }

            .form input[type=text], input[type=password] {
              width: 100%;
              padding: 10px;
              border: 2px solid #ccc;
              border-radius: 4px;
              box-sizing: border-box;
              margin-bottom: 10px;
            }

            .form input[type=submit] {
              background-color: #4CAF50;
              color: white;
              padding: 12px 20px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            }

            .form input[type=submit]:hover {
              background-color: #45a049;
            }
        </style>
    </head>
    <body>
        <h1>Styled Form</h1>
        <form class="form">
            <!-- Form Fields -->
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username">
            
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password">
            
            <!-- Submit Button -->
            <input type="submit" value="Submit">
        </form>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                The HTML code creates a basic form with two input fields and a submit button. The DOCTYPE specifies the version of HTML being used and the html tags indicate the beginning and end of the HTML document.
            </p>

            <p>
                Within the HTML document, there is a head section where metadata about the document is defined. In this case, it includes a title tag that specifies the title for the web page, and a style tag that defines the CSS styles for the form.
            </p>

            <p>
                Inside the style tag, we define different styles using CSS selectors. In this example, we're using the form, label, input[type=text], input[type=password] and input[type=submit] selectors to apply different styles to different form elements.
            </p>

            <p>
            For example, we set the border color of input fields to #ccc, and set the background color of the form to #eee. We also define a class .form for the entire form to apply some additional styles like a border-radius and padding.
            </p>

            <p>
                In the HTML code, we have set the class attribute of the form to "form" which links it with the CSS class.
            </p>

            <p>
            Finally, we have included two input fields: one for username and another for password. Each input field is given a corresponding label, and the type attribute is set to "text" and "password" respectively. We have also added placeholders to let the user knows what to enter in each input field. The submit button is also defined using the input tag with type=submit.
            </p>

            <h1> Making a sign up form </h1>
            <p>
            In this example, we will build a sign up form using HTML and CSS.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Register Form</title>
        <style>
            /* Style for form elements */
            .form1 {
                width: 50%;
                margin: auto;
                padding: 20px;
                border: 1px solid #999;
                color: black;
                background-color: #eee;
                border-radius: 10px;
                margin-top: 15px;
            }

            .form1 label {
                display: block;
                margin-bottom: 5px;
            }

            .form1 input[type=text], 
            .form1 input[type=password],
            .form1 input[type=date], 
            .form1 select,
            .form1 textarea {
                width: 100%;
                padding: 10px;
                border: 2px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
                margin-bottom: 10px;
            }

            .form1 input[type=submit] {
                background-color: #4CAF50;
                color: white;
                padding: 12px 20px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }

            .form1 input[type=submit]:hover {
                background-color: #45a049;
            }

            .form1 .name {
                width: 48%;
                float: left;
                margin-right: 4%;
            }

            .form1 .gender {
                width: 100%;
            }

            .form1 .message {
                width: 100%;
                height: 100px;
            }

            .form1 .email-label {
                margin-bottom: 10px;
            }
        </style>
    </head>

    <body>

        <h1 align="center">Register Form</h1>

        <form class="form1">
            
            <label for="first-name">First Name:</label>
            <input type="text" id="first-name" name="first-name" placeholder="Enter your first name">
        
        
            <label for="last-name">Last Name:</label>
            <input type="text" id="last-name" name="last-name" placeholder="Enter your last name">
            

            <label for="email" class="email-label">Email:</label>
            <input type="text" id="email" name="email" placeholder="Enter your email">

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password">

            <label for="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password">

            <label for="birthdate">Birthdate:</label>
            <input type="date" id="birthdate" name="birthdate" placeholder="Enter your birthdate">

            <label for="gender">Gender:</label>
            <select id="gender" name="gender" class="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <label for="comments">Comments:</label>
            <textarea id="comments" name="comments" class="message" placeholder="Enter your comments here"></textarea>

            <input type="submit" value="Submit">
        </form>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Explanation of the code above:</h1>

            <ul className="list-disc ml-10">

                <li>
                    .form1: This rule targets all elements with the class name "form1" and sets their width, margin, padding, background color, border, border-radius, margin-top, and text color.
                </li>

                <li>
                    .form1 label: This rule targets all label elements in the form with the class name "form1" and sets their display and margin-bottom properties.
                </li>

                <li>
                    .form1 input[type=text], .form1 input[type=password], .form1 input[type=date], .form1 select, .form1 textarea: This is a combined rule that targets all text input fields, password fields, date fields, select dropdowns, and text areas in the form with the class name "form1". It sets their width, padding, border, border-radius, and box-sizing properties.
                </li>

                <li>
                    .form1 input[type=submit]: This rule targets the submit button in the form with the class name "form1" and sets its background color, text color, padding, border, border-radius, and cursor.
                </li>

                <li>
                    .form1 input[type=submit]:hover: This rule targets the submit button in the form with the class name "form1" when it is hovered over by the mouse, and changes its background color.
                </li>

                <li>
                    .form1 .name: This rule targets all elements in the form with the class name "name" with the class name "form1" and sets their width, float, and margin-right properties.
                </li>

                <li>
                    .form1 .gender: This rule targets all elements in the form with the class name "gender" with the class name "form1" and sets their width.
                </li>

                <li>
                    .form1 .message: This rule targets the comments textarea element in the form with the class name "form1" and sets its width and height.
                </li>

                <li>
                    .form1 .email-label: This rule targets the email label element in the form with the class name "form1" and sets its margin-bottom property.
                </li>

                <li>
                    Overall, these CSS rules work together to give the form a clean and responsive design and make it easy for users to fill out the form fields.
                </li>
            </ul>
        </div>
    )
}
