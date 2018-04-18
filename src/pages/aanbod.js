import React from 'react';
import Main from '../components/Main';
import ProductGrid, { ProductGridItem } from '../components/ProductGrid';
import PageHeader from '../components/PageHeader';
import { get, map } from 'lodash';
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
					{ map(products, ({ node: { childMarkdownRemark: product } }) => (
						<ProductGridItem
							key={get(product, 'fields.slug')}
							to={`/aanbod${get(product, 'fields.slug')}`}
						>
							<h2>{get(product, 'frontmatter.title')}</h2>
							<div>
								<div>
									<h3><s>&euro;{get(product, 'frontmatter.price.old')}</s> <strong>&euro;{get(product, 'frontmatter.price.new')}</strong></h3>
									{ get(product, 'frontmatter.cpu') && <p>{get(product, 'frontmatter.cpu.name')} ({get(product, 'frontmatter.cpu.speed')} GHz)</p> }
									{ get(product, 'frontmatter.ram') && <p>{get(product, 'frontmatter.ram')} GB werkgeheugen</p> }
									{ get(product, 'frontmatter.storage') && <p>{get(product, 'frontmatter.storage.amount')} GB opslag ({get(product, 'frontmatter.storage.type')})</p> }
									{ get(product, 'frontmatter.gpu') && <p>{get(product, 'frontmatter.gpu.name')}</p> }
									{ get(product, 'frontmatter.other.box') && <p>In originele doos</p> }
									<p>Meer informatie</p>
								</div>
								<img src={get(product, 'frontmatter.images[0].image')} />
							</div>
						</ProductGridItem>
					)) }
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
	}
`;
