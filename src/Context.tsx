import Roact from "@rbxts/roact";

export const Pages = {
	shop: 1,
	inventory: 2,
	else: 3,
};

export const Context = Roact.createContext({
	viewIndex: 0,
	setPage: (index: number) => {},
});
