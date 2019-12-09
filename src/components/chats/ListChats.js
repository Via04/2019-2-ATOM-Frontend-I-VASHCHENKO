import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import styles from '../../styles/listchats.module.css';

const ListChats = () => {
	const myRef = useRef(null);
	const [chats, setChats] = useState([]);
	const [iuser, setiUser] = useState('');
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const users = localStorage.getItem('users');
		setChats(JSON.parse(users));
	}, []);

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(chats));
	}, [chats]);

	const lastMessage = (name) => {
		const info = localStorage.getItem(name);
		if (info !== '[]' && info !== null && info !== undefined) {
			const data = JSON.parse(info);
			return data[data.length - 1].content;
		}
		return null;
	};

	const lastMessageTime = (name) => {
		const info = localStorage.getItem(name);
		if (info !== '[]' && info !== null && info !== undefined) {
			const data = JSON.parse(info);
			return data[data.length - 1].time;
		}
		return null;
	};

	const checked = (name) => {
		const info = localStorage.getItem(name);
		if (info !== '[]' && info !== null && info !== undefined) {
			return null;
		}
		return 'https://img.icons8.com/nolan/64/000000/eye-unchecked.png';
	};

	function UserList(param) {
		const { names } = param;
		if (names !== '[]') {
			const data = names.map((user) => (
				<div className={styles.user_box} key={user.id}>
					<div className={styles.avatar}>
						<img
							alt="User"
							src="http://s1.iconbird.com/ico/2013/3/636/w80h80139396728710.png"
						/>
					</div>
					<div className={styles.chatContainer}>
						<Link className={styles.links} to={`/message/:${user.name}`}>
							<p className={styles.chat_header}>{user.name}</p>
						</Link>
						<p className={styles.msg}>{lastMessage(user.name)}</p>
					</div>
					<div className={styles.indicatorCont}>
						<span className={styles.time}>{lastMessageTime(user.name)}</span>
						<img className={styles.indicator} alt="" src={checked(user.name)} />
					</div>
				</div>
			));
			return (
				<div className={styles.messages} ref={myRef}>
					{' '}
					{data}{' '}
				</div>
			);
		}
	}

	const addUser = (user) => {
		if (user !== '') {
			setChats([...chats, { id: chats.length, name: user }]);
			console.log(chats);
		}
	};

	const AddUserInput = () => {
		const handleChange = (e) => {
			setiUser(e.target.value);
		};
		const handleClick = () => {
			addUser(iuser.trim());
			setiUser('');
			setVisible(!visible);
		};
		if (visible) {
			return (
				<form className={styles.adduserinput}>
					<div className={styles.add}>
						<input
							type="text"
							value={iuser}
							autoFocus
							onChange={handleChange}
						/>
						<button type="button" onClick={handleClick}>
							Add User
						</button>
					</div>
				</form>
			);
		}
		return null;
	};

	const AddUserButton = () => {
		const handleClick = () => {
			setVisible(!visible);
			console.log(`AddUser: ${visible}`);
		};
		return (
			<form className={styles.adduser}>
				<div className={styles.add}>
					<button type="button" onClick={handleClick}>
						<img
							src="https://img.icons8.com/nolan/64/000000/add.png"
							alt="add user"
						/>
					</button>
				</div>
			</form>
		);
	};

	const scrollToBottom = () => {
		myRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
	};

	useEffect(scrollToBottom, [chats]);

	return (
		<div>
			<Navbar />
			<UserList names={chats} />
			<AddUserButton />
			<AddUserInput />
		</div>
	);
};

export default ListChats;
