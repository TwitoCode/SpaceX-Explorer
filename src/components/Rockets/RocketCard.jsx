import React from 'react';
import { Card } from 'react-bootstrap';

export default function RocketCard({
	active,
	name,
	mass,
	height,
	costPerLaunch,
	description,
}) {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Card.Subtitle>Details</Card.Subtitle>
				<div className='data-container'>
					<Card.Text>{active ? 'Currently Active' : 'Currently Inactive'}</Card.Text>
					<Card.Text>Mass: {mass}kg</Card.Text>
					<Card.Text>Cost Per Launch: ${costPerLaunch}</Card.Text>
					<Card.Text>Height: {height}m</Card.Text>
				</div>
			</Card.Body>
		</Card>
	);
}
