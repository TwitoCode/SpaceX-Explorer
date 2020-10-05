import React from 'react';
import { useQuery } from '@apollo/client';
import { ROCKETS } from '../../queries';
import RocketCard from './RocketCard';
import { CardColumns } from 'react-bootstrap';

export default function Rockets() {
	const { loading, error, data } = useQuery(ROCKETS);

	if (loading) return <h1 style={{textAlign: 'center'}}>Loading</h1>;
	if (error) return <h1 style={{ color: 'red' }}>Error</h1>;

  return (
		<div className='container'>
			<CardColumns>
				{data.rockets.map((rocket, i) => {
					const { active, name, mass, cost_per_launch, height, description } = rocket;

					const data = {
						active,
						name,
						mass: mass.kg,
						costPerLaunch: formatMoney(cost_per_launch, 0),
						height: height.meters,
						description,
					};

					return <RocketCard key={ i }{...data} />;
				})}
			</CardColumns>
		</div>
	);
}

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
  }
};