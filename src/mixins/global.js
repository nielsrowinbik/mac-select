import { css } from 'styled-components';
import appTheme from './theme';

const theme = appTheme.theme;

export default css`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	*:focus {
		outline: none;
	}

	html, body {
		color: ${theme.text.primary};
		font-family: "Open Sans", sans-serif;
		font-size: 16px;
		font-weight: 300;
		line-height: normal;
		-webkit-font-smoothing: antialiased;
    	-webkit-print-color-adjust: exact;
	}

	body {
		margin: 0;
		overflow-x: hidden;
		overflow-y: scroll;
	}

	#app {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh;
	}

	a {
		text-decoration: none;
		color: ${theme.text.link};

		:hover {
			text-decoration: underline;
		}
	}

	p {
		line-height: 1.5rem;
	}

	h1 {
		font-size: 2.25rem;
		font-weight: 300;
    	margin-bottom: 1rem;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 300;
	}

	h3 {
		font-size: 1.3rem;
		font-weight: 400;
	}
`;
