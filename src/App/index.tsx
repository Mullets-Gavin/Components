import Roact from "@rbxts/roact";
import { Counter } from "./counter";

interface appState {}
interface appProps {}

export class App extends Roact.Component<appProps, appState> {
	render() {
		return (
			<Counter />
		);
	}
}
