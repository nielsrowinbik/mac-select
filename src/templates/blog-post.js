import React from 'react';
import Main from '../components/Main';
import moment from 'moment';
import Helmet from 'react-helmet';
import Blog, { BlogHeader, BlogContent } from '../components/Blog';

const BlogPostTemplate = ({
	banner,
	content,
	date,
	description,
	html,
	isCMSPreview,
	title
}) => (
	<React.Fragment>
		{ !isCMSPreview && <Helmet title={`${title} - Blog`} /> }
		<Main bg="#f6f6f6">
			<Blog>
				<BlogHeader>
					<span>{ moment(date).locale('nl').format('D MMMM, YYYY') }</span>
					<h1>{ title }</h1>
					<hr />
					<p>{ description }</p>
					<img src={banner} />
				</BlogHeader>
				{ isCMSPreview
					? <BlogContent>{ content }</BlogContent>
					: <BlogContent dangerouslySetInnerHTML={{ __html: html }} /> }
			</Blog>
		</Main>
	</React.Fragment>
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
