import { GridTwoColumn } from '.';

export default {
	title: 'GridTwoColumn',
	component: GridTwoColumn,
	args: {
		title: 'GridTwoColumn',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quisquam aspernatur sed quos, dolore cum eveniet magnam at consequatur totam iste minus, blanditiis obcaecati eos rerum sunt dolorum perferendis. Nam?',
		src: 'assets/images/javascript.svg',
		hasBackground: true,
	},
	argTypes: {
		children: { type: 'string' },
	},
};

export const Template = (args) => {
	return <GridTwoColumn {...args} />;
};
