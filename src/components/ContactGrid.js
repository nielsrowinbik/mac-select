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

		input,
		textarea {
			display: block;
		}
	}
`;

const ContactGrid = styled.section`
	${container}
	display: grid;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	grid-template-columns: 1fr 1fr;
	max-width: 700px;
`;

export { ContactGrid, ContactGridItem };
export default ContactGrid;
