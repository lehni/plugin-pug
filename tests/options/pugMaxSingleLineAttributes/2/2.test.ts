import { readFileSync } from 'fs';
import { resolve } from 'path';
import { format } from 'prettier';
import { plugin } from './../../../../src/index';

describe('Options', () => {
	describe('pugMaxAttributesOnFirstLine', () => {
		test('should not allow more than two attributes on the first line of an element', () => {
			const expected: string = readFileSync(resolve(__dirname, 'formatted.pug'), 'utf8');
			const code: string = readFileSync(resolve(__dirname, 'unformatted.pug'), 'utf8');
			const actual: string = format(code, {
				parser: 'pug' as any,
				plugins: [plugin],
				// @ts-expect-error
				pugMaxAttributesOnFirstLine: 2
			});

			expect(actual).toBe(expected);
		});
	});
});
