type weatherTemp = {
  maxTemp: number
  minTemp: number
  temp: number
  tempIcon: string
  desc: string
  date: string
}

interface Weater {
  nextFiveDays?: weatherTemp[],
  country: string,
  city: string,
  isCelsius: boolean,
  isUnknownCity: boolean,
  currentWeatherTemp: weatherTemp,
}
