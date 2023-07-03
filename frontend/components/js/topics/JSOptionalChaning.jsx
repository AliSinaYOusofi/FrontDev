import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSOptionalChaning() {
  return (
    <div>
        <h1> Javascript Optional Chaining </h1>
        <p>
            As JavaScript continues to evolve, new features are introduced to enhance developer productivity and make code more concise and readable. One such feature is optional chaining, which provides a streamlined way to access nested properties and handle potential null or undefined values. In this part, we'll explore the concept of optional chaining, its syntax, and how it improves JavaScript code.
        </p>

        <h2> Understanding Optional Chaining </h2>
        <p>
            Optional chaining is a language feature that allows us to safely access properties or call methods on an object, even if one or more intermediary properties are null or undefined. It prevents errors that would occur when trying to access properties on nested objects that may not exist.
        </p>

        <p> Consider the following example: </p>
        <CodeBlock
        code={`
const user = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const country = user.address.country;
console.log(country); // Output: USA
        `}
        language={'javascript'}
        onlyCode={true}
        />
        <p>
            This code snippet assumes that the user object and its nested address object always exist. However, what if the address property is missing? The code would throw an error and disrupt the application flow.
        </p>

        <h2> Optional Chaining in Action </h2>
        <p>
            With optional chaining, we can safely access properties and methods, gracefully handling null and undefined values. The optional chaining operator (?.) is used to perform this check.
        </p>
        <CodeBlock
        code={`
const country = user.address?.country;
console.log(country); // Output: USA
        `}
        language={'javascript'}
        onlyCode={true}
        />

        <p>
            In this updated code, the ?. operator is placed before the property we want to access. If any intermediate property in the chain is null or undefined, the result will be undefined instead of throwing an error.
        </p>

        <h2> Optional Chaining with Methods </h2>
        <p>
            Optional chaining is not limited to accessing properties. It can also be used to call methods on potentially non-existent objects.
        </p>
        <CodeBlock
        code={`
const currentUser = {
    username: 'johnsmith',
    getFullName: function() {
        return 'John Smith';
    }
};

const fullName = currentUser.getFullName?.();
console.log(fullName); // Output: John Smith
        `}
        language={'javascript'}
        onlyCode={true}
        />

        <p>
            In this example, the getFullName method is conditionally called using optional chaining. If the currentUser object does not have a getFullName method, the result will be undefined instead of causing an error.
        </p>

        <h2> Combining Optional Chaining with Other Operators</h2>
        <p>
            Optional chaining can be used in conjunction with other JavaScript operators to handle more complex scenarios. For instance, we can combine it with the nullish coalescing operator (??) to provide fallback values in case of null or undefined values.
        </p>
        <CodeBlock
        code={`
const user = {
    name: 'John',
    address: {
        city: null,
        country: undefined
    }
};

const city = user.address?.city ?? 'Unknown';
console.log(city); // Output: Unknown
        `}
        language={'javascript'}
        onlyCode={true}
        />
        <p> In this case, if the city property is null or undefined, the value will default to 'Unknown'. </p>

        <h2> Benefit of Optional Chaining </h2>
        <p>
            Using optional chaining offers several advantages:  
        </p>

        <ul className="ml-10 list-disc">
            <li> Error Avoidance: Optional chaining prevents unexpected errors from occurring when accessing properties on nested objects that may be null or undefined.</li>
            <li>Code Readability: By using optional chaining, code becomes more concise and readable as developers can express their intent without adding complex error-checking logic.</li>
            <li> Simplifying Conditionals: Optional chaining allows for cleaner code by reducing the need for nested conditionals or verbose null checks. </li>
        </ul>

        <h1> Conclusion </h1>
        <p>
            Optional chaining is a powerful feature in JavaScript that provides a clean and concise syntax for accessing nested object properties and calling methods safely. By incorporating optional chaining into your code, you can avoid errors, simplify your logic, and improve code readability.
        </p>
    </div>
  )
}
