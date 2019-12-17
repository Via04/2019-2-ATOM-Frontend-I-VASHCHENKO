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
	const [recordStatus, setRecordStatus] = useState(null);
	const [recorder, setRecorder] = useState(null);
	const [chunks, setChunks] = useState([]);

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
					{/* eslint-disable-next-line no-nested-ternary */}
					{message.isLocation ? (
						<p className={styles.chat_text}>
							<a
								href={`https://www.google.com/maps/search/?api=1&query=${message.content[0]},${message.content[1]}`}
							>
								My location
							</a>
						</p>
					) : // eslint-disable-next-line no-nested-ternary
					message.isPhoto ? (
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
					) : message.isAudio ? (
						<div className={styles.player}>
							{/* eslint-disable-next-line jsx-a11y/media-has-caption */}
							<audio controls src={message.content} />
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
						isAudio: false,
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
					isAudio: false,
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
				isAudio: false,
			},
		]);
		fileUploadHandler(e.target.files);
	};

	// Audio

	async function getMedia() {
		let stream = null;
		try {
			const constraints = { audio: true, video: false };
			stream = await navigator.mediaDevices.getUserMedia(constraints);
			const mediaRecorder = new MediaRecorder(stream);
			return mediaRecorder;
		} catch (e) {
			console.log("Can't get audio device");
			return null;
		}
	}

	const startRecord = (record) => {
		const lChunks = [];
		const recordAudio = record;
		recordAudio.start(10);
		console.log('recorder started');
		recordAudio.ondataavailable = (event) => {
			lChunks.push(event.data);
		};
		setRecordStatus(true);
		setRecorder(recordAudio);
		setChunks(lChunks);
	};

	function stopRecord() {
		recorder.stop();
		setRecordStatus(false);
		console.log('Recorder stopped');
		console.log(chunks);
		const date = new Date();
		const blob = new Blob(chunks, { type: 'audio/ogg' });
		const data = new FormData();
		data.append('audio', blob);
		fetch('https://tt-front.now.sh/upload', {
			method: 'POST',
			body: data,
		}).then((response) => {
			console.log(response.status);
			console.log(response);
		});
		const audioURL = window.URL.createObjectURL(blob);
		setMessages([
			...messages,
			{
				id: messages.length,
				time: date.toTimeString().slice(0, 5),
				content: audioURL,
				author: 'you',
				isLocation: false,
				isPhoto: false,
				isAudio: true,
			},
		]);
	}

	function handleMedia(event) {
		event.preventDefault();
		if (recordStatus === null) {
			// console.log('initializing recorder');
			getMedia().then((mediaRecorder) => {
				startRecord(mediaRecorder);
			});
		} else if (recordStatus) {
			stopRecord();
			console.log(chunks);
		} else {
			startRecord(recorder);
		}
	}

	const menu = attachMenu ? (
		<div className={styles.menu}>
			<ul>
				<li>
					<button type="button" className={styles.menu_button} onClick={geo}>
						geolocation
					</button>
				</li>
				<li>
					<button
						type="button"
						className={styles.menu_button}
						onClick={() => fileRef.current.click()}
					>
						image
					</button>
				</li>
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
				<div className={styles.audio}>
					<button
						type="button"
						className={styles.attach}
						onClick={(event) => handleMedia(event)}
					>
						<img
							src="https://img.icons8.com/wired/64/000000/microphone.png"
							alt="rec"
						/>
					</button>
				</div>
			</div>
			<input
				multiple
				type="file"
				accept="image/*"
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
