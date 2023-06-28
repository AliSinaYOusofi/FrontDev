import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSWhileDoWhile() {

    return (
        <div>
            <h1> JavaScript While and Do-While Loops </h1>
            <p>
                In JavaScript, loops play a crucial role when we want to execute a block of code repeatedly. Two commonly used loop structures are the while and do-while loops. In this blog post, we will explore and compare the while and do-while loops, understand their syntax, and provide examples to illustrate their usage in different scenarios.
            </p>

            <h2> The While Loop </h2>
            <p>
                The while loop executes a block of code as long as a specified condition is true. It is a pre-test loop, meaning that the condition is evaluated before each iteration.
            </p>

            <h2> Syntax </h2>
            <p>
                The syntax of the while loop is as follows:
            </p>

            <CodeBlock
            code={`
while (condition) {
    // code to be executed
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p> Let's break down the different parts of the while loop: </p>
            <ul className="ml-10 list-disc">
                <li> condition: This represents the Boolean expression that is evaluated before each iteration. If the condition evaluates to true, the code within the loop is executed. If false, the loop is terminated.</li>
            </ul>

            <h2> Example </h2>
            <p>
                Let's look at an example of using a while loop to iterate through a list of numbers and print them to the console:
            </p>

            <CodeBlock
            code={`
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// Output: 0, 1, 2, 3, 4
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the loop starts with i being 0. As long as i is less than 5, the code within the loop is executed. After each iteration, the value of i is incremented by 1 until the condition is no longer true.
            </p>

            <h2> The Do-While Loop </h2>
            <p>
                The do-while loop is similar to the while loop, but with one key difference: it is a post-test loop, meaning that the condition is evaluated after each iteration. This guarantees that the code within the loop is executed at least once.
            </p>

            <h2> Syntax </h2>
            <p> The syntax of the do-while loop is as follows: </p>
            <CodeBlock
            code={`
do {
    // code to be executed
} while (condition);
            `}
            language="javascript"
            onlyCode={true}
            />

            <p> Let's break down the different parts of the do-while loop: </p>
            <ul className="ml-10 list-disc">
                <li> condition: This represents the Boolean expression that is evaluated after each iteration. If the condition evaluates to true, the code within the loop is executed again. If false, the loop is terminated.</li>
            </ul>

            <h2> Example </h2>

            <p>
                Let's use a do-while loop to simulate rolling a dice until we get a desired value.
            </p>

            <CodeBlock
            code={`
let number;

do {
    number = Math.floor(Math.random() * 6) + 1;
    console.log('Roll:', number);
} while (number !== 6);

// Output: Roll: 5, Roll: 2, Roll: 6
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the do block generates a random number between 1 and 6 (inclusive) and assigns it to the number variable. The loop continues to execute as long as number is not equal to 6. As a result, we keep rolling the 
            </p>

            <h2> When to Use Which Loop? </h2>
            <p>
                The choice between a while loop and a do-while loop depends on the specific requirements of your code.
            </p>

            <h2> Use a while loop when: </h2>
            <ul className="ml-10 list-disc">
                <li> The loop should only execute if the condition is initially true. </li>
                <li>The number of iterations is uncertain. </li>
            </ul>

            <p> Use a do-while loop when:</p>
            <ul className="ml-10 list-disc">
                <li> You want to ensure that the loop body runs at least once. </li>    
                <li>The condition is checked after each iteration.</li>
                <li>It is necessary to execute a certain code block and then decide whether to continue or terminate the loop.</li>
            </ul>

            <h1> Examples </h1>

            <h2> Counting Down </h2>
            <CodeBlock
            code={`
let count = 5;

while (count > 0) {
    console.log(count);
    count--;
}

// Output: 5, 4, 3, 2, 1
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                Explanation: In this example, we start with count being 5. The while loop continues to execute as long as count is greater than 0. Inside the loop, we log the current value of count to the console and then decrement its value by 1. This process repeats until count becomes 0, resulting in the desired countdown.
            </p>

            <h2> Menu Selection </h2>
            <CodeBlock
            code={`
let choice;

do {
    console.log('1. Start Game');
    console.log('2. Options');
    console.log('3. Quit');
    choice = prompt('Please select an option');
} while (choice !== '3');

console.log('Game over');
            
// Output: (depends on the user's choice)
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                Explanation: This example demonstrates a menu system using a do-while loop. The menu options are displayed, and the user is prompted to select an option. The loop continues until the user enters '3' to quit the game. As long as the condition choice !== '3' is true, the menu is displayed again, allowing the user to make another selection. Once the user chooses '3', the loop terminates, and 'Game over' is logged to the console.
            </p>

            <h1> Conclusion </h1>
            <p>
                Loops are vital tools in programming, and the while and do-while loops are particularly useful for executing code repeatedly based on specific conditions. By understanding their syntax and appropriate use cases, you can effectively apply these loops in your JavaScript programs. Whether you need to iterate through a list or repeatedly perform an action until a condition is met, the while and do-while loops will undoubtedly improve the flexibility and efficiency of your code.
            </p>
        </div>
    )
}
