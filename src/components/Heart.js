import React from 'react';
import styled, { keyframes } from 'styled-components';

const UnstyledHeart = (props) => (
	<svg width="1em" height="1em" viewBox="0 0 13 11" {...props}>
		<path fill-opacity=".7" fill-rule="evenodd" d="M7.29888015,2.23068754 L6.50970157,1.45849954 C5.20579703,0.182667327 3.08079315,0.178419862 1.77280798,1.45824484 C0.467484303,2.73546563 0.464939358,4.81319012 1.77306828,6.09315577 L7.29888015,11.5 L12.7817964,6.13512782 C14.1121406,4.83342519 14.1329375,2.73806982 12.8249523,1.45824484 C11.5196286,0.181024049 9.37698265,0.197325424 8.04516316,1.50047159 L7.29888015,2.23068754 Z" transform="translate(-.793 -.5)" />
	</svg>
);

const heart = keyframes`
	0% {
		transform: scale(1);
	}
	15% {
		transform: scale(1.2);
	}
	30% {
		transform: scale(1);
	}
	45% {
		transform: scale(1.2);
	}
	60% {
		transform: scale(1);
	}
	100% {
		transform: scale(1);
	}
`;

const Heart = styled(UnstyledHeart)`
	fill: currentColor;
	margin: 0 3px;
	transition: fill 0.25s ease;
	vertical-align: middle;

	:hover {
		animation: ${heart} 1.25s ease infinite;
		cursor: pointer;
		fill: #e53935;
	}
`;

export default Heart;
