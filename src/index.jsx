import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GloblaStyles from './styles/GloblaStyles';
import { themes } from './styles/themes';
import Home from './templates/Home';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={{ ...themes['default'] }}>
			<GloblaStyles />
			<Home />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
