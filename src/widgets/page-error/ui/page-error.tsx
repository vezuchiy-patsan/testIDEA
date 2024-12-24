import { memo, useCallback } from 'react';

import { Button } from '@mantine/core';

import cls from './page-error.module.scss';

interface PageErrorProps {
	scope: 'global' | 'app';
}

export const PageError = memo((props: PageErrorProps) => {
	const handleReload = useCallback(() => {
		window.location.reload();
	}, []);

	return (
		<div className={cls.pageWrapper}>
			<p>Something went wrong. Please reload page. Scope: {props.scope}</p>
			<Button onClick={handleReload} variant="primary">
				Reload
			</Button>
		</div>
	);
});
