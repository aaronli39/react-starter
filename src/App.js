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
import UserGreeting from './components/UserGreeting';
import List from './components/List';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import "./appStyles.css" // normal css file, can be used in child components, can cause conflicts
import styles from "./appStyles.module.css" // importing css module, cannot be used in child components, uses class syntax
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counters from './components/Counters';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				
				{/* <UserProvider value="Aaron">
					<ComponentC />
				</UserProvider> */}
				{/* <Counters>
					{(count, handleIncrement) => (
						<ClickCounterTwo count={count} handleIncrement={handleIncrement} />
					)}
				</Counters>
				<Counters>
					{(count, handleIncrement) => (
						<HoverCounterTwo count={count} handleIncrement={handleIncrement} />
					)}
				</Counters> */}

				{/* <ClickCounterTwo />
				<HoverCounterTwo /> */}
				{/* <User render={(isLoggedIn) => isLoggedIn ? "Aaron" : "guest"} /> */}
				{/* <ClickCounter name="aaron"/>
				<HoverCounter /> */}
				{/* <ErrorBoundary>
					<Hero heroName="batman" />
				</ErrorBoundary>
				<ErrorBoundary>
					<Hero heroName="superman" />
				</ ErrorBoundary>
				<ErrorBoundary>
					<Hero heroName="joker" />
				</ErrorBoundary> */}
				{/* <PortalDemo /> */}
				{/* <FRParentInput /> */}
				{/* <FocusInput /> */}
				{/* <RefsDemo /> */}
				{/* <ParentComp /> */}
				{/* <Table /> */}
				{/* <FragmentDemo /> */}
				{/* <LifeCycleA /> */}
				{/* <Form /> */}
				{/* <h1 className="error">Error</h1>
				<h1 className={styles.success}>Success</h1>
				<Inline /> */}
				{/* <Stylesheet	primary={true}/> */}
				{/* <List /> */}
				{/* <UserGreeting /> */}
				{/* <ParentComponent /> */}
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
