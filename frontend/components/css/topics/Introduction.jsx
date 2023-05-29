import React from 'react'
import { animated } from "@react-spring/web";
import useSlideAnimation from "@/hooks/useSlideAnimation";

export default function Introduction() {
    const [spring] = useSlideAnimation();
    return (
        <animated.div style={spring}>
            
            <h1>Introduction to CSS: Cascading Style Sheets</h1>
            <p>CSS (Cascading Style Sheets) is a styling language used for describing the presentation of a document written in HTML (HyperText Markup Language). It provides web developers with the ability to customize the layout and appearance of HTML elements. CSS is a fundamental technology used in web development and is an important tool for creating professional and visually appealing websites.</p>
            
            <h1>The Evolution and Importance of CSS</h1>
            <p>The history of CSS dates back to 1994 when Håkon Wium Lie proposed the language while working at CERN (the European Organization for Nuclear Research). Over time, CSS has evolved, with the latest version being CSS3. CSS3 incorporates features like flexbox, grid and animation, making it easier to create more complex and dynamic layouts.</p>
            <p>CSS is used for separating the content and structure of web pages from their presentation and style. It allows designers to define styles in a central stylesheet, ensuring consistent design across an entire website. This separation also makes it easier to maintain website design, as changes can be made to the stylesheet without affecting the web page's content.</p>
            <p>CSS is an efficient tool for web developers as it requires less code than traditional HTML styling. This efficiency is reflected in faster page loading times, creating a better user experience.</p>
            <p> CSS also plays a vital role in search engine optimization (SEO). As CSS optimizes page load times and offers cleaner code, it makes it easier for search engines to crawl and index website content. This ultimately contributes to improved search rankings. </p>
            
            <h1> Why we use CSS </h1>
            <p> CSS plays a vital role in modern web design. Its benefits include: </p>
            <ul className="ml-20 list-disc">
                <li>Separation of content and presentation: CSS helps keep the structure and content of a web page separate from its style.</li>
                <li>Consistency across web pages: Designers can ensure that all pages on a website have a consistent look and feel by defining styles in a central stylesheet.</li>
                <li>Ease of maintenance: Changes to a website's design can be made easier without affecting its content, thanks to the separation of content and presentation.</li>
                <li>Efficiency: Using CSS can make web pages load faster, as it requires less code than traditional HTML styling.</li>
            </ul>

            <h1> How CSS Works </h1>
            <p>
                CSS works by selecting HTML elements, such as text, headings, and images, and defining how they should be presented. This is typically done by setting properties such as font size, color, and spacing. CSS works on a "cascading" system, where multiple stylesheets can be applied to a web page in a specified order. If there are competing styles, CSS determines which one to apply based on a set of rules.
            </p>

            <h1>Advancements and Future Trends in CSS </h1>
            <p>CSS preprocessors like Sass and Less make it easy to create CSS code and automate tasks, freeing up time for developers. With responsive web design becoming increasingly important to websites and their users, CSS can help create layouts that are adaptive to different devices and screen sizes.</p>
            <p>Future trends include the development of CSS4, which will include new features and CSS-in-JS libraries like Styled Components. These libraries allow developers to use CSS syntax while componentizing website building blocks. The popularity of these libraries is already visible in front end web development jobs, and it is expected to continue in the future.</p>
            
            <h1> Conclusion </h1>
            <p> CSS is an essential tool for web developers, providing an efficient way to style HTML documents. Its ability to separate content and presentation makes it easier to create and maintain visually appealing and consistent websites. Understanding how CSS works is crucial for anyone looking to get started in web development, and it is a skill that will remain in high demand in the future of web design. </p>

        </animated.div>
    )
}
