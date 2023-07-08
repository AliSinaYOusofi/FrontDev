import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSComputedObjectProp() {

    return (
        <div>
            <h1> Computed Object Property </h1>
            <p>
                In JavaScript, objects are a fundamental data structure that allow us to define and organize data in a structured manner. Often, we need to access or modify object properties in a specific way. This is where computed object properties and getter/setter methods come into play. In this part, we'll delve into these concepts and explore their applications.
            </p>

            <h2> Computed Object Property </h2>
            <p>
                Computed object properties provide a flexible way to define object properties dynamically, using an expression. Unlike traditional property assignment, which requires a fixed property name, computed properties allow us to use an expression inside square brackets to evaluate the property name at runtime. Here's how it works:
            </p>

            <CodeBlock
            code={`
const dynamicProperty = 'age';
const person = {
    name: 'John',
    [dynamicProperty]: 25
};

console.log(person.age); // Output: 25
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the example above, we define an object called person and assign the property name with the value 'John'. Additionally, we use a computed property [dynamicProperty], where dynamicProperty is a variable. This results in the property name being evaluated as 'age' at runtime, effectively assigning 25 to person.age. Computed object properties are especially useful when we need to generate property names dynamically or when working with complex data structures.
            </p>

            <h2> Using computed object property in methods </h2>
            <p>
                To use computed object property in getter and setter methods, you can incorporate the computed property syntax within the getter and setter definitions. Here is an example to illustrate how this can be achieved:
            </p>

            <CodeBlock
            code={`
const propertyName = 'value';

const obj = {
    // Computed property used in the getter and setter
    get [propertyName]() {
        // Getter logic here
        return this._data;
    },
    set [propertyName](newValue) {
        // Setter logic here
        this._data = newValue;
    },
    // Other properties of the object
    _data: 0,
};

// Accessing the computed property
console.log(obj.value); // Output: 0

// Setting a new value for the computed property
obj.value = 10;

// Accessing the updated value
console.log(obj.value); // Output: 10
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the example above, propertyName is a variable containing the name of the computed property. Using the square bracket notation [propertyName], we define the getter and setter methods for that computed property.
            </p>

            <p>
                Within the getter, you can add custom logic to return the desired value based on the internal data or any other calculations. In the setter, you can handle any necessary processing or validations before storing the new value in the desired location.
            </p>

            <h1> Conclusoin </h1>
            <p>
                By leveraging computed object properties in setter methods, we can achieve sophisticated functionality tailored to our specific needs. We have the flexibility to generate dynamic property names and apply custom logic during property assignment, enhancing the versatility and robustness of our JavaScript code.
            </p>
        </div>
    )
}
