import React from 'react';
import Main from '../components/Main';
import PageHeader from '../components/PageHeader';
import { isBlogPost } from '../helpers';
import { filter, map, take } from 'lodash';
import Helmet from 'react-helmet';
import SleekGrid, { SleekGridItem } from '../components/SleekGrid';

const HulpHeader = PageHeader.extend`
	padding-bottom: 56px;
`;

const HulpPage = (props) => {
	const edges = [];

	return (
		<React.Fragment>
			<Helmet title="Hulp" />
			<Main>
				<HulpHeader>
					<h1>Mac Select helpt u</h1>
					<p>
						<a href="#aankoop">Hulp bij aankoop</a> · <a href="#verkoop">Hulp bij verkoop</a>
					</p>
				</HulpHeader>
				<SleekGrid>
					{ map(take(filter(edges, isBlogPost), 2), ({ node: post }) => (
						<SleekGridItem
							cta={{ ctaValue: post.fields.slug, ctaText: 'Lees blog' }}
							title={post.frontmatter.title}
						/>
					)) }
				</SleekGrid>
			</Main>
		</React.Fragment>
	);
};

export default HulpPage;
