import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSMedaiQueries() {

    return (
        <div>
            <h1> CSS Media queries </h1>
            <p>
                Responsive web design is an approach to create websites that adapt to different screen sizes and devices. The purpose of responsive design is to ensure that websites look and function well across a wide range of devices, including desktops, laptops, tablets, and smartphones. One of the key technologies used in responsive web design is CSS media queries.
            </p>

            <p>
                CSS media queries allow you to apply different CSS styles to a website depending on the device's screen size and the orientation of the device. In this article, we will explore how to use CSS media queries to create responsive websites.
            </p>

            <h2> Understanding CSS Media Queries </h2>
            <p>
                CSS media queries allow you to change the styles of a website based on the characteristics of the device that is being used to view the website. For example, you can change the layout of a website when it is viewed on a smaller screen by adjusting the font size, the position of the content, and the size of the images.
            </p>

            <p>
                To create a media query, you need to specify a condition that must be met for the styles to be applied. The most common condition is the screen width, which is measured in pixels. You can specify multiple conditions for a single media query by separating them with the "and" keyword.
            </p>

            <p>
                Here's an example of a media query that targets screens that are 600 pixels wide or less:
            </p>

            <CodeBlock
            code={`
@media (max-width: 600px) {
    /* CSS rules go here */
}
            `}
            language="css"
            onlyCode={true}
            />
            <p>
                In this example, the CSS rules inside the media query will be applied when the screen size is 600 pixels or less.
            </p>

            <h2> Example of Responsive Web Design using CSS Media Queries </h2>
            <p>
                Let's apply media queries in the given HTML code that applies CSS gradients to a container. The container currently has a fixed width of 500 pixels, which means it’s not responsive and would be difficult to view on smaller screens.
            </p>

            <p>
                Here is the HTML code we will use in this example:
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS Responsive</title>
        <style>
            .con {
                width: 500px;
                height: 200px;
                background: linear-gradient(red, orange, yellow);
            }

            @media only screen and (max-width: 600px) {
                .con {
                    width: 100%;
                    height: 100px;
                }
            }
        </style>
    </head>
    <body>
        <div class="con"></div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />
            <p>
                In the above code, we've added a media query that targets screens that are 600 pixels wide or less. Within this "media query," we have set the width of the "con" class to 100% and the height to 100px.
            </p>

            <p>
                As a result, when the screen size is less than or equal to 600 pixels, the container will expand to the full screen width and reduce its height to 100 pixels. This provides a better user experience for smaller screens, and the container becomes responsive to the screen size.
            </p>

            <h2> Resonsive design using media quereis </h2>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS Responsive Design</title>
        
        <!-- styles for desktop -->
        <style>
            body {
                font-size: 18px;
            }
            
            .header {
                padding: 20px;
                background-color: #333;
                color: #fff;
                text-align: center;
            }
            
            .container {
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
            }
            
            .card {
                width: calc(25% - 20px);
                margin: 10px;
                padding: 10px;
                color: black;
                background-color: #f2f2f2;
                text-align: center;
            }
        </style>
        
        <!-- styles for tablets -->
        <style>
            @media only screen and (max-width: 992px) {
                body {
                    font-size: 16px;
                }
                
                .container {
                    max-width: 768px;
                }
                
                .card {
                    width: calc(33.33% - 20px);
                }
            }
        </style>
        
        <!-- styles for mobiles -->
        <style>
            @media only screen and (max-width: 576px) {
                body {
                    font-size: 14px;
                }
                
                .container {
                    max-width: 100%;
                }
                
                .card {
                    width: calc(50% - 20px);
                }
            }
        </style>
    </head>
    
    <body>
        <header class="header">CSS Responsive Design</header>
        
        <div class="container">
            <div class="card">Card 1</div>
            <div class="card">Card 2</div>
            <div class="card">Card 3</div>
            <div class="card">Card 4</div>
        </div>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In the above example, we've used CSS media queries to adjust the design of the website for mobiles, tables, and laptops:
            </p>

            <ul className="ml-10 list-disc">
                <li> For desktops, we have set the font-size to 18px, the maximum container width to 1200px, and the card width to 25% using calc. </li>
                <li> For tablets, we have used a media query with max-width 992px to set the font-size to 16px, the maximum container width to 768px, and the card width to 33.33% using calc.</li>
                <li>For mobiles, we have used a media query with max-width 576px to set the font-size to 14px, the maximum container width to 100%, and the card width to 50% using calc. </li>
            </ul>

            <p>
                As a result, when the screen size is less than or equal to 992px, the font size is reduced, the container's width is decreased, and the card size is adjusted to take up more screen space. Similarly, when the screen size is less than or equal to 576px, the font size and the container width is further reduced, and the card size is increased to cover most of the screen space.
            </p>

            <p>
                This makes the website responsive to various devices across different screen sizes.
            </p>

            <h1> Conclusion </h1>
            <p>
                CSS media queries are an essential aspect of creating responsive websites. With the help of media queries, we can adjust and optimize the design of a website for different devices with different screen sizes and orientations. In the above example, we made the given HTML code responsive to screen sizes below 600px.
            </p>

            <p>
                Therefore, using CSS media queries can significantly enhance the user experience of a website across various devices, and it should be an integral part of every web developer's toolkit.
            </p>
        </div>
    )
}
