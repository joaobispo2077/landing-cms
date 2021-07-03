import { createGlobalStyle } from 'styled-components';

const GloblaStyles = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
}

/* body {
	background: ${({ theme }) => theme.colors.mainBg};
} */
`;

export default GloblaStyles;
