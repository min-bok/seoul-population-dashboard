export type MenuChild = {
	label: string;
	path: string;
};

export type MenuItem = {
	title: string;
	children?: MenuChild[];
};
