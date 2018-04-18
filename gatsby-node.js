const { createFilePath } = require('gatsby-source-filesystem');
const { get, trimEnd } = require('lodash');
const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators;
	
	return graphql(`
		{
			allFile(filter: { name: { ne: ".gitinclude" } }) {
				edges {
					node {
						sourceInstanceName
						childMarkdownRemark {
							id
							fields {
								slug
							}
							frontmatter {
								templateKey
							}
						}
					}
				}
			}
		}
	`).then(handler(createPage));
};

const handler = (createPage) => (result) => {
	if (result.errors) {
		result.errors.forEach(e => console.error(e.toString()));
		return Promise.reject(result.errors);
	}

	const edges = get(result, 'data.allFile.edges');

	edges.forEach((edge) => {
		const { node } = edge;
		const { sourceInstanceName, childMarkdownRemark } = node;
		const { id, fields, frontmatter } = childMarkdownRemark;

		createPage({
			path: `/${sourceInstanceName}${fields.slug}`,
			component: path.resolve(`src/templates/${frontmatter.templateKey}.js`),
			context: { id }
		});
	});
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
	const { createNodeField } = boundActionCreators;

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value: trimEnd(value, '/')
		});
	}
};
