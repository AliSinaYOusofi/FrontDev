import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import { useSpring, animated } from '@react-spring/web'
import useSlideAnimation from '@/hooks/useSlideAnimation'

export default function Headings() {
    
    const [spring, api] = useSlideAnimation();

    return (
        <animated.div key={spring.key} style={...spring}>
            <h1 className="text-[1.5rem]"> HTML Headings</h1>
            <p className="mt-2">
                HTML headings are used to define the structure and hierarchy of a webpage content. 
                Headings are one of the most important elements of HTML and you can't create a webpage without them. 
                They provide a clear understanding of how your page content is organized and makes your website more accessible to users.
                In this part 
                we will be learning about HTML headings and give examples of how to use them.
            </p>

            <p className="mt-4">
                HTML contains six heading tags, ranging from h1 to h6. Each heading tag indicates 
                the importance of the content they contain with h1 being the most important and 
                h6 being the least important. In other words, h1 is used for the main title of 
                the webpage, 
                while h6 is used for subheadings or even less important content.
            </p>

            <p className="mt-2"> Here is how you can use HTML headings:</p>
            <CodeBlock
                code={`
<h1>This is heading level 1</h1>
<h2>This is heading level 2</h2>
<h3>This is heading level 3</h3>
<h4>This is heading level 4</h4>
<h5>This is heading level 5</h5>
<h6>This is heading level 6</h6>`
                }
                language={"html"}
                showCodeEditor={true}
            />

            <p className="mt-2">As you see in the codeblock, each heading tag starts with the letter h and has a level number ranging from 1 to 6.</p>
            <p className="mt-4">When you create a webpage, you usually start with h1 as the main title of the page, followed by h2 tags for subheadings and h3 tags for sub-subheadings. And, if you want to create even more sections, you can use h4, h5, and h6.</p>
            <p className="mt-4">Using headings in your HTML code is important for accessibility because assistive technologies such as screen readers use them to navigate through the content and create table of contents. Besides, headings improve the readability and overall structure of your website.</p>
                
            <p className="mt-10">Here is an example of how the headings look and how you can use them in your HTML page:</p>
                
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>HTML Headings Example</title>
    </head>
    <body>
        <h1>My Blog</h1>
        
        <h2>About Me</h2>
        <p>Hello, my name is John and I am a web developer.</p>
        
        <h2>My Latest Posts</h2>
        
        <h3>Post 1</h3>
        <p>This is my first blog post.</p>
        
        <h3>Post 2</h3>
        <p>This is my second blog post.</p>
        
        <h2>Contact Me</h2>
        <p>Email: john@example.com<br>Phone: 123-456-7890</p>
    </body>
</html>
    `}
    language={"html"}
    showCodeEditor={true}
    />

            <p className="mt-4">As you check the above example, the h1 tag is used for the main title of the blog page. The h2 tag is used for subheadings About Me, My Latest Posts, and Contact Me. The h3 tag is used for the titles of each blog post.</p>
            <h1 className="text-[1.5rem] mt-10">Conclusion</h1>

            <p className="mt-3">
                In conclusion, headings are an essential part of HTML and should be used properly to create a well-structured and accessible website. Remember, always start with h1 for the main title of the page and continue with h2, h3, h4, h5, and h6 for all subsequent headings, considering their hierarchy and importance to your content.
            </p>
        </animated.div>
    )
}
