import { mapSectionTwoColumns, mapSections } from './mapSections';

describe('Map sections', () => {
	it('should render predefined section if no data is provided', () => {
		const data = mapSections();
		expect(data).toEqual([]);
	});

	it('should map sections two columns', () => {
		const data = mapSectionTwoColumns({
			__component: 'section.section-two-columns',
			_id: '60df5e7ab90cfa3918d450dd',
			metadata: {
				background: true,
				_id: '60df5e7ab90cfa3918d450e2',
				__v: 0,
				name: 'contact',
				section_id: 'contact',
				id: '60df5e7ab90cfa3918d450e2',
			},
			__v: 1,
			description:
				'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.',
			title: 'January brings us Firefox 85',
			image: {
				_id: '60df2dd7b90cfa3918d45076',
				name: 'javascript.svg',
				alternativeText: 'Pessoas segurando logos do HTML, CSS e Javascript',
				caption: 'Pessoas segurando logos do HTML, CSS e Javascript',
				hash: 'javascript_b9d280e07f',
				ext: '.svg',
				mime: 'image/svg+xml',
				size: 30.31,
				url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625238996/javascript_b9d280e07f.svg',
				provider_metadata: {
					public_id: 'javascript_b9d280e07f',
					resource_type: 'image',
				},
				provider: 'cloudinary',
				width: 1030,
				height: 730,
				related: ['60df2f78b90cfa3918d45086', '60df5e7ab90cfa3918d450dd'],
				createdAt: '2021-07-02T15:16:39.322Z',
				updatedAt: '2021-07-02T18:46:09.640Z',
				__v: 0,
				id: '60df2dd7b90cfa3918d45076',
			},
			id: '60df5e7ab90cfa3918d450dd',
		});

		expect(data).toEqual({
			background: true,
			component: 'section.section-two-columns',
			description:
				'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.',
			image: {
				alternativeText: 'Pessoas segurando logos do HTML, CSS e Javascript',
				url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625238996/javascript_b9d280e07f.svg',
			},
			sectionId: 'contact',
			title: 'January brings us Firefox 85',
		});
	});
});
