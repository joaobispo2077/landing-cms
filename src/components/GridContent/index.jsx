import * as Styled from './styles';
import P from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridContent = ({ title, html, hasBackground = false }) => {
	return (
		<SectionBackground background={hasBackground}>
			<Styled.Container>
				<Heading uppercase darken={!hasBackground}>
					{title}
				</Heading>
				<Styled.Html>
					<Text>{html}</Text>
				</Styled.Html>
			</Styled.Container>
		</SectionBackground>
	);
};

GridContent.propTypes = {
	title: P.string,
	html: P.oneOfType([P.node, P.element, P.string]),
	hasBackground: P.bool,
};
