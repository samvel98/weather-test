import React, { useState } from 'react';
import { useStyles } from '../styles/searchBar';
import { isCheckedAsCelsius, setNextFiveDaysWeather, toggleTempUnit, setCity as setCityRedux, setCityIsUnknown } from '../store/slices/weaterSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import axios from 'axios';

export const SearchBar = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const [city, setCity] = useState('');

  const findCity = async () => {
    dispatch(setCityRedux(city));
    try {
      axios.get(`${process.env.REACT_APP_BASE_URL}/forecast?q=${city}&units=metric&appid=009f5b6f5c69e3593ecb8118bf2dc807`)
        .then(({ data: response }) => {
          const nexFiveDays = response.list.map((item: any) => ({
            maxTemp: item.main.temp_max,
            minTemp: item.main.temp_min,
            temp: item.main.temp,
            date: item.dt_txt,
            desc: item.weather[0].description,
            tempIcon: `${process.env.REACT_APP_ICON_URL}/${item.weather[0].icon}.png`
          }))
          dispatch(setNextFiveDaysWeather(nexFiveDays))
        })
    } catch(e) {
      dispatch(setCityIsUnknown(true))
    }
  }

  const isChecked = useAppSelector(isCheckedAsCelsius);
  return (
    <div className={styles.searchBarContainer}>
      <div />
      <div className={styles.searchInputContainer}>
        <input type="text" placeholder="Search City" onChange={e => setCity(e.target.value)} className={styles.searchInput} />
        <button className={styles.searchButton} onClick={() => findCity()}>🔍</button>
      </div>
      {/* <img src="logo.png" alt="Logo" className="logo" /> */}
      <div className={styles.toggleSwitch}>
        <input
          defaultChecked={isChecked}
          type="checkbox"
          className={styles.toggleSwitchCheckbox}
          name="toggleSwitch"
          id="toggleSwitch"

        />
        <label className={styles.toggleSwitchLabel} htmlFor="toggleSwitch" onClick={() => dispatch(toggleTempUnit())}>
          <span className={styles.toggleSwitchInner} />
          <span className={styles.toggleSwitchSwitch} />
        </label>
      </div>
    </div>
  )
}