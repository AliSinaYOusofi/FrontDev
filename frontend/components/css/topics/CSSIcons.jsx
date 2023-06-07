import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function CSSIcons() {
    return (
        <div>
            <h1> CSS Icons </h1>
            <p>
                Icons are a great way to improve the appearance of your website or application. They are visually appealing and can be used for various purposes such as highlighting important features, making navigation easier, and providing visual cues. In this blog post, we'll explore how to use CSS icons and how to incorporate Google Icons and Font Awesome icons into your website design.
            </p>

            <h2> Google Icons </h2>
            <p>
                Google Icons is a free icon library provided by Google. These icons are vector graphics, which means they are resolution-independent and can be scaled to any size without losing quality. You can access the icons by using a {"<link>"} tag to include the Google Icons stylesheet in your HTML document.
            </p>

            <p>
                Let's use the following code to add a Google Icon to your website.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>My Google Icon Example</title>
        <link rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </head>
    <body>
        <i class="material-icons">face</i>
        <i class="material-icons">phone</i>
        <i class="material-icons">facebook</i>
        <i class="material-icons">home</i>
        <i class="material-icons">info</i>
        <i class="material-icons">edit</i>
        <i class="material-icons">menu</i>
        <i class="material-icons">search</i>
        <i class="material-icons">delete</i>
        <i class="material-icons">shopping_cart</i>
    </body>
</html>
            `}
            language="html"
            showCodeEditor={true}
            />

            <p>
                In this code example, we've added the Google Icons stylesheet to our HTML document using the {"<link>"} tag. We can then use the {"<i>"} tag with the class attribute set to material-icons to include an icon. In this example, we've added the face icon. There are hundreds of other icons to choose from.
            </p>

            <h2> CSS bootstrap icons </h2>
            <p> Bootstrap is a popular front-end web development library, and Bootstrap Icons is a free collection of 500+ vector icons that can be used in Bootstrap and other web projects. The icons are SVGs, so they are resolution-independent and can be customized with CSS.</p>

            <p>
                To use Bootstrap Icons in your project, you can download the SVG files and include them in your HTML code like this:
            </p>

            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>Bootstrap Icon Examples</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    </head>
    <body>
        <i class="glyphicon glyphicon-cloud"></i>
        <i class="glyphicon glyphicon-remove"></i>
        <i class="glyphicon glyphicon-user"></i>
        <i class="glyphicon glyphicon-envelope"></i>
        <i class="glyphicon glyphicon-thumbs-up"></i>
    </body>
</html>
            `}
            language="html"
            onlyCode={true}
            />


            <h2> FontAwesome Icons </h2>
            <p>
                FontAwesome Icons is another popular icon library that includes over 7,000 icons. Like Google Icons, these icons are vector graphics and can be scaled without losing quality.
            </p>

            <p>
            To use FontAwesome Icons on your website, you need to include the FontAwesome stylesheet in your HTML document. You can download it from the 
                <a href="https://fontawesome.com/v5.15/icons?d=gallery">FontAwesome Icons Gallery</a>
            </p>

            <p>
                Let's add a FontAwesome icon to our website.
            </p>
            <CodeBlock
            code={`
<!DOCTYPE html>
<html>
    <head>
        <title>My FontAwesome Icon Example</title>
        <link rel="stylesheet" href="path/to/fontawesome/css/fontawesome.css" />
        <link rel="stylesheet" href="path/to/fontawesome/css/brands.css" />
    </head>
    <body>
        <i class="fas fa-heart"></i>
        <i class="fas fa-car"></i>
        <i class="fas fa-facebook"></i>
    </body>
</html>
            `}
            language="html"
            onlyCode={true}
            />

            <p>
                This code includes the FontAwesome stylesheet in the head of our HTML document using the {"<link>"} tag. We can use the {"<i>"} tag with the class attribute set to fas fa-heart to include a heart icon.
            </p>

            <h1> Conclusion </h1>
            <p>
                CSS icons, Google Icons, and FontAwesome Icons are great ways to add visual interest to your website or application. You can create your own CSS icons or use icon libraries like Google Icons or FontAwesome Icons to quickly and easily add icons. By adding icons, you can make your website more user-friendly and visually appealing.
            </p>
        </div>
    )
}
