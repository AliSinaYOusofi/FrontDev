import React from 'react'
import { animated } from '@react-spring/web';
import useSlideAnimation from '@/hooks/useSlideAnimation';
import CodeBlock from '../Code Block/CodeBlock';

export default function Iframe() {

    const [spring] = useSlideAnimation();

    return (
        <animated.div style={spring}>
            <h1>
                iframes
            </h1>
            <p>
                HTML frames may be considered outdated, but iframes are still a widely used and useful component of web development. An iframe, or inline frame, is an HTML element that allows a separate HTML document to be embedded within an existing HTML document.
            </p>

            <h1>
                iframe attributes
            </h1>
            <p>
                The following attributes are used to customize iframes:
            </p>

            <h2>
                1. src
            </h2>
            <p>
                The src attribute specifies the URL of the page or document to be loaded in the iframe.
            </p>

            <h2>
                2. width
            </h2>
            <p>
                The width attribute specifies the width of the iframe.
            </p>

            <h2>
                3. height
            </h2>
            <p>
                The height attribute specifies the height of the iframe.
            </p>

            <h2>
                4. frameborder
            </h2>
            <p>
                The frameborder attribute specifies the number of pixels to display around the edges of the frame.
            </p>

            <h2>
                5. allowfullscreen
            </h2>
            <p>
                The allowfullscreen attribute specifies whether or not to allow full-screen mode.
            </p>

            <h1> Uses of iframes </h1>
            <p>
                Here are some common uses of iframes and the attributes that can be used to customize them:
            </p>

            <h1> 1. Embedding external content </h1>
            <p>
                One of the most common use cases for iframes is to embed external content, such as a video or map, from another website. For example, to embed a YouTube video, you could use the following code:
            </p>
            <CodeBlock code={`<iframe width="560" height="315" src="https://hypercolor.dev/" frameborder="0" allowfullscreen></iframe>`} language="html" showCodeEditor={true} />

            <h1> 2. Embedding a YouTube video </h1>
            <p>
                You can embed a YouTube video by using the following code:
            </p>
            <CodeBlock code={`<iframe width="866" height="487" src="https://www.youtube.com/embed/gSSsZReIFRk" title="Next.js App Router: Routing, Data Fetching, Caching" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`} language="html" showCodeEditor={true} />

            <h1> 3. Embedding a Google Maps </h1>
            <p>
                You can embed a Google Maps by using the following code:
            </p>
            <CodeBlock code={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83872.48828393739!2d2.255968932643984!3d48.85809332057804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x88417759c55d6407!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1634702313692!5m2!1sen!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`} language="html" showCodeEditor={true} />

            <h1>Conclusion</h1>
            <p>
                In conclusion, iframes are a powerful tool for embedding content from other sources into your web pages. They allow you to seamlessly integrate dynamic content such as videos, maps, advertisements, and social media feeds into your website, without the need for complex coding or backend integration.
            </p>
        </animated.div>
    )
}
