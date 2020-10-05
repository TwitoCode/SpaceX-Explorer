import React from 'react'
import { Card } from 'react-bootstrap';

export default function LaunchCard({
	missionName,
	rocketName,
	year,
	success,
	date,
	description,
	siteName,
	upcoming,
}) {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{missionName}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Card.Subtitle>Details</Card.Subtitle>
				<div className='data-container'>
					<Card.Text>Date: {date}</Card.Text>
					<Card.Text>Year: {year}</Card.Text>
					<Card.Text>{success ? 'Success' : 'Failed'}</Card.Text>
					<Card.Text>{upcoming ? 'Upcoming' : 'Completed'}</Card.Text>
					<Card.Text>Rocket: {rocketName}</Card.Text>
					<Card.Text>Launch Site: {siteName}</Card.Text>
				</div>
			</Card.Body>
		</Card>
	);
}
