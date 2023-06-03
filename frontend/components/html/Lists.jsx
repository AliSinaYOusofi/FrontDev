import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import { animated } from '@react-spring/web';
import useSlideAnimation from '@/hooks/useSlideAnimation';

export default function Lists() {

    const [spring] = useSlideAnimation();

    return (
        <animated.div style={...spring} key={spring.key} className="">

            <h1> HTML Lists </h1>
            <p>
                HTML lists allow you to organize content into various types of lists. There are three primary list types — ordered lists, unordered lists, and description lists. In this part, we'll take a closer look at each of these list types, how they differ, and how to create them.
            </p>

            <h1> Unordered List</h1>
            <p>
            An unordered list is a simple, unnumbered list of items. Each list item is represented by the li (list item) tag. Here's how you can create an unordered list:
            </p>
            <div className="lists">

            <CodeBlock
            code={`
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
            `}
                language="html"
                showCodeEditor={true}
            />
            </div>

            <p>
                The ul tag represents the unordered list, whereas the li tag represents the list items
            </p>

            <h1> Ordered List</h1>
            <p>
                An ordered list is a numbered list of items. Similar to unordered lists, ordered lists are wrapped in an ol tag that represents the list, and each individual item is represented by an li (list item) tag. Here's how to create an ordered list:
            </p>
            <div className="o_lists">

            <CodeBlock
            code={`
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
            `}
            language={"html"}
            showCodeEditor={true}
            />
            </div>

            <h1> Description List </h1>
            <p>
                A description list is a list of terms and their corresponding descriptions. In a description list, each term is represented by a dt tag (definition term), and the description for the term is represented by a dd tag (definition description). Here's how you can create a description list:
            </p>
            <CodeBlock
            code={`
<dl>
    <dt>Term 1</dt>
        <dd>Description 1</dd>
    <dt>Term 2</dt>
        <dd>Description 2</dd>
    <dt>Term 3</dt>
        <dd>Description 3</dd>
</dl>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1>
                Nested Lists
            </h1>
            <p>
                It is entirely possible to nest lists within other lists for added organization. For example, you can nest an unordered list within an ordered list:
            </p>

            <div className="nested">

            <CodeBlock
            code={`
<ol>
    <li>Item 1</li>
    
    <li>Item 2
        <ul>
        <li>Sub-Item 1</li>
        <li>Sub-Item 2</li>
        </ul>
    </li>

    <li>Item 3</li>
</ol>
            `}
            language={"html"}
            showCodeEditor={true}
            />
            </div>

            <h1> Conclusion </h1>
            <p>
                HTML lists are a powerful tool for organizing content. Whether you need an unordered list, an ordered list, a description list, or a combination of these, HTML makes it easy. With the basic understanding of list types, you can use them to structure the website content in an intuitive way.
            </p>
        </animated.div>
    )
}
