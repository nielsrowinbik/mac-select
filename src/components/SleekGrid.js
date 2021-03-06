import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const UnstyledSleekGridItem = ({ cta: { ctaText, ctaValue }, isLarge, title, ...props }) => (
	<Link {...props} to={ctaValue}>
		<div>
			<h2>{title}</h2>
			<span>{ctaText}</span>
		</div>
	</Link>
);

const SleekGridItem = styled(UnstyledSleekGridItem)`
	background-image: url(${({ src }) => src});
	background-position: center center;
	background-size: cover;
	height: ${({ isLarge }) => isLarge ? 250 : 150}px;

	& > div {
		align-items: center;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		padding: 16px;
		width: 100%;

		h2,
		span {
			color: #ffffff;
			text-align: center;
		}
	}
	
	:hover {
		text-decoration: none;

		span {
			color: ${({ theme }) => theme.text.link};
		}
	}

	/* @media (min-width: 701px) {
		height: ${({ isLarge }) => isLarge ? 300 : 175}px;
	} */

	@media (min-width: 901px) {
		height: ${({ isLarge }) => isLarge ? 400 : 200}px;
	}
`;

const SleekGrid = styled.section`
	display: grid;
	grid-column-gap: 2px;
	grid-row-gap: 2px;
	grid-template-columns: 1fr;
	margin: 0 2px;

	@media (min-width: 701px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export { SleekGrid, SleekGridItem };
export default SleekGrid;
