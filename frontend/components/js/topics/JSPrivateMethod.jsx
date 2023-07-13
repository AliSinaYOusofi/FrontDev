import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSPrivateMethod() {

    return (
        <div>
            <h1> Private Methods in JavaScript</h1>
            <p>
                In most programming languages, the concept of private methods is widely used to encapsulate functionality and provide better control over access to certain code segments. However, until recently, JavaScript did not have built-in support for private methods. Thankfully, with the introduction of JavaScript classes and the ES2020 (ECMAScript 2020) specification, developers now have a way to create private methods within JavaScript classes.
            </p>

            <h2> What are private methods? </h2>
            <p>
                Private methods are functions within a class that can only be accessed from within that class. They are invisible to external code and provide encapsulation, limiting access to only the relevant parts of a class. Private methods are useful when you want to hide implementation details or protect sensitive information within your code.
            </p>

            <h2> Declaring private methods </h2>
            <p>
                To create private methods in JavaScript, we can use the new # syntax supported by the ES2020 specification. The # symbol is used to define a private method or variable within a class. Let's take a look at an example:
            </p>
            <CodeBlock
            code={`
class MyClass {
    #privateMethod() {
        // Implementation details
    }
    
    publicMethod() {
        // Accessible from outside
    }
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the code snippet above, #privateMethod() is a private method because it is prefixed with #. This method can only be accessed from within the MyClass. On the other hand, publicMethod() is a regular method without any access modifiers, which means it can be accessed from anywhere.
            </p>

            <h1> Some practical examples </h1>

            <p> Let's see some practical usage of private methods: </p>

            <h2> Example 1: Class for handling user authentication </h2>
            <CodeBlock
            code={`
class Authenticator {
    #username;
    #password;
    
    constructor(username, password) {
        this.#username = username;
        this.#password = password;
    }
    
    #hashPassword() {
        // Perform password hashing logic here
        // ...
    }
    
    login() {
        this.#hashPassword();
        // Additional login logic using private method
        // ...
    }
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the above example, the Authenticator class has private properties #username and #password to store the user's credentials securely. The #hashPassword() method is a private method responsible for hashing the password before performing the login process. By encapsulating the password hashing functionality, we ensure that it cannot be accessed or modified externally.
            </p>

            <h2> Example 2: Bank account class with private transactions </h2>
            <CodeBlock
            code={`
class BankAccount {
    #balance;
    #transactions;
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
        this.#transactions = [];
    }
    
    deposit(amount) {
        // Logic for depositing funds to the account
        // ...
    }
    
    withdraw(amount) {
        // Logic for withdrawing funds from the account
        // ...
    }
    
    #logTransaction(transaction) {
        this.#transactions.push(transaction);
        // Additional logging and analysis logic
        // ...
    }
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the BankAccount class has private properties #balance and #transactions to store the account balance and transaction history, respectively. The #logTransaction() method is a private method responsible for logging and analyzing transactions. By making it private, we limit access to this method strictly to the class, ensuring the integrity and privacy of the account's transaction history.
            </p>

            <h2> Example 3: Data validator class </h2>
            <CodeBlock
            code={`
class DataValidator {
    #requiredFields;
    
    constructor(requiredFields) {
        this.#requiredFields = requiredFields;
    }
    
    validate(data) {
        this.#checkRequiredFields(data);
        // Additional validation logic
        // ...
    }
    
    #checkRequiredFields(data) {
        this.#requiredFields.forEach(field => {
        if (!data[field]) {
            throw new Error(\`Field "\${field}" is required.\`);
        }
        });
    }
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the DataValidator class takes an array of required fields in its constructor. The validate() method is responsible for validating the given data based on the required fields. The #checkRequiredFields() private method handles the check for each required field in the data object. By keeping this method private, we ensure that it is only called within the class, enhancing data validation and preventing external misuse.
            </p>

            <h2> Benefits of using private methods </h2>
            <ul className="ml-10 list-decimal">
                <li> Encapsulation: Private methods allow you to encapsulate implementation details within a class. By hiding complex logic or sensitive information, you improve code maintainability and reduce the risk of external interference or misuse. </li>
                <li>Information hiding: Private methods enable you to hide methods that are meant to be used internally by the class. Exposing only the public interface improves your code's security and protects it from unauthorized modifications.</li>
                <li> Code readability: Enclosing private methods within a class keeps the class interface clean and easy to understand. Developers interacting with your class will focus only on the public methods and won't get distracted by irrelevant private methods. </li>
            </ul>

            <h2> Drawbacks and considerations </h2>
            <p>
                While private methods in JavaScript provide several benefits, there are a few points you should consider:
            </p>

            <ul className="ml-10 list-decimal">
                <li> Support and compatibility: Private methods using the # syntax are only supported in modern JavaScript environments that implement the ES2020 specification. If you need to support older browsers or environments without ES2020 support, you may need to use transpilers or alternative approaches to achieve privacy. </li>
                <li> Performance implications: Private methods can affect performance due to the way JavaScript creates new instances of each private method for every object instance. However, this impact is generally negligible unless you are working with enormous amounts of instances.</li>
                <li> Testing private methods: Since private methods are not directly accessible from outside the class, testing them can be challenging. Some argue that private methods should be thoroughly tested indirectly through public methods that rely on them.</li>
            </ul>

            <h2> Alternatives to private methods </h2>
            <p>
                Before the introduction of private methods in JavaScript, developers used various conventions to indicate that a method should be considered private. These include prefixing the method names with an underscore (e.g., _privateMethod) or using naming conventions like camelCase.
            </p>

            <p>
                While these conventions can help indicate that the method is intended for internal use, they don't provide strict encapsulation. They rely on developers to follow naming conventions and can be easily overridden or accessed from outside the class.
            </p>


            <h1> Conclusion </h1>
            <p>
            Private methods in JavaScript classes bring the long-awaited encapsulation and information hiding benefits to the language, allowing for cleaner and more secure code. By using the # syntax, we can create truly private methods that are only accessible within the class. However, it's important to consider the limitations and alternatives when developing and testing code that relies on private methods.
            </p>
        </div>
    )
}
