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
							Key={"Toggles"}
							Size={UDim2.fromOffset(80, 100)}
							Position={new UDim2(0, 10, 0.5, 0)}
							AnchorPoint={new Vector2(0, 0.5)}
							BackgroundTransparency={1}
						>
							<uilistlayout
								Key={"Layout"}
								Padding={new UDim(0, 10)}
								FillDirection={"Vertical"}
								VerticalAlignment={"Center"}
								SortOrder={"LayoutOrder"}
							/>
							<Toggle
								Key={"ShopToggle"}
								onClick={() => {
									const index = Pages.shop;
									if (value.viewIndex === index) {
										value.setPage(0);
									} else {
										value.setPage(index);
									}
								}}
								text={"Shop"}
								layout={Pages.shop}
								image={"http://www.roblox.com/asset/?id=3143448393"}
							/>
							<Toggle
								Key={"InventoryToggle"}
								onClick={() => {
									const index = Pages.inventory;
									if (value.viewIndex === index) {
										value.setPage(0);
									} else {
										value.setPage(index);
									}
								}}
								text={"Inventory"}
								layout={Pages.inventory}
								image={"http://www.roblox.com/asset/?id=3143448393"}
							/>
						</frame>
					);
				}}
			></Context.Consumer>
		);
	}
}
