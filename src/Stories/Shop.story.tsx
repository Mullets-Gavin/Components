import Roact from "@rbxts/roact";
import { Shop } from "../Pages/Shop";

// Shop story for Hoarcekat
export = (target: Frame): (() => void) => {
	const app = <Shop visible={true} />;
	const mount = Roact.mount(app, target);

	return () => {
		Roact.unmount(mount);
	};
};
