<!--
==================================================================
  DIBS METHODS MEETINGS — Markdown TEMPLATE
==================================================================

WHAT IS THIS FILE FOR?
This file is the published version of your talk —
this is literally what goes on the website.

HOW TO USE THIS FILE:
  1. Copy this template.
  2. Fill in the front matter (the block between the two `------` lines)
     and write your content below it.
  3. Structure the headings as you see fit to meet your talks needs.
  4. Preview locally if you can using VS code.
-->
---
<!-- Title of your talk, in quotes. -->
title: "Your Tutorial Title Here"

<!-- Your first name, all lowercase, no spaces (e.g., kevin, anne, allie). -->
author: yourname

<!-- One or more topic tags, comma-separated, inside the brackets.
     Categories already in use on the site (reuse one of these where
     it fits, so filtering/search stays useful — feel free to add a
     new one if none of these fit):
       journal club, machine learning, math, modeling, neuroscience,
       professional development, programming, psychology,
       signal processing, statistics, tutorial
     Example: categories: [ statistics, tutorial ] -->
categories: [ tutorial ]

<!-- Path to a preview/thumbnail image. Put the file in assets/images/YYYY-MM-DD-your-post-name/
     and point to it relative to the site root (no leading /):
    image: assets/images/YYYY-MM-DD-your-post-name/thumbnail.png -->
image: assets/images/YYYY-MM-DD-your-post-name/thumbnail.png
<!-- Ps, ideally, your thumbnail image will be representative of your tutorial, and will have a rectangular shape (in landscape orientation); or square shape, if rectangular doesn't work well. 
Also, YYYY-MM-DD refers to the date in which you will give (or have given) your talk. -->


<!-- Set to true to feature this in the highlighted section on the homepage. Most posts leave this false. -->
featured: false

hidden: false

---

<!--
==================================================================
  YOUR CONTENT STARTS HERE
  Everything below is a suggested skeleton — add, remove, and
  reorder freely. This is standard markdown; see
  https://dibsmethodsmeetings.github.io/markdown/
  and https://dibsmethodsmeetings.github.io/markdown-hints/
  if you want a refresher on formatting (bold, tables, code blocks,
  images, etc).

  The format exemplified below is just one potential version 
  of a talk. You may prefer to have more of a tutorial, in which 
  case, you can replace the outline/headers with steps and take it
  from there.
==================================================================
-->

# Introduction

A short motivating paragraph goes here. What question or problem
does this method/topic address, and why should the audience care?

Optional: an outline of what you'll cover, e.g.,:

- [What is X?](#what-is-x)
- [When should you use it?](#when-to-use-it)
- [How it works](#how-it-works)
- [Example](#example)
- [Common pitfalls](#pitfalls)
- [Further reading](#further-reading)

<!-- Ps, adding the squared brackets around the section title, along with a hashtag in parenthesis, makes it so that the outline is hyperlinked to each section. That is, if you click on one of the section names in the outline, you will be taken directly to that section in that blog post. -->

--------------------------------------

# What is X?

Explain the core idea in plain language.

# When should you use it?

- Situation where this is a great fit
- Situation where it isn't, and what to use instead

# How it works

Go into as much depth as suits your audience. You can include:

- **Images**: put files in `assets/images/YYYY-MM-DD-your-post-name/`
  and reference them like this:
  `<img src="../assets/images/YYYY-MM-DD-your-post-name/image-name.png" alt="Brief description">`
  <!-- The brief description is read by screen readers, and shown when people hover their mouse over the image. You can add many other parameters into the <img> tag (e.g., style, width) 
  Again, YYYY-MM-DD refers to the date in which you will give (or have given) your talk. -->

- **Code blocks**, with syntax highlighting if you name the language:
  ````
  ``` python
  print("hello world")
  ```
  ````
  Such that it appears like this:
  ``` python
  print("hello world")
  ```
- **Links**: `[link text](https://example.com)`
- **Tables**, bold/italic text, block quotes — see the markdown hints posts linked above for examples of all of these.
- **Mathematical Formulas,** which must start with a double dollar sign. For instance:

  > \$$\begin{align*}
  > \pi &= \textrm{logit}^{-1}(\mu^*-\kappa)
  > \end{align*}$$

  would be shown as:

 $$\begin{align*}
\pi &= \textrm{logit}^{-1}(\mu^*-\kappa)
\end{align*}$$

# Example

Walk through a concrete example, worked problem, or case study.

<!-- Ideally, it is useful to use the content from previous sections to go through the example. For instance, if you had a specific code block, it'd be helpful to see how that code could be modified and applied to the example in hand.>

# Common pitfalls

- A mistake people commonly make
- A misconception worth correcting

# Further reading

- [Link to a paper, textbook chapter, or documentation](https://example.com)
- [Another related DIBS Methods Meetings post](https://dibsmethodsmeetings.github.io/)

--------------------------------------

Questions, corrections, or want to learn more? Feel free to reach
out to me at <a href="mailto:you@duke.edu">you@duke.edu</a>.
