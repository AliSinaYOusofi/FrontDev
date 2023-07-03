import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSObjectDestructring() {

    return (
        <div>
            <h1> JavaScript Object Destructuring </h1>
            <p>
                As JavaScript continues to evolve, new features and enhancements provide programmers with powerful tools to simplify their code. One such feature is object destructuring, which allows for efficient extraction of values from objects. In this comprehensive part, we will explore JavaScript object destructuring, its syntax, use cases, and benefits.
            </p>

            <h2> Understanding Object Destructuring</h2>
            <p>
                Object destructuring is a syntax in JavaScript that enables us to extract specific values from an object and assign them to variables. Instead of manually accessing each property using dot notation or brackets, object destructuring provides a concise and elegant way to unpack the values we need.
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

const { name, age } = person;

console.log(name); // Output: John
console.log(age); // Output: 30
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                In this case, the object person contains several properties. By using object destructuring, we extract the values of name and age into separate variables of the same names.
            </p>

            <h2> Destructuring with Aliases </h2>
            <p>
                Object destructuring also allows us to assign extracted values to variables with different names using aliases.
            </p>
            <CodeBlock
            code={`
const { name: personName, age: personAge } = person;

console.log(personName); // Output: John
console.log(personAge); // Output: 30
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                Here, we extract the name and age values from the person object and assign them to new variables personName and personAge, respectively.
            </p>

            <h2> Destructuring with Default Values </h2>
            <p>
                We can provide default values for variables in case the corresponding property does not exist in the object.
            </p>
            <CodeBlock
            code={`
const { name, age, profession = 'Unknown' } = person;

console.log(profession); // Output: Unknown
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, if the profession property is not present in the person object, the variable profession will default to 'Unknown'.
            </p>

            <h2> Destructuring Nested Objects </h2>
            <p>
                Object destructuring can also handle nested objects, allowing us to access properties at any level.
            </p>
            <CodeBlock
            code={`
const user = {
    name: 'Jane',
    age: 25,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const { name, address: { city, country } } = user;

console.log(name); // Output: Jane
console.log(city); // Output: New York
console.log(country); // Output: USA
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                Here, we extract the name value from the user object, as well as city and country from the nested address object.
            </p>

            <h2> Extracting Remaining Properties </h2>
            <p>
                In some cases, we may want to extract specific properties and store the remaining properties in a separate object. The rest operator (...) can be used to achieve this.
            </p>
            <CodeBlock
            code={`
const car = {
    brand: 'Tesla',
    model: 'Model S',
    color: 'red',
    year: 2022
};

const { brand, ...details } = car;

console.log(brand); // Output: Tesla
console.log(details); // Output: { model: 'Model S', color: 'red', year: 2022 }
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the brand property is extracted, while the rest of the properties are stored in the details object using the rest operator.
            </p>

            <h2> Benefit of Object Destructuring </h2>
            <p>
                Object destructuring provides various benefits when working with complex objects:
            </p>
            <ul className="ml-10 list-disc">
                <li> Improved Readability: Destructuring allows for a more concise and readable code syntax, as variables are assigned values directly from the object.</li>
                <li>Selection of Specific Properties: Destructuring enables us to extract only the properties we need, making our code leaner and more focused.</li>
                <li>Easier Property Renaming: Destructuring with aliases allows us to assign extracted properties to variables with different names, providing better naming flexibility without modifying the original object.</li>
                <li>Default Values Handling: With object destructuring, we can specify default values for variables, ensuring our code handles missing or undefined properties gracefully.</li>
                <li>Nested Object Access: Destructuring supports accessing properties within nested objects, allowing for easy extraction of deeply nested values.</li>
            </ul>

            <h1>Conclusion </h1>
            <p>
                Object destructuring is a powerful feature in JavaScript that simplifies the extraction of values from objects, resulting in cleaner, more concise code. By leveraging object destructuring, developers can improve code readability, select specific properties efficiently, handle default values gracefully, and easily access nested properties.
            </p>
        </div>
    )
}
