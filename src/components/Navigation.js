import React from 'react';
import styled from 'styled-components';
import { container } from '../mixins';

const UnstyledNavigation = ({ children, ...props }) => <header {...props}><div>{ children }</div></header>;
const Navigation = styled(UnstyledNavigation)`
	background-color: #ffffff;
	box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, .05);
	
	& > div {
		${container}
		align-items: center;
		display: flex;
		padding: 15px 0;
		height: 76px;

		h1,
		a {
			text-decoration: none;
			color: inherit;
			border: none;
		}

		h1 {
			margin: 0;
			flex: auto;
			font-size: 1.85rem;
		}

		:not(h1) > a {
			padding: 5px 10px;
			margin: 0 5px;
			position: relative;
			font-weight: 400;

			:hover {
				color: ${({ theme }) => theme.text.secondary};
			}

			:not(:last-child) {
				margin-right: 10px;
			}

			:last-child {
				padding-left: 20px;

				:after {
					content: '';
					position: absolute;
					left: 0;
					top: 0;
					bottom: 0;
					width: 1px;
					background-color: ${({ theme }) => theme.text.primary};
				}
			}
		}
	}
`;

export { Navigation };
export default Navigation;
