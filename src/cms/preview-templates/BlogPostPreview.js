import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../templates/blog-post';
import { StyleSheetManager } from 'styled-components';

const BlogPostPreview = ({ entry, widgetFor }) => {
	const iframe = document.querySelector('.nc-previewPane-frame');
	const iframeHeadElem = iframe.contentDocument.head;

	return (
		<StyleSheetManager target={iframeHeadElem}>
			<BlogPostTemplate
				content={widgetFor('body')}
				date={entry.getIn(['data', 'date'])}
				description={entry.getIn(['data', 'description'])}
				title={entry.getIn(['data', 'title'])}
			/>
		 </StyleSheetManager>
	);
};

BlogPostPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default BlogPostPreview;
