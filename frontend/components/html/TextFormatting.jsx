"use client";
import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import { animated, useSpring } from '@react-spring/web';
import useSlideAnimation from '@/hooks/useSlideAnimation';
export default function TextFormatting() {

    const [spring, api] = useSlideAnimation();
    
    return (
        <animated.div style={spring} key={spring.key}>
            <h1> Text formatting </h1>
            <p>
                Text formatting is an important aspect of web development that can make your content 
                more readable, engaging and effective. There are several ways to format text based on 
                your needs. 
                Here are some common text formatting tags and their usage:
            </p>

            <h1 className="mt-10"> The {"<b>"} tag</h1>
            <p> This tag is used to make the text bold. For example: </p>
            <CodeBlock code={`<b>This text will be bold</b>`} language="html" showCodeEditor={true} />

            <h1 className="mt-10"> The {"<strong>"} tag </h1>
            <p>
                This tag is used to make the text more important and visually prominent. For example
            </p>
            <CodeBlock code={`<strong>This text will be bold</strong>`} language="html" showCodeEditor={true} />

            <h1 className="mt-10"> The {"<i>"} tag </h1>
            <p> This tag is used to make the text italicized. For example</p>
            <CodeBlock code={`<i>This text will be italicized</i>`} language="html" showCodeEditor={true} />

            <h1 className="mt-10"> The {"<em>"} tag </h1>
            <p> This tag is used to place emphasis on the text. Italicized text is often used for emphasis. For example </p>
            <CodeBlock code={`<em>This text will be italicized</em>`} language="html" showCodeEditor={true} />

            <h1 className="mt-10"> The {"<mark>"} tag</h1>
            <p>This tag is used to highlight or indicate text. For example</p>
            <CodeBlock code={`<mark>This text will be marked</mark>`} language="html" showCodeEditor={true} />

            <h1 className="mt-10"> The {"<small>"}</h1>
            <p>This tag is used to make the text smaller than the surrounding text. This is useful for footnotes or supplemental text. For example,</p>
            <CodeBlock code={`<small>This text will be smaller</small>`} language="html" showCodeEditor={true} />

            <h1 className="mt-10"> The {"<sub>"}</h1>
            <p>This tag is used to indicate that the text is a subscript. For example</p>
            <CodeBlock code={`<sub>This text will be a subscript</sub>`} language="html" showCodeEditor={true} />

            <h1 className="mt-10"> The {"<sup>"}</h1>
            <p>This tag is used to indicate that the text is a superscript. For example</p>
            <CodeBlock code={`<sup>This text will be a superscript</sup>`} language="html" showCodeEditor={true} />

            <p> These are just a few of the many ways to format text using HTML tags. By using these tags appropriately, you can make your content more engaging and effective for your audience.</p>

        </animated.div>
    )
}
