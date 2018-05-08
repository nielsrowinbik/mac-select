import React from 'react';
import Main from '../components/Main';
import Helmet from 'react-helmet';
import Blog, { BlogHeader, BlogBanner, BlogContent } from '../components/Blog';
import format from 'date-fns/format';
import nl from 'date-fns/locale/nl';
import { get } from 'lodash';

const BlogPostTemplate = (props) => {
	const { isCMSPreview, ...blog } = props;

	const windowGlobal = typeof window !== 'undefined' && window;
	const title = `${blog.title} - Blog`;
	const url = `${get(windowGlobal, 'location.protocol')}//${get(windowGlobal, 'location.host')}`;
	const Head = (
		<Helmet title={title}>
			<meta property="og:title" content={`${title} - Mac Select`} />
			<meta property="og:image" content={`${url}${blog.banner}`} />
		</Helmet>
	);

	return (
		<Main bg="#f6f6f6" style={{ paddingTop: 0 }}>
			{ !isCMSPreview && Head }
			<BlogBanner src={blog.banner} />
			<Blog>
				<BlogHeader>
					<span>{ format(blog.date, 'D MMMM, YYYY', nl) }</span>
					<h1>{blog.title}</h1>
				</BlogHeader>
				{ isCMSPreview
					? <BlogContent>{blog.content}</BlogContent>
					: <BlogContent dangerouslySetInnerHTML={{ __html: blog.html }} /> }
			</Blog>
		</Main>
	);
};

const BlogPost = (props) => {
	const { data } = props;
	const { markdownRemark: post } = data;
	const { frontmatter, ...rest } = post;

	return <BlogPostTemplate {...frontmatter} {...rest} />;
};

export { BlogPost, BlogPostTemplate };
export default BlogPost;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query BlogPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				banner
				date
				description
				title
			}
		}
	}
`;
