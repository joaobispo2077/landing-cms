import styled from 'styled-components';

const titleSize = {
	small: (theme) => theme.font.sizes.medium,
	medium: (theme) => theme.font.sizes.large,
	big: (theme) => theme.font.sizes.xlarge,
	huge: (theme) => theme.font.sizes.xhuge,
};

export const Title = styled.h1`
	color: ${({ theme, darken }) =>
		darken ? theme.colors.dark : theme.colors.light};
	font-size: ${({ size, theme }) => titleSize[size](theme)};
`;
