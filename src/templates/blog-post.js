import React from 'react';
import Main from '../components/Main';
import Helmet from 'react-helmet';
import Blog, { BlogHeader, BlogBanner, BlogContent } from '../components/Blog';
import format from 'date-fns/format';
import nl from 'date-fns/locale/nl';

const BlogPostTemplate = ({
	banner,
	content,
	date,
	description,
	html,
	isCMSPreview,
	title
}) => (
	<Main bg="#f6f6f6" style={{ paddingTop: 0 }}>
		{ !isCMSPreview && <Helmet title={`${title} - Blog`} /> }
		<BlogBanner src={banner} />
		<Blog>
			<BlogHeader>
				<span>{ format(date, 'D MMMM, YYYY', nl) }</span>
				<h1>{ title }</h1>
			</BlogHeader>
			{ isCMSPreview
				? <BlogContent>{ content }</BlogContent>
				: <BlogContent dangerouslySetInnerHTML={{ __html: html }} /> }
		</Blog>
	</Main>
);

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
