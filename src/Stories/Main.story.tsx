import Roact from "@rbxts/roact";

import { Router } from "../Router";

export = (target: Frame): (() => void) => {
	const app = <Router />;
	const mount = Roact.mount(app, target);

	return () => {
		Roact.unmount(mount);
	};
};
