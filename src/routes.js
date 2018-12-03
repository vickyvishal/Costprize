import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';

import App from './components/app';
import Login from '/components/login'

export default (
	<Route path='/' component={App} >
		<Route path='/login' component={Login}/>
	</Route>
);