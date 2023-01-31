<h1>Components and Props</h1>

- React lets you define the UI into components.

- What are components? They are reusable pieces of code that are defined in functions and/or classes.

- In functions, the accept random inputs (props) that are manipulated to display the React elements on the screen.

- Why componets? It allows you to be more flexible when customizing the UI(the look and behaviour).

- The magic of components lies in their reusability. Components can rely on other components, so it makes sense to split them in different files. Components = reusability (which is the building block of the UI).

- You may choose to write components as functions or classes (which they are equivalent to each other). Reference: [componentsAndProps.jsx](componentsAndProps.jsx).

- To render a component, you may repersent them as user-defined elements, where the JSX attributes & children are passed as an object (props). Reference: [componentsAndProps.jsx](componentsAndProps.jsx).

- Components can refer to other components in their output. This known as abstraction, which use many components to serve many purposes. Reference: [componentsAndProps.jsx](componentsAndProps.jsx) from line 12.

- You can extract relatively compoments into smaller components that give relevant output according to their functions.

- NOTE: You must never modify props (they should be read only) unless it's required.
