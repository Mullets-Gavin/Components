import Roact from "@rbxts/roact";
import { AutoTextLabel } from "../Components/Dynamic/TextLabel";

interface counterState {
	currency: number;
}
interface counterProps {}

export class Counter extends Roact.Component<counterProps, counterState> {
	constructor(props: counterProps) {
		super(props);

		this.setState({ currency: 0 });
	}

	render() {
		return (
			<frame
				Size={UDim2.fromOffset(160, 40)}
				Position={new UDim2(0.5, 0, 0, 4)}
				AnchorPoint={new Vector2(0.5, 0)}
			>
				<uicorner CornerRadius={new UDim(0, 6)} />
				<uipadding
					PaddingTop={new UDim(0, 6)}
					PaddingBottom={new UDim(0, 6)}
					PaddingLeft={new UDim(0, 6)}
					PaddingRight={new UDim(0, 6)}
				/>
				<uilistlayout FillDirection={"Horizontal"} Padding={new UDim(0, 6)} HorizontalAlignment={"Center"} />
				<imagelabel
					Image={"http://www.roblox.com/asset/?id=3143448237"}
					Size={UDim2.fromScale(1, 1)}
					BackgroundTransparency={1}
					LayoutOrder={1}
				>
					<uiaspectratioconstraint AspectRatio={1} />
				</imagelabel>
				<AutoTextLabel
					Size={UDim2.fromScale(1, 1)}
					TextSize={36}
					Font={Enum.Font.SourceSansSemibold}
					BackgroundTransparency={1}
					Text={tostring(this.state.currency)}
				/>
			</frame>
		);
	}
}
