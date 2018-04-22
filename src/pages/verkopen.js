import React from 'react';
import Main from '../components/Main';
import PageHeader from '../components/PageHeader';
import Helmet from 'react-helmet';

const VerkopenPage = (props) => (
	<React.Fragment>
		<Helmet title="Uw Mac verkopen" />
		<Main>
			<PageHeader>
				<h1>Uw Mac verkopen</h1>
				<p>
					Om gemakkelijk en snel een waarde te ontvangen voor uw Mac vult u de prijschecker hieronder<br />
					in. U heeft binnen één minuut een indicatie van de waarde van uw Mac en kunt met slechts één<br />
					druk op de knop de verkoop rond maken.
				</p>
			</PageHeader>
		</Main>
	</React.Fragment>
);

export default VerkopenPage;
