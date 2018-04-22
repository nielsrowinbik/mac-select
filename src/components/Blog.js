import styled from 'styled-components';

const BlogBanner = styled.img`
	height: 250px;
	object-fit: cover;
	padding-bottom: 56px;
	width: 100%;
`;

const BlogHeader = styled.header`
	span {
		font-size: 0.9rem;
		font-weight: 400;
		opacity: 0.8;
		text-transform: uppercase;
	}

	h1 {
		margin-bottom: 4rem;
		text-align: center;
	}

	p {
		font-size: 1.5rem;
		line-height: 1.8rem;
		margin-bottom: 40px;
		text-align: justify;
	}
`;

const BlogContent = styled.main`
	&,
	& > p {
		font-size: 1.05rem;
		font-weight: 500;
		line-height: 1.7rem;
	}

	& > h2 {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
`;

const BlogContainer = styled.article`
	margin: 0 auto;
	max-width: 550px;
	padding: 0 20px;

	img {
		margin: 0 -75px;
		max-width: calc(100% + 150px);
	}
`;

export { BlogContainer as Blog, BlogBanner, BlogContent, BlogHeader };
export default BlogContainer;
