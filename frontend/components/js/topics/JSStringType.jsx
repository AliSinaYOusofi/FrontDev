import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSStringType() {
    return (
        <div>
            <h1> String </h1>
            <p>
                In JavaScript, the string primitive type is used to represent textual data. Strings are a sequence of characters, which can include letters, digits, punctuation, and other symbols. In JavaScript, strings are enclosed in either single quotes (') or double quotes (").
            </p>

            <p> Here are some examples: </p>
            <CodeBlock
            code={`
const str1 = 'Hello world!';
const str2 = "JavaScript is awesome";
            `}
            language="javascript"
            onlyCode={true}
            />
            
            <p> Strings can also be created using template literals, which are enclosed in backticks (`). </p>
            <CodeBlock
                code={`
const name = 'John';
const age = 30;
const str3 = \`My name is \${name} and I am \${age} years old.\`; // result: My name is John and I am 30 years old.
                `}
                language="javascript"
                onlyCode={true}
            />

            <h1> Basic String Operations </h1>
            <p>
                JavaScript provides several built-in methods for performing operations on strings. Here are some of the most commonly used methods:
            </p>

            <h2> Concatenation </h2>
            <p>
                The concat() method can be used to concatenate two or more strings together. For example:
            </p>
            <CodeBlock
            code={`
const str1 = 'Hello';
const str2 = 'world!';
const result = str1.concat(' ', str2); // result is 'Hello world!'
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Length </h2>
            <p>
                The length property can be used to find the length of a string. For example:
            </p>
            <CodeBlock
            code={`
const str = 'Hello world!';
const length = str.length; // length is 12
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> IndexOf </h2>
            <p>
                The indexOf() method can be used to find the first occurrence of a substring within a string. For example:
            </p>
            <CodeBlock
            code={`
const str = 'Hello world!';
const index = str.indexOf('world'); // index is 6
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Slice </h2>
            <p>
                The slice() method can be used to extract a portion of a string. For example:
            </p>
            <CodeBlock
            code={`
const str = 'JavaScript is awesome';
const result = str.slice(0, 10); // result is 'JavaScript'
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Replace </h2>
            <p>
                The replace() method can be used to replace a substring with a new string. For example:
            </p>
            <CodeBlock
            code={`
const str = 'Hello world!';
const result = str.replace('world', 'JavaScript'); // result is 'Hello JavaScript!'
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> To Upper Case / To Lower Case </h2>
            <p>
                The toUpperCase() and toLowerCase() methods can be used to convert a string to all uppercase or all lowercase letters, respectively. For example:
            </p>
            <CodeBlock
            code={`
const str = 'Hello world!';
const upperCaseStr = str.toUpperCase(); // upperCaseStr is 'HELLO WORLD!'
const lowerCaseStr = str.toLowerCase(); // lowerCaseStr is 'hello world!'
            `}
            language="javascript"
            onlyCode={true}
            />

            <h1> Conclusion </h1>
            <p>
                In conclusion, strings are an important primitive data type in JavaScript used to represent textual data. JavaScript provides several built-in methods for performing operations on strings, such as concatenation, finding the length, extracting substrings, and changing cases. By understanding these basic string operations, you can write more effective JavaScript code that can handle string manipulation with ease and efficiency.
            </p>
            
        </div>
    )
}
