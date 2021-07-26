export const mapperSections = [
	'section.section-content',
	'section.section-grid',
	'section.section-two-columns',
];

export const mapSections = (sections = []) => {
	return sections.map((section) => {
		if (section.__component === 'section.section-content') {
			return mapSectionContent(section);
		}

		if (section.__component === 'section.section-grid') {
			return mapSectionGrid(section);
		}

		if (section.__component === 'section.section-two-columns') {
			return mapSectionTwoColumns(section);
		}

		return section;
	});
};

export const mapSectionGrid = (section) => {
	return section;
};

export const mapSectionContent = (section) => {
	const {
		__component: component = '',
		title = '',
		content: html = '',
		metadata: { background = false, section_id: sectionId = '' } = {},
	} = section;

	return {
		component,
		title,
		html,
		background,
		sectionId,
	};
};

export const mapSectionTwoColumns = (section = {}) => {
	const {
		__component: component = '',
		title = '',
		description = '',
		image: { url: src = '', alternativeText } = {},
		metadata: { background = false, section_id: sectionId = '' } = {},
	} = section;

	return {
		component: component,
		title: title,
		description: description,
		image: {
			url: src,
			alternativeText: alternativeText,
		},
		background: background,
		sectionId: sectionId,
	};
};
