import React from 'react';
import { container } from '../mixins';
import styled from 'styled-components';
import { isString, isUndefined } from 'lodash';
import Img from '../components/Img';

const UnstyledHero = ({ alt, children, src, ...props }) => (
	<section {...props}>
		{isUndefined(src)
			? null
			: isString(src)
				? <Img alt={alt} src={src} />
				: <Img alt={alt} placeholder={src.sizes.base64} src={src.sizes.src} srcSet={src.sizes.srcSet} />}
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
		flex: 0 0 100%;
		object-fit: contain;
		max-width: 85%;
		padding: 24px;
		width: 100%;
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
