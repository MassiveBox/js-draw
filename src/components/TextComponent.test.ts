import Color4 from '../Color4';
import EditorImage from '../EditorImage';
import Mat33 from '../math/Mat33';
import TextStyle from '../rendering/TextRenderingStyle';
import createEditor from '../testing/createEditor';
import AbstractComponent from './AbstractComponent';
import TextComponent from './TextComponent';


describe('TextComponent', () => {
	it('should be serializable', () => {
		const style: TextStyle = {
			size: 12,
			fontFamily: 'serif',
			renderingStyle: { fill: Color4.black },
		};
		const text = new TextComponent([ 'Foo' ], Mat33.identity, style);
		const serialized = text.serialize();
		const deserialized = AbstractComponent.deserialize(serialized) as TextComponent;
		expect(deserialized.getBBox()).objEq(text.getBBox());
		expect(deserialized['getText']()).toContain('Foo');
	});

	it('should be deserializable', () => {
		const textComponent = TextComponent.deserializeFromString(`{
			"textObjects": [ { "text": "Foo" } ],
			"transform": [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ],
			"style": {
				"fontFamily": "sans",
				"size": 10,
				"renderingStyle": { "fill": "#000" }
			}
		}`);

		expect(textComponent.getText()).toBe('Foo');
		expect(textComponent.getTransform()).objEq(Mat33.identity);
		expect(textComponent.getStyle().color!).objEq(Color4.black);
		expect(textComponent.getTextStyle().fontFamily!).toBe('sans');
	});

	it('should be restylable', () => {
		const style: TextStyle = {
			size: 10,
			fontFamily: 'sans',
			renderingStyle: { fill: Color4.red },
		};
		const text = new TextComponent([ 'Foo' ], Mat33.identity, style);

		expect(text.getStyle().color).objEq(Color4.red);
		text.forceStyle({
			color: Color4.green,
		}, null);
		expect(text.getStyle().color).objEq(Color4.green);
		expect(text.getTextStyle().renderingStyle.fill).objEq(Color4.green);

		const restyleCommand = text.updateStyle({
			color: Color4.purple,
		});

		// Should queue a re-render after restyling.
		const editor = createEditor();
		EditorImage.addElement(text).apply(editor);

		editor.rerender();
		expect(editor.isRerenderQueued()).toBe(false);
		editor.dispatch(restyleCommand);
		expect(editor.isRerenderQueued()).toBe(true);

		// Undoing should reset to the correct color.
		expect(text.getStyle().color).objEq(Color4.purple);
		editor.history.undo();
		expect(text.getStyle().color).objEq(Color4.green);
	});
});