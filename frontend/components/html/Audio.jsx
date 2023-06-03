import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation';
import {animated} from '@react-spring/web';

export default function Audio() {

    const [lessonsSprings] = useSlideAnimation();

    return (
        <animated.div key={lessonsSprings.key} style={...lessonsSprings}>

            <h1> HTML Audio Tag</h1>
            <p>Adding audio to your web pages can enhance the viewing experience for your audience and add an extra dynamic element to your content. The HTML audio tag makes it easy to embed audio files on your website</p>

            <h1> Basics of HTML audio tag </h1>
            <p>
                Like the HTML video tag, the audio tag is easy to use and requires only a few lines of code to implement. Here’s an example of how to use the audio tag:
            </p>
            <CodeBlock
            code={`
<audio controls>
    <source src="http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/fx/engine-8.ogg" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
            `}
            language="html"
            showCodeEditor={false}
            />

            <p>
                As you can see, the audio tag consists of several parts:
            </p>
            <ul className="ml-20 list-decimal">
                <li>The {"<audio>"} element: This is the main container for your audio.</li>
                <li>The controls attribute: This adds playback controls to your audio, including a play/pause button, a volume slider, and more.</li>
                <li>The {"<source>"} element: This tells the browser which audio file to play, and what type of audio file it is.</li>
                <li>Lastly, the text “Your browser does not support the audio element.” This will be displayed when the browser doesn't support HTML5 audio.</li>
            </ul>


            <h1> Audio File Types for HTML audio tag </h1>
            <p>
                Before we dive into the attributes of the HTML audio tag, it’s important to understand the different types of audio files that are supported. Here are some common audio formats that you can use:
            </p>
            <ul className="ml-20 list-decimal">
                <li>MP3: This is the most widely supported audio format.</li>
                <li>Ogg: This is an open-source audio format that’s similar to MP3, but is less widely supported.</li>
                <li> WAV: This is a high-quality, uncompressed audio format that’s supported by most web browsers.</li>
            </ul>

            <p> Like the video tag, it's best to provide multiple audio formats for cross-browser compatibility. </p>
        

            <h1> Audio tag attributes </h1>
            <p> Now that we’ve covered the basics of the HTML audio tag, let's dive into each attribute and what it does. </p>

            <h1> 1. src </h1>
            <p>The src attribute specifies the URL of the audio file that you want to play.</p>
            <CodeBlock
            code={`
<audio controls>
    <source src="http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/fx/engine-8.ogg" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
            `}
            language="html"
            showCodeEditor={false}
            />

            <h1> 2. controls </h1>
            <p>
                The controls attribute adds the default audio player controls to your audio, such as a play/pause button, a volume slider, a mute button, and more. 
            </p>
            <CodeBlock
            code={`
<audio controls>
    <source src="http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/fx/engine-8.ogg" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
            `}
            language="html"
            showCodeEditor={false}
            />

            <h1> 3. autoplay, loop, muted </h1>
            <p>
                The autoplay attribute allows the audio to start playing automatically when the page loads. <br />
                The loop attribute causes the audio to loop continuously once it reaches the end. <br />
                The muted attribute causes the audio to play without sound.
            </p>
            <CodeBlock
            code={`
<audio controls autoplay loop muted>
    <source src="http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/fx/engine-8.ogg" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
            `}
            language="html"
            showCodeEditor={false}
            />
            
            <h1> 4. preload </h1>
            <p>The preload attribute determines when the audio file should be loaded. It can take one of three values: auto (the default), metadata, and none. </p>
            <CodeBlock
            code={`
<audio controls preload="auto">
    <source src="http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/fx/engine-8.ogg" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
            `}
            language="html"
            showCodeEditor={false}
            />

            <h1> 5. volume </h1>
            <p>
                The volume attribute sets the initial volume for the audio file. The value for this attribute must be between 0 and 1, with 1 being the maximum volume. 
            </p>
            <CodeBlock
            code={`
<audio controls volume="0.5">
    <source src="http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/fx/engine-8.ogg" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
            `}
            language="html"
            showCodeEditor={false}
            />

            <h1> Conclusion </h1>
            <p>
                The HTML audio tag is a powerful tool for adding audio files to your website. By using the attributes we’ve outlined in this post, you can create a customized, accessible audio player that engages your audience and adds a dynamic element to your content.
            </p>
        </animated.div>
    )
}
