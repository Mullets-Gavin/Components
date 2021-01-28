import Roact from "@rbxts/roact";
import { Context } from "../Context";

interface panelState {
	panelVisible: boolean;
}
interface panelProps {
	index: number;
	visible?: boolean;
}

// Panel is a full-screen size frame that allows you to toggle visibility
// for your toggles
export class Panel extends Roact.Component<panelProps, panelState> {
	constructor(props: panelProps) {
		super(props);

		this.setState({
			panelVisible: false,
		});
	}

	render(): Roact.Element {
		return (
			<Context.Consumer
				render={(value: { viewIndex: number; setPage: (index: number) => void }) => {
					if (this.state.panelVisible === true && value.viewIndex !== this.props.index) {
						this.setState({ panelVisible: false });
					} else if (this.state.panelVisible === false && value.viewIndex === this.props.index) {
						this.setState({ panelVisible: true });
					}

					return (
						<frame
							Key={"Panel"}
							Position={UDim2.fromScale(0.5, 0.5)}
							Size={UDim2.fromScale(1, 1)}
							AnchorPoint={new Vector2(0.5, 0.5)}
							BackgroundTransparency={1}
							BorderSizePixel={0}
							BackgroundColor3={new Color3(30, 30, 30)}
							Visible={this.props.visible ?? this.state.panelVisible}
						>
							{this.props[Roact.Children]}
						</frame>
					);
				}}
			></Context.Consumer>
		);
	}
}
