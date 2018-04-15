import React from 'react';
import Main from '../components/Main';
import moment from 'moment';
import Helmet from 'react-helmet';
import Blog, { BlogHeader, BlogContent } from '../components/Blog';

const BlogPostTemplate = ({
	banner,
	content,
	description,
	isCMSPreview,
	published,
	title
}) => (
	<React.Fragment>
		{ !isCMSPreview && <Helmet title={`${title} - Blog`} /> }
		<Main bg="#f6f6f6">
			<Blog>
				<BlogHeader>
					<span>{ moment(published).locale('nl').format('D MMMM, YYYY') }</span>
					<h1>{ title }</h1>
					<hr />
					<p>{ description }</p>
				</BlogHeader>
				{ isCMSPreview
					? <BlogContent>{ content }</BlogContent>
					: <BlogContent dangerouslySetInnerHTML={{ __html: content }} /> }
			</Blog>
		</Main>
	</React.Fragment>
);

export { BlogPostTemplate };
