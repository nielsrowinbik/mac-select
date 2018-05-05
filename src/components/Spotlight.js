import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { container } from '../mixins';
import { get } from 'lodash';

const Header = styled.div`
	text-align: center;
`;

const Hr = styled.div`
    background-color: #cecece;
	border: none;
    height: 1px;
    margin: 40px auto 60px;
	position: relative;
    width: 95%;

	:before {
		background-color: #fff;
		border-bottom-left-radius: 28px;
		border-bottom-right-radius: 28px;
		box-shadow: 2px 3px 12px -3px rgba(0,0,0,.4);
		content: "";
		height: 16px;
		left: 50%;
		padding-top: 4px;
		position: absolute;
		top: 1px;
		transform: translateX(-50%);
		width: 28px;
	}

	:after {
		content: "v";
		left: 50%;
		position: absolute;
		top: -3px;
		transform: translateX(-50%) scale(1.8,.8);
	}
`;

const ImageContainer = styled(Link)`
	display: block;
	margin: 0 auto;
	width: 75%;

	& > img {
		width: 100%;
	}

	@media (min-width: 701px) {
		width: 52%;
	}
`;

const UnstyledSpotlight = ({ product, ...props }) => (
	<section {...props}>
		<Header>
			<h1>Uw beste optie</h1>
			<p>De beste tweedehands {product.type} die Mac Select u op dit moment te bieden heeft.</p>
			<p><Link to={`/aanbod/${product.fields.slug}`}>Meer informatie</Link></p>
		</Header>
		<Hr />
		<ImageContainer to={`/aanbod/${product.fields.slug}`}>
			<img alt={product.title} src={get(product, 'images[0].image')} />
		</ImageContainer>
	</section>
);

const Spotlight = styled(UnstyledSpotlight)`
	${container}
`;

export { Spotlight };
export default Spotlight;
