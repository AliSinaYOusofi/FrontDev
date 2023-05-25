"use client";

import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation'
import {animated} from "@react-spring/web";

export default function Links() {

    const [spring] = useSlideAnimation();

    return (
        <animated.div style={spring} key={spring.key}>

            <h1 className="mt-0 " stlye={{}}> Understanding HTML Hyperlinks </h1>
            <p>
                Hyperlinks, also known as links, are a key feature of the World Wide Web that enable us to navigate through different web pages. Links are made possible by HTML (Hypertext Markup Language), the primary markup language used to create web pages.
            </p>

            <p>
                HTML hyperlinks direct users to different pages on the same website and to external pages on other websites. They consist of two parts: the anchor text and the URL.
            </p>

            <h1> Anchor Text </h1>
            <p>
                The anchor text is the visible, clickable text that leads users to the linked page. It is typically underlined and colored blue to differentiate it from other text on the page. Here's an example:
            </p>
            <CodeBlock code={`<a href="https://www.wikipedia.org">Visit Wikipedia</a>`} language="html" showCodeEditor={true} />
            <p>In this code, the anchor text is "Visit Wikipedia."</p>

            <h1> URL </h1>
            <p> The URL (Uniform Resource Locator) is the web address that the hyperlink connects to. URLs start with a protocol identifier, such as "http://" or "https://", followed by the domain name of the website and the path to the page being linked. Here is a simple example:</p>
            <CodeBlock code={`<a href="https://www.google.com">Visit Google</a>`} language="html" showCodeEditor={true} />

            <h1> Types of Hyperlinks </h1>
            <p>HTML hyperlinks can be classified into three types:</p>

            <h1> 1: Absolute Hyperlinks</h1>
            <p>Absolute hyperlinks use the full URL of the linked page, including the protocol identifier, domain name, and path. Here's an example:</p>
            <CodeBlock code={`<a href="https://www.wikipedia.org">Visit Wikipedia</a>`} language="html" showCodeEditor={true} />

            <h1> 2: Relative Hyperlinks</h1>
            <p>Relative hyperlinks only use the path of the linked page, without including the domain or protocol identifier. These links are useful for navigating within a website without having to specify the full URL. Here's an example:</p>
            <CodeBlock code={`<a href="/about">About</a>`} language="html" showCodeEditor={true} />

            <h1>3: Email Hyperlinks</h1>
            <p>Email hyperlinks allow users to send an email by clicking on a link. Here's an example:</p>
            <CodeBlock code={`<a href="mailto:contact@website.com">Contact Us</a>`} language="html" showCodeEditor={true} />
            <p>In this code, "mailto:" is the protocol identifier for email links.</p>

            <h1> Conclusion </h1>
            <p>
                HTML hyperlinks are an essential part of the web. They enable users to navigate between pages and websites seamlessly. By using simple anchor text and clear URLs, website owners can create effective hyperlinks that enhance the user experience.
            </p>
        </animated.div>
    )
}
