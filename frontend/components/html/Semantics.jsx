import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import { animated } from '@react-spring/web';
import useSlideAnimation from '@/hooks/useSlideAnimation';

export default function Semantics() {

    const [spring] = useSlideAnimation();

    return (
        <animated.div style={spring}>

            <h1> HTML5 Semantic Elements: Improving Your Website Structure </h1>
            <p>
                HTML5 brought many exciting changes to the world of web development, and one of the most significant is the introduction of semantic elements. These elements provide a new way to structure your web pages, making them more accessible, easier to read, and better optimized for search engines. In this part, we will explain what semantic elements are, why they are important, and provide examples of how they can be used.
            </p>

            <h1> What are Semantic Elements in HTML5? </h1>
            <p> Semantic elements are HTML tags that convey meaning or information about their contents. Unlike traditional HTML tags, which are used purely for formatting, semantic elements give context and structure to the content on your web pages. </p>

            <p>
                One of the biggest benefits of using semantic elements is improved accessibility. For example, screen readers can use these elements to better understand your site's content and help visually impaired users navigate effectively. Additionally, search engines use semantic elements to better understand your site's content, which can lead to better search rankings.
            </p>

            <h1> HTML5 Semantic {"<header>"} tag </h1>
            <p>
                The {"<header>"} element defines the content that appears at the top of the web page or section. It typically includes branding elements, such as your logo, and navigation links. Here is an example:
            </p>
            <CodeBlock
            code={`
<header>
    <img src="logo.png" alt="My Website">
    <nav>
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</header>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> HTML5 Semantic {"<footer>"} tag </h1>
            <p>
                The {"<footer>"} element defines the bottom of the web page. It typically includes copyright information, legal disclaimers, and contact information. Here is an example:
            </p>
            <CodeBlock
            code={`
<footer>
    <p>© 2021 My Website. All Rights Reserved.</p>
    <p>123 Main St, Anytown USA 12345</p>
</footer>
            `}
            language={"html"}
            showCodeEditor={true}
            />

            <h1> HTML5 Semantic {"<nav>"} tag </h1>
            <p>
                The {"<nav>"} element defines a list of navigation links. It is typically placed within the {"<header>"} or {"<footer>"} elements. Here is an example:
            </p>
            <CodeBlock
            code={`
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
            `}
            language={"html"}
            showCodeEditor={true}
            />

            <h1> HTML5 Semantic {"<main>"} tag </h1>
            <p>The {"<main>"} element defines the main content area of the web page. This element is used to provide a clear separation between the primary content and other sections, such as the header or footer. Here is an example:</p>
            <CodeBlock
            code={`
<main>
    <h1>Welcome to My Website</h1>
    <p> Lorem ipsum dolor sit amet...</p>
</main>
            `}
            language={"html"}
            showCodeEditor={true}
            />

            <h1> HTML5 Semantic {"<article>"} tag </h1>
            <p>
                The {"<article>"} element defines an independent, self-contained piece of content, such as a blog post. This element is used when you have a set of content that could stand on its own. Here is an example:
            </p>
            <CodeBlock
            code={`
<article>
    <h2>How to Build a Website with HTML and CSS</h2>
    <p> In this post, we will go through the...</p>
</article>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> HTML5 Semantic {"<section>"} tag </h1>
            <p>
                The {"<section>"} element defines a section of related content. This element is used when you have content that forms a distinct group, such as a product description or course module. Here is an example:
            </p>
            <CodeBlock
            code={`
<section>
    <h2>Our Services</h2>
    <p> We offer the following services...</p>
</section>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> Conclusion </h1>
            <p>
                Semantic elements in HTML5 provide a more meaningful way to structure your web pages. They are an essential part of building accessible, well-organized, and SEO-friendly websites. In this blog post, we have covered some of the most common semantic elements and provided examples of how they can be used. By leveraging these elements, you can improve your website's structure and user experience.
            </p>

        </animated.div>
    )
    }
