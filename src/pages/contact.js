import React from 'react';
import Helmet from 'react-helmet';
import CTAButton from '../components/CTAButton';
import Input, { TextArea } from '../components/Input';
import Main from '../components/Main';
import PageHeader from '../components/PageHeader';
import ContactGrid, { ContactGridItem } from '../components/ContactGrid';
import Img from '../components/Img';

const ContactHeader = PageHeader.extend`
	padding-bottom: 56px;
`;

const ContactPage = (props) => {
	const title = 'Contact';
	const description = 'Mac Select is op verschillende manieren bereikbaar om al uw vragen te beantwoorden.';
	const Head = (
		<Helmet title={title}>
			<meta name="description" content={description} />
			<meta property="og:title" content={`${title} - Mac Select`} />
			<meta property="og:description" content={description} />
		</Helmet>
	);

	return (
		<Main>
			{Head}
			<ContactHeader>
				<h1>Contact met Mac Select</h1>
				<p>Dit zijn uw opties</p>
			</ContactHeader>
			<ContactGrid>
				<ContactGridItem href="tel:+31647028625">
					<Img alt="Phone icon" src="/assets/images/phone-icon.png" />
					<h2>Telefonisch</h2>
					<p>
						U kunt Mac Select op werkdagen bereiken door te bellen
						naar <span>06&nbsp;47&nbsp;02&nbsp;86&nbsp;25</span>
					</p>
				</ContactGridItem>
				<ContactGridItem href="mailto:info@mac-select.nl">
					<Img alt="Email icon" src="/assets/images/email-icon.png" />
					<h2>E-mail</h2>
					<p>
						Een e-mail sturen naar <span>info@mac-select.nl</span> levert
						u antwoord op binnen een werkdag
					</p>
				</ContactGridItem>
				<ContactGridItem isWide>
					<h2>Contactformulier</h2>
					<p>
						Stuur direct een bericht naar Mac Select via onderstaand formulier.<br />
						Er wordt zo snel mogelijk contact met u opgenomen.
					</p>
					<form name="contact" data-netlify="true">
						<Input
							placeholder="Naam"
							required
							type="text"
						/>
						<Input
							placeholder="E-mail"
							required
							type="email"
						/>
						<Input
							placeholder="Telefoon (optioneel)"
							type="tel"
						/>
						<TextArea
							placeholder="Bericht"
							rows={6}
						/>
						<CTAButton type="submit">Verstuur</CTAButton>
					</form>
				</ContactGridItem>
				<ContactGridItem href="https://goo.gl/maps/nj6eWzxXzN22">
					<Img alt="Location icon" src="/assets/images/location-icon.png" />
					<h2>Kom langs</h2>
					<p>
						Mac Select is gevestigd aan de <span>Oudedijk
						te Rotterdam</span>. Alleen op afspraak.
					</p>
				</ContactGridItem>
				<ContactGridItem>
					<Img icon="Info icon" src="/assets/images/info-icon.png" />
					<h2>Overige gegevens</h2>
					<p>
						KvK: 65002962
					</p>
				</ContactGridItem>
			</ContactGrid>
		</Main>
	);
};

export default ContactPage;
