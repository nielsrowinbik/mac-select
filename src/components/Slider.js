import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slick from 'react-slick';
import styled from 'styled-components';
import { map } from 'lodash';

const Slide = styled.div`
	background-color: #ffffff;
	background-image: url(${({ src }) => src});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: contain;
	height: 300px;

	@media (min-width: 701px) {
		height: 300px;
	}

	@media (min-width: 1001px) {
		height: 400px;
	}
`;

const Arrow = styled.button`
	align-items: center;
	background-color: rgba(181, 181, 181, 0.25);
	border: none;
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	height: 64px;
	justify-content: center;
	position: absolute;
	top: calc(50% - 32px);
	width: 64px;
	z-index: 5;

	:before {
		content: "\\2039";
		color: #848484;
		font-size: 2rem;
		margin-top: -5px;
	}
`;

const NextArrow = ({ className, style, ...props }) => <Arrow {...props} style={{ right: 25, transform: 'rotate(180deg)' }} />;

const PrevArrow = ({ className, style, ...props }) => <Arrow {...props} style={{ left: 25 }} />;

const Slider = ({ images, ...props }) => (
	<Slick
		nextArrow={<NextArrow />}
		prevArrow={<PrevArrow />}
		slidesToShow={3}
		responsive={[
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 700,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			}
		]}
		{...props}
	>
		{ map(images, (image) => <Slide src={image} />) }
	</Slick>
);

export { Slider, NextArrow, PrevArrow };
export default Slider;
