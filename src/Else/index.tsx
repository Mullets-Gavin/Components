import Roact from "@rbxts/roact";
import { Pages } from "../Context";
import { Panel } from "../Components/Panel";

interface elseProps {}
interface elseState {
	count: number;
}

export class Else extends Roact.Component<elseProps, elseState> {
	constructor(props: elseProps) {
		super(props);

		this.setState({ count: 10 });
	}

	render() {
		return (
			<Panel Key={"Else"} name={"Else"} index={Pages.else}>
				<uicorner CornerRadius={new UDim(0, 6)} />

				<textlabel
					Key={"Counter"}
					Size={UDim2.fromOffset(150, 50)}
					Position={new UDim2(0.5, 0, 0, 200)}
					AnchorPoint={new Vector2(0.5, 0)}
					Text={"holy shit im gonna cum"}
				/>
			</Panel>
		);
	}
}
