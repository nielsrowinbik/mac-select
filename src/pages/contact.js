import React from 'react';
import Helmet from 'react-helmet';
import Main from '../components/Main';
import PageHeader from '../components/PageHeader';
import ContactGrid, { ContactGridItem } from '../components/ContactGrid';

const ContactPage = (props) => (
	<React.Fragment>
		<Helmet title="Contact" />
		<Main>
			<PageHeader>
				<h1>Contact met Mac Select</h1>
				<h2>Dit zijn uw opties</h2>
			</PageHeader>
			<ContactGrid>
				<ContactGridItem href="tel:+31647028625">
					<img src="/assets/images/phone-icon.png" />
					<h2>Telefonisch</h2>
					<p>
						U kunt Mac Select op werkdagen bereiken door te bellen
						naar <a href="tel:+31647028625">06&nbsp;47&nbsp;02&nbsp;86&nbsp;25</a>
					</p>
				</ContactGridItem>
				<ContactGridItem href="mailto:info@mac-select.nl">
					<img src="/assets/images/email-icon.png" />
					<h2>E-mail</h2>
					<p>
						Een e-mail sturen naar <a href="mailto:info@mac-select.nl">info@mac-select.nl</a> levert
						u antwoord op binnen een werkdag
					</p>
				</ContactGridItem>
				<ContactGridItem style={{ gridColumnEnd: 'span 2' }}>
					<h2>Contactformulier</h2>
					<p>
						Stuur direct een bericht naar Mac Select via onderstaand formulier.
						Er wordt zo snel mogelijk contact met u opgenomen.
					</p>
					<form netlify>
						<input
							placeholder="Name"
							required
							type="text"
						/>
						<input
							placeholder="E-mail"
							required
							type="email"
						/>
						<input
							placeholder="Telefoon (optioneel)"
							type="tel"
						/>
						<textarea
							placeholder="Bericht"
						/>
						<button type="submit">Verstuur</button>
					</form>
				</ContactGridItem>
				<ContactGridItem href="https://goo.gl/maps/nj6eWzxXzN22">
					<img src="/assets/images/location-icon.png" />
					<h2>Kom langs</h2>
					<p>
						Mac Select is gevestigd aan de <a href="https://goo.gl/maps/nj6eWzxXzN22">Oudedijk
						te Rotterdam</a>. Alleen op afspraak.
					</p>
				</ContactGridItem>
				<ContactGridItem>
					<img src="/assets/images/info-icon.png" />
					<h2>Overige gegevens</h2>
					<p>
						KvK: 65002962
					</p>
				</ContactGridItem>
			</ContactGrid>
		</Main>
	</React.Fragment>
);

export default ContactPage;
