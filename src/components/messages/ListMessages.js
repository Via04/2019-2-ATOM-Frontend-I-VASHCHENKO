import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../../styles/listmessages.module.css';


export default function Message({name}) {
	const myRef = useRef(null);

	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');


	useEffect(() => {
		const msg = localStorage.getItem(name) || '[]';
		setMessages(JSON.parse(msg));
	}, [name]);


	useEffect(() => {
		localStorage.setItem(name, JSON.stringify(messages));
	}, [messages, name]);


	function MessageList(param) {
		if (param.messages !== '[]') {
			const data = param.messages.map((message) =>
				<div className={styles.chat_box} key={message.id}>
					<span className={styles.msg}>{message.time}</span>
					<p className={styles.chat_text}>{message.content}</p>
					<span className={styles.msg}>{message.author}</span>
				</div>
			);
			return (
				<div className={styles.result} ref = {myRef} > {data} </div>
			);
		}
	};

	const scrollToBottom = () => {
		myRef.current.scrollIntoView({ behavior: 'smooth', block: 'end'});
	};

	useEffect(scrollToBottom, [messages]);

	const addMessage = event => {
		if (event.key === 'Enter') {
			const date = new Date();
			if (newMessage.trim() !== '') {
				setMessages([
					...messages,
					{
						id: messages.length,
						time: date.toTimeString().slice(0, 5),
						content: newMessage,
						author: 'you'
					}
				]);
				setNewMessage('');
			}
		}
	};

	return (
		<div>
			<div className={styles.chat_header}>
				<div className={styles.backimg} role = 'button' onClick={() => {}} onKeyPress={() => {}} tabIndex = '0'>
					<Link to='/'>
						<img className={styles.imgclick} src='http://s1.iconbird.com/ico/2014/1/598/w128h1281390846445leftround128.png' alt='back' />
					</Link>
				</div>
				<p className={styles.header_chat}>{name}</p>
			</div>
			<MessageList messages = {messages} />
			<input type='text' value={newMessage} onChange={event => setNewMessage(event.target.value)} onKeyPress={addMessage}/>
		</div>
	);
}

Message.propTypes = {
	name : PropTypes.string.isRequired
};