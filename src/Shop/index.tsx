import Roact from "@rbxts/roact";
import { Pages } from "../Context";
import { Panel } from "../Components/Panel";

interface shopState {
	count: number;
}
interface shopProps {
	visible?: boolean;
}

export class Shop extends Roact.Component<shopProps, shopState> {
	constructor(props: shopProps) {
		super(props);

		this.setState({ count: 10 });
	}

	render() {
		return (
			<Panel Key={"Shop"} index={Pages.shop} visible={this.props.visible}>
				<uicorner CornerRadius={new UDim(0, 6)} />

				<textlabel
					Key={"Counter"}
					Size={UDim2.fromOffset(150, 50)}
					Position={new UDim2(0.5, 0, 0, 200)}
					AnchorPoint={new Vector2(0.5, 0)}
					Text={tostring(this.state.count)}
				/>

				<textbutton
					Key={"Increment"}
					Size={UDim2.fromOffset(150, 50)}
					Position={new UDim2(0.5, 0, 0, 300)}
					AnchorPoint={new Vector2(0.5, 0)}
					Text={"Increment Counter"}
					Event={{
						MouseButton1Click: () => this.setState({ count: this.state.count + 1 }),
					}}
				/>
			</Panel>
		);
	}
}
