import * as Styled from './styles';
import P from 'prop-types';

export const MenuLink = ({ children, link, newTab = false }) => {
	const target = newTab ? '_blank' : '_self';
	return (
		<Styled.Container href={link} target={target}>
			<h1>{children}</h1>
		</Styled.Container>
	);
};

MenuLink.propTypes = {
	children: P.oneOfType([P.string, P.node, P.element]).isRequired,
	link: P.string.isRequired,
	newTab: P.bool,
};
