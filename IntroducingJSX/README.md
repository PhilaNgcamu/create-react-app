# Introducing JSX

JSX - a syntax extension of JavaScript

Why use JSX?

- React uses a form of abstraction called separation of concerns - a term used to describe a design principle separate a computer program into distinct sections, while "hiding" the implementation of the program. Example, **Hello, World**, where "h1" is a syntax extension of JavaScript (JSX)

- You can put (embed) any valid JavaScript expression in JSX. Reference: [intro.jsx](intro.jsx).

- You can use JSX as an expression by assigning it to variables, as argument to functions, etc. Reference: [intro.jsx](intro.jsx).

- React DOM(all nodes are manipulated by React) uses camelCase property naming conventiom, which is consistent with JavaScript syntax. Reference: [intro.jsx](intro.jsx).

- To prevent XSS(cross-site-attacks), where embedded values in JSX are "escaped" to ensure that they are used only and never by external injection on the application. Reference: [intro.jsx](intro.jsx).

- React elements are objects that are used to construct the DOM and keep up to date. Note: Babel compiles down to the react elements, if they have an alternative to them. Reference: [intro.jsx](intro.jsx).

- Sometimes we may want to nest components like this: `<ParentComponent><ChildComponent /></ParentComponent>`. Reference: [intro.jsx](intro.jsx).

- NOTE: The purpose of JSX is to combine JavaScript knowledge with content on the web at the same time!
