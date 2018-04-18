import React from 'react';
import Main from '../components/Main';
import Helmet from 'react-helmet';
import BlogGrid, { BlogGridItem } from '../components/BlogGrid';
import { map } from 'lodash';
import PageHeader from '../components/PageHeader';

const BlogPage = (props) => {
	const { data } = props;
	const { allFile } = data;

	if (!allFile) return (
		<React.Fragment>
			<Helmet title="Blog" />
			<Main bg="#f6f6f6">
				<PageHeader>
					<p>Mac Select heeft op dit moment geen artikelen online staan.</p>
				</PageHeader>
			</Main>
		</React.Fragment>
	);

	const { edges: posts } = allFile;

	return (
		<React.Fragment>
			<Helmet title="Blog" />
			<Main bg="#f6f6f6">
				<BlogGrid>
					{ map(posts, ({ node: { childMarkdownRemark: post } }) => (
						<BlogGridItem
							date={post.frontmatter.date}
							title={post.frontmatter.title}
							to={post.fields.slug}
							key={post.id}
						/>
					))}
				</BlogGrid>
			</Main>
		</React.Fragment>
	);
};

export default BlogPage;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query BlogQuery {
		allFile(filter: { sourceInstanceName: { eq: "blog" } name: { ne:".gitinclude" } }) {
			edges {
				node {
					childMarkdownRemark {
						id
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
				}
			}
		}
	}
`;
