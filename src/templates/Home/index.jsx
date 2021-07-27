// import { Menu } from '../../components/Menu';
// import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { Base } from '../Base';

import { NotFound } from '../NotFound';
import { Loading } from '../Loading';
import { mapData } from '../../api/index';

import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

function Home() {
	const [pageData, setPageData] = useState([]);

	const fetchPageData = async () => {
		try {
			const response = await fetch(
				'http://localhost:1337/pages/?slug=landing-page',
			);
			const data = await response.json();

			const page = mapData(data[0]);

			setPageData(page);
			console.log(page);
		} catch (error) {
			setPageData(undefined);
		}
	};

	useEffect(() => {
		fetchPageData();
	}, []);

	if (pageData === undefined) {
		return <NotFound />;
	}

	if (pageData && !pageData.slug) {
		return <Loading />;
	}

	// eslint-disable-next-line no-unused-vars
	const { menu, sections, footer, slug } = pageData;
	// eslint-disable-next-line no-unused-vars
	const { links, text, link, src } = menu;

	return (
		<Base links={links} logo={{ text, link, src }} footer={footer}>
			{sections.map((section, index) => {
				const { component } = section;
				const key = `${slug}-${index}`;

				if (component === 'section.section-two-columns') {
					console.log('two column', section);
					return <GridTwoColumn key={key} {...section} />;
				}

				if (component === 'section.section-content') {
					console.log('grid - content', section);
					return <GridContent key={key} {...section} />;
				}

				if (component === 'section.section-grid-text') {
					console.log('grid - text', section);
					return <GridText key={key} {...section} />;
				}

				if (component === 'section.section-grid-image') {
					console.log('grid - image', section);
					return <GridImage key={key} {...section} />;
				}

				return <h1 key={index}>a</h1>;
			})}
		</Base>
	);
}

export default Home;
