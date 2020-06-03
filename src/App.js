import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet"
import Welcome from "./components/Welcome"
import Hello from "./components/Hello"
import Message from "./components/Message"
import Counter from "./components/Counter"
import FunctionClick from "./components/FunctionClick"
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<ParentComponent />
				{/* <EventBind /> */}
				{/* <FunctionClick />
				<ClassClick /> */}
				{/* <Counter /> */}
				{/* <Message /> */}
				{/* <Greet name="Aaron" occ="Software Engineer">
					<p>This is children props</p>
				</Greet>
				<Greet name="Merry" occ="Lawyer">
					<button>Button</button>
				</Greet> */}
				{/* <Welcome name="Aaron" occ="Software Engineer"/>
				<Welcome name="Merry" occ="Lawyer"/>
				<Welcome name="Merry" occ="Lawyer"/> */}
			</div>
		);
	}
}

export default App;
