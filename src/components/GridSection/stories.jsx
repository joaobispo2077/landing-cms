import { GridSection } from '.';

import mock from './mock';

export default {
	title: 'GridSection',
	component: GridSection,
	args: mock,
};

export const Template = (args) => {
	return <GridSection {...args} />;
};
