import React from 'react';
import ReactDOM from 'react-dom';
import GloblaStyles from './styles/GloblaStyles';
import Home from './templates/Home';

ReactDOM.render(
	<React.StrictMode>
		<GloblaStyles />
		<Home />
	</React.StrictMode>,
	document.getElementById('root'),
);
