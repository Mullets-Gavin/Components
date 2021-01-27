import Roact from "@rbxts/roact";

interface CloseState {}
interface CloseProps {
	text: string;
	panel?: Frame;
}

export class Close extends Roact.Component<CloseProps, CloseState> {
	constructor(props: CloseProps) {
		super(props);
	}

	render() {
		return (
			<textbutton
				Text={this.props.text}
				Size={UDim2.fromOffset(100, 50)}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(1, 0)}
				Event={{
					MouseButton1Click: (rbx) => {
						if (!this.props.panel) return;

						print("worked!");
						this.props.panel.Visible = false;
					},
				}}
			/>
		);
	}
}
