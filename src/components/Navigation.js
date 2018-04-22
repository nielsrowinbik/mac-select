import React from 'react';
import styled from 'styled-components';
import { container } from '../mixins';

const UnstyledNavButton = ({ isOpen, ...props }) => <div {...props}><div /></div>;
const NavButton = styled(UnstyledNavButton)`
	align-items: center;
	cursor: pointer;
	display: flex;
	height: 20px;
	width: 25px;

	& > div {
		background-color: ${({ isOpen }) => isOpen ? 'transparent' : 'currentColor'};
		cursor: pointer;
		height: 2px;
		position: relative;
		width: 100%;

		&:before,
		&:after {
			background-color: currentColor;
			content: "";
			height: 2px;
			position: absolute;
			width: 100%;
		}

		&:before {
			top: ${({ isOpen }) => isOpen ? 0 : -8}px;
			transform: rotate(${({ isOpen }) => isOpen ? -45 : 0}deg);
		}

		&:after {
			top: ${({ isOpen }) => isOpen ? 0 : 8}px;
			transform: rotate(${({ isOpen }) => isOpen ? 45 : 0}deg);
		}
	}

	@media (min-width: 701px) {
		display: none;
	}
`;

const UnstyledNavigation = ({ children, isOpen, toggleOpen, ...props }) => (
	<header {...props}>
		<div>
			{ children }
			<NavButton
				isOpen={isOpen}
				onClick={toggleOpen}
			/>
		</div>
	</header>
);
const Navigation = styled(UnstyledNavigation)`
	background-color: #fff;
	box-shadow: inset 0 -1px rgba(0, 0, 0, 0.05);
	height: 76px;

	& > div {
		${container}
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: space-between;

		h1,
		a {
			text-decoration: none;
			color: inherit;
			border: none;
		}

		h1 {
			font-size: 1.85rem;
			margin: 0;
		}

		nav {
			background-color: #ffffff;
			display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
			flex-direction: column;
			left: 0;
			position: absolute;
			top: 76px;
			width: 100%;

			a {
				box-shadow: inset 0 -1px 0 0 rgba(0,0,0,0.05);
				font-size: 1rem;
				font-weight: 400;
				text-align: center;
				padding: 20px 0;
				position: relative;

				&:hover {
					color: #8e8e8e;
				}
			}

			@media (min-width: 701px) {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				left: auto;
				position: relative;
				top: auto;
				width: auto;
				
				a {
					padding: 5px 10px;
					box-shadow: none;

					&:not(:first-child) {
						margin-left: 10px;
					}

					&:not(:last-child) {
						margin-right: 10px;
					}

					&:last-child {
						padding-left: 20px;

						&:before {
							content: '';
							position: absolute;
							top: 0;
							left: 0;
							height: 100%;
							width: 1px;
							background-color: #444;
						}
					}
				}
			}
		}
	}
`;

export { Navigation };
export default Navigation;
