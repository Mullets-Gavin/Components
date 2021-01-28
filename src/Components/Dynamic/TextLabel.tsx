import Roact from "@rbxts/roact";
import { TextService } from "@rbxts/services";

// A function that updates the size of a text label
function updateContentSize(textLabel: TextLabel) {
	function resizeLabel() {
		const labelSize = TextService.GetTextSize(
			textLabel.Text,
			textLabel.TextSize,
			textLabel.Font,
			new Vector2(500, textLabel.AbsoluteSize.Y),
		);

		textLabel.Size = UDim2.fromOffset(labelSize.X, textLabel.AbsoluteSize.Y);
	}

	textLabel.GetPropertyChangedSignal("Text").Connect(resizeLabel);
	resizeLabel();
}

interface labelState {}
interface labelProps extends Partial<TextLabel> {}

// A dynamic text label which resizes to fit text
export class AutoTextLabel extends Roact.Component<labelProps, labelState> {
	ref: Roact.Ref<TextLabel>;

	constructor(props: labelProps) {
		super(props);

		this.ref = Roact.createRef();
	}

	didMount() {
		updateContentSize(this.ref.getValue()!);
	}

	render() {
		return <textlabel {...this.props} Ref={this.ref} />;
	}
}
