import * as Styled from './styles';
import P from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridSection = ({ title, description, grid }) => {
	return (
		<SectionBackground>
			<Styled.Container>
				<Heading size="huge" uppercase>
					{title}
				</Heading>
				<Text>{description}</Text>
				<Styled.Grid>
					{grid.map((element) => (
						<Styled.GridElement key={element.title}>
							<Heading size="medium">{element.title}</Heading>
							<Text>{element.description}</Text>
						</Styled.GridElement>
					))}
				</Styled.Grid>
			</Styled.Container>
		</SectionBackground>
	);
};

GridSection.propTypes = {
	title: P.string.isRequired,
	description: P.string.isRequired,
	grid: P.arrayOf(
		P.shape({
			title: P.string.isRequired,
			description: P.string.isRequired,
		}),
	).isRequired,
};
