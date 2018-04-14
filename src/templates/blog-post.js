import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Main from '../components/Main';
import moment from 'moment';
import styled from 'styled-components';

const BlogHeader = styled.header`
	span {
		font-size: 0.9rem;
		font-weight: 400;
		opacity: 0.8;
		text-transform: uppercase;
	}

	h1 {
		color: #000000;
		font-size: 2.7rem;
		font-weight: 600;
	}

	hr {
		background-color: #000000;
		border: none;
		height: 1px;
		margin: 40px 0;
		opacity: 0.2;
	}

	p {
		font-size: 1.5rem;
		line-height: 1.8rem;
		margin-bottom: 40px;
	}
`;

const BlogContent = styled.main`
	&,
	& > p {
		font-size: 1.05rem;
		font-weight: 500;
		line-height: 1.7rem;
	}
`;

const BlogContainer = styled.article`
	margin: 0 auto;
	max-width: 550px;

	img {
		margin: 0 -75px;
		max-width: calc(100% + 150px);
	}
`;

export const BlogPostTemplate = ({
	content,
	contentComponent,
	date,
	description,
	tags,
	title
}) => (
	<React.Fragment>
		<Helmet title={`${title} - Blog`} />
		<Main>
			<BlogContainer>
				<BlogHeader>
					<span>{ moment(date).locale('nl').format('D MMMM, YYYY') }</span>
					<h1>{ title }</h1>
					<hr />
					<p>{ description }</p>
				</BlogHeader>
				<BlogContent dangerouslySetInnerHTML={{ __html: content }} />
			</BlogContainer>
		</Main>
	</React.Fragment>
);

BlogPostTemplate.propTypes = {
	content: PropTypes.string.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.instanceOf(Helmet)
};

const BlogPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<BlogPostTemplate
			content={post.html}
			date={post.frontmatter.date}
			description={post.frontmatter.description}
			tags={post.frontmatter.tags}
			title={post.frontmatter.title}
		/>
	);
};

BlogPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default BlogPost;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query BlogPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date
				title
				description
				tags
			}
		}
	}
`;
