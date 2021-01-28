import Roact from "@rbxts/roact";
import { Data } from "./index";
import { Item } from "../../Components/Item";

interface pageState {}
interface pageProps {
	data: Array<Data>;
	visible: string;
}

// Create the money page inside the main component
export class Money extends Roact.Component<pageProps, pageState> {
	constructor(props: pageProps) {
		super(props);
	}

	render() {
		return (
			<frame
				Key={"MoneyPage"}
				Size={new UDim2(1, 0, 1, -46)}
				Position={UDim2.fromScale(0, 1)}
				AnchorPoint={new Vector2(0, 1)}
				BorderSizePixel={0}
				BackgroundTransparency={1}
				Visible={this.props.visible === "money"}
			>
				<uigridlayout CellPadding={UDim2.fromOffset(6, 6)} CellSize={UDim2.fromOffset(156, 142)} />
				<Item title={"cash"} />
				<Item title={"lil cash"} />
				<Item title={"moar cash"} />
				<Item title={"bigga cash"} />
				<Item title={"larger cash"} />
				<Item title={"johnny cash"} />
			</frame>
		);
	}
}
