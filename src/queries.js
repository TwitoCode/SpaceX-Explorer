import { gql } from '@apollo/client';

export const ROCKETS = gql`
	query {
		rockets {
			active
			name
			mass {
				kg
			}
			height {
				meters
			}
			cost_per_launch
			description
		}
	}
`;

export const LAUNCHES = gql`
	query launches($limit: Int) {
		launches(limit: $limit) {
			mission_name
			rocket {
				rocket_name
				rocket_type
			}
			launch_year
			launch_success
			launch_date_utc
			details
			launch_site {
				site_name
			}
			upcoming
		}
	}
`;

export const MISSIONS = gql`
	query {
		missions {
			description
			name
			website
			payloads {
				payload_mass_kg
				payload_type
				id
			}
		}
	}
`;
