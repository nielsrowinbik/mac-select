const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Mac Select'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: path.resolve(__dirname, 'src/pages/blog'),
				name: 'blog'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: path.resolve(__dirname, 'src/pages/aanbod'),
				name: 'aanbod'
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: { plugins: [] }
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: path.resolve(__dirname, 'src/cms/cms.js')
			}
		}
	]
};
