import React from 'react';
import { Card } from 'react-bootstrap';
import Payload from './Payload';

export default function MissionCard({ description, website, name, payloads }) {
	// console.dir(payloads.map(payload => payload.id));
	return (
		<Card>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Card.Subtitle>Details</Card.Subtitle>
				<Card.Text>Site: ${website}</Card.Text>
				<Card.Subtitle>Payloads</Card.Subtitle>
				{payloads &&
					payloads.map((payload) => {
						console.log(payload);
						
						return <Payload payload={ payload }/>
					})}
			</Card.Body>
		</Card>
	);
}
