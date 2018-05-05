import styled from 'styled-components';
import Link from 'gatsby-link';
import { container } from '../mixins';

const ProductGridItem = styled(Link)`
	${container}
	color: inherit;
	max-width: 800px;

	:hover {
		text-decoration: none;

		& > div > div > p:last-child {
			text-decoration: underline;
		}
	}

	& > h2 {
		margin: 0;
	}

	& > div {
		display: flex;
		flex-direction: column-reverse;
		flex-wrap: nowrap;
		justify-content: space-between;
		text-decoration: none;

		& > img {
			height: 250px;
			object-fit: contain;
		}

		& > div {

			& > h3 {
				margin: 1rem 0;
			}

			& > p {
				margin: 0.3rem 0;

				&:last-child {
					color: ${({ theme }) => theme.text.link};
				}
			}
		}
	}

	@media (min-width: 701px) {
		& > div {
			flex-direction: row;

			& > img {
				max-width: 300px;
			}
		}
	}
`;

const ProductGrid = styled.div`
	display: flex;
	flex-direction: column;
`;

export { ProductGrid, ProductGridItem };
export default ProductGrid;
