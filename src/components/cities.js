import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/cities.module.css';

const Cities = ({ name }) => {

	const myRef = useRef(null);

	const [foundCity, setFoundCity] = useState([]);
	const [isFetching, setisFetching] = useState(true);
	const [isGot, setisGot] = useState(false);
	const [latitude, setLatitude] = useState(null);
	const [longitude,setLongitude] = useState(null);
	const [refresh, setRefresh] = useState(false);
	const [forecasts, setForecasts] = useState([]);
	const [toggle, setToggle] = useState(false);
	const [cityID, setCityID] = useState([
		524901,
		745042,
		519188,
		707860,
		1270260,
		529334,
		1269750,
		1283240,
		703363,
		3632308
	]);

	/*
	useEffect(() => {
		const ct = localStorage.getItem('city') || '[]';
		setCity(JSON.parse(ct))
	}, [name]);

	useEffect(() => {
		localStorage.setItem(name, JSON.stringify(city))
	}, [name, city]);
	 */

	const scrollToBottom = () => {
		myRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
	};

	useEffect(scrollToBottom, [cityID]);

	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			const {latitude} = position.coords;
			const {longitude} = position.coords;
			setLatitude(latitude);
			setLongitude(longitude);
			if (latitude!==null && longitude!==null) {
				setisGot(true);
				console.log('pos got:', isGot);
			}
		}, () => console.log('unable to retrieve position'));
	}

	console.log('pos: ', latitude, longitude);

	useEffect(() => {
		const city_id = cityID.join();
		fetch(`https://api.openweathermap.org/data/2.5/group?id=${city_id}&units=metric&appid=b9af20ffd3ba40ecb7a0755286c703bc`)
			.then(res => res.json())
			.then(json => {
				console.log(json.list);
				setForecasts(json.list);
				return json;
			})
	}, []);

	useEffect(() => {
			fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
				.then(response => response.json())
				.then(result => {
					console.log(result.address);
					setFoundCity(result.address);
					setisFetching(false);
				}).catch(e => {
				console.log(e);
				setFoundCity(null);
				setisFetching(false);
			});
	}, [isGot]);



	function handleRefresh() {
		setRefresh(!refresh);
	}

	const addUser = (event, city) => {
		if (event.key === 'Enter') {
			if (city !== '') {
				fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e9ceae0708a0ab8ae6cefb119b68c470`)
					.then(res => res.json())
					.then(json => {
						console.log(json);
						setCityID([
							...cityID,
							json.id
						])
					})
			}
		}
	};

	const CreateInput = () => {
		const [city, setCity] = useState('');
		return (
			<input
				className={styles.create_chat}
				type='text'
				value={city}
				onChange={(event) => setCity(event.target.value)}
				onKeyPress={(event) => { addUser(event, city.trim()); }}
			/>
		);
	};

	/*const MyLocation = () => {
		const data = foundCity.<Link className={styles.links} to={`/${city.name}/`} key={city.id}>
			<div className={styles.ForecastBox}>
				<div className={styles.TopBox}>
					<div className={styles.CityName}>
						{city.name}
					</div>
					<div className={styles.Temp}>
						<img alt='weather' src={WeatherPicture(city.weather[0].icon)} />
						{Math.round(city.main.temp)}<sup> o</sup>C
					</div>
				</div>
				<div className={styles.BottomBox}>
					<div className={styles.ExtendInfo}>
						{`Humidity ${city.main.humidity} | ${city.wind.speed} m/s`}
					</div>
					<div className={styles.MaxMinTemp}>
						{Math.round(city.main.temp_max)}<sup> o</sup>C/{Math.round(city.main.temp_min)}<sup> o</sup>C
					</div>
				</div>
			</div>
		</Link>
	};

	 */

	const ForecastResult = () => {
		const data = forecasts.map((city) =>
			<Link className={styles.links} to={`/${city.name}/`} key={city.id}>
				<div className={styles.ForecastBox}>
					<div className={styles.TopBox}>
						<div className={styles.CityName}>
							{city.name}
						</div>
						<div className={styles.Temp}>
							<img alt='weather' src={WeatherPicture(city.weather[0].icon)} />
							{Math.round(city.main.temp)}<sup> o</sup>C
						</div>
					</div>
					<div className={styles.BottomBox}>
						<div>
							{`Humidity ${city.main.humidity} | ${city.wind.speed} m/s`}
						</div>
						<div>
							{Math.round(city.main.temp_max)}<sup> o</sup>C/{Math.round(city.main.temp_min)}<sup> o</sup>C
						</div>
					</div>
				</div>
			</Link>
		);

		return (
			<div className={styles.Result} ref={myRef}>
				{data}
			</div>
		)
	};

	// My position

	const HeaderForecast = () => {
		return (
			<div className={styles.Header}>
				<div className={styles.HeaderText}>Cities</div>
			</div>
		)
	};

	const WeatherPicture = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

	return (
		<div className={styles.main}>
			<HeaderForecast />
			<div>
				<ForecastResult />
			</div>
			<div className={styles.Btn}
				 role='button'
				 onClick={() => {
					 setToggle(!toggle)
				 }}
				 onKeyPress={() => { }}
				 tabIndex='0'>
				<img alt='add' src='https://image.flaticon.com/icons/png/512/149/149156.png' />
			</div>
			{toggle ? <CreateInput /> : null}
		</div>
	)
};

export default Cities;