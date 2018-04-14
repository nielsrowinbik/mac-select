export const isBlogPost = ({ node: { frontmatter: { templateKey } } }) => templateKey === 'blog-post';
