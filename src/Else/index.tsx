import Roact from "@rbxts/roact";
import { Pages } from "../Context";
import { Panel } from "../Components/Panel";
import { Close } from "../Components/Close";
import { Gamepass } from "./Pages/gamepass";
import { Tab } from "./tab";

interface elseState {
	data: Array<Data>;
	pageVisible: string;
}
interface elseProps {
	visible?: boolean;
}

const Tbl = [
	{
		name: "arm",
		color: Color3.fromRGB(8, 48, 17),
	},
];

const Tbl2 = [
	{
		name: "gamepass",
		color: Color3.fromRGB(8, 48, 17),
	},
];

const Tbl3 = [
	{
		name: "credit",
		color: Color3.fromRGB(8, 48, 17),
	},
];

export interface Data {
	name: string;
	color: Color3;
}

export class Else extends Roact.Component<elseProps, elseState> {
	constructor(props: elseProps) {
		super(props);

		this.setState({ data: Tbl, pageVisible: "gamepass" });
	}

	render() {
		return (
			<Panel Key={"Else"} index={Pages.else} visible={this.props.visible}>
				<frame
					BorderSizePixel={0}
					Size={UDim2.fromOffset(500, 400)}
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={UDim2.fromScale(0.5, 0.5)}
					BackgroundColor3={Color3.fromRGB(70, 70, 70)}
				>
					<uicorner CornerRadius={new UDim(0, 6)} />
					<uipadding
						PaddingTop={new UDim(0, 12)}
						PaddingBottom={new UDim(0, 12)}
						PaddingLeft={new UDim(0, 12)}
						PaddingRight={new UDim(0, 12)}
					/>
					<Close />
					<frame Size={new UDim2(1, -46, 0, 40)} BorderSizePixel={0} BackgroundTransparency={1}>
						<uilistlayout FillDirection={"Horizontal"} Padding={new UDim(0, 6)} />
						<Tab text="Passes" page="gamepass" onClick={(page) => this.setState({ pageVisible: page })} />
						<Tab text="Money" page="money" onClick={(page) => this.setState({ pageVisible: page })} />
					</frame>

					<Gamepass visible={this.state.pageVisible} data={Tbl} />
				</frame>
			</Panel>
		);
	}
}
