import Roact from "@rbxts/roact";
import { Context, Pages } from "../Context";

interface CloseState {}
interface CloseProps {}

// Close the page with this button, sets the value to 0 (0 = none)
export class Close extends Roact.Component<CloseProps, CloseState> {
	constructor(props: CloseProps) {
		super(props);
	}

	render(): Roact.Element {
		return (
			<Context.Consumer
				render={(value: { viewIndex: number; setPage: (index: number) => void }) => {
					return (
						<textbutton
							Text={""}
							Size={UDim2.fromOffset(40, 40)}
							AnchorPoint={new Vector2(1, 0)}
							Position={UDim2.fromScale(1, 0)}
							Event={{
								MouseButton1Click: () => value.setPage(Pages.none),
							}}
						>
							<uicorner CornerRadius={new UDim(0, 6)} />
						</textbutton>
					);
				}}
			></Context.Consumer>
		);
	}
}
