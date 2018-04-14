import React from 'react';
import styled from 'styled-components';

const UnstyledMain = (props) => <main {...props} />;
const Main = styled(UnstyledMain)`
	background-color: ${({ bg }) => bg || '#ffffff'};
	display: block;
	min-height: 100vh;
	padding: 56px 0;
`;

export { Main };
export default Main;
