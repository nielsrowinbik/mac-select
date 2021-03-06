import React from 'react';
import Main from '../components/Main';
import ProductGrid, { ProductGridItem } from '../components/ProductGrid';
import PageHeader from '../components/PageHeader';
import { get, map } from 'lodash';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Img from '../components/Img';

const AanbodHeader = PageHeader.extend`
	padding-bottom: 56px;
`;

const AanbodPage = (props) => {
	const { data = {} } = props;
	const { allFile } = data;

	const title = 'Het huidige aanbod tweedehands Macs, iMacs, en Macbooks';
	const description = 'Het aanbod van Mac Select bestaat uit zorgvuldig geselecteerde en betrouwbare tweedehands Macs, iMacs, en Macbooks. Heeft u hulp nodig met kiezen? Mac Select helpt u graag.';
	const Head = (
		<Helmet title={title}>
			<meta name="description" content={description} />
			<meta property="og:title" content={`${title} - Mac Select`} />
			<meta property="og:description" content={description} />
		</Helmet>
	);

	if (!allFile) return (
		<Main bg="#f6f6f6">
			{Head}
			<PageHeader>
				<p>Mac Select heeft op dit moment geen producten online staan.</p>
			</PageHeader>
		</Main>
	);

	const { edges: products } = allFile;
	
	return (
		<Main bg="#f6f6f6">
			{Head}
			<AanbodHeader>
				<h1>Het huidige Mac Select aanbod</h1>
				<Link to="/hulp">Help me met kiezen</Link>
			</AanbodHeader>
			<ProductGrid>
				{ map(products, ({ node: { childAanbodJson } }) => {
					const { fields, ...product } = childAanbodJson;
					const { slug } = fields;
					const {
						cpu,
						gpu,
						images,
						other,
						price,
						ram,
						storage,
						title
					} = product;

					return (
						<ProductGridItem
							key={slug}
							to={`/aanbod/${slug}`}
						>
							<h2>{title}</h2>
							<div>
								<div>
									<h3><s>&euro;{parseFloat(price.old).toFixed(2)}</s> <strong>&euro;{parseFloat(price.new).toFixed(2)}</strong></h3>
									{ cpu && <p>{cpu.name} ({cpu.speed} GHz)</p> }
									{ ram && <p>{ram} GB werkgeheugen</p> }
									{ storage && <p>{storage.amount} GB opslag ({storage.type})</p> }
									{ gpu && <p>{gpu.name}</p> }
									{ (other && other.box) && <p>In originele doos</p> }
									<p>Meer informatie</p>
								</div>
								<Img alt={product.title} src={get(images, '[0].image')} />
							</div>
						</ProductGridItem>
					);
				}) }
			</ProductGrid>
		</Main>
	);
};

export default AanbodPage;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query AanbodQuery {
		allFile(filter: { sourceInstanceName: { eq: "aanbod" } name: { ne:".gitinclude" } }) {
			edges {
				node {
					childAanbodJson {
						fields {
							slug
						}
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
						storage {
							amount
							type
						}
						title
					}
				}
			}
		}
	}
`;
