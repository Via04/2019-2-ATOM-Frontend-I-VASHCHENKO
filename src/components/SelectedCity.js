import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import styles from '../styles/selected_city.module.css';

export default function SelectedCity({name}) {
    console.log(typeof(name));

    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=e9ceae0708a0ab8ae6cefb119b68c470`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setForecast(json);
                return json
            })
    }, [name]);

    return (
        <div className={styles.page}>
            <div className={styles.Header}>
                <Link className={styles.links} to = {`/`}>
                    <div className={styles.backImg}>
                        <img className={styles.back_img} alt='back' src='https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/back-512.png' />
                    </div>
                </Link>
                <div className={styles.cityName}>
                    {name}
                </div>
            </div>
            <div className={styles.mainpage}>
                <div className={styles.maininfo}>
                    {(forecast == null) ? null : Math.round(forecast.main.temp)}<sup> o</sup>С
                </div>
                <div className={styles.extrainfo}>
                    <span className={styles.description}>Ощущется как </span>
                    {(forecast == null) ? null : Math.round(forecast.main.feels_like)}<sup> o</sup>С
                </div>
                <div className={styles.extrainfo}>
                    <span className={styles.description}>Давление </span>
                    {(forecast == null) ? null : Math.round(forecast.main.pressure/1.333)} мм.рт.ст
                </div>
                <div className={styles.extrainfo}>
                    <span className={styles.description}>Ветер </span>
                    {(forecast == null) ? null : Math.round(forecast.wind.speed)} м/c
                </div>
            </div>
        </div>
    )
}