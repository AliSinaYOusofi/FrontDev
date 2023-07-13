import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function StaticMethods() {

    return (
        <div>
            <h1> Static Methods in JavaScript </h1>
            <p>
                In JavaScript, static methods provide a powerful way to attach functions directly to a class rather than its instances. These methods belong to the class itself and can be called without creating an instance of the class. Static methods offer several benefits, including utility, convenience, and improved code organization.
            </p>

            <h2> What are static methods? </h2>
            <p>
                Static methods are functions that are defined on a class itself rather than its instances. Unlike regular methods, static methods are not bound to an instance of the class and are called directly on the class itself. They typically perform utility operations, calculations, or serve as helper functions.
            </p>

            <h2> Declaring static methods </h2>
            <p>
                To declare a static method in JavaScript, we use the static keyword before the method definition within a class. Let's see an example below:
            </p>
            <CodeBlock
            code={`
class MathUtil {
    static square(number) {
        return number * number;
    }
    
    static sum(...numbers) {
        return numbers.reduce((acc, val) => acc + val, 0);
    }
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the example above, square() and sum() are static methods defined within the MathUtil class. These methods can be directly called on the class itself: MathUtil.square(5) or MathUtil.sum(2, 3, 4).
            </p>

            <h2> Benefits of using static methods </h2>
            <ul className="ml-10 list-decimal">
                <li> Utility functions: Static methods are commonly used to define utility functions that are not associated with specific instances of a class. They provide a convenient way to group related functionalities together without the need for instantiating the class. </li>
                <li> **Convenience and readabilit`: Static methods can enhance code readability and simplify API usages in scenarios where calling instance methods would be cumbersome. Instead of creating an instance, developers can directly call a static method on the class, reducing code verbosity.</li>
                <li>Code organization: Static methods help organize related functions within a class, improving the maintainability and structure of your codebase. They can be used to group common functionalities, provide factory methods, or implement design patterns.</li>
            </ul>

            <h2> Usage examples </h2>
            <p>
                Let's explore a few practical examples to understand the use cases of static methods:
            </p>

            <h2> Example 1: DateUtils class </h2>
            <CodeBlock
            code={`
class DateUtils {
    static getCurrentDate() {
        return new Date();
    }
    
    static isLeapYear(year) {
        // Leap year calculation logic
        // ...
    }
}
            `}
            language="Javascript"
            onlyCode={true}
            />

            <p>
                In the DateUtils class, the getCurrentDate() static method returns the current date instead of creating an instance of the Date class. The isLeapYear() static method determines whether a given year is a leap year or not. These static methods provide convenient ways to access common date-related functionalities.
            </p>

            <h2> Example 2: ArrayUtils class </h2>
            <CodeBlock
            code={`
class ArrayUtils {
    static countItems(array) {
        return array.length;
    }
    
    static shuffle(array) {
        // Shuffling algorithm
        // ...
    }
}
            `}
            language="Javascript"
            onlyCode={true}
            />

            <p>
                The ArrayUtils class above defines static methods for common array operations. The countItems() method returns the number of items in an array, while shuffle() shuffles the items randomly. By using static methods, developers can utilize these array-related utilities without the need to create an instance of the ArrayUtils class.
            </p>

            <h2> Limitations and considerations </h2>
            <p>
                Although static methods have their advantages, it's important to consider some limitations:
            </p>

            <ul className="ml-10 list-decimal">
                <li> Accessing instance-specific data: Static methods cannot access instance-specific data, such as instance properties or methods. They are primarily used for operations that are shared across all instances of the class or don't require instance-specific information. </li>
                <li> Inability to override in subclasses: Subclasses cannot override static methods of their parent class. When a static method is inherited by a subclass, it remains the same, and the subclass can only call or hide it, but not modify its behavior.</li>
                <li> Avoiding excessive use: While static methods can be helpful, excessive use of them may lead to code that is less flexible and harder to test. Consider using them judiciously and prefer instance methods when interdependence on instance-specific data is required. </li>
            </ul>

            <h1> Conclusion </h1>
            <p>
            Static methods in JavaScript provide a way to attach utility functions directly to a class, without the need for class instances. They improve code organization, offer convenience when accessing shared functionality, and enhance code readability. 
            </p>
        </div>
    )
}
