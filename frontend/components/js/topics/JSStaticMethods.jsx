import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSStaticMethods() {

    return (
        <div>
            <h1> Javascript static methods </h1>
            <p>
            In JavaScript, static methods provide a way to define functions at the class level rather than at the instance level. Unlike regular methods, static methods are associated with the class itself, not with individual instances.
            </p>

            <h2> Understanding Static Methods </h2>
            <p>
                Static methods are defined on the class itself, rather than on the class's prototype. These methods are useful when you want to define functionality that is not dependent on the instance state and can be shared among all instances of a class. Static methods are accessed directly from the class itself, without the need to create an instance.
            </p>

            <p> Let's explore some examples to understand the concept of static methods better: </p>

            <h2> Example 1: Using a Static Method </h2>
            <CodeBlock
            code={`
class MathUtils {
    static multiply(a, b) {
        return a * b;
    }
    }
    
console.log(MathUtils.multiply(5, 3));   // Output: 15
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the above example, we define a MathUtils class with a static method multiply(). The multiply() method takes two parameters, a and b, and returns their product. Since the method is static, we can access it directly from the class without creating an instance.
            </p>


            <h2> Example 2: Utility Functions </h2>
            <CodeBlock
            code={`
class StringUtils {
    static isEmpty(str) {
        return !str || str.trim() === '';
    }
    }
    
console.log(StringUtils.isEmpty(""));    // Output: true
console.log(StringUtils.isEmpty("Hello"));    // Output: false
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                Here, we have a StringUtils class with a static method isEmpty(). The isEmpty() method checks if a string is empty by removing any leading or trailing spaces and returning a boolean value. This utility function can be used across your application without the need to create an instance of StringUtils.
            </p>

            <h2> Example 3: Factory Methods </h2>
            <CodeBlock
            code={`
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    
    static createCar(brand) {
        return new Car(brand);
    }
    }
    
const myCar = Car.createCar("Tesla");
console.log(myCar.brand);   // Output: Tesla
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, we have a Car class that has a static method createCar(). The createCar() method acts as a factory method by allowing us to create instances of the Car class without directly invoking the constructor. This can provide a convenient way to create objects with consistent initialization.
            </p>

            <h1> Conclusion </h1>
            <p>
            Static methods in JavaScript allow you to define class-level functionality that is shared among all instances. They are accessed directly from the class itself and do not require an instance to be accessed.
            </p>
        </div>
    )
}
