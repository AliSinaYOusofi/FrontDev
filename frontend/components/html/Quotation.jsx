"use client";

import React from 'react'
import CodeBlock from '../Code Block/CodeBlock'
import useSlideAnimation from '@/hooks/useSlideAnimation'
import { animated } from '@react-spring/web';

export default function Quotation() {

    const [spring, api] = useSlideAnimation();

    return (
        <animated.div style={spring} key={spring.key}>
            <h1> HTML Quotation</h1>
            <p>
                When quoting someone or citing an external source in a webpage, 
                web developers use HTML quotation tags to display the quote in the intended format. 
                These tags not only help in displaying the quote in a 
                defined manner but also assist in making web pages semantic.
            </p>

            <h1 className="mt-10"> Blockquote Tag {"(<blockquote>)"}: </h1>
            <p>
                The {"<blockquote>"} tag is used for longer direct quotes that take up several lines 
                on a page. This tag signifies that the block of text is a separate and 
                independent passage, placed in contrast to the surrounding text, text which 
                is typically indented to separate it from the other content. Most browsers also 
                provide a default rendering of 
                blockquote tag with left and right margins and smaller font size.
            </p>
            <CodeBlock
            code={`
    <blockquote>
        The expert in anything was once a beginner.
        <cite>— Helen Hayes</cite>
    </blockquote>`}
            language="html"
            showCodeEditor={true}
            />

            <h1 className="mt-10"> Quotation Tag {"(<q>)"}:</h1>
            <p>
            The {"<q>"} tag is meant for short quotes and provides quotation marks around 
                the text when rendered in a browser. The rendering can vary in different browsers, 
                but most often, it shows quotes around the text.
            </p>
            <CodeBlock code={`  <p>The saying goes, <q>Truth is stranger than fiction.</q></p>`}
                language="html"
                showCodeEditor={true}
            />

            <h1 className="mt-10">Abbreviation Tag {"(<abbr>)"}</h1>
            <p>
                The {"<abbr>"} tag defines an abbreviation. It typically displays 
                the abbreviation as underlined and with dotted border when 
                the mouse is over an abbreviation. 
                It is beneficial for accessibility purposes.
            </p>
            <CodeBlock code={`
    <p>
        <abbr title="HyperText Markup Language">HTML</abbr> is the standard markup language for creating web pages.
    </p>`}
            language={'html'}
            showCodeEditor={true}
            />

            <h1 className="mt-10"> Address Tag {"(<address>)"}</h1>
            <p>The {"<address>"} tag is used to present contact information for an author or owner of a document or an article. If used inside {"<footer>"} or {"<article>"} elements it provides contact information for that particular content.</p>
            <CodeBlock
            code={`
    <address>
        Written by <a href="mailto:john@example.com">John Doe</a> <br>
        Visit us at:<br>
        Example.com<br>
        123 Main Stree Super City, CA 
    </address>`}
            language="html"
            showCodeEditor={true}
            />

            <h1 className="mt-10"> Citation Tag {"(<cite>)"}</h1>
            <p>The {"<cite>"} tag is used to cite a reference to a creative work, such as a book or movie. It represents the title of the work which is being referenced. Some browsers put it in italics, and the tag provides semantic value to the text.</p>
            <CodeBlock
            code={`<p><cite>A Tale of Two Cities</cite> is a novel by Charles Dickens.</p>`}
            language="html"
            showCodeEditor={true}
            />

            <h1 className="mt-10"> Bi-Directional Override Tag {"(<bdo>)"}</h1>
            <p>
                The {"<bdo>"} tag is used to override the direction of the text, 
                which could be reversed from the default if the language, such as Arabic or 
                Hebrew, is right-to-left. The tag provides developers with options to keep text 
                in a specific direction, even when other 
                language text is present in the HTML document.
            </p>
            <CodeBlock
            code={`<p><bdo dir="rtl">Hebrew text that should be right-to-left.</bdo> This text should be left-to-right. <bdo dir="rtl">More Hebrew text.</bdo></p>`}
            language="html"
            showCodeEditor={true}
            />

            <h1 className="mt-10"> The {"<del>"} </h1>
            <p>
                The {"<del>"} tag is used to mark text that has been deleted.
                It is used to indicate that a piece of text has been deleted.
            </p>
            <CodeBlock
            code={`<p>This text is <del>deleted</del>.</p>`}
            language="html"
            showCodeEditor={true}
            />

            <h1 className="mt-10"> The {"<ins>"} </h1>
            <p>
                The {"<ins>"} tag is used to mark text that has been inserted.
            </p>
            <CodeBlock
            code={`<p>This text is <ins>inserted</ins>.</p>`}
            language="html"
            showCodeEditor={true}
            />

            <h1 className="mt-10"> The {"<samp>"} tag</h1>
            <p>
                The {"<samp>"} tag is used to mark text that is a sample of a piece of text.
            </p>
            <CodeBlock
            code={`<p>This text is a sample of a piece of text.</p>`}
            language={'html'}
            showCodeEditor={true}
            />

            <h1 className="mt-10"> Conclusion</h1>
            <p>
            In conclusion, HTML quotation tags play a significant role in structuring web pages and making them semantic. Developers should use them to ensure that their web pages are accessible, professional, and easily understood by users.
            </p>
        </animated.div>
    )
}
