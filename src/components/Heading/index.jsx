import React from 'react';
import { Title } from './styles';
import P from 'prop-types';

export const Heading = ({
	children,
	darken = false,
	as = 'h1',
	size = 'big',
}) => {
	return (
		<Title as={as} size={size} darken={darken}>
			{children}
		</Title>
	);
};

Heading.propTypes = {
	darken: P.bool,
	as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
	size: P.oneOf(['small', 'medium', 'big', 'huge']),
	children: P.oneOfType([P.string, P.node, P.element]).isRequired,
};
