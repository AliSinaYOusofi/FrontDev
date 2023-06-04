import useSlideAnimation from '@/hooks/useSlideAnimation';
import React from 'react'
import { animated } from '@react-spring/web';
import CodeBlock from '../Code Block/CodeBlock';

export default function MetaTags() {

    const [spring] = useSlideAnimation();
    
    return (
        <animated.div style={spring}>
            <h1>Meta Tags</h1>
            <p>
                HTML meta tags are a type of HTML tag used to provide information about a web page to search engines and web browsers. They are typically placed in the head section of an HTML document.
            </p>

            <h1> Title Tag</h1>
            <p>
                The title tag is used to provide a title for the web page. This title is usually displayed in the browser's title bar and is also used by search engines to display a link to the page in search results.
            </p>
            <CodeBlock code={`<title>Title</title>`} onlyCode={true} language="html" showCodeEditor={false} />
            
            <h1> Description Tag</h1>
            <p>
                The description tag is used to provide a brief description of the web page. This description is also used by search engines to provide a summary of the page in search results.
            </p>
            <CodeBlock code={`<meta name="description" content="Description">`} onlyCode={true} language="html" showCodeEditor={false} />

            <h1> Keywords Tag</h1>
            <p>
                The keywords tag is used to provide a list of keywords related to the web page. This tag was once used by search engines to help rank pages, but is now largely ignored.
            </p>
            <CodeBlock code={`<meta name="keywords" content="Keywords">`} onlyCode={true} language="html" showCodeEditor={false} />

            <h1> Viewport Tag </h1>
            <p>
                The viewport tag is used to control the layout and scaling of the web page on mobile devices.
            </p>
            <CodeBlock onlyCode={true} code={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`} language="html" showCodeEditor={false} />

            <h1> Author Tag </h1>
            <p>
                The author tag is used to provide the name of the author of the web page.
            </p>
            <CodeBlock onlyCode={true} code={`<meta name="author" content="Author">`} language="html" showCodeEditor={false} />
            
            <h1> Robots Tag </h1>
            <p>
                The robots tag is used to control the crawl behavior of the web page.
            </p>
            <CodeBlock onlyCode={true} code={`<meta name="robots" content="index, follow">`} language="html" showCodeEditor={false} />

            <h1> Content Type Tag </h1>
            <p>
                
                The content type tag is used to control the MIME type of the web page.
                MIME type is a standard way of describing the content of a file.
            </p>
            <CodeBlock onlyCode={true} code={`<meta http-equiv="Content-Type" content="text/html; charset=utf-8">`} language="html" showCodeEditor={false} />

            <h1> Refresh Tag </h1>
            <p>
                The refresh tag is used to control the number of seconds before the web page is refreshed.
            </p>
            <CodeBlock onlyCode={true} code={`<meta http-equiv="refresh" content="numerOfSeconds">`} language="html" showCodeEditor={false} />

            <h1>Conclusion </h1>
            <p>
                Overall, meta tags provide a way to add metadata to a web page that can be used by search engines, web browsers, and other tools to enhance the user experience and make the page more accessible. By using meta tags effectively, you can help to ensure that your web pages are more useful, informative, and engaging for your users.
            </p>
        </animated.div>
    )
}
