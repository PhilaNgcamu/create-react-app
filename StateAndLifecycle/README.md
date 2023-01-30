<h1>State and Lifecycle</h1>

- Ideally, we want to give the component full control on how it updates the UI with depending on other smaller functions in order to achieve encapsulation (hiding values in a class). That's where classes come in. Reference: [stateAndLifecycle.jsx](stateAndLifecycle.jsx).

- Defining methods in a class allows us the add new features in a class, where our goal is to render, `<Component />`. Reference: [stateAndLifecycle.jsx](stateAndLifecycle.jsx).

- It's important that components may not reuse some pieces of code after at some point. There for we should have them as a _burden_ to on the component. To solve this, we shall use methods called **lifecyle Methods**. For example, we can "mount" (set up a timer) that is rendered in the DOM and then we can "unmount" (clear the timer). Reference: [stateAndLifecycle.jsx](stateAndLifecycle.jsx).

- The react component has the state to re-render the component according to its argument. This simply means that the component has a method which updates the UI under a condition: Reference: [stateAndLifecycle.jsx](stateAndLifecycle.jsx).

- NOTE: use `this.state` in the constructor only and use `this.setState(...)` in any method to re-render the component.

- React may use `this.setState({...})` calls into a single update (updated asynchronously) due to perfomance, which we may not want in this case. To fix this, use a function (rather than an object) as an argument in `this.setState()` to "control" the time whereby it takes in the state and other parameter(s) to update at that time. Reference: [stateAndLifecycle.jsx](stateAndLifecycle.jsx).

- NOTE: The state updates are merged into the current state using `this.setState(...)` calls.
