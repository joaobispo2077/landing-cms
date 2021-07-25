import { Base } from '.';

import mock from './mock';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';

export const mockBase = {
	...mock,
	children: (
		<div>
			<GridText {...gridMock} hasBackground />
			<GridText {...gridMock} />
			<GridText {...gridMock} hasBackground />
			<GridText {...gridMock} />
		</div>
	),
};

export default {
	title: 'Templates/Base',
	component: Base,
	args: mockBase,
};

export const Template = (args) => {
	return <Base {...args} />;
};
