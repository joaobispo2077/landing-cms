import styled from 'styled-components';

export const Title = styled.h1`
	color: ${({ theme, darken }) =>
		darken ? theme.colors.dark : theme.colors.light};
`;
