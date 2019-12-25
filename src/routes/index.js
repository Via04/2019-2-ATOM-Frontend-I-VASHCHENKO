import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ListChats from '../components/chats/ListChats';
import ListMessages from '../components/messages/ListMessages';
import UserProfile from '../components/profile/profile';
// import styled from '@emotion/styled';

// import Header from '../components/Header';
// import CounterContainer from '../containers/CounterContainer';

// const Container = styled.div`
// text-align: center;
// `;
export const history = createBrowserHistory();

const Selected = () => {
	const { id } = useParams();
	return <ListMessages name={id.slice(1, id.length)} />;
};

function Routes() {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/">
					<ListChats />
				</Route>
				<Route path="/chats">
					<ListChats />
				</Route>
				<Route path="/message/:id">
					<Selected />
				</Route>
				<Route path="/profile">
					<UserProfile />
				</Route>
			</Switch>
		</Router>
	);
}

export default Routes;
