# Notes for Creating React Apps

* React is declarative(you tell React what you want and React makes it for you)
* React html files use a single div "root" to be able to display everything on a webpage by accessing and modifying that element
* all you really need in the src folder is "App.js" (what you render, the content), "index.js" (where all the code is for manipulating app.js)
* use Pascal case (uppercase first letter) for component names]
* multi-line return statements must be within parentheses

**React Components**
* an element
* single pieces that come together in the DOM "root" element
* reusable, can be used with different properties to display different things. a sidenav component can be made into left sidenav and right sidenav
* components can have other components, for example App component(the root) has all the other components in it
* component code are writtin in [component name].js files or [component name].jsx files
* **two component types**:
    * stateless functional component: **javascript functions**, return HTML code that describes the UI (`function Welcome(props) { return <h1> Hello, {props.name}</h1>`)
        * receieve properties(props) and returns HTML(jsx)
        * absence of `this` keyword
        * mainly responsible for UI
        * "stateless, dumb, presentational" components
    * stateful class component: *extends the React Component class, and **must** have a render method returning HTML*: `class Welcome extends React.Component { render() { return <h1>Hello {this.props.name} </h1>; } }`
    * also can take in prop inputs, but can also maintain private data (state)
    * complex UI logic
    * "stateful, smart, container" components
* components can use *hooks* to use `state`, don't need to write a class for it. now both functional and class components can use state
* in order to make a custom component recognized, you have to export it in the component code file, and import it in App
* a component can be rendered in App as an HTML tag with the name being the name of the component. If there is nothing between the tags, then it can be a self closing tab (`<Greet />`)
* when exporting a component as default, it can be imported with any name and still work, as long as the location of the component is correct. however, most people like to do **named exports**, in which u directly export the jsx code (`export const Greet = () => <h1> Hello world </h1>`). you **must** also important it as `{ Greet }`
* when making class components, **you must import `React` and `{ Component }` class**

**jsx (javascript XML)**
* an extensino to write XML-like code for elements and components
* JSX tags have tag name, attributes, and children
* JSX is **not** necessary to write React applications, but makes React code simpler and more elegant
* Ultimately, JSX is transpiled into pure Javascript
* `class` in HTML becomes `className` in JSX
* `for` in HTML becomes `htmlFor`

**props**
* are immutable

**props vs states**
* props get passed to component, while state is managed within component
* props are like function parameters, and state is like variable declarations
* `props`/`this.props` for using props in functional/class components, and `useState Hooks`/`this.state` for using state in functional/class components

**states**
* `this.setState()` accepts two parameters: an object, and then an optional callback parameter to execute callback code(React sets the state, and then comes back to execute it)
* whenever you have code to be executed after using `this.setState()`, you must put it as a function in the callback parameter of `this.setState()` to make sure it is handled after it
* when there are multiple `this.setState()` calls, React groups them together into a single call to better performance. In order to make multiple calls to the same function in a setState, you must pass the function as the parameter instead of setting the state value directly. the function **must** have a `prevState` variable since the function has access to the previous state. `props` can be the second parameter of the function for setState 
* you can **destructure** props in a `render()` method so that you only get the values you want

**event handling**
* in React, the event handler (eg. `onclick`) must be passed as a function, not a function call. In other words, do not use parentheses
* React uses event binding purely because of how the `this` keyword operates in javascript, not how React works
* **use arrow function syntax** if you want to pass parameters from the child to the parent

* if possible, avoid using index as a key in map functions
* `<React.Fragment></React.Fragment>` allows us to return multiple HTML elemenst without inserted it into an enclosing `<div>` tag. Usiong fragments also allows the fragmented component/JSX to be directly rendered as HTML under the correct parent element(eg. `<td></td>` tag will be under `<tbody></tbody>` tag). **Use** `<> </>` as shorthand for React fragments, but you **cant** use key as an attribute

**PureComponents**
* pure components use a shallow props/state
    * shallow means that comparison is same in value and in type for primitives, if they are complex types, a shallow comparison is true if they reference the same exact item
* regular components will always re-render, but purecomponents only render if a shallow comparison is true, or if the value actually changes
* only work in class based components

**react memo**
* functional component's purecomponent
* to make a functional component a memo, just export the component as a parameter of `React.memo()`

**react portals**
* allows you to manipulate nodes outside of the DOM, so you can render components onto a DOM node not under the div root
* `ReactDOM.createPortal({JSX}, {getElementById})`
* sometimes its easier to insert a child component into another DOM location, so this is where portals comes in

**higher order component (HOC)**
* pattern where a function takes a component as an argument and returns a new component
* u pass in a component and the higherOrderComponent function would return a new component

**render props**
* a technique for sharing code between React components using a prop whose value is a function

**react contexts**
* provides a way to pass data through the component tree without having the pass the props down manually one by one in the component chain
* you need 3 steps to use contexts:
    * 1) you need to make a context file (exampleFile.js), in which you need to create a consumer(`React.createConsumer`) and a provider (`React.createProvider`), and **export** them
    * 2) in the provider (usually `App.js`), you need enclose the parent component within the context component, and pass in a prop value
    * 3) in the consumer (the component you want to use the context value in), you need to use the `exampleConsumer` component in which you define an arrow function that takes in the prop name as a parameter, and then return **valid** JSX that will become the page content
* you can provide a default value as a parameter for `React.createContext` in order to set a default method for the consumer component that doesnt have a matching provider
* you can also use contexts with using `Component.contextType = exampleContext`, where exampleContext is the context file, which is exported, and then imported into the component. This allows you to access the context value with `this.context`
    * limitation is that you can only use one context field, and this only works with **class** components
  
