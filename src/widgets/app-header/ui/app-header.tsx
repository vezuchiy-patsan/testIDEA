import { memo } from 'react';

import { AppShell, Burger, Button, useMantineColorScheme } from '@mantine/core';

import cls from './app-header.module.scss';

interface AppHeaderProps {
	opened: boolean;
	toggle: () => void;
}

export const AppHeader = memo(({ opened, toggle }: AppHeaderProps) => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<AppShell.Header>
			<div className={cls.wrapper}>
				{/* Burger for Navbar toggle */}
				<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

				{/* Logo or App Name */}
				<div className={cls.headerText}>Тесотовое</div>

				{/* Theme Switcher */}
				<Button variant="outline" onClick={toggleColorScheme}>
					{colorScheme === 'dark' ? 'Светлая' : 'Тёмная'}
				</Button>
			</div>
		</AppShell.Header>
	);
});
