import { Card, Box, Text, Checkbox, SegmentedControl, Stack, createTheme, MantineProvider } from '@mantine/core';
import { FC, memo, useCallback } from 'react';

interface FilterStateProps {
	stateFilter: {
		stope: number[],
		currency: string,
	}
	setFilter: (statePartial: Partial<{
		currency: string;
		stope: number[];
	}> | ((currentState: {
		currency: string;
		stope: number[];
	}) => Partial<{
		currency: string;
		stope: number[];
	}>)) => void
}

const theme = createTheme({
	cursorType: 'pointer',
});

export const Filter: FC<FilterStateProps> = memo(({ stateFilter, setFilter }) => {
	const newFilterStope = useCallback((checked: boolean, stopeNumber: number) => {
		const newArr: number[] = [...stateFilter.stope];
		if (checked) {
			newArr.push(stopeNumber)
		} else {
			newArr.splice(newArr.indexOf(stopeNumber), 1);
		}
		setFilter({ stope: newArr })
	}, [stateFilter.stope, setFilter]);

	return (
		<Card shadow="sm" padding="lg" mr='lg' radius="md" withBorder w={'25%'} h={'min-content'}>
			<Box mb="xs">
				<Text fw={500}>ВАЛЮТА</Text>
				<SegmentedControl defaultValue='RUB' onChange={(value) => setFilter({ currency: value })} data={['RUB', 'USD', 'EUR']} />
			</Box>

			<Text size="sm" mb='md' c="dimmed">
				КОЛИЧЕСТВО ПЕРЕСАДОК
			</Text>
			<Stack>
				<MantineProvider theme={theme}>
					<Checkbox
						checked={stateFilter.stope.length === 0}

						onChange={() => setFilter({ stope: [] })} label="Все" />
					<Checkbox
						checked={stateFilter.stope.includes(0)}
						onChange={(event) => newFilterStope(event.currentTarget.checked, 0)} label="Без пересадок" />
					<Checkbox
						checked={stateFilter.stope.includes(1)}
						onChange={(event) => newFilterStope(event.currentTarget.checked, 1)} label="1 пересадка" />
					<Checkbox
						checked={stateFilter.stope.includes(2)}
						onChange={(event) => newFilterStope(event.currentTarget.checked, 2)} label="2 пересадки" />
					<Checkbox
						checked={stateFilter.stope.includes(3)}
						onChange={(event) => newFilterStope(event.currentTarget.checked, 3)} label="3 пересадки" />
				</MantineProvider>
			</Stack>
		</Card>
	)
});
