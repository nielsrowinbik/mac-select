import React from 'react';
import PropTypes from 'prop-types';
import Main from '../components/Main';
import Helmet from 'react-helmet';
import BlogGrid, { BlogGridItem } from '../components/BlogGrid';
import { isBlogPost } from '../helpers';

const BlogPage = (props) => {
	const { data } = props;
	const { edges: posts } = data.allMarkdownRemark;

	return (
		<React.Fragment>
			<Helmet title="Blog" />
			<Main bg="#f6f6f6">
				<BlogGrid>
					{posts
						.filter(isBlogPost)
						.map(({ node: post }) => (
							<BlogGridItem
								date={post.frontmatter.date}
								title={post.frontmatter.title}
								to={post.fields.slug}
								key={post.id}
							/>
						))
					}
				</BlogGrid>
			</Main>
		</React.Fragment>
	);
};

export default BlogPage;

BlogPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query BlogQuery {
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
