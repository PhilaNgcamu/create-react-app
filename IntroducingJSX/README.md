# Introducing JSX

JSX - a syntax extension of JavaScript

Why use JSX?

- React uses a form of abstraction called separation of concerns - a term used to describe a design principle separate a computer program into distinct sections, while "hiding" the implementation of the program. Example, **Hello, World**, where "h1" is a syntax extension of JavaScript (JSX)

- You can put (embed) any valid JavaScript expression in JSX. Reference: [intro.jsx](intro.jsx) from line 4.

- You can use JSX as an expression by assigning it to variables, as argument to functions, etc. Reference: [intro.jsx](intro.jsx) from line 16.

- React DOM(all nodes are manipulated by React) uses camelCase property naming conventiom, which is consistent with JavaScript syntax. Reference: [intro.jsx](intro.jsx) from line 24.

- To prevent XSS(cross-site-attacks), where embedded values in JSX are "escaped" to ensure that they are used only and never by external injection on the application. Reference: [intro.jsx](intro.jsx) from line 37.
