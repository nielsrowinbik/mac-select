import React from 'react';
import PropTypes from 'prop-types';
import Main from '../components/Main';
import PageHeader from '../components/PageHeader';
import { isBlogPost } from '../helpers';
import { filter, take } from 'lodash';
import Helmet from 'react-helmet';
import SleekGrid, { SleekGridItem } from '../components/SleekGrid';

const HulpHeader = PageHeader.extend`
	padding-bottom: 56px;
`;

const HulpPage = (props) => {
	const { data } = props;
	const { edges } = data.allMarkdownRemark;

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
					{ take(filter(edges, isBlogPost), 2).map(({ node: post }) => (
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


HulpPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query HulpBlogQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					excerpt(pruneLength: 400)
					id
					fields {
						slug
					}
					frontmatter {
						title
						templateKey
						date
					}
				}
			}
		}
	}
`;
