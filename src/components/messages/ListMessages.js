import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../layout/Navbar';
import styles from '../../styles/listmessages.module.css';

export default function Message({ name }) {
	const myRef = useRef(null);
	const fileRef = useRef(null);

	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');
	const [attachMenu, setAttachMenu] = useState(false);

	useEffect(() => {
		const msg = localStorage.getItem(name) || '[]';
		setMessages(JSON.parse(msg));
	}, [name]);

	useEffect(() => {
		localStorage.setItem(name, JSON.stringify(messages));
	}, [messages, name]);

	function MessageList(param) {
		if (param.messages !== '[]') {
			const data = param.messages.map((message) => (
				<div className={styles.chat_box} key={message.id}>
					<span className={styles.msg}>{message.time}</span>
					{message.isLocation ? (
						<p className={styles.chat_text}>
							<a
								href={`https://www.google.com/maps/search/?api=1&query=${message.content[0]},${message.content[1]}`}
							>
								My location
							</a>
						</p>
					) : message.isPhoto ? (
						<div>
							{message.content.map((imgU, index) => (
								<img
									className={styles.img_attach}
									src={imgU}
									alt="pic"
									key={message.k[index]}
									onLoad={() => {
										window.URL.revokeObjectURL(imgU);
									}}
								/>
							))}
						</div>
					) : (
						<p className={styles.chat_text}>{message.content}</p>
					)}
					<span className={styles.msg}>{message.author}</span>
				</div>
			));
			return (
				<div className={styles.result} ref={myRef}>
					{' '}
					{data}{' '}
				</div>
			);
		}
	}

	const scrollToBottom = () => {
		myRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
	};

	useEffect(scrollToBottom, [messages]);

	const addMessage = (event) => {
		if (event.key === 'Enter') {
			const date = new Date();
			if (newMessage.trim() !== '') {
				setMessages([
					...messages,
					{
						id: messages.length,
						time: date.toTimeString().slice(0, 5),
						content: newMessage,
						author: 'you',
						isLocation: false,
						isPhoto: false,
					},
				]);
				setNewMessage('');
			}
		}
	};

	// ДЗ7

	const geo = (e) => {
		e.preventDefault();
		const date = new Date();
		const who = 'you';

		function success(position) {
			const { latitude } = position.coords;
			const { longitude } = position.coords;
			setMessages([
				...messages,
				{
					// https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}
					id: messages.length,
					time: date.toTimeString().slice(0, 5),
					content: [latitude, longitude],
					author: who,
					isLocation: true,
					isPhoto: false,
				},
			]);
		}

		function error() {
			alert('Unable to retrieve your location');
		}

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, error);
		}
	};

	const handleClick = () => {
		setAttachMenu(!attachMenu);
		console.log(attachMenu);
	};

	let imgs;
	if (imgs === undefined) {
		imgs = [];
	}

	function fileUploadHandler(files) {
		const data = new FormData();
		data.append('image', files);
		fetch('https://tt-front.now.sh/upload', {
			method: 'POST',
			body: data,
		});
	}

	const handleFiles = (e) => {
		const urls = [];
		const keys = [];
		// let imgObj;
		const date = new Date();
		// if (imgObj === undefined) {
		// imgObj = [];
		// }
		for (let i = 0; i < e.target.files.length; i += 1) {
			console.log(e.target.files[i]);
			urls.push(URL.createObjectURL(e.target.files[i]));
			keys.push(i);
			/* imgObj = [...imgObj, {
				id: i,
				imgUrl: urls[i]
			}];
			console.log(imgObj);
			*/
		}
		// imgs = imgObj.map((imgU) =>
		// <img src={imgU.imgUrl} alt='pic' key={imgU.id}/>
		// );
		console.log(imgs);
		setMessages([
			...messages,
			{
				id: messages.length,
				time: date.toTimeString().slice(0, 5),
				content: urls,
				author: 'you',
				k: keys,
				isLocation: false,
				isPhoto: true,
			},
		]);
		fileUploadHandler(e.target.files);
	};

	const menu = attachMenu ? (
		<div className={styles.menu}>
			<ul>
				<li>
					<button type="button" className={styles.menu_button} onClick={geo}>
						geolocation
					</button>
				</li>
				<li>
					<button type="button" onClick={() => fileRef.current.click()}>
						image
					</button>
				</li>
				<li>audio</li>
			</ul>
		</div>
	) : null;

	return (
		<div>
			<Navbar name={name} />
			<MessageList messages={messages} />
			<div>
				<input
					type="text"
					value={newMessage}
					onChange={(event) => setNewMessage(event.target.value)}
					onKeyPress={addMessage}
				/>
				<div className={styles.att}>
					<button type="button" className={styles.attach} onClick={handleClick}>
						<img
							src="https://img.icons8.com/color/96/000000/add.png"
							alt="add"
						/>
					</button>
					{menu}
				</div>
			</div>
			<input
				multiple
				type="file"
				ref={fileRef}
				className={styles.input_file}
				onChange={handleFiles}
			/>
		</div>
	);
}

Message.propTypes = {
	name: PropTypes.string.isRequired,
};
