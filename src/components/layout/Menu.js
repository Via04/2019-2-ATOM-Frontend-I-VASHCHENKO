import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import styles from '../../styles/menu.module.css';

const Menu = (props) => {
	const login = 'Some UID';
	const loginStatus = login ? <SignedIn /> : <SignedOut />;
	const { visible } = props;
	if (visible) {
		return (
			<div className={styles.menu}>
				<nav>{loginStatus}</nav>
			</div>
		);
	}

	return null;
};

Menu.propTypes = {
	visible: PropTypes.bool.isRequired,
};
export default Menu;
