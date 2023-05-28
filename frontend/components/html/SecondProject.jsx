import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation';
import { animated } from '@react-spring/web';

export default function SecondProject() {

    const [spring] = useSlideAnimation();

    return (
        <animated.div style={spring}>
            <h1> Second Project</h1>
            <p>
                This is a simple HTML project that demonstrates the use of a, h1, table, img tag.
            </p>
            <CodeBlock
            code={`
    <!DOCTYPE html>
    <html>
        <head>
            <title>My Webpage</title>
        </head>
        <body style="background-color: darkgray;">
        
           
            <h1 style="background-color: gray; text-align:center; padding: 10px;">Welcome to My Webpage</h1>
            

            
            <h2 >About Me</h2>
            <p >My name is John and I am a web developer. I love coding and creating new things with HTML, CSS, and JavaScript.</p>

            <h2>My Skills</h2>
            <ul style="list-style: none; padding-left: 0;">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Responsive Design</li>
            </ul>

            <h2 style="margin-top: 0;">My Projects</h2>
            <table style="border-collapse: collapse; width: 100%; text-align: left;">
                <tr style="background-color: #ddd;">
                <th style="padding: 10px;">Project Name</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Link</th>
                </tr>
                <tr>
                <td style="padding: 10px;">Blog Project</td>
                <td style="padding: 10px;">A simple blog page created with HTML and CSS.</td>
                <td style="padding: 10px;"><a href="#">View</a></td>
                </tr>
                <tr>
                <td style="padding: 10px;">E-commerce Site</td>
                <td style="padding: 10px;">An online shop created with HTML, CSS, and JavaScript.</td>
                <td style="padding: 10px;"><a href="#">View</a></td>
                </tr>
            </table>

            <h2 >My Hobbies</h2>
            <p>I enjoy taking photos and sharing them on <a href="https://www.instagram.com">Instagram</a>. Here are some of my favorite photos:</p>
            <img src="https://images.pexels.com/photos/2361/nature-animal-wolf-wilderness.jpg?auto=compress&cs=tinysrgb&w=600" width="400" height="200" >
            <img src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="400" height="200" >
            <img src="https://images.pexels.com/photos/3777200/pexels-photo-3777200.jpeg?auto=compress&cs=tinysrgb&w=600" width="200" height="400" >
        </body>
    </html>`}
        langauge="html"
        showCodeEditor={true}
        />
        </animated.div>
    )
}
