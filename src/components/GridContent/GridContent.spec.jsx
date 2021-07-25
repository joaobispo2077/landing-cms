import { render, screen } from '@testing-library/react';
import { GridContent } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
// import { themes } from '../../styles/themes';

describe('<GridContent/>', () => {
	it('should render', () => {
		render(renderTheme(<GridContent>Texto</GridContent>));

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});
});
