import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation';
import {animated} from '@react-spring/web';

export default function Video() {

    const [lessonsSprings] = useSlideAnimation();

    return (
        <animated.div key={lessonsSprings.key} style={...lessonsSprings}>

            <h1> HTML Video tag </h1>
            <p>
                The HTML {"<video>"} tag is used to embed videos into a webpage. It provides a standard and easy way to embed videos, and it is supported by most modern web browsers.
            </p>

            <p>
            The {"<video>"} tag works similarly to the {"<img>"} tag for displaying images. It allows you to specify a source file, and then the browser will display the video. You can also specify various attributes to customize the video, such as setting the playback controls, specifying a poster image, and setting the video dimensions.
            </p>

            <h1> Basic Usage </h1>
            <p>
                To use the {"<video>"} tag, you must first specify the src attribute, which should contain the URL of the video file. Here is an example:
            </p>
            <CodeBlock
            code={`
<video width="320" height="240" controls>
    <source src="https://player.vimeo.com/external/210743787.sd.mp4?s=10598b1cf88b588008b94a85d9bfc4f0773a82f7&profile_id=164&oauth2_token_id=57447761" type="video/mp4">
    Your browser does not support the video tag.
</video>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>As you can see, the video tag consists of several parts:</p>
            <ul className="ml-20 list-decimal">
                <li> The {"<video>"} element: This is the main container for your video.</li>
                <li> The width and height attributes: These determine the dimensions of the video.</li>
                <li> The controls attribute: This attribute specifies whether or not the video should have a playback controls.</li>
                <li> The source element: This element specifies the source of the video.</li>
                <li> The type attribute: This attribute specifies the type of the video.</li>
                <li> The Your browser does not support the video tag. text: This is the text that is displayed if the browser does not support the video tag.</li>
            </ul>

            <h1> Video File Types for HTML video tag </h1>
            <p>
                Before we move on, it’s worth taking a look at the different types of video files supported by the HTML video tag. Here are some common video formats that you can use:
            </p>
            <ul className="ml-20 list-decimal">
                <li>MP4: This is the most widely supported video format, and it’s recommended that you use this format if possible.</li>
                <li>WebM: This is an open-source video format that’s similar to MP4, but is more optimized for the web.</li>
                <li>Ogg: This is another open-source video format that’s similar to WebM, but is less widely supported.</li>
            </ul>

            <p>It’s best to provide multiple formats in different formats for cross-browser compatibility. </p>
            
            
            <h1> Attributes of HTML video tag </h1>
            <p>
                The HTML video tag consists of several attributes that can be used to customize your video player. Here’s a breakdown of each attribute and what it does:
            </p>
        
            <h1> 1. Width and height </h1>
            <p>
                The width and height attributes control the size of the video player. The values for both attributes are specified in pixels.
            </p>
            <CodeBlock
            code={`
<video width="320" height="240" controls>
    <source src="https://player.vimeo.com/external/210743787.sd.mp4?s=10598b1cf88b588008b94a85d9bfc4f0773a82f7&profile_id=164&oauth2_token_id=57447761" type="video/mp4">
    Your browser does not support the video tag.
</video>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> 2. controls </h1>
            <p> The controls attribute adds the default video player controls to your video player. These include a play/pause button, a volume slider, a mute button, and more</p>
            <CodeBlock
            code={`
<video  controls>
    <source src="https://player.vimeo.com/external/210743787.sd.mp4?s=10598b1cf88b588008b94a85d9bfc4f0773a82f7&profile_id=164&oauth2_token_id=57447761" type="video/mp4">
    Your browser does not support the video tag.
</video>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1>3. autoplay</h1>
            <p>The autoplay attribute allows the video to start playing automatically when the page loads.</p>
            <CodeBlock
            code={`
<video  autoplay controls>
    <source src="https://player.vimeo.com/external/210743787.sd.mp4?s=10598b1cf88b588008b94a85d9bfc4f0773a82f7&profile_id=164&oauth2_token_id=57447761" type="video/mp4">
    Your browser does not support the video tag.
</video>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1>4. loop</h1>
            <p>
                The loop attribute causes the video to loop continuously once it reaches the end.
            </p>
            <CodeBlock
            code={`
<video  loop controls>
    <source src="https://player.vimeo.com/external/210743787.sd.mp4?s=10598b1cf88b588008b94a85d9bfc4f0773a82f7&profile_id=164&oauth2_token_id=57447761" type="video/mp4">
    Your browser does not support the video tag.
</video>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> 5. muted </h1>
            <p>The muted attribute causes the video to play without sound</p>
            <CodeBlock
            code={`
<video  muted controls>
    <source src="https://player.vimeo.com/external/210743787.sd.mp4?s=10598b1cf88b588008b94a85d9bfc4f0773a82f7&profile_id=164&oauth2_token_id=57447761" type="video/mp4">
    Your browser does not support the video tag.
</video>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> 6. poster </h1>
            <p>The poster attribute specifies a URL for an image to display before the video starts playing.</p>
            <CodeBlock
            code={`
<video  poster="https://i.vimeocdn.com/video/91088794_640.jpg" controls>
    <source src="https://player.vimeo.com/external/210743787.sd.mp4?s=10598b1cf88b588008b94a85d9bfc4f0773a82f7&profile_id=164&oauth2_token_id=57447761" type="video/mp4">
    Your browser does not support the video tag.
</video>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> 7. preload </h1>
            <p>
                The preload attribute specifies how the video should start playing.
                The preload attribute determines when the video file should be loaded. It can take one of three values: auto (the default), metadata, and none. 
            </p>
            <CodeBlock
            code={`
<video  preload="auto" controls>
    <source src="https://player.vimeo.com/external/210743787.sd.mp4?s=10598b1cf88b588008b94a85d9bfc4f0773a82f7&profile_id=164&oauth2_token_id=57447761" type="video/mp4">
    Your browser does not support the video tag.
</video>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> 9. type </h1>
            <p>The type attribute is used to specify the MIME type of the video file. For example, if you’re using an MP4 video file, you would specify type="video/mp4".</p>
            <CodeBlock
            code={`
<video  preload="auto" controls>
    <source src="https://player.vimeo.com/external/210743787.sd.mp4?s=10598b1cf88b588008b94a85d9bfc4f0773a82f7&profile_id=164&oauth2_token_id=57447761" type="video/mp4">
    Your browser does not support the video tag.
</video>
            `}
            language="html"
            showCodeEditor={true}
            />

            <h1> 10. controlsList </h1>
            <p>
                The controlsList attribute can be used to customize the controls in the video player. It takes a comma-separated list of values, such as nodownload (disables the download button), nofullscreen (disables the fullscreen button), and more.
            </p>

            <h1> Conclusion</h1>
            <p>Understanding the attributes of the HTML video tag is essential to creating a video player that fits your needs. By using these attributes, you can add autoplay, loop controls, customize the interface, control whether the video starts with sound, and more.</p>
        </animated.div>
    )
}
