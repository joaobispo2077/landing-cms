import { createGlobalStyle } from 'styled-components';

const GloblaStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 62.5%;
	}

	body {
		font-size: 1.6rem;
		font-family: ${({ theme }) => theme.font.family.primary};
	}

	h1, h2, h3, h4, h5, h6 {
		font-family:${({ theme }) => theme.font.family.secondary};
	}



`;

export default GloblaStyles;
