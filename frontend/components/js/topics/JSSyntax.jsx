import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSSyntax() {

    return (
        <div>
            <h1> Understanding the Syntax of JavaScript </h1>
            <p>
                JavaScript is a powerful and flexible programming language that has become an essential part of web development. The language has a unique syntax that developers use to create and control dynamic content and web applications. In this blog post, we will explore the syntax of JavaScript, including whitespace, statements, identifiers, keywords, expressions, and comments.
            </p>

            <h2> JS Whitespace </h2>
            <p>
                Whitespace is any combination of horizontal and vertical space that separates characters in the code. JavaScript ignores whitespace, including spaces, tabs, and newlines when parsing the code. For example:
            </p>
            <CodeBlock
            code={`
let name = "John"; // whitespace between let and name
if (x === 5) {    // whitespace between if and (
  console.log(x); // whitespace before and after console.log
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Statements </h2>
            <p>
                A statement is a piece of code that performs a specific task. A statement in JavaScript must end with a semicolon (;). However, if you omit the semicolon, the code still works fine because the JavaScript engine automatically inserts a semicolon at the end of the line if it is missing. For example:
            </p>
            <CodeBlock
            code={`
let greeting = "Hello World";    // declaration statement
console.log(greeting);           // function statement
            `}
            language={"javascript"}
            onlyCode={true}
            />

            <h2> Identifiers </h2>
            <p>
                In JavaScript, an identifier is a name given to a variable, function, class, or object. Identifiers must start with a letter, underscore (_), or dollar sign ($) and cannot start with a number. They can also include numbers, but cannot include special characters. For example:
            </p>
            <CodeBlock
            code={`
let firstName = "John";      // variable identifier
function calculateSum() {}  // function identifier
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Keywords </h2>
            <p>
                Keywords are reserved words that are used by JavaScript for specific tasks. They cannot be used as identifiers. For example, let, const, var, if, else, function, and return are all JavaScript keywords.
            </p>

            <h2> Expressions </h2>
            <p>
                An expression is a combination of values, operators, and variables that represents a single value. Expressions are used to perform calculations, assign values, and make decisions in JavaScript. For example:
            </p>
            <CodeBlock
            code={`
let sum = 2 + 3;                // arithmetic expression
let message = "Hello " + name; // concatenation expression
if (x > 5) {                   // comparison expression
    console.log("x is greater than 5");
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Comments </h2>
            <p>
                Comments in JavaScript are used to add notes or descriptions to your code. Comments are ignored by the JavaScript engine and do not affect the behavior of your code. There are two types of comments in JavaScript: single-line comments and multi-line comments. Single-line comments start with //, while multi-line comments start with /* and end with */. For example:
            </p>
            <CodeBlock
            code={`
// This is a single-line comment
let age = 30; 
/* This is a                
multi-line comment 
*/
`}
            language="javascript"
            onlyCode={true}
            />

            <h2> Conclusion </h2>
            <p>
                In conclusion, JavaScript syntax consists of whitespace, statements, identifiers, keywords, expressions, and comments. Understanding the syntax is essential for writing clean and readable code that is easy to maintain. In-depth knowledge of the syntax helps developers become proficient in JavaScript programming and build powerful web applications.
            </p>
        </div>
    )
}
