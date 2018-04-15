import React from 'react';
import ProductPageTemplate from '../../templates/product-page';
import { StyleSheetManager } from 'styled-components';

const ProductPagePreview = ({ entry, widgetFor }) => {
	const { data } = entry.toJS();
	const iframe = document.querySelector('.nc-previewPane-frame');
	const iframeHeadElem = iframe.contentDocument.head;

	return (
		<StyleSheetManager target={iframeHeadElem}>
			<ProductPageTemplate
				{...data}
				isCMSPreview
			/>
		 </StyleSheetManager>
	);
};

export default ProductPagePreview;
