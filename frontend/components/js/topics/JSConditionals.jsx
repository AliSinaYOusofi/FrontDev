import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSConditionals() {

    return (
        <div>
            <h1> Conditional statements in javascript</h1>
            <p>
                JavaScript conditional statements are used to execute code based on a certain condition or set of conditions. They allow you to control the flow of your program and handle different scenarios based on the values of variables and other expressions. In this part, we'll cover the different types of conditional statements in JavaScript.
            </p>

            <h2> if statement </h2>
            <p>
                The if statement is the most basic conditional statement in JavaScript. It allows you to execute a block of code if a certain condition is met. Here is the syntax of an if statement:
            </p>

            <CodeBlock
            code={`
if (condition) {
    // code to be executed if condition is true
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p> Here is an example </p>
            <CodeBlock
            code={`
const num = 5;

if (num > 0) {
    console.log("The number is positive.");
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the program checks if the value of num is greater than zero using the if statement. If the condition is true, the message "The number is positive." will be printed to the console.
            </p>

            <p>
                The condition is usually an expression that evaluates to a Boolean value (true or false). If the condition is true, the code inside the curly braces will be executed. If the condition is false, the code inside the curly braces will be skipped.
            </p>

            <h2> if...else Statement </h2>
            <p>
                The if...else statement is an extension of the if statement, which allows you to execute a block of code when the condition is false. Here is the syntax of an if...else statement:
            </p>

            <CodeBlock
            code={`
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                If the condition is true, the code inside the first set of curly braces will be executed. If the condition is false, the code inside the second set of curly braces will be executed.
            </p>

            <p> Here is an example </p>
            <CodeBlock
            code={`
const num = 0;

if (num > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is either negative or zero.");
}
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                In this example, the program checks if the value of num is greater than zero using the if statement. If the condition is true, the program will execute the code inside the first set of curly braces. If the condition is false, the program will execute the code inside the else clause.
            </p>

            <h2> else if Statement </h2>
            
            <p>
                The else if statement is used when there are multiple conditions to check. It is a shorthand for writing multiple if...else statements. Here is the syntax of an else if statement:
            </p>
            <CodeBlock
            code={`
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if all conditions are false
}
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                If the condition1 is true, the code inside the first set of curly braces will be executed. If the condition1 is false, but condition2 is true, the code inside the second set of curly braces will be executed. If all conditions are false, the code inside the third set of curly braces will be executed.
            </p>

            <p> Here is an example </p>
            <CodeBlock
            code={`
const num = 3;

if (num < 0) {
    console.log("The number is negative.");
} else if (num > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is zero.");
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the program checks the value of num against three conditions using the else if statement. If the value of num is less than zero, the program will print "The number is negative." to the console. If the value of num is greater than zero, the program will print "The number is positive." to the console. If neither of these conditions is true, the program will execute the code inside the else clause and print "The number is zero." to the console.
            </p>

            <h2> Using multiple else if statements</h2>
            <CodeBlock
            code={`
const grade = 85;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 60) {
    console.log("D");
} else {
    console.log("F");
}
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                In this example, the program checks the value of grade against five different conditions using multiple else if statements. The program prints a letter grade to the console based on the value of grade. If the value of grade is greater than or equal to 90, the program prints "A". If the value of grade is between 80 and 89, inclusive, the program prints "B". If the value of grade is between 70 and 79, inclusive, the program prints "C". If the value of grade is between 60 and 69, inclusive, the program prints "D". If the value of grade is less than 60, the program prints "F".
            </p>

            <h1> Conclusion </h1>
            <p>
                Conditional statements are essential in programming because they allow your code to make decisions based on certain conditions. The if statement is the most basic conditional statement, while if...else, else if, and the ternary operator are variations of the if statement. By using these conditional statements, you can create robust JavaScript programs that can handle different scenarios and conditions.
            </p>
        </div>
    )
}
