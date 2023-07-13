import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSStaticProps() {
    return (
        <div>
            <h1> Static Properties in JavaScript </h1>
            <p>
                In JavaScript, static properties allow developers to declare properties on a class itself rather than on its instances. These properties are shared among all instances of the class and provide a way to store data or values that are common to the entire class.
            </p>

            <h2> What are static properties? </h2>
            <p>
                Static properties are variables or values that are associated with a class itself rather than with instances of the class. They belong to the class itself and can be accessed without creating an instance of the class. Static properties are defined at the class level and are shared among all instances of that class.
            </p>

            <h2> Declaring static properties </h2>
            <p>
                To declare a static property in JavaScript, we use the static keyword followed by the property name within a class. Let's see an example below:
            </p>

            <CodeBlock
            code={`
class Circle {
    static PI = 3.14159;
    
    constructor(radius) {
        this.radius = radius;
    }
    
    get circumference() {
        return 2 * Circle.PI * this.radius;
    }
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the above example, PI is a static property defined on the Circle class. The variable PI holds the value of pi (π), and it's shared across all instances of the Circle class. It can be accessed using Circle.PI, regardless of whether instances of the class have been created or not.
            </p>

            <h2> Benefits of using static properties </h2>

            <ul className="ml-10 list-decimal">
                <li> Shared data across instances: Static properties are a way to share data or values across all instances of a class. Instead of duplicating the same data for each instance, they provide a centralized and efficient way to store common values.</li>
                <li>Efficient memory management: By using static properties, memory usage can be optimized, especially when dealing with large amounts of data or frequently reused values. Only one instance of the static property exists, regardless of the number of instances of the class.</li>
                <li> Simplifying class-wide configuration: Static properties can be used to store configuration settings or default values that are relevant to the entire class. This makes it easy to access and modify these settings without having to create instances or pass parameters.</li>
            </ul>

            <h2> Usage examples </h2>

            <p>
            Let's explore a few practical examples to understand the use cases of static properties: 
            </p>

            <h2> Example 1: Math operations class </h2>
            <CodeBlock
            code={`
class MathOperations {
    static DEFAULT_PI = 3.14159;
    
    static sum(...numbers) {
        return numbers.reduce((acc, val) => acc + val, 0);
    }
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the MathOperations class, the DEFAULT_PI static property stores the default value of pi (π). This value can be shared and accessed throughout the class, making it easily modifiable if needed. Additionally, the sum() static method calculates the sum of the given numbers.
            </p>

            <h2> Example 2: Configuration class </h2>
            <CodeBlock
            code={`
class Config {
    static API_URL = 'https://api.example.com';
    static TIMEOUT = 5000;
    static DEBUG_MODE = true;
}
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                The Config class contains static properties that store configuration settings for an application. The API_URL, TIMEOUT, and DEBUG_MODE static properties can be accessed throughout the class or any other code that uses the Config class. These settings can be modified easily without relying on instances of the class.
            </p>

            <h2> Example 3: Counter class </h2>
            <CodeBlock
            code={`
class Counter {
    static count = 0;
    
    constructor() {
        Counter.count++;
    }
    
    static resetCount() {
        Counter.count = 0;
    }
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
            In this example, the count static property in the Counter class keeps track of the number of instances created. Every time a new instance is created, the constructor increments the count property. The static method resetCount() allows resetting the count to zero if needed.
            </p>

            <h2> Limitations and considerations </h2>
            <p>
            While static properties can be useful, it's important to consider some limitations:
            </p>
            <ul className="ml-10 list-decimal">
                <li> Inability to access instance-specific data: Static properties cannot access or modify instance-specific data, such as instance properties or methods. They are shared among all instances and should only store data that is common to the entire class. </li>
                <li> Avoiding excessive use: Excessive use of static properties may lead to code that is less flexible and harder to maintain. Consider using them judiciously and prefer instance properties when data is specific to individual instances. </li>
                <li> Class hierarchy limitations: Inheritance hierarchies have their own considerations for static properties. Subclasses can inherit and use static properties from their parent class, but they cannot override them.</li>
            </ul>

            <h1> Conclusion </h1>
            <p>
                Static properties in JavaScript provide a way to share data or values across all instances of a class. They offer efficiency, simplification, and centralization of data that is relevant to the entire class. By using static properties, JavaScript developers can optimize memory usage, simplify configuration, and enhance code organization.
            </p>
        </div>
    )
}
