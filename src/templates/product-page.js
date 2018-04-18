import React from 'react';
import Main from '../components/Main';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import PageHeader from '../components/PageHeader';
import ProductSpecsTable from '../components/ProductSpecsTable';
import { container } from '../mixins';
import styled from 'styled-components';
import { map } from 'lodash';

const ProductHeader = PageHeader.extend`
	padding-bottom: 56px;
`;

const ProductFooter = PageHeader.extend`
	padding-top: 56px;
`;

const ProductSection = styled.section`
	${container}
`;

const ProductPageTemplate = ({
	isCMSPreview,
	...product
}) => (
	<React.Fragment>
		{ !isCMSPreview && <Helmet title={`${product.title} - Het huidige aanbod tweedehands Macs, iMacs, en Macbooks`} /> }
		<Main bg="#f6f6f6">
			<ProductHeader>
				<h1>{ product.title }</h1>
				<h2>
					<s>&euro;{parseFloat(product.price.old).toFixed(2)}</s>&nbsp;&nbsp;<strong>&euro;{parseFloat(product.price.new).toFixed(2)}</strong>
				</h2>
				<p>
					<Link to="/contact">Koop deze {product.type} direct!</Link>
				</p>
			</ProductHeader>
			{product.description && <ProductSection>{ product.description }</ProductSection> }
			<ProductSpecsTable
				product={product}
				rows={[
					{
						label: 'Type product',
						value: 'Apple ${type}'
					},
					{
						label: 'Formaat',
						value: '${size} inch'
					},
					{
						label: 'Staat',
						value: 'state'
					},
					{
						label: 'Processor',
						value: '${cpu.name} (${cpu.speed} GHz)'
					},
					{
						label: 'Werkgeheugen',
						value: '${ram} GB'
					},
					{
						label: 'Opslag',
						value: '${storage.amount} GB opslag (${storage.type})'
					},
					{
						label: 'Grafische kaart',
						value: '${gpu.name} (${gpu.memory} MB geheugen)'
					},
					{
						label: 'Orginele doos',
						value: '${other.box ? \'Ja\' : \'Nee\'}'
					},
					{
						label: 'Orgineel aankoopbewijs',
						value: '${other.receipt ? \'Ja\' : \'Nee\'}'
					},
					{
						label: 'Productsoort',
						value: '${other.vat ? \'BTW\' : \'Marge\'}'
					}
				]}
			/>
			<ProductFooter>
				<h1><Link to="/contact">Klik hier voor een vraag of afspraak</Link></h1>
			</ProductFooter>
		</Main>
	</React.Fragment>
);

const ProductPage = (props) => {
	const { data } = props;
	const { markdownRemark: product } = data;

	return (
		<ProductPageTemplate {...product.frontmatter} />
	);
};

export { ProductPage, ProductPageTemplate };
export default ProductPage;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query ProductByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				cpu {
					name
					speed
				}
				gpu {
					name
				}
				images {
					image
				}
				other {
					box
				}
				price {
					old
					new
				}
				ram
				size
				state
				storage {
					amount
					type
				}
				title
				type
			}
		}
	}
`;
