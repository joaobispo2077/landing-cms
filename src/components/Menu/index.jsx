import * as Styled from './styles';
import P from 'prop-types';

import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';

export const Menu = ({ links = [], logo }) => {
	return (
		<Styled.Container>
			<SectionContainer>
				<Styled.MenuContainer>
					<LogoLink {...logo} />
					<NavLinks links={links} />
				</Styled.MenuContainer>
			</SectionContainer>
		</Styled.Container>
	);
};

Menu.propTypes = {
	...NavLinks.propTypes,
	logo: P.shape(LogoLink.propTypes).isRequired,
};
