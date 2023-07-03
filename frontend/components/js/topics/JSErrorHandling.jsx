import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSErrorHandling() {

    return (
        <div>
            <h1> Error Handling in JavaScript </h1>
            <p>
                Modern web development heavily relies on JavaScript as the go-to language for creating interactive and dynamic websites. While JavaScript is known for its versatility and ease of use, it's also crucial to handle errors effectively to ensure smooth user experiences. try/catch is one of the fundamental tools in the JavaScript arsenal for error handling. In this part, we'll dive deep into try/catch and explore how it can help developers tame errors and keep their applications running smoothly.
            </p>

            <h2> Introduction to try/catch </h2>
            <p>
                try/catch is a powerful mechanism that allows developers to handle errors gracefully in JavaScript. It consists of two components:
            </p>

            <ul>
                <li> try block: This block encompasses the section of code where potential errors might occur. The JavaScript interpreter attempts to execute this code and immediately moves on if no errors occur.</li>
                <li> catch block: If an error occurs within the try block, the code execution is paused, and the control flow is transferred to the catch block. Here, developers have the opportunity to handle the error, log it, or take alternative actions.</li>
            </ul>

            <p>
                The try/catch structure enables developers to safeguard their applications and ensures that even if an error occurs, it doesn't bring down the entire program. Additionally, it assists developers in tracking down and diagnosing issues by providing useful error information.
            </p>

            <h2> Basic Usage of try/catch </h2>
            <p>
                Let's explore a simple example to understand how try/catch works:
            </p>
            <CodeBlock
            code={`
try {
    // Code that might throw an error
} catch (error) {
    // Code to handle the error
}
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                Here, any code that is possibly prone to errors should be placed within the try block. If an error occurs within this block, the control flow is immediately transferred to the catch block, where developers can appropriately handle the error.
            </p>

            <h2> Example: Dividing by Zero </h2>
            <CodeBlock
            code={`
try {
    const result = 10 / 0; // A division by zero error occurs here
    console.log(result); // This line is never reached
} catch (error) {
    console.log("An error occurred:", error); // Output: An error occurred: Infinity
}
            `}
            language="javascript"
            onlyCode={true}
            />
            <p> 
                In the example above, dividing any number by zero results in an error. Without error handling, this would crash the program. However, the try/catch block allows us to gracefully handle the situation. In the catch block, we can log the error or execute alternative code instead.
            </p>

            <h2> Handling Different Types of Errors </h2>
            <p>
                JavaScript offers various built-in error types that we can catch and handle using try/catch. Some common error types include:
            </p>

            <ul className="ml-10 list-disc">
                <li> Error: The generic error object that represents any runtime error. </li>
                <li> SyntaxError: Occurs when the execution encounters syntax errors.</li>
                <li> TypeError: Indicates that the expected type of a variable or value doesn't match the actual value.</li>
            </ul>

            <p> To handle specific error types, we can modify the catch block to match a specific error type: </p>
            <CodeBlock
            code={`
try {
    // Code that might throw an error
} catch (specificError) {
    // Code to handle a specific error type
} catch (genericError) {
    // Code to handle a generic error
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                By specifying multiple catch blocks, we can handle different error scenarios individually.
            </p>

            <p> Here is an example </p>
            <CodeBlock
            code={`
try {
    const user = {
        name: "John",
        email: "john@example.com"
        // missing age property
    };

    if (!user.age) {
        throw new ReferenceError("Age is missing");
    }

    // Other code that relies on user's age
} catch (referenceError) {
    console.log("ReferenceError occurred:", referenceError);
} catch (error) {
    console.log("Generic error occurred:", error);
}
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                In this example, we have an object user that represents user data. However, the age property is missing from the object. Inside the try block, we check if the age property exists. If it doesn't, we throw a ReferenceError and provide a custom error message.
            </p>

            <p>
                The first catch block specifically handles ReferenceError and logs a message with the error information. If any other error occurs, it will be caught by the second catch block, which handles generic errors and also logs an appropriate message.
            </p>

            <p>
            Using multiple catch blocks allows us to handle different error cases individually and perform specific actions for each scenario.
            </p>

            <h2> The finally Block </h2>
            <p>
                In addition to the try and catch blocks, JavaScript also provides the finally block for executing code that should always run, regardless of whether an error occurs or not. The finally block is optional and typically used for performing necessary clean-up operations, such as closing database connections or releasing resources.
            </p>

            <CodeBlock
            code={`
try {
    // Code that throws an error
} catch (error) {
    // Code to handle the error
} finally {
    // Code that should always run
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p> Here is an example: </p>

            <CodeBlock
            code={`
function performOperation() {
    try {
        // Code that may throw an error
        const result = 10 / 0; // Division by zero error
        console.log("Result:", result); // This line is never reached
    } catch (error) {
        console.log("An error occurred:", error);
    } finally {
        console.log("Performing clean-up operations...");
        // Code that should always run, regardless of whether an error occurred or not
    }
}

performOperation();
/*
    Output:
    An error occurred: Infinity
    Performing clean-up operations...
*/
            `}
            language="javascript"
            onlyCode={true}
            />
            
            <p>
                In the example above, we define a function performOperation() that attempts to perform a mathematical division by zero, which will throw an error. Within the try block, we carry out the division operation and try to log the result. However, because this division operation is invalid, an error occurs.
            </p>

            <p> 
                The catch block captures the error and logs an appropriate message. Meanwhile, the finally block executes the clean-up operations, which in this case is simply logging a message indicating that clean-up operations are being performed. The finally block always executes, regardless of whether an error was caught or not.
            </p>


            <h1> Conclusion </h1>
            <p>
                try/catch is an essential tool in a JavaScript developer's kit. By incorporating error handling logic into our code using try/catch, we can ensure our applications don't break when unexpected errors occur. Additionally, try/catch assists in diagnosing and fixing problems by providing error information. As you continue your JavaScript journey, mastering try/catch will prove vital in creating robust and user-friendly applications.
            </p>
        </div>
    )
}
