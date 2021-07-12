import { render, screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
// import { themes } from '../../styles/themes';

describe('<MenuLink/>', () => {
	it('should render', () => {
		render(renderTheme(<MenuLink>Texto</MenuLink>));

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});
});
