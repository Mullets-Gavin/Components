import Roact from "@rbxts/roact";
import { Pages } from "../Context";
import { Panel } from "../Components/Panel";

interface inventoryState {
	count: number;
}
interface inventoryProps {
	visible?: boolean;
}

export class Inventory extends Roact.Component<inventoryProps, inventoryState> {
	constructor(props: inventoryProps) {
		super(props);

		this.setState({ count: 10 });
	}

	render() {
		return (
			<Panel Key={"Inventory"} index={Pages.inventory} visible={this.props.visible}>
				<uicorner CornerRadius={new UDim(0, 6)} />

				<textlabel
					Key={"Counter"}
					Size={UDim2.fromOffset(150, 50)}
					Position={new UDim2(0.5, 0, 0, 200)}
					AnchorPoint={new Vector2(0.5, 0)}
					Text={tostring(this.state.count)}
				/>
			</Panel>
		);
	}
}
