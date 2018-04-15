import { filter, map, take } from 'lodash';
import React from 'react';
import Main from '../components/Main';
import Hero from '../components/Hero';
import Link from 'gatsby-link';
import SleekGrid, { SleekGridItem } from '../components/SleekGrid';
import { isBlogPost } from '../helpers';

const Home = () => {
	const edges = [];
	
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
			<Hero src="/assets/images/mac_book_pro_2016_alt.png" rtl>
				<h1>Uw Mac verkopen</h1>
				<h2><Link to="/verkopen">Doe de prijscheck</Link></h2>
				<p>
					Bent u van plan uw Mac te verkopen? Check binnen één minuut wat u van Mac Select voor uw Mac kunt krijgen en maak
					met één druk op de knop de verkoop rond.
				</p>
			</Hero>
			<SleekGrid>
				{ map(take(filter(edges, isBlogPost), 2), ({ node: post }) => (
					<SleekGridItem
						cta={{ ctaValue: post.fields.slug, ctaText: 'Lees blog' }}
						title={post.frontmatter.title}
					/>
				)) }
			</SleekGrid>
		</Main>
	);
};

export default Home;
