import React, { useState, useEffect } from 'react';
import url from '../../constants/url';

const SignUp = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [auth, setAuth] = useState(false);
	const token = localStorage.getItem('token');
	const verifySession = () => {
		fetch(`${url}/api-token-verify/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ token: token }),
		}).then((res) => {
			if (res.ok) {
				fetch(`${url}/api-token-refresh/`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						token: token,
					}),
				}).then(() => {
					if (res.ok) {
						fetch(`${url}/core/current_user/`, {
							headers: {
								Authorization: `JWT ${token}`,
							},
						})
							.then(() => res.json())
							.then((json) => {
								setUsername(json.username);
								setAuth(true);
							});
					} else {
						alert('Server error');
					}
				});
			} else {
				setAuth(false);
			}
		});
	};

	useEffect(token === null ? setAuth(false) : verifySession, []);

	const handleLogin = (username, password) => {
		const data = {
			username: username,
			password: password,
		};
		fetch(`${url}/token-auth/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((res) => {
			if (res.ok) {
				res.json().then((json) => {
					localStorage.setItem('token', json.token);
					setUsername(json.user.username);
					setAuth(true);
				});
			} else {
				setAuth(false);
				alert('Username or password is invalid');
			}
		});
	};
};
