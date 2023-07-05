import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSThisKeyword() {
    return (
        <div>
            <h1> "this" Value in JavaScript </h1>
            <p>
                When working with JavaScript, you may have come across the mysterious "this" keyword. It plays a crucial role in object-oriented programming and can often be confusing to grasp. In this part, we will explore the "this" value and how it works in JavaScript.
            </p>

            <h2> Introduction to the "this" Keyword </h2>
            <p>
                The "this" keyword refers to the context in which a function is executed. It allows functions to access and operate on the properties and methods of their encapsulating object. The value of "this" is dynamically determined during runtime and can change depending on how a function is called or how its execution context is set.
            </p>

            <h2> Determining the "this" Value </h2>
            <p>
                The value of "this" is determined by the way a function is invoked. Let's take a look at the different scenarios in which "this" can be bound.
            </p>

            <h2> 1. Global Scope </h2>
            <p>
                When a function is invoked in the global scope, outside of any objects or functions, "this" refers to the global object, which is usually the window object in web browsers or the global object in Node.js.
            </p>
            <CodeBlock
            code={`
console.log(this);  // Output: [object Window] (in a web browser)
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> 2. Object Method </h2>
            <p>
                When a function is called as a method of an object, "this" refers to the object that owns the method.
            </p>
            <CodeBlock
            code={`
const person = {
    name: "John",
    greet: function() {
        console.log(\`Hello, my name is \${this.name}!\`);
    }
};
    
person.greet();  // Output: Hello, my name is John!            
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this case, the value of "this" within the greet method is the person object because the execution context is set to the object itself.
            </p>

            <h2> 3. Constructor Function </h2>
            <p>
                When a function is used as a constructor (using the new keyword), "this" refers to the newly created object instance.
            </p>
            <CodeBlock
            code={`
function Circle(radius) {
    this.radius = radius;
}
    
const myCircle = new Circle(5);
console.log(myCircle.radius);  // Output: 5            
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                Inside the Circle constructor, the value of "this" refers to the newly created object (myCircle), allowing us to set instance-specific properties.
            </p>
            
            <h2> 4. Event Handlers </h2>
            <p>
                In an event handler function, such as an event listener or a callback function, "this" typically refers to the element that triggered the event.
            </p>
            <CodeBlock
            code={`
<button onclick="console.log(this)">Click me</button>       
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                The "this" value within the onclick event handler refers to the button element itself.
            </p>

            <h2> 5. Explicit Context Binding </h2>
            <p>
                JavaScript provides methods like call(), apply(), and bind() to explicitly set the "this" value for a function call.
            </p>

            <CodeBlock
            code={`
function sayHello() {
    console.log(\`Hello, \${this.name}!\`);
}

const person = { name: "Alice" };
sayHello.call(person);  // Output: Hello, Alice!       
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the above example, the call() method is used to explicitly set the "this" value to the person object, allowing the sayHello function to access its "name" property.
            </p>

            <h1> Conclusion </h1>
            <p>
                Understanding the "this" value is crucial for writing effective JavaScript code. By grasping the different scenarios in which "this" is bound, you can leverage its power to perform operations within the appropriate context. Remember, "this" is dynamic and depends on how a function is called, so it's important to pay attention to function invocation when working with JavaScript.
            </p>
        </div>
    )
}
