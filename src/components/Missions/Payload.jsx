import React from 'react';
import { Card } from 'react-bootstrap';

export default function Payload({ payload }) {
	if (payload) {
		return (
			<div className='data-container'>
				<Card.Subtitle>
					<Card.Text>Name: {payload.id != null && payload.id}</Card.Text>
					<Card.Text>
						{payload.payload_mass_kg != null &&
							`Payload Mass: ${payload.payload_mass_kg}kg`}
					</Card.Text>
					<Card.Text>
						{payload.payload_type != null && `Payload Type: ${payload.payload_type}`}
					</Card.Text>
				</Card.Subtitle>
			</div>
		);
	} else {
		return null;
	}
}
