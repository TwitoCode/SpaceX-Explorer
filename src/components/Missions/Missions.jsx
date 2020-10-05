import React from 'react';
import { useQuery } from '@apollo/client';
import { MISSIONS } from '../../queries';
import MissionsCard from './MissionCard';
import { CardColumns } from 'react-bootstrap';

export default function Missions() {
	const { loading, error, data } = useQuery(MISSIONS);

	if (loading) return <h1 style={{ textAlign: 'center' }}>Loading</h1>;
	if (error) return <h1 style={{ color: 'red', textAlign: 'center' }}>Error</h1>;

	return (
		<div className='container'>
			<CardColumns>
				{data.missions.map((mission, i) => {
					const { description, name, website, payloads } = mission;
					console.log(payloads)
					return <MissionsCard key={i} {...{ description, name, website, payloads }} />;
				})}
			</CardColumns>
		</div>
	);
}
