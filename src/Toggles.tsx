import Roact from "@rbxts/roact";
import { Context, Pages } from "./Context";
import { Toggle } from "./Components/Toggle";

// List of toggles that enable associated panels
export class Toggles extends Roact.Component {
	public render(): Roact.Element {
		return (
			<Context.Consumer
				render={(value: { viewIndex: number; setPage: (index: number) => void }) => {
					return (
						<frame
							Key={"MainButtons"}
							Size={UDim2.fromOffset(100, 170)}
							Position={new UDim2(0, 10, 0.5, 0)}
							AnchorPoint={new Vector2(0, 0.5)}
							BackgroundTransparency={1}
						>
							<uilistlayout
								Padding={new UDim(0, 10)}
								FillDirection={"Vertical"}
								VerticalAlignment={"Center"}
							/>

							<Toggle
								Key={"shop"}
								onClick={() => {
									const index = Pages.shop;
									if (value.viewIndex === index) {
										value.setPage(0);
									} else {
										value.setPage(index);
									}
								}}
								text={"Shop"}
							/>

							<Toggle
								Key={"inv"}
								onClick={() => {
									const index = Pages.inventory;
									if (value.viewIndex === index) {
										value.setPage(0);
									} else {
										value.setPage(index);
									}
								}}
								text={"Inventory"}
							/>

							<Toggle
								Key={"else"}
								onClick={() => {
									const index = Pages.else;
									if (value.viewIndex === index) {
										value.setPage(0);
									} else {
										value.setPage(index);
									}
								}}
								text={"else"}
							/>
						</frame>
					);
				}}
			></Context.Consumer>
		);
	}
}
