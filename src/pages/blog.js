import React from 'react';
import Main from '../components/Main';
import Helmet from 'react-helmet';
import BlogGrid, { BlogGridItem } from '../components/BlogGrid';
import { isBlogPost } from '../helpers';
import { filter, map } from 'lodash';

const BlogPage = (props) => {
	const edges = [];

	return (
		<React.Fragment>
			<Helmet title="Blog" />
			<Main bg="#f6f6f6">
				<BlogGrid>
					{map(filter(edges, isBlogPost), ({ node: post }) => (
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
