import React from 'react';
import { Title } from './styles';
import P from 'prop-types';

export const Heading = ({ children, lighther = false }) => {
	return (
		<div>
			<Title lighther={lighther}>{children}</Title>
		</div>
	);
};

Heading.propTypes = {
	children: P.oneOfType([P.string, P.node, P.element]).isRequired,
	lighther: P.bool,
};
