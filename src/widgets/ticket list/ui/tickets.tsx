import { Card, Group, Box, Button, Divider, Text, Image } from '@mantine/core';
import { IconPlane } from '@tabler/icons-react';
import { FC } from 'react';

interface Ticket {
	origin: string;
	origin_name: string;
	destination: string;
	destination_name: string;
	departure_date: string;
	departure_time: string;
	arrival_date: string;
	arrival_time: string;
	carrier: string;
	stops: number;
	price: number;
}

const tickets: Ticket[] = [
	{
		origin: "VVO",
		origin_name: "Владивосток",
		destination: "TLV",
		destination_name: "Тель-Авив",
		departure_date: "12.05.18",
		departure_time: "16:20",
		arrival_date: "12.05.18",
		arrival_time: "22:10",
		carrier: "TK",
		stops: 3,
		price: 12400
	},
	{
		origin: "VVO",
		origin_name: "Владивосток",
		destination: "TLV",
		destination_name: "Тель-Авив",
		departure_date: "12.05.18",
		departure_time: "17:20",
		arrival_date: "12.05.18",
		arrival_time: "23:50",
		carrier: "S7",
		stops: 1,
		price: 13100
	},
	{
		origin: "VVO",
		origin_name: "Владивосток",
		destination: "TLV",
		destination_name: "Тель-Авив",
		departure_date: "12.05.18",
		departure_time: "12:10",
		arrival_date: "12.05.18",
		arrival_time: "18:10",
		carrier: "SU",
		stops: 0,
		price: 15300
	},
	{
		origin: "VVO",
		origin_name: "Владивосток",
		destination: "TLV",
		destination_name: "Тель-Авив",
		departure_date: "12.05.18",
		departure_time: "17:00",
		arrival_date: "12.05.18",
		arrival_time: "23:30",
		carrier: "TK",
		stops: 2,
		price: 11000
	},
	{
		origin: "VVO",
		origin_name: "Владивосток",
		destination: "TLV",
		destination_name: "Тель-Авив",
		departure_date: "12.05.18",
		departure_time: "12:10",
		arrival_date: "12.05.18",
		arrival_time: "20:15",
		carrier: "BA",
		stops: 3,
		price: 13400
	},
	{
		origin: "VVO",
		origin_name: "Владивосток",
		destination: "TLV",
		destination_name: "Тель-Авив",
		departure_date: "12.05.18",
		departure_time: "9:40",
		arrival_date: "12.05.18",
		arrival_time: "19:25",
		carrier: "SU",
		stops: 3,
		price: 12450
	},
	{
		origin: "VVO",
		origin_name: "Владивосток",
		destination: "TLV",
		destination_name: "Тель-Авив",
		departure_date: "12.05.18",
		departure_time: "17:10",
		arrival_date: "12.05.18",
		arrival_time: "23:45",
		carrier: "TK",
		stops: 1,
		price: 13600
	},
	{
		origin: "VVO",
		origin_name: "Владивосток",
		destination: "UFA",
		destination_name: "Уфа",
		departure_date: "12.05.18",
		departure_time: "15:15",
		arrival_date: "12.05.18",
		arrival_time: "17:45",
		carrier: "TK",
		stops: 1,
		price: 33400
	},
	{
		origin: "VVO",
		origin_name: "Владивосток",
		destination: "TLV",
		destination_name: "Тель-Авив",
		departure_date: "12.05.18",
		departure_time: "6:10",
		arrival_date: "12.05.18",
		arrival_time: "15:25",
		carrier: "TK",
		stops: 0,
		price: 14250
	},
	{
		origin: "LRN",
		origin_name: "Ларнака",
		destination: "TLV",
		destination_name: "Тель-Авив",
		departure_date: "12.05.18",
		departure_time: "12:50",
		arrival_date: "12.05.18",
		arrival_time: "14:30",
		carrier: "SU",
		stops: 1,
		price: 7000
	},
	{
		origin: "VVO",
		origin_name: "Владивосток",
		destination: "TLV",
		destination_name: "Тель-Авив",
		departure_date: "12.05.18",
		departure_time: "16:50",
		arrival_date: "12.05.18",
		arrival_time: "23:35",
		carrier: "SU",
		stops: 1,
		price: 16700
	},
	{
		origin: "VVO",
		origin_name: "Владивосток",
		destination: "TLV",
		destination_name: "Тель-Авив",
		departure_date: "12.05.18",
		departure_time: "6:10",
		arrival_date: "12.05.18",
		arrival_time: "16:15",
		carrier: "S7",
		stops: 0,
		price: 17400
	}
];

type Carrier = 'SU' | 'S7' | 'TK' | 'BA';

function DateFormat(str: string) {
	const date = new Date(str.replace('.', '-'))
	const weekDay = date.toLocaleDateString('ru-RU', { weekday: 'short' });
	return date.toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	}) + `, ${weekDay}`
}

const SwitchCarrierLogoSrc: Record<Carrier, string> = {
	'SU': './suCarrier.jpg',
	'BA': './suCarrier.jpg',
	'S7': './s7Carrier.png',
	'TK': './tkCarrier.png',
}

interface TicketListProps {
	filter:
	{
		stope: number[],
		currency: string,
	}

}

// Можно было отдельные карточки мемоизировать но сейчас логики по сути тут нет так что пускай будет список весь в memo
export const TicketList: FC<TicketListProps> = ({filter}) => {
	return (
		tickets.sort((a, b) => a.price - b.price).filter(f => filter.stope.includes(f.stops) || filter.stope.length === 0 ).map((el, index) => (
			<Card withBorder key={`${el.origin_name}-${index}`} radius="md" mb='md' p={0}>
				<Group wrap="nowrap" gap={0}>
					<Box p='md'>
						<Image src={SwitchCarrierLogoSrc[el.carrier as Carrier]} w={'300px'} />
						<Button color="orange" fullWidth mt="md" radius="md">
							Купить за {el.price} ₽
						</Button>
					</Box>
					<Divider orientation="vertical" />
					<Group p='md' style={{ width: '100%' }}>
						<Box style={{ flexBasis: '20%' }} >
							<Text tt="uppercase" c="dimmed" fw={900} size='42px'>
								{el.departure_time}
							</Text>
							<Text mt="xs" fw={500} mb="md">
								{el.origin}, {el.origin_name}
							</Text>
							<Text mt="xs" mb="md">
								{DateFormat(el.departure_date)}
							</Text>
						</Box>
						<Box style={{ flexBasis: '45%' }} >
							<Text tt="uppercase" c="dimmed" fw={700} size="xs" ta="center">
								{el.stops < 2 ? el.stops === 0 ? `${el.stops} ПЕРЕСАДОК` : `${el.stops} ПЕРЕСАДКА` : `${el.stops} ПЕРЕСАДКИ`}
							</Text>
							<Divider
								my="xs"
								labelPosition="right"
								label={
									<IconPlane />
								}
							/>

						</Box>
						<Box style={{ flexBasis: '20%' }} >
							<Text tt="uppercase" c="dimmed" fw={900} size='42px'>
								{el.arrival_time}
							</Text>
							<Text mt="xs" mb="md">
								{el.destination}, {el.destination_name}
							</Text>
							<Text mt="xs" mb="md">
								{DateFormat(el.arrival_date)}
							</Text>
						</Box>
					</Group>
				</Group>
			</Card>
		))
	)
};
