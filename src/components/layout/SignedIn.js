import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/signedin.module.css';

const SignedIn = () => {
	return (
		<div>
			<ul className={styles.menu}>
				<li>
					<NavLink to="/chats">Chats</NavLink>
				</li>
				<li>
					<NavLink to="/profile">
						<img
							src="https://img.icons8.com/pastel-glyph/64/000000/person-male.png"
							alt="NN"
						/>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default SignedIn;
