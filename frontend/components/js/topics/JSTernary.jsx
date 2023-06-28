import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSTernary() {

    return (
        <div>
            <h1> Ternary Operator in JavaScript </h1>
            <p> 
                In JavaScript, the ternary operator is a shorthand for writing simple if-else statements. It's a concise way to write an if/else statement without the use of a code block. The syntax for the ternary operator in JavaScript is:
            </p>

            <CodeBlock
            code={`
(condition) ? expression1 : expression2
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                If the condition is true, expression1 is executed, otherwise expression2 is executed.
            </p>

            <h1> Examples </h1>
            
            <h2> Example 1: Ternary Operator for Assigning a Value </h2>
            
            <p>
                One of the most common use cases of the ternary operator is assigning a value to a variable based on a condition. Here's an example:
            </p>
            
            <CodeBlock
            code={`
let age = 17;
let isAllowed = (age >= 18) ? true : false;

console.log(isAllowed); // result: false
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, age is set to 17 and isAllowed is set to true if age is greater than or equal to 18, otherwise false.
            </p>

            <h2> Example 2: Ternary Operator for Printing a Value </h2>
            <p>
                Sometimes it's convenient to print a message based on a condition. We can use the ternary operator to achieve that as well. Here's an example:
            </p>
            <CodeBlock
            code={`
let isRaining = false;
console.log(isRaining ? "Bring an umbrella" : "Don't bring an umbrella"); // result: "Don't bring an umbrella"
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, isRaining is set to false. If it was true, the message "Bring an umbrella" would be printed. Since it's false, the message "Don't bring an umbrella" is printed.
            </p>

            <h2> Example 3: Nested Ternary Operators </h2>
            <p>
                We can also nest ternary operators to create more complex expressions. Here's an example:
            </p>
            <CodeBlock
            code={`
let age = 22;
let isStudent = true;
let discount = (isStudent) ? 20 : 10; // result: 20
let isAllowed = (age >= 18) ? true : false; // result: true
let finalPrice = 100 - ((isAllowed) ? discount : 0); // result: 80

console.log(finalPrice); // result: 80
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, there are four variables: age, isStudent, discount, and isAllowed. discount is set to 20 if isStudent is true, otherwise it's set to 10. isAllowed is set to true if age is greater than or equal to 18, otherwise it's set to false. Finally, finalPrice is calculated by subtracting discount from 100 if isAllowed is true, otherwise it's simply 100.
            </p>

            <h1> Conclusion </h1>
            <p>
                Ternary operator is a handy shorthand for writing if-else statements in JavaScript. It can be used for simple assignments, calculations, and even printing messages. With practice, you can become comfortable with using the ternary operator in your code.
            </p>
        </div>
    )
}
