import Roact from "@rbxts/roact";
import { Context } from "../Context";

interface panelState {
	panelVisible: boolean;
}
interface panelProps {
	index: number;
	name: string;
}

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
							Position={UDim2.fromScale(0.5, 0.5)}
							Size={UDim2.fromOffset(300, 500)}
							AnchorPoint={new Vector2(0.5, 0.5)}
							BackgroundTransparency={0}
							BorderSizePixel={0}
							BackgroundColor3={new Color3(30, 30, 30)}
							Visible={this.state.panelVisible}
						>
							<uicorner CornerRadius={new UDim(0, 6)} />
							<textlabel
								Text={this.props.name}
								AnchorPoint={new Vector2(0.5, 0)}
								Position={new UDim2(0.5, 0, 0, 0)}
								Size={UDim2.fromOffset(200, 50)}
								BackgroundTransparency={1}
								TextColor3={new Color3(255, 255, 255)}
								TextStrokeTransparency={0.5}
								TextScaled={true}
							></textlabel>
							{this.props[Roact.Children]}
						</frame>
					);
				}}
			></Context.Consumer>
		);
	}
}
