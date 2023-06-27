import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSDataTypeConversion() {

    return (
        <div>
            <h1> Converting Between Data Types </h1>
            <p>
                JavaScript provides several methods for converting between data types, including the following:
            </p>

            <h2> Number to String </h2>
            <p>
                The toString() method can be used to convert a number to a string. For example:
            </p>

            <CodeBlock
            code={`
const num = 42;
const str = num.toString(); // str is now "42"
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> String to Number </h2>
            <p>
                The parseInt() and parseFloat() methods can be used to convert a string to a number. parseInt() converts the string to an integer, while parseFloat() converts the string to a floating-point number. For example:
            </p>

            <CodeBlock
            code={`
const str1 = "42";
const num1 = parseInt(str1); // num1 is now 42

const str2 = "3.14";
const num2 = parseFloat(str2); // num2 is now 3.14
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> String to Boolean </h2>
            <p>
                The Boolean() function can be used to convert a string to a boolean value. Any non-empty string will be converted to true, while an empty string will be converted to false. For example:
            </p>

            <CodeBlock
            code={`
const str1 = "hello";
const bool1 = Boolean(str1); // bool1 is now true

const str2 = "";
const bool2 = Boolean(str2); // bool2 is now false
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Number to Boolean </h2>
            <p>
                The Boolean() function can also be used to convert a number to a boolean value. Any non-zero number will be converted to true, while zero will be converted to false. For example:
            </p>
            <CodeBlock
            code={`
const num1 = 42;
const bool1 = Boolean(num1); // bool1 is now true

const num2 = 0;
const bool2 = Boolean(num2); // bool2 is now false
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> String to Array </h2>
            <p>
                The split() method can be used to convert a string to an array. The split() method takes a separator as a parameter, and returns an array of substrings separated by the separator. For example:
            </p>
            <CodeBlock
            code={`
const str = "Apple,Banana,Orange";
const arr = str.split(","); // arr is now ["Apple", "Banana", "Orange"]
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Array to String </h2>
            <p>
                The join() method can be used to convert an array to a string. The join() method takes a separator as a parameter, and returns a string of elements joined by the separator. For example:
            </p>
            <CodeBlock
            code={`
const arr = ["Apple", "Banana", "Orange"];
const str = arr.join(","); // str is now "Apple,Banana,Orange"
            `}
            language="javascript"
            onlyCode={true}
            />

            <h1> Conclusion </h1>
            <p>
            Converting between data types is a common task when working with JavaScript, and understanding the available methods for converting data types is essential for writing effective code. When converting between data types, be sure to carefully consider the input and output data types, and use the appropriate method for the task at hand.
            </p>

        </div>
    )
}
