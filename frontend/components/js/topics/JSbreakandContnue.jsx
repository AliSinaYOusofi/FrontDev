import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSbreakandContnue() {

    return (
        <div>
            <h1> break and continue Keywords in JavaScript </h1>
            <p>
                In JavaScript, the break and continue keywords provide additional control within loops, allowing developers to alter the default flow of execution. These keywords are particularly useful when you need to exit a loop prematurely or skip certain iterations based on specific conditions. In this part, we'll explore the functionality and usage of break and continue in JavaScript loops.
            </p>

            <h2> break: Breaking Out of a Loop </h2>
            <p>
                The break statement is used to abruptly terminate the execution of a loop. When encountered, the break statement causes the loop to exit immediately, regardless of the loop's condition. This can be useful when you want to prematurely exit a loop under specific circumstances.
            </p>

            <p>
                Here's an example where break is used to stop a loop when a given condition is met:
            </p>

            <CodeBlock
            code={`
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i); // Output: 1 2 3 4
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the example code above, the loop starts with i set to 1 and continues until i reaches 5. When i is equal to 5, the break statement is encountered, causing the loop to terminate immediately. As a result, only the numbers 1 through 4 are printed.
            </p>

            <h2> continue: Skipping Current Iteration </h2>
            <p>
                The continue statement is used to skip the current iteration of a loop and continue to the next iteration. When encountered, the continue statement bypasses the remaining code in the loop block for the current iteration and moves on to the next iteration.
            </p>

            <p>
                Consider the following example, which skips printing even numbers using the continue statement:
            </p>
            <CodeBlock
            code={`
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i); // Output: 1 3 5 7 9
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the loop prints only the odd numbers from 1 to 10. When i is an even number, the continue statement is executed, skipping the code that prints the even number. This results in the loop continuing with the next iteration without executing the remaining code for that iteration.
            </p>

            <h2> Understanding the Differences</h2>
            <p>
                While both break and continue alter the flow of execution within loops, it's important to note their differences:
            </p>

            <ul className="list-disc ml-10">
                <li> The break statement immediately terminates the loop and continues the execution of the program outside the loop. </li>
                <li> The continue statement skips the remaining code for the current iteration and moves on to the next iteration within the loop.</li>
            </ul>

            <p>
                Both break and continue statements can be used in various loop types, such as for, while, and do-while loops. They provide powerful control over loop execution, allowing developers to fine-tune the behavior based on specific conditions.
            </p>

            <h1> Conclusion </h1>
            <p>
                Understanding and utilizing the break and continue keywords in JavaScript loops is essential for efficient and flexible coding. The break statement helps when you need to exit a loop prematurely, while the continue statement allows you to skip certain iterations. By incorporating these keywords into your code, you gain greater control and can tailor the loop's execution to meet your specific requirements. 
            </p>
        </div>
    )
}
