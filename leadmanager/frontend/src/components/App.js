import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import { HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Dashboard from './leads/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';
import Chat from './Chat';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import { loadUser } from '../actions/auth';

class App extends Component {
	componentDidMount() {
		store.dispatch(loadUser());
	}
	render() {
		return(
			<Provider store={store}>
				<Router>
						<Fragment>
							<Header />
							<div className="container">
							
								<Switch>
									<PrivateRoute exact path="/" component={Dashboard} />
									<Route exact path="/register" component={Register} />
									<Route exact path="/login" component={Login} />
								</Switch>
								<Chat />
							</div>
						</Fragment>
				</Router>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
