import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useParams
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Cities from '../components/cities';
import SelectedCity from "../components/SelectedCity";

export const history = createBrowserHistory();

function Child() {
	const { id } = useParams();
	return(
		<SelectedCity name={id}/>
	);
}

export default function Routes() {
	return(
		<Router>
			<Switch>
				<Route exact path="/">
					<Cities/>
				</Route>
				<Route path="/:id/">
					<Child/>
