import { render } from '@testing-library/react';
import { GridSection } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
import mock from './mock';

describe('<GridSection/>', () => {
	it('should match with snapshot', () => {
		const { container } = render(renderTheme(<GridSection {...mock} />));

		expect(container).toMatchSnapshot();
	});
});
