import React, { useState } from 'react';

export default function LimitSelector({ limit, setLimit, refetch }) {
  const [localLimit, setLocalLimit] = useState(limit);

	return (
		<form
			onSubmit={(e) => {
        e.preventDefault();
        setLimit(localLimit)
			}}>
			<label id='limit-text'>Limit</label>
			<input
				type='number'
				value={localLimit}
				onChange={(e) => {
					e.preventDefault();
					setLocalLimit(parseInt(e.target.value));
				}}
			/>
		</form>
	);
}
