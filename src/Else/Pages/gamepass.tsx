import Roact from "@rbxts/roact";
import { Item } from "../item";
import { AutoScrollingFrame } from "Components/AutoScrollingFrame";
import { Data } from "../index";

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
				Size={new UDim2(0, 476, 1, -46)}
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
					ScrollBarThickness={8}
				>
					<uigridlayout CellPadding={UDim2.fromOffset(6, 6)} CellSize={UDim2.fromOffset(150, 150)} />
					{this.props.data.map((info) => (
						<Item Key={info.name} title={info.name} color={info.color} />
					))}
				</AutoScrollingFrame>
			</frame>
		);
	}
}
