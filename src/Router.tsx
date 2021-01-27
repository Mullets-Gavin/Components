import Roact from "@rbxts/roact";
import { Context } from "./Context";
import { Shop } from "./Shop";
import { Inventory } from "./Inventory";
import { Else } from "./Else";
import { Toggles } from "./Toggles";

interface routerProps {}
interface routerState {
	viewIndex: number;
	setPage: (index: number) => void;
}

export class Router extends Roact.Component<routerProps, routerState> {
	constructor(props: {}) {
		super(props);
		this.setState({
			viewIndex: 0,
		});
	}

	setPage(index: number) {
		this.setState({
			viewIndex: index,
		});
	}

	render(): Roact.Element {
		return (
			<frame Size={UDim2.fromScale(1, 1)} BackgroundTransparency={1}>
				<Context.Provider
					value={{
						viewIndex: this.state.viewIndex,
						setPage: (index: number) => this.setPage(index),
					}}
				>
					<Toggles />
					<Shop />
					<Inventory />
					<Else />
				</Context.Provider>
			</frame>
		);
	}
}
