import React from 'react';
import Main from '../components/Main';
import PageHeader from '../components/PageHeader';
import { isBlogPost } from '../helpers';
import { filter, get, map, take } from 'lodash';
import Helmet from 'react-helmet';
import SleekGrid, { SleekGridItem } from '../components/SleekGrid';

const HulpHeader = PageHeader.extend`
	padding-bottom: 56px;
`;

const HulpPage = (props) => {
	const posts = get(props, 'data.allFile.edges');

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
					{ posts.length >= 2 && map(take(posts, 2), ({ node: { childMarkdownRemark: post } }) => (
						<SleekGridItem
							cta={{ ctaValue: `/blog${get(post, 'fields.slug')}`, ctaText: 'Lees blog' }}
							src={get(post, 'frontmatter.banner')}
							title={get(post, 'frontmatter.title')}
						/>
					)) }
				</SleekGrid>
			</Main>
		</React.Fragment>
	);
};

export default HulpPage;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query HulpQuery {
		allFile(filter: { sourceInstanceName: { eq: "blog" } name: { ne:".gitinclude" } }, limit: 2) {
			edges {
				node {
					childMarkdownRemark {
						id
						fields {
							slug
						}
						frontmatter {
							banner
							date
							title
						}
					}
				}
			}
		}
	}
`;
