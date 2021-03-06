import 'typeface-open-sans';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { global, theme } from '../mixins';
import { find, get } from 'lodash';
import Heart from '../components/Heart';

injectGlobal`${global}`;

class TemplateWrapper extends Component {
	state = {
		isOpen: false,
		toggleOpen: (val) => (event) => this.setState({ isOpen: val === undefined ? !this.state.isOpen : val })
	}

	render = () => {
		const { children, data } = this.props;
		const { isOpen, toggleOpen } = this.state;
		const spotlight = get(find(get(data, 'allAanbodJson.edges'), { node: { spotlight: true } }), 'node');

		const windowGlobal = typeof window !== 'undefined' && window;
		const title = 'Mac Select - Het adres voor het kopen en verkopen van een tweedehands Mac, iMac, of Macbook';
		const description = 'Op zoek naar een tweedehands Mac, iMac, of Macbook? Bij Mac Select bent u aan het juiste adres! Wij hebben met zorg geselecteerde en betrouwbare tweedehands Macs te koop.';

		return (
			<ThemeProvider {...theme}>
				<div id="app">
					<Helmet
						defaultTitle={title}
						titleTemplate="%s - Mac Select"
					>
						<html lang="nl" />
						<meta name="description" content={description} />
						<meta property="og:site_name" content="Mac Select" />
						<meta property="og:locale" content="nl_NL" />
						<meta property="og:title" content={title} />
						<meta property="og:description" content={description} />
						<meta property="og:type" content="website" />
						<meta property="og:url" content={get(windowGlobal, 'location.href')} />
						<meta property="og:image" content="https://www.mac-select.nl/assets/images/mac_book_pro_2016.png" />
					</Helmet>
					<Navigation isOpen={isOpen} toggleOpen={toggleOpen()}>
						<Link exact to="/"><h1>Mac Select</h1></Link>
						<nav onClick={toggleOpen(false)}>
							<Link activeStyle={{}} to="/aanbod">Aanbod</Link>
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
								{ spotlight && <Link to={`/aanbod/${spotlight.fields.slug}`}>Uw beste optie</Link> }
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
							<span>Met <Heart /> gebouwd door <a href="https://vrwrts.io">vrwrts</a> — Copyright 2018</span>
						</section>
					</Footer>
				</div>
			</ThemeProvider>
		);
	}
}

export default TemplateWrapper;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query LayoutQuery {
		allAanbodJson {
			edges {
				node {
					fields {
						slug
					}
					spotlight
				}
			}
		}
	}
`;
