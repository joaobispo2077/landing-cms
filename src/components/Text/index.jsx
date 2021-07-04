import * as Styled from './styles';
import P from 'prop-types';

export const Text = ({ children }) => {
	return <Styled.Container>{children}</Styled.Container>;
};

Text.propTypes = {
	children: P.oneOfType([P.string, P.node, P.element]),
};
