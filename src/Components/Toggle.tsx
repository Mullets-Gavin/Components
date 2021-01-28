import Roact from "@rbxts/roact";

interface toggleState {}
interface toggleProps {
	onClick: () => void;
	text: string;
	layout: number;
	image: string;
}

// A generic toggle on the side of the screen used to open an associated panel
export class Toggle extends Roact.Component<toggleProps, toggleState> {
	constructor(props: toggleProps) {
		super(props);
	}

	render() {
		return (
			<textbutton
				Text={""}
				Size={UDim2.fromScale(1, 1)}
				BorderSizePixel={0}
				LayoutOrder={this.props.layout}
				Event={{
					MouseButton1Click: () => this.props.onClick(),
				}}
			>
				<uiaspectratioconstraint AspectRatio={1} />
				<uicorner CornerRadius={new UDim(0, 6)} />
				<uipadding
					PaddingTop={new UDim(0, 6)}
					PaddingBottom={new UDim(0, 6)}
					PaddingLeft={new UDim(0, 6)}
					PaddingRight={new UDim(0, 6)}
				/>
				<imagelabel
					Image={this.props.image}
					Size={UDim2.fromScale(1, 1)}
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={UDim2.fromScale(0.5, 0.5)}
					BackgroundTransparency={1}
				/>
			</textbutton>
		);
	}
}
