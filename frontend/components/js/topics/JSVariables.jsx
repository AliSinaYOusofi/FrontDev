import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSVariables() {

    return (
        <div>
            <h1>JS Variables</h1>
            <p>
                In programming, variables are a way to store information that can be later accessed or modified. Variables are essential in JavaScript programming, as they are used to store temporary and permanent data. In this blog post, we will explore JavaScript variables, their declaration, initialization, and how to use them in your code.
            </p>

            <h2> Declaration </h2>
            <p>
                In JavaScript, variables are declared using the let, const, and var keywords. The let keyword allows you to declare a variable that can be re-assigned a new value, while const creates a constant whose value cannot be changed. The var keyword is the old syntax for declaring variables in JavaScript, but let and const are now recommended by developers. Here are some examples of variable declarations:
            </p>
            <CodeBlock
            code={`
let name = "John";
const age = 30;
var country = "USA";
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Initialization </h2>
            <p>
                Initialization is the process of assigning a value to a variable. In JavaScript, variables can be initialized at the same time they are declared. For example:
            </p>
            <CodeBlock
            code={`
let x = 5;  // variable 'x' is initialized to 5
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2>Data Types</h2>
            <p>
                JavaScript has several built-in data types that can be assigned to variables, including strings, numbers, booleans, objects, and arrays. To assign a value to a variable, simply place the value after the equals sign. Here are some examples:
            </p>
            <CodeBlock
            code={`
let name = "John";              // string data type
let age = 30;                   // number data type
let isMarried = true;           // boolean data type
let user = { name: "John", age: 30 };  // object data type
let numbers = [1, 2, 3, 4, 5];  // array data type            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Naming Conventions </h2>
            <p>
                When declaring variables in JavaScript, it's essential to use meaningful and descriptive names that indicate the variable's purpose. Names can contain letters, numbers, underscores, and dollar signs. Variable names are case-sensitive, and it's a good practice to use camelCase when naming variables. For example:
            </p>
            <CodeBlock
            code={`
let firstName = "John";
let numOfChildren = 2;
let isEmployed = true;      `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Undefined vs. undeclared </h2>
            <p>
                In JavaScript, undefined and undeclared variables are different concepts.
            </p>
            <p>
                An undeclared variable is a variable that has not been declared using the var, let, or const keywords. Using an undeclared variable will result in a ReferenceError. For example:
            </p>
            <CodeBlock
            code={`
console.log(a); // ReferenceError: a is not defined      `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                An undefined variable is a variable that has been declared but not assigned a value. When an uninitialized variable is used, it has the value undefined. For example:
            </p>
            <CodeBlock
            code={`
let a;
console.log(a); // undefined   `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                In summary, an undeclared variable is a variable that has not been defined, while an undefined variable has been defined but has not been given a value.
            </p>

            <h2> Constants</h2>
            <p>
                Constants in JavaScript are variables whose value cannot be re-assigned once they have been declared. They are also sometimes referred to as "immutable variables" or "unchangeable variables." In JavaScript, constants are declared using the const keyword.
            </p>

            <p>Here is an example of how to declare a constant in JavaScript:</p>
            <CodeBlock
            code={`
let a;
const PI = 3.14159;   `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                Once a constant has been defined, it cannot be re-assigned. For example, the following code will produce an error:
            </p>
            <CodeBlock
            code={`
const PI = 3.14159;
PI = 3.14; // TypeError: Assignment to constant variable.
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                Constants are useful in situations where you have a value that should not change throughout the life of the program. This can help ensure that your code is more reliable and easier to reason about. Additionally, constants can signal to other developers that a value should not be modified, which can help prevent inadvertent bugs due to accidentally changing a value that should not change.
            </p>
        </div>
    )
}
