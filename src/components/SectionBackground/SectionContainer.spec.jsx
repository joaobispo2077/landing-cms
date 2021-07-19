import { render, screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
// import { themes } from '../../styles/themes';

describe('<SectionBackground/>', () => {
	it('should render', () => {
		render(renderTheme(<SectionBackground>Texto</SectionBackground>));

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});
});
