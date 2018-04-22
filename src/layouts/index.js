import 'typeface-open-sans';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { global, theme } from '../mixins';

injectGlobal`${global}`;

class TemplateWrapper extends Component {
	state = {
		isOpen: false,
		toggleOpen: (val) => (event) => this.setState({ isOpen: val == undefined ? !this.state.isOpen : val })
	}

	render = () => {
		const { children } = this.props;
		const { isOpen, toggleOpen } = this.state;

		return (
			<ThemeProvider {...theme}>
				<React.Fragment>
					<Helmet
						title="Mac Select - Het adres voor het kopen en verkopen van een tweedehands Mac, iMac, of Macbook"
						titleTemplate="%s - Mac Select"
					/>
					<Navigation isOpen={isOpen} toggleOpen={toggleOpen()}>
						<Link exact to="/"><h1>Mac Select</h1></Link>
						<nav onClick={toggleOpen(false)}>
							<Link activeStyle={{}} to="/aanbod">Aanbod</Link>
							<Link activeStyle={{}} to="/verkopen">Verkopen</Link>
							<Link activeStyle={{}} to="/hulp">Hulp</Link>
							<Link activeStyle={{}} to="/contact">Contact</Link>
							<Link activeStyle={{}} to="/blog">Blog</Link>
						</nav>
					</Navigation>
					{ children() }
					<Footer>
						<section>
							<div>
								<h4>Mac Select</h4>
								<Link to="/">Home</Link>
								<Link to="/aanbod">Huidig aanbod</Link>
								<Link to="/verkopen">Uw Mac verkopen</Link>
							</div>
							<div>
								<h4>Hulp en informatie</h4>
								<Link to="/blog">Mac Select blog</Link>
								<Link to="/hulp">Hulp bij aan- en verkoop</Link>
								<Link to="/hulp#faq">Veelgestelde vragen</Link>
							</div>
							<div>
								<h4>Contact</h4>
								<a href="tel:+31647028625">Telefoon</a>
								<a href="mailto:info@mac-select.nl">Email</a>
								<a href="https://www.facebook.com/macselect">Facebook</a>
							</div>
						</section>
						<section>
							<span>Copyright © 2018 Mac Select. Website gerealiseerd door <a href="https://nielsbik.nl">Niels Bik</a>.</span>
						</section>
					</Footer>
				</React.Fragment>
			</ThemeProvider>
		);
	}
}

export default TemplateWrapper;
