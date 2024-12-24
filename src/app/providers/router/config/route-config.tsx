import { ReactNode } from 'react';

import { DomainsPageLazy } from '@/pages/domains';
import { HomePageLazy } from '@/pages/home';
import { NotFoundPageLazy } from '@/pages/not-found-page';
import { ServersPageLazy } from '@/pages/servers';

interface RouteProps {
	path: string;
	element: ReactNode;
}

export enum AppRoutes {

	HOME = 'Домашняя страница',
	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.HOME]: {
		path: RoutePath[AppRoutes.HOME],
		element: <HomePageLazy />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath[AppRoutes.NOT_FOUND],
		element: <NotFoundPageLazy />,
	},
};
