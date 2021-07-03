import styled from 'styled-components';

export const Title = styled.h1`
	color: ${({ theme, lighther }) =>
		lighther ? theme.colors.light : theme.colors.dark};
`;
