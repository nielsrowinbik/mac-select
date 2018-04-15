import React from 'react';
import Main from '../components/Main';
import Helmet from 'react-helmet';
import { get } from 'lodash';
import Link from 'gatsby-link';
import PageHeader from '../components/PageHeader';

const ProductPageTemplate = ({
	cpu,
	gpu,
	images,
	isCMSPreview,
	price,
	ram,
	size,
	state,
	storage,
	title,
	type
}) => (
	<React.Fragment>
		{ !isCMSPreview && <Helmet title={`${title} - Het huidige aanbod tweedehands Macs, iMacs, en Macbooks`} /> }
		<Main bg="#f6f6f6">
			<PageHeader>
				<h1>{ title }</h1>
				<h2>
					<s>&euro;&nbsp;{get(price, 'old')}</s> <strong>&euro;&nbsp;{get(price, 'new')}</strong>
				</h2>
				<p>
					<Link to="/contact">Koop deze {type} direct!</Link>
				</p>
			</PageHeader>
			<section>
				<h2>Specificaties:</h2>
				<table>
					<tbody>
						<tr>
							<td>Type product</td>
							<td>Apple {type}</td>
						</tr>
						<tr>
							<td>Formaat</td>
							<td>{size} inch</td>
						</tr>
						<tr>
							<td>Staat</td>
							<td>{state}</td>
						</tr>
						{ cpu && <tr>
							<td>Processor</td>
							<td>{get(cpu, 'name')} ({get(cpu, 'speed')} GHz)</td>
						</tr> }
						{ ram && <tr>
							<td>Werkgeheugen</td>
							<td>{get(ram, 'amount')}</td>
						</tr> }
						{ storage && <tr>
							<td>Werkgeheugen</td>
							<td>{get(storage, 'amount')} GB opslag</td>
						</tr> }
						{ gpu && <tr>
							<td>Grafische kaart</td>
							<td>{get(gpu, 'name')} ({get(gpu, 'memory')} MB geheugen)</td>
						</tr> }
					</tbody>
				</table>
			</section>
		</Main>
	</React.Fragment>
);

export default ProductPageTemplate;
