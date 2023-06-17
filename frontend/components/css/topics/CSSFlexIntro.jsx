import React from 'react'

export default function CSSFlexIntro() {

    return (
        <div>
            <h1> CSS Flexbox</h1>
            <p>
                The Flexible Box Layout, also known as Flexbox, is a CSS3 layout module that allows you to create flexible and responsive layouts with ease. By using a set of properties, you can create powerful and complex layouts that can adapt to different screen sizes and devices.
            </p>

            <p>
                Flexbox is especially useful for creating layouts that need to be flexible, such as web applications that have a lot of user interface elements or designs that need to change based on screen size. In this blog post, we'll explore some of the basic concepts behind Flexbox and how it can help you create responsive and flexible designs.
            </p>

            <h1> Flex Containers and Flex Items </h1>
            <p>
                In Flexbox, there are two main concepts you need to understand: flex containers and flex items.
            </p>

            <p>
                A flex container is an element that has been set as a flex container using the display property. This means that the children of the container can be laid out using Flexbox.
            </p>

            <p>
                A flex item is any child element of a container that has been set as a flex container. Each flex item can have its own set of properties to control its position, size, and alignment.
            </p>

            <h1> The Flexbox Axis </h1>
            <p>
                One crucial concept to understand in Flexbox is the concept of the Flexbox axis. There are two axes in Flexbox, the main axis and the cross axis.
            </p>

            <p>
                The main axis is the axis along which the flex items are laid out, and the cross axis is the axis perpendicular to the main axis. By default, the main axis is horizontal, and items are laid out in a row. However, you can change the main axis to a vertical axis, so items are laid out in a column.
            </p>

            <h2> Flexbox Properties </h2>
            <p>
                Here are some common Flexbox properties:
            </p>

            <ul className="ml-10 list-disc">
                <li> display: This property sets the element as a flex container.</li>
                <li> flex-direction: This property controls which direction the main axis flows.</li>
                <li> justify-content: This property controls how the main axis is justified.</li>
                <li> align-items: This property controls how the cross axis is aligned.</li>
                <li> align-content: This property controls how the cross axis is aligned.</li>
                <li> flex-wrap: This property controls whether the flex items are laid out in a single line or multiple lines.</li>
                <li> flex-grow: This property controls how much the flex item grows relative to the rest of the flex items in the container.</li>
                <li> flex-shrink: This property controls how much the flex item shrinks relative to the rest of the flex items in the container.</li>
            </ul>

            <h1> Conclusion </h1>
            <p>
            In conclusion, Flexbox is a powerful layout module in CSS3 that allows you to create flexible and responsive layouts for your website or web applications. By using Flexbox, you can create more sophisticated designs that adapt to different screen sizes and devices.
            </p>
        </div>
    )
}
