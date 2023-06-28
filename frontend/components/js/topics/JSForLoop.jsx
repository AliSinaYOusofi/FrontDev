import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSForLoop() {

    return (
        <div>
            <h1> Loops in JavaScript </h1>
            <p>
                Loops play a crucial role in JavaScript, allowing developers to repeat a specific set of instructions multiple times. Among the various types of loops available, the for loop is an essential construct that provides fine-grained control over iteration. In this blog post, we will explore the fundamentals of for loops in JavaScript and provide practical examples to help you understand their power and versatility.
            </p>

            <h2> Anatomy of a For Loop </h2>
            <p>
                The for loop is composed of three main sections: the initialization, the condition, and the update. Together, these sections allow you to define the starting point, the end condition, and the increment or decrement value for each iteration. Here's how a typical for loop looks:
            </p>
            <CodeBlock
            code={`
for (initialization; condition; update) {
    // code to be repeated
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p> Now, let's examine each section in detail: </p>
            <h2> Initialization </h2>
            <p>
                In the initialization section, you define the starting point or initial state of the loop. This is typically where you declare and initialize the loop variable. For example, let i = 0 sets the loop variable i to 0.
            </p>

            <h2> Condition </h2>
            <p>
                The condition is checked before each iteration. If the condition evaluates to true, the loop continues; if it evaluates to false, the loop ends. You can use any valid expression as the condition, such as a comparison (i &lt; 5) or a function call.
            </p>

            <h2> Update </h2>
            <p>
                The update section is executed at the end of each iteration, allowing you to modify the loop variable in order to control the iteration process. Most commonly, you increment or decrement the loop variable. For example, i++ increments i by 1, while i-- decrements it by 1.
            </p>

            <h1> Let's see some examples </h1>
            <p>
                Now that we understand the basic structure of a for loop, let's dive into some practical examples to demonstrate their usage.
            </p>

            <h2> Example 1: Counting from 1 to 5 </h2>
            <CodeBlock
            code={`
for (let i = 1; i <= 5; i++) {
    console.log(i); // Output: 1 2 3 4 5
}
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                In this example, the for loop starts with i set to 1. As long as i is less than or equal to 5, the loop continues. After each iteration, i is incremented by 1, and the loop prints the value of i. The loop terminates when i becomes 6, as the condition evaluates to false.
            </p>

            <h2> Example 2: Iterating over an Array </h2>
            <CodeBlock
            code={`
const fruits = ["apple", "banana", "orange", "grape"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the for loop iterates over each element in the fruits array. The loop starts with i set to 0, and it continues until i becomes equal to the length of the array. For each iteration, the loop prints the element at the current index using fruits[i].
            </p>

            <h2> Example 3: Computing the Sum of Even Numbers </h2>
            <CodeBlock
            code={`
let sum = 0;

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
    sum += i;
    }
}

console.log(sum); // Output: 30
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the for loop checks if i is an even number by using the modulo operator (i % 2 === 0). If i is divisible by 2 without a remainder, the code inside the if statement is executed. By incrementally adding each even number to the sum variable, the loop effectively computes the sum of even numbers from 1 to 10.
            </p>

            <h1> Conclusion </h1>
            <p>
            For loops are an indispensable tool when it comes to repetitive tasks and iterating over data sets. With their flexible structure, you can easily control the starting point, the condition, and the update for each iteration. Armed with this knowledge and the practical examples provided, you are now well-equipped to harness the power of for loops in your JavaScript programs.
            </p>
        </div>
    )
}
