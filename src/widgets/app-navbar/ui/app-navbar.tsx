import { memo } from 'react';

import { AppShell, NavLink, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';

import {
	AppRoutes,
	routeConfig,
} from '@/app/providers/router/config/route-config';

export const AppNavbar = memo(() => {
	return (
		<AppShell.Navbar p="md">
			<Stack gap={12}>
				{Object.entries(routeConfig)
					.filter(([label]) => label !== AppRoutes.NOT_FOUND)
					.map(([label, route], i) => (
						<NavLink
							key={label + route + i}
							component={Link}
							to={route.path}
							label={label}
						/>
					))}
			</Stack>
		</AppShell.Navbar>
	);
});
