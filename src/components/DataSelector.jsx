import React, { useReducer, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import Rockets from './Rockets/Rockets';
import Launches from './Launches/Launches';
import Missions from './Missions/Missions';

const reducer = (state, action) => {
	switch (action.type) {
		case 'rockets':
			return { element: <Rockets />, name: 'Rockets' };
		case 'launches':
			return { element: <Launches />, name: 'Launches' };
		case 'missions':
			return {element: <Missions />, name: 'Missions'}
		default:
			return state;
	}
};

export default function DataSelector() {
  const [option, dispatchOption] = useReducer(reducer, '');
  
  useEffect(() => {
    dispatchOption({type: 'missions'})
  }, []);

	return (
		<>
			<Dropdown onSelect={(e) => dispatchOption({ type: e })} focusFirstItemOnShow>
				<div id='toggle'>
          <Dropdown.Toggle variant='success'>{ option.name }</Dropdown.Toggle>
				</div>
				<Dropdown.Menu>
					<Dropdown.Item eventKey='rockets'>Rockets</Dropdown.Item>
					<Dropdown.Item eventKey='missions'>Missions</Dropdown.Item>
					<Dropdown.Item eventKey='launches'>Launches</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			{option.element}
		</>
	);
}
