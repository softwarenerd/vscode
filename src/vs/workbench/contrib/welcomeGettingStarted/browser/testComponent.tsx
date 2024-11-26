/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// CSS.
import './testComponent.css';

// React.
import React, { useEffect, useState } from 'react';

/**
 * TestComponent component.
 */
export const TestComponent = () => {
	// State hooks.
	const [message, setMessage] = useState(`This is a React component ${new Date().toLocaleTimeString()}`);

	useEffect(() => {
		setInterval(() => {
			setMessage(`This is a React component ${new Date().toLocaleTimeString()}`);
		}, 200);
	}, []);

	// Render.
	return (
		<div className='test-component'>
			{message}
		</div>
	);
};
