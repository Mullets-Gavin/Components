import Roact from "@rbxts/roact";

// A function that updates the size of the scrolling frame
function updateContentSize(scrollingFrame: ScrollingFrame) {
	const gridLayout = scrollingFrame.FindFirstChildWhichIsA("UIGridStyleLayout")!;
	if (!gridLayout) throw `No UIGridStyleLayout was found in ${scrollingFrame.GetFullName()}`;

	function resizeCanvas() {
		scrollingFrame.CanvasSize = UDim2.fromOffset(
			gridLayout.AbsoluteContentSize.X,
			gridLayout.AbsoluteContentSize.Y,
		);
	}

	gridLayout.GetPropertyChangedSignal("AbsoluteContentSize").Connect(resizeCanvas);
	resizeCanvas();
}

interface frameState {}
interface frameProps extends Partial<ScrollingFrame> {}

// Rescaling scrolling frame written by Overhash
export class AutoScrollingFrame extends Roact.Component<frameProps, frameState> {
	ref: Roact.Ref<ScrollingFrame>;

	constructor(props: frameProps) {
		super(props);

		this.ref = Roact.createRef();
	}

	didMount() {
		updateContentSize(this.ref.getValue()!);
	}

	render() {
		return <scrollingframe {...this.props} Ref={this.ref} />;
	}
}
