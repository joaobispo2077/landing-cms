import { mapData } from '.';

describe('api', () => {
	it('should map data even if there is no data', () => {
		const pageData = mapData();
		expect(pageData).toEqual(
			expect.objectContaining({
				footer: '',
				slug: '',
				title: '',
				sections: [],
				menu: {},
			}),
		);
	});

	it('should map data when there is data', () => {
		const pageData = mapData({
			footer_text: '<p> Hello World </p>',
			slug: 'slug',
			title: 'title',
			sections: [{}, {}, {}],
			menu: { a: 'b' },
		});
		expect(pageData).toEqual(
			expect.objectContaining({
				footer: '<p> Hello World </p>',
				slug: 'slug',
				title: 'title',
				sections: [{}, {}, {}],
				menu: { a: 'b' },
			}),
		);
	});
});
