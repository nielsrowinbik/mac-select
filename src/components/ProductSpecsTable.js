import React from 'react';
import styled from 'styled-components';
import { container } from '../mixins';
import { get, map, template } from 'lodash';

const UnstyledProductSpecsTable = ({ product, rows, ...props }) => (
	<section {...props}>
		<h2>Specificaties:</h2>
		<table>
			<tbody>
				{ map(rows, ({ label, value }) => (
					<tr>
						<td>{ label }</td>
						<td>{ get(product, value) || template(value)(product) }</td>
					</tr>
				)) }
			</tbody>
		</table>
	</section>
);

const ProductSpecsTable = styled(UnstyledProductSpecsTable)`
	${container}

	& > table {
		border: 1px solid #eceef0;
		border-collapse: collapse;

		& > tbody > tr {
			display: flex;

			:nth-child(odd) {
				background-color: #eceef0;
			}

			& > td {
				align-items: center;
				display: inline-flex;
				padding: 9px 17px;

				&:first-child {
					font-weight: 400;
					min-width: 155px;
					width: 12.5vw;
				}

				&:last-child {
					border-left: 1px solid #eceef0;
					font-weight: 700;
					width: auto;
				}
			}
		}

	}
`;

export { ProductSpecsTable };
export default ProductSpecsTable;
