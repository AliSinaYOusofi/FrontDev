import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSNumberSep() {

    return (
        <div>
            <h1> Making Numbers more readable</h1>
            <p>
                In ECMAScript 2021, a new feature was introduced that allows you to use underscores as numeric separators to make numbers more readable. This feature provides a new way of representing numeric literals, which can help make code easier to read and maintain.
            </p>

            <p>
                To use underscores as numeric separators, you simply insert them between the digits of the number. Here's an example:
            </p>
            <CodeBlock
            code={`
const num1 = 1_000_000; // one million
const num2 = 123_456_789; // one hundred twenty-three million, four hundred fifty-six thousand, seven hundred eighty-nine
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                As you can see, the underscores do not affect the value of the number, they are just used as separators to make the number easier to read.
            </p>

            <p>
                Underscores can be used with integer and floating-point numbers, but there are a few restrictions to keep in mind:
            </p>

            <ul className="ml-10 list-disc">
                <li> Underscores cannot be used at the beginning or end of a number. </li>
                <li> Underscores cannot be used before or after a decimal point. </li>
                <li> Underscores cannot be used in the exponent part of a scientific notation number. </li>
            </ul>

            <p>
                Here are some examples that illustrate these restrictions:
            </p>
            <CodeBlock
            code={`
const num1 = _1000_; // Error: underscores cannot be at the beginning or end of a number

const num2 = 123_.456; // Error: underscores cannot be before or after a decimal point

const num3 = 1.23_e2; // Error: underscores cannot be used in scientific notation
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                Using underscores as numeric separators can make your code more readable and easier to understand. It can also help prevent errors due to misreading or mistyping long numbers. However, as with any feature, it is important to use it judiciously and in a way that enhances readability without sacrificing clarity or simplicity.
            </p>
        </div>
    )
}
