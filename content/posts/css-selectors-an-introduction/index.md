---
title: "CSS Selectors: An Introduction"
description: "An introduction to the basic CSS selectors"
author: "William Neild"
date: 2020-05-12T12:24:49+01:00
draft: false
ShowToc: true
cover:
    image: thumbnail.png
---

If you’ve ever used CSS, you should already know about selectors but in case you’ve forgotten, you need a refresher or
you have no idea what I’m talking about, I’ll explain what they are and how to use them.

### What are selectors?

Selectors are quite easy to understand in concept. They select one or more elements conditionally based upon what you
tell it to do and as a result, the styles that you write after the selector will be applied to the HTML element or
elements that the selector relates to.

```css
/* The 4 basic CSS selectors */

*             /* Wildcard selector */
p             /* Element selector */
.classname    /* Class selector */
#thing        /* ID selector */
```

For example, the above selectors are some of the basic ones that you’ll probably come across when first learning CSS so
in this first technical post of mine, I will be explaining these but in the future, I will be writing about some of the
more advanced CSS selectors such as pseudo selectors.

Here are the selectors that I’m going to be talking about in this post:

| Selector | Example    | Description                               |
| -------- | ---------- | ----------------------------------------- |
| Wildcard | \*         | Selects all elements                      |
| Element  | p          | Selects all &lt;p&gt; elements            |
| Class    | .heading   | Selects all elements with class="heading" |
| Id       | #firstname | Selects the element with id="firstname"   |

### Wildcard selector

The wildcard selector (also referred to as being the Universal selector) will select all elements within its scope.

```css
/*
    A common use case is for browser resets
    This will remove the default margin and padding for all elements
*/

* {
    margin: 0;
    padding: 0;
}
```

Although this can be a useful selector, it’s usually classed as being bad practice and recommended to not be used. This
is due to CSS specificity and performance. Using the wildcard selector means that you will be applying the styling
specified to all child elements indiscriminately which as a result, makes it harder on yourself (and to others who may
be maintaining your CSS in the future) to apply styling to individual elements.

However, as with most ‘good’ and ‘bad’ practices, this is to be taken with a pinch of salt as there are edge cases to
consider when using CSS so don’t take them as law.

### Element Selector

An element selector (can also be called a type selector) matches elements on the basis of tag names.

```css
/* An example of using an element selector to style paragraphs */

p {
    font-size: 18px;
    color: red;
    font-style: italic;
}
```

Take the example above, here we are selecting all of the paragraph elements on the page, and for some reason, we have
decided to turn them all red, make them italic and font size of 18px.

Okay, so knowing about CSS selectors doesn’t necessarily mean that you’ll be able to make things look beautiful but its
a start!

### Class Selector

Next up is going to be our most commonly used selector, the class selector. Class selectors consist of a dot prefixed
before the class name. The class name is defined in the class attribute in an HTML element and multiple elements are
allowed to have the same class name. As a result, the class selector matches all HTML elements with the same class
name.

```css
/* Three example CSS classes */

.center {
    text-align: center;
}

.large {
    font-size: 400%;
}

.red {
    color: red;
}
```

In the above example, we have defined three CSS classes that we can use to style elements which have those classes in
their class attributes.

```html
<!-- An assortment of paragraphs being styled using the HTML class attribute -->

<p>This is a regular unstyled paragraph</p>

<p class="large">
    This is a large paragraph
</p>

<p class="red">
    This is a red paragraph
</p>

<p class="large red center">
    This is a large, red and center aligned paragraph
</p>
```

Furthermore, each HTML element isn’t limited to having only one class, it can have as many as it wants.

### Id Selector

Finally, the Id selector is the most specific selector. This means that it should only relate to a single element in
the document. The Id selector consists of a hashtag prefixed before the id name of the HTML element.

```css
/* An example showing the use of an ID selector */

#introduction {
    color: green;
    font-size: 20px;
    text-transform: capitalize;
}
```

Furthermore, the Id selector is used very similarly to the Class selector mentioned above but instead of using the
class attribute in HTML, we use the id attribute, as shown below.

```html
<!-- A paragraph element being styled using the HTML Id attribute -->

<p id="introduction">
    This is a paragraph which has some introduction text
    and will only be used once in this page
</p>
```

### Conclusion

In conclusion, CSS selectors are pretty easy to get your head around and are a very powerful tool for web designers if
handled properly. If you enjoyed this post and found it useful, leave a comment or a reaction below.

Thanks for reading!
