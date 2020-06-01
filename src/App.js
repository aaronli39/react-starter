import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet"
import Welcome from "./components/Welcome"
import Hello from "./components/Hello"
import Message from "./components/Message"

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Message />
				{/* <Greet name="Aaron" occ="Software Engineer">
					<p>This is children props</p>
				</Greet>
				<Greet name="Merry" occ="Lawyer">
					<button>Button</button>
				</Greet>
				<Welcome name="Aaron" occ="Software Engineer"/>
				<Welcome name="Merry" occ="Lawyer"/>
				<Welcome name="Merry" occ="Lawyer"/> */}
			</div>
		);
	}
}

export default App;
