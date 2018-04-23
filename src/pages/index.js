import { filter, find, get, map, take } from 'lodash';
import React from 'react';
import Main from '../components/Main';
import Hero from '../components/Hero';
import Link from 'gatsby-link';
import SleekGrid, { SleekGridItem } from '../components/SleekGrid';
import { isBlogPost, isProduct, isSpotlight } from '../helpers';
import Spotlight from '../components/Spotlight';

const Home = (props) => {
	const { data } = props;
	const { allFile } = data;
	const { edges } = allFile;

	const posts = filter(edges, isBlogPost);
	const products = filter(edges, isProduct);
	const spotlight = get(find(products, isSpotlight), 'node.childAanbodJson');

	return (
		<Main bg="#f6f6f6">
			<Hero src="/assets/images/mac_book_pro_2016.png">
				<h1>Welkom bij Mac Select</h1>
				<h2><Link to="/aanbod">Bekijk het huidige aanbod</Link></h2>
				<p>
					Bent u opzoek naar een betrouwbare en betaalbare tweedehands Mac? Dan bent u bij Mac Select aan het juiste adres!
					Mac Select heeft uitsluitend geselecteerde en betrouwbare tweedehands Macs te koop.
				</p>
			</Hero>
			<Spotlight product={spotlight} />
			<Hero src="/assets/images/mac_book_pro_2016_alt.png" rtl>
				<h1>Uw Mac verkopen</h1>
				<h2><Link to="/contact">Neem contact op</Link></h2>
				<p>
					Bent u van plan uw Mac te verkopen? Neem contact op met Mac Select en u weet direct wat u kunt krijgen voor uw
					tweedehands Mac. Meer informatie over het verkopen van uw Mac aan Mac Select vindt u <Link to="/hulp#verkoop">hier</Link>.
				</p>
			</Hero>
			<SleekGrid>
				{ products.length >= 2 && map(take(products, 2), ({ node: { childAanbodJson: product } }) => (
					<SleekGridItem
						cta={{ ctaValue: `/aanbod${get(product, 'fields.slug')}`, ctaText: 'Bekijk product' }}
						isLarge
						key={get(product, 'fields.slug')}
						src={get(product, 'images[0].image')}
						title={get(product, 'title')}
					/>
				)) }
				{ posts.length >= 2 && map(take(posts, 2), ({ node: { childMarkdownRemark: post } }) => (
					<SleekGridItem
						cta={{ ctaValue: `/blog/${get(post, 'fields.slug')}`, ctaText: 'Lees blog' }}
						key={get(post, 'fields.slug')}
						src={get(post, 'frontmatter.banner')}
						title={get(post, 'frontmatter.title')}
					/>
				)) }
			</SleekGrid>
		</Main>
	);
};

export default Home;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query IndexQuery {
		allFile(filter: { name: { ne:".gitinclude" } }) {
			edges {
				node {
					sourceInstanceName
					childAanbodJson {
						fields {
							slug
						}
						images {
							image
						}
						spotlight
						title
						type
					}
					childMarkdownRemark {
						fields {
							slug
						}
						frontmatter {
							banner
							title
						}
					}
				}
			}
		}
	}
`;
