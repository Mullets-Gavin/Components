import Roact from "@rbxts/roact";
import { Players } from "@rbxts/services";
import { Router } from "./Router";

const Player = Players.LocalPlayer;
const PlayerGui = Player.WaitForChild("PlayerGui");

// Initialize and mount Roact on runtime
Roact.mount(
	<screengui IgnoreGuiInset={true}>
		<Router />
	</screengui>,
	PlayerGui,
);
