import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TempUnits } from '../../types/enums';
import { RootState } from '../';

const initialState: Weater & { tempUnit: TempUnits} = {
  nextFiveDays: [],
  currentWeatherTemp: {
    maxTemp: 0,
    minTemp: 0,
    temp: 0,
    desc: '',
    date: '',
    tempIcon: ''
  },
  country: '',
  city: '',
  tempUnit: TempUnits.celsius,
  isCelsius: true,
  isUnknownCity: true,
}

const weaterSlice = createSlice({ 
  name: 'weater',
  initialState,
  reducers: {
    selectDay: (state, action) => {
      console.log(state, action)
    },
    toggleTempUnit: (state) => {
      state.isCelsius = !state.isCelsius
      state.tempUnit = state.tempUnit === TempUnits.celsius ? TempUnits.fahrenheit : TempUnits.celsius
    },
    setCurrentWeatherTemp: (state, action: PayloadAction<weatherTemp>) => {
      state.currentWeatherTemp = action.payload;
    },
    setNextFiveDaysWeather: (state, action: PayloadAction<weatherTemp[]>) => {
      state.nextFiveDays = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCityIsUnknown: (state, action) => {
      state.isUnknownCity = action.payload;
    }
  }
 })

export const { setCityIsUnknown, selectDay, toggleTempUnit, setCity, setCurrentWeatherTemp, setNextFiveDaysWeather } = weaterSlice.actions;
export const tempUnit = (state: RootState) => state.weater.tempUnit;
export const isCheckedAsCelsius = (state: RootState) => state.weater.isCelsius;
export const city = (state: RootState) => state.weater.city;
export const currentWeather = (state: RootState) => state.weater.currentWeatherTemp;
export const nextFiveDaysWeather = (state: RootState) => state.weater.nextFiveDays;
export const isUnknown = (state: RootState) => state.weater.isUnknownCity;
export default weaterSlice.reducer;