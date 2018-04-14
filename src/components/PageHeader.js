import React from 'react';
import styled from 'styled-components';
import { container } from '../mixins';

const UnstyledPageHeader = (props) => <section {...props} />;

export default styled(UnstyledPageHeader)`
	${container}
	text-align: center;

	h1 {
		margin-top: 0;
	}
`;
