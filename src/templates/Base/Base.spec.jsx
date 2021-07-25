import { render } from '@testing-library/react';
import { Base } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';

import mock from './mock';

describe('<Base/>', () => {
	it('should render', () => {
		const { container } = render(renderTheme(<Base {...mock} />));

		expect(container).toMatchSnapshot();
	});
});
