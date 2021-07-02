import { render, screen } from '@testing-library/react';
import Home from '.';
import { themes } from '../../styles/themes';
import { renderTheme } from '../../styles/themes/renderTheme';

test('Home', () => {
	render(renderTheme(<Home />));

	const headingContainer = screen.getByRole('heading', {
		name: 'Hello',
	}).parentElement;

	expect(headingContainer).toHaveStyle({
		background: themes['default'].colors.secondaryBg,
	});

	expect(headingContainer).toHaveStyleRule('background', 'blue');

	expect(headingContainer).toMatchSnapshot();
});
