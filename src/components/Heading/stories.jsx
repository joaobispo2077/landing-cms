import { Heading } from './index';

export default {
	title: 'Heading',
	component: Heading,
	args: {
		children: 'O texto está escuro',
	},
	argTypes: {
		children: { type: 'string' },
		lighther: { type: 'boolean' },
	},
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
};

export const Dark = (args) => <Heading {...args} />;
export const Light = (args) => <Heading {...args} lighther={true} />;

Light.parameters = {
	backgrounds: {
		default: 'dark',
	},
};

Light.args = {
	children: 'O texto está claro',
};
