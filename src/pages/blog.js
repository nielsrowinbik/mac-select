import React from 'react';
import Main from '../components/Main';
import Helmet from 'react-helmet';
import BlogGrid, { BlogGridItem } from '../components/BlogGrid';
import { get, map } from 'lodash';
import PageHeader from '../components/PageHeader';

const BlogPage = (props) => {
	const { data } = props;
	const { allMarkdownRemark } = data;

	const title = 'Blog';
	const description = 'Met de Mac Select blog bent u altijd op de hoogte van de laatste informatie over nieuwe en tweedehands Mac, iMac en MacBook computers.';
	const Head = (
		<Helmet title={title}>
			<meta name="description" content={description} />
			<meta property="og:title" content={`${title} - Mac Select`} />
			<meta property="og:description" content={description} />
		</Helmet>
	);

	if (!allMarkdownRemark) return (
		<Main bg="#f6f6f6">
			{Head}
			<PageHeader>
				<p>Mac Select heeft op dit moment geen artikelen online staan.</p>
			</PageHeader>
		</Main>
	);

	const { edges: posts } = allMarkdownRemark;

	return (
		<Main bg="#f6f6f6">
			{Head}
			<BlogGrid>
				{ map(posts, ({ node: post }) => (
					<BlogGridItem
						date={get(post, 'frontmatter.date')}
						src={get(post, 'frontmatter.banner')}
						title={get(post, 'frontmatter.title')}
						to={`/blog/${get(post, 'fields.slug')}`}
						key={get(post, 'id')}
					/>
				))}
			</BlogGrid>
		</Main>
	);
};

export default BlogPage;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query BlogQuery {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
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
`;
