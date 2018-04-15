import React from 'react';
import { BlogPostTemplate } from '../../templates/blog-post';
import { StyleSheetManager } from 'styled-components';

const BlogPostPreview = ({ entry, widgetFor }) => {
	const { data } = entry.toJS();
	const iframe = document.querySelector('.nc-previewPane-frame');
	const iframeHeadElem = iframe.contentDocument.head;

	return (
		<StyleSheetManager target={iframeHeadElem}>
			<BlogPostTemplate
				{...data}
				content={widgetFor('body')}
				isCMSPreview
			/>
		 </StyleSheetManager>
	);
};

export default BlogPostPreview;
