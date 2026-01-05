import type { MenuItem } from '@/types/menu';

export const SIDEBAR_MENU: MenuItem[] = [
	{
		title: '대학정보',
		children: [
			{ label: '주요통계', path: '/' },
			{ label: '졸업/취업', path: '/analysis' },
		],
	},
	{
		title: '재정/회계',
		children: [
			{ label: '예산', path: '/budget' },
			{ label: '결산', path: '/settle' },
		],
	},
];
