import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { LAUNCHES } from '../../queries';
import LaunchCard from './LaunchCard';
import { CardColumns } from 'react-bootstrap';
import LimitSelector from '../LimitSelector';

export default function Launches() {
	const [limit, setLimit] = useState(10);
	const { loading, error, data, refetch } = useQuery(LAUNCHES, {
		variables: {
			limit,
		},
	});

	if (loading) return <h1 style={{ textAlign: 'center' }}>Loading</h1>;
	if (error) return <h1 style={{ color: 'red', textAlign: 'center' }}>Error</h1>;

	return (
		<div className='container'>
			<LimitSelector {...{ refetch, limit, setLimit }} />
			<CardColumns>
				{data.launches.map((launch, i) => {
					const {
						mission_name,
						rocket: { rocket_name },
						launch_year,
						launch_success,
						launch_date_utc,
						details,
						launch_site: { site_name },
						upcoming,
					} = launch;

					const data = {
						missionName: mission_name,
						rocketName: rocket_name,
						year: launch_year,
						success: launch_success,
						date: launch_date_utc,
						description: details,
						siteName: site_name,
						upcoming,
					};

					return <LaunchCard key={i} {...data} />;
				})}
			</CardColumns>
		</div>
	);
}
