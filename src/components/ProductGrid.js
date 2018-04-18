import styled from 'styled-components';
import Link from 'gatsby-link';
import { container } from '../mixins';

const ProductGridItem = styled(Link)`
	${container}
	color: inherit;

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
		flex-wrap: nowrap;
		justify-content: space-between;
		text-decoration: none;

		& > img {
			height: 220px;
			max-width: 300px;
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

`;

const ProductGrid = styled.div`
	display: grid;
	grid-row-gap: 60px;
`;

export { ProductGrid, ProductGridItem };
export default ProductGrid;
