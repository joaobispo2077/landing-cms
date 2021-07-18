import { render, screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
// import { themes } from '../../styles/themes';

describe('<LogoLink/>', () => {
	it('should render', () => {
		render(renderTheme(<LogoLink>Texto</LogoLink>));

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});
});
