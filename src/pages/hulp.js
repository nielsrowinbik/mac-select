import React from 'react';
import Main from '../components/Main';
import PageHeader from '../components/PageHeader';
import { get, map, take } from 'lodash';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import SleekGrid, { SleekGridItem } from '../components/SleekGrid';
import { default as QASection, BlogHeader as QASectionHeader, BlogContent as QASectionContent } from '../components/Blog';

const HulpHeader = PageHeader.extend`
	padding-bottom: 56px;
`;

const HulpPage = (props) => {
	const posts = get(props, 'data.allFile.edges');

	return (
		<React.Fragment>
			<Helmet title="Hulp" />
			<Main>
				<HulpHeader>
					<h1>Mac Select helpt u</h1>
					<p>
						<a href="#aankoop">Hulp bij aankoop</a> · <a href="#verkoop">Hulp bij verkoop</a>
					</p>
				</HulpHeader>
				<SleekGrid style={{ marginBottom: 56 }}>
					{ posts.length >= 2 && map(take(posts, 2), ({ node: { childMarkdownRemark: post } }) => (
						<SleekGridItem
							cta={{ ctaValue: `/blog${get(post, 'fields.slug')}`, ctaText: 'Lees blog' }}
							src={get(post, 'frontmatter.banner')}
							title={get(post, 'frontmatter.title')}
						/>
					)) }
				</SleekGrid>
				<QASection id="aankoop">
					<QASectionHeader>
						<h2 style={{ marginBottom: '2.5rem' }}>Hulp bij aankoop</h2>
						<QASectionContent>
							<h3>Welke Mac heb ik nodig?</h3>
							<p>
								Voor ieder doeleinde bestaat een geschikte Mac! Maar welke past het beste bij uw wensen?
								Voor een vrijblijvend persoonlijk advies kunt u contact opnemen met Mac Select.
								Onze contactgegevens vindt u <Link to="/contact">hier</Link>.
							</p>
							<h3>Waar moet ik op letten bij de aanschaf van een gebruikte Mac?</h3>
							<p>
								Bij de aanschaf van een tweedehands Mac wilt u er natuurlijk van verzekerd zijn dat u een
								goede koop doet. De volgende zaken zijn van belang bij de aanschaf van een tweedehands Mac:
							</p>
							<ul style={{ marginBottom: 40 }}>
								<li>Leeftijd</li>
								<li>Staat, zoals de behuizing, harde schijf en het scherm</li>
								<li>Reparatiegeschiedenis</li>
								<li>Compleetheid (toetsenbord, muis, doos en bon)</li>
								<li>Functioneren naar behoren</li>
								<li>De juiste prijs</li>
							</ul>
							<p>
								Wilt u een goede tweedehands Mac kopen, maar geeft u het zoekproces liever uit handen?
								Dat kan! U kunt Mac Select een zoekopdracht geven door <Link to="/contact">contact</Link> op
								te nemen. Wanneer de juiste Mac voor u gevonden is, kunt u overgaan tot de aanschaf
								van de tweedehands Mac die perfect bij u past!
							</p>
							<h3>Waarom zou ik een gebruikte Mac kopen?</h3>
							<p>
								Bij aanschaf van een Mac heeft u de keuze tussen een tweedehands Mac of een nieuwe Mac.
								Een nieuwe Mac heeft doorgaans een relatief hoge prijs. De prijs van een tweedehands Mac
								is vaak een stuk gunstiger. Daarnaast zijn tweedehands Macs vaak nog in goede staat en
								gaan ze een lange tijd mee. U kunt dus een zo goed als nieuwe Mac kopen met een
								aanzienlijke korting! Door te kiezen voor een aanschaf bij Mac Select, bent u er zeker
								van dat u een kwalitatief goede Mac koopt die nog lange tijd gebruikt kan worden.
							</p>
							<h3>Welke accessoires heb ik nodig voor mijn Mac?</h3>
							<p>
								Voor het optimale gebruik van uw Mac kunnen accessoires goed van pas komen. Bij een
								MacBook kunt u een Magic Mouse gebruiken of een Magic Keyboard. Daarnaast zijn er
								nog accessoires zoals een Apple USB Superdrive, waarmee u schijven kunt afspelen.
								Daarnaast zijn er nog tal van accessoires die het gebruik van een Mac optimaliseren.
							</p>
						</QASectionContent>
					</QASectionHeader>
				</QASection>
				<QASection id="verkoop">
					<QASectionHeader>
						<h2>Hulp bij verkoop</h2>
						<QASectionContent>
							<h3>Hoe maak ik mijn Mac klaar voor verkoop?</h3>
							<p>
								Wanneer u uw Mac verkoopt, is het van belang dat uw gegevens veilig zijn. Zorg er dan
								ook voor dat u een back-up heeft van uw gegevens. Deze back-up is vrij simpel te maken
								met een USB harde schijf en het ingebouwde Apple-programma ‘Time Machine’. Hiermee maakt
								u eenvoudig en snel een back-up van uw Mac. Vervolgens dient u uit te loggen van iCloud
								en moet de Mac leeggehaald worden. Dit leeghalen doet u door tijdens het opstarten van uw
								Mac de CMD-toets en de R-toets in te drukken. Hiermee komt u in het installatieprogramma
								van Apple. Kies vervolgens voor de optie ‘Schijfhulpprogramma’ en wis uw harde schijf.
								Doet dit alleen wanneer u er zeker van bent dat u uw bestanden opgeslagen heeft in uw
								back-up! Wanneer de harde schijf gewist is kiest u de optie ‘Installatie OS X/macOS
								opnieuw’. Wanneer u het installatiemenu doorloopt en de installatie voltooid is, is
								uw Mac klaar voor de verkoop!
							</p>
							<p>
								Als het u niet lukt om de Mac leeg te halen, kan Mac Select dit doen wanneer u ervoor
								kiest uw Mac aan Mac Select te verkopen. Bij het ophalen van uw Mac wordt gecontroleerd
								dat uw gegevens verwijderd zijn en wordt dit zo nodig gedaan. Zo bent u er zeker van dat
								uw gegevens veilig zijn.
							</p>
							<h3>Wat is mijn Mac waard?</h3>
							<p>
								Wanneer u uw tweedehands Mac gaat verkopen, wilt u natuurlijk weten wat uw tweedehands
								Mac waard is. Dit kunt u binnen een minuut ontdekken door de <Link to="/verkopen">prijschecker
								van Mac Select</Link> te gebruiken. U vult heel gemakkelijk de specificaties in van uw
								tweedehands Mac en wanneer u akkoord gaat met de geboden waarde kunt u kiezen om uw tweedehands
								Mac te verkopen. Mac Select zal contact met u opnemen voor een afspraak om de Mac op te halen.
								Tijdens het ophalen ontvangt u de prijs voor uw Mac. Op deze manier heeft u enkel luttele minuten
								werk aan het verkopen van uw tweedehands Mac. Eenvoud, transparantie en snelheid is de kern van
								Mac Select!
							</p>
						</QASectionContent>
					</QASectionHeader>
				</QASection>
			</Main>
		</React.Fragment>
	);
};

export default HulpPage;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query HulpQuery {
		allFile(filter: { sourceInstanceName: { eq: "blog" } name: { ne:".gitinclude" } }, limit: 2) {
			edges {
				node {
					childMarkdownRemark {
						id
						fields {
							slug
						}
						frontmatter {
							banner
							date
							title
						}
					}
				}
			}
		}
	}
`;
