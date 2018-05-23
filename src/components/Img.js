import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

const Placeholder = styled.img`
	filter: blur(20px);
`;

const Actual = styled.img`
	
`;

class Img extends Component {
	state = {
		loaded: false,
		visible: false
	}

	onLoad = () => this.setState({ loaded: true });
	
	componentDidMount = () => {
		const observer = new IntersectionObserver(
			([ { isIntersecting } ]) => isIntersecting && this.setState({ visible: true }),
			{ threshold: 0.1 }
		);
		// eslint-disable-next-line react/no-find-dom-node
		observer.observe(findDOMNode(this));
	}

	render () {
		const { placeholder, ...props } = this.props;
		const { loaded, visible } = this.state;

		return (
			<React.Fragment>
				{!(visible && loaded) && <Placeholder alt={props.alt} src={placeholder} />}
				{visible && <Actual {...props} onLoad={this.onLoad} hidden={!loaded} />}
			</React.Fragment>
		);
	}
}

export default Img;
