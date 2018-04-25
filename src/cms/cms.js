import CMS from 'netlify-cms';
import BlogPostPreview from './previews/BlogPostPreview';
import ProductPagePreview from './previews/ProductPagePreview';

CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
