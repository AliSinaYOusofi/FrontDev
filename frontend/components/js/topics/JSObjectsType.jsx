import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSObjectsType() {

    return (
        <div>
            <h1> Understanding Objects in JavaScript </h1>
            <p>
                In JavaScript, an Object is a data structure that consists of key-value pairs. It is one of the most important concept to understand in JavaScript programming because it is used to store and manage complex data structures.
            </p>

            <h1> Declaring an Object </h1>    
            <p> In JavaScript, there are two ways of declaring an object. </p>

            <h2> 1. Object Literal </h2>
            <p>
                Object literal is the most common way of declaring an object. It is simply a comma separated list of name-value pairs wrapped in curly braces.
            </p>

            <p> Here is an example: </p>
            <CodeBlock
            code={`
let user = {
    name: 'John',
    age: 30,
    isAdmin: true
};
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the above example, user is an object that has three properties (name, age, and isAdmin) and their respective values set.
            </p>

            <h2> 2. Object Constructor </h2>
            <p>
                Another way to declare an object is by using an object constructor. An object constructor is used to create a new instance of an object and allows you to set initial properties for the object.
            </p>

            <p>
                Here’s an example:
            </p>
            <CodeBlock
            code={`
let user = new Object(); // Object constructor
user.name = 'John';
user.age = 30;
user.isAdmin = true;
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the above example, user is an object that is created using the Object constructor and has the same three properties as the previous example.
            </p>

            <h2> Accessing Object Properties </h2>
            <p>
                To access the properties of an object, you can use dot notation or square bracket notation.
            </p>

            <h2> Dot notation </h2>
            <p>
                Here is an example of using dot notation:
            </p>

            <CodeBlock
            code={`
let user = {
    name: 'John',
    age: 30,
    isAdmin: true
};

console.log(user.name); // John
console.log(user.age); // 30
console.log(user.isAdmin); // true
            `}
            language="javascript"
            onlyCode={true}
            />

            <p> In the above example, we use dot notation to access the properties of the user object. </p>
            
            <h2> Square bracket notation </h2>
            <p>
                Here is an example of using square bracket notation:
            </p>
            <CodeBlock
            code={`
let user = {
    name: 'John',
    age: 30,
    isAdmin: true
};

console.log(user['name']); // John
console.log(user['age']); // 30
console.log(user['isAdmin']); // true
            `}
            language="javascript"
            onlyCode={true}
            />

            <p> In the above example, we use square bracket notation to access the properties of the user object. </p>

            <h2> Modifying Object Properties </h2>
            <p>
                You can modify the properties of an object by simply assigning a new value to the property.
            </p>

            <CodeBlock
            code={`
let user = {
    name: 'John',
    age: 30,
    isAdmin: true
};

user.isAdmin = false;

console.log(user); // {name: 'John', age: 30, isAdmin: false}
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                In the above example, we modify the isAdmin property of the user object.
            </p>

            <h2> Adding Object Properties </h2>
            <p>
                You can also add new properties to an object by simply assigning a new value to a property that doesn't exist.
            </p>

            <CodeBlock
            code={`
let user = {
    name: 'John',
    age: 30
};

user.isAdmin = false;

console.log(user); // {name: 'John', age: 30, isAdmin: false}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the above example, we add a new isAdmin property to the user object.
            </p>

            <h2> Deleting Object Properties </h2>
            <p>
                You can delete properties from an object using the delete operator.
            </p>

            <CodeBlock
            code={`
let user = {
name: 'John',
age: 30,
isAdmin: true
};

delete user.age;

console.log(user); // {name: 'John', isAdmin: true}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
            In the above example, we delete the age property from the user object.
            </p>

            <h1> Conclusion </h1>
            <p>
                Objects are a crucial concept in JavaScript. They allow you to store and manage complex data structures easily. Understanding objects is essential for anyone who wants to become proficient in JavaScript programming.
            </p>
        </div>

    )
}
