import React from 'react';
import { container } from '../mixins';
import styled from 'styled-components';

const UnstyledFooter = (props) => <footer {...props} />;
const Footer = styled(UnstyledFooter)`
	background-color: #f6f6f6;

	& > section {
		${container}
		display: flex;

		&:first-child > div {
			flex: auto;
			display: flex;
			flex-direction: column;
			padding-top: 24px;

			h4 {
				margin: 0.7rem 0;
			}

			a {
				margin: 0.3rem 0;
			}
		}

		&:last-child {
			font-size: 0.85rem;
			padding: 8px 0 12px 0;
			margin-top: 24px;
			border-top: 1px solid #e7e7e7;

			a {
				color: inherit;
				font-weight: 500;
			}
		}
	}
`;

export { Footer };
export default Footer;
