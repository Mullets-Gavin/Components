import Roact from "@rbxts/roact";

interface itemState {}
interface itemProps {
	title: string;
	color?: Color3;
}

export class Item extends Roact.Component<itemProps, itemState> {
	constructor(props: itemProps) {
		super(props);
	}

	render() {
		return (
			<frame BackgroundColor3={this.props.color ?? Color3.fromRGB(255, 232, 99)}>
				<uicorner CornerRadius={new UDim(0, 6)} />
				<uipadding
					PaddingTop={new UDim(0, 6)}
					PaddingBottom={new UDim(0, 6)}
					PaddingLeft={new UDim(0, 6)}
					PaddingRight={new UDim(0, 6)}
				/>
				<textlabel
					Text={this.props.title}
					Size={new UDim2(1, 0, 0, 30)}
					BackgroundTransparency={0.9}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					Font={"SourceSansBold"}
					TextSize={24}
				/>
			</frame>
		);
	}
}
