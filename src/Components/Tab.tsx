import Roact from "@rbxts/roact";

interface tabState {}
interface tabProps {
	onClick: (page: string) => void;
	page: string;
	text: string;
}

export class Tab extends Roact.Component<tabProps, tabState> {
	constructor(props: tabProps) {
		super(props);
	}

	render() {
		return (
			<textbutton
				Text={this.props.text}
				Size={UDim2.fromOffset(100, 40)}
				BorderSizePixel={0}
				TextSize={24}
				Font={Enum.Font.SourceSansBold}
				Event={{
					MouseButton1Click: () => {
						this.props.onClick(this.props.page);
					},
				}}
			>
				<uicorner CornerRadius={new UDim(0, 6)} />
			</textbutton>
		);
	}
}
