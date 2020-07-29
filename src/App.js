import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
import Navigation from './Nav';
import ListPages from './Page/list';
import CreatePage from './Page/create';
import ViewPage from './Page/view';

const App = () => (
	<main>
		<Router basename={process.env.PUBLIC_URL}>
			<Navigation />
			<Switch>
				<Route exact path="/">
					<ListPages />
				</Route>
				<Route path="/view">
					<ViewPage />
				</Route>
				<Route path="/edit">
					<CreatePage/>
				</Route>
				<Route path="/create">
					<CreatePage create/>
				</Route>
			</Switch>
		</Router>
	</main>
);



export default App;