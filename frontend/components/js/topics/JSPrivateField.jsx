import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSPrivateField() {

    return (
        <div>
            <h1>JS Private Field</h1>
            <p>
                In JavaScript, encapsulation is crucial for building robust and maintainable code. One way to achieve encapsulation is by defining private fields within a class. Private fields allow you to encapsulate data and offer control over its usage, preventing unintended access and modifications from outside the class. 
            </p>

            <h2> Defining Private Fields </h2>
            <p>
                Prior to ES2020 (also known as ES11), JavaScript had limited support for defining private fields. Developers often resorted to conventions like using a leading underscore, such as _privateField, to indicate that a field should be considered private. However, these conventions were merely conventions and didn't enforce true privacy.
            </p>

            <p>
                Now, with the introduction of the # syntax, JavaScript provides built-in support for private fields. By prefixing a field name with #, we explicitly mark it as private. Private fields are restricted to the class they are defined in, ensuring that they cannot be accessed or modified from outside.
            </p>

            <p>
                Let's dive into some practical examples to better understand the usage of private fields in JavaScript.
            </p>

            <h2> Example 1: Private Field for Counting </h2>
            <CodeBlock
            code={`
class Counter {
    #count = 0;
    
    increment() {
        this.#count++;
    }
    
    getCount() {
        return this.#count;
    }
    }
    
const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2
console.log(counter.#count);     // Error: Private field '#count' must be accessed from inside class 'Counter'
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, we define a private field #count within the Counter class. It keeps track of the number of times the increment() method is called. The private field ensures that the count can only be accessed through the getCount() method.
            </p>



            <p>
                By encapsulating the count, we can control its accessibility and protect it from unintended modifications. This pattern is especially useful in scenarios where you need to track the state of an object privately.
            </p>


            <h2> Example 2: Private Field for Generating Unique IDs </h2>
            <CodeBlock
            code={`
class UniqueIDGenerator {
    #id = 0;
    
    generateID() {
        const uniqueID = \`ID_\${this.#id}\`;
        this.#id++;
        return uniqueID;
    }
}

const generator = new UniqueIDGenerator();
console.log(generator.generateID()); // Output: 'ID_0'
console.log(generator.generateID()); // Output: 'ID_1'
console.log(generator.#id);          // Error: Private field '#id' must be accessed from inside class 'UniqueIDGenerator'
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, we define a private field #id within the UniqueIDGenerator class. It keeps track of the last generated ID and increments it for each subsequent call to generateID(). The private field guarantees that the ID remains hidden and can only be accessed through the generateID() method.
            </p>

            <p>
            By encapsulating the ID generation logic and making the #id field private, we ensure that IDs are generated securely without any external interference.
            </p>


            <h2> Example 3: Private Field for Data Encapsulation </h2>
            <CodeBlock
            code={`
class Person {
    #name;
    
    constructor(name) {
        this.#name = name;
    }
    
    getName() {
        return this.#name;
    }
    }
    
const john = new Person("John Doe");
console.log(john.getName()); // Output: John Doe
console.log(john.#name);     // Error: Private field '#name' must be accessed from inside class 'Person'
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, we define a private field #name within the Person class. It can only be accessed through the getName() method, which returns its value. Trying to access #name directly from outside the class results in an error.
            </p>

            <p>
                By encapsulating the #name field, we ensure that it cannot be accidentally modified or accessed without intended methods. This approach helps maintain the integrity of the class and reduces the likelihood of introducing bugs.
            </p>

            <h2> Example 4: Private Field for Caching </h2>
            <CodeBlock
            code={`
class Calculator {
    #result = null;
    
    calculate(number1, number2, operator) {
        if (this.#result === null) {
        this.#result = performCalculation(number1, number2, operator);
        }
        return this.#result;
    }
    }
    
const calculator = new Calculator();
console.log(calculator.calculate(5, 3, '+')); // Output: 8
console.log(calculator.#result);              // Error: Private field '#result' must be accessed from inside class 'Calculator'
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, we define a private field #result within the Calculator class. It holds the result of any calculation performed using the calculate() method. The private field ensures that the result remains hidden and can only be accessed through the calculate() method.
            </p>

            <p>
                By caching the result in a private field, subsequent calls to calculate() can avoid redundant computations. This optimization can greatly improve performance, especially for complex calculations.
            </p>

            <h2> Pattern matching </h2>

            <CodeBlock
            code={`
class PatternMatcher {
    #pattern;
    
    constructor(pattern) {
        this.#pattern = pattern;
    }
    
    matches(string) {
        return this.#pattern.test(string);
    }
    }
    
const matcher = new PatternMatcher(/\d+/);
console.log(matcher.matches("123"));    // Output: true
console.log(matcher.matches("abc123")); // Output: false
console.log(matcher.#pattern);          // Error: Private field '#pattern' must be accessed from inside class 'PatternMatcher'
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, we define a private field #pattern within the PatternMatcher class. It holds a regular expression pattern used for matching strings. The restricted access ensures that the pattern cannot be modified from outside the class.
            </p>

            <p>
                By encapsulating the pattern and providing a method matches(), we enable users of this class to easily determine if a given string matches the defined pattern. This can be incredibly useful in scenarios where validation or parsing of specific patterns is required.
            </p>

            <h1> Conclusion</h1>
            <p>
                Defining private fields in JavaScript classes allows for encapsulation, helping to build more secure and maintainable code. With the # syntax introduced in ES2020, JavaScript developers now have a native mechanism for marking fields as private, ensuring their exclusive access from within the class. By leveraging private fields, we can encapsulate data, cache results, and facilitate pattern matching, among many other use cases.
            </p>
        </div>
    )
}
