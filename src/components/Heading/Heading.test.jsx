import { render, screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
import { themes } from '../../styles/themes';

describe('<Heading />', () => {
	it('should render with default values', () => {
		render(renderTheme(<Heading>texto</Heading>));
		expect.assertions(2);

		const heading = screen.getByRole('heading', { name: 'texto' });
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveStyle({
			color: themes['default'].colors.light,
			'font-size': themes['default'].font.sizes.xhuge,
			'text-transform': 'none',
		});
	});

	it('should render with darken color', () => {
		render(renderTheme(<Heading darken>texto</Heading>));

		const heading = screen.getByRole('heading', { name: 'texto' });
		expect(heading).toHaveStyle({
			color: themes['default'].colors.dark,
		});
	});
});
