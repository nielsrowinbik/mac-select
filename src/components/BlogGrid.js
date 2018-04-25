import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { container } from '../mixins';
import format from 'date-fns/format';
import nl from 'date-fns/locale/nl';

const BlogGrid = styled.section`
	${container}
	display: grid;
	grid-row-gap: 20px;
	grid-template-columns: 1fr;
	max-width: 800px;
`;

const UnstyledBlogGridItem = ({ date, title, src, ...props }) => (
	<Link {...props}>
		<div>
			<span>{ format(date, 'D MMMM, YYYY', nl) }</span>
			<p>{title}</p>
		</div>
		<img src={src} />
	</Link>
);

const BlogGridItem = styled(UnstyledBlogGridItem)`
	background-color: #ffffff;
	color: inherit;
	display: flex;
	flex-direction: column-reverse;
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
		flex: auto;
		height: 150px;
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
		height: 150px;
		width: 100%;
		object-fit: cover;
	}

	@media (min-width: 701px) {
		display: block;
		white-space: break-none;

		& > div {
			display: inline-block;
			float: left;
			height: 100%;
			width: 200px;
		}

		& > img {
			display: inline-block;
			height: 100%;
			width: calc(100% - 200px);
		}
	}
`;

export { BlogGrid, BlogGridItem };
export default BlogGrid;
