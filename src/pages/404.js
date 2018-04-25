import React from 'react';
import Helmet from 'react-helmet';
import Main from '../components/Main';
import PageHeader from '../components/PageHeader';
import Link from 'gatsby-link';

const ContactPage = (props) => (
	<Main>
		<Helmet title="Deze pagina bestaat niet" />
		<PageHeader>
			<h1>404 - pagina niet gevonden</h1>
			<p>
				De opgevraagde pagina bestaat niet (meer). Dat is alles wat we weten.
			</p>
			<p>
				<Link to="/">Terug naar Home</Link>
			</p>
		</PageHeader>
	</Main>
);

export default ContactPage;
