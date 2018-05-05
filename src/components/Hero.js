import React from 'react';
import { container } from '../mixins';
import styled from 'styled-components';

const UnstyledHero = ({ alt, children, src, ...props }) => (
	<section {...props}>
		{src && <img alt={alt} src={src} />}
		<div>{children}</div>
	</section>
);
const Hero = styled(UnstyledHero)`
	${container}
	display: flex;
	flex-direction: ${({ rtl }) => rtl ? 'column-reverse' : 'column'};
	align-items: center;
	padding: 56px 0;

	img {
		object-fit: contain;
		max-width: 85%;
		padding: 24px;
	}

	div {
		padding: 24px;
	}

	@media (min-width: 701px) {
		flex-direction: ${({ rtl }) => rtl ? 'row-reverse' : 'row'};

		img {
			max-width: 55%;
		}
	}
`;

export { Hero };
export default Hero;
