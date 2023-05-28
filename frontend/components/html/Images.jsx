import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation';
import {animated} from '@react-spring/web';

export default function Images() {

    const [spring] = useSlideAnimation();

    return (
        <animated.div style={spring} key={spring.key}>
            <h1> HTML Image </h1>
            <p> Images are an essential component of web design as they enhance the visual appeal of web pages. HTML provides an easy way to embed images into web pages using the img tag.</p>

            <p>The img tag is a self-closing tag which means it doesn't require a closing tag. It has several attributes that we can use to display and control the image on the web page, and it looks like this:</p>
            <CodeBlock code={`<img src="https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=600">`} language="html" showCodeEditor={true} />

            <p>In the example above, the src attribute specifies the path or URL of the image file to be displayed.</p>

            <p>For instance, imagine you have an image named "example.jpg" placed in the same directory as your HTML file. You can display this image on your web page as follows:</p>
            <CodeBlock code={`<img src="../../public/next.svg">`} language="html" showCodeEditor={true} />

            <p>However, images can come in different sizes and resolutions. The width and height attributes can be used to set the image size in pixels:</p>
            <CodeBlock code={`<img alt="code Image" src="https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=600" width="300" height="200">`} language={"html"} showCodeEditor={true} />
            <p>In the example above, the alt attribute provides an alternative text description of the image, which can be useful for accessibility and search engine optimization purposes.</p>

            <p>You can also use the title attribute to provide a tooltip that appears when the user hovers over the image:</p>
            <CodeBlock code={`<img alt="code Image" src="https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=600" title="Image Title">`} language="html" showCodeEditor={true} />

            <h1> Conclusion </h1>
            <p>HTML provides a simple and efficient way to embed images into web pages, making them more visually engaging and accessible to users. The img tag, along with its attributes, allows us to control the image's appearance and behavior on the webpage.</p>

        </animated.div>
    )
}
