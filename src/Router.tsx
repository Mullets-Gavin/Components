import Roact from "@rbxts/roact";
import { Context } from "./Context";
import { Inventory } from "./Pages/Inventory";
import { Shop } from "./Pages/Shop";
import { Toggles } from "./Toggles";
import { App } from "./App";

interface routerProps {}
interface routerState {
	viewIndex: number;
	setPage: (index: number) => void;
}

// Create a context router for opening pages
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
			<Context.Provider
				value={{
					viewIndex: this.state.viewIndex,
					setPage: (index: number) => this.setPage(index),
				}}
			>
				<App />
				<Toggles />
				<Shop />
				<Inventory />
			</Context.Provider>
		);
	}
}
