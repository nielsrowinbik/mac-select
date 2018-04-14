import styled, { css } from 'styled-components';

const styles = css`
	border: 1px solid #d6d6d6;
	border-radius: 4px;
	font-family: inherit;
	font-size: inherit;
	font-weight: inherit;
	padding: 9px 14px;

	:focus {
		border-color: ${({ theme }) => theme.text.link};
		border-width: 2px;
		padding: 8px 13px;
	}
`;

const Input = styled.input`${styles}`;
const TextArea = styled.textarea`
	${styles}
	resize: none;
`;

export { Input, TextArea };
export default Input;
