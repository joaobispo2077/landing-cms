import { Base } from '.';

import mock from './mock';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';
export default {
	title: 'Templates/Base',
	component: Base,
	args: {
		...mock,
		children: (
			<div>
				<GridText {...gridMock} />
				<GridText {...gridMock} hasBackground />
				<GridText {...gridMock} />
				<GridText {...gridMock} hasBackground />
			</div>
		),
	},
};

export const Template = (args) => {
	return <Base {...args} />;
};
