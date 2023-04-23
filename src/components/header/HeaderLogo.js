import React from 'react';
import './HeaderLogo.css'

import { Link } from 'react-router-dom';

import imgLogo from '../../assets/Greenforest-Logo.png';

const HeaderLogo = () => {
	return (
		<div className='header-container-logo'>
			<Link to='/'>
				<img className='logo' src={imgLogo} alt='GreenForestLogo' width='150' />
			</Link>
		</div>
	);
};

export default HeaderLogo;