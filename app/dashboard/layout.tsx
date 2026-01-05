import styles from './layout.module.scss';
import Topbar from '@/components/common/Topbar';
import Sidebar from '@/components/common/Sidebar';
import { SIDEBAR_MENU } from '@/data/overview';

// 사이드바 등 공통 레이아웃
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles.dashboardLayout}>
			<Sidebar data={SIDEBAR_MENU} />

			<div className={styles.mainWrapper}>
				<Topbar />
				<main className={styles.content}>{children}</main>
			</div>
		</div>
	);
}
