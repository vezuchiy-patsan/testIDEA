import { memo } from 'react';

import { Box, Button, Group, Paper, Tooltip } from '@mantine/core';

interface IInsightBarProps {
	openModal: () => string;
}
export const InsightBar = memo((props: IInsightBarProps) => {
	return (
		<Paper shadow="md" radius="xl" withBorder p="sm" px="md" mb="md">
			<Group justify="space-between">
				<Box>Всего:</Box>
				<Box flex={'1 0 auto'}></Box>
				<Group justify="flex-end">
					<Tooltip label="Новая карточка">
						<Button
							size="md"
							radius="md"
							color="green"
							onClick={props.openModal}
						>
							Создать
						</Button>
					</Tooltip>
				</Group>
			</Group>
		</Paper>
	);
});
