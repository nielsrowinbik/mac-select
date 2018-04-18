import React from 'react';
import Main from '../components/Main';
import ProductGrid, { ProductGridItem } from '../components/ProductGrid';
import PageHeader from '../components/PageHeader';
import { map } from 'lodash';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const AanbodHeader = PageHeader.extend`
	padding-bottom: 56px;
`;

const AanbodPage = (props) => {
	const { data } = props;
	const { allFile } = data;

	if (!allFile) return (
		<React.Fragment>
			<Helmet title="Blog" />
			<Main bg="#f6f6f6">
				<PageHeader>
					<p>Mac Select heeft op dit moment geen producten online staan.</p>
				</PageHeader>
			</Main>
		</React.Fragment>
	);

	const { edges: products } = allFile;
	
	return (
		<React.Fragment>
			<Helmet title="Het huidige aanbod tweedehands Macs, iMacs, en Macbooks" />
			<Main bg="#f6f6f6">
				<AanbodHeader>
					<h1>Het huidige Mac Select aanbod</h1>
					<Link to="/hulp">Help me met kiezen</Link>
				</AanbodHeader>
				<ProductGrid>
					{ map(products, ({ node: { childMarkdownRemark: product } }) => {
						const { fields, frontmatter } = product;
						const { slug } = fields;
						const {
							cpu,
							gpu,
							price,
							ram,
							storage,
							title
						} = frontmatter;

						return (
							<ProductGridItem
								key={slug}
								to={`/aanbod${slug}`}
							>
								<h2>{title}</h2>
								<div>
									<img />
									<div>
										<h3><s>&euro;{price.old}</s> <strong>&euro;{price.new}</strong></h3>
										{ cpu && <p>{cpu.name} ({cpu.speed} GHz)</p> }
										{ ram && <p>{ram} GB werkgeheugen</p> }
										{ storage && <p>{storage.amount} GB opslag ({storage.type})</p> }
										{ gpu && <p>{gpu.name}</p> }
										<p>Meer informatie</p>
									</div>
								</div>
							</ProductGridItem>
						);
					}) }
				</ProductGrid>
			</Main>
		</React.Fragment>
	);
};

export default AanbodPage;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query AanbodQuery {
		allFile(filter: { sourceInstanceName: { eq: "aanbod" } name: { ne:".gitinclude" } }) {
			edges {
				node {
					childMarkdownRemark {
						id
						fields {
							slug
						}
						frontmatter {
							cpu {
								name
								speed
							}
							gpu {
								name
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
	}
`;
