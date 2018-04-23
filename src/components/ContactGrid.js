import React from 'react';
import styled from 'styled-components';
import { container } from '../mixins';

const UnstyledContactGridItem = (props) => props.href ? <a {...props} /> : <div {...props} />;

const ContactGridItem = styled(UnstyledContactGridItem)`
	align-items: center;
	border: 1px solid #d6d6d6;
    border-radius: 4px;
	color: inherit;
	display: flex;
	flex-direction: column;
	padding: 15px 30px;
	text-align: center;

	:hover {
		border-color: #999;
		text-decoration: none;
	}

	& > img {
		margin-top: 10px;
		width: 50px;
	}

	& > form {
		margin: 0 auto;
		width: 65%;

		input,
		textarea {
			width: 100%;
			
			&:not(:last-child) {
				margin-bottom: 10px;
			}
		}
	}

	@media (min-width: 701px) {
		${({ isWide }) => isWide && `grid-column-end: span 2;`}
	}
`;

const ContactGrid = styled.section`
	${container}
	display: grid;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	grid-template-columns: 1fr;
	max-width: 700px;

	@media (min-width: 701px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export { ContactGrid, ContactGridItem };
export default ContactGrid;
