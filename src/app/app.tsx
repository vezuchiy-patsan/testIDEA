import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@/app/styles/index.scss';
import '@/index.css';

import { Suspense } from 'react';

import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import cn from 'classnames';

import { AppRouter } from '@/app/providers/router';
import { AppErrorBoundary } from '@/widgets/app-error-boundary';
import { AppHeader } from '@/widgets/app-header';
import { AppNavbar } from '@/widgets/app-navbar/ui/app-navbar';

export function App() {
	const [opened, { toggle }] = useDisclosure();

	return (
		<div className={cn('app')}>
			<Suspense fallback="">
				<AppErrorBoundary>
					<div className="page-content">
						<AppShell
							header={{ height: 'var(--header-height)' }}
							navbar={{
								width: 'var(--navbar-width)',
								breakpoint: 'sm',
								collapsed: { mobile: !opened },
							}}
							padding="md"
							classNames={{
								root: 'app-shell-root',
								main: 'app-shell-main',
							}}
						>
							<AppHeader opened={opened} toggle={toggle} />

							<AppNavbar />

							<AppShell.Main>
								<AppRouter />
							</AppShell.Main>
						</AppShell>
					</div>
				</AppErrorBoundary>
			</Suspense>
		</div>
	);
}
