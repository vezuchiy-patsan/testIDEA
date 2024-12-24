import { memo } from 'react';

import styles from './home.module.scss';
import { IconPlane } from '@tabler/icons-react';
import { Card, Group, Badge, Button, Text, SegmentedControl, Box, Checkbox, Stack, Divider, Image } from '@mantine/core';
import { TicketList } from '@/widgets/ticket list';
import { Filter } from '@/widgets/filter';
import { useSetState } from '@mantine/hooks';










function HomePage() {
	const [filter, setFilter] = useSetState({
		currency: "RUB",
		stope: []
	});
	return <div className={styles.pageWrapper}>
		<Filter stateFilter={filter} setFilter={setFilter} />
		<div style={{ width: '100%' }}>
			<TicketList filter={filter}/>
		</div>
	</div>;
}

export default memo(HomePage);
