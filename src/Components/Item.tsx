import Roact from "@rbxts/roact";

interface itemState {
	promptVisible: boolean;
}
interface itemProps {
	title: string;
	desc?: string;
	color?: Color3;
	layoutOrder?: number;
}

// Generic item component that gets reused in all of the pages
export class Item extends Roact.Component<itemProps, itemState> {
	constructor(props: itemProps) {
		super(props);

		this.setState({ promptVisible: false });
	}

	render() {
		return (
			<textbutton
				Key={"Item"}
				Text={""}
				BackgroundColor3={this.props.color ?? Color3.fromRGB(30, 30, 30)}
				LayoutOrder={this.props.layoutOrder ?? 1}
				Event={{
					MouseEnter: () => this.setState({ promptVisible: true }),
					MouseLeave: () => this.setState({ promptVisible: false }),
				}}
			>
				<uicorner CornerRadius={new UDim(0, 6)} />
				<uipadding
					PaddingTop={new UDim(0, 6)}
					PaddingBottom={new UDim(0, 6)}
					PaddingLeft={new UDim(0, 6)}
					PaddingRight={new UDim(0, 6)}
				/>
				<textlabel
					Key={"Title"}
					Text={this.props.title}
					Size={new UDim2(1, 0, 0, 30)}
					BackgroundTransparency={0.9}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					Font={Enum.Font.SourceSansBold}
					TextSize={24}
				/>
				<textlabel
					Key={"Desc"}
					Size={new UDim2(1, 0, 1, -74)}
					Text={this.props.desc ?? ""}
					Position={UDim2.fromScale(0, 0.5)}
					AnchorPoint={new Vector2(0, 0.5)}
					BorderSizePixel={0}
					BackgroundTransparency={1}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					Font={Enum.Font.SourceSansSemibold}
					TextSize={18}
					TextWrapped={true}
					Visible={this.state.promptVisible}
				></textlabel>
				<textlabel
					Key={"Prompt"}
					Size={new UDim2(1, 0, 0, 30)}
					Text={""}
					Position={UDim2.fromScale(0, 1)}
					AnchorPoint={new Vector2(0, 1)}
					BorderSizePixel={0}
					Visible={this.state.promptVisible}
				>
					<uicorner CornerRadius={new UDim(0, 6)} />
				</textlabel>
			</textbutton>
		);
	}
}
