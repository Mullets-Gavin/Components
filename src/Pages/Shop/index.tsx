import Roact from "@rbxts/roact";
import { Pages } from "../../Context";
import { Panel } from "../../Components/Panel";
import { Close } from "../../Components/Close";
import { Gamepass } from "./gamepass";
import { Money } from "./money";
import { Tab } from "../../Components/Tab";

interface shopState {
	data: Array<Data>;
	pageVisible: string;
}
interface shopProps {
	visible?: boolean;
}

const Tbl = [
	{
		name: "arm",
		color: Color3.fromRGB(8, 48, 17),
		desc: "this is a description, short and cute",
	},
	{
		name: "arm",
		color: Color3.fromRGB(8, 48, 17),
	},
	{
		name: "arm",
		color: Color3.fromRGB(8, 48, 17),
	},
	{
		name: "arm",
		color: Color3.fromRGB(8, 48, 17),
	},
	{
		name: "arm",
		color: Color3.fromRGB(8, 48, 17),
	},
	{
		name: "arm",
		color: Color3.fromRGB(8, 48, 17),
	},
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

export interface Data {
	name: string;
	color: Color3;
	desc?: string;
}

export class Shop extends Roact.Component<shopProps, shopState> {
	constructor(props: shopProps) {
		super(props);

		this.setState({ data: Tbl, pageVisible: "gamepass" });
	}

	render() {
		return (
			<Panel Key={"Else"} index={Pages.shop} visible={this.props.visible}>
				<frame
					BorderSizePixel={0}
					Size={UDim2.fromOffset(504, 360)}
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
					<Money visible={this.state.pageVisible} data={Tbl} />
				</frame>
			</Panel>
		);
	}
}
