import Roact from "@rbxts/roact";
import { Inventory } from "../Pages/Inventory";

export = (target: Frame): (() => void) => {
	const app = <Inventory visible={true} />;
	const mount = Roact.mount(app, target);

	return () => {
		Roact.unmount(mount);
	};
};
