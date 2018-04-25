const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Mac Select',
		siteUrl: 'https://www.mac-select.nl'
	},
	plugins: [
		'gatsby-plugin-preact',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-transformer-remark',
		'gatsby-transformer-json',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-catch-links',
		'gatsby-plugin-lodash',
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
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: path.resolve(__dirname, 'src/cms/cms.js')
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-76226052-1',
				head: false,
				anonymize: true,
				respectDNT: true
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Mac Select',
				short_name: 'Mac Select',
				start_url: '/',
				background_color: '#ffffff',
				theme_color: '#ffffff',
				display: 'standalone',
				icon: 'src/icon.png'
			}
		},
		'gatsby-plugin-remove-serviceworker'
	]
};
