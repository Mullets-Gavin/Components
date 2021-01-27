import Roact from "@rbxts/roact";

interface toggleState {}
interface toggleProps {
	onClick: () => void;
	text: string;
}

export class Toggle extends Roact.Component<toggleProps, toggleState> {
	constructor(props: toggleProps) {
		super(props);
	}

	render() {
		return (
			<textbutton
				Text={this.props.text}
				Size={UDim2.fromOffset(100, 50)}
				Event={{
					MouseButton1Click: () => {
						this.props.onClick();
					},
				}}
			/>
		);
	}
}
