import CodeBlock from '@/components/Code Block/CodeBlock';
import useSlideAnimation from '@/hooks/useSlideAnimation';
import React from 'react';
import { animated } from '@react-spring/web';

export default function HowToAddCSS() {

    const [spring] = useSlideAnimation();

    return (
        <animated.div style={spring}>

            <h1> How to add CSS</h1>
            <p className="">
            Adding CSS to your HTML documents can provide more dynamic styling options and improve the overall appearance and functionality of your website. There are several methods to add CSS to an HTML document, including the inline, internal, and external approaches. The most commonly used method is the external approach, which involves creating a CSS file separate from your HTML code and linking it to your HTML document. This method allows you to reuse the same CSS file across multiple pages, making it easier to maintain a consistent design and layout throughout your website. Once you have created your CSS file, you can link it to your HTML document using the {"<link>"} tag in the {"<head>"} section of your HTML code. With the CSS file linked, you can then use CSS selectors to define the styles for your HTML elements. By adding CSS to your HTML, you can enhance the visual appeal and user experience of your website.
            </p>

            <h1> 1. Inline CSS </h1>
            <p>
                This method involves adding CSS directly to an HTML tag, as shown below:
            </p>
            <CodeBlock
                code={` <span style="color: red;">This text will be red.</span>`}
                language="html"
                showCodeEditor={true}
            />
            <p>
                This method can be useful for small CSS changes, but it is generally not recommended for larger projects, as it makes the HTML code more cluttered and harder to read.
            </p>

            <h1> 2. Internal CSS </h1>
            <p>
                This method involves adding CSS rules inside a {"<style>"} tag within the HTML {"<head>"} section. Here's an example:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>My Website</title>
        <style>
            span {
                color: orange;
            }

            h2 {
                color: red
            }
        </style>
    </head>
    <body>
        <span>This text will be orange.</span>
        <h2>This text will be red.</h2>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>This method is better for larger projects, as it keeps the CSS code separate from the HTML code, making it easier to manage and read.</p>

            <h1> 3. External CSS </h1>
            <p>
                This method involves creating a separate .css file and linking it to the HTML file with a {"<link>"} tag in the {"<head>"} section. Here's an example:
            </p>

            <p>styles.css:</p>
            <p> In the same directory where you html files resided make a file named styles.css and add the CSS code below.</p>
            <CodeBlock
            code={`
h2 {
    color: red;
}
            `}
            language="css"
            onlyCode={true}
            />
            <p> index.html</p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>My Website</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
    </head>
    <body>
        <h2>This text will be red.</h2>
        <h2>This text will also be red.</h2>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />


            <p> 
                This method is the best option for larger projects, as it allows you to keep the CSS code separate from the HTML code, making it easier to maintain and update.
            </p>

            <h1> Conclusion </h1>
            <p>
                Adding CSS to your HTML code is an essential part of web development. Whether you use inline, internal, or external CSS, it's important to choose the method that works best for your project and keeps your code organized.
            </p>

        </animated.div>
    )
}
