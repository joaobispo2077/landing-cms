import styled, { css } from 'styled-components';

const titleSize = {
	small: (theme) => theme.font.sizes.medium,
	medium: (theme) => theme.font.sizes.large,
	big: (theme) => theme.font.sizes.xlarge,
	huge: (theme) => theme.font.sizes.xhuge,
};

const getMediaFont = (theme) => css`
	@media (${theme.media.lteMedium}) {
		font-size: ${theme.font.sizes.small};
		background: red;
	}
`;

const titleCase = (uppercase) => css`
	text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
	color: ${({ theme, darken }) =>
		darken ? theme.colors.dark : theme.colors.light};
	font-size: ${({ size, theme }) => titleSize[size](theme)};

	${({ uppercase, theme }) => css`
		${titleCase(uppercase)}
		${getMediaFont(theme)}
	`};
`;
