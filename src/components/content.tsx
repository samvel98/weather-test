import React, { useMemo } from 'react';
import { useContentStyles, useFiveDaysStyles } from '../styles/content';
import { useAppDispatch, useAppSelector } from '../hooks';
import { currentWeather, city, isCheckedAsCelsius, nextFiveDaysWeather, setCurrentWeatherTemp } from '../store/slices/weaterSlice';
import moment from 'moment';
import cn from 'classnames';

export const Content = () => {

  return (
    <div>
      <WeatherNow />
      <FiveDaysWeather />
    </div>
  )
}

const WeatherNow = () => {
  const styles = useContentStyles()
  const weather = useAppSelector(currentWeather);
  const isCelsius = useAppSelector(isCheckedAsCelsius);
  const fiveDaysWeather = useAppSelector(nextFiveDaysWeather);
  const currentCity = useAppSelector(city)

  const filteredFiveDaysWeather = useMemo(() => {
    const indexToStart = fiveDaysWeather?.findIndex(item => item.date === weather.date);
    console.log(indexToStart)
    if(!indexToStart  || (indexToStart && indexToStart < 0)) {
      return fiveDaysWeather?.slice(0, 5)
    }
    return fiveDaysWeather?.slice(indexToStart, indexToStart + 5);
  }, [weather, fiveDaysWeather]);

  const getCurrentTemp = (temp: number) => {
    return isCelsius ? `${temp.toFixed()} °C` : `${((temp * 9 / 5) + 32).toFixed()} F`;
  }
  const temp = useMemo(() => {
    return getCurrentTemp(weather.temp);
  }, [weather.temp, isCelsius])

  return (
    <div className={styles.mainContent}>
      <div className={styles.weatherNowContent}>
        <div className={styles.cityName}>
          {currentCity}
        </div>
        <div className={styles.temp}>
          {temp}
        </div>
        <div className={styles.icon}>
          <img src={weather.tempIcon} alt="" />
        </div>
        <div className={styles.desc}>
          {weather.desc}
        </div>
      </div>
      <div className={styles.weatherByhours}>
        {filteredFiveDaysWeather?.map((item, index) => (
          <div key={index} className={styles.hourItem}>
            {`${moment(item.date).format('HH:mm:ss')} ${getCurrentTemp(item.temp)}`}
            <img src={item.tempIcon} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

const FiveDaysWeather = () => {
  const fiveDaysWeather = useAppSelector(nextFiveDaysWeather);
  const isCelsius = useAppSelector(isCheckedAsCelsius);
  const weather = useAppSelector(currentWeather);
  const dispatch = useAppDispatch();
  const styles = useFiveDaysStyles();
  
  const changeCurrentWeather = (weather: weatherTemp) => {
    dispatch(setCurrentWeatherTemp(weather))
  }

  const getCurrentTemp = (temp: number) => {
    return isCelsius ? `${temp.toFixed()} °C` : `${((temp * 9 / 5) + 32).toFixed()} F`;
  }
  
  const filteredItems = useMemo(() => {
    return fiveDaysWeather?.filter((item) => item.date.endsWith('00:00:00')).slice(0, 5);
  }, [fiveDaysWeather]);

  
  return (
    <div className={styles.content}>
      {filteredItems?.map((item, index) => (
        <div key={index} className={cn(styles.item, weather.date === item.date ? styles.selected : '')} onClick={() => changeCurrentWeather(item)}>
          <div>{moment(item.date).format('MM-DD')}</div>
          <div className={styles.icon}>
            {getCurrentTemp(item.temp)}
            <img src={item.tempIcon} alt="" />
          </div>
        </div>
      ))}
    </div>
  )
}
