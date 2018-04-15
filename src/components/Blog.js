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

export { BlogContainer as Blog, BlogContent, BlogHeader };
export default BlogContainer;
