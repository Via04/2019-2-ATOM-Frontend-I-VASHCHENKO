import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/navbar.module.css';
import Menu from './Menu';

const Navbar = () => {
	const [visible, setVisible] = useState(false);
	const handleClick = () => {
		setVisible(!visible);
		console.log(visible);
	};
	return (
		<div className={styles.navbar}>
			<div className={styles.button}>
				<form className={styles.button}>
					<button type="button" onClick={handleClick}>
						<img
							src="https://img.icons8.com/nolan/64/000000/menu.png"
							alt="menu"
						/>
					</button>
				</form>
			</div>
			<Menu visible={visible} />
			<div className={styles.headerspace}>
				<p className={styles.ph}>
					<Link to="/chats" className={styles.header}>
						REACT-MESSENGER
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Navbar;
