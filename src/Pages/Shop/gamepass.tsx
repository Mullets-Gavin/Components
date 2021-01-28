import Roact from "@rbxts/roact";
import { Item } from "../../Components/Item";
import { AutoScrollingFrame } from "../../Components/Dynamic/ScrollingFrame";
import { Data } from "./index";

interface pageState {}
interface pageProps {
	data: Array<Data>;
	visible: string;
}

export class Gamepass extends Roact.Component<pageProps, pageState> {
	constructor(props: pageProps) {
		super(props);
	}

	render() {
		return (
			<frame
				Size={new UDim2(1, 0, 1, -46)}
				Position={UDim2.fromScale(0, 1)}
				AnchorPoint={new Vector2(0, 1)}
				BorderSizePixel={0}
				BackgroundTransparency={1}
				Visible={this.props.visible === "gamepass"}
			>
				<AutoScrollingFrame
					Size={UDim2.fromScale(1, 1)}
					BorderSizePixel={0}
					BackgroundTransparency={1}
					ScrollBarThickness={6}
				>
					<uigridlayout CellPadding={UDim2.fromOffset(6, 6)} CellSize={UDim2.fromOffset(152, 150)} />
					{this.props.data.map((info) => (
						<Item Key={info.name} title={info.name} desc={info.desc} color={info.color} />
					))}
				</AutoScrollingFrame>
			</frame>
		);
	}
}
