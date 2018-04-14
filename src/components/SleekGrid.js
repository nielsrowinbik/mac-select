import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const UnstyledSleekGridItem = ({ cta: { ctaText, ctaValue }, isLarge, src, title, ...props }) => (
	<Link {...props} to={ctaValue} style={{ backgroundImage: src }}>
		<div>
			<h2>{title}</h2>
			<span>{ctaText}</span>
		</div>
	</Link>
);

const SleekGridItem = styled(UnstyledSleekGridItem)`
	background-position: center center;
	background-size: cover;
	height: ${({ isLarge }) => isLarge ? 400 : 200}px;

	& > div {
		align-items: center;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		width: 100%;

		h2,
		span {
			color: #ffffff;
		}
	}
	
	:hover {
		text-decoration: none;

		span {
			color: ${({ theme }) => theme.text.link};
		}
	}
`;

const SleekGrid = styled.section`
	display: grid;
	grid-column-gap: 2px;
	grid-row-gap: 2px;
	grid-template-columns: 1fr 1fr;
	/* grid-template-rows: 400px 200px; */
`;

export { SleekGrid, SleekGridItem };
export default SleekGrid;