import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSIntroductionToObjects() {

    return (
        <div>
            <h1> JavaScript Object Methods </h1>
            <p>
                JavaScript provides us with a plethora of built-in methods that make working with objects a breeze. In this part, we will explore four powerful object methods: Object.entries(), Object.values(), Object.is(), and Object.assign(). These methods provide convenient ways to manipulate and extract data from objects, allowing for more efficient and streamlined coding practices.
            </p>

            <h2> Object.entries() </h2>
            <p>
                The Object.entries() method returns an array of key-value pairs from an object. It allows us to iterate over an object's properties easily, making it useful for tasks like object manipulation and debugging.
            </p>

            <p>
                Consider the following example:
            </p>
            <CodeBlock
            code={`
const person = {
    name: 'John',
    age: 30,
    profession: 'Software Engineer'
};

const entries = Object.entries(person);
console.log(entries); // output: [ [ 'name', 'John' ], [ 'age', 30 ], [ 'profession', 'Software Engineer' ] ]
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                By using Object.entries(), we retrieve an array where each element is an array consisting of a key-value pair. This method simplifies accessing individual properties and enables various data manipulation operations.
            </p>

            <h2> Object.values() </h2>
            <p>
                Similar to Object.entries(), the Object.values() method returns an array containing the values of an object's properties. This method allows us to obtain an object's values without necessarily needing their corresponding keys.
            </p>

            <h2> Take a look at this example: </h2>
            <CodeBlock
            code={`
const car = {
    brand: 'Tesla',
    model: 'Model S',
    color: 'red'
};

const values = Object.values(car);
console.log(values); // output: [ 'Tesla', 'Model S', 'red' ]
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                By utilizing Object.values(), we can efficiently extract all the values stored within an object, regardless of the property names.
            </p>

            <h2> Object.is() </h2>
            <p>
                The Object.is() method provides a straightforward way to compare two values for strict equality. While the === operator works for most comparisons, Object.is() offers some specific benefits.
            </p>

            <CodeBlock
            code={`
console.log(Object.is(5, 5)); // Output: true
console.log(Object.is(0, -0)); // Output: false
console.log(Object.is(NaN, NaN)); // Output: true
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                The Object.is() method handles cases where the === operator may not give the desired outcome. It considers NaN to be equal to NaN and distinguishes between positive and negative zero.
            </p>

            <h2> Object.assign() </h2>

            <p>
                The Object.assign() method allows us to clone an object or merge multiple objects into a single object. It takes a target object as its first argument, followed by one or more source objects. This method copies the properties from the source objects into the target object, overwriting any existing properties with the same names.
            </p>

            <h2> Consider this example: </h2>
            <CodeBlock
            code={`
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const mergedObject = Object.assign(target, source);
console.log(mergedObject); // output: { a: 1, b: 3, c: 4 }
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                Here, the properties of the source object are copied into the target object. If there are conflicting property names, the values from the source object will overwrite those in the target object.
            </p>

            <p>
                Object.assign() is an efficient way to create a new object from existing objects or update an object with additional properties.
            </p>

            <h2> Conclusion </h2>
            <p>
                JavaScript object methods such as Object.entries(), Object.values(), Object.is(), and Object.assign() empower us to work with objects effectively. They simplify tasks like iterating over properties, extracting values, comparing equality, and merging objects. By leveraging these methods, we can write more concise and maintainable code.
            </p>

            <p>
                Understanding and utilizing these object methods will enhance your JavaScript skills and enable you to tackle complex object manipulation with ease. So, start incorporating them into your projects and unlock their full potential!
            </p>
        </div>
    )
}
