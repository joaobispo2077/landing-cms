import { render } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/themes/renderTheme';

test('Home', () => {
	render(renderTheme(<Home />));
});
