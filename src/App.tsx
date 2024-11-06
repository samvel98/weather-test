import React, { useEffect } from 'react';
import './App.css';
import { SearchBar } from './components/searchBar';
import { useAppDispatch, useAppSelector } from './hooks';
import { setCity, city, setCurrentWeatherTemp, setNextFiveDaysWeather, isUnknown } from './store/slices/weaterSlice';
import axios from 'axios';
import { Content } from './components/content';
import moment from 'moment';
import { NotFoundCity } from './components/NotFoundCity';

function App() {
  const dispatch = useAppDispatch();
  const cityByLatLot = useAppSelector(city);
  const cityIsUnknown = useAppSelector(isUnknown);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function(position) {
      console.log(position)
      const { data } = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}%2C${position.coords.longitude}&key=${process.env.REACT_APP_GEOCODING_API_KEY}`)
      const result = data.results[0];
      const city = result.components.city;
      dispatch(setCity(city))
    });
  }, []);

  useEffect(() => {
    if(cityByLatLot) {
      axios.get(`${process.env.REACT_APP_BASE_URL}/weather?q=${cityByLatLot}&units=metric&appid=009f5b6f5c69e3593ecb8118bf2dc807`)
        .then(({ data: response }) => {
          dispatch(setCurrentWeatherTemp({
            maxTemp: response.main.temp_max,
            date: moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
            minTemp: response.main.temp_min,
            temp: response.main.temp,
            desc: response.weather[0].description,
            tempIcon: `${process.env.REACT_APP_ICON_URL}/${response.weather[0].icon}.png`
          }))
        });
      axios.get(`${process.env.REACT_APP_BASE_URL}/forecast?q=${cityByLatLot}&units=metric&appid=009f5b6f5c69e3593ecb8118bf2dc807`)
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
    }
  }, [cityByLatLot]);

  return (
    <div className="App">
      <SearchBar />
      {cityIsUnknown ? <NotFoundCity /> : 
        <Content />
      }
    </div>
  );
}

export default App;
