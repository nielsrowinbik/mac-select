import React from 'react';
import Helmet from 'react-helmet';
import Main from '../components/Main';
import PageHeader from '../components/PageHeader';
import Link from 'gatsby-link';

const ContactPage = (props) => (
	<React.Fragment>
		<Helmet title="Deze pagina bestaat niet" />
		<Main>
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
	</React.Fragment>
);

export default ContactPage;
