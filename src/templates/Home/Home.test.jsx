import { render } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/themes/renderTheme';

describe('<Home />', () => {
	test('should render Home', () => {
		render(renderTheme(<Home />));
	});
});
