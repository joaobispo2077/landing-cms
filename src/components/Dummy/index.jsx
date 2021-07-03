import * as Styled from './styles';
import P from 'prop-types';

export const Dummy = () => {
	return (
		<Styled.Container>
			<h1>Dummy</h1>
		</Styled.Container>
	);
};

Dummy.propTypes = {
	children: P.oneOfType([P.string, P.node, P.element]),
};
