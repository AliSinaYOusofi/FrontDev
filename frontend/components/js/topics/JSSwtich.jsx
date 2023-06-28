import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSSwtich() {

    return (
        <div>
            <h1> JavaScript Switch Statement </h1>
            <p>
                The JavaScript switch statement is a powerful control flow feature that allows us to selectively execute code based on specific conditions. It provides a simpler and more readable alternative to lengthy nested if...else statements. In this blog post, we will explore the switch statement in JavaScript, understand its syntax, and examine various examples to better understand its usage and potential.
            </p>

            <h2> Syntax </h2>
            <p>
                The syntax of the switch statement is as follows:
            </p>

            <CodeBlock
            code={`
switch (expression) {
    case value1:
        // code block executed when expression matches value1
        break;
    case value2:
        // code block executed when expression matches value2
        break;
    // ... more cases
    default:
        // code block executed if no case matches expression
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                Let's break down the different parts of the switch statement:
            </p>

            <ul className="ml-10 list-disc">
                <li> expression: This represents the value that will be evaluated. </li>
                <li> case value: This represents a specific value to compare against the expression. If a case matches the expression, the corresponding block of code will be executed.</li>
                <li> break: After a case block is executed, the break statement is used to exit the switch statement. Without it, execution would continue to the next case, resulting in unintended behavior.</li>
                <li> default: When none of the cases match the expression, the default block is executed. It is optional and acts as a fallback case when no other cases match.</li>
            </ul>

            <h2> Examples </h2>
            <p>
                Now, let's examine some examples that demonstrate the power and flexibility of the switch statement.
            </p>

            <h2> Example 1: Day of the Week </h2>
            <p>
                Let's start with a simple example - determining the day of the week based on a numeric input.
            </p>

            <CodeBlock
            code={`
let dayNumber = 5;
let day;

switch (dayNumber) {
    case 1:
    day = 'Sunday';
    break;
    case 2:
    day = 'Monday';
    break;
    case 3:
    day = 'Tuesday';
    break;
    case 4:
    day = 'Wednesday';
    break;
    case 5:
    day = 'Thursday';
    break;
    case 6:
    day = 'Friday';
    break;
    case 7:
    day = 'Saturday';
    break;
    default:
    day = 'Invalid day number';
}

console.log(day); // Output: Thursday
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, we use the switch statement to match dayNumber against different cases. Since dayNumber is 5, the code inside the case 5 block executes, assigning the value "Thursday" to the day variable.
            </p>

            <h2> Example 2: Grade Calculation </h2>
            <p>
                The switch statement is also useful for evaluating multiple possible scenarios, such as grading a student based on their numerical score.
            </p>

            <CodeBlock
            code={`
let score = 80;
let grade;

switch (true) {
    case (score >= 90):
    grade = 'A';
    break;
    case (score >= 80):
    grade = 'B';
    break;
    case (score >= 70):
    grade = 'C';
    break;
    case (score >= 60):
    grade = 'D';
    break;
    default:
    grade = 'F';
}

console.log(grade); // Output: B
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                Here, we use true as the expression in the switch statement, and the cases contain comparison expressions. When the condition (score &gt;= 80) evaluates to true, the code inside the case (score &gt;= 80) block executes, assigning the value 'B' to the grade variable.
            </p>

            <h2> Example 3: Multiple Cases </h2>
            <p>
                The switch statement allows multiple cases to execute the same block of code. This saves us from writing redundant code.
            </p>

            <CodeBlock
            code={`
let beverage = 'Coffee';

switch (beverage) {
    case 'Tea':
    case 'Coffee':
    console.log('Hot beverage');
    break;
    case 'Orange Juice':
    case 'Apple Juice':
    console.log('Cold beverage');
    break;
    default:
    console.log('Unknown beverage');
}

// Output: Hot beverage
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, both 'Tea' and 'Coffee' match the condition, resulting in the code block inside the corresponding cases being executed. Consequently, the output is 'Hot beverage'.
            </p>

            <h2> Conclusion </h2>
            <p>
                The switch statement is a useful tool in JavaScript for handling multiple conditional cases. It provides a compact and readable way to execute code based on specific values or conditions. Understanding its syntax and applying it appropriately can significantly enhance the efficiency and clarity of your code. Hopefully, the examples provided in this blog have clarified the usage of the switch statement and given you a head start in implementing it in your JavaScript projects.
            </p>
        </div>

    )
}
