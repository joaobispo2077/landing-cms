import { render, screen } from '@testing-library/react';
import { Text } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
import { themes } from '../../styles/themes';

describe('<Text/>', () => {
	it('should render', () => {
		render(renderTheme(<Text>Texto</Text>));

		expect(screen.getByText('Texto')).toBeInTheDocument();
	});

	it('should have correct size', () => {
		const { container } = render(renderTheme(<Text>Texto</Text>));

		const text = container.querySelector('p');

		expect(text).toHaveStyle({
			'font-size': themes['default'].font.sizes.medium,
		});
	});

	it('should match with snapshot', () => {
		const { container } = render(renderTheme(<Text>Texto</Text>));

		expect(container.firstChild).toMatchInlineSnapshot(`
		.c0 {
		  font-size: 2.4rem;
		}

		<p
		  class="c0"
		>
		  Texto
		</p>
	`);
	});
});
