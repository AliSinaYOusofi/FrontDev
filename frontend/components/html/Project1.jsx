import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation'
import { animated } from '@react-spring/web';

export default function Project1() {

    const [spring] = useSlideAnimation();

    return (
        <animated.div style={spring} key={spring.key}>
            <h1> Introduction </h1>
            <p>
                This is a simple HTML project that demonstrates the use of various attributes and tags which we have learned.
            </p>

            <h1 className="mt-10"> Code </h1>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Example Project</title>
    </head>
    
    <body style="background-color: #f8f8f8; color: #333; font-size: 16px;">
    <!-- Page title -->
        <h1 style="font-size: 36px;">Welcome to my website!</h1>
        
        <!-- About section -->
        <h2 style="font-size: 24px;">About me</h2>
        <p><b>Name:</b> John</p>
        <p><b>Occupation:</b> Software Engineer</p>
        <pre style="background-color: #ddd; padding: 10px;">I love coding and building things from scratch!</pre>
        <hr />
        
        <!-- Skills section -->
        <h3 style="font-size: 20px;">Skills</h3>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
        
        <!-- Education section -->
        <h1 style="font-size: 18px;">Education</h1>
        <p><b>BS in Computer Science</b> from XYZ University</p>
        <p><b>MS in Software Engineering</b> from ABC University</p>
        
        <!-- Hobbies section -->
        <h1 style="font-size: 16px;">Hobbies</h1>
        <p><mark style="background-color: yellow;">Reading books</mark></p>
        <p><small>Playing guitar</small></p>
        <p><i>Hiking</i></p>
        
        <!-- Contact section -->
        <h1 style="font-size: 14px;">Contact Information</h1>
        <p><sub>Email:</sub> john@example.com</p>
        <p><sup>Phone:</sup> 123-456-7890</p>
        <q style="font-style: italic;">"The best way to predict the future is to invent it."</q>
        <p><abbr title="Chief Executive Officer">CEO</abbr> at XYZ Corp.</p>
        <address>
            123 Main St<br>
            Suite 101<br>
            Anytown, USA 12345
        </address>
        <br>
    </body>
</html>
            `}
        language="html"
        showCodeEditor={true}
        />
        </animated.div>
    )
}
