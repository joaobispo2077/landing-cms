import { render, screen } from '@testing-library/react';
import { NavLink } from '.';
import links from './mock';
import { renderTheme } from '../../styles/themes/renderTheme';
// import { themes } from '../../styles/themes';

describe('<NavLink/>', () => {
	it('should render', () => {
		render(renderTheme(<NavLink links={links}>Texto</NavLink>));

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});
});
