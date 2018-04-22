import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { container } from '../mixins';
import moment from 'moment';

const BlogGrid = styled.section`
	${container}
	display: grid;
	grid-row-gap: 20px;
	max-width: 800px;
`;

const UnstyledBlogGridItem = ({ date, title, src, ...props }) => (
	<Link {...props}>
		<div>
			<span>{ moment(date).locale('nl').format('D MMMM, YYYY') }</span>
			<p>{title}</p>
		</div>
		<img src={src} />
	</Link>
);

const BlogGridItem = styled(UnstyledBlogGridItem)`
	background-color: #ffffff;
	color: inherit;
	display: flex;
	flex-wrap: nowrap;
	height: 300px;

	:hover {
		text-decoration: none;
	}

	&:nth-child(odd) > div {
		background-color: #222222;
		color: #ffffff;
	}

	& > div {
		flex: 0 0 200px;
		padding: 20px 40px 20px 20px;

		span {
			color: ${({ theme }) => theme.text.link};
			font-size: 0.9rem;
			font-weight: 400;
			text-transform: uppercase;
		}

		p {
			font-size: 1.4rem;
			line-height: 2rem;
		}
	}

	& > img {
		width: 100%;
		object-fit: cover;
	}
`;

export { BlogGrid, BlogGridItem };
export default BlogGrid;
