import { Rect2, TextComponent, Vec2 } from './lib';
import SVGLoader from './SVGLoader';
import createEditor from './testing/createEditor';

describe('SVGLoader', () => {
	it('should correctly load x/y-positioned text nodes', async () => {
		const editor = createEditor();
		await editor.loadFrom(SVGLoader.fromString(`
			<svg>
				<text>Testing...</text>
				<text y=100>Test 2...</text>
				<text x=100>Test 3...</text>
				<text x=100 y=100>Test 3...</text>
		
				<!-- Transform matrix: translate by (100,0) -->
				<text style='transform: matrix(1,0,0,1,100,0);'>Test 3...</text>
			</svg>
		`, true));
		const elems = editor.image
			.getElementsIntersectingRegion(new Rect2(-1000, -1000, 10000, 10000))
			.filter(elem => elem instanceof TextComponent);
		expect(elems).toHaveLength(5);
		const topLefts = elems.map(elem => elem.getBBox().topLeft);

		// Top-left of Testing... should be (0, 0) ± 10 pixels (objects are aligned based on baseline)
		expect(topLefts[0]).objEq(Vec2.of(0, 0), 10);

		expect(topLefts[1].y - topLefts[0].y).toBe(100);
		expect(topLefts[1].x - topLefts[0].x).toBe(0);

		expect(topLefts[2].y - topLefts[0].y).toBe(0);
		expect(topLefts[2].x - topLefts[0].x).toBe(100);

		expect(topLefts[4].x - topLefts[0].x).toBe(100);
		expect(topLefts[4].y - topLefts[0].y).toBe(0);
	});
});