import * as Styled from './styles';
import P from 'prop-types';

import { SectionContainer } from '../SectionContainer';

export const SectionBackground = ({ children, background = false }) => {
	return (
		<Styled.Container background={background}>
			<SectionContainer>{children}</SectionContainer>
		</Styled.Container>
	);
};

SectionBackground.propTypes = {
	children: P.oneOfType([P.string, P.node, P.element]),
	background: P.bool,
};
