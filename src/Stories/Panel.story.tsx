import Roact from "@rbxts/roact";

import { Else } from "../Else";

export = (target: Frame): (() => void) => {
	const app = <Else visible={true} />;
	const mount = Roact.mount(app, target);

	return () => {
		Roact.unmount(mount);
	};
};
