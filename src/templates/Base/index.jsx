import * as Styled from './styles';
import P from 'prop-types';

import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export const Base = ({ links = [], logo, footer, children }) => {
	return (
		<>
			<Menu logo={logo} links={links} />
			<Styled.Container>
				{children}
				<Footer html={footer} />
			</Styled.Container>
			<GoTop />
		</>
	);
};

Base.propTypes = {
	...Menu.propTypes,
	foo: P.string,
	children: P.oneOfType([P.string, P.node, P.element]),
};
