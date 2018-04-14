import React from 'react';
import { container } from '../mixins';
import styled from 'styled-components';

const UnstyledHero = ({ children, src, ...props }) => (
	<section {...props}>
		{src && <img src={src} />}
		<div>{children}</div>
	</section>
);
const Hero = styled(UnstyledHero)`
	${container}
	display: flex;
	flex-direction: ${({ rtl }) => rtl ? 'row-reverse' : 'row'};
	align-items: center;
	padding: 56px 0;

	img {
		object-fit: contain;
		max-width: 55%;
		padding: 24px;
	}

	div {
		padding: 24px;
	}
`;

export { Hero };
export default Hero;
