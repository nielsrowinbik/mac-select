import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { container } from '../mixins';
import moment from 'moment';

const BlogGrid = styled.section`
	${container}
	display: grid;
	grid-row-gap: 10px;
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
	color: inherit;
	display: flex;
	flex-wrap: nowrap;
	height: 400px;

	& > div {
		background-color: #ffffff;
		flex: 0 0 250px;
		padding: 34px 36px 0;

		span {
			color: ${({ theme }) => theme.text.link};
			font-weight: 400;
			text-transform: uppercase;
		}

		p {
			font-size: 1.4rem;
			line-height: 2rem;
		}
	}

	:hover {
		text-decoration: none;
	}
`;

export { BlogGrid, BlogGridItem };
export default BlogGrid;
