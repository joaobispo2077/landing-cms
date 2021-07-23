import * as Styled from './styles';
import P from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridTwoColumn = ({ title, text, src, hasBackground }) => {
	return (
		<SectionBackground background={hasBackground}>
			<Styled.Container background={hasBackground}>
				<Styled.TextContainer>
					<Heading uppercase>{title}</Heading>
					<Text>{text}</Text>
				</Styled.TextContainer>
				<Styled.ImageContainer>
					<Styled.Image src={src} alt={title} />
				</Styled.ImageContainer>
			</Styled.Container>
		</SectionBackground>
	);
};

GridTwoColumn.propTypes = {
	title: P.string,
	text: P.string,
	src: P.string,
	hasBackground: P.bool,
};
