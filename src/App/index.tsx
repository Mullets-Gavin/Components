import Roact from "@rbxts/roact";
import { Counter } from "./counter";

interface appState {}
interface appProps {}

// Generic app component for HUD interface
export class App extends Roact.Component<appProps, appState> {
	render() {
		return (
			<Counter />
		);
	}
}
