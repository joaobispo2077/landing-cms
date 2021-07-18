import * as Styled from './styles';
import P from 'prop-types';

import { Heading } from '../Heading';

export const LogoLink = ({ text, src = null, link }) => {
	return (
		<Styled.Container href={link}>
			<Heading size="small" uppercase darken>
				{src ? <img src={src} alt={text} /> : text}
			</Heading>
		</Styled.Container>
	);
};

LogoLink.propTypes = {
	text: P.string.isRequired,
	src: P.string,
	link: P.string.isRequired,
};
