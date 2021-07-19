import { render, screen } from '@testing-library/react';
import { SectionContainer } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
// import { themes } from '../../styles/themes';

describe('<SectionContainer/>', () => {
	it('should render', () => {
		render(renderTheme(<SectionContainer>Texto</SectionContainer>));

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});
});
