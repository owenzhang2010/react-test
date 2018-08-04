import React from 'react';
import loaderSrc from '../../assets/loader.gif';

const Loader = props => (
	<div>
		<img style={{ width: 75 }} src={loaderSrc} alt="loader icon" />
	</div>
);

export default Loader;
