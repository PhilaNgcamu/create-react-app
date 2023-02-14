<h1>Rendering Lists</h1>

- To render a single or multiple components from an array/collection of data, use JavaScript array methods, eg, `Array.map()`. Reference: [renderingLists.jsx](renderingLists.jsx).

- When building UI, you may need to show several instances/data of same component by using JavaScript array methods. Meaning, have declare a function/component that displays several data in a list.

- You may need keys for react to have a unique reference to a list. This is important because it will be easier to modify, sort, delete the list. Note that the keys must be unique. They must never be modified and should come from database (if possible) or from an object as an id (for example). They are not used as props but you may define your own prop to have those keys. Reference: [renderingLists.jsx](renderingLists.jsx).
