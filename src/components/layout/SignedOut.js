import React from 'react';
import { NavLink } from 'react-router-dom';
import signedinstyles from '../../styles/signedin.module.css';

const SignedOut = () => {
	return (
		<div>
			<ul className={signedinstyles.menu}>
				<li>
					<NavLink to="/">Signup</NavLink>
				</li>
				<li>
					<NavLink to="/">Login</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default SignedOut;
