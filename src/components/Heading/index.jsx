import React from 'react';
import { Title } from './styles';
import P from 'prop-types';

export const Heading = ({ children, darken = false }) => {
	return <Title darken={darken}>{children}</Title>;
};

Heading.propTypes = {
	children: P.oneOfType([P.string, P.node, P.element]).isRequired,
	darken: P.bool,
};
