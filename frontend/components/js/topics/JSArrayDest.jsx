import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSArrayDest() {

    return (
        <div>
            <h1> JavaScript Array Destructuring </h1>
            <p>
                JavaScript offers a powerful feature called array destructuring that allows you to extract values from an array and assign them to variables in a more concise and readable way. In this blog post, we will dive into array destructuring, understand its syntax, and explore various use cases where it can be incredibly useful.
            </p>

            <h2> Introduction to Array Destructuring </h2>
            <p>
                Array destructuring simplifies the process of extracting values from an array and assigning them to individual variables. It provides a concise alternative to manually accessing array elements by their index.
            </p>

            <p> Consider the following example: </p>
            <CodeBlock
            code={`
const numbers = [1, 2, 3, 4, 5];

const [first, second, third, fourth, fifth] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3
console.log(fourth); // Output: 4
console.log(fifth); // Output: 5
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this code snippet, array destructuring is used to assign the values of the numbers array to individual variables first, second, third, fourth, and fifth. Now, you have direct access to each value without explicitly referring to the array and its indexes.
            </p>

            <h2> Skipping Array Elements </h2>
            <p>
                You can also skip unwanted elements during array destructuring by leaving empty spaces or using commas. This is particularly handy when you only need to extract specific values from an array.
            </p>
            <CodeBlock
            code={`
const colors = ['red', 'green', 'blue', 'yellow'];

const [, , thirdColor] = colors;

console.log(thirdColor); // Output: blue
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, only the third element of the colors array is assigned to the thirdColor variable. The preceding commas signify the skipped elements. This flexibility allows you to easily extract the desired values without the need for extra code.
            </p>

            <h2> Swapping Variables </h2>
            <p>
                Array destructuring is also beneficial when you need to swap values between variables without using temporary placeholders or additional lines of code.
            </p>

            <CodeBlock
            code={`
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // Output: 2
console.log(b); // Output: 1
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this code snippet, the values of a and b are swapped using array destructuring. By assigning the array [b, a] to the variables [a, b], JavaScript automatically exchanges the values, eliminating the need for temporary variables or additional logic.
            </p>

            <h2> Rest Element </h2>
            <p>
                Array destructuring also provides a handy feature called the rest element. It allows you to capture the remaining elements of an array into a separate array.
            </p>
            <CodeBlock
            code={`
const numbers = [1, 2, 3, 4, 5];

const [first, ...rest] = numbers;

console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the first variable captures the first element of the numbers array, while the rest variable collects the remaining elements into a new array. This is particularly useful when you want to operate on or pass around the remaining elements as a group.
            </p>

            <h2> Default Values </h2>
            <p>
                Array destructuring allows you to assign default values to variables in case the corresponding array element is undefined.
            </p>
            <CodeBlock
            code={`
const fruits = ['apple', 'banana'];

const [firstFruit, secondFruit, thirdFruit = 'pear'] = fruits;

console.log(firstFruit); // Output: apple
console.log(secondFruit); // Output: banana
console.log(thirdFruit); // Output: pear
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the fruits array has only two elements. By using destructuring assignment, we assign a default value of 'pear' to the thirdFruit variable. This ensures that even if the array doesn't have a third element, the variable still has a valid value.
            </p>

            <h1> Conclusion </h1>
            <p>
                Array destructuring is a powerful feature in JavaScript that simplifies the process of extracting values from an array and assigning them to individual variables. It offers concise syntax, flexibility, and a range of use cases. Whether you need to extract specific values, swap variables, or work with the remaining elements of an array, array destructuring provides an elegant solution.
            </p>
        </div>
    )
}
