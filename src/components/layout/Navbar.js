import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../../styles/navbar.module.css';
import Menu from './Menu';

const Navbar = (props) => {
	const { name, isChat } = props;
	const [visible, setVisible] = useState(false);
	const handleClick = () => {
		setVisible(!visible);
		console.log(visible);
	};
	const chatStatus = isChat ? (
		<button type="button" onClick={null}>
			<Link to="/chats">
				<img
					src="http://s1.iconbird.com/ico/2014/1/598/w128h1281390846445leftround128.png"
					alt="back"
				/>
			</Link>
		</button>
	) : (
		<button type="button" onClick={handleClick}>
			<img src="https://img.icons8.com/nolan/64/000000/menu.png" alt="menu" />
		</button>
	);
	return (
		<div className={styles.navbar}>
			<div className={styles.button}>
				<form className={styles.button}>{chatStatus}</form>
			</div>
			<Menu visible={visible} />
			<div className={styles.headerspace}>
				<p className={styles.ph}>
					<Link to="/chats" className={styles.header}>
						{name}
					</Link>
				</p>
			</div>
		</div>
	);
};

Navbar.defaultProps = {
	name: '',
	isChat: true,
};

Navbar.propTypes = {
	name: PropTypes.string,
	isChat: PropTypes.bool,
};

export default Navbar;
