import Roact from "@rbxts/roact";

interface toggleState {}
interface toggleProps {
	onClick: () => void;
	text: string;
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
				Size={UDim2.fromOffset(100, 100)}
				BorderSizePixel={0}
				Event={{
					MouseButton1Click: () => this.props.onClick(),
				}}
			>
				<uicorner CornerRadius={new UDim(0, 6)} />
			</textbutton>
		);
	}
}
