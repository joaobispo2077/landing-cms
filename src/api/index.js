export const mapData = (data = {}) => {
	const {
		footer_text: footer = '',
		slug = '',
		title = '',
		sections = [],
		menu = {},
	} = data;

	return {
		footer,
		slug,
		title,
		sections,
		menu,
	};
};
