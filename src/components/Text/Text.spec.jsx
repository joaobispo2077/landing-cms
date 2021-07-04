import { render, screen } from '@testing-library/react';
import { Text } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
// import { themes } from '../../styles/themes';

describe('<Text/>', () => {
	it('should render', () => {
		render(renderTheme(<Text>Texto</Text>));

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});
});
