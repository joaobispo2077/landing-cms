// import { Menu } from '../../components/Menu';
// import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { Base } from '../Base';
import mockBase from '../Base/mock';

import { NotFound } from '../NotFound';
import { mapData } from '../../api/index';

function Home() {
	const [pageData, setPageData] = useState(undefined);

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
		return <h1>Carregando...</h1>;
	}

	return <Base {...mockBase} />;
}

export default Home;
