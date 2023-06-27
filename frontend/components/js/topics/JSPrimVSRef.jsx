import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSPrimVSRef() {

    return (
        <div>
            <h1> Differences Between Primitive and Reference Types </h1>
            <p>
                The main difference between primitive and reference types is how they are stored and copied.
            </p>

            <h2> Storage </h2>
            <p>
                Primitive types are stored in memory as a simple value, whereas reference types are stored as a reference to a location in memory where the data is stored. This means that when you create a variable that references a reference value, the variable does not actually store the data, but instead stores a pointer (reference) to the data.     
            </p>

            <p>
                For example, when we create an array, JavaScript decides on an empty block of memory that's large enough to hold the array's data and stores that data in that block of memory. In contrast, for primitive types, the actual value of the data is stored directly in the variable.
            </p>

            <h2> Copying </h2>
            <p>
                When you assign a primitive value to a variable, the value is copied directly into the variable. However, when you assign a reference value to a variable, a copy of the reference to the original data is created, and this reference points to the same area of memory.
            </p>

            <p>
                Here is an example demonstrating copying a primitive value:
            </p>
            <CodeBlock
            code={`
let num1 = 10;
let num2 = num1; // num2 now has the same value as num1
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                Here is an example demonstrating copying a reference value:
            </p>
            <CodeBlock
            code={`
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 now references the same location in memory as arr1
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                If one variable modifies the value, the other variable referencing that value will see that modification:
            </p>
            <CodeBlock
            code={`
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]
            `}
            language="javascript"
            onlyCode={true}
            />

            <h1> Conclusion </h1>
            <p>
                In conclusion, JavaScript has two types of value types: primitive and reference. Primitive values store simple values, whereas reference values store a reference to the location of the data in memory. Primitive values are immutable, whereas reference values are mutable. When assigning a primitive type to a variable, the value is copied directly into the variable. When assigning a reference type to a variable, a copy of the reference is created, and both variables point to the same memory location. Understanding the differences between primitive and reference values is important when programming in JavaScript.
            </p>
        </div>
    )
}
