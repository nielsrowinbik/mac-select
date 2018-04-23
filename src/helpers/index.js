import { get } from 'lodash';

export const keyIsValue = (keyPath: string, value: any) => (obj) => get(obj, keyPath) === value;

export const isBlogPost = keyIsValue('node.sourceInstanceName', 'blog');
export const isProduct = keyIsValue('node.sourceInstanceName', 'aanbod');
export const isSpotlight = keyIsValue('node.childAanbodJson.spotlight', true);

