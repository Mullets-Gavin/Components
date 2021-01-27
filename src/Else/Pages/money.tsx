import Roact from "@rbxts/roact";
import { Data } from "../index";

interface pageState {}
interface pageProps {
	data: Array<Data>;
	visible: string;
}

export class Money extends Roact.Component<pageProps, pageState> {
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
				Visible={this.props.visible === "money"}
			></frame>
		);
	}
}
