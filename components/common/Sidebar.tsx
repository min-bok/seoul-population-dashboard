import styles from './Sidebar.module.scss';
import Link from 'next/link';
import { MenuItem } from '@/types/menu';

type SidebarProps = {
	data: MenuItem[];
};

export default function Sidebar({ data }: SidebarProps) {
	return (
		<aside className={styles.sidebar}>
			<div className={styles.sidebarTop}>
				<button>메뉴</button>
				<button>즐겨찾기</button>
			</div>
			<nav>
				{data.map(item => (
					<details key={item.title} className={styles.menuGroup}>
						<summary>{item.title}</summary>

						{item.children && item.children.length > 0 && (
							<ul>
								{item.children?.map(child => (
									<li key={child.path}>
										<Link href={child.path}>{child.label}</Link>
									</li>
								))}
							</ul>
						)}
					</details>
				))}
			</nav>
		</aside>
	);
}
